"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[9639],{3159:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-293b0bbf",path:"/01-installing.html",title:"Installation",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Prerequisites",slug:"prerequisites",children:[]},{level:2,title:"Stable",slug:"stable",children:[]},{level:2,title:"Rolling",slug:"rolling",children:[]},{level:2,title:"Tips for users in Mainland China",slug:"tips-for-users-in-mainland-china",children:[]},{level:2,title:"Uninstall",slug:"uninstall",children:[]}],filePathRelative:"01-installing.md",git:{updatedTime:1637762508e3,contributors:[{name:"jamessouth",email:"jamesdanielsouth@gmail.com",commits:9},{name:"rebuilt",email:"memoryman51@hotmail.com",commits:8},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:4},{name:"Abouzar Parvan",email:"abzcoding@users.noreply.github.com",commits:3},{name:"Chris",email:"chris@macbook.local",commits:2},{name:"Jan Bronicki",email:"janbronicki@gmail.com",commits:2},{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:2},{name:"11backslashes",email:"reversesolidi@protonmail.com",commits:1},{name:"Binx",email:"68950943+Binx-Codes@users.noreply.github.com",commits:1},{name:"Binx-Codes",email:"Devchou2008@gmail.com",commits:1},{name:"BrightXiaoHan",email:"beatmight@gmail.com",commits:1},{name:"Chris",email:"chrisatmachine@gmail.com",commits:1},{name:"Kid",email:"44045911+kidonng@users.noreply.github.com",commits:1},{name:"Shivom Srivastava",email:"71770229+Guchii@users.noreply.github.com",commits:1}]}}},5763:(n,a,e)=>{e.r(a),e.d(a,{default:()=>R});var s=e(6252);const l=(0,s._)("h1",{id:"installation",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,s.Uk)(" Installation")],-1),i=(0,s._)("h2",{id:"prerequisites",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),(0,s.Uk)(" Prerequisites")],-1),t=(0,s.Uk)("Make sure you have installed the latest version of "),r={href:"https://github.com/neovim/neovim/releases/tag/v0.5.0",target:"_blank",rel:"noopener noreferrer"},o=(0,s._)("code",null,"Neovim 0.5",-1),c=(0,s.Uk)("."),u=(0,s._)("li",null,[(0,s.Uk)("Have "),(0,s._)("code",null,"npm"),(0,s.Uk)(", "),(0,s._)("code",null,"node"),(0,s.Uk)(" and "),(0,s._)("code",null,"cargo"),(0,s.Uk)(" installed on your system.")],-1),m={href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("Resolve "),h=(0,s._)("code",null,"EACCES",-1),d=(0,s.Uk)(" permissions when installing packages globally"),b=(0,s.Uk)(" to avoid error when installing packages with npm."),g=(0,s.uE)('<h1 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h1><p>There are a few ways to install LunarVim.</p><h2 id="stable" tabindex="-1"><a class="header-anchor" href="#stable" aria-hidden="true">#</a> Stable</h2><p>No alarm or surprise:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="rolling" tabindex="-1"><a class="header-anchor" href="#rolling" aria-hidden="true">#</a> Rolling</h2><p>All the new features with all the new bugs:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">LV_BRANCH</span><span class="token operator">=</span>rolling <span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/rolling/utils/installer/install.sh<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can use this helper script to get the latest neovim binary as well:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/LunarVim/LunarVim/rolling/utils/installer/install-neovim-from-release<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',10),k=(0,s.Uk)("Make sure to check the "),v=(0,s.Uk)("troubleshooting"),f=(0,s.Uk)(" section if you encounter any problem."),_=(0,s._)("h2",{id:"tips-for-users-in-mainland-china",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#tips-for-users-in-mainland-china","aria-hidden":"true"},"#"),(0,s.Uk)(" Tips for users in Mainland China")],-1),x=(0,s._)("p",null,"Connection issues may cause installation failures. To avoid them when downloading content from GitHub, please use a mirror.",-1),y=(0,s.Uk)("For example, "),w={href:"https://mirror.ghproxy.com/",target:"_blank",rel:"noopener noreferrer"},U=(0,s.Uk)("GitHub Proxy Mirror"),C=(0,s.Uk)(" is a fast mirror for accessing github content. Add the following lines to "),L=(0,s._)("code",null,"/etc/hosts",-1),V=(0,s.Uk)(" to accelerate your installation."),B=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mirror.ghproxy.com github.com\nmirror.ghproxy.com raw.githubusercontent.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2><p>You can remove LunarVim (including the configuration files) using the bundled <code>uninstall</code> script</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> ~/.local/share/lunarvim/lvim/utils/installer/uninstall.sh\n<span class="token comment"># or</span>\n<span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/uninstall.sh<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',4),H={},R=(0,e(3744).Z)(H,[["render",function(n,a){const e=(0,s.up)("OutboundLink"),H=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,i,(0,s._)("ul",null,[(0,s._)("li",null,[t,(0,s._)("a",r,[o,(0,s.Wm)(e)]),c]),u,(0,s._)("li",null,[(0,s._)("a",m,[p,h,d,(0,s.Wm)(e)]),b])]),g,(0,s._)("p",null,[k,(0,s.Wm)(H,{to:"/troubleshooting/"},{default:(0,s.w5)((()=>[v])),_:1}),f]),_,x,(0,s._)("p",null,[y,(0,s._)("a",w,[U,(0,s.Wm)(e)]),C,L,V]),B],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[e,s]of a)n[e]=s;return n}}}]);