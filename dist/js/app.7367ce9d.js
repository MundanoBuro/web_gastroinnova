(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,v=[];d<r.length;d++)o=r[d],s[o]&&v.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0e1e":function(t,e,i){},"12b3":function(t,e,i){"use strict";var n=i("4025"),s=i.n(n);s.a},"2f08":function(t,e,i){},"35da":function(t,e,i){},4025:function(t,e,i){},4607:function(t,e,i){"use strict";var n=i("9523"),s=i.n(n);s.a},"4bc6":function(t,e,i){"use strict";var n=i("ce11"),s=i.n(n);s.a},5031:function(t,e,i){},"56b9":function(t,e,i){t.exports=i.p+"img/gi-header-logo.157d9aa6.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-loading"),i("v-header"),i("router-view"),i("v-footer")],1)},a=[],o=i("0284"),r=i.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-component"},[n("div",{staticClass:"desktop"},[n("header",[n("div",{staticClass:"wrapper"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:i("56b9")}})]),n("ul",{staticClass:"pages"},[n("li",{class:{hover:t.MENU.about},on:{mouseenter:function(e){t.setMenuHover("about",!0)},mouseleave:function(e){t.setMenuHover("about",!1)}}},[n("div",{staticClass:"link-title"},[n("img",{attrs:{src:i("b9b7")}}),n("router-link",{attrs:{to:"/about"}},[t._v("NOSOTROS")])],1),n("div",{staticClass:"link-sublinks"},[n("div",{staticClass:"link-sublink"},[n("router-link",{attrs:{to:"/about/mission"}},[t._v("MISIÓN Y VISIÓN")])],1),n("div",{staticClass:"link-sublink"},[n("router-link",{attrs:{to:"/about/history"}},[t._v("HISTORIA")])],1),n("div",{staticClass:"link-sublink"},[n("router-link",{attrs:{to:"/about/ourpeople"}},[t._v("NUESTRA GENTE")])],1)])]),n("li",{class:{hover:t.MENU.business},on:{mouseenter:function(e){t.setMenuHover("business",!0)},mouseleave:function(e){t.setMenuHover("business",!1)}}},[n("div",{staticClass:"link-title"},[n("img",{attrs:{src:i("b9b7")}}),n("router-link",{attrs:{to:"/business"}},[t._v("LÍNEAS DE NEGOCIO")])],1),t._m(0)]),n("li",{class:{hover:t.MENU.info},on:{mouseenter:function(e){t.setMenuHover("info",!0)},mouseleave:function(e){t.setMenuHover("info",!1)}}},[n("div",{staticClass:"link-title"},[n("img",{attrs:{src:i("b9b7")}}),n("router-link",{attrs:{to:"/info"}},[t._v("INFORMACIÓN FINANCIERA")])],1),t._m(1)]),n("li",{class:{hover:t.MENU.clients},on:{mouseenter:function(e){t.setMenuHover("clients",!0)},mouseleave:function(e){t.setMenuHover("clients",!1)}}},[n("div",{staticClass:"link-title"},[n("img",{attrs:{src:i("b9b7")}}),n("router-link",{attrs:{to:"/clients"}},[t._v("CLIENTES")])],1)]),n("li",{class:{hover:t.MENU.contact},on:{mouseenter:function(e){t.setMenuHover("contact",!0)},mouseleave:function(e){t.setMenuHover("contact",!1)}}},[n("div",{staticClass:"link-title"},[n("img",{attrs:{src:i("b9b7")}}),n("router-link",{attrs:{to:"/contact"}},[t._v("CONTACTO")])],1)])])],1)])]),n("div",{staticClass:"mobile"},[n("header",{style:[t.isActive?{height:"20em"}:{height:"4em"}]},[n("div",{staticClass:"row logoAndButton"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:i("56b9")},on:{click:function(e){t.isActive=!1}}})]),n("burger-button",{attrs:{active:t.isActive,"bar-color":(t.isActive,"gray"),"bar-height":4,"bar-width":30},on:{click:function(e){t.isActive=!t.isActive}}})],1),n("div",{staticClass:"row"},[t.isActive?n("ul",{staticClass:"links"},[n("li",{on:{click:function(e){t.isActive=!t.isActive}}},[n("router-link",{attrs:{to:"/about"}},[t._v("NOSOTROS")])],1),n("li",{on:{click:function(e){t.isActive=!t.isActive}}},[n("router-link",{attrs:{to:"/business"}},[t._v("LÍNEAS DE NEGOCIO")])],1),n("li",{on:{click:function(e){t.isActive=!t.isActive}}},[n("router-link",{attrs:{to:"/info"}},[t._v("INFORMACIÓN FINANCIERA")])],1),n("li",{on:{click:function(e){t.isActive=!t.isActive}}},[n("router-link",{attrs:{to:"/clients"}},[t._v("CLIENTES")])],1),n("li",{on:{click:function(e){t.isActive=!t.isActive}}},[n("router-link",{attrs:{to:"/contact"}},[t._v("CONTACTO")])],1)]):t._e()])])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"link-sublinks"},[i("div",{staticClass:"link-sublink"},[t._v("DELIZ")]),i("div",{staticClass:"link-sublink"},[t._v("READY MEALS")]),i("div",{staticClass:"link-sublink"},[t._v("START-UPS GASTRONÓMICAS")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"link-sublinks"},[i("div",{staticClass:"link-sublink"},[t._v("TAMAÑO DEL MERCADO")]),i("div",{staticClass:"link-sublink"},[t._v("EVOLUCIÓN DEL MERCADO")]),i("div",{staticClass:"link-sublink"},[t._v("PROYECCIONES DEL MERCADO")])])}],u=i("410f"),d={name:"vHeader",components:{BurgerButton:u["a"]},methods:{setMenuHover:function(t,e){this.MENU[t]=e}},data:function(){return{isActive:!1,MENU:{about:!1,business:!1,info:!1,clients:!1,contact:!1}}}},v=d,m=(i("5fa5"),i("f211"),i("2877")),p=Object(m["a"])(v,c,l,!1,null,"72b2dc48",null);p.options.__file="header.vue";var f=p.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"row"},[i("div",{staticClass:"wrapper"},[i("router-link",{attrs:{to:"/terms"}},[t._v("TERMINOS")]),i("router-link",{attrs:{to:"/policy"}},[t._v("POLÍTICAS DE DATOS")])],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"wrapper"},[t._v("\n      © "+t._s(t.year)+" Gastroinnova.Todos los derechos reservados. Desarrollado por www.mundanoburo.com\n    ")])])])},h=[],A={name:"vFooter",data:function(){return{year:(new Date).getFullYear()}}},b=A,_=(i("c26f"),Object(m["a"])(b,g,h,!1,null,"6785a7a0",null));_.options.__file="footer.vue";var C=_.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.LOADING?n("div",{staticClass:"loading"},[n("img",{attrs:{src:i("d2f6")}})]):t._e()},y=[],k={name:"vLoading",created:function(){var t=this;setTimeout(function(){t.LOADING=!1},2500)},data:function(){return{LOADING:!0}}},S=k,I=(i("5d4a"),Object(m["a"])(S,E,y,!1,null,"2a3ad3dc",null));I.options.__file="loading.vue";var M=I.exports,w={name:"app",components:{vHeader:f,vFooter:C,vLoading:M},methods:{track:function(){Object(o["page"])("/")}},created:function(){},data:function(){return{}}},O=w,D=(i("7c55"),Object(m["a"])(O,s,a,!1,null,null,null));D.options.__file="App.vue";var x=D.exports,N=i("8c4f"),U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("yo soy ADMIN")])])}],T={},R=Object(m["a"])(T,U,j,!1,null,null,null);R.options.__file="Admin.vue";var F=R.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("v-slider"),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("v-cover")],1),i("div",{staticClass:"col"},[i("v-news")],1)])],1)},Y=[],L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"content"},[i("h2",[t._v("NEWS FEED")]),i("ul",t._l(t.news,function(e){return i("li",{key:e.id},[i("div",{staticClass:"col date"},[i("span",[t._v(" "+t._s(t._f("moment")(new Date,"YYYY/MM/DD"))+" ")]),i("br"),i("span",[t._v(" "+t._s(t._f("moment")(new Date,"hh:mm"))+" ")])]),i("div",{staticClass:"col text"},[t._v(t._s(e.text))])])}),0)])])])},G=[],Q={name:"vNews",created:function(){},data:function(){return{news:[{id:0,date:new Date,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna "},{id:1,date:new Date,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna "},{id:2,date:new Date,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna "},{id:3,date:new Date,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna "},{id:4,date:new Date,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna "},{id:5,date:new Date,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna "}]}}},Z=Q,K=(i("4607"),Object(m["a"])(Z,L,G,!1,null,"37b12a06",null));K.options.__file="news.vue";var H=K.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover"},[i("router-link",{attrs:{to:"/business"}},[i("img",{attrs:{src:t.cover.src}}),i("div",{staticClass:"title"},[i("img",{attrs:{src:"img/cover/div.png"}}),i("h1",[t._v(t._s(t.cover.title))])])])],1)},P=[],V={name:"vCover",created:function(){this.cover=this.getRandomCover()},methods:{getRandomCover:function(){var t=Math.floor(2*Math.random())+0;return this.covers[t]}},data:function(){return{cover:{},covers:[{src:"img/cover/cover1.jpg",title:"DLZ"},{src:"img/cover/cover2.jpg",title:"READY MEALS"},{src:"img/cover/cover3.jpg",title:"START UPS"}]}}},$=V,z=(i("7fe8"),Object(m["a"])($,J,P,!1,null,"54735588",null));z.options.__file="cover.vue";var W=z.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.images,function(t){return i("swiper-slide",{key:t.url},[i("img",{attrs:{src:t.url,alt:t.alt}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)},X=[],tt=(i("8aa5"),{name:"vSlider",created:function(){},data:function(){return{images:[{url:"img/slider/slide1-min.jpg",alt:"Slider"},{url:"img/slider/slide2-min.jpg",alt:"Slider"},{url:"img/slider/slide3-min.jpg",alt:"Slider"},{url:"img/slider/slide4-min.jpg",alt:"Slider"},{url:"img/slider/slide5-min.jpg",alt:"Slider"},{url:"img/slider/slide6-min.jpg",alt:"Slider"}],swiperOption:{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),et=tt,it=(i("12b3"),Object(m["a"])(et,q,X,!1,null,"5c6b435f",null));it.options.__file="slider.vue";var nt=it.exports,st={name:"home",components:{vCover:W,vNews:H,vSlider:nt},data:function(){return{}}},at=st,ot=(i("76bf"),Object(m["a"])(at,B,Y,!1,null,"f532b918",null));ot.options.__file="Home.vue";var rt=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("img",{staticClass:"banner",attrs:{src:t.bannerSrc}}),t._l(t.sections,function(e){return n("section",{key:e.id},[n("div",{staticClass:"title-block",class:{active:e.hover},on:{click:function(t){e.hover=!e.hover}}},[n("img",{staticClass:"title-block-div-green",attrs:{src:i("aa6b")}}),n("img",{staticClass:"title-block-div-yellow",attrs:{src:i("c7d8")}}),n("h3",[t._v(t._s(e.title))])]),n("div",{staticClass:"title-content"},[e.hover?n("div",[e.content?n(e.content,{tag:"component",attrs:{data:e.content}}):t._e()],1):t._e()])])})],2)},lt=[],ut=i("f13c"),dt=i.n(ut),vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mission",attrs:{id:"about-mission"}},[i("div",{staticClass:"col"},[i("img",{attrs:{src:"/img/about/mission1.jpg"}}),i("img",{attrs:{src:"/img/about/mission2.png"}}),i("img",{attrs:{src:"/img/about/mission3.jpg"}})]),t._m(0),t._m(1)])},mt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("h2",[t._v("MISIÓN")]),i("p",[t._v("Somos una compañía enfocada en la producción, distribución y comercialización de alimentos saludables, listos para el consumo, fabricados con procesos innovadores y de alta calidad.")]),i("h2",[t._v("VISIÓN")]),i("p",[t._v("Ser la compañía líder en el sector Gastronómico - Food Services en Colombia, con la creación de un portafolio de negocios que abarca la fabricación y venta de los productos preparados listos para consumir, la cadena más importante de restaurantes de alta calidad y bajo costo y el apoyo de proyectos Gastronómicos independientes.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col flexbox-center"},[i("p",{staticClass:"border-left-red"},[t._v("Somos una compañía en proceso de crecimiento sostenible y rentable, soportado en un modelo que mejora la calidad de vida de los consumidores.")])])}],pt=(i("b447"),{}),ft=Object(m["a"])(pt,vt,mt,!1,null,"5a2b7710",null);ft.options.__file="mission.vue";var gt=ft.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline-list",attrs:{id:"about-history"}},t._l(t.timeline,function(e){return i("div",{staticClass:"timeline-item"},["content"==e.type?i("div",{staticClass:"row"},[i("div",{staticClass:"col date",class:e.color},[t._v(" \n          "+t._s(e.year)+"\n        ")]),i("div",{staticClass:"col icon logo"},[i("img",{attrs:{src:e.iconSrc}})]),i("div",{staticClass:"col text",staticStyle:{"flex-grow":"1"}},[t._v(" "+t._s(e.text)+" ")])]):t._e(),"middle"==e.type?i("div",{staticClass:"row"},[i("div",{staticClass:"col icon div"},[i("img",{attrs:{src:e.iconSrc}})])]):t._e()])}),0)},At=[],bt={data:function(){return{timeline:[{type:"content",year:2015,color:"green",iconSrc:"/img/timeline/date1.png",text:"Gastroinnova SAS nace a finales de 2015 dedicada a la fabricación de comidas preparadas (Ready Meals), empacadas al vacío y pasteurizadas para conservar su frescura y sabor hasta por (90) días en refrigeración, utilizando tecnología MICVAC."},{type:"middle",iconSrc:"/img/timeline/div1.png"},{type:"content",color:"orange",year:2016,iconSrc:"/img/timeline/date2.png",text:"En Mayo de 2016 Gastroinnova Internacional adquiere el 100% del capital accionario de Gastroinnova SAS."},{type:"content",color:"orange",iconSrc:"/img/timeline/date3.jpeg",text:"En julio 2016 se traslada la operación a la zona franca de Intexzona, con una capacidad instalada de hasta 8.000 uds diarias, con 2 turnos."},{type:"content",color:"orange",iconSrc:"/img/timeline/date4.png",text:"Desde mediados de 2016 se inicia el desarrollo del proyecto DELIZ destinado a convertirse en el de mayor impacto en la empresa 2017."},{type:"middle",iconSrc:"/img/timeline/div2.png"},{type:"content",color:"red",year:2017,iconSrc:"/img/timeline/date5.png",text:"En diciembre 2017 se inaugura el primer local de comida DELIZ. A la fecha existen 7 restaurantes en operación y 3 en proceso de apertura."},{type:"middle",iconSrc:"/img/timeline/div3.png"},{type:"content",year:2018,color:"yellow",iconSrc:"/img/timeline/date6.png",text:"En 2018 comercializamos 12 recetas y contamos con 22 recetas con registro INVIMA. También este año se inicia una tercera línea de negocios con la negociación de las marcas Bukara y Smoky Monkey, primeras 2 iniciativas del proyecto de Start-Ups Gastronómicas."},{type:"middle",iconSrc:"/img/timeline/div4.png"}]}}},_t=bt,Ct=(i("dcce"),Object(m["a"])(_t,ht,At,!1,null,"9108faa6",null));Ct.options.__file="history.vue";var Et=Ct.exports,yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about",attrs:{id:"about-ourpeople"}},[n("img",{staticClass:"logo",attrs:{src:i("cf05")}}),n("div",{staticClass:"people-orientador-general"},[n("div",{staticClass:"position"},[t._v("Orientador General")]),n("div",{staticClass:"name"},[t._v("Rafael Hernández Mujica")])]),n("div",{staticClass:"people-orientadores"},[n("div",{staticClass:"people-orientador"},[n("div",{staticClass:"position"},[t._v("Orientador de Planeación y Desarrollo")]),n("div",{staticClass:"name"},[t._v("Božo Pavic")])]),n("div",{staticClass:"people-orientador"},[n("div",{staticClass:"position"},[t._v("Orientador de Expansión")]),n("div",{staticClass:"name"},[t._v("Mónica Calderón")])]),n("div",{staticClass:"people-orientador"},[n("div",{staticClass:"position"},[t._v("Orientador Financiero y Administrativo")]),n("div",{staticClass:"name"},[t._v("Mauricio Orozco")])])])])}],St={data:function(){return{}}},It=St,Mt=(i("4bc6"),Object(m["a"])(It,yt,kt,!1,null,"b0f1c2d8",null));Mt.options.__file="ourpeople.vue";var wt=Mt.exports,Ot={name:"vAbout",props:{scrollToId:String},components:{vMission:gt,vHistory:Et,vOurPeople:wt},mounted:function(){this.updateScrollToId()},methods:{updateScrollToId:function(){"mission"==this.scrollToId?(this.sections[0].hover=!0,setTimeout(function(){dt.a.scrollTo("#about-mission")},500)):this.sections[0].hover=!1,"history"==this.scrollToId?(this.sections[0].hover=!0,this.sections[1].hover=!0,setTimeout(function(){dt.a.scrollTo("#about-history")},500)):this.sections[1].hover=!1,"ourpeople"==this.scrollToId?(this.sections[0].hover=!0,this.sections[1].hover=!0,this.sections[2].hover=!0,setTimeout(function(){dt.a.scrollTo("#about-ourpeople")},500)):this.sections[2].hover=!1}},watch:{scrollToId:function(t,e){this.updateScrollToId()}},data:function(){return{bannerSrc:"/img/about/banner.png",sections:[{id:0,hover:!1,title:"Misión y Visión",content:gt},{id:1,hover:!1,title:"Historia",content:Et},{id:2,hover:!1,title:"Nuestra Gente",content:wt}]}}},Dt=Ot,xt=(i("9d91"),Object(m["a"])(Dt,ct,lt,!1,null,"31eab04a",null));xt.options.__file="About.vue";var Nt=xt.exports,Ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],Tt={},Rt=Object(m["a"])(Tt,Ut,jt,!1,null,null,null);Rt.options.__file="Business.vue";var Ft=Rt.exports,Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],Lt={},Gt=Object(m["a"])(Lt,Bt,Yt,!1,null,null,null);Gt.options.__file="Info.vue";var Qt=Gt.exports,Zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("img",{staticClass:"banner",attrs:{src:t.bannerSrc}}),i("section",t._l(t.clients,function(t){return i("img",{key:t.id,attrs:{src:t.src}})}),0)])},Kt=[],Ht={name:"vClients",created:function(){},data:function(){return{bannerSrc:"img/clients/banner.png",clients:[{id:0,src:"img/clients/client1.png"},{id:1,src:"img/clients/client2.png"},{id:2,src:"img/clients/client3.png"},{id:3,src:"img/clients/client4.png"},{id:4,src:"img/clients/client5.png"}]}}},Jt=Ht,Pt=(i("b609"),Object(m["a"])(Jt,Zt,Kt,!1,null,"68163c46",null));Pt.options.__file="Clients.vue";var Vt=Pt.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},zt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],Wt={},qt=Object(m["a"])(Wt,$t,zt,!1,null,null,null);qt.options.__file="Contact.vue";var Xt=qt.exports,te=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ee=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],ie={},ne=Object(m["a"])(ie,te,ee,!1,null,null,null);ne.options.__file="Terms.vue";ne.exports;var se=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ae=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],oe={},re=Object(m["a"])(oe,se,ae,!1,null,null,null);re.options.__file="Policy.vue";re.exports;n["a"].use(N["a"]);var ce=new N["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:Nt,props:{scrollToId:""}},{path:"/about/mission",name:"about/mission",component:Nt,props:{scrollToId:"mission"}},{path:"/about/history",name:"about/history",component:Nt,props:{scrollToId:"history"}},{path:"/about/ourpeople",name:"about/ourpeople",component:Nt,props:{scrollToId:"ourpeople"}},{path:"/business",name:"business",component:Ft},{path:"/info",name:"info",component:Qt},{path:"/clients",name:"clients",component:Vt},{path:"/contact",name:"contact",component:Xt},{path:"/terms",name:"terms",component:Xt},{path:"/policy",name:"policy",component:Xt},{path:"/admin",name:"admin",component:F}]}),le=i("2f62");n["a"].use(le["a"]);var ue=new le["a"].Store({state:{},mutations:{},actions:{}}),de=i("9f7b"),ve=i("7212"),me=i.n(ve),pe=i("3ff6");i("f9e3"),i("2dd8"),i("dfa4");n["a"].use(r.a,{id:"UA-128950882-1"}),n["a"].use(de["a"]),n["a"].use(me.a),n["a"].use(pe),n["a"].use(i("2ead"));i("f13c");var fe=i("59ca"),ge={apiKey:"AIzaSyBOt3k5zNJ34ii-pVyojeMvOTNt_D0tM34",authDomain:"web-gastroinnova.firebaseapp.com",databaseURL:"https://web-gastroinnova.firebaseio.com",projectId:"web-gastroinnova",storageBucket:"web-gastroinnova.appspot.com",messagingSenderId:"418551106596"};fe.initializeApp(ge),n["a"].config.productionTip=!1,new n["a"]({router:ce,store:ue,render:function(t){return t(x)}}).$mount("#app")},"5c48":function(t,e,i){},"5d4a":function(t,e,i){"use strict";var n=i("5031"),s=i.n(n);s.a},"697d":function(t,e,i){},"73f1":function(t,e,i){},"76bf":function(t,e,i){"use strict";var n=i("96cf"),s=i.n(n);s.a},"7c55":function(t,e,i){"use strict";var n=i("5c48"),s=i.n(n);s.a},"7fe8":function(t,e,i){"use strict";var n=i("73f1"),s=i.n(n);s.a},"889e":function(t,e,i){},"89fd":function(t,e,i){},9523:function(t,e,i){},"96cf":function(t,e,i){},"9d91":function(t,e,i){"use strict";var n=i("2f08"),s=i.n(n);s.a},aa6b:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA5CAYAAADA8o59AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjhJREFUeNrs3D1OQkEQB/AdbCwtLbmBlHaGE+gR4ATqBSzsrNQToDfAkop4A+gsae1s7ZwXNjFE+Xj7MfOffftPBh4UwPDL7MIjwbmampqajuf+7KT2G5Zephc35+tJRzAmvt8kKJQFw7mBv+fF3S3HhWOM/K0F15D7/cIA+YvhikbZxHCpUCgzRpko/2MkQSEBjLJQdmNEo5AQRhkoh2FEoZAghm2UdhjBKCSMYRMlDCMIhRQwbKHEYbRGISUMGyhpMFqhkCIGNkpajINRSBkDEyUPxkEoBICBhZIXYy8KgWBgoMhg7EQhIAxdFFmMrSg9h5eR+Kl7HYyATV1vSuQmRQ+j5ZLVBRQwDKSPvfIogBgoXwzlUUAxEE6dyKMAY7QHsY4CjhEGYhXFAEY4iDUUIxhxIFZQDGHEg6CjGMNIA4KKYhAjHQgailGMtCD6KFOuN65LriuLGOlB9FG0kgQjD0j3UJJh5APpDkpSjLwg5aMkx8gPUi5KFgwZkPJQsmHIgZSDkhVDFsQ+SnYMeRC7KCIYOiD2UMQw9EDsoIhi6ILgo4hj6IPgoqhgYIDgoahh4IDgoKhiYIHoo6hj4IH8wjzy5Y3gMz4xxC1C60eQIPPPmRueLvnonCvnXz2tuMaM8YzSOibIGuWDUV756NsvYccJH71Zlh48xgKpbXIWst5bmt/JryP3l+bNb6Zhqr1X2AbZxOl7nAuP098D0CxL7x5hhd6ePZDtEzTYgACdgJqampj8CDAA4HNwY04LZ7YAAAAASUVORK5CYII="},b447:function(t,e,i){"use strict";var n=i("889e"),s=i.n(n);s.a},b609:function(t,e,i){"use strict";var n=i("35da"),s=i.n(n);s.a},b9b7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAADcCAMAAACMN5UYAAAAM1BMVEUAAADlUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg/lUg96FAyNAAAAEHRSTlMAECAwQFBgcICPn6+/z9/vIxqCigAAAgRJREFUeNrt2wmSgkAMBdAgjCj7/U87almWC0t3SPJn+f8Cr6BDoAmIMJ85gNxmLDHuNEHkiwuRby5Avrvh8sMNlp/cUPnFDZTf3DD5ww2SZ9wQedYNkBdcd3nRdZZXXFd51XWUN1w3edN1khNcFznJdZATXXM52TWWM1xTOcs1lDNdMznbNZIVrol8niaMXI6UKVOmTJkyZcqUKVOmTJkyZcqUKVP+wXKBknuY3AhKrlGywUtmpdwLSq5R8nhAyfsrWytXKLkTlFyhZItV1skHlHwWkDwKSv5CyY2AZKtznS9XKPkkILkTlCwouUTJRwHJJ7GVIdV1TY2CZUCU9TVHFFygYOkI/3l4BMElqqobEJx8wL1x++gxvTrdtdpMZLum9+Mc1/D5Ns+dCpA7gFy7zVOma/aQmetaLXG224Fci/eKKtfmTCvcFuSatC2NO4Bci4tY5Q4g1+CAde4AcveXtNJtQe7uWYjS3d2ltW4LcocC4+6dLGrdva1D7dYgt6FLly5dunTp0qVLly5dunTp0qVLN2BC2YJc7W8ABhNZlWwyCVbIRhPoX/PZsJmbKRu6WbKpmyEbu8myuZsoO7hJsoubIDu5m7KbuyE7uquyq7siO7uLsru7IAe4s3KIOyMHuR9ymPsmB7ovcqj7JAe7DzncvcsA9yZD3It8FoZhGOZf5htfsU/BvpMgaAAAAABJRU5ErkJggg=="},c26f:function(t,e,i){"use strict";var n=i("0e1e"),s=i.n(n);s.a},c7d8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA5CAYAAADA8o59AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiNJREFUeNrs3MtNw0AQBmBPGoASXAIdIE4cSQmhAkglQAWhBHPkhOjAJaSEUAGspT1YFokfO49/1vtLIyu52KNPsxs7kquqpKSkZN35/by6Lv0uy0bo4r7C8bASjEPslwWFJDBC3cSv3un+5zFzjF382Ia6C/2eIED+wahyRhlgVFwoJIyRJcoZDBYUUsDICmUEIxmFlDCyQJmIkYRCihiuUWZiLEYhZQyXKAsxFqGQAYYrlESM2ShkhOEChQljFgoZYkCjMGNMRiFjDEgUIYxJKASAAYUijDGKQiAYEChKGBdRCAjDFEUZ4yzKpsLLTvvRvRHG/E3dcErUJsUQY96StQYUNAykn73qKIgYKDeG6iioGAiPTtRRkDFmg3hHQcdYBOIVxQPGYhBvKF4wkkC8oHjCSAZBR/GGwQKCiuIRgw0EDcUrBisIAEoT6iPUQ6itRwx2EAAUq7BgiICsEIUNQwxkRSisGKIgK0BhxxAHyRhFBEMFJEMUMQw1kIxQRDFUQTJAEcdQB3GMooJhAuIQRQ3DDMQRiiqGKYgDFHUMcxBgFBMMCBBAFDMMGBAgFFMMKBAAFHMMOJAezEs4PCue8jVA7BF6hwSJKN2/fh1MLXiaY6h9wGhQ+oYF6S1h3aQ8heJ8B1e3LL3FyTgh9QwNMoDZRpiU/aWNEA0ahCuQAU4dcW4jTj0C0C1L3xHhiN6fO5ALE9SfnBZ1AkpKSlLyJ8AAk92/d0vc1MwAAAAASUVORK5CYII="},ce11:function(t,e,i){},cf05:function(t,e,i){t.exports=i.p+"img/logo.157d9aa6.png"},d2f6:function(t,e,i){t.exports=i.p+"img/loading.27b57fb6.gif"},dcce:function(t,e,i){"use strict";var n=i("89fd"),s=i.n(n);s.a},f211:function(t,e,i){"use strict";var n=i("697d"),s=i.n(n);s.a}});
//# sourceMappingURL=app.7367ce9d.js.map