(this["webpackJsonptourism-or-delivery-website-client-side-monjurctg5"]=this["webpackJsonptourism-or-delivery-website-client-side-monjurctg5"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(47),i=c.n(n),r=(c(57),c(58),c(13)),l=c(10),o=c(8),d=c(31),j=c(48),b={apiKey:"AIzaSyBpTcthRVsWQBkz_rVq8nA3uqtXb9zGxJE",authDomain:"tourisme-or-delivery.firebaseapp.com",projectId:"tourisme-or-delivery",storageBucket:"tourisme-or-delivery.appspot.com",messagingSenderId:"880318224450",appId:"1:880318224450:web:c642fe694144a46daaf5db"};(function(){Object(j.a)(b)})();var h=Object(d.b)(),u=new d.a,m=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)({}),i=Object(o.a)(n,2),r=i[0],l=i[1];return Object(s.useEffect)((function(){var e=Object(d.c)(h,(function(e){l(e||{}),a(!1)}));return function(){return e}}),[]),{googleSignin:function(){return Object(d.e)(h,u)},user:r,manulaySignin:function(e,t){return Object(d.d)(h,e,t)},logout:function(){Object(d.f)(h).then((function(){l({}),a(!1)}))},setUser:l,setIsLoading:a,isLoading:c}},x=c(0),O=Object(s.createContext)(),p=function(e){var t=e.children,c=m();return Object(x.jsx)(O.Provider,{value:c,children:t})},v=function(){return Object(s.useContext)(O)},f=function(){var e=v(),t=e.user,c=e.logout;return Object(x.jsx)("div",{children:Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsxs)(r.b,{className:"navbar-brand ",href:"/",children:[Object(x.jsx)("span",{className:"text-warning fs-1 fw-bold",children:"T"}),Object(x.jsx)("span",{className:"text-warning",children:Object(x.jsx)("small",{children:"ra"})}),Object(x.jsx)("span",{className:"text-danger fs-1 fw-bold",children:"V"}),Object(x.jsx)("span",{className:"text-danger",children:Object(x.jsx)("small",{children:"elo"})})]}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsx)("div",{className:"collapse navbar-collapse   ",id:"navbarSupportedContent",children:Object(x.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/home",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/myOrders",children:"My Orders"})}),(null===t||void 0===t?void 0:t.email)?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/dash",children:"Dashboard"})}),Object(x.jsx)("li",{className:"nav-item text-white",children:Object(x.jsx)("span",{className:"nav-link ",children:null===t||void 0===t?void 0:t.displayName})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("button",{onClick:c,className:"btn btn-info",children:"Logout"})})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{className:"nav-link  login ",to:"/login",children:"Login"})})})]})})]})})})},g=(c(68),function(){return Object(x.jsxs)("div",{className:"container contact-text mt-5 mb-5",children:[Object(x.jsx)("h1",{className:"text-center fs-1 fw-bold text-dark mt-5 mb-5",children:"Contact Us"}),Object(x.jsxs)("div",{className:"row row-cols-1 row-cols-md-2 g-4   ",children:[Object(x.jsx)("div",{className:"col  rounded ",children:Object(x.jsxs)("div",{className:"custom-card",children:[Object(x.jsx)("div",{className:"icon",children:Object(x.jsx)("i",{className:"fas fa-phone-square-alt"})}),Object(x.jsx)("h2",{className:"subtitle",children:"By Phone"}),Object(x.jsxs)("p",{className:"",children:[Object(x.jsx)("small",{children:"(Call us to knowing details)"}),Object(x.jsx)("br",{}),"Hot Line:",Object(x.jsx)("br",{}),"1-877-930-7483",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"International:",Object(x.jsx)("br",{}),"1-604-637-0780"]})]})}),Object(x.jsx)("div",{className:"col rounded   ",children:Object(x.jsxs)("div",{className:"custom-card  ",children:[Object(x.jsx)("div",{className:"icon",children:Object(x.jsx)("i",{className:"fas fa-video"})}),Object(x.jsx)("h2",{className:"subtitle",children:"Live Chat"}),Object(x.jsx)("p",{className:"desc",children:"Chat with a member of our in-house team."}),Object(x.jsx)("div",{className:"Button mx-auto mb-3 mt-5",children:Object(x.jsx)("a",{href:"javscript:void(0)",className:"liveChatApp",title:"Start Chat",children:"Start Chat"})})]})})]})]})}),N=c(102),y=(c(69),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=v(),i=(n.user,n.isLoading);return Object(s.useEffect)((function(){fetch("https://shielded-badlands-01145.herokuapp.com/services").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),i?Object(x.jsx)(N.a,{animation:"border",variant:"danger"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"top-destination",children:Object(x.jsx)("h1",{children:"Top Destination"})}),Object(x.jsx)("div",{className:"contaier",children:Object(x.jsx)("div",{className:"row  row-cols-sm-1 justify-content-center align-items-center row-cols-md-2 row-cols-lg-3 g-4 ",children:c.map((function(e){return Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{class:"card service-card-custom  ",style:{width:"18rem"},children:[Object(x.jsx)("img",{src:e.img,class:"card-img-top",height:"200px",alt:"..."}),Object(x.jsxs)("div",{class:"card-body",children:[Object(x.jsx)("h5",{class:"card-title",children:e.ServiceName}),Object(x.jsx)("p",{children:e.sortTitle.slice(0,26)}),Object(x.jsx)(r.b,{to:"/placeOrder/".concat(e._id),class:"btn btn-danger",children:"Booking Now"})]})]})})}))})})]})}),w=(c(70),function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[Object(x.jsxs)("div",{className:"carousel-indicators",children:[Object(x.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(x.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(x.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(x.jsxs)("div",{className:"carousel-inner",children:[Object(x.jsx)("div",{className:"carousel-item active",children:Object(x.jsx)("img",{src:"https://www.planetware.com/photos-large/BRA/brazil-rio-de-janeiro-cristo-redentor.jpg",height:"500px",className:"d-block w-100",alt:"..."})}),Object(x.jsx)("div",{className:"carousel-item",children:Object(x.jsx)("img",{src:"https://images.unsplash.com/photo-1537956965359-7573183d1f57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",height:"500px",className:"d-block w-100",alt:"..."})}),Object(x.jsx)("div",{className:"carousel-item",children:Object(x.jsx)("img",{src:"https://images.unsplash.com/photo-1558187424-f786111643b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80",height:"500px",className:"d-block w-100",alt:"..."})})]}),Object(x.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(x.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(x.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(x.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(x.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(x.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})}),S=(c(89),function(){return Object(x.jsxs)("div",{className:"location-container pt-4 ",children:[Object(x.jsx)("h1",{className:"text-warning",children:"Our  Location"}),Object(x.jsxs)("div",{className:"adress-container",children:[Object(x.jsx)("div",{className:"icon",children:Object(x.jsx)("img",{src:"https://media.istockphoto.com/vectors/map-pin-icon-for-your-web-site-and-mobile-app-vector-id1261917621?k=20&m=1261917621&s=612x612&w=0&h=ZW4ZTUST3Ky33-puOgYWiijU_vlnebg-WJwOilF648A=",alt:""})}),Object(x.jsx)("div",{className:"address",children:Object(x.jsx)("p",{children:"Travelo.com Solutions Inc. Suite 210-3602 Gilmore Way Burnaby, BC V5G 4W9"})})]})]})}),k=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{}),Object(x.jsxs)("div",{className:"experience container",children:[Object(x.jsx)("h1",{children:"Some unforgettable experiences"}),Object(x.jsx)("p",{className:"w-75 mx-auto",children:"h its unique cuisine, rich culture, some of the most beautiful beaches in the world, breathtaking waterfalls, and adventure for everyone\u2019s liking, all you have to do is choose the perfect type of tourism for you and be amazed by the wonders of world"})]}),Object(x.jsx)("div",{className:"service mb-5 mt-5 container ",children:Object(x.jsx)(y,{})}),Object(x.jsxs)("div",{className:"mb-5 pb-5 container",children:[Object(x.jsxs)("div",{className:"experience container",children:[Object(x.jsx)("h1",{children:"Some Of Natural Place"}),Object(x.jsx)("p",{className:"w-75 mx-auto",children:"h its unique cuisine, rich culture, some of the most beautiful beaches in the world, breathtaking waterfalls, and adventure for everyone\u2019s liking, all you have to do is choose the perfect type of tourism for you and be amazed by the wonders of world"})]}),Object(x.jsxs)("div",{className:"row row-cols-1 row-cols-md-2 g-4  galary",children:[Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("div",{className:"card-custom ",children:Object(x.jsx)("img",{src:"https://chopra.brightspotcdn.com/dims4/default/dfb2b37/2147483647/strip/true/crop/571x300+36+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2F61%2Fcc%2F9b0ff8c8aaba0ff21eafee50293c%2F6reasonswhytravelingisgoodforyou.jpg",className:"card-img-top",alt:"..."})})}),Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("div",{className:"card-custom",children:Object(x.jsx)("img",{src:"https://content.thriveglobal.com/wp-content/uploads/2021/08/traveling-is-good-for-your-mental-health.jpg?w=1180",className:"card-img-top",alt:"..."})})}),Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("div",{className:"card-custom",children:Object(x.jsx)("img",{src:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fnomanazish%2Ffiles%2F2018%2F01%2Ftravel-1749508_1280-1200x766.jpg",className:"card-img-top",alt:"..."})})}),Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("div",{className:"card-custom",children:Object(x.jsx)("img",{src:"https://www.expatica.com/app/uploads/sites/5/2014/05/10-best-places-to-visit-in-France-1920x1080.jpg",className:"card-img-top",alt:"..."})})})]})]}),Object(x.jsx)(S,{}),Object(x.jsx)(g,{})]})},C=c(16),T=c.n(C),A=c(27),D=(c(92),function(){var e,t=Object(l.g)(),c=(null===(e=Object(l.h)().state)||void 0===e?void 0:e.from)||"/",s=Object(A.a)(),a=(s.register,s.handleSubmit,v()),n=a.googleSignin,i=(a.manulaySignin,a.setIsLoading),r=a.setUser;return Object(x.jsx)("div",{className:"login-minheight",children:Object(x.jsxs)("div",{className:"login-container",children:[Object(x.jsx)("h3",{children:"Login"}),Object(x.jsxs)("button",{onClick:function(){i(!1),n().then((function(e){console.log(e.user),r(e.user),t.push(c)}))},type:"button",className:"  loginButton",children:[Object(x.jsx)("img",{src:"https://cdn-teams-slug.flaticon.com/google.jpg",alt:""}),"Sign In With Google"]})]})})}),B=(c(93),function(){return Object(x.jsx)("div",{className:"footer-clean pt-3",children:Object(x.jsx)("footer",{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row justify-content-center",children:[Object(x.jsxs)("div",{className:"col-sm-4 col-md-3 item",children:[Object(x.jsx)("h3",{children:"Top Destinetion"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"Brazil"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"Banghlades"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"Nepal "})})]})]}),Object(x.jsxs)("div",{className:"col-sm-4 col-md-3 item",children:[Object(x.jsx)("h3",{children:"About"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"Brazil"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"Travelo"})})]})]}),Object(x.jsxs)("div",{className:"col-sm-4 col-md-3 item",children:[Object(x.jsx)("h3",{children:"Quick Links"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"My Orders"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"Need Help"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",children:"Online Service"})})]})]}),Object(x.jsxs)("div",{className:"col-lg-3 item social",children:[Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("i",{className:"fab fa-facebook"})}),Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("i",{className:"fab fa-twitter-square"})}),Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("i",{className:"fab fa-snapchat"})}),Object(x.jsx)("p",{className:"copyright",children:"Travelo.Com \xa9 20121"})]})]})})})})}),F=(c(94),c(9)),E=(c(95),function(){var e=Object(A.a)(),t=e.register,c=e.handleSubmit,s=e.reset;return Object(x.jsxs)("div",{className:"addservice-container bg-image",children:[Object(x.jsx)("h3",{className:"mt-5 fw-bold  text-success",children:"Add  Services"}),Object(x.jsx)("div",{className:"Event-container",children:Object(x.jsxs)("form",{onSubmit:c((function(e){fetch("https://shielded-badlands-01145.herokuapp.com/services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.acknowledged&&(T()({title:"Good job!",text:"You clicked the button!",icon:"success"}),s())}))})),className:"mb-5",children:[Object(x.jsx)("input",Object(F.a)(Object(F.a)({required:!0},t("ServiceName")),{},{placeholder:" Service Name"})),Object(x.jsx)("input",Object(F.a)(Object(F.a)({required:!0},t("sortTitle")),{},{placeholder:"sort title"})),Object(x.jsx)("textarea",Object(F.a)(Object(F.a)({required:!0},t("description")),{},{placeholder:"Descriptio"})),Object(x.jsx)("input",Object(F.a)(Object(F.a)({},t("cost")),{},{placeholder:"  cost "}))," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",Object(F.a)(Object(F.a)({},t("img")),{},{placeholder:" service image url"}))," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"submit"})]})})]})}),I=function(){return Object(x.jsx)("div",{className:"mt-5 pt-5",children:Object(x.jsx)("img",{src:"https://www.logolynx.com/images/logolynx/23/23938578fb8d88c02bc59906d12230f3.png",className:"img-fluid",alt:""})})},L=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){fetch("https://shielded-badlands-01145.herokuapp.com/orders").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[c]);return Object(x.jsx)("div",{className:"table-responsive-sm manageAllClient",children:Object(x.jsxs)("table",{className:"table table-sm table-striped table-bordered table-hover ",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"SN"}),Object(x.jsx)("th",{scope:"col",children:"client Name"}),Object(x.jsx)("th",{scope:"col",children:"email"}),Object(x.jsx)("th",{scope:"col",children:"Reg.Date"}),Object(x.jsx)("th",{scope:"col",children:"Address"}),Object(x.jsx)("th",{scope:"col",children:"Booking Place"}),Object(x.jsx)("th",{scope:"col",children:"Status"}),Object(x.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(x.jsx)("tbody",{children:c.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:t+1}),Object(x.jsx)("td",{children:e.clientName}),Object(x.jsx)("td",{children:e.email}),Object(x.jsx)("td",{children:e.date}),Object(x.jsx)("td",{children:e.adress}),Object(x.jsx)("td",{children:e.ServiceName}),Object(x.jsx)("td",{children:0==e.approved?Object(x.jsx)("span",{className:"text-danger ",children:Object(x.jsx)(N.a,{animation:"border",variant:"danger"})}):Object(x.jsx)("span",{className:"text-success",children:Object(x.jsx)("i",{class:"fas fa-check-circle"})})}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{onClick:function(){return t=e._id,void T()({title:"Are you sure ?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?(fetch("https://shielded-badlands-01145.herokuapp.com/orders/".concat(t),{method:"PUT"}).then((function(e){return e.json()})).then((function(e){e.modifiedCount})),T()("Poof! Order  Approved successfully",{icon:"success"})):T()("Your imaginary file is safe!")}));var t},className:"btn btn-success ",children:Object(x.jsx)("i",{class:"fas fa-check-circle"})})," ",Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:function(){return t=e._id,void T()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this imaginary file!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?fetch("https://shielded-badlands-01145.herokuapp.com/orders/".concat(t),{method:"delete"}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount){T()({title:"Delete successfully !",icon:"success"});var s=c.filter((function(e){return e._id!==t}));a(s)}})):T()("Not Delete!")}));var t},className:"btn btn-danger mt-1",children:Object(x.jsx)("i",{class:"fas fa-trash-alt"})})]})]})}))})]})})},M=(c(96),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(),i=Object(o.a)(n,2),r=i[0],d=i[1],j=Object(s.useState)({}),b=Object(o.a)(j,2),h=b[0],u=b[1],m=v(),O=(m.user,m.isLoading),p=Object(A.a)(),f=(p.register,p.handleSubmit,p.reset,Object(l.g)());if(Object(s.useEffect)((function(){fetch("https://shielded-badlands-01145.herokuapp.com/services").then((function(e){return e.json()})).then((function(e){a(e)}))}),[c]),Object(s.useEffect)((function(){fetch("https://shielded-badlands-01145.herokuapp.com/services/".concat(r)).then((function(e){return e.json()})).then((function(e){u(e)}))}),[r]),O)return Object(x.jsx)(N.a,{animation:"border",variant:"danger"});var g=function(e){fetch("https://shielded-badlands-01145.herokuapp.com/services/".concat(r),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.modifiedCount>0&&(alert("update successfully"),f.push("/dash"),u({}))})),e.preventDefault()};return Object(x.jsxs)("div",{className:"table-responsive-sm  manageService",children:[Object(x.jsxs)("table",{className:"table table-sm table-striped table-bordered table-hover",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"SN"}),Object(x.jsx)("th",{scope:"col",children:"Service Name"}),Object(x.jsx)("th",{scope:"col",children:"title"}),Object(x.jsx)("th",{scope:"col",children:"image"}),Object(x.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(x.jsx)("tbody",{children:c.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:t+1}),Object(x.jsx)("td",{children:e.ServiceName}),Object(x.jsx)("td",{children:e.sortTitle}),Object(x.jsx)("td",{children:Object(x.jsx)("img",{src:e.img,width:"100px",alt:""})}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{className:"mx-2 btn  btn-warning",onClick:function(){return t=e._id,void d(t);var t},type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",children:"update"}),Object(x.jsx)("button",{onClick:function(){return t=e._id,void T()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this imaginary file!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?fetch("https://shielded-badlands-01145.herokuapp.com/services/".concat(t),{method:"delete"}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount>0){T()("delete successfully!",{icon:"success"});var s=c.filter((function(e){return e._id!==t}));a(s)}})):T()("Not Deleteded!")}));var t},className:"btn btn-danger mt-2",children:"delete"})]})]})}))})]}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"UPDATE DATA"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{className:"updateService-container",children:[Object(x.jsx)("h3",{className:"mt-5 fw-bold  text-success",children:"Update  Service"}),Object(x.jsx)("div",{className:"update-container",children:Object(x.jsxs)("form",{onSubmit:g,children:[Object(x.jsx)("input",{value:h.ServiceName,onChange:function(e){e.preventDefault();var t={ServiceName:e.target.value,sortTitle:h.sortTitle,description:h.description,img:h.img,cost:h.cost};u(t)},placeholder:" Service Name"}),Object(x.jsx)("input",{value:h.sortTitle,onChange:function(e){e.preventDefault();var t=e.target.value,c={ServiceName:h.ServiceName,sortTitle:t,number:h.description,img:h.img,cost:h.cost};u(c)},placeholder:"sort title"}),Object(x.jsx)("textarea",{value:h.description,onChange:function(e){e.preventDefault();var t=e.target.value,c={ServiceName:h.ServiceName,sortTitle:h.sortTitle,description:t,img:h.img,cost:h.cost};u(c)},placeholder:"Description"}),Object(x.jsx)("input",{value:h.cost,onChange:function(e){e.preventDefault();var t=e.target.value,c={ServiceName:h.ServiceName,sortTitle:h.sortTitle,description:h.description,img:h.img,cost:t};u(c)},placeholder:" event image url"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{value:h.img,onChange:function(e){e.preventDefault();var t=e.target.value,c={ServiceName:h.ServiceName,sortTitle:h.sortTitle,description:h.description,img:t};u(c)},placeholder:" event image url"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"submit"})]})})]})})}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(x.jsx)("button",{type:"submit",onClick:g,className:"btn btn-primary ","data-bs-dismiss":"modal",children:"update"})]})]})})})})]})}),q=(c(97),function(){var e=Object(s.useState)(Object(x.jsx)(I,{})),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(x.jsx)("div",{className:" ",children:Object(x.jsxs)("div",{className:"row ",children:[Object(x.jsx)("div",{className:"col-md-3 col-sm-12 cols-12 pt-5 left-dash",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:" text-white",children:Object(x.jsx)("i",{class:"fas fa-plane"})}),Object(x.jsxs)("div",{className:"mangeData",children:[Object(x.jsxs)("p",{className:" mt-4  cursor-pointer",onClick:function(){a(Object(x.jsx)(E,{}))},children:[" ",Object(x.jsx)("i",{class:"fas fa-plus mx-1"}),"  Add Service"]})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("p",{className:"cursor-pointer mt-4 ",onClick:function(){a(Object(x.jsx)(M,{}))},children:[Object(x.jsx)("i",{class:"fas fa-border-all mx-1"}),"    All Services"]})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("p",{className:" mt-4 cursor-pointer ",onClick:function(){a(Object(x.jsx)(L,{}))},children:[" ",Object(x.jsx)("i",{class:"fas fa-tools mx-1"}),"   Manage All Client Service"]})," ",Object(x.jsx)("br",{})]})]})}),Object(x.jsx)("div",{className:"col-md-9 col-sm-12 dash  admin-img",children:c})]})})}),P=c(39),_=function(e){var t=e.children,c=Object(P.a)(e,["children"]),s=v(),a=s.user;return s.isLoading?Object(x.jsx)(N.a,{animation:"border",variant:"danger"}):Object(x.jsx)(l.b,Object(F.a)(Object(F.a)({},c),{},{render:function(e){var c=e.location;return(null===a||void 0===a?void 0:a.email)?t:Object(x.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))},z=(c(98),function(){var e=Object(l.g)(),t=new Date,c=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),a=(t.getHours(),t.getMinutes(),t.getSeconds(),c),n=Object(l.i)().id,i=v().user,r=Object(A.a)(),d=r.register,j=r.handleSubmit,b=r.reset,h=Object(s.useState)({}),u=Object(o.a)(h,2),m=u[0],O=u[1];Object(s.useEffect)((function(){fetch("https://shielded-badlands-01145.herokuapp.com/services/".concat(n)).then((function(e){return e.json()})).then((function(e){O(e)}))}),[]);return Object(x.jsxs)("div",{className:"row row-cols-1 row-cols-md-2 g-4 order-box",children:[Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("dib",{className:"row  row-cols-sm-1 row-cols-md-2 justify-content-center align-items-center ",children:Object(x.jsx)("div",{className:"col mt-5",children:Object(x.jsxs)("div",{class:"card",style:{width:"30rem"},children:[Object(x.jsx)("img",{src:m.img,height:"300px",class:"card-img-top",alt:"..."}),Object(x.jsxs)("div",{class:"card-body",children:[Object(x.jsx)("h5",{class:"card-title",children:m.ServiceName}),Object(x.jsx)("p",{class:"card-text",children:m.description}),Object(x.jsxs)("h5",{children:[m.cost,"$"]})]})]})})})}),Object(x.jsx)("div",{className:"col ",children:Object(x.jsxs)("div",{className:"Order-container",children:[Object(x.jsx)("h3",{className:"pt-5 fw-bold  ",children:"Filup This Form"}),Object(x.jsx)("div",{className:"Event-container",children:Object(x.jsxs)("form",{onSubmit:j((function(t){var c={clientName:i.displayName,email:i.email,date:a,ServiceName:m.ServiceName,cost:m.cost,adress:t.adress,approved:!1};fetch("https://shielded-badlands-01145.herokuapp.com/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(t){t.acknowledged&&(T()("Thsnk You!","You Booking  a Beautyfull Place!","success"),e.push("/"),b())}))})),className:"mb-5",children:[Object(x.jsx)("input",Object(F.a)(Object(F.a)({required:!0},d("clientName")),{},{value:i.displayName,disabled:!0,placeholder:" Service Name"})),Object(x.jsx)("input",Object(F.a)(Object(F.a)({required:!0},d("email")),{},{disabled:!0,value:i.email,placeholder:"sort title"})),Object(x.jsx)("input",Object(F.a)(Object(F.a)({},d("date")),{},{disabled:!0,value:a}))," ",Object(x.jsx)("br",{}),Object(x.jsx)("textarea",Object(F.a)(Object(F.a)({className:"text-dark",required:!0},d("adress")),{},{placeholder:"Adress"})),Object(x.jsx)("input",Object(F.a)(Object(F.a)({value:m.cost+"$",disabled:!0},d("cost")),{},{placeholder:"  cost "}))," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"submit",className:"text-dark"})]})})]})})]})}),H=(c(99),function(){var e=v().user,t=Object(s.useState)([]),c=Object(o.a)(t,2),a=c[0],n=c[1],i=null===e||void 0===e?void 0:e.email;Object(s.useEffect)((function(){fetch("https://shielded-badlands-01145.herokuapp.com/orders/".concat(i)).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)}))}),[i]);return Object(x.jsx)("div",{className:"table-responsive-sm myorder-container",children:Object(x.jsxs)("table",{className:"table table-sm table-striped table-bordered table-hover ",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"SN"}),Object(x.jsx)("th",{scope:"col",children:"Booking Place"}),Object(x.jsx)("th",{scope:"col",children:"Reg.Date"}),Object(x.jsx)("th",{scope:"col",children:"Cost"}),Object(x.jsx)("th",{scope:"col",children:"Status"}),Object(x.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(x.jsx)("tbody",{children:a.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:t+1}),Object(x.jsx)("td",{children:e.ServiceName}),Object(x.jsx)("td",{children:e.date}),Object(x.jsxs)("td",{children:["$",e.cost]}),Object(x.jsx)("td",{children:0==e.approved?Object(x.jsx)("span",{className:"text-danger ",children:Object(x.jsx)(N.a,{animation:"border",variant:"danger"})}):Object(x.jsx)("span",{className:"text-success",children:Object(x.jsx)("i",{class:"fas fa-check-circle"})})}),0==e.approved?Object(x.jsx)("td",{children:Object(x.jsx)("button",{onClick:function(){return t=e._id,void T()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this imaginary file!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?fetch("https://shielded-badlands-01145.herokuapp.com/orders/".concat(t),{method:"delete"}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount){T()({title:"Deltee Successfully!",text:"You deleted ".concat(t," successfully!"),icon:"success"});var c=a.filter((function(e){return e._id!==t}));n(c)}})):T()("Your imaginary file is safe!")}));var t},className:"btn btn-danger mt-1",children:Object(x.jsx)("i",{class:"fas fa-trash-alt"})})}):Object(x.jsx)("span",{className:"text-success",children:"Approved"})]})}))})]})})}),W=(c(100),function(){return Object(x.jsx)("div",{className:"notWork",children:Object(x.jsxs)("div",{className:"text",children:[Object(x.jsx)("i",{className:"fas fa-exclamation-circle icon"}),Object(x.jsx)("h1",{children:"404!"}),Object(x.jsx)("h4",{children:"The page not Found "})]})})});var Y=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(p,{children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(f,{}),Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{exact:!0,path:"/",children:Object(x.jsx)(k,{})}),Object(x.jsx)(l.b,{exact:!0,path:"/home",children:Object(x.jsx)(k,{})}),Object(x.jsx)(_,{exact:!0,path:"/myOrders",children:Object(x.jsx)(H,{})}),Object(x.jsx)(_,{path:"/placeOrder/:id",children:Object(x.jsx)(z,{})}),Object(x.jsx)(_,{path:"/dash",children:Object(x.jsx)(q,{})}),Object(x.jsx)(l.b,{exact:!0,path:"/login",children:Object(x.jsx)(D,{})}),Object(x.jsx)(l.b,{path:"*",children:Object(x.jsx)(W,{})})]}),Object(x.jsx)(B,{})]})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Y,{})}),document.getElementById("root")),G()},57:function(e,t,c){},58:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},89:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.50d6be00.chunk.js.map