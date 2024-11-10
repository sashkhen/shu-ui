import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as Q,L as U}from"./Loader-DRSetZHN.js";import"./index-DJO9vBfz.js";const W="shu-button",X="shu-button__content",Y="shu-button__loader",x={root:W,content:X,loader:Y},a=({size:n="medium",disabled:l=!1,block:t=!1,shape:M="default",variant:G="solid",raised:H=!1,loading:j=!1,className:J,children:K,...P})=>e.jsxs("button",{type:"button","data-testid":"Button",className:Q(x.root,J),disabled:l,"data-shu-variant":G,"data-shu-size":n,"data-shu-shape":M,"data-shu-raised":H,"data-shu-loading":j,"data-shu-block":t,...P,children:[j?e.jsx(U,{size:"small",className:x.loader}):null,e.jsx("span",{className:x.content,children:K})]});a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"solid" | "filled" | "outlined" | "text" | "link"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"text"'},{name:"literal",value:'"link"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"default" | "circle" | "round"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"circle"'},{name:"literal",value:'"round"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},raised:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},block:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const de={component:a,parameters:{layout:"centered"}},s={args:{children:"Button"}},Z={decorators:[n=>e.jsx("div",{style:{width:"50vw",textAlign:"center"},children:e.jsx(n,{})})]},i={...Z,args:{children:"Button",block:!0}},r=({children:n})=>e.jsx("div",{style:{marginBottom:16,display:"flex",gap:16,justifyContent:"center",alignItems:"center"},children:n}),h=()=>e.jsx("span",{style:{width:1,height:16,backgroundColor:"rgba(0,0,0,.2)"}}),$={render:({variant:n,children:l,...t})=>e.jsxs(r,{children:[e.jsx(a,{variant:"solid",...t,children:"Solid"}),e.jsx(a,{variant:"outlined",...t,children:"Outlined"}),e.jsx(a,{variant:"filled",...t,children:"Filled"}),e.jsx(a,{variant:"text",...t,children:"Text"}),e.jsx(a,{variant:"link",...t,children:"Link"}),e.jsx(h,{}),e.jsx(a,{variant:n,...t,children:l})]})},d={...$,args:{children:"Button"}},ee={render:({size:n,children:l,...t})=>e.jsxs(r,{children:[e.jsx(a,{size:"small",...t,children:"Small"}),e.jsx(a,{size:"medium",...t,children:"Medium"}),e.jsx(a,{size:"large",...t,children:"Large"}),e.jsx(h,{}),e.jsx(a,{size:n,...t,children:l})]})},o={...ee,args:{children:"Button"}},ae={render:({shape:n,children:l,...t})=>e.jsxs(r,{children:[e.jsx(a,{shape:"default",...t,children:"Default"}),e.jsx(a,{shape:"round",...t,children:"Rounded"}),e.jsx(a,{shape:"circle",...t,children:"++"}),e.jsx(h,{}),e.jsx(a,{shape:n,...t,children:l})]})},c={...ae,args:{children:"Button"}},le={render:({raised:n,...l})=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(a,{raised:!1,variant:"solid",...l,children:"Solid"}),e.jsx(a,{raised:!1,variant:"outlined",...l,children:"Outlined"}),e.jsx(a,{raised:!1,variant:"filled",...l,children:"Filled"}),e.jsx(a,{raised:!1,variant:"text",...l,children:"Text"}),e.jsx(a,{raised:!1,variant:"link",...l,children:"Link"})]}),e.jsxs(r,{children:[e.jsx(a,{raised:n,variant:"solid",...l,children:"Solid"}),e.jsx(a,{raised:n,variant:"outlined",...l,children:"Outlined"}),e.jsx(a,{raised:n,variant:"filled",...l,children:"Filled"}),e.jsx(a,{raised:n,variant:"text",...l,children:"Text"}),e.jsx(a,{raised:n,variant:"link",...l,children:"Link"})]})]})},u={...le,args:{raised:!0}},ne={render:({loading:n,...l})=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(a,{loading:!1,variant:"solid",...l,children:"Solid"}),e.jsx(a,{loading:!1,variant:"outlined",...l,children:"Outlined"}),e.jsx(a,{loading:!1,variant:"filled",...l,children:"Filled"}),e.jsx(a,{loading:!1,variant:"text",...l,children:"Text"}),e.jsx(a,{loading:!1,variant:"link",...l,children:"Link"})]}),e.jsxs(r,{children:[e.jsx(a,{loading:n,variant:"solid",...l,children:"Solid"}),e.jsx(a,{loading:n,variant:"outlined",...l,children:"Outlined"}),e.jsx(a,{loading:n,variant:"filled",...l,children:"Filled"}),e.jsx(a,{loading:n,variant:"text",...l,children:"Text"}),e.jsx(a,{loading:n,variant:"link",...l,children:"Link"})]})]})},m={...ne,args:{loading:!0}},te={render:({disabled:n,...l})=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(a,{disabled:!1,variant:"solid",...l,children:"Solid"}),e.jsx(a,{disabled:!1,variant:"outlined",...l,children:"Outlined"}),e.jsx(a,{disabled:!1,variant:"filled",...l,children:"Filled"}),e.jsx(a,{disabled:!1,variant:"text",...l,children:"Text"}),e.jsx(a,{disabled:!1,variant:"link",...l,children:"Link"})]}),e.jsxs(r,{children:[e.jsx(a,{disabled:n,variant:"solid",...l,children:"Solid"}),e.jsx(a,{disabled:n,variant:"outlined",...l,children:"Outlined"}),e.jsx(a,{disabled:n,variant:"filled",...l,children:"Filled"}),e.jsx(a,{disabled:n,variant:"text",...l,children:"Text"}),e.jsx(a,{disabled:n,variant:"link",...l,children:"Link"})]})]})},p={...te,args:{disabled:!0}};var f,v,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var k,S,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BlockTemplate,
  args: {
    children: "Button",
    block: true
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var B,y,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...VariantTemplate,
  args: {
    children: "Button"
  }
}`,...(L=(y=d.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var F,V,z;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...SizeTemplate,
  args: {
    children: "Button"
  }
}`,...(z=(V=o.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var g,O,_;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...ShapeTemplate,
  args: {
    children: "Button"
  }
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var q,w,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...RaisedTemplate,
  args: {
    raised: true
  }
}`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var R,N,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...LoadingTemplate,
  args: {
    loading: true
  }
}`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var E,I,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DisabledTemplate,
  args: {
    disabled: true
  }
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const oe=["Default","Block","Variant","Size","Shape","Raised","Loading","Disabled"];export{i as Block,s as Default,p as Disabled,m as Loading,u as Raised,c as Shape,o as Size,d as Variant,oe as __namedExportsOrder,de as default};
