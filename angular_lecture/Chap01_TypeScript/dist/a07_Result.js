!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(1);let o=new class extends n.Score2{constructor(t,e,r,n){super(t,e,r),this.java=n}getTotal(){return this.total=this.getKor()+this.eng+this.java,this.total}}("yoda",100,90,90);o.getTotal(),o.getAvg(3),console.log(o.display())},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Score2=class{getKor(){return this.kor}setKor(t){this.kor=t}get eng(){return this._eng}set eng(t){this._eng=t}constructor(t,e,r){this.name=t,this.kor=e,this._eng=r,this.total=0,this.avg=0}getTotal(){return this.total=this.kor+this._eng,this.total}getAvg(t){return this.avg=this.total/t,this.avg}display(){return` 이름: ${this.name}\n 총점: ${this.total}\n 평균: ${this.avg}`}}}]);
//# sourceMappingURL=a07_Result.js.map