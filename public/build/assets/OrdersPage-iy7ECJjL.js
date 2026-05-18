import{s as v}from"./index-adx-U4Ti.js";import{b as w,ao as S,Z as $,aa as a,w as o,u as _,a5 as u,aj as P,v as b,ag as x,t as c,aw as d,a9 as z,o as B,z as g,ay as y,f as j,af as N,ae as h}from"./app-D8dsrpWb.js";var D=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,T={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},O=w.extend({name:"tag",style:D,classes:T}),V={name:"BaseTag",extends:S,props:{value:null,severity:null,rounded:Boolean,icon:String},style:O,provide:function(){return{$pcTag:this,$parentInstance:this}}};function l(t){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(t)}function C(t,e,n){return(e=E(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t){var e=F(t,"string");return l(e)=="symbol"?e:e+""}function F(t,e){if(l(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(l(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var k={name:"Tag",extends:V,inheritAttrs:!1,computed:{dataP:function(){return $(C({rounded:this.rounded},this.severity,this.severity))}}},L=["data-p"];function A(t,e,n,i,f,r){return a(),o("span",u({class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[t.$slots.icon?(a(),_(P(t.$slots.icon),u({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(a(),o("span",u({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):b("",!0),t.value!=null||t.$slots.default?x(t.$slots,"default",{key:2},function(){return[c("span",u({class:t.cx("label")},t.ptm("label")),d(t.value),17)]}):b("",!0)],16,L)}k.render=A;const I={class:"mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8"},K={key:0,class:"mt-8 space-y-4"},M={key:1,class:"mt-8 space-y-4"},Y={class:"flex flex-wrap items-center justify-between gap-2"},Z={class:"font-medium"},q={class:"mt-2 text-sm text-nike-gray"},G={key:2,class:"mt-8 text-nike-gray"},Q={__name:"OrdersPage",setup(t){const e=h([]),n=h(!0);z(async()=>{const{data:r}=await B.get("/orders");e.value=r.data,n.value=!1});function i(r){return new Date(r).toLocaleDateString()}function f(r){return{pending:"warn",processing:"info",shipped:"info",delivered:"success",cancelled:"danger"}[r]||"secondary"}return(r,p)=>(a(),o("div",I,[p[0]||(p[0]=c("h1",{class:"section-title"},"Your Orders",-1)),n.value?(a(),o("div",K,[g(y(v),{height:"100px"}),g(y(v),{height:"100px"})])):e.value.length?(a(),o("div",M,[(a(!0),o(j,null,N(e.value,s=>{var m;return a(),o("div",{key:s.id,class:"rounded-xl border border-neutral-200 p-6"},[c("div",Y,[c("p",Z,"Order #"+d(s.id),1),g(y(k),{value:s.status,severity:f(s.status)},null,8,["value","severity"])]),c("p",q,d(i(s.created_at))+" · "+d((m=s.items)==null?void 0:m.length)+" items · $"+d(Number(s.total).toFixed(2)),1)])}),128))])):(a(),o("p",G,"No orders yet."))]))}};export{Q as default};
