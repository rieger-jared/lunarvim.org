local M = {}

local in_headless = #vim.api.nvim_list_uis() == 0
local supported_languages = require("lvim.config.supported_languages")

local min_supported_languages_list = {
	"go",
	"java",
	"javascript",
	"json",
	"julia",
	"lua",
	"powershell",
	"python",
	"ruby",
	"rust",
	"scala",
	"typescript",
	"vue",
}

local function generate_docs(file, data)
	file = file or vim.fn.expand("%")
	local writer = io.open(file, "a")
	writer:write(table.concat(data, "\n"))
	writer:close()
end

function M.get_lsp_info(ft)
	ft = ft or vim.fn.expand("%:t:r")
	local ft_map = require("nvim-lsp-installer._generated.filetype_map")
	local supported_servers = ft_map[ft] or {}
	if #supported_servers == 0 then
		return {}
	end

	local data = {
		"### Supported language servers",
		"",
		"```lua",
		vim.inspect(supported_servers),
		"```",
		"",
	}
	if not in_headless then
		vim.api.nvim_command("let @+ = '" .. data .. "'")
		vim.fn.execute("put")
	end
	return data
end

function M.get_formatters_info(ft)
	ft = ft or vim.fn.expand("%:t:r")
	local null_ls_formatters = require("lvim.lsp.null-ls.formatters")
	local supported_formatters = null_ls_formatters.list_available(ft)
	if vim.tbl_isempty(supported_formatters) then
		return {}
	end
	local data = {
		"### Supported formatters",
		"",
		"```lua",
		vim.inspect(supported_formatters),
		"```",
		"",
	}
	if not in_headless then
		vim.api.nvim_command("let @+ = '" .. data .. "'")
		vim.fn.execute("put")
	end
	return data
end

function M.get_linters_info(ft)
	ft = ft or vim.fn.expand("%:t:r")
	local null_linters = require("lvim.lsp.null-ls.linters")
	local supported_linters = null_linters.list_available(ft)
	if vim.tbl_isempty(supported_linters) then
		return {}
	end
	local data = {
		"### Supported linters",
		"",
		"```lua",
		vim.inspect(supported_linters),
		"```",
		"",
	}
	if not in_headless then
		vim.api.nvim_command("let @+ = '" .. data .. "'")
		vim.fn.execute("put")
	end
	return data
end

function M.generate_docs_languages(list)
	for _, entry in ipairs(list) do
		local file = "docs/languages/" .. entry .. ".md"
		generate_docs(file, M.get_lsp_info(entry))
		generate_docs(file, M.get_formatters_info(entry))
		generate_docs(file, M.get_linters_info(entry))
	end
end

function M.generate_global_docs_languages(list)
	local file = "docs/languages/supported.md"
	for _, entry in ipairs(list) do
		local info = { "## " .. entry, "" }
		local main = {}
		vim.list_extend(main, M.get_lsp_info(entry))
		vim.list_extend(main, M.get_formatters_info(entry))
		vim.list_extend(main, M.get_linters_info(entry))
		if #main > 0 then
			vim.list_extend(info, main)
			vim.list_extend(info, { "" })
			generate_docs(file, info)
		end
	end
end

function M.generate_supported_languages_table(list)
	local utils = require("lvim.utils")
	local servers_map = require("nvim-lsp-installer._generated.filetype_map")
	local linters = require("lvim.lsp.null-ls.linters")
	local formatters = require("lvim.lsp.null-ls.formatters")

	local supported_languages_info = {}

	for _, entry in ipairs(list) do
		table.insert(supported_languages_info, {
			language = entry,
			servers = servers_map[entry] or nil,
			linters = #linters.list_available(entry) > 0 and linters.list_available(entry) or nil,
			formatters = #formatters.list_available(entry) > 0 and formatters.list_available(entry) or nil,
		})
	end
	utils.write_file("supported.lua", "return " .. vim.inspect(supported_languages_info), "w")
	local info_json = vim.json.encode(supported_languages_info)

	utils.write_file("supported.json", info_json, "w")
end

-- M.generate_supported_languages_table()
-- M.generate_docs_languages(supported_languages)
M.generate_global_docs_languages(supported_languages)

return M
