(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={button:"Contactform_button__1o09T"}},12:function(e,t,n){e.exports={container:"App_container__1eWRr"}},14:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(13),l=n(2),u=n(4),m=n(5),s=n(8),d=n(7),f=n(6),h=n.n(f),b=function(e){var t=e.items,n=e.onDelete;return t.length>0&&r.a.createElement("ul",null,t.map((function(e){var t=e.name,a=e.id,o=e.number;return r.a.createElement("li",{key:a},r.a.createElement("span",null,t," ",o),r.a.createElement("button",{type:"button",onClick:function(){return n(a)}},"Delete"))})))},p=n(3),v=n(11),C=n.n(v),E=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target;e.setState(Object(p.a)({},n.name,n.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.name&&e.state.number&&e.props.onAddItem(Object(l.a)({},e.state)),e.clearState()},e.clearState=function(){e.setState({name:"",number:""})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:this.handleChange,value:t}),r.a.createElement("input",{type:"text",name:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440",onChange:this.handleChange,value:n}),r.a.createElement("button",{type:"submit",className:C.a.button},"Add contact"))}}]),n}(a.Component),y=function(e){var t=e.onSetFilter,n=h()();return r.a.createElement("form",null,r.a.createElement("h3",null,"Find contact by name"),r.a.createElement("input",{onChange:t,type:"text",name:"filter",id:n,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}))},S=n(12),g=n.n(S),j=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.filterContacts=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},e.setFilter=function(t){var n=t.target;e.setState({filter:n.value})},e.addItem=function(t){if(e.state.contacts.every((function(e){return e.name.toLocaleLowerCase()!==t.name.toLocaleLowerCase()}))){var n=Object(l.a)({},t,{id:h()()});e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[n])}}))}else alert("".concat(t.name," is already in contacts!"))},e.deleteItem=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.filterContacts(t,n);return r.a.createElement("div",{className:g.a.container},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(E,{onAddItem:this.addItem}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(y,{onSetFilter:this.setFilter}),r.a.createElement(b,{items:a,onDelete:this.deleteItem}))}}]),n}(a.Component);c.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9f54fc93.chunk.js.map