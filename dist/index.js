"use strict";var c=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var d=c(function(G,p){
var g=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-negative-zerof/dist'),F=require('@stdlib/math-base-assert-is-positive-zerof/dist'),l=require('@stdlib/number-float64-base-to-float32/dist');function O(e,i,t,m,u,f,q){var v,a,s,o,r,n;if(e<=0)return NaN;for(s=m,o=q,n=0;n<e&&u[o]!==0;n++)s+=t,o+=f;if(n===e)return NaN;if(a=i[s],g(a))return a;for(v=a,n+=1,n;n<e;n++)if(s+=t,o+=f,!u[o]){if(r=i[s],g(r))return r;r<a||r===a&&E(r)?a=r:(r>v||r===v&&F(r))&&(v=r)}return l(l(v+a)/2)}p.exports=O
});var k=c(function(H,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),P=d();function T(e,i,t,m,u){var f=y(e,t),q=y(e,u);return P(e,i,t,f,m,u,q)}j.exports=T
});var _=c(function(I,Z){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=k(),w=d();h(R,"ndarray",w);Z.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),x,b=A(z(__dirname,"./native.js"));B(b)?x=C:x=b;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
