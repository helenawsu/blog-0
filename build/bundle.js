var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function i(){return t=" ",document.createTextNode(t);var t}let a;function u(t){a=t}const d=[],f=[],h=[],p=[],m=Promise.resolve();let $=!1;function v(t){h.push(t)}const g=new Set;let y=0;function b(){const t=a;do{for(;y<d.length;){const t=d[y];y++,u(t),_(t.$$)}for(u(null),d.length=0,y=0;f.length;)f.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];g.has(e)||(g.add(e),e())}h.length=0}while(d.length);for(;p.length;)p.pop()();$=!1,g.clear(),u(t)}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const w=new Set;function k(t,e){-1===t.$$.dirty[0]&&(d.push(t),$||($=!0,m.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(r,c,i,d,f,h,p,m=[-1]){const $=a;u(r);const g=r.$$={fragment:null,ctx:null,props:h,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||($?$.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:c.target||$.$$.root};p&&p(g.root);let y=!1;if(g.ctx=i?i(r,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&k(r,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!d&&d(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();c.intro&&((_=r.$$.fragment)&&_.i&&(w.delete(_),_.i(x))),function(t,n,r,c){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,r),c||v((()=>{const n=i.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(v)}(r,c.target,c.anchor,c.customElement),b()}var _,x;u($)}function M(e){let n,o;return{c(){var t,e,s,r;t="main",n=document.createElement(t),n.innerHTML='<p class="lastupdatetime svelte-tvkhvw">this page was last updated on Jun 23, 2022</p> \n  <section><h1 class="title svelte-tvkhvw">My First architectural model</h1></section> \n  <section><h1 class="svelte-tvkhvw">0.Overview</h1> \n    <p style="position: relative; left: 170px; font-size: 1em" class="svelte-tvkhvw">the very start–—a wall</p> \n    \n    <img src="./images/IMG_2311.webp" width="512"/></section> \n  <section><h1 class="svelte-tvkhvw">1.Conceptual Model</h1></section> \n  <section><h1 class="svelte-tvkhvw">2.Translational Model</h1></section> \n  <section><h1 class="svelte-tvkhvw">3.Finish Model</h1></section>',o=i(),e=n,s="class",null==(r="svelte-tvkhvw")?e.removeAttribute(s):e.getAttribute(s)!==r&&e.setAttribute(s,r)},m(t,e){c(t,n,e),c(t,o,e)},p:t,i:t,o:t,d(t){t&&l(n),t&&l(o)}}}const E=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),x(this,t,null,M,r,{})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{E.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),E}();
//# sourceMappingURL=bundle.js.map
