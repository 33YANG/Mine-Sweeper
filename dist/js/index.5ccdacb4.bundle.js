(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,i){},function(e,t,i){"use strict";function s(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var s=0,o=function(){};return{s:o,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==i.return||i.return()}finally{if(c)throw r}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}i.r(t);var o={initId:"board",mineSweeperBoard:"",col:19,row:11,blocks:0,mineRate:.18,mineNumber:0,mineSweeperArray:[],mineArray:[],blockIDs:"block_",clickedBlocks:0,markedBlocks:new Set,uncoveredBlocks:0,clickTime:0,_interval:null,initBoard:function(){var e=document.getElementById("mineSweeper"),t=document.getElementById("board");e.removeChild(t);var i=document.createElement("section");i.setAttribute("id","board"),e.style.width=40*this.col+"px",i.style.width=40*this.col+"px",i.style.height=40*this.row+"px",e.appendChild(i),this.mineSweeperBoard=i,this.blocks=this.col*this.row,this.mineNumber=Math.floor(this.blocks*this.mineRate),this.clickedBlocks=0,this.unCoveredBlocks=0,this.markedBlocks=new Set,document.getElementById("flagNum").textContent=this.mineNumber,document.getElementById("clockNum").textContent=0,clearInterval(this._interval),this._initMine()},_initMine:function(){this.mineSweeperArray=new Array(this.blocks);for(var e=0;e<this.mineSweeperArray.length;e++)this.mineSweeperArray[e]={status:"cover",value:0};this._generateMineBoard()},_generateMineBoard:function(){for(var e=this,t=function(t){var i=document.createElement("span");t%2==0?i.classList.add("odd-cover-color"):i.classList.add("even-cover-color"),i.id=e.blockIDs+t,e.mineSweeperBoard.appendChild(i),i.addEventListener("click",(function(){e._handleBlocksLeftClick(i.id)})),i.addEventListener("contextmenu",(function(t){e._handleBlocksRightClick(t,i.id)}))},i=0;i<this.blocks;i++)t(i)},_handleBlocksLeftClick:function(e){var t=this,i=Number(e.slice(6));document.getElementById(e);if(0===this.clickedBlocks){var n=this._getLocationAround(i);this.mineArray=this._getRandomNumber(this.blocks,this.mineNumber,n);for(var o=0;o<this.blocks;o++){var r,l=s(this._getLocationAround(o));try{for(l.s();!(r=l.n()).done;){var c=r.value;this.mineArray.includes(c)&&this.mineSweeperArray[o].value++}}catch(e){l.e(e)}finally{l.f()}}this.clickTime=new Date,this._interval=setInterval((function(){t._setTimeInterval()}),1e3),this._removeTips()}"cover"===this.mineSweeperArray[i].status&&(this.clickedBlocks+=1,this._removeZeroMineCover(i))},_handleBlocksRightClick:function(e,t){e.preventDefault();var i=document.getElementById(t),s=Number(t.slice(6));if("uncover"!==this.mineSweeperArray[s].status&&0!==this.clickedBlocks){if("marked"===this.mineSweeperArray[s].status)s%2==0?(i.classList.remove("odd-marked-mine"),i.classList.add("odd-cover-color")):(i.classList.remove("even-marked-mine"),i.classList.add("even-cover-color")),this.markedBlocks.delete(s),this.mineSweeperArray[s].status="cover";else{if(this.markedBlocks.size>=this.mineNumber)return;s%2==0?(i.classList.remove("odd-cover-color"),i.classList.add("odd-marked-mine")):(i.classList.remove("even-cover-color"),i.classList.add("even-marked-mine")),this.markedBlocks.add(s),this.mineSweeperArray[s].status="marked",this._checkSuccess()}document.getElementById("flagNum").textContent=this.mineNumber-this.markedBlocks.size}},_removeZeroMineCover:function(e){var t=this,i=document.getElementById(this.blockIDs+e);if("cover"===this.mineSweeperArray[e].status){var s;if(e%2==0?i.classList.remove("odd-cover-color"):i.classList.remove("even-cover-color"),this.mineSweeperArray[e].status="uncover",s=this.mineArray.includes(e)?document.createTextNode("X"):document.createTextNode(this.mineSweeperArray[e].value),this._setDiffColor(i,s.textContent),0!==this.mineSweeperArray[e].value&&i.appendChild(s),this.mineArray.includes(e)&&(alert("BOOM!!!  Σ( ° △ °|||)︴"),this._removeAllMineCover(e)),0===this.mineSweeperArray[e].value)this._getLocationAround(e).forEach((function(i){e!==i&&t._removeZeroMineCover(i)}));this.unCoveredBlocks+=1,this._checkSuccess()}},_removeAllMineCover:function(e){var t=this;clearInterval(this._interval),this.mineArray.forEach((function(i,s){t.mineSweeperArray[i].status="uncover";var n=document.getElementById(t.blockIDs+i);e!==i&&setTimeout((function(){console.log("item =",i,"ind =",s,"index =",e),i%2==0?n.classList.remove("odd-cover-color"):n.classList.remove("even-cover-color"),"even-marked-mine"===n.classList[0]?(n.classList.remove("even-marked-mine"),n.classList.add("even-marked-uncover-mine"),n.classList.add("mine")):"odd-marked-mine"===n.classList[0]?(n.classList.remove("odd-marked-mine"),n.classList.add("odd-marked-uncover-mine"),n.classList.add("mine")):n.classList.add("boom"),n.appendChild(document.createTextNode("X"))}),100*s)}))},_setDiffColor:function(e,t){"2"===t?e.classList.add("two"):"3"===t?e.classList.add("three"):"4"===t?e.classList.add("four"):"5"===t?e.classList.add("five"):"X"===t&&e.classList.add("boom")},_removeTips:function(){clearInterval(a);var e=document.getElementById("tipsDig"),t=document.getElementById("tipsFlag");e.style.display="none",t.style.display="none"},_setTimeInterval:function(){var e=document.getElementById("clockNum"),t=Math.floor((new Date-this.clickTime)/1e3);e.textContent=t<1e3?t:999},_checkSuccess:function(){if(this.unCoveredBlocks+this.markedBlocks.size===this.blocks&&this.markedBlocks.size===this.mineArray.length){for(var e=0;e<this.markedBlocks.size;e++)if(!this.markedBlocks.has(this.mineArray[e]))return;alert("Congratulation!!! (*^v^*) (p≥v≤q) (⌒▽⌒)"),this._removeAllMineCover()}},_getRandomNumber:function(e,t){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=[];t>0;){var n=Math.floor(Math.random()*e);s.includes(n)||i.includes(n)||(s.push(n),t--)}return s},_getLocationAround:function(e){var t=[e];return 0===e?t.push.apply(t,[e+1,e+this.col,e+this.col+1]):e===this.col-1?t.push.apply(t,[e-1,e+this.col,e+this.col-1]):e===this.blocks-this.col?t.push.apply(t,[e+1,e-this.col,e-this.col+1]):e===this.blocks-1?t.push.apply(t,[e-1,e-this.col,e-this.col-1]):e>0&&e<this.col-1?t.push.apply(t,[e-1,e+1,e+this.col,e+this.col-1,e+this.col+1]):e>this.blocks-this.col&&e<this.blocks-1?t.push.apply(t,[e-1,e+1,e-this.col,e-this.col-1,e-this.col+1]):e%this.col==0?t.push.apply(t,[e+1,e-this.col,e-this.col+1,e+this.col,e+this.col+1]):(e+1)%this.col==0?t.push.apply(t,[e-1,e-this.col,e-this.col-1,e+this.col,e+this.col-1]):t.push.apply(t,[e-1,e+1,e+this.col,e-this.col,e-this.col-1,e-this.col+1,e+this.col-1,e+this.col+1]),t}},r=document.getElementById("tipsDig"),l=document.getElementById("tipsFlag"),c=!0,a=setInterval((function(){c?(r.style.display="inline",l.style.display="none"):(r.style.display="none",l.style.display="inline"),c=!c}),1500),d=o,h=(i(0),document.getElementById("diffMode")),m=document.getElementById("tipsDig"),u=document.getElementById("tipsFlag"),v=document.getElementById("refreshImg");h.addEventListener("change",(function(){"Easy"===h.value?(d.col=11,d.row=7,d.mineRate=.12,m.style.height="100px",u.style.height="100px"):"Meduim"===h.value?(d.col=19,d.row=11,d.mineRate=.18,m.style.height="150px",u.style.height="150px"):"Diffcult"===h.value&&(d.col=35,d.row=17,d.mineRate=.26,m.style.height="220px",u.style.height="220px"),d.initBoard()})),v.addEventListener("click",(function(){d.initBoard()})),d.initBoard()}],[[1,1]]]);