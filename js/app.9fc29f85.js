(function(){"use strict";var t={417:function(t,a,e){var s=e(963),o=e(252);const i=(0,o._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),r=(0,o._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),l=(0,o._)("link",{href:"https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap",rel:"stylesheet"},null,-1),c=(0,o._)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"},null,-1);function n(t,a,e,s,n,d){const p=(0,o.up)("NavHeader"),h=(0,o.up)("router-view"),v=(0,o.up)("ContactFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,r,l,c,(0,o.Wm)(p),(0,o.Wm)(h),(0,o.Wm)(v)],64)}const d=(0,o._)("div",{class:"row bg-primary",style:{height:"1.5vh"}}," ",-1),p={class:"wrapper"},h=(0,o._)("h5",{class:"text-uppercase text-dark fw-semibold m-0 align-middle"},"Asyrafbilal Fadhila Bhinar Jaya",-1),v=(0,o._)("input",{type:"checkbox",name:"",id:"toggle"},null,-1),m={key:0},g=(0,o._)("i",{class:"material-icons"}," expand_less ",-1),u=[g],f={key:1,class:"text-primary"},b=(0,o._)("i",{class:"material-icons"}," expand_more ",-1),w=[b],y={class:"menu"},x={class:"m-0 p-0"},_={class:"w-100 p-2 m1"},k=(0,o._)("p",{class:"text-uppercase fw-normal m-auto"},"Work",-1),z={class:"w-100 p-2"},j=(0,o._)("p",{class:"text-uppercase fw-normal m-auto"},"About",-1);function C(t,a,e,s,i,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[d,(0,o._)("div",p,[(0,o._)("nav",null,[(0,o.Wm)(l,{to:"/portofolio-m/",exact:"",class:"text-decoration-none logo"},{default:(0,o.w5)((()=>[h])),_:1}),v,(0,o._)("label",{for:"toggle",onClick:a[0]||(a[0]=(...t)=>r.expand&&r.expand(...t))},[i.expanded?((0,o.wg)(),(0,o.iD)("span",m,u)):((0,o.wg)(),(0,o.iD)("span",f,w))]),(0,o._)("div",y,[(0,o._)("ul",x,[(0,o._)("li",_,[(0,o.Wm)(l,{to:"/portofolio-m/",exact:"",class:"text-decoration-none text-center txt-black w-100",onClick:r.close},{default:(0,o.w5)((()=>[k])),_:1},8,["onClick"])]),(0,o._)("li",z,[(0,o.Wm)(l,{to:"/portofolio-m/about",exact:"",class:"text-decoration-none text-center txt-black w-100",onClick:r.close},{default:(0,o.w5)((()=>[j])),_:1},8,["onClick"])])])])])])],64)}var H={name:"NavHeader",props:{msg:String},data(){return{expanded:!1}},methods:{expand(){this.expanded=!this.expanded},close(){document.getElementById("toggle").checked=!1,this.expand()}}},D=e(744);const M=(0,D.Z)(H,[["render",C]]);var A=M;const E={class:"row bg-light mt-5 p-5"},F=(0,o.uE)('<div class="col-12 text-center mg-10"><h3> Say hi, and let&#39;s chat! </h3><p> Shoot me an email at <span class="text-primary">kenjisevenvold@gmail.com</span> or find me at </p><div class="row"><div class="col-12"><a href="https://www.linkedin.com/in/asyrafbilal-fadhila-bhinar-jaya-496758222/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0D6EFD" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg></a>  <a href="https://github.com/AsyrafbilalFBJ/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0D6EFD" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0D6EFD" class="bi bi-dribbble" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"></path></svg></a>  <a href="https://drive.google.com/file/d/1sj0CQ9JUXsVIvlRx7fjMrEtrR0ZvRI7u/view?usp=sharing" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0D6EFD" class="bi bi-file-earmark-person" viewBox="0 0 16 16"><path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"></path></svg></a></div></div></div><div class="col-12 text-center"><p> ©Copyright 2023. Asyrafbilal Fadhila Bhinar Jaya </p></div>',2),S=[F];function P(t,a,e,s,i,r){return(0,o.wg)(),(0,o.iD)("div",E,S)}var q={name:"ContactFooter",props:{msg:String}};const V=(0,D.Z)(q,[["render",P]]);var B=V,W={name:"App",components:{NavHeader:A,ContactFooter:B}};const T=(0,D.Z)(W,[["render",n]]);var G=T,U=(e(734),e(119));function I(t,a,e,s,i,r){const l=(0,o.up)("WorkGreet"),c=(0,o.up)("SomeStuff");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o.Wm)(c)],64)}var O=e.p+"img/photo.f1d060de.png";const J={class:"mg-25"},Z=(0,o.uE)('<div class="row m-5"><div class="col-1"></div><div class="col-1"></div><div class="col-lg-1 col-sm-12 m-0 text-center"><img src="'+O+'" width="100" height="100" alt="" class="rounded"></div><div class="col-lg-7 col-sm-12 m-auto"><h3 class="fw-semibold"> Hi! I&#39;m Asyraf, a <span class="text-primary">Front End Web Developer</span>. Currently is studying Software Engineering in Telkom University. </h3></div><div class="col-1"></div><div class="col-1"></div></div>',1),L=[Z];function R(t,a,e,s,i,r){return(0,o.wg)(),(0,o.iD)("div",J,L)}var N={name:"WorkGreet",props:{msg:String}};const Y=(0,D.Z)(N,[["render",R]]);var K=Y,X=e.p+"img/stuff1.3f7b7167.png",Q=e.p+"img/stuff3.7d24f687.png",$=e.p+"img/stuff4.20887fb8.png";const tt={class:"row mt-0 ms-5 me-5 mb-5"},at={class:"col-12"},et={class:"row row-cols-1 row-cols-md-3 g-4"},st={class:"col"},ot={class:"card h-100 sd border-0"},it=(0,o._)("img",{src:X,class:"card-img-top",alt:""},null,-1),rt={class:"card-body"},lt=(0,o._)("h5",{class:"card-title fw-semibold text-dark"},"E-commerce Product Display",-1),ct=(0,o.uE)('<p class="card-text m-0"> Website that display product which category man&#39;s clothing and woman&#39;s clothing. </p><table class="mb-3"><tr><td><a href="https://asyrafbilalfbj.github.io/Ecommerce-Product_Display/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0D6EFD" class="bi bi-globe" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path></svg></a></td><td>   </td><td><a href="https://github.com/AsyrafbilalFBJ/Ecommerce-Product_Display" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0D6EFD" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></td></tr></table><table><tr><td><span class="badge text-bg-primary"> Vue.js </span></td><td><span class="badge text-bg-primary"> Vanilla CSS </span></td><td><span class="badge text-bg-primary"> API Integration </span></td></tr></table>',3),nt={class:"col"},dt={class:"card h-100 sd border-0"},pt=(0,o._)("img",{src:Q,class:"card-img-top",alt:""},null,-1),ht={class:"card-body"},vt=(0,o._)("h5",{class:"card-title fw-semibold text-dark"}," Unit 3C (Computing Certification Center) ",-1),mt=(0,o.uE)('<p class="card-text m-0"> Website for computing certification. People has to accomplish courses to get certificate. </p><table class="mb-3"><tr><td><a href="https://asyrafbilalfbj.github.io/Unit_3c%205%20done%20front%20end%20(html,css,jquery,json,ajax)/index.html" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0D6EFD" class="bi bi-globe" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path></svg></a></td><td>   </td><td><a href="https://github.com/AsyrafbilalFBJ/AsyrafbilalFBJ.github.io/tree/main/Unit_3c%205%20done%20front%20end%20(html%2Ccss%2Cjquery%2Cjson%2Cajax)" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0D6EFD" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></td></tr></table><table><tr><td><span class="badge text-bg-primary"> HTML </span></td><td><span class="badge text-bg-primary"> Javascript </span></td><td><span class="badge text-bg-primary"> Bootstrap </span></td></tr></table>',3),gt={class:"col"},ut={class:"card h-100 sd border-0"},ft=(0,o._)("img",{src:$,class:"card-img-top",alt:""},null,-1),bt={class:"card-body"},wt=(0,o._)("h5",{class:"card-title fw-semibold text-dark"}," Gadelog (Gadget Catalog) ",-1),yt=(0,o.uE)('<p class="card-text m-0"> Website that will display catalog of smartphones and laptops. </p><table class="mb-3"><tr><td><a href="https://asyrafbilalfbj.github.io/Gadget-Catalog/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0D6EFD" class="bi bi-globe" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path></svg></a></td><td>   </td><td><a href="https://github.com/AsyrafbilalFBJ/Gadget-Catalog" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0D6EFD" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></td></tr></table><table><tr><td><span class="badge text-bg-primary"> Node.js </span></td><td><span class="badge text-bg-primary"> Bootstrap </span></td><td><span class="badge text-bg-primary"> API Integration </span></td></tr></table>',3);function xt(t,a,e,s,i,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",tt,[(0,o._)("div",at,[(0,o._)("div",et,[(0,o._)("div",st,[(0,o._)("div",ot,[it,(0,o._)("div",rt,[(0,o.Wm)(l,{to:"/portofolio-m/ProductDisplay",exact:"",class:"text-decoration-none"},{default:(0,o.w5)((()=>[lt])),_:1}),ct])])]),(0,o._)("div",nt,[(0,o._)("div",dt,[pt,(0,o._)("div",ht,[(0,o.Wm)(l,{to:"/portofolio-m/Unit3C",exact:"",class:"text-decoration-none"},{default:(0,o.w5)((()=>[vt])),_:1}),mt])])]),(0,o._)("div",gt,[(0,o._)("div",ut,[ft,(0,o._)("div",bt,[(0,o.Wm)(l,{to:"/portofolio-m/GadgetCatalog",exact:"",class:"text-decoration-none"},{default:(0,o.w5)((()=>[wt])),_:1}),yt])])])])])])}var _t={name:"SomeStuff",props:{msg:String}};const kt=(0,D.Z)(_t,[["render",xt]]);var zt=kt,jt={name:"HomePage",components:{WorkGreet:K,SomeStuff:zt}};const Ct=(0,D.Z)(jt,[["render",I]]);var Ht=Ct,Dt=e.p+"img/asyraf.39055381.jpg";const Mt={class:"row m-5"},At=(0,o.uE)('<div class="col-2"></div><div class="col-lg-3 col-md-10 mb-3 me-3"><img src="'+Dt+'" width="300" height="300" alt="" class="rounded-circle ol"></div><div class="col-lg-5 col-md-10"><h3 class=""> Asyrafbilal Fadhila Bhinar Jaya </h3><h5> Front End Web Developer </h5><p> 5th semester student of Software Engineering from Telkom University with internship experience as a Web Developer. Trained in building websites using frameworks and libraries such as Laravel, Vue.js, React.js and others. Currently pursuing the field of Front End Web Development. Dedicated to become a Senior Front End Web Developer. </p><h5> Experience </h5><ul><li> Project-Based Intern : Front End Developer Virtual Internship Experience Core Initiative </li><li> Software Developer at Telkomsel Surakarta as Internship </li></ul><h5> Education </h5><ul><li> SMK Telkom Malang (Rekayasa Perangkat Lunak) </li><li> Universitas Telkom (S1 Rekayasa Perangkat Lunak) </li></ul></div><div class="col-2"></div>',4),Et=[At];function Ft(t,a,e,s,i,r){return(0,o.wg)(),(0,o.iD)("div",Mt,Et)}var St={name:"HomePage",components:{}};const Pt=(0,D.Z)(St,[["render",Ft]]);var qt=Pt,Vt=e.p+"img/stuff1s.60118b9b.png",Bt=e.p+"img/design_stuff1.919fed28.png";const Wt=(0,o.uE)('<div class="p-5 mb-5 bg-light"><div class="row"><div class="col-2">   </div><div class="col-lg-4 col-sm-8 m-auto"><h3 class=""> E-commerce Product Display </h3></div><div class="col-lg-4 col-sm-8"><img src="'+Vt+'" class="w-100" alt=""></div><div class="col-2">   </div></div></div><div class="row"><div class="col-2"></div><div class="col-4"><h5 class=""> Project Description </h5></div><div class="col-4"> This project is a web application that displays two product categories, namely man&#39;s clothing and woman&#39;s clothing. If other than these two categories, the product will not be displayed. </div><div class="col-2"></div></div><br><div class="row"><div class="col-2"></div><div class="col-4"><h5 class=""> Project Goals </h5></div><div class="col-4"> Web application that has a display according to the existing design and can retrieve data from the provided API. The products displayed are from two categories, namely man&#39;s clothing and woman&#39;s clothing. Users can see the various products displayed by pressing Next Product. </div><div class="col-2"></div></div><br><div class="row"><div class="col-2"></div><div class="col-8 m-auto"><h5 class=""> Project Components </h5><div><a href="https://www.figma.com/file/x1bkO3alpmGQFtysh9Lmn7/Task-5-Ecommerce?t=X5xC13nUBxLyXkLG-6" class="fw-semibold text-primary text-decoration-none"> Desain </a><div><img src="'+Bt+'" alt="" class="w-100"></div></div><div><a href="https://fakestoreapi.com/products" class="fw-semibold text-primary text-decoration-none"> API </a><h6> Example code </h6><div class="bg-light"><pre><code>\n    fetch(&#39;https://fakestoreapi.com/products/1&#39;)\n        .then(res=&gt;res.json())\n        .then(json=&gt;console.log(json))\n    </code></pre></div><h6> Output </h6><div class="bg-light"><pre><code>\n    {\n        &quot;id&quot;: 1,\n        &quot;title&quot;: &quot;Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops&quot;,\n        &quot;price&quot;: 109.95,\n        &quot;description&quot;: &quot;Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday&quot;,\n        &quot;category&quot;: &quot;men&#39;s clothing&quot;,\n        &quot;image&quot;: &quot;https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&quot;,\n        &quot;rating&quot;: {\n            &quot;rate&quot;: 3.9,\n            &quot;count&quot;: 120\n        }\n    }\n    </code></pre></div></div></div><div class="col-2"></div></div><br><div class="row mt-5"><div class="col-1"></div><div class="col-10 m-auto"><div class="row"><div class="col"><hr><h5 class="text-center"> Final Result </h5></div></div><div class="ratio ratio-16x9"><iframe src="https://asyrafbilalfbj.github.io/Ecommerce-Product_Display/" width="100%" height="100%">\r\n                    &lt;p&gt;Your browser does not support iframes.&lt;/p&gt;\r\n                </iframe></div><div class="text-center mt-3"><a href="https://asyrafbilalfbj.github.io/Ecommerce-Product_Display/" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0"> Try this out! </a>  <a href="https://github.com/AsyrafbilalFBJ/Ecommerce-Product_Display" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0"> Source code </a></div></div><div class="col-1"></div></div>',8);function Tt(t,a,e,s,o,i){return Wt}var Gt={name:"FirstStuff",components:{}};const Ut=(0,D.Z)(Gt,[["render",Tt]]);var It=Ut,Ot=e.p+"img/stuff2s.7ae26569.png",Jt=e.p+"img/design_stuff2.f0cb954b.png";const Zt=(0,o.uE)('<div class="p-5 mb-5 bg-light"><div class="row"><div class="col-2">   </div><div class="col-lg-4 col-sm-8 m-auto"><h3 class=""> Unit 3C (Computing Certification Center) </h3></div><div class="col-lg-4 col-sm-8"><img src="'+Ot+'" class="w-100" alt=""></div><div class="col-2">   </div></div></div><div class="row"><div class="col-2"></div><div class="col-4"><h5 class=""> Project Description </h5></div><div class="col-4"> This project is a web application provider of computing courses and certification services for students and other general users. </div><div class="col-2"></div></div><br><div class="row"><div class="col-2"></div><div class="col-4"><h5 class=""> Project Goals </h5></div><div class="col-4"> Web application that has a list of computing certifications. Mentors can add computing courses and Users can enroll in available courses. Users will get a certificate if they pass the completed course </div><div class="col-2"></div></div><br><div class="row"><div class="col-2"></div><div class="col-8 m-auto"><h5 class=""> Project Components </h5><div><a href="https://www.figma.com/file/KvgaPmN55qW206lRfwZN2r/Untitled?node-id=0%3A1&amp;t=fPbNkZmbkvgNx5Ja-1" class="fw-semibold text-primary text-decoration-none"> Desain </a><div><img src="'+Jt+'" alt="" class="w-100"></div></div></div><div class="col-2"></div></div><br><div class="row mt-5"><div class="col-1"></div><div class="col-10 m-auto"><div class="row"><div class="col"><hr><h5 class="text-center"> Final Result </h5></div></div><div class="ratio ratio-16x9"><iframe src="https://asyrafbilalfbj.github.io/Unit_3c%205%20done%20front%20end%20(html,css,jquery,json,ajax)/index.html" width="100%" height="100%">\r\n                    &lt;p&gt;Your browser does not support iframes.&lt;/p&gt;\r\n                </iframe></div><div class="text-center mt-3"><a href="https://asyrafbilalfbj.github.io/Unit_3c%205%20done%20front%20end%20(html,css,jquery,json,ajax)/index.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0"> Try this out! </a>  <a href="https://github.com/AsyrafbilalFBJ/AsyrafbilalFBJ.github.io/tree/main/Unit_3c%205%20done%20front%20end%20(html%2Ccss%2Cjquery%2Cjson%2Cajax)" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0"> Source code </a></div></div><div class="col-1"></div></div>',8);function Lt(t,a,e,s,o,i){return Zt}var Rt={name:"SecondStuff",components:{}};const Nt=(0,D.Z)(Rt,[["render",Lt]]);var Yt=Nt,Kt=e.p+"img/stuff3s.6b5f5c07.png";const Xt=(0,o.uE)('<div class="p-5 mb-5 bg-light"><div class="row"><div class="col-2">   </div><div class="col-lg-4 col-sm-8 m-auto"><h3 class=""> Gadelog (Gadget Catalog) </h3></div><div class="col-lg-4 col-sm-8"><img src="'+Kt+'" class="w-100" alt=""></div><div class="col-2">   </div></div></div><div class="row"><div class="col-2"></div><div class="col-4"><h5 class=""> Project Description </h5></div><div class="col-4"> This project is a web application that displays items based on the selected category. The available categories are Smartphones and Laptops. </div><div class="col-2"></div></div><br><div class="row"><div class="col-2"></div><div class="col-4"><h5 class=""> Project Goals </h5></div><div class="col-4"> A web application that can display items from the selected category. There are two categories namely smartphones and laptops. the user can select one of these categories and press Find to display 5 items in each category. </div><div class="col-2"></div></div><br><div class="row mt-5"><div class="col-1"></div><div class="col-10 m-auto"><div class="row"><div class="col"><hr><h5 class="text-center"> Final Result </h5></div></div><div class="ratio ratio-16x9"><iframe src="https://asyrafbilalfbj.github.io/Gadget-Catalog/" width="100%" height="100%">\r\n                    &lt;p&gt;Your browser does not support iframes.&lt;/p&gt;\r\n                </iframe></div><div class="text-center mt-3"><a href="https://asyrafbilalfbj.github.io/Gadget-Catalog/" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0"> Try this out! </a>  <a href="https://github.com/AsyrafbilalFBJ/Gadget-Catalog" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0"> Source code </a></div></div><div class="col-1"></div></div>',6);function Qt(t,a,e,s,o,i){return Xt}var $t={name:"ThirdStuff",components:{}};const ta=(0,D.Z)($t,[["render",Qt]]);var aa=ta;const ea=[{path:"/portofolio-m/",component:Ht},{path:"/portofolio-m/about",component:qt},{path:"/portofolio-m/ProductDisplay",component:It},{path:"/portofolio-m/Unit3C",component:Yt},{path:"/portofolio-m/GadgetCatalog",component:aa}],sa=(0,U.p7)({history:(0,U.PO)(),base:"/portofolio-m/",routes:ea,scrollBehavior(){return{top:0}}});var oa=sa;(0,s.ri)(G).config.productionTip=!1,(0,s.ri)(G).use(oa).mount("#app")}},a={};function e(s){var o=a[s];if(void 0!==o)return o.exports;var i=a[s]={exports:{}};return t[s].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(a,s,o,i){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],o=t[d][1],i=t[d][2];for(var l=!0,c=0;c<s.length;c++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](s[c])}))?s.splice(c--,1):(l=!1,i<r&&(r=i));if(l){t.splice(d--,1);var n=o();void 0!==n&&(a=n)}}return a}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,o,i]}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/portofolio-m/"}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var o,i,r=s[0],l=s[1],c=s[2],n=0;if(r.some((function(a){return 0!==t[a]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(c)var d=c(e)}for(a&&a(s);n<r.length;n++)i=r[n],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},s=self["webpackChunkportofolio_m"]=self["webpackChunkportofolio_m"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(417)}));s=e.O(s)})();
//# sourceMappingURL=app.9fc29f85.js.map