import{b as P,R as V,Z as z,al as A,ai as q,aI as F,aa as g,w as h,t as s,ag as L,a6 as M,a5 as p,v as O,aw as f,a2 as x,ab as m,ah as C,f as H,af as U,u as $,x as X,aH as I,aD as W,az as Y,aA as Z,a9 as G,o as J,z as B,ay as y,an as Q,aB as tt,ae as S,y as et}from"./app-D8dsrpWb.js";import{s as nt}from"./index-adx-U4Ti.js";import{s as K}from"./index-C040EiIf.js";var ot=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,lt={root:function(e){var n=e.instance,l=e.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-fluid":l.fluid,"p-togglebutton-sm p-inputfield-sm":l.size==="small","p-togglebutton-lg p-inputfield-lg":l.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},at=P.extend({name:"togglebutton",style:ot,classes:lt}),it={name:"BaseToggleButton",extends:K,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:at,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function rt(t,e,n){return(e=st(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function st(t){var e=ut(t,"string");return v(e)=="symbol"?e:e+""}function ut(t,e){if(v(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var l=n.call(t,e);if(v(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var R={name:"ToggleButton",extends:it,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit("change",e))},onBlur:function(e){var n,l;(n=(l=this.formField).onBlur)===null||n===void 0||n.call(l,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return A(this.onLabel)&&A(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return z(rt({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:V}},dt=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],ct=["data-p"];function gt(t,e,n,l,u,o){var i=q("ripple");return F((g(),h("button",p({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:e[0]||(e[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":t.disabled,"data-p":o.dataP}),[s("span",p({class:t.cx("content")},o.getPTOptions("content"),{"data-p":o.dataP}),[L(t.$slots,"default",{},function(){return[L(t.$slots,"icon",{value:t.d_value,class:M(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(g(),h("span",p({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},o.getPTOptions("icon")),null,16)):O("",!0)]}),s("span",p({class:t.cx("label")},o.getPTOptions("label")),f(o.label),17)]})],16,ct)],16,dt)),[[i]])}R.render=gt;var bt=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,pt={root:function(e){var n=e.props,l=e.instance;return["p-selectbutton p-component",{"p-invalid":l.$invalid,"p-selectbutton-fluid":n.fluid}]}},ft=P.extend({name:"selectbutton",style:bt,classes:pt}),ht={name:"BaseSelectButton",extends:K,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:ft,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function yt(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=D(t))||e){n&&(t=n);var l=0,u=function(){};return{s:u,n:function(){return l>=t.length?{done:!0}:{done:!1,value:t[l++]}},e:function(d){throw d},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var d=n.next();return i=d.done,d},e:function(d){a=!0,o=d},f:function(){try{i||n.return==null||n.return()}finally{if(a)throw o}}}}function vt(t){return kt(t)||St(t)||D(t)||mt()}function mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,e){if(t){if(typeof t=="string")return _(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function St(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kt(t){if(Array.isArray(t))return _(t)}function _(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,l=Array(e);n<e;n++)l[n]=t[n];return l}var E={name:"SelectButton",extends:ht,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(e){return this.optionLabel?m(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?m(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?m(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?m(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var n=this.isSelected(e);return this.multiple?n&&this.d_value.length===1:n},onOptionSelect:function(e,n,l){var u=this;if(!(this.disabled||this.isOptionDisabled(n)||this.isOptionReadonly(n))){var o=this.isSelected(n),i=this.getOptionValue(n),a;if(this.multiple)if(o){if(a=this.d_value.filter(function(r){return!x(r,i,u.equalityKey)}),!this.allowEmpty&&a.length===0)return}else a=this.d_value?[].concat(vt(this.d_value),[i]):[i];else{if(o&&!this.allowEmpty)return;a=o?null:i}this.writeValue(a,e),this.$emit("change",{originalEvent:e,value:a})}},isSelected:function(e){var n=!1,l=this.getOptionValue(e);if(this.multiple){if(this.d_value){var u=yt(this.d_value),o;try{for(u.s();!(o=u.n()).done;){var i=o.value;if(x(i,l,this.equalityKey)){n=!0;break}}}catch(a){u.e(a)}finally{u.f()}}}else n=x(this.d_value,l,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return z({invalid:this.$invalid})}},directives:{ripple:V},components:{ToggleButton:R}},wt=["aria-labelledby","data-p"];function xt(t,e,n,l,u,o){var i=C("ToggleButton");return g(),h("div",p({class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root"),{"data-p":o.dataP}),[(g(!0),h(H,null,U(t.options,function(a,r){return g(),$(i,{key:o.getOptionRenderKey(a),modelValue:o.isSelected(a),onLabel:o.getOptionLabel(a),offLabel:o.getOptionLabel(a),disabled:t.disabled||o.isOptionDisabled(a),unstyled:t.unstyled,size:t.size,readonly:o.isOptionReadonly(a),onChange:function(k){return o.onOptionSelect(k,a,r)},pt:t.ptm("pcToggleButton")},X({_:2},[t.$slots.option?{name:"default",fn:I(function(){return[L(t.$slots,"option",{option:a,index:r},function(){return[s("span",p({ref_for:!0},t.ptm("pcToggleButton").label),f(o.getOptionLabel(a)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,wt)}E.render=xt;const Bt={key:0,class:"mx-auto max-w-7xl px-4 py-16"},Lt={key:1,class:"mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"},Ot={class:"grid gap-10 lg:grid-cols-2"},_t={class:"aspect-square overflow-hidden rounded-2xl bg-nike-light"},Tt=["src","alt"],At={class:"text-sm text-nike-gray"},Pt={class:"mt-2 text-3xl font-medium"},Vt={class:"mt-4 text-xl"},zt={class:"mt-6 text-nike-gray"},Ct={class:"mt-8"},$t={class:"mt-8 flex flex-wrap gap-4"},It="https://placehold.co/800x800/f5f5f5/111111?text=Nike",Et={__name:"ProductPage",setup(t){const e=tt(),n=W(),l=Y(),u=Z(),o=S(null),i=S(!0),a=S(!1),r=S("M"),d=["XS","S","M","L","XL"];G(async()=>{const{data:b}=await J.get(`/products/${e.params.slug}`);o.value=b,i.value=!1});async function k(){var b,c;a.value=!0;try{await u.addToCart(o.value.id,1,r.value),n.add({severity:"success",summary:"Added to bag",life:3e3})}catch(w){n.add({severity:"error",summary:((c=(b=w.response)==null?void 0:b.data)==null?void 0:c.message)||"Could not add to bag",life:4e3})}finally{a.value=!1}}function N(b){return Number(b).toFixed(2)}return(b,c)=>{var T;const w=C("RouterLink");return i.value?(g(),h("div",Bt,[B(y(nt),{width:"100%",height:"400px"})])):o.value?(g(),h("div",Lt,[s("div",Ot,[s("div",_t,[s("img",{src:o.value.image||It,alt:o.value.name,class:"h-full w-full object-cover"},null,8,Tt)]),s("div",null,[s("p",At,f((T=o.value.category)==null?void 0:T.name),1),s("h1",Pt,f(o.value.name),1),s("p",Vt,"$"+f(N(o.value.price)),1),s("p",zt,f(o.value.description),1),s("div",Ct,[c[1]||(c[1]=s("label",{class:"text-sm font-medium"},"Size",-1)),B(y(E),{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=j=>r.value=j),options:d,class:"mt-2"},null,8,["modelValue"])]),s("div",$t,[B(y(Q),{label:"Add to Bag",class:"btn-nike !rounded-full",loading:a.value,disabled:!y(l).isAuthenticated,onClick:k},null,8,["loading","disabled"]),y(l).isAuthenticated?O("",!0):(g(),$(w,{key:0,to:"/login",class:"btn-nike-outline"},{default:I(()=>[...c[2]||(c[2]=[et(" Sign in to purchase ",-1)])]),_:1}))])])])])):O("",!0)}}};export{Et as default};
