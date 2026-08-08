import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{n as t,r as n,t as r}from"./vendor-blWa-pWN.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=t(),o=`/king-canopy-tree-care/assets/logo-qwZffYYO.webp`,s=r(),c=[{label:`Home`,href:`#home`,id:`home`},{label:`About`,href:`#about`,id:`about`},{label:`Services`,href:`#services`,id:`services`},{label:`Testimonials`,href:`#testimonials`,id:`testimonials`},{label:`Contact`,href:`#contact`,id:`contact`}];function l(){let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),[a,l]=(0,i.useState)(`home`);(0,i.useEffect)(()=>{function e(){r(window.scrollY>40)}return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,i.useEffect)(()=>{let e=c.map(e=>e.id),t=[];function n(){t=e.map(e=>{let t=document.getElementById(e);return{id:e,top:t?t.offsetTop:0}})}function r(){let n=window.scrollY+80+10,r=e[0];for(let{id:e,top:i}of t)i<=n&&(r=e);l(r)}let i;function a(){clearTimeout(i),i=setTimeout(n,150)}return n(),r(),window.addEventListener(`scroll`,r,{passive:!0}),window.addEventListener(`resize`,a,{passive:!0}),()=>{window.removeEventListener(`scroll`,r),window.removeEventListener(`resize`,a),clearTimeout(i)}},[]);let u=n,d=u?`bg-white shadow-md`:`bg-transparent`,f=u?`text-green-900`:`text-white`,p=u?`text-green-600`:`text-[#c8e6a0]`,m=u?`bg-gray-100 border-gray-200`:`bg-white/10 border-white/15`,h=u?`text-gray-600 hover:text-green-700`:`text-white/80 hover:text-white`,g=u?`bg-green-700 !text-white`:`bg-white/20 !text-white`,_=u?`text-gray-500 hover:text-green-700`:`text-white/70 hover:text-white`,v=u?`bg-green-700 text-white hover:bg-green-800`:`bg-white text-[#1e3a1e] hover:bg-[#c8e6a0]`,y=u?`bg-gray-100 border-gray-200 text-gray-700`:`bg-white/10 border-white/15 text-white`;return(0,s.jsxs)(`header`,{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${d}`,style:{transitionProperty:`background-color, box-shadow`},children:[(0,s.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-10`,children:(0,s.jsxs)(`div`,{className:`flex items-center justify-between ${u?`h-16`:`h-20 mt-1`} transition-all duration-300`,children:[(0,s.jsxs)(`a`,{href:`#home`,className:`flex items-center gap-3 group flex-shrink-0`,children:[(0,s.jsx)(`div`,{className:`w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 transition-colors duration-300
              ${u?`ring-green-200`:`ring-white/30`}`,children:(0,s.jsx)(`img`,{src:o,alt:`King Canopy Tree Care logo`,className:`w-full h-full object-cover`})}),(0,s.jsxs)(`div`,{className:`leading-tight`,children:[(0,s.jsx)(`p`,{className:`font-bold text-sm tracking-wide transition-colors duration-300 ${f}`,children:`King Canopy`}),(0,s.jsx)(`p`,{className:`text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 ${p}`,children:`Tree Care`})]})]}),(0,s.jsx)(`nav`,{className:`hidden md:flex items-center gap-0.5 backdrop-blur-md border rounded-full px-2 py-1.5 transition-all duration-300 ${m}`,children:c.map(e=>(0,s.jsx)(`a`,{href:e.href,className:`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200
                  ${h}
                  ${a===e.id?g:``}
                `,children:e.label},e.label))}),(0,s.jsxs)(`div`,{className:`hidden md:flex items-center gap-3`,children:[(0,s.jsxs)(`a`,{href:`tel:+17166717373`,className:`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${_}`,children:[(0,s.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})}),`716-671-7373`]}),(0,s.jsx)(`a`,{href:`#contact`,className:`font-bold text-sm px-5 py-2 rounded-full shadow transition-all duration-300 ${v}`,children:`Get in touch`})]}),(0,s.jsx)(`button`,{className:`md:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${y}`,onClick:()=>t(!e),"aria-label":`Toggle menu`,"aria-expanded":e,children:(0,s.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:e?(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`}):(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 6h16M4 12h16M4 18h16`})})})]})}),(0,s.jsx)(`div`,{className:`md:hidden overflow-hidden transition-all duration-300 ${e?`max-h-96`:`max-h-0`}`,children:(0,s.jsxs)(`nav`,{className:`mx-4 mt-2 border rounded-2xl p-4 flex flex-col gap-1 backdrop-blur-lg transition-all duration-300
          ${u?`bg-white border-gray-100 shadow-lg`:`bg-[#1e3a1e]/95 border-white/10`}`,children:[c.map(e=>(0,s.jsx)(`a`,{href:e.href,className:`font-medium py-2.5 px-4 rounded-xl transition-all
                ${u?`text-gray-600 hover:text-green-700 hover:bg-green-50 ${a===e.id?`bg-green-700 !text-white`:``}`:`text-white/80 hover:text-white hover:bg-white/10 ${a===e.id?`bg-white/20 !text-white`:``}`}`,onClick:()=>t(!1),children:e.label},e.label)),(0,s.jsx)(`a`,{href:`#contact`,className:`mt-2 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-2.5 rounded-full text-center transition-colors`,onClick:()=>t(!1),children:`Get in touch`})]})})]})}var u=`/king-canopy-tree-care/assets/hero-BcfffaQu.webp`,d=`/king-canopy-tree-care/assets/tree-trimming-BX3qgdRP.webp`,f=`/king-canopy-tree-care/assets/tree-removal-D6KjdEKC.webp`,p=`/king-canopy-tree-care/assets/stump-grinding-DcJUL5qm.webp`,m=`/king-canopy-tree-care/assets/emergency-tree-CH0sz8TB.webp`,h=`/king-canopy-tree-care/assets/tree-health-C1jC0eai.webp`,g=`/king-canopy-tree-care/assets/landscaping-D-R25kR3.webp`;function _({className:e=`w-5 h-5`}){return(0,s.jsx)(`svg`,{className:e,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})})}function v({className:e=`w-6 h-6`}){return(0,s.jsx)(`svg`,{className:e,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z`})})}function y({className:e=`w-5 h-5`}){return(0,s.jsx)(`svg`,{className:e,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})})}function b({className:e=`w-6 h-6`}){return(0,s.jsx)(`svg`,{className:e,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18L18 6M6 6l12 12`})})}var x=`716-671-7373`,S=`tel:+17166717373`;function C({isOpen:e,onClose:t}){let[n,r]=(0,i.useState)({name:``,phone:``,email:``,service:`trimming`,treeSize:`medium`,details:``}),[a,o]=(0,i.useState)(!1);if(!e)return null;function c(e){e.preventDefault(),o(!0)}function l(){o(!1),t()}return(0,s.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in`,children:(0,s.jsxs)(`div`,{className:`relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100`,children:[(0,s.jsxs)(`div`,{className:`bg-gradient-to-r from-emerald-800 to-green-700 p-6 text-white relative`,children:[(0,s.jsx)(`button`,{onClick:t,className:`absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors`,"aria-label":`Close quote modal`,children:(0,s.jsx)(b,{className:`w-5 h-5`})}),(0,s.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 bg-emerald-500/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 border border-emerald-400/30 mb-2`,children:[(0,s.jsx)(v,{className:`w-3.5 h-3.5`}),`100% Free & No Obligation`]}),(0,s.jsx)(`h3`,{className:`text-2xl font-bold`,children:`Request an Instant Quote`}),(0,s.jsx)(`p`,{className:`text-emerald-100/90 text-sm mt-1`,children:`Get an expert arborist estimate within 24 hours.`})]}),(0,s.jsx)(`div`,{className:`p-6`,children:a?(0,s.jsxs)(`div`,{className:`py-8 text-center space-y-4`,children:[(0,s.jsx)(`div`,{className:`w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner`,children:(0,s.jsx)(y,{className:`w-8 h-8`})}),(0,s.jsx)(`h4`,{className:`text-2xl font-extrabold text-slate-900`,children:`Request Received!`}),(0,s.jsxs)(`p`,{className:`text-slate-600 text-sm max-w-xs mx-auto`,children:[`Thank you, `,(0,s.jsx)(`span`,{className:`font-semibold text-slate-800`,children:n.name}),`. Our lead arborist will review your details and call you at `,(0,s.jsx)(`span`,{className:`font-semibold text-slate-800`,children:n.phone}),` shortly.`]}),(0,s.jsx)(`button`,{onClick:l,className:`mt-4 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-emerald-700/20`,children:`Close & Return to Site`})]}):(0,s.jsxs)(`form`,{onSubmit:c,className:`space-y-4`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1`,children:`Full Name *`}),(0,s.jsx)(`input`,{type:`text`,required:!0,placeholder:`e.g. Michael Scott`,value:n.name,onChange:e=>r({...n,name:e.target.value}),className:`w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all`})]}),(0,s.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1`,children:`Phone Number *`}),(0,s.jsx)(`input`,{type:`tel`,required:!0,placeholder:`(555) 000-0000`,value:n.phone,onChange:e=>r({...n,phone:e.target.value}),className:`w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1`,children:`Service Needed`}),(0,s.jsxs)(`select`,{value:n.service,onChange:e=>r({...n,service:e.target.value}),className:`w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all bg-white`,children:[(0,s.jsx)(`option`,{value:`trimming`,children:`Tree Trimming & Pruning`}),(0,s.jsx)(`option`,{value:`removal`,children:`Tree Removal`}),(0,s.jsx)(`option`,{value:`stump`,children:`Stump Grinding`}),(0,s.jsx)(`option`,{value:`emergency`,children:`Emergency Storm Service`}),(0,s.jsx)(`option`,{value:`health`,children:`Tree Health Care`}),(0,s.jsx)(`option`,{value:`clearing`,children:`Lot & Land Clearing`})]})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1`,children:`Tree Height Estimate`}),(0,s.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:[{id:`small`,label:`Small (< 15ft)`},{id:`medium`,label:`Medium (15-30ft)`},{id:`large`,label:`Large (30ft+)`}].map(e=>(0,s.jsx)(`button`,{type:`button`,onClick:()=>r({...n,treeSize:e.id}),className:`py-2 px-2 text-xs font-medium rounded-xl border transition-all ${n.treeSize===e.id?`border-emerald-600 bg-emerald-50 text-emerald-800 font-bold shadow-sm`:`border-slate-200 text-slate-600 hover:bg-slate-50`}`,children:e.label},e.id))})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`label`,{className:`block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1`,children:`Project Details / Address (Optional)`}),(0,s.jsx)(`textarea`,{rows:2,placeholder:`Describe your trees, location, or emergency details...`,value:n.details,onChange:e=>r({...n,details:e.target.value}),className:`w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-slate-800 text-sm transition-all resize-none`})]}),(0,s.jsxs)(`button`,{type:`submit`,className:`w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 text-base`,children:[(0,s.jsx)(`span`,{children:`Submit Quote Request`}),(0,s.jsx)(w,{className:`w-5 h-5`})]}),(0,s.jsx)(`div`,{className:`flex items-center justify-center gap-4 text-xs text-slate-500 pt-1 border-t border-slate-100`,children:(0,s.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,s.jsx)(_,{className:`w-3.5 h-3.5 text-emerald-600`}),`Need emergency help? Call `,(0,s.jsx)(`a`,{href:S,className:`font-semibold text-emerald-700 hover:underline`,children:x})]})})]})})]})})}function w({className:e=`w-5 h-5`}){return(0,s.jsx)(`svg`,{className:e,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M14 5l7 7m0 0l-7 7m7-7H3`})})}var T=[{img:m,label:`Emergency`,sub:`24/7`,rotate:-34,tx:-450,ty:90,w:80,h:96,scrollSpeed:.18,isFar:!0},{img:d,label:`Trimming`,sub:`Crown & shape`,rotate:-22,tx:-300,ty:30,w:90,h:112,scrollSpeed:.12,isFar:!1,priority:!0},{img:f,label:`Removal`,sub:`Safe & clean`,rotate:-10,tx:-160,ty:-20,w:90,h:112,scrollSpeed:.07,isFar:!1},{img:p,label:`Stump`,sub:`Below grade`,rotate:10,tx:160,ty:-20,w:90,h:112,scrollSpeed:.07,isFar:!1},{img:h,label:`Health`,sub:`Deep root`,rotate:22,tx:300,ty:30,w:90,h:112,scrollSpeed:.12,isFar:!1},{img:g,label:`Clearing`,sub:`Land & lot`,rotate:34,tx:450,ty:90,w:80,h:96,scrollSpeed:.18,isFar:!0}];function E({card:e,scrollY:t,fanVisible:n}){let{img:r,label:i,sub:a,rotate:o,tx:c,ty:l,w:u,h:d,scrollSpeed:f,isFar:p,priority:m}=e,h=-t*f;return(0,s.jsx)(`div`,{className:`absolute ${p?`hidden lg:block`:``}`,style:{transition:n?`transform 0.9s cubic-bezier(0.34,1.42,0.64,1), opacity 0.6s ease`:`none`,transform:n?`translate3d(${c}px, ${l+h}px, 0) rotate(${o}deg)`:`translate3d(0, 40px, 0) rotate(0deg)`,opacity:+!!n,zIndex:10,willChange:`transform`},children:(0,s.jsxs)(`div`,{className:`
          relative
          overflow-hidden
          shadow-2xl
          cursor-pointer
          select-none
          hover:scale-105
          transition-transform
          duration-200
        `,style:{width:u,height:d,borderRadius:18,border:`2px solid rgba(255,255,255,0.6)`},children:[(0,s.jsx)(`img`,{src:r,alt:i,width:u,height:d,loading:e.priority?`eager`:`lazy`,fetchpriority:e.priority?`high`:`auto`,decoding:e.priority?`sync`:`async`,className:`absolute inset-0 w-full h-full object-cover`}),(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0`,style:{background:`linear-gradient(to bottom, transparent 38%, rgba(0,0,0,0.78) 100%)`}}),(0,s.jsxs)(`div`,{className:`absolute bottom-0 left-0 right-0 p-2 text-center`,children:[(0,s.jsx)(`p`,{className:`text-white font-bold leading-tight`,style:{fontSize:u>85?10:9},children:i}),(0,s.jsx)(`p`,{className:`text-white/70 leading-tight`,style:{fontSize:u>85?9:8},children:a})]})]})})}function D(){let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(0),[a,o]=(0,i.useState)({x:0,y:0}),[c,l]=(0,i.useState)(!1),d=(0,i.useRef)(null),f=(0,i.useRef)(null),p=(0,i.useRef)(null),m=(0,i.useRef)(0),h=(0,i.useRef)({x:0,y:0});return(0,i.useEffect)(()=>{let e=requestAnimationFrame(()=>{t(!0)});return()=>{cancelAnimationFrame(e)}},[]),(0,i.useEffect)(()=>{let e=0,t=()=>{d.current&&(e=d.current.offsetTop)},n=()=>{f.current=null,r(m.current)},i=()=>{let t=Math.max(0,window.scrollY-e);m.current=t,f.current||=requestAnimationFrame(n)};return t(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,t,{passive:!0}),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,t),f.current&&cancelAnimationFrame(f.current)}},[]),(0,i.useEffect)(()=>{let e={left:0,top:0,width:1,height:1},t=()=>{if(d.current){let t=d.current.getBoundingClientRect();e={left:t.left,top:t.top,width:t.width||1,height:t.height||1}}},n=()=>{p.current=null,o(h.current)},r=t=>{h.current={x:((t.clientX-e.left)/e.width-.5)*18,y:((t.clientY-e.top)/e.height-.5)*10},p.current||=requestAnimationFrame(n)};return t(),window.addEventListener(`mousemove`,r,{passive:!0}),window.addEventListener(`resize`,t,{passive:!0}),()=>{window.removeEventListener(`mousemove`,r),window.removeEventListener(`resize`,t),p.current&&cancelAnimationFrame(p.current)}},[]),(0,s.jsxs)(`section`,{id:`home`,ref:d,className:`
        relative
        min-h-screen
        flex
        flex-col
        overflow-hidden
      `,style:{background:`linear-gradient(160deg, #1c2f12 0%, #2a4018 45%, #1a3010 100%)`},children:[(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        `,style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,backgroundSize:`160px 160px`}}),(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute`,style:{width:`70vw`,height:`70vw`,maxWidth:700,maxHeight:700,top:`50%`,left:`50%`,transform:`translate(-50%, -52%)`,background:`radial-gradient(circle, rgba(80,140,40,0.35) 0%, transparent 68%)`}}),(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
        `,style:{height:`28%`,background:`radial-gradient(ellipse 80% 100% at 50% 100%, #1a3a0a 10%, transparent 70%)`}}),(0,s.jsx)(`div`,{className:`h-20 flex-shrink-0`}),(0,s.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center px-4 pb-8`,children:[(0,s.jsxs)(`div`,{className:`
            relative
            flex
            items-center
            justify-center
          `,style:{width:`100%`,maxWidth:900,height:340},children:[T.map(t=>(0,s.jsx)(E,{card:t,scrollY:n,fanVisible:e},t.label)),(0,s.jsxs)(`div`,{className:`
              relative
              z-20
              flex-shrink-0
            `,style:{transition:e?`opacity 0.9s ease, transform 0.9s ease`:`none`,opacity:+!!e,transform:`translate3d(
                ${a.x*-.3}px,
                ${a.y*-.3+-n*.04}px,
                0
              ) scale(${e?1:.88})`},children:[(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`
                absolute
                -inset-6
                rounded-[40px]
              `,style:{background:`radial-gradient(circle, rgba(100,180,50,0.25) 0%, transparent 70%)`}}),(0,s.jsxs)(`div`,{className:`
                relative
                overflow-hidden
                rounded-[32px]
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              `,style:{width:190,height:260,border:`1.5px solid rgba(120,200,60,0.3)`},children:[(0,s.jsx)(`img`,{src:u,alt:`King Canopy tree care`,width:190,height:260,fetchPriority:`high`,loading:`eager`,decoding:`async`,className:`
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                `}),(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0`,style:{background:`linear-gradient(to bottom, transparent 50%, rgba(10,30,5,0.88) 100%)`}}),(0,s.jsx)(`div`,{className:`
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-4
                  text-center
                  z-10
                `,children:(0,s.jsx)(`p`,{className:`text-white font-bold text-sm tracking-wide`,children:`King Canopy`})})]}),(0,s.jsxs)(`div`,{className:`
                absolute
                -bottom-5
                left-1/2
                -translate-x-1/2
                flex
                items-center
                gap-2
                bg-white
                rounded-2xl
                shadow-xl
                px-4
                py-2
                z-30
              `,style:{whiteSpace:`nowrap`},children:[(0,s.jsx)(`div`,{className:`
                  w-7
                  h-7
                  bg-[#2d5a1a]
                  rounded-lg
                  flex
                  items-center
                  justify-center
                `,children:(0,s.jsx)(`svg`,{className:`w-4 h-4 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})})}),(0,s.jsx)(`span`,{className:`text-[#1a3a0a] font-bold text-sm`,children:`Free Quote`})]})]})]}),(0,s.jsxs)(`div`,{className:`
            mt-14
            text-center
            px-4
            max-w-3xl
          `,style:{transition:`opacity 1s ease 0.35s, transform 1s ease 0.35s`,opacity:+!!e,transform:e?`translate3d(0, ${-n*.06}px, 0)`:`translate3d(0, 28px, 0)`},children:[(0,s.jsx)(`h1`,{className:`
              font-extrabold
              leading-[1.05]
              text-white
            `,style:{fontSize:`clamp(2.4rem, 6vw, 4.5rem)`,letterSpacing:`-0.02em`},children:`Choose your tree service`}),(0,s.jsx)(`p`,{className:`
              mt-4
              text-[#a8c88a]
              text-lg
              max-w-xl
              mx-auto
              leading-relaxed
            `,children:`Professional arborists for trimming, removal, stump grinding & emergency care.`}),(0,s.jsxs)(`div`,{className:`
              mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-3
            `,children:[(0,s.jsx)(`button`,{type:`button`,onClick:()=>l(!0),className:`
                bg-[#c8e6a0]
                hover:bg-[#b8d88e]
                text-[#1a3a0a]
                font-bold
                px-8
                py-3.5
                rounded-full
                text-base
                shadow-lg
                hover:-translate-y-0.5
                transition-all
              `,children:`Get a Free Quote`}),(0,s.jsx)(`a`,{href:`#about`,className:`
                border
                border-white/25
                hover:border-white/50
                text-white
                font-semibold
                px-8
                py-3.5
                rounded-full
                text-base
                hover:bg-white/10
                transition-all
              `,children:`Learn About Us`})]})]}),(0,s.jsx)(`div`,{className:`
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            px-4
          `,style:{transition:`opacity 1s ease 0.5s`,opacity:+!!e},children:[{number:`15+`,label:`Yrs experience`},{number:`2k+`,label:`Trees serviced`},{number:`500+`,label:`Happy clients`},{number:`24/7`,label:`Emergency`}].map(e=>(0,s.jsxs)(`div`,{className:`
                flex
                items-center
                gap-2.5
                px-5
                py-2.5
                rounded-full
                border
                border-white/10
              `,style:{background:`rgba(255,255,255,0.07)`},children:[(0,s.jsx)(`span`,{className:`text-[#c8e6a0] font-extrabold text-base`,children:e.number}),(0,s.jsx)(`span`,{className:`text-white/60 text-sm`,children:e.label})]},e.label))})]}),(0,s.jsxs)(`div`,{className:`
          flex
          flex-col
          items-center
          pb-6
          text-white/40
          z-10
        `,children:[(0,s.jsx)(`span`,{className:`text-[10px] tracking-widest uppercase mb-1`,children:`Scroll`}),(0,s.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 9l-7 7-7-7`})})]}),(0,s.jsx)(C,{isOpen:c,onClose:()=>l(!1)})]})}var O=[{icon:`🛡️`,title:`Fully Insured`,desc:`Complete liability and workers comp coverage protects you on every job.`},{icon:`🎓`,title:`Certified Arborists`,desc:`Our team holds ISA certifications and ongoing training in tree science.`},{icon:`♻️`,title:`Eco-Friendly`,desc:`We chip and recycle all debris — minimizing waste on every project.`},{icon:`💰`,title:`Fair Pricing`,desc:`Transparent, upfront quotes with no hidden fees or surprise charges.`}];function k(){return(0,s.jsx)(`section`,{id:`about`,className:`py-20 lg:py-28 bg-white`,children:(0,s.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,s.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,children:[(0,s.jsxs)(`div`,{className:`relative`,children:[(0,s.jsxs)(`div`,{className:`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-lg mx-auto`,children:[(0,s.jsx)(`img`,{src:u,alt:`King Canopy arborist at work`,className:`absolute inset-0 w-full h-full object-cover`}),(0,s.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent`}),(0,s.jsxs)(`div`,{className:`absolute bottom-5 left-5 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3`,children:[(0,s.jsx)(`p`,{className:`text-white/80 text-xs font-medium`,children:`Caring for trees`}),(0,s.jsx)(`p`,{className:`text-white font-extrabold text-xl leading-tight`,children:`since 2009`})]})]}),(0,s.jsxs)(`div`,{className:`absolute -bottom-6 -right-2 lg:right-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100`,children:[(0,s.jsx)(`div`,{className:`bg-yellow-50 w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`,children:`⭐`}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-2xl font-extrabold text-gray-900 leading-none`,children:`4.9/5`}),(0,s.jsx)(`p`,{className:`text-gray-500 text-xs mt-0.5`,children:`500+ Google Reviews`})]})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`text-green-700 font-semibold text-sm uppercase tracking-widest`,children:`About Us`}),(0,s.jsxs)(`h2`,{className:`mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight`,children:[`Local Experts Who`,(0,s.jsx)(`span`,{className:`text-green-700`,children:` Care for Your Trees`})]}),(0,s.jsx)(`p`,{className:`mt-5 text-lg text-gray-500 leading-relaxed`,children:`King Canopy Tree Care has been serving homeowners and businesses since 2009. Founded by a certified arborist with a passion for the outdoors, we've grown into a trusted team of professionals who treat every tree — and every client — with respect.`}),(0,s.jsx)(`p`,{className:`mt-4 text-gray-500 leading-relaxed`,children:`We believe healthy trees make for healthier communities. That's why we combine scientific knowledge with hands-on experience to deliver results that are safe, sustainable, and beautiful.`}),(0,s.jsx)(`div`,{className:`mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4`,children:O.map(e=>(0,s.jsxs)(`div`,{className:`flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100`,children:[(0,s.jsx)(`span`,{className:`text-2xl flex-shrink-0`,children:e.icon}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`font-semibold text-gray-900 text-sm`,children:e.title}),(0,s.jsx)(`p`,{className:`text-gray-500 text-sm mt-0.5`,children:e.desc})]})]},e.title))}),(0,s.jsxs)(`a`,{href:`#contact`,className:`mt-8 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors`,children:[`Work With Us`,(0,s.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})]})]})})})}var A=[{img:d,alt:`Tree trimming and pruning`,title:`Tree Trimming & Pruning`,description:`Keep your trees healthy and beautiful with precision trimming. We remove dead branches and shape your trees for optimal growth.`,features:[`Crown thinning`,`Deadwood removal`,`Vista pruning`]},{img:f,alt:`Tree removal service`,title:`Tree Removal`,description:`Safe and efficient removal of hazardous, dead, or unwanted trees. We handle every job with care to protect your property.`,features:[`Hazard trees`,`Dead tree removal`,`Lot clearing`]},{img:p,alt:`Stump grinding service`,title:`Stump Grinding`,description:`Eliminate unsightly stumps with our professional grinding service. Reclaim your yard and prevent pest infestations.`,features:[`Full stump removal`,`Root flare grinding`,`Site cleanup`]},{img:m,alt:`Emergency tree service`,title:`Emergency Tree Service`,description:`Storm damage? Fallen tree? Our emergency crew is available 24/7 to protect your home and property from further damage.`,features:[`24/7 availability`,`Storm damage`,`Rapid response`]},{img:h,alt:`Tree health and fertilization`,title:`Tree Health & Fertilization`,description:`Diagnose and treat tree diseases, pest infestations, and nutrient deficiencies to keep your trees thriving.`,features:[`Disease treatment`,`Pest control`,`Deep root feeding`]},{img:g,alt:`Land clearing and landscaping`,title:`Land Clearing`,description:`Preparing land for construction or landscaping? We provide complete land clearing for residential and commercial sites.`,features:[`Brush clearing`,`Debris hauling`,`Grading prep`]}];function j(){return(0,s.jsx)(`section`,{id:`services`,className:`py-20 lg:py-24 bg-gray-50`,children:(0,s.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,s.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,s.jsx)(`span`,{className:`text-green-700 font-semibold text-sm uppercase tracking-widest`,children:`What We Do`}),(0,s.jsx)(`h2`,{className:`mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900`,children:`Our Tree Services`}),(0,s.jsx)(`p`,{className:`mt-4 text-lg text-gray-600 max-w-2xl mx-auto`,children:`Comprehensive tree care solutions delivered by certified arborists with the equipment and expertise to handle any job.`})]}),(0,s.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,children:A.map(e=>(0,s.jsxs)(`div`,{className:`
                flex flex-col
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                border border-gray-100
                hover:border-green-200
                transition-all
                duration-300
                group
                hover:-translate-y-1
              `,children:[(0,s.jsxs)(`div`,{className:`relative w-full overflow-hidden flex-shrink-0`,style:{height:`220px`,aspectRatio:`16 / 9`},children:[(0,s.jsx)(`img`,{src:e.img,alt:e.alt,width:`700`,height:`400`,loading:`lazy`,decoding:`async`,className:`
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  `}),(0,s.jsx)(`div`,{"aria-hidden":`true`,className:`
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/25
                    to-transparent
                  `})]}),(0,s.jsxs)(`div`,{className:`flex flex-col flex-1 p-6`,children:[(0,s.jsx)(`h3`,{className:`text-xl font-bold text-gray-900 mb-2`,children:e.title}),(0,s.jsx)(`p`,{className:`text-gray-600 leading-relaxed mb-5 text-sm flex-1`,children:e.description}),(0,s.jsx)(`ul`,{className:`space-y-2`,children:e.features.map(e=>(0,s.jsxs)(`li`,{className:`
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-700
                      `,children:[(0,s.jsx)(`svg`,{className:`w-4 h-4 text-green-600 flex-shrink-0`,fill:`currentColor`,viewBox:`0 0 20 20`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{fillRule:`evenodd`,d:`M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z`,clipRule:`evenodd`})}),(0,s.jsx)(`span`,{children:e})]},e))})]})]},e.title))}),(0,s.jsxs)(`div`,{className:`
            mt-16
            bg-green-700
            rounded-3xl
            p-8
            lg:p-12
            text-center
            text-white
          `,children:[(0,s.jsx)(`h3`,{className:`text-2xl lg:text-3xl font-bold mb-3`,children:`Not sure what service you need?`}),(0,s.jsx)(`p`,{className:`text-green-100 mb-6 text-lg`,children:`Our certified arborists will assess your trees and recommend the best course of action — for free.`}),(0,s.jsx)(`a`,{href:`#contact`,className:`
              inline-block
              bg-white
              text-green-800
              font-bold
              px-8
              py-3
              rounded-full
              hover:bg-green-50
              transition-colors
            `,children:`Schedule a Free Consultation`})]})]})})}var M=[{name:`Sarah M.`,location:`Homeowner`,review:`King Canopy removed a massive oak that was threatening our roof. The crew was professional, fast, and cleaned up every last branch. Highly recommend!`,stars:5},{name:`James T.`,location:`Property Manager`,review:`We use King Canopy for all our commercial properties. Their team is reliable, fairly priced, and always goes above and beyond. 5 stars every time.`,stars:5},{name:`Linda R.`,location:`Homeowner`,review:`After the storm, they showed up within hours. Incredibly responsive emergency service. Our property was cleared and safe by the next morning.`,stars:5},{name:`David K.`,location:`Business Owner`,review:`Had three large trees pruned and shaped. The arborist explained everything before starting. Beautiful results and very fair pricing.`,stars:5},{name:`Maria L.`,location:`Homeowner`,review:`The stump grinding service was quick and thorough. They ground it completely below grade and cleaned up all the debris. Fantastic job!`,stars:5},{name:`Tom W.`,location:`HOA Manager`,review:`King Canopy maintains trees across our entire community. Always on time, always professional. We wouldn't use anyone else.`,stars:5}];function N({count:e}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`div`,{className:`flex gap-1`,"aria-hidden":`true`,children:Array.from({length:e}).map((e,t)=>(0,s.jsx)(`svg`,{className:`w-5 h-5 text-yellow-400`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,s.jsx)(`path`,{d:`M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z`})},t))}),(0,s.jsxs)(`span`,{className:`sr-only`,children:[e,` out of 5 stars`]})]})}function P(){return(0,s.jsx)(`section`,{id:`testimonials`,className:`py-24 px-6 bg-gray-50 scroll-mt-24`,children:(0,s.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,s.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,s.jsx)(`span`,{className:`text-green-700 font-semibold text-sm uppercase tracking-widest`,children:`Reviews`}),(0,s.jsx)(`h2`,{className:`mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900`,children:`What Our Clients Say`}),(0,s.jsx)(`p`,{className:`mt-4 text-lg text-gray-500 max-w-xl mx-auto`,children:`Hundreds of satisfied homeowners and businesses trust King Canopy for all their tree care needs.`}),(0,s.jsxs)(`div`,{className:`
              mt-6
              inline-flex
              items-center
              gap-3
              bg-white
              border
              border-gray-100
              rounded-2xl
              px-6
              py-3
              shadow-sm
            `,children:[(0,s.jsx)(`div`,{className:`flex gap-1`,"aria-hidden":`true`,children:Array.from({length:5}).map((e,t)=>(0,s.jsx)(`svg`,{className:`w-5 h-5 text-yellow-400`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,s.jsx)(`path`,{d:`M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z`})},t))}),(0,s.jsx)(`span`,{className:`sr-only`,children:`5 out of 5 stars`}),(0,s.jsx)(`span`,{className:`font-extrabold text-gray-900 text-lg`,children:`4.9`}),(0,s.jsx)(`span`,{className:`text-gray-600 text-sm`,children:`from 500+ Google Reviews`})]})]}),(0,s.jsx)(`div`,{className:`
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          `,children:M.map(e=>(0,s.jsxs)(`div`,{className:`
                flex
                flex-col
                bg-white
                rounded-2xl
                p-6
                shadow-sm
                border
                border-gray-100
                hover:shadow-md
                hover:border-green-100
                transition-all
                duration-300
              `,children:[(0,s.jsx)(N,{count:e.stars}),(0,s.jsxs)(`p`,{className:`
                  mt-4
                  text-gray-600
                  leading-relaxed
                  flex-1
                `,children:[`"`,e.review,`"`]}),(0,s.jsxs)(`div`,{className:`
                  mt-5
                  flex
                  items-center
                  gap-3
                  pt-5
                  border-t
                  border-gray-50
                `,children:[(0,s.jsx)(`div`,{className:`
                    w-10
                    h-10
                    rounded-full
                    bg-green-100
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  `,children:(0,s.jsx)(`span`,{className:`text-green-700 font-bold text-sm`,children:e.name[0]})}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`font-bold text-gray-900 text-sm`,children:e.name}),(0,s.jsx)(`p`,{className:`text-gray-500 text-xs`,children:e.location})]})]})]},e.name))}),(0,s.jsx)(`div`,{className:`mt-12 text-center`,children:(0,s.jsxs)(`a`,{href:`#contact`,className:`
              inline-flex
              items-center
              gap-2
              bg-green-700
              hover:bg-green-800
              text-white
              font-bold
              px-8
              py-3.5
              rounded-full
              transition-colors
            `,children:[`Join Our Happy Clients`,(0,s.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})})]})})}function F(){let e=(0,i.useRef)(null),[t,n]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),r.disconnect())},{rootMargin:`300px`,threshold:.1});return r.observe(t),()=>r.disconnect()},[]),(0,s.jsx)(`section`,{id:`contact`,ref:e,className:`py-20 bg-white`,children:(0,s.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,s.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,s.jsx)(`span`,{className:`text-green-700 font-semibold text-sm uppercase tracking-widest`,children:`Get In Touch`}),(0,s.jsx)(`h2`,{className:`mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900`,children:`Request a Free Quote`}),(0,s.jsx)(`p`,{className:`mt-4 text-lg text-gray-600 max-w-xl mx-auto`,children:`Fill out the form below and our team will get back to you within 24 hours with a no-obligation estimate.`})]}),(0,s.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-5 gap-12`,children:[(0,s.jsxs)(`div`,{className:`lg:col-span-2 space-y-5`,children:[(0,s.jsx)(`h3`,{className:`text-xl font-bold text-gray-900`,children:`Contact Information`}),[{icon:`📞`,label:`Phone`,value:`716-671-7373`,href:`tel:+17166717373`},{icon:`📍`,label:`Address`,value:`9950 County Rd
Clarence, Buffalo`,href:`https://maps.google.com/?q=9950+County+Rd+Clarence+NY`},{icon:`🕐`,label:`Hours`,value:`Mon–Sat: 7am–6pm
Emergency: 24/7`,href:null}].map(e=>(0,s.jsxs)(`div`,{className:`
                  flex
                  items-start
                  gap-4
                  p-4
                  rounded-xl
                  bg-green-50
                  border
                  border-green-100
                `,children:[(0,s.jsx)(`div`,{className:`
                    w-10
                    h-10
                    bg-green-100
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-xl
                    flex-shrink-0
                  `,"aria-hidden":`true`,children:e.icon}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`
                      text-xs
                      font-semibold
                      text-gray-700
                      uppercase
                      tracking-wider
                      mb-0.5
                    `,children:e.label}),e.href?(0,s.jsx)(`a`,{href:e.href,target:e.href.startsWith(`http`)?`_blank`:void 0,rel:e.href.startsWith(`http`)?`noopener noreferrer`:void 0,className:`
                        text-gray-900
                        font-medium
                        hover:text-green-700
                        transition-colors
                        whitespace-pre-line
                      `,children:e.value}):(0,s.jsx)(`p`,{className:`
                        text-gray-900
                        font-medium
                        whitespace-pre-line
                      `,children:e.value})]})]},e.label)),(0,s.jsxs)(`div`,{className:`
                bg-red-50
                border
                border-red-200
                rounded-xl
                p-4
              `,children:[(0,s.jsxs)(`p`,{className:`
                  font-bold
                  text-red-700
                  flex
                  items-center
                  gap-2
                `,children:[(0,s.jsx)(`span`,{"aria-hidden":`true`,children:`🚨`}),`Emergency? Call Now`]}),(0,s.jsx)(`a`,{href:`tel:+17166717373`,className:`
                  text-red-700
                  font-bold
                  text-xl
                  hover:text-red-800
                  transition-colors
                `,children:`716-671-7373`}),(0,s.jsx)(`p`,{className:`text-red-700 text-sm mt-1`,children:`Available 24 hours, 7 days a week`})]})]}),(0,s.jsx)(`div`,{className:`lg:col-span-3 w-full`,children:(0,s.jsx)(`div`,{className:`
                w-full
                rounded-2xl
                border
                border-gray-200
                shadow-sm
                bg-white
                overflow-hidden
              `,children:t?(0,s.jsx)(`iframe`,{src:`https://link.kdlead.com/widget/form/C8AWanRg6JqcHLIlJ16j`,title:`King Canopy Tree Care Contact Form`,loading:`lazy`,scrolling:`no`,frameBorder:`0`,allow:`payment`,className:`
                    block
                    w-full
                    border-0
                    overflow-hidden
                  `,style:{width:`100%`,minWidth:`100%`,height:`877px`,border:`none`,display:`block`,overflow:`hidden`}}):(0,s.jsx)(`div`,{className:`
                    min-h-[877px]
                    flex
                    items-center
                    justify-center
                    text-gray-500
                    text-sm
                    px-6
                    text-center
                  `,children:`Contact form will load when you reach this section.`})})})]})]})})}function I({onClose:e}){return(0,i.useEffect)(()=>{function t(t){t.key===`Escape`&&e()}return document.addEventListener(`keydown`,t),document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,t),document.body.style.overflow=``}},[e]),(0,s.jsx)(`div`,{className:`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6`,style:{background:`rgba(0,0,0,0.6)`,backdropFilter:`blur(4px)`},onClick:t=>{t.target===t.currentTarget&&e()},role:`dialog`,"aria-modal":`true`,"aria-labelledby":`privacy-title`,children:(0,s.jsxs)(`div`,{className:`relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col`,children:[(0,s.jsxs)(`div`,{className:`flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100 flex-shrink-0`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h2`,{id:`privacy-title`,className:`text-xl font-extrabold text-gray-900`,children:`Privacy Policy`}),(0,s.jsx)(`p`,{className:`text-xs text-gray-400 mt-0.5`,children:`Effective: January 19, 2025 \xA0|\xA0 Last Updated: July 9, 2026`})]}),(0,s.jsx)(`button`,{onClick:e,"aria-label":`Close privacy policy`,className:`ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors`,children:(0,s.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]}),(0,s.jsxs)(`div`,{className:`overflow-y-auto px-6 py-5 text-sm text-gray-600 leading-relaxed space-y-5 flex-1`,children:[(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`strong`,{className:`text-gray-900`,children:`King Canopy Tree Care`}),` ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.`]}),(0,s.jsxs)(L,{title:`1. Information We Collect`,children:[(0,s.jsx)(`p`,{children:`We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:`}),(0,s.jsxs)(`ul`,{className:`list-disc list-inside mt-2 space-y-1`,children:[(0,s.jsx)(`li`,{children:`Full name`}),(0,s.jsx)(`li`,{children:`Mailing or service address`}),(0,s.jsx)(`li`,{children:`Email address`}),(0,s.jsx)(`li`,{children:`Mobile phone number`}),(0,s.jsx)(`li`,{children:`Service request details and project descriptions`}),(0,s.jsx)(`li`,{children:`Communication history and preferences`})]})]}),(0,s.jsxs)(L,{title:`2. SMS / Text Message Communications`,children:[(0,s.jsx)(R,{title:`2a. How We Collect Your Mobile Number`,children:`We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS (text message) communications from King Canopy Tree Care.`}),(0,s.jsxs)(R,{title:`2b. Types of Messages We Send`,children:[(0,s.jsx)(`p`,{children:`By opting in, you may receive recurring automated text messages from King Canopy Tree Care, including:`}),(0,s.jsxs)(`ul`,{className:`list-disc list-inside mt-2 space-y-1`,children:[(0,s.jsx)(`li`,{children:`Free estimate confirmations and appointment reminders`}),(0,s.jsx)(`li`,{children:`Project status updates and scheduling notifications`}),(0,s.jsx)(`li`,{children:`Customer support and follow-up communications`}),(0,s.jsx)(`li`,{children:`Promotional offers and seasonal service announcements related to our tree care services`})]})]}),(0,s.jsx)(R,{title:`2c. Message Frequency`,children:`Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.`}),(0,s.jsx)(R,{title:`2d. Message & Data Rates`,children:`Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. King Canopy Tree Care is not responsible for any charges incurred from your mobile carrier.`}),(0,s.jsxs)(R,{title:`2e. How to Opt Out (STOP)`,children:[`You may cancel SMS messages at any time by replying `,(0,s.jsx)(`strong`,{children:`STOP`}),` to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from King Canopy Tree Care unless you re-enroll.`]}),(0,s.jsxs)(R,{title:`2f. How to Get Help (HELP)`,children:[(0,s.jsxs)(`p`,{children:[`For help with our SMS program, reply `,(0,s.jsx)(`strong`,{children:`HELP`}),` to any message, or contact us directly at:`]}),(0,s.jsx)(`ul`,{className:`mt-2 space-y-1`,children:(0,s.jsxs)(`li`,{children:[`Phone: `,(0,s.jsx)(`a`,{href:`tel:+17166717373`,className:`text-green-700 hover:underline`,children:`716-671-7373`})]})})]})]}),(0,s.jsx)(L,{title:`3. Mobile Information & SMS Consent — No Third-Party Sharing`,children:`No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes. All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.`}),(0,s.jsxs)(L,{title:`4. How We Use Your Information`,children:[(0,s.jsx)(`p`,{children:`We use the personal information we collect to:`}),(0,s.jsxs)(`ul`,{className:`list-disc list-inside mt-2 space-y-1`,children:[(0,s.jsx)(`li`,{children:`Provide and manage tree care services`}),(0,s.jsx)(`li`,{children:`Respond to inquiries and service requests`}),(0,s.jsx)(`li`,{children:`Schedule appointments and send reminders`}),(0,s.jsx)(`li`,{children:`Send promotional communications (with your consent)`}),(0,s.jsx)(`li`,{children:`Improve our website and service quality`}),(0,s.jsx)(`li`,{children:`Comply with applicable laws and regulations`})]})]}),(0,s.jsx)(L,{title:`5. Cookies and Tracking Technologies`,children:`We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.`}),(0,s.jsx)(L,{title:`6. Data Security`,children:`We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.`}),(0,s.jsx)(L,{title:`7. Data Retention`,children:`We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.`}),(0,s.jsxs)(L,{title:`8. Your Privacy Rights`,children:[(0,s.jsx)(`p`,{children:`Depending on your location, you may have the following rights regarding your personal data:`}),(0,s.jsxs)(`ul`,{className:`list-disc list-inside mt-2 space-y-1`,children:[(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Access:`}),` Request a copy of the personal data we hold about you`]}),(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Correction:`}),` Request correction of inaccurate personal data`]}),(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Deletion:`}),` Request deletion of your personal data (including your mobile number and SMS consent record)`]}),(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Opt-Out of SMS:`}),` Reply STOP to any text message at any time`]}),(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Opt-Out of Marketing:`}),` Contact us directly to be removed from marketing lists`]})]}),(0,s.jsxs)(`p`,{className:`mt-2`,children:[`To exercise any of these rights, contact us at`,` `,(0,s.jsx)(`a`,{href:`#`,className:`text-green-700 hover:underline`}),` `,`or call`,` `,(0,s.jsx)(`a`,{href:`tel:+17166717373`,className:`text-green-700 hover:underline`,children:`716-671-7373`}),`.`]})]}),(0,s.jsx)(L,{title:`9. Changes to This Privacy Policy`,children:`We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.`}),(0,s.jsxs)(L,{title:`10. Contact Information`,children:[(0,s.jsx)(`p`,{children:`If you have questions or concerns about this Privacy Policy, please contact us:`}),(0,s.jsxs)(`ul`,{className:`mt-2 space-y-1`,children:[(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Company:`}),` King Canopy Tree Care`]}),(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Phone:`}),` `,(0,s.jsx)(`a`,{href:`tel:+17166717373`,className:`text-green-700 hover:underline`,children:`716-671-7373`})]})]})]})]}),(0,s.jsx)(`div`,{className:`px-6 py-4 border-t border-gray-100 flex-shrink-0`,children:(0,s.jsx)(`button`,{onClick:e,className:`w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 rounded-xl transition-colors text-sm`,children:`Close`})})]})})}function L({title:e,children:t}){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{className:`font-bold text-gray-900 text-base mb-2`,children:e}),(0,s.jsx)(`div`,{className:`space-y-2`,children:t})]})}function R({title:e,children:t}){return(0,s.jsxs)(`div`,{className:`mt-3`,children:[(0,s.jsx)(`h4`,{className:`font-semibold text-gray-800 mb-1`,children:e}),(0,s.jsx)(`div`,{children:t})]})}function z({onClose:e}){return(0,i.useEffect)(()=>{function t(t){t.key===`Escape`&&e()}return document.addEventListener(`keydown`,t),document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,t),document.body.style.overflow=``}},[e]),(0,s.jsx)(`div`,{className:`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6`,style:{background:`rgba(0,0,0,0.6)`,backdropFilter:`blur(4px)`},onClick:t=>{t.target===t.currentTarget&&e()},role:`dialog`,"aria-modal":`true`,"aria-labelledby":`terms-title`,children:(0,s.jsxs)(`div`,{className:`relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col`,children:[(0,s.jsxs)(`div`,{className:`flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100 flex-shrink-0`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h2`,{id:`terms-title`,className:`text-xl font-extrabold text-gray-900`,children:`Terms & Conditions`}),(0,s.jsx)(`p`,{className:`text-xs text-gray-400 mt-0.5`,children:`Effective: January 19, 2025 \xA0|\xA0 Last Updated: July 9, 2026`})]}),(0,s.jsx)(`button`,{onClick:e,"aria-label":`Close terms and conditions`,className:`ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors`,children:(0,s.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]}),(0,s.jsxs)(`div`,{className:`overflow-y-auto px-6 py-5 text-sm text-gray-600 leading-relaxed space-y-5 flex-1`,children:[(0,s.jsxs)(`p`,{children:[`Welcome to `,(0,s.jsx)(`strong`,{className:`text-gray-900`,children:`King Canopy Tree Care`}),`. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.`]}),(0,s.jsxs)(B,{title:`1. Business Identity`,children:[`These Terms and Conditions govern your use of the services provided by`,` `,(0,s.jsx)(`strong`,{className:`text-gray-900`,children:`King Canopy Tree Care`}),`. Contact:`,` `,(0,s.jsx)(`a`,{href:`tel:+17166717373`,className:`text-green-700 hover:underline`,children:`716-671-7373`}),` `,`|`,` `,(0,s.jsx)(`a`,{href:`#`,className:`text-green-700 hover:underline`}),`.`]}),(0,s.jsx)(B,{title:`2. Age Requirement (18+)`,children:`By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.`}),(0,s.jsx)(B,{title:`3. Terminology`,children:`"Client," "You," and "Your" refers to the user of this website. "The Company," "We," "Our," and "Us" refers to King Canopy Tree Care.`}),(0,s.jsxs)(B,{title:`4. SMS Messaging Terms of Service`,children:[(0,s.jsxs)(V,{title:`4a. Program Description & Message Types`,children:[(0,s.jsx)(`p`,{children:`By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from King Canopy Tree Care. Messages may include:`}),(0,s.jsxs)(`ul`,{className:`list-disc list-inside mt-2 space-y-1`,children:[(0,s.jsx)(`li`,{children:`Free estimate confirmations and scheduling notifications`}),(0,s.jsx)(`li`,{children:`Appointment reminders and project status updates`}),(0,s.jsx)(`li`,{children:`Customer support and service follow-up communications`}),(0,s.jsx)(`li`,{children:`Promotional offers and seasonal announcements related to our tree care services`})]})]}),(0,s.jsx)(V,{title:`4b. Message Frequency`,children:`Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.`}),(0,s.jsx)(V,{title:`4c. Message & Data Rates`,children:`Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. King Canopy Tree Care is not responsible for any carrier charges.`}),(0,s.jsxs)(V,{title:`4d. How to Opt Out (STOP)`,children:[`You can opt out of receiving SMS messages at any time by replying`,` `,(0,s.jsx)(`strong`,{children:`STOP`}),` to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.`]}),(0,s.jsxs)(V,{title:`4e. How to Get Help (HELP)`,children:[(0,s.jsxs)(`p`,{children:[`For help with our SMS program, reply `,(0,s.jsx)(`strong`,{children:`HELP`}),` to any message or contact us directly at:`]}),(0,s.jsx)(`ul`,{className:`mt-2 space-y-1`,children:(0,s.jsxs)(`li`,{children:[`Phone: `,(0,s.jsx)(`a`,{href:`tel:+17166717373`,className:`text-green-700 hover:underline`,children:`716-671-7373`})]})})]}),(0,s.jsx)(V,{title:`4f. Carrier Liability Disclaimer`,children:`Mobile carriers are not liable for delayed or undelivered messages. King Canopy Tree Care cannot guarantee delivery of SMS messages. Delivery of information through SMS may be subject to your mobile carrier's capability and coverage area.`}),(0,s.jsx)(V,{title:`4g. Supported Carriers`,children:`Our SMS program is supported by all major U.S. wireless carriers including AT&T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.`})]}),(0,s.jsx)(B,{title:`5. Cookies`,children:`We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.`}),(0,s.jsx)(B,{title:`6. Intellectual Property & License`,children:`Unless otherwise stated, King Canopy Tree Care owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.`}),(0,s.jsx)(B,{title:`7. Comments & User Content`,children:`King Canopy Tree Care reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.`}),(0,s.jsx)(B,{title:`8. Content Liability`,children:`We are not responsible for content that appears on external websites linking to us. You agree to defend and protect King Canopy Tree Care against any claims arising from your website or digital properties.`}),(0,s.jsx)(B,{title:`9. Disclaimer`,children:`To the maximum extent permitted by applicable law, King Canopy Tree Care excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage (including, without limitation, damage for loss of business, profits, or revenue) arising from the use of our website or services.`}),(0,s.jsx)(B,{title:`10. Changes to These Terms`,children:`We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services constitutes acceptance of the updated terms.`}),(0,s.jsxs)(B,{title:`11. Contact Information`,children:[(0,s.jsx)(`p`,{children:`For questions about these Terms and Conditions, please contact us:`}),(0,s.jsxs)(`ul`,{className:`mt-2 space-y-1`,children:[(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Company:`}),` King Canopy Tree Care`]}),(0,s.jsxs)(`li`,{children:[(0,s.jsx)(`strong`,{children:`Phone:`}),` `,(0,s.jsx)(`a`,{href:`tel:+17166717373`,className:`text-green-700 hover:underline`,children:`716-671-7373`})]})]})]})]}),(0,s.jsx)(`div`,{className:`px-6 py-4 border-t border-gray-100 flex-shrink-0`,children:(0,s.jsx)(`button`,{onClick:e,className:`w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 rounded-xl transition-colors text-sm`,children:`Close`})})]})})}function B({title:e,children:t}){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{className:`font-bold text-gray-900 text-base mb-2`,children:e}),(0,s.jsx)(`div`,{className:`space-y-2`,children:t})]})}function V({title:e,children:t}){return(0,s.jsxs)(`div`,{className:`mt-3`,children:[(0,s.jsx)(`h4`,{className:`font-semibold text-gray-800 mb-1`,children:e}),(0,s.jsx)(`div`,{children:t})]})}var H={Navigation:[{label:`Home`,href:`#home`},{label:`About`,href:`#about`},{label:`Services`,href:`#services`},{label:`Testimonials`,href:`#testimonials`},{label:`Contact`,href:`#contact`}],Services:[{label:`Tree Trimming`,href:`#services`},{label:`Tree Removal`,href:`#services`},{label:`Stump Grinding`,href:`#services`},{label:`Emergency`,href:`#services`},{label:`Land Clearing`,href:`#services`}]};function U(){let e=new Date().getFullYear(),[t,n]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`footer`,{className:`bg-green-950 text-white`,children:(0,s.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`,children:[(0,s.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-4 gap-10`,children:[(0,s.jsxs)(`div`,{className:`md:col-span-2`,children:[(0,s.jsxs)(`a`,{href:`#home`,className:`inline-block mb-4`,children:[(0,s.jsx)(`p`,{className:`font-extrabold text-xl tracking-wide text-white`,children:`KING CANOPY`}),(0,s.jsx)(`p`,{className:`text-green-400 text-xs tracking-widest uppercase font-medium`,children:`Tree Care`})]}),(0,s.jsx)(`p`,{className:`text-green-100 leading-relaxed max-w-sm mb-6`,children:`Professional tree care services delivered by certified arborists. Serving residential and commercial clients since 2009.`}),(0,s.jsx)(`div`,{className:`flex gap-3`,children:[{label:`Facebook`,icon:`📘`},{label:`Instagram`,icon:`📷`},{label:`X/Twitter`,icon:`🐦`}].map(e=>(0,s.jsx)(`a`,{href:`#`,"aria-label":e.label,className:`w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center text-lg transition-colors`,children:e.icon},e.label))})]}),Object.entries(H).map(([e,t])=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h4`,{className:`font-bold text-xs uppercase tracking-widest text-green-400 mb-4`,children:e}),(0,s.jsx)(`ul`,{className:`space-y-2.5`,children:t.map(e=>(0,s.jsx)(`li`,{children:(0,s.jsx)(`a`,{href:e.href,className:`text-green-100 hover:text-white text-sm transition-colors`,children:e.label})},e.label))})]},e))]}),(0,s.jsxs)(`div`,{className:`mt-12 pt-8 border-t border-green-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-green-200 text-sm`,children:[(0,s.jsxs)(`p`,{children:[`© `,e,` King Canopy Tree Care. All rights reserved.`]}),(0,s.jsxs)(`div`,{className:`flex gap-6`,children:[(0,s.jsx)(`button`,{onClick:()=>n(!0),className:`hover:text-white transition-colors underline-offset-2 hover:underline`,children:`Privacy Policy`}),(0,s.jsx)(`button`,{onClick:()=>a(!0),className:`hover:text-white transition-colors underline-offset-2 hover:underline`,children:`Terms of Service`})]})]})]})}),t&&(0,s.jsx)(I,{onClose:()=>n(!1)}),r&&(0,s.jsx)(z,{onClose:()=>a(!1)})]})}function W(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(l,{}),(0,s.jsxs)(`main`,{children:[(0,s.jsx)(D,{}),(0,s.jsx)(k,{}),(0,s.jsx)(j,{}),(0,s.jsx)(P,{}),(0,s.jsx)(F,{})]}),(0,s.jsx)(U,{})]})}(0,a.createRoot)(document.getElementById(`root`)).render((0,s.jsx)(i.StrictMode,{children:(0,s.jsx)(W,{})}));