"use strict";(self.webpackChunkphoneBook=self.webpackChunkphoneBook||[]).push([[633],{4633:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var o=e(168),r=e(9434),i=e(6876),s=e(225),a=e(2791),l=e(7222),c=e(184),d=function(n){var t=n.userId,e=(0,r.v9)(l.y).find((function(n){return n.id===t}));return(0,c.jsxs)("span",{children:["by ",e?e.name:"Unknown author"]})},u=e(8673),p=e(1527),x=function(n){var t=n.timestamp,e="";if(t){var o=(0,u.Z)(t),r=(0,p.Z)(o);e="".concat(r," ago")}return(0,c.jsxs)("span",{title:t,children:["\xa0 ",(0,c.jsx)("i",{children:e})]})},h=e(9439),f={thumbsUp:"\ud83d\udc4d\ud83c\udffb",wow:"\ud83d\ude3b",heart:"\u2665\ufe0f",rocket:"\ud83d\ude80",coffee:"\u2615\ufe0f"};var m,g,j,b,Z,v,w,C,k,y,I=function(n){var t=n.post,e=(0,r.I0)(),o=Object.entries(f).map((function(n){var o=(0,h.Z)(n,2),r=o[0],s=o[1];return(0,c.jsxs)("button",{type:"button",onClick:function(){return e((0,i.Vr)({postId:t.id,reaction:r}))},children:[s," ",t.reactions[r]]},r)}));return(0,c.jsx)("div",{children:o})},A=s.Z.section(m||(m=(0,o.Z)(["\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),B=s.Z.article(g||(g=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid whitesmoke;\n  background-color: white;\n  margin-bottom: 20px;\n  border-radius: 4px;\n"]))),S=s.Z.h3(j||(j=(0,o.Z)(["\n  color: #333;\n  font-size: 18px;\n  font-weight: bold;\n"]))),F=s.Z.p(b||(b=(0,o.Z)(["\n  color: #666;\n  font-size: 16px;\n"]))),P=function(){var n=(0,r.v9)(i.Co).slice().sort((function(n,t){return t.date.localeCompare(n.date)})).map((function(n){return(0,c.jsxs)(B,{children:[(0,c.jsx)(S,{children:n.title}),(0,c.jsx)(F,{children:n.content.substring(0,100)}),(0,c.jsxs)("p",{children:[(0,c.jsx)(d,{userId:n.userId}),(0,c.jsx)(x,{timestamp:n.date})]}),(0,c.jsx)(I,{post:n})]},n.id)}));return(0,c.jsxs)(A,{children:[(0,c.jsx)("h2",{children:"PostsList"}),n]})},T=s.Z.section(Z||(Z=(0,o.Z)(["\n  margin-top: 20px;\n"]))),z=s.Z.form(v||(v=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),L=s.Z.label(w||(w=(0,o.Z)(["\n  margin-bottom: 5px;\n  font-weight: bold;\n"]))),U=s.Z.input(C||(C=(0,o.Z)(["\n  padding: 5px;\n  margin-bottom: 10px;\n"]))),H=s.Z.textarea(k||(k=(0,o.Z)(["\n  padding: 5px;\n  margin-bottom: 10px;\n"]))),O=s.Z.button(y||(y=(0,o.Z)(["\n  padding: 10px;\n  background-color: #333;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]))),V=function(){var n=(0,r.I0)(),t=(0,a.useState)(""),e=(0,h.Z)(t,2),o=e[0],s=e[1],d=(0,a.useState)(""),u=(0,h.Z)(d,2),p=u[0],x=u[1],f=(0,a.useState)(""),m=(0,h.Z)(f,2),g=m[0],j=m[1],b=(0,r.v9)(l.y),Z=Boolean(o)&&Boolean(p)&&Boolean(g),v=b.map((function(n){return(0,c.jsx)("option",{value:n.id,children:n.name},n.id)}));return(0,c.jsxs)(T,{children:[(0,c.jsx)("h2",{children:"Add a new Post"}),(0,c.jsxs)(z,{children:[(0,c.jsx)(L,{htmlFor:"postTitle",children:"Post Title"}),(0,c.jsx)(U,{type:"text",id:"postTitle",name:"postTitle",value:o,onChange:function(n){return s(n.target.value)}}),(0,c.jsx)(L,{htmlFor:"postContent",children:"Content:"}),(0,c.jsx)(H,{id:"postContent",name:"postContent",value:p,onChange:function(n){return x(n.target.value)}}),(0,c.jsx)("label",{htmlFor:"postAuthor",children:"Author:"}),(0,c.jsxs)("select",{id:"postAuthor",value:g,onChange:function(n){return j(n.target.value)},children:[(0,c.jsx)("option",{value:""}),v]}),(0,c.jsx)(O,{type:"button",onClick:function(){o&&p&&(n((0,i.Yr)(o,p,g)),s(""),x(""))},disabled:!Z,children:"Save Post"})]})]})},W=e(9375),Y={container:{minHeight:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center"}};function q(){var n=(0,W.a)().isLoggedIn;return(0,c.jsxs)("div",{style:{textAlign:"center"},children:[(0,c.jsxs)("h1",{style:Y.title,children:["Contacts manager welcome page"," "]}),n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(V,{}),(0,c.jsx)(P,{})]}):(0,c.jsx)(P,{})]})}}}]);
//# sourceMappingURL=633.ca77ce2b.chunk.js.map