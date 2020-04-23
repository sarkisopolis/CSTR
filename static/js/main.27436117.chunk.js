(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/CSTR.0d0b3452.png"},167:function(e,t,a){e.exports=a(350)},350:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(50),o=a.n(l),c=(a(172),a(8)),i=a(9),s=a(10),u=a(11),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/sary-sarkis/",target:"parent",rel:"noopener"},"About Author"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"true","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"http://encyclopedia.che.engin.umich.edu/Pages/Reactors/CSTR/CSTR.html",target:"parent",rel:"noopener"},"What is a CSTR? ",r.a.createElement("span",{class:"sr-only"},"(current)")))),r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"mailto:sarkisopolis@gmail.com?subject=This email originates from the CSTR Website!"},"Email me! ",r.a.createElement("span",{class:"sr-only"},"(current)"))))))}}]),a}(n.Component),m=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"accordion",id:"accordionExample"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header",id:"headingOne"},r.a.createElement("h2",{class:"mb-0"},r.a.createElement("button",{class:"btn ",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Assumptions of the model"))),r.a.createElement("div",{id:"collapseOne",class:"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample"},r.a.createElement("div",{class:"card-body"},r.a.createElement("p",{class:"font-weight-bold"},"We are modeling the change in concentration of reactant A (C",r.a.createElement("sub",null,"a"),") in this CSTR under the following assumptions:"),r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Continuous_stirred-tank_reactor",class:"list-group-item list-group-item-action",target:"parent",rel:"noopener"},"Ideal CSTR - perfectly mixed (no spatial variations)."),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Isothermal_process",class:"list-group-item list-group-item-action",target:"parent",rel:"noopener"},"Isothermal reactor operation."),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Reaction_rate",class:"list-group-item list-group-item-action",target:"parent",rel:"noopener"},"The reaction proceeds at a Zeroth-Order or First-order rate with respect to A (this is also the overall reaction order). r",r.a.createElement("sub",null,"a"),"=-k[C",r.a.createElement("sub",null,"a"),"]",r.a.createElement("sup",null,"(0 or 1)")),r.a.createElement("a",{href:"#",class:"list-group-item list-group-item-action disabled"},"Fixed volume of the reactor (not a function of time)."))))))}}]),a}(n.Component),d=a(129),h=a.n(d),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"btn-toolbar",style:{justifyContent:"Center"}},r.a.createElement("div",null,r.a.createElement("button",{class:"btn dropdown-toggle",type:"button","data-toggle":"dropdown"},"Select Reaction order",r.a.createElement("span",{class:"caret"})),r.a.createElement("ul",{class:"dropdown-menu dropdown-menu-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:this.props.onZero}," ","Zeroth-order Reaction")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:this.props.onFirst},"First-order Reaction")))),r.a.createElement("button",{class:"btn btn-default disabled"},0==this.props.order?"Zeroth-order Reaction":"First-order Reaction"))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.submit},r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},"C ",r.a.createElement("sub",null,"a0")," ","\xa0"," (mol/L)")),r.a.createElement("input",{onChange:this.props.change1,type:"number",class:"form-control",min:"0",placeholder:"Reactant Concentration",required:"required",step:"0.001"})),r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},"\u03bd (L/s)")),r.a.createElement("input",{onChange:this.props.change2,type:"number",class:"form-control",min:"0",placeholder:"Flow Rate",required:"required",step:"0.001"})),r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},"V (L)")),r.a.createElement("input",{onChange:this.props.change3,type:"number",class:"form-control",min:"0",placeholder:"Reactor Volume",required:"required",step:"0.001"})),r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},"k (mol/s or 1/s)")),r.a.createElement("input",{onChange:this.props.change4,type:"number",class:"form-control",min:"0",placeholder:"Rate Constant",required:"required",step:"0.001"})))}}]),a}(n.Component),v=a(21),E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).data=[],n.time=[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.8,7.9,8,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10],n.getDataPoints=function(){var e=n.props.variables,t=e.order,a=e.concentration,r=e.volume,l=e.flow,o=e.k;a<=.001||r<=.001||o<=.001||l<=.001?alert("One or more of the variables has not been correctly set, the graph will not render - ensure that all values are > 0"):0==t?(n.data=[],n.data=n.time.map((function(e,t){return{name:e,"C\u2090":a-o*r/l+o*r/l*Math.exp(-e*l/r)>=0?a-o*r/l+o*r/l*Math.exp(-e*l/r):0}})),n.forceUpdate()):(n.data=[],n.data=n.time.map((function(e,t){return{name:e,"C\u2090":a/(1+o*(r/l))*(1+o*r/l*Math.exp(l/r*(-1-r*o/l)*e))}})),n.forceUpdate())},n.state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:this.getDataPoints},"Generate C\u2090 (mol/L) vs time (s) curve")),r.a.createElement("span",null,"  ",this.data.length>0&&r.a.createElement(v.c,{width:800,height:400,data:this.data,margin:{top:10,right:20,bottom:10,left:10}},r.a.createElement(v.b,{type:"monotone",dataKey:"C\u2090",stroke:"#8884d8"}),r.a.createElement(v.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(v.e,{dataKey:"name",type:"number"}),r.a.createElement(v.f,{dataKey:""}),r.a.createElement(v.d,null))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={order:0,concentration:0,volume:0,flow:0,k:0},e.handleZero=function(){e.setState({order:0})},e.handleFirst=function(){e.setState({order:1})},e.handleChange1=function(t){t.target.value<=1e-8?console.log("You cannot have a negative or 0 concentration"):e.setState({concentration:t.target.value})},e.handleChange2=function(t){t.target.value<=1e-8?console.log("you have no flow or backflow apparently"):e.setState({flow:t.target.value})},e.handleChange3=function(t){t.target.value<=1e-8?console.log("Your reactor is imaginary"):e.setState({volume:t.target.value})},e.handleChange4=function(t){t.target.value<=1e-8?console.log("Need a reaction"):e.setState({k:t.target.value})},e.handleSubmit=function(e){alert("hi"),e.preventDefault()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{order:this.state.order,onZero:this.handleZero,onFirst:this.handleFirst}),r.a.createElement("div",{class:"container-fluid row justify-content-md-center"},r.a.createElement("div",null,r.a.createElement("div",{class:"col-lg-9 "},r.a.createElement(b,{variables:this.state,change2:this.handleChange2,change1:this.handleChange1,change3:this.handleChange3,change4:this.handleChange4})),r.a.createElement("div",{class:"col-lg-8 ",clearfix:!0,"visible-xs":!0},r.a.createElement("img",{src:h.a,class:"img-fluid rounded",alt:"CSTR"}))),r.a.createElement("div",{class:"col-lg-auto "},r.a.createElement(E,{variables:this.state}))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(m,null),r.a.createElement(f,null))}}]),a}(n.Component);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.27436117.chunk.js.map