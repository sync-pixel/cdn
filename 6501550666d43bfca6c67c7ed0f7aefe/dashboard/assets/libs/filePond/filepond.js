/*!
 * vue-filepond v6.0.3
 * A handy FilePond adapter component for Vue
 * 
 * Copyright (c) 2020 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */
!function(global,factory){if("function"==typeof define&&define.amd)define("vueFilePond",["exports","vue","filepond"],factory);else if("undefined"!=typeof exports)factory(exports,require("vue"),require("filepond"));else{var mod_exports={};factory(mod_exports,global.Vue,global.FilePond),global.vueFilePond=mod_exports}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,function(_exports,_vue,_filepond){"use strict";var obj;Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=_exports.setOptions=void 0,_vue=(obj=_vue)&&obj.__esModule?obj:{default:obj};var filteredComponentMethods=["setOptions","on","off","onOnce","appendTo","insertAfter","insertBefore","isAttachedTo","replaceElement","restoreElement","destroy"],isSupported=(0,_filepond.supported)(),props={},events=[],watch={},instances=[],globalOptions={};_exports.setOptions=function(options){globalOptions=Object.assign(globalOptions,options),instances.forEach(function(instance){instance.setOptions(globalOptions)})};_exports.default=function(){_filepond.registerPlugin.apply(void 0,arguments),events.length=0;var _loop=function(prop){if(/^on/.test(prop))return events.push(prop),"continue";var type;props[prop]=[String,(type=_filepond.OptionTypes[prop],{string:String,boolean:Boolean,array:Array,function:Function,int:Number,serverapi:Object,object:Object}[type])],watch[prop]=function(value){this._pond[prop]=value}};for(var prop in _filepond.OptionTypes)_loop(prop);return _vue.default.component("FilePond",{name:"FilePond",props:props,watch:watch,render:function(h){return h("div",{class:{"filepond--wrapper":!0}},[h("input",{attrs:{id:this.id,name:this.name,type:"file",class:this.className,required:this.required,multiple:this.allowMultiple,accept:this.acceptedFileTypes,capture:this.captureMethod}})])},mounted:function(){var _this=this;if(isSupported){this._element=this.$el.querySelector("input");var options=events.reduce(function(obj,value){return obj[value]=function(){_this.$emit("input",_this._pond?_this._pond.getFiles():[]);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];_this.$emit.apply(_this,[value.substr(2)].concat(args))},obj},{}),attrs=Object.assign({},this.$attrs);this._pond=(0,_filepond.create)(this._element,Object.assign({},globalOptions,options,attrs,this.$options.propsData)),Object.keys(this._pond).filter(function(key){return!filteredComponentMethods.includes(key)}).forEach(function(key){_this[key]=_this._pond[key]}),instances.push(this._pond)}},destroyed:function(){var _this2=this,detached=this.$options.detached;if(this.$el.offsetParent){new MutationObserver(function(mutations,observer){var removedNode=((mutations[0]||{}).removedNodes||[])[0];removedNode&&removedNode.contains(_this2.$el)&&(observer.disconnect(),detached.call(_this2))}).observe(document.documentElement,{childList:!0,subtree:!0})}else detached.call(this)},detached:function(){if(this._pond){this._pond.destroy();var index=instances.indexOf(this._pond);0<=index&&instances.splice(index,1),this._pond=null}}})}});