(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),r=a.n(c),i=(a(28),a(21)),o=a(2),l=(a(29),a(12)),h=a(23),j=a(7),b=a(8),p=a(10),u=a(9),m=a(0),d=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).Register=function(){var e=n.state,t=e.name,a=e.mobile,s=e.email,c=e.password,r=JSON.parse(localStorage.getItem("newData"))||[],i=r.length>0?[].concat(Object(h.a)(r),[{name:t,mobile:a,email:s,password:c}]):[{name:t,mobile:a,email:s,password:c}];localStorage.setItem("newData",JSON.stringify(i)),n.props.history.push("Login")},n.Pagechange=function(){n.props.history.push("Login")},n.onInputChange=function(e){var t=e.target;n.setState(Object(l.a)({},t.name,t.value))},n.state={name:"",mobile:"",email:"",password:""},n}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.mobile,n=e.email,s=e.password;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"heading",children:"Welcome Back!"}),Object(m.jsx)("h4",{className:"CaptionName",children:"Please Enter Your Details"}),Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Enter Your Name",onChange:this.onInputChange,value:t}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",name:"mobile",placeholder:"Enter Your Number",onChange:this.onInputChange,value:a}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Enter Your Email",onChange:this.onInputChange,value:n}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:this.onInputChange,value:s}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn1",onClick:this.Register,children:"Register"}),Object(m.jsx)("h4",{children:"or"}),Object(m.jsx)("a",{onClick:this.Pagechange,children:Object(m.jsx)("h2",{children:"Login"})})]})}}]),a}(n.Component),O=a(20),g=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).Login=function(){var e=JSON.parse(localStorage.getItem("newData"))||[];if(""==n.state.email||""==n.state.password)n.setState({errormsg:!0});else for(var t=0;t<=e.length-1;t++){if(n.state.email===e[t].email&&n.state.password===e[t].password){n.props.history.push("DashBoard",Object(O.a)({},e[t]));break}n.props.history.push("UnAuthorized")}},n.Pagechange=function(){n.props.history.push("Register")},n.onInputChange=function(e){var t=e.target;n.setState(Object(l.a)({},t.name,t.value))},n.state={email:"",password:"",errormsg:!1},n}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"heading",children:"Welcome Back!"}),Object(m.jsx)("h4",{className:"CaptionName",children:"please login to your account"}),Object(m.jsx)("input",{type:"text",name:"email",placeholder:"Enter Your Email",onChange:this.onInputChange,value:t}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:this.onInputChange,value:a}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn1",onClick:this.Login,children:"Login"}),Object(m.jsx)("h4",{children:"or"}),Object(m.jsx)("a",{onClick:this.Pagechange,children:Object(m.jsx)("h2",{children:"Register"})}),this.state.errormsg&&Object(m.jsx)("h2",{className:"errormsg",children:"Enter both email and password"})]})}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).Pagechange=function(){e.props.history.push("Login")},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.location.state,t=e.name,a=e.mobile,n=e.email;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{className:"Sucusess",children:["Welcome ",Object(m.jsxs)("span",{children:[t,"!"]})]}),Object(m.jsxs)("div",{className:"list",children:[Object(m.jsx)("h2",{children:"Your Registered Details:"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("h3",{children:["Name: ",Object(m.jsx)("span",{children:t})]}),Object(m.jsxs)("h3",{children:["Mobile: ",Object(m.jsx)("span",{children:a})]}),Object(m.jsxs)("h3",{children:["Email Id: ",Object(m.jsx)("span",{children:n})]})]}),Object(m.jsx)("button",{className:"btn2",onClick:this.Pagechange,children:"Log Out"})]})}}]),a}(n.Component),v=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).Pagechange=function(){e.props.history.push("Login")},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{className:"Sucusess",children:["Welcome Back!",Object(m.jsx)("br",{})]}),Object(m.jsx)("h2",{children:" Your Entered Details are wrong!"}),Object(m.jsxs)("h3",{children:["Please ",Object(m.jsx)("a",{onClick:this.Pagechange,children:"Tryagain"})]})]})}}]),a}(n.Component),f=function(){return Object(m.jsxs)("div",{className:"Welcome",children:[Object(m.jsx)("img",{src:"images/WelcomeBack.png",alt:"Logo of Welcomeback"}),Object(m.jsx)("div",{className:"rightcontainer",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(m.jsx)(o.a,{path:"/Register",component:d}),Object(m.jsx)(o.a,{path:"/Login",component:g}),Object(m.jsx)(o.a,{path:"/DashBoard",component:x}),Object(m.jsx)(o.a,{path:"/UnAuthorized",component:v})]})}),Object(m.jsx)("div",{className:"clear"})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.d617cdb9.chunk.js.map