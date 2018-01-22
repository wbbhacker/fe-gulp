!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.__pixiSound={})}(this,function(t){"use strict";if("undefined"==typeof PIXI)throw"PixiJS required";var e=function(){function t(t,e){this._output=e,this._input=t}return Object.defineProperty(t.prototype,"destination",{get:function(){return this._input},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filters",{get:function(){return this._filters},set:function(t){var e=this;if(this._filters&&(this._filters.forEach(function(t){t&&t.disconnect()}),this._filters=null,this._input.connect(this._output)),t&&t.length){this._filters=t.slice(0),this._input.disconnect();var n=null;t.forEach(function(t){null===n?e._input.connect(t.destination):n.connect(t.destination),n=t}),n.connect(this._output)}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.filters=null,this._input=null,this._output=null},t}(),n=function(){function t(t,e){this.destination=t,this.source=e||t}return t.prototype.connect=function(t){this.source.connect(t)},t.prototype.disconnect=function(){this.source.disconnect()},t.prototype.destroy=function(){this.disconnect(),this.destination=null,this.source=null},t}(),o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};function i(t,e){o(t,e);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function r(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var i=arguments[o];if(void 0!==i&&null!==i)for(var r=Object.keys(Object(i)),s=0,u=r.length;s<u;s++){var a=r[s],c=Object.getOwnPropertyDescriptor(i,a);void 0!==c&&c.enumerable&&(n[a]=i[a])}}return n}var s={assign:r,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}},u="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a,c,l=(a=function(t){!function(e){var n=setTimeout;function o(){}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this)}function r(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(t){return void u(e.promise,t)}s(e.promise,o)}else(1===t._state?s:u)(e.promise,t._value)})):t._deferreds.push(e)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void a(t);if("function"==typeof n)return void c((o=n,r=e,function(){o.apply(r,arguments)}),t)}t._state=1,t._value=e,a(t)}catch(e){u(t,e)}var o,r}function u(t,e){t._state=2,t._value=e,a(t)}function a(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)r(t,t._deferreds[e]);t._deferreds=null}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,u(e,t))})}catch(t){if(n)return;n=!0,u(e,t)}}i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return r(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){if(0===e.length)return t([]);var o=e.length;function i(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var u=s.then;if("function"==typeof u)return void u.call(s,function(t){i(r,t)},n)}e[r]=s,0==--o&&t(e)}catch(t){n(t)}}for(var r=0;r<e.length;r++)i(r,e[r])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,i=t.length;o<i;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){n(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},t.exports?t.exports=i:e.Promise||(e.Promise=i)}(u)},c=void 0,a(c={exports:{}},c.exports),c.exports),p=0,d=function(t){i(e,t);function e(e){var n=t.call(this)||this;return n.id=p++,n.init(e),n}return Object.defineProperty(e.prototype,"progress",{get:function(){return this._source.currentTime/this._duration},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(t){var e=this._parent.context.paused;t===this._paused&&e===this._paused||(this._paused=t,t||e?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play(this._source.currentTime,this._end,1,this._source.loop,0,0)),this.emit("pause",t))},enumerable:!0,configurable:!0}),e.prototype._onPlay=function(){this._playing=!0},e.prototype._onPause=function(){this._playing=!1},e.prototype.init=function(t){var e=this;this._playing=!1,this._duration=t.source.duration;var n=this._source=t.source.cloneNode(!1);n.src=t.parent.url,n.onplay=this._onPlay.bind(this),n.onpause=this._onPause.bind(this),this._onVolumeChanged=function(){var e=t.volume;e*=t.context.volume,e*=t.context.muted?0:1,n.volume=e},this._onPausedChanged=function(){e.paused=e.paused},t.on("volume",this._onVolumeChanged),t.context.on("volume",this._onVolumeChanged),t.context.on("muted",this._onVolumeChanged),t.context.on("paused",this._onPausedChanged),this._parent=t,this._onPausedChanged(),this._onVolumeChanged()},e.prototype._internalStop=function(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())},e.prototype.stop=function(){this._internalStop(),this._source&&this.emit("stop")},e.prototype.play=function(t,n,o,i,r,s){var u=this;n&&console.assert(n>t,"End time is before start time"),void 0!==i&&(this._source.loop=i),!0===i&&void 0!==n&&(console.warn('Looping not support when specifying an "end" time'),this._source.loop=!1),this._start=t,this._end=n||this._duration,this._start=Math.max(0,this._start-e.PADDING),this._end=Math.min(this._end+e.PADDING,this._duration),this._source.onloadedmetadata=function(){u._source&&(u._source.currentTime=t,u._source.onloadedmetadata=null,u.emit("progress",t,u._duration),PIXI.ticker.shared.add(u._onUpdate,u))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")},e.prototype._onUpdate=function(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()},e.prototype._onComplete=function(){PIXI.ticker.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)},e.prototype.destroy=function(){PIXI.ticker.shared.remove(this._onUpdate,this),this.removeAllListeners();var t=this._source;t&&(t.onended=null,t.onplay=null,t.onpause=null,this._internalStop()),this._source=null,this._end=0,this._start=0,this._duration=0,this._playing=!1;var e=this._parent;e&&(e.off("volume",this._onVolumeChanged),e.context.off("muted",this._onVolumeChanged),e.context.off("volume",this._onVolumeChanged),e.context.off("paused",this._onPausedChanged)),this._parent=null,this._onVolumeChanged=null,this._onPausedChanged=null},e.prototype.toString=function(){return"[HTMLAudioInstance id="+this.id+"]"},e.PADDING=.1,e}(PIXI.utils.EventEmitter),f=function(t){i(e,t);function e(){return null!==t&&t.apply(this,arguments)||this}return e.prototype.init=function(t){this.parent=t,this._source=t.options.source||new Audio,this.speed=t.options.speed,t.url&&(this._source.src=t.url)},e.prototype.create=function(){return new d(this)},Object.defineProperty(e.prototype,"isPlayable",{get:function(){return!!this._source&&4===this._source.readyState},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"volume",{get:function(){return this._source.volume},set:function(t){var e=this.volume;this._source.volume=t,t!==e&&this.emit("volume",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"loop",{set:function(t){this._source.loop=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this._source.playbackRate},set:function(t){var e=this.speed;this._source.playbackRate=t,t!=e&&this.emit("speed",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._source.duration},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this.parent.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filters",{get:function(){return null},set:function(t){console.warn("HTML Audio does not support filters")},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)},Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),e.prototype.load=function(t){var e=this._source,n=this.parent;if(4!==e.readyState){if(!n.url)return t(new Error("sound.url or sound.source must be set"));e.src=n.url;var o=function(){e.removeEventListener("canplaythrough",i),e.removeEventListener("load",i),e.removeEventListener("abort",r),e.removeEventListener("error",s)},i=function(){o(),n.isLoaded=!0;var e=n.autoPlayStart();t&&t(null,n,e)},r=function(){o(),t&&t(new Error("Sound loading has been aborted"))},s=function(){o();var n="Failed to load audio element (code: "+e.error.code+")";t?t(new Error(n)):console.error(n)};e.addEventListener("canplaythrough",i,!1),e.addEventListener("load",i,!1),e.addEventListener("abort",r,!1),e.addEventListener("error",s,!1),e.load()}else{n.isLoaded=!0;var u=n.autoPlayStart();t&&setTimeout(function(){t(null,n,u)},0)}},e}(PIXI.utils.EventEmitter),h=function(t){i(e,t);function e(){var e=t.call(this)||this;return e._volume=1,e._muted=!1,e._paused=!1,e}return Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(t){var e=this._paused;this._paused=t,t!==e&&this.emit("paused",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"muted",{get:function(){return this._muted},set:function(t){var e=this._muted;this._muted=t,t!==e&&this.emit("muted",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"volume",{get:function(){return this._volume},set:function(t){var e=this._volume;this._volume=t,t!==e&&this.emit("volume",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filters",{get:function(){return console.warn("HTML Audio does not support filters"),null},set:function(t){console.warn("HTML Audio does not support filters")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"audioContext",{get:function(){return console.warn("HTML Audio does not support audioContext"),null},enumerable:!0,configurable:!0}),e.prototype.toggleMute=function(){return this.muted=!this.muted,this._muted},e.prototype.togglePause=function(){return this.paused=!this.paused,this._paused},e.prototype.destroy=function(){this.removeAllListeners()},e}(PIXI.utils.EventEmitter),_=Object.freeze({HTMLAudioMedia:f,HTMLAudioInstance:d,HTMLAudioContext:h}),y=function(){function t(){}return t.install=function(e){t._sound=e,t.legacy=e.useLegacy,PIXI.loaders.Loader.addPixiMiddleware(function(){return t.plugin}),PIXI.loader.use(t.plugin)},Object.defineProperty(t,"legacy",{set:function(e){var n=PIXI.loaders.Resource,o=t.EXTENSIONS;e?o.forEach(function(t){n.setExtensionXhrType(t,n.XHR_RESPONSE_TYPE.DEFAULT),n.setExtensionLoadType(t,n.LOAD_TYPE.AUDIO)}):o.forEach(function(t){n.setExtensionXhrType(t,n.XHR_RESPONSE_TYPE.BUFFER),n.setExtensionLoadType(t,n.LOAD_TYPE.XHR)})},enumerable:!0,configurable:!0}),t.plugin=function(e,n){e.data&&t.EXTENSIONS.indexOf(e.extension)>-1?e.sound=t._sound.add(e.name,{loaded:n,preload:!0,url:e.url,source:e.data}):n()},t.EXTENSIONS=["wav","mp3","ogg","oga","m4a"],t}(),m=function(){function t(t,e){this.parent=t,Object.assign(this,e),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}return t.prototype.play=function(t){return this.parent.play(Object.assign({complete:t,speed:this.speed||this.parent.speed,end:this.end,start:this.start}))},t.prototype.destroy=function(){this.parent=null},t}(),g=0,b=function(t){i(e,t);function e(e){var n=t.call(this)||this;return n.id=g++,n._media=null,n._paused=!1,n._elapsed=0,n._updateListener=n._update.bind(n),n.init(e),n}return e.prototype.stop=function(){this._source&&(this._internalStop(),this.emit("stop"))},e.prototype.play=function(t,e,n,o,i,r){e&&console.assert(e>t,"End time is before start time"),this._paused=!1,this._source=this._media.nodes.cloneBufferSource(),void 0!==n&&(this._source.playbackRate.value=n),this._speed=this._source.playbackRate.value,void 0!==o&&(this._loop=this._source.loop=!!o),this._loop&&void 0!==e&&(console.warn('Looping not support when specifying an "end" time'),this._loop=this._source.loop=!1),this._end=e;var s=this._source.buffer.duration;(i=this._toSec(i))>s&&(i=s),this._loop||(r=this._toSec(r))>s-i&&(r=s-i),this._duration=s,this._fadeIn=i,this._fadeOut=r,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),e?this._source.start(0,t,e-t):this._source.start(0,t),this.emit("start"),this._update(!0),this._enabled=!0},e.prototype._toSec=function(t){return t>10&&(t/=1e3),t||0},Object.defineProperty(e.prototype,"_enabled",{set:function(t){var e=this._media.nodes.script;e.removeEventListener("audioprocess",this._updateListener),t&&e.addEventListener("audioprocess",this._updateListener)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"progress",{get:function(){return this._progress},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(t){t!==this._paused&&(this._paused=t,t?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play(this._elapsed%this._duration,this._end,this._speed,this._loop,this._fadeIn,this._fadeOut)),this.emit("pause",t))},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.removeAllListeners(),this._internalStop(),this._source=null,this._speed=0,this._end=0,this._media=null,this._elapsed=0,this._duration=0,this._loop=!1,this._fadeIn=0,this._fadeOut=0,this._paused=!1},e.prototype.toString=function(){return"[SoundInstance id="+this.id+"]"},e.prototype._now=function(){return this._media.context.audioContext.currentTime},e.prototype._update=function(t){if(void 0===t&&(t=!1),this._source){var e=this._now(),n=e-this._lastUpdate;if(n>0||t){this._elapsed+=n,this._lastUpdate=e;var o=this._duration,i=this._elapsed*this._speed%o/o;if(this._fadeIn||this._fadeOut){var r=i*o,s=this._media.nodes.gain.gain,u=this._media.parent.volume;if(this._fadeIn&&(r<=this._fadeIn&&i<1?s.value=u*(r/this._fadeIn):(s.value=u,this._fadeIn=0)),this._fadeOut&&r>=o-this._fadeOut){var a=(o-r)/this._fadeOut;s.value=u*a}}this._progress=i,this.emit("progress",this._progress,o)}}},e.prototype.init=function(t){this._media=t},e.prototype._internalStop=function(){this._source&&(this._enabled=!1,this._source.onended=null,this._source.stop(),this._source=null,this._media.volume=this._media.parent.volume)},e.prototype._onComplete=function(){this._source&&(this._enabled=!1,this._source.onended=null),this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)},e}(PIXI.utils.EventEmitter),v=function(t){i(e,t);function e(n){var o=this,i=n.audioContext,r=i.createBufferSource(),s=i.createScriptProcessor(e.BUFFER_SIZE),u=i.createGain(),a=i.createAnalyser();return r.connect(a),a.connect(u),u.connect(n.destination),s.connect(n.destination),(o=t.call(this,a,u)||this).context=n,o.bufferSource=r,o.script=s,o.gain=u,o.analyser=a,o}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.bufferSource.disconnect(),this.script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this.script=null,this.gain=null,this.analyser=null,this.context=null},e.prototype.cloneBufferSource=function(){var t=this.bufferSource,e=this.context.audioContext.createBufferSource();return e.buffer=t.buffer,e.playbackRate.value=t.playbackRate.value,e.loop=t.loop,e.connect(this.destination),e},e.BUFFER_SIZE=256,e}(e),P=function(){function t(){}return t.prototype.init=function(t){this.parent=t,this._nodes=new v(this.context),this._source=this._nodes.bufferSource,this.source=t.options.source,this.useXHR=t.options.useXHR},t.prototype.destroy=function(){this.parent=null,this._nodes.destroy(),this._nodes=null,this._source=null,this.source=null},t.prototype.create=function(){return new b(this)},Object.defineProperty(t.prototype,"context",{get:function(){return this.parent.context},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPlayable",{get:function(){return!!this._source&&!!this._source.buffer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"volume",{set:function(t){this._nodes.gain.gain.value=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"loop",{set:function(t){this._source.loop=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"speed",{set:function(t){this._source.playbackRate.value=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filters",{get:function(){return this._nodes.filters},set:function(t){this._nodes.filters=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buffer",{get:function(){return this._source.buffer},set:function(t){this._source.buffer=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nodes",{get:function(){return this._nodes},enumerable:!0,configurable:!0}),t.prototype.load=function(t){this.parent.url?this.useXHR?this._loadUrl(t):this._loadPath(t):this.source?this._decode(this.source,t):t?t(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")},t.prototype._loadUrl=function(t){var e=this,n=new XMLHttpRequest,o=this.parent.url;n.open("GET",o,!0),n.responseType="arraybuffer",n.onload=function(){e.source=n.response,e._decode(n.response,t)},n.send()},t.prototype._loadPath=function(t){var e=this,n=require("fs"),o=this.parent.url;n.readFile(o,function(n,o){if(n)return console.error(n),void(t&&t(new Error("File not found "+e.parent.url)));for(var i=new ArrayBuffer(o.length),r=new Uint8Array(i),s=0;s<o.length;++s)r[s]=o[s];e.source=i,e._decode(i,t)})},t.prototype._decode=function(t,e){var n=this;this.parent.context.decode(t,function(t,o){if(t)e&&e(t);else{n.parent.isLoaded=!0,n.buffer=o;var i=n.parent.autoPlayStart();e&&e(null,n.parent,i)}})},t}(),O=function(){function t(t,e){this.media=t,this.options=e,this._instances=[],this._sprites={},this.media.init(this);var n=e.complete;this._autoPlayOptions=n?{complete:n}:null,this.isLoaded=!1,this.isPlaying=!1,this.autoPlay=e.autoPlay,this.singleInstance=e.singleInstance,this.preload=e.preload||this.autoPlay,this.url=e.url,this.speed=e.speed,this.volume=e.volume,this.loop=e.loop,e.sprites&&this.addSprites(e.sprites),this.preload&&this._preload(e.loaded)}return t.from=function(e){var n={};"string"==typeof e?n.url=e:e instanceof ArrayBuffer||e instanceof HTMLAudioElement?n.source=e:n=e,n=Object.freeze(Object.assign({autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,useXHR:!0},n));return new t(F.instance.useLegacy?new f:new P,n)},Object.defineProperty(t.prototype,"context",{get:function(){return F.instance.context},enumerable:!0,configurable:!0}),t.prototype.pause=function(){return this.paused=!0,this.isPlaying=!1,this},t.prototype.resume=function(){return this.paused=!1,this.isPlaying=this._instances.length>0,this},Object.defineProperty(t.prototype,"paused",{set:function(t){for(var e=this._instances.length-1;e>=0;e--)this._instances[e].paused=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=this.media.speed=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filters",{get:function(){return this.media.filters},set:function(t){this.media.filters=t},enumerable:!0,configurable:!0}),t.prototype.addSprites=function(t,e){if("object"==typeof t){var n={};for(var o in t)n[o]=this.addSprites(o,t[o]);return n}if("string"==typeof t){console.assert(!this._sprites[t],"Alias "+t+" is already taken");var i=new m(this,e);return this._sprites[t]=i,i}},t.prototype.destroy=function(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null},t.prototype.removeSprites=function(t){if(t){var e=this._sprites[t];void 0!==e&&(e.destroy(),delete this._sprites[t])}else for(var n in this._sprites)this.removeSprites(n);return this},Object.defineProperty(t.prototype,"isPlayable",{get:function(){return this.isLoaded&&this.media&&this.media.isPlayable},enumerable:!0,configurable:!0}),t.prototype.stop=function(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(var t=this._instances.length-1;t>=0;t--)this._instances[t].stop();return this},t.prototype.play=function(t,e){var n,o=this;if("string"==typeof t){n={sprite:r=t,complete:e}}else"function"==typeof t?(n={}).complete=t:n=t;if((n=Object.assign({complete:null,loaded:null,sprite:null,start:0,fadeIn:0,fadeOut:0},n||{})).sprite){var i=n.sprite;console.assert(!!this._sprites[i],"Alias "+i+" is not available");var r=this._sprites[i];n.start=r.start,n.end=r.end,n.speed=r.speed,delete n.sprite}if(n.offset&&(n.start=n.offset),!this.isLoaded)return new Promise(function(t,e){o.autoPlay=!0,o._autoPlayOptions=n,o._preload(function(o,i,r){o?e(o):(n.loaded&&n.loaded(o,i,r),t(r))})});this.singleInstance&&this._removeInstances();var s=this._createInstance();return this._instances.push(s),this.isPlaying=!0,s.once("end",function(){n.complete&&n.complete(o),o._onComplete(s)}),s.once("stop",function(){o._onComplete(s)}),s.play(n.start,n.end,n.speed,n.loop,n.fadeIn,n.fadeOut),s},Object.defineProperty(t.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=this.media.volume=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=this.media.loop=t},enumerable:!0,configurable:!0}),t.prototype._preload=function(t){this.media.load(t)},Object.defineProperty(t.prototype,"instances",{get:function(){return this._instances},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sprites",{get:function(){return this._sprites},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this.media.duration},enumerable:!0,configurable:!0}),t.prototype.autoPlayStart=function(){var t;return this.autoPlay&&(t=this.play(this._autoPlayOptions)),t},t.prototype._removeInstances=function(){for(var t=this._instances.length-1;t>=0;t--)this._poolInstance(this._instances[t]);this._instances.length=0},t.prototype._onComplete=function(t){if(this._instances){var e=this._instances.indexOf(t);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}this._poolInstance(t)},t.prototype._createInstance=function(){if(t._pool.length>0){var e=t._pool.pop();return e.init(this.media),e}return this.media.create()},t.prototype._poolInstance=function(e){e.destroy(),t._pool.indexOf(e)<0&&t._pool.push(e)},t._pool=[],t}(),x=function(){function t(){}return t.sineTone=function(t,e){void 0===t&&(t=200),void 0===e&&(e=1);var n=O.from({singleInstance:!0});if(!(n.media instanceof P))return n;for(var o=n.media,i=n.context.audioContext.createBuffer(1,48e3*e,48e3),r=i.getChannelData(0),s=0;s<r.length;s++){var u=t*(s/i.sampleRate)*Math.PI;r[s]=2*Math.sin(u)}return o.buffer=i,n.isLoaded=!0,n},t.render=function(t,e){var n=document.createElement("canvas");e=Object.assign({width:512,height:128,fill:"black"},e||{}),n.width=e.width,n.height=e.height;var o=PIXI.BaseTexture.fromCanvas(n);if(!(t.media instanceof P))return o;var i=t.media;console.assert(!!i.buffer,"No buffer found, load first");var r=n.getContext("2d");r.fillStyle=e.fill;for(var s=i.buffer.getChannelData(0),u=Math.ceil(s.length/e.width),a=e.height/2,c=0;c<e.width;c++){for(var l=1,p=-1,d=0;d<u;d++){var f=s[c*u+d];f<l&&(l=f),f>p&&(p=f)}r.fillRect(c,(1+l)*a,1,Math.max(1,(p-l)*a))}return o},t.playOnce=function(e,n){var o="alias"+t.PLAY_ID++;return F.instance.add(o,{url:e,preload:!0,autoPlay:!0,loaded:function(t){t&&(console.error(t),F.instance.remove(o),n&&n(t))},complete:function(){F.instance.remove(o),n&&n(null)}}),o},t.PLAY_ID=0,t}(),j=function(t){i(e,t);function e(){var n=this,o=new e.AudioContext,i=o.createGain(),r=o.createDynamicsCompressor(),s=o.createAnalyser();return s.connect(i),i.connect(r),r.connect(o.destination),(n=t.call(this,s,i)||this)._ctx=o,n._offlineCtx=new e.OfflineAudioContext(1,2,o.sampleRate),n._unlocked=!1,n.gain=i,n.compressor=r,n.analyser=s,n.volume=1,n.muted=!1,n.paused=!1,"ontouchstart"in window&&"running"!==o.state&&(n._unlock(),n._unlock=n._unlock.bind(n),document.addEventListener("mousedown",n._unlock,!0),document.addEventListener("touchstart",n._unlock,!0),document.addEventListener("touchend",n._unlock,!0)),n}return e.prototype._unlock=function(){this._unlocked||(this.playEmptySound(),"running"===this._ctx.state&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._unlocked=!0))},e.prototype.playEmptySound=function(){var t=this._ctx.createBufferSource();t.buffer=this._ctx.createBuffer(1,1,22050),t.connect(this._ctx.destination),t.start(0,0,0)},Object.defineProperty(e,"AudioContext",{get:function(){var t=window;return t.AudioContext||t.webkitAudioContext||null},enumerable:!0,configurable:!0}),Object.defineProperty(e,"OfflineAudioContext",{get:function(){var t=window;return t.OfflineAudioContext||t.webkitOfflineAudioContext||null},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this);var e=this._ctx;void 0!==e.close&&e.close(),this.analyser.disconnect(),this.gain.disconnect(),this.compressor.disconnect(),this.gain=null,this.analyser=null,this.compressor=null,this._offlineCtx=null,this._ctx=null},Object.defineProperty(e.prototype,"audioContext",{get:function(){return this._ctx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"offlineContext",{get:function(){return this._offlineCtx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"muted",{get:function(){return this._muted},set:function(t){this._muted=!!t,this.gain.gain.value=this._muted?0:this._volume},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this._muted||(this.gain.gain.value=this._volume)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(t){t&&"running"===this._ctx.state?this._ctx.suspend():t||"suspended"!==this._ctx.state||this._ctx.resume(),this._paused=t},enumerable:!0,configurable:!0}),e.prototype.toggleMute=function(){return this.muted=!this.muted,this._muted},e.prototype.togglePause=function(){return this.paused=!this.paused,this._paused},e.prototype.decode=function(t,e){this._offlineCtx.decodeAudioData(t,function(t){e(null,t)},function(){e(new Error("Unable to decode file"))})},e}(e),w=Object.freeze({WebAudioMedia:P,WebAudioInstance:b,WebAudioNodes:v,WebAudioContext:j}),F=function(){function t(){this.supported&&(this._webAudioContext=new j),this._htmlAudioContext=new h,this._sounds={},this.useLegacy=!this.supported}return Object.defineProperty(t.prototype,"context",{get:function(){return this._context},enumerable:!0,configurable:!0}),t.init=function(){if(t.instance)throw new Error("SoundLibrary is already created");var e=t.instance=new t;return void 0===Object.assign&&s.polyfill(),"undefined"==typeof Promise&&(window.Promise=l),void 0!==PIXI.loaders&&y.install(e),void 0===window.__pixiSound&&delete window.__pixiSound,"undefined"==typeof module&&e.global(),e},t.prototype.global=function(){var n=PIXI;n.sound||(Object.defineProperty(n,"sound",{get:function(){return t.instance}}),Object.defineProperties(t.instance,{filters:{get:function(){return M}},htmlaudio:{get:function(){return _}},webaudio:{get:function(){return w}},utils:{get:function(){return x}},Sound:{get:function(){return O}},SoundSprite:{get:function(){return m}},Filterable:{get:function(){return e}},SoundLibrary:{get:function(){return t}}}))},Object.defineProperty(t.prototype,"filtersAll",{get:function(){return this.useLegacy?[]:this._context.filters},set:function(t){this.useLegacy||(this._context.filters=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"supported",{get:function(){return null!==j.AudioContext},enumerable:!0,configurable:!0}),t.prototype.add=function(t,e){if("object"==typeof t){var n={};for(var o in t){var i=this._getOptions(t[o],e);n[o]=this.add(o,i)}return n}if("string"==typeof t){if(console.assert(!this._sounds[t],"Sound with alias "+t+" already exists."),e instanceof O)return this._sounds[t]=e,e;i=this._getOptions(e);var r=O.from(i);return this._sounds[t]=r,r}},t.prototype._getOptions=function(t,e){var n;return n="string"==typeof t?{url:t}:t instanceof ArrayBuffer||t instanceof HTMLAudioElement?{source:t}:t,Object.assign(n,e||{})},Object.defineProperty(t.prototype,"useLegacy",{get:function(){return this._useLegacy},set:function(t){y.legacy=t,this._useLegacy=t,!t&&this.supported?this._context=this._webAudioContext:this._context=this._htmlAudioContext},enumerable:!0,configurable:!0}),t.prototype.remove=function(t){return this.exists(t,!0),this._sounds[t].destroy(),delete this._sounds[t],this},Object.defineProperty(t.prototype,"volumeAll",{get:function(){return this._context.volume},set:function(t){this._context.volume=t},enumerable:!0,configurable:!0}),t.prototype.togglePauseAll=function(){return this._context.togglePause()},t.prototype.pauseAll=function(){return this._context.paused=!0,this},t.prototype.resumeAll=function(){return this._context.paused=!1,this},t.prototype.toggleMuteAll=function(){return this._context.toggleMute()},t.prototype.muteAll=function(){return this._context.muted=!0,this},t.prototype.unmuteAll=function(){return this._context.muted=!1,this},t.prototype.removeAll=function(){for(var t in this._sounds)this._sounds[t].destroy(),delete this._sounds[t];return this},t.prototype.stopAll=function(){for(var t in this._sounds)this._sounds[t].stop();return this},t.prototype.exists=function(t,e){void 0===e&&(e=!1);var n=!!this._sounds[t];return e&&console.assert(n,"No sound matching alias '"+t+"'."),n},t.prototype.find=function(t){return this.exists(t,!0),this._sounds[t]},t.prototype.play=function(t,e){return this.find(t).play(e)},t.prototype.stop=function(t){return this.find(t).stop()},t.prototype.pause=function(t){return this.find(t).pause()},t.prototype.resume=function(t){return this.find(t).resume()},t.prototype.volume=function(t,e){var n=this.find(t);return void 0!==e&&(n.volume=e),n.volume},t.prototype.duration=function(t){return this.find(t).duration},t.prototype.destroy=function(){this.removeAll(),this._sounds=null,this._context=null},t}(),E=function(t){i(e,t);function e(n,o,i,r,s,u,a,c,l,p){void 0===n&&(n=0),void 0===o&&(o=0),void 0===i&&(i=0),void 0===r&&(r=0),void 0===s&&(s=0),void 0===u&&(u=0),void 0===a&&(a=0),void 0===c&&(c=0),void 0===l&&(l=0),void 0===p&&(p=0);var d=this;if(!F.instance.useLegacy){var f=[{f:e.F32,type:"lowshelf",gain:n},{f:e.F64,type:"peaking",gain:o},{f:e.F125,type:"peaking",gain:i},{f:e.F250,type:"peaking",gain:r},{f:e.F500,type:"peaking",gain:s},{f:e.F1K,type:"peaking",gain:u},{f:e.F2K,type:"peaking",gain:a},{f:e.F4K,type:"peaking",gain:c},{f:e.F8K,type:"peaking",gain:l},{f:e.F16K,type:"highshelf",gain:p}].map(function(t){var e=F.instance.context.audioContext.createBiquadFilter();return e.type=t.type,e.gain.value=t.gain,e.Q.value=1,e.frequency.value=t.f,e});(d=t.call(this,f[0],f[f.length-1])||this).bands=f,d.bandsMap={};for(var h=0;h<d.bands.length;h++){var _=d.bands[h];h>0&&d.bands[h-1].connect(_),d.bandsMap[_.frequency.value]=_}return d}d=t.call(this,null)||this}return e.prototype.setGain=function(t,e){if(void 0===e&&(e=0),!this.bandsMap[t])throw"No band found for frequency "+t;this.bandsMap[t].gain.value=e},e.prototype.getGain=function(t){if(!this.bandsMap[t])throw"No band found for frequency "+t;return this.bandsMap[t].gain.value},Object.defineProperty(e.prototype,"f32",{get:function(){return this.getGain(e.F32)},set:function(t){this.setGain(e.F32,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f64",{get:function(){return this.getGain(e.F64)},set:function(t){this.setGain(e.F64,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f125",{get:function(){return this.getGain(e.F125)},set:function(t){this.setGain(e.F125,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f250",{get:function(){return this.getGain(e.F250)},set:function(t){this.setGain(e.F250,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f500",{get:function(){return this.getGain(e.F500)},set:function(t){this.setGain(e.F500,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f1k",{get:function(){return this.getGain(e.F1K)},set:function(t){this.setGain(e.F1K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f2k",{get:function(){return this.getGain(e.F2K)},set:function(t){this.setGain(e.F2K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f4k",{get:function(){return this.getGain(e.F4K)},set:function(t){this.setGain(e.F4K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f8k",{get:function(){return this.getGain(e.F8K)},set:function(t){this.setGain(e.F8K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f16k",{get:function(){return this.getGain(e.F16K)},set:function(t){this.setGain(e.F16K,t)},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.bands.forEach(function(t){t.gain.value=0})},e.prototype.destroy=function(){this.bands.forEach(function(t){t.disconnect()}),this.bands=null,this.bandsMap=null},e.F32=32,e.F64=64,e.F125=125,e.F250=250,e.F500=500,e.F1K=1e3,e.F2K=2e3,e.F4K=4e3,e.F8K=8e3,e.F16K=16e3,e}(n),S=function(t){i(e,t);function e(e){void 0===e&&(e=0);var n=this;{if(!F.instance.useLegacy){var o=F.instance.context.audioContext.createWaveShaper();return(n=t.call(this,o)||this)._distortion=o,n.amount=e,n}n=t.call(this,null)||this}}return Object.defineProperty(e.prototype,"amount",{get:function(){return this._amount},set:function(t){t*=1e3,this._amount=t;for(var e,n=new Float32Array(44100),o=Math.PI/180,i=0;i<44100;++i)e=2*i/44100-1,n[i]=(3+t)*e*20*o/(Math.PI+t*Math.abs(e));this._distortion.curve=n,this._distortion.oversample="4x"},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._distortion=null,t.prototype.destroy.call(this)},e}(n),I=function(t){i(e,t);function e(e){void 0===e&&(e=0);var n=this;{if(!F.instance.useLegacy){var o,i,r,s=F.instance.context.audioContext;return s.createStereoPanner?r=o=s.createStereoPanner():((i=s.createPanner()).panningModel="equalpower",r=i),(n=t.call(this,r)||this)._stereo=o,n._panner=i,n.pan=e,n}n=t.call(this,null)||this}}return Object.defineProperty(e.prototype,"pan",{get:function(){return this._pan},set:function(t){this._pan=t,this._stereo?this._stereo.pan.value=t:this._panner.setPosition(t,0,1-Math.abs(t))},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this._stereo=null,this._panner=null},e}(n),L=function(t){i(e,t);function e(e,n,o){void 0===e&&(e=3),void 0===n&&(n=2),void 0===o&&(o=!1);var i=this;if(!F.instance.useLegacy){var r=F.instance.context.audioContext.createConvolver();return(i=t.call(this,r)||this)._convolver=r,i._seconds=i._clamp(e,1,50),i._decay=i._clamp(n,0,100),i._reverse=o,i._rebuild(),i}i=t.call(this,null)||this}return e.prototype._clamp=function(t,e,n){return Math.min(n,Math.max(e,t))},Object.defineProperty(e.prototype,"seconds",{get:function(){return this._seconds},set:function(t){this._seconds=this._clamp(t,1,50),this._rebuild()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"decay",{get:function(){return this._decay},set:function(t){this._decay=this._clamp(t,0,100),this._rebuild()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reverse",{get:function(){return this._reverse},set:function(t){this._reverse=t,this._rebuild()},enumerable:!0,configurable:!0}),e.prototype._rebuild=function(){for(var t,e=F.instance.context.audioContext,n=e.sampleRate,o=n*this._seconds,i=e.createBuffer(2,o,n),r=i.getChannelData(0),s=i.getChannelData(1),u=0;u<o;u++)t=this._reverse?o-u:u,r[u]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay),s[u]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay);this._convolver.buffer=i},e.prototype.destroy=function(){this._convolver=null,t.prototype.destroy.call(this)},e}(n),C=function(t){i(e,t);function e(){var e=this;F.instance.useLegacy&&(e=t.call(this,null)||this);var n=F.instance.context.audioContext,o=n.createChannelSplitter(),i=n.createChannelMerger();return i.connect(o),(e=t.call(this,i,o)||this)._merger=i,e}return e.prototype.destroy=function(){this._merger.disconnect(),this._merger=null,t.prototype.destroy.call(this)},e}(n),A=function(t){i(e,t);function e(){{if(!F.instance.useLegacy){var e=F.instance.context.audioContext,n=e.createBiquadFilter(),o=e.createBiquadFilter(),i=e.createBiquadFilter(),r=e.createBiquadFilter();return n.type="lowpass",n.frequency.value=2e3,o.type="lowpass",o.frequency.value=2e3,i.type="highpass",i.frequency.value=500,r.type="highpass",r.frequency.value=500,n.connect(o),o.connect(i),i.connect(r),t.call(this,n,r)||this}t.call(this,null)}}return e}(n),M=Object.freeze({Filter:n,EqualizerFilter:E,DistortionFilter:S,StereoFilter:I,ReverbFilter:L,MonoFilter:C,TelephoneFilter:A}),k=F.init();t.filters=M,t.htmlaudio=_,t.webaudio=w,t.sound=k,t.utils=x,t.Sound=O,t.SoundSprite=m,t.Filterable=e,t.SoundLibrary=F,Object.defineProperty(t,"__esModule",{value:!0})});