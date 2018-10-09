!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@k-redux-router/core"),require("k-ramel"),require("react"),require("prop-types"),require("@k-ramel/react")):"function"==typeof define&&define.amd?define(["exports","@k-redux-router/core","k-ramel","react","prop-types","@k-ramel/react"],t):t(e["@k-redux-router/react-k-ramel"]={},e.kReduxRouterCore,e.kRamel,e.React,e.PropTypes,e.kRamelReact)}(this,function(e,t,r,o,n,u){"use strict";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){s(e,t,r[t])})}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},u=Object.keys(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}o=o&&o.hasOwnProperty("default")?o.default:o,n=n&&n.hasOwnProperty("default")?n.default:n;const a=(e,t)=>r=>{var n,u;return u=n=class extends o.Component{constructor(r,o){super(r,o),s(this,"toShow",()=>{const{store:r}=this.context,{router:o}=r.drivers;if(!o.getState()||!o.getResult())return void console.error("[k-redux-router] | There is no route found in `state.ui.router.result`");const n=[].concat(e);let u=o.getCurrentRoute();if(t&&t.absolute){const e=n.includes(u.code);return void(e!==this.state.show&&this.setState(t=>c({},t,{show:e})))}let s=n.includes(u.code);for(;u&&u.parent&&!s;)u=o.getRoute(u.parent),s=n.includes(u.code);s!==this.state.show&&this.setState(e=>c({},e,{show:s}))}),this.state={show:!1}}componentWillMount(){const{store:e}=this.context;this.unsubscribe=e.subscribe(()=>{this.toShow()}),this.toShow()}componentWillUnmount(){this.unsubscribe()}render(){const{show:e}=this.state;return e?o.createElement(r,this.props):null}},s(n,"displayName",(e=>`router(${e.displayName||e.name||e.constructor&&e.constructor.name||"Unknown"})`)(r)),s(n,"contextTypes",{store:()=>null}),u};a.absolute=((e,t)=>a(e,c({},t,{absolute:!0})));const l=e=>{const{href:t,onClick:r}=e,n=i(e,["href","onClick"]),{className:u,children:s}=n;if(void 0===t)return null;let c="",a=t;return t.base&&(a=t.base),t.compiled&&(a=t.compiled(n)),n.query&&(c=`?${(e=>Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&"))(n.query)}`),a=`${a}${c}`,o.createElement("a",{className:u,href:a,onClick:r},s)};l.propTypes={className:n.string,children:n.node,href:n.oneOfType([n.string,n.shape({base:n.string,compiled:n.func})]),onClick:n.func},l.defaultProps={className:void 0,children:void 0,href:void 0,onClick:void 0};var d=u.inject((e,t,{router:r})=>{let{onClick:o,code:n,query:u}=t,s=i(t,["onClick","code","query"]);return{href:s.href||r.getRoute(n)&&r.getRoute(n).href,onClick:e=>{o&&o(e),(e=>(e=>!!(e.shiftKey||e.altKey||e.metaKey||e.ctrlKey))(e)||(e=>e.button&&0!==e.button)(e)||e.defaultPrevented)(e)||(r.push(n,s,u),e.preventDefault())}}})(l);e.router=((e={})=>{const{routes:o,path:n="ui.router",getState:u=(e=>e.ui.router)}=e,{middleware:s,reducer:i,init:a}=t.router(o,{getState:u});return{getDriver:e=>c({},Object.entries(t.actions).reduce((t,[r,o])=>c({},t,{[r]:(...t)=>e.dispatch(o(...t))}),{}),Object.entries(t.selectors(u)).reduce((t,[r,o])=>{let n=()=>o(e.getState());return["getRoute","getPathParam","getQueryParam","getParam"].includes(r)&&(n=((...t)=>o(...t)(e.getState()))),c({},t,{[r]:n})},{})),getReducer:()=>({path:n,reducer:i}),getEnhancer:()=>r.applyMiddleware(s),init:e=>{e.dispatch(a())}}}),e.forRoute=a,e.Link=d,Object.defineProperty(e,"__esModule",{value:!0})});
