import{r as c}from"./chunks/index.f9c517f6.js";/* empty css                              */import{j as r}from"./chunks/jsx-runtime.f69477d8.js";const m={_origin:"https://api.emailjs.com"},h=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},u=(t,e,i)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class p{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const x=(t,e,i={})=>new Promise((l,o)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:s})=>{const n=new p(s);n.status===200||n.text==="OK"?l(n):o(n)}),a.addEventListener("error",({target:s})=>{o(new p(s))}),a.open("POST",m._origin+t,!0),Object.keys(i).forEach(s=>{a.setRequestHeader(s,i[s])}),a.send(e)}),f=(t,e,i,l)=>{const o=l||m._userID;u(o,t,e);const a={lib_version:"3.10.0",user_id:o,service_id:t,template_id:e,template_params:i};return x("/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})},j=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},g=(t,e,i,l)=>{const o=l||m._userID,a=j(i);u(o,t,e);const s=new FormData(a);return s.append("lib_version","3.10.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",o),x("/api/v1.0/email/send-form",s)},_={init:h,send:f,sendForm:g},w=({code:t,template:e,api:i})=>{const l=c.exports.useRef(),[o,a]=c.exports.useState(!1),s=n=>{a(!1),n.preventDefault(),_.sendForm(t,e,l.current,i).then(d=>{n.target.reset(),console.log(d.text),d.text==="OK"&&a(!0)},d=>{console.log(d.text),a(!1)})};return r.exports.jsxs("form",{ref:l,onSubmit:n=>s(n),className:"headline",children:[r.exports.jsxs("fieldset",{children:[r.exports.jsx("label",{htmlFor:"name",className:"text-gradient",children:"Name"}),r.exports.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Your name",required:!0})]}),r.exports.jsxs("fieldset",{children:[r.exports.jsx("label",{htmlFor:"email",className:"text-gradient",children:"Email"}),r.exports.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Your email",pattern:"[^ @]*@[^ @]*",required:!0}),r.exports.jsx("p",{className:"error-message",children:"Please enter a valid e-mail address."})]}),r.exports.jsxs("fieldset",{children:[r.exports.jsx("label",{htmlFor:"message",className:"text-gradient",children:"Message"}),r.exports.jsx("textarea",{name:"message",id:"message",placeholder:"Your message",required:!0})]}),r.exports.jsx("fieldset",{className:"center",children:r.exports.jsx("button",{type:"submit",children:"Send"})}),o&&r.exports.jsx("h2",{className:"text-white",children:"Message sent! \u{1F973}"})]})};export{w as default};
