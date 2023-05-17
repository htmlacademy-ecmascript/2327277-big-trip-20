(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=m;var g=function(t){return t instanceof w},b=function t(e,n,i){var s;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,s=o}return!i&&s&&($=s),s||!i&&$},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},D=_;D.l=b,D.i=g,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!D.u(e)||e,f=D.p(t),h=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(a)},p=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case c:return u?h(1,0):h(31,11);case l:return u?h(1,v):h(0,v+1);case o:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return h(u?_-g:_+(6-g),v);case a:case d:return p($+"Hours",0);case r:return p($+"Minutes",1);case s:return p($+"Seconds",2);case i:return p($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,u=D.p(t),f="set"+(this.$u?"UTC":""),h=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[c]=f+"FullYear",o[r]=f+"Hours",o[s]=f+"Minutes",o[i]=f+"Seconds",o[n]=f+"Milliseconds",o)[u],p=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[D.p(t)]()},v.add=function(n,u){var d,f=this;n=Number(n);var h=D.p(u),p=function(t){var e=M(f);return D.w(e.date(e.date()+Math.round(t*n)),f)};if(h===l)return this.set(l,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===a)return p(1);if(h===o)return p(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return D.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return D.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var h,p=D.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,$=D.m(this,m);return $=(h={},h[c]=$/12,h[l]=$,h[u]=$/3,h[o]=(_-v)/6048e5,h[a]=(_-v)/864e5,h[r]=_/e,h[s]=_/t,h[i]=_/1e3,h)[p]||_,f?$:D.a($)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=w.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,w,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=y[$],M.Ls=y,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:o,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof $},f=function(t,e,n){return new $(t,n,e.$l)},h=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},$=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*c[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(u);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/o),t%=o,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||o.negative,u=s.format||r.format||o.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+u+s.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/c[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*c[h(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return f(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function i(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;n.insertAdjacentElement(i,e.getElement())}var s=n(484),r=n.n(s),a=n(646),o=n.n(a);r().extend(o());const l=36e5;function u(t,e){return t?r()(t).format(e):""}function c(t){return t[Math.floor(Math.random()*t.length)]}function d(t){return`${t[0].toUpperCase()}${t.slice(1)}`}const f=["Check-in","Sightseeing","Restaurant","Taxi","Bus","Train","Ship","Drive","Flight"],h=["Amsterdam","Chamonix","Geneva","Rome","New York"],p=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.","Fusce tristique felis at fermentum pharetra.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum."],m=["Order Uber","Add luggage","Switch to comfort","Rent a car","Add breakfast","Book tickets","Lunch in city"],v={id:"",basePrice:0,dateFrom:null,dateTo:null,destination:null,isFavorite:!1,offers:[],type:"taxi"},_="DD/MM/YY HH:mm";class ${constructor(t){let{destination:e,tripPoint:n=v,offers:i}=t;this.destination=e,this.tripPoint=n,this.offers=i}getTemplate(){return function(t,e,n){const{dateFrom:i,dateTo:s,type:r,basePrice:a}=t,o=u(i,_),l=u(s,_);return`<form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-1">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${r}.png" alt="Event type icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n      <div class="event__type-list">\n        <fieldset class="event__type-group">\n          <legend class="visually-hidden">Event type</legend>\n          ${v=f,v.map((t=>`<div class="event__type-item">\n       <input id="event-type-${t.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.toLowerCase()}">\n       <label class="event__type-label  event__type-label--${t.toLowerCase()}" for="event-type-${t.toLowerCase()}-1">${d(t)}</label>\n      </div>`)).join("")}\n\n        </fieldset>\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-1">\n        ${d(r)}\n      </label>\n\n      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${e?e.name:""}" list="destination-list-1">\n      <datalist id="destination-list-1">\n      ${m=h,m.map((t=>`<option value=${t}></option>`)).join("")}\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o}">\n      —\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${l}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        € ${a}\n      </label>\n      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Cancel</button>\n  </header>\n  <section class="event__details">\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n      ${n?(p=n,p.map((e=>`<div class="event__offer-selector">\n         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${r}-${e.id}" type="checkbox" name="event-offer-${r}" ${t.offers.includes(e.id)?"checked":""}>\n         <label class="event__offer-label" for="event-offer-${r}-${e.id}">\n           <span class="event__offer-title">${e.title}</span>\n           &plus;&euro;&nbsp;\n           <span class="event__offer-price">${e.price}</span>\n         </label>\n       </div>`)).join("")):""}\n      </div>\n    </section>\n\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${e?e.description:""}</p>\n\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n        ${c=e.pictures,c.map((t=>`<img class="event__photo" src="${t.src}" alt="Event photo">`)).join("")}\n        </div>\n      </div>\n    </section>\n  </section>\n  </form>`;var c,p,m,v}(this.tripPoint,this.destination,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class y{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const g="HH:mm";class b{constructor(t){let{tripPoint:e,destination:n,offers:i}=t;this.tripPoint=e,this.destination=n,this.offers=i}getTemplate(){return function(t,e,n){const{dateFrom:i,dateTo:s,isFavorite:a,type:o,basePrice:c}=t,d=u(i,"YYYY-MM-DD"),f=u(i,"MMM DD"),h=u(i,g),p=u(s,g),m=function(t,e){const n=r()(e).diff(t);let i=0;switch(!0){case n>=864e5:i=r().duration(n).format("DD[D] HH[H] mm[M]");break;case n>=l:i=r().duration(n).format("HH[H] mm[M]");break;case n<l:i=r().duration(n).format("mm[M]")}return i}(i,s),v=a?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n        <div class="event">\n        <time class="event__date" datetime="${d}">${f}</time>\n          <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${o}.png" alt="Event type icon">\n          </div>\n          <h3 class="event__title">${o} ${e.name}</h3>\n          <div class="event__schedule">\n            <p class="event__time">\n            <time class="event__start-time" datetime="${d}T${h}">${h}</time>\n              &mdash;\n              <time class="event__end-time" datetime="${d}T${p}">${p}</time>\n            </p>\n            <p class="event__duration">${m}</p>\n          </div>\n          <p class="event__price">\n          &nbsp;<span class="event__price-value">${c}</span>\n          </p>\n          <h4 class="visually-hidden">Offers:</h4>\n          <ul class="event__selected-offers">\n          ${_=n,_.map((t=>`<li class="event__offer">\n         <span class="event__offer-title">${t.title}</span>\n         &plus;&euro;&nbsp;\n         <span class="event__offer-price">${t.price}</span>\n       </li>`)).join("")}\n          </ul>\n          <button class="event__favorite-btn event__favorite-btn--${v()}" type="button">\n            <span class="visually-hidden">Add to favorite</span>\n            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n            </svg>\n          </button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </div>\n      </li>`;var _}(this.tripPoint,this.destination,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const M=[{id:"1",description:c(p),name:c(h),pictures:[{src:"https://loremflickr.com/248/152?random=35",description:c(p)},{src:"https://loremflickr.com/248/152?random=45",description:c(p)}]},{id:"2",description:c(p),name:c(h),pictures:[{src:"https://loremflickr.com/248/152?random=45",description:c(p)},{src:"https://loremflickr.com/248/152?random=12",description:c(p)}]},{id:"3",description:c(p),name:c(h),pictures:[{src:"https://loremflickr.com/248/152?random=11",description:c(p)},{src:"https://loremflickr.com/248/152?random=1",description:c(p)}]}],D=[{type:"taxi",offers:[{id:"1",title:c(m),price:350},{id:"2",title:c(m),price:45}]},{type:"flight",offers:[{id:"1",title:c(m),price:400},{id:"2",title:c(m),price:450},{id:"3",title:c(m),price:30}]},{type:"check-in",offers:[{id:"1",title:c(m),price:100},{id:"2",title:c(m),price:45}]}],w=[{id:"1",basePrice:700,dateFrom:Date("2019-07-10T22:55:56.845Z"),dateTo:Date("2019-07-11T11:22:13.375Z"),destination:M[0].id,isFavorite:!1,offers:["1"],type:"taxi"},{id:"2",basePrice:1200,dateFrom:Date("2019-03-10T22:55:56.845Z"),dateTo:Date("2019-04-11T11:22:13.375Z"),destination:M[1].id,isFavorite:!0,offers:["1","2"],type:"flight"},{id:"3",basePrice:500,dateFrom:Date("2019-05-11T22:55:56.845Z"),dateTo:Date("2019-05-12T11:22:13.375Z"),destination:M[2].id,isFavorite:!1,offers:["2"],type:"check-in"}],S=document.querySelector(".trip-main"),T=document.querySelector(".trip-controls__filters"),E=document.querySelector(".trip-events"),O=new class{tripPoints=w;getTripPoints(){return this.tripPoints}},k=new class{destinations=M;getDestinations(){return this.destinations}getById(t){return this.destinations.find((e=>e.id===t.id))}},Y=new class{offers=D;getOffers(){return this.offers}getByType(t){return this.offers.find((e=>e.type===t.type)).offers}},P=new class{tripEventsListComponent=new y;constructor(t){let{tripEventsListContainer:e,pointsModel:n,destinationsModel:i,offersModel:s}=t;this.tripEventsListContainer=e,this.pointsModel=n,this.destinationsModel=i,this.offersModel=s}init(){this.tripPoints=[...this.pointsModel.getTripPoints()],this.destinations=[...this.destinationsModel.getDestinations()],i(this.tripEventsListComponent,this.tripEventsListContainer),i(new $({destination:this.destinationsModel.getById(this.tripPoints[0]),point:this.tripPoints[0],offers:this.offersModel.getByType(this.tripPoints[0])}),this.tripEventsListComponent.getElement()),this.tripPoints.forEach((t=>{i(new b({point:t,destination:this.destinationsModel.getById(t.destination),offers:this.offersModel.getByType(t.type)}),this.eventListComponent.getElement())}))}}({tripEventsListContainer:E,pointsModel:O,destinationsModel:k,offersModel:Y});i(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},S,t.AFTERBEGIN),i(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},T),i(new class{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},E),P.init()})()})();
//# sourceMappingURL=bundle.b9a2400f1627fe26de7f.js.map