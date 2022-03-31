(function(){"use strict";var e={6924:function(e,t,a){var r=a(8935),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),a("hr"),a("div",{staticClass:"container"},[a("create-user-form")],1),a("hr"),a("div",{staticClass:"container"})])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Создание нового клиента")])])}],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"create-user-form",on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"fieldset"},[a("h3",[e._v("Основная информация")]),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"lastname",placeholder:"Введите вашу фамилию",label:"Фамилия *",isInvalid:e.$v.formData.lastName.$error,validations:[{condition:!e.$v.formData.lastName.required,text:"Поле должно быть заполнено"}]},on:{input:function(t){return e.$v.formData.lastName.$touch()}},model:{value:e.formData.lastName,callback:function(t){e.$set(e.formData,"lastName",t)},expression:"formData.lastName"}}),a("base-input",{attrs:{type:"text",id:"firstname",placeholder:"Введите ваше имя",label:"Имя *",isInvalid:e.$v.formData.firstName.$error,validations:[{condition:!e.$v.formData.firstName.required,text:"Поле должно быть заполнено"}]},on:{input:function(t){return e.$v.formData.firstName.$touch()}},model:{value:e.formData.firstName,callback:function(t){e.$set(e.formData,"firstName",t)},expression:"formData.firstName"}})],1),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"middlename",placeholder:"Введите ваше отчество",label:"Отчество"},model:{value:e.formData.middleName,callback:function(t){e.$set(e.formData,"middleName",t)},expression:"formData.middleName"}}),a("base-input",{attrs:{type:"date",id:"birthday",label:"Дата рождения *",isInvalid:e.$v.formData.birthdayDate.$error,validations:[{condition:!e.$v.formData.birthdayDate.required,text:"Поле должно быть заполнено"}]},on:{input:function(t){return e.$v.formData.birthdayDate.$touch()}},model:{value:e.formData.birthdayDate,callback:function(t){e.$set(e.formData,"birthdayDate",t)},expression:"formData.birthdayDate"}})],1),a("div",{staticClass:"input-row"},[a("custom-select",{attrs:{options:[{value:"male",text:"Мужской"},{value:"female",text:"Женский"}],label:"Пол",placeholder:"Укажите ваш пол"},model:{value:e.formData.gender,callback:function(t){e.$set(e.formData,"gender",t)},expression:"formData.gender"}}),a("custom-select",{attrs:{options:[{value:"vip",text:"VIP"},{value:"problematic",text:"Проблемные"},{value:"omc",text:"ОМС"}],label:"Группа клиентов *",multiple:!0,placeholder:"Укажите группу клиентов",isInvalid:e.$v.formData.clientGroup.$error,validations:[{condition:!e.$v.formData.clientGroup.required,text:"Необходимо указать группу клиентов"}]},on:{input:function(t){return e.$v.formData.clientGroup.$touch()}},model:{value:e.formData.clientGroup,callback:function(t){e.$set(e.formData,"clientGroup",t)},expression:"formData.clientGroup"}})],1),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"phoneNumber",placeholder:"Введите номер телефона",label:"Номер телефона *",tabindex:"0",isInvalid:e.$v.formData.phoneNumber.$error,validations:[{condition:!e.$v.formData.phoneNumber.required,text:"Поле должно быть заполнено"},{condition:!e.$v.formData.phoneNumber.startsWith&&e.$v.formData.phoneNumber.required,text:"Номер должен начинаться с 7"},{condition:!e.length&&e.$v.formData.phoneNumber.required,text:"Номер должен иметь 11 символов"}]},on:{blur:function(t){return e.$v.formData.phoneNumber.$touch()}},model:{value:e.formData.phoneNumber,callback:function(t){e.$set(e.formData,"phoneNumber",t)},expression:"formData.phoneNumber"}}),a("custom-select",{attrs:{options:[{value:"ivanov",text:"Иванов"},{value:"zaharov",text:"Захаров"},{value:"chernishova",text:"Чернышева"}],label:"Лечащий врач",placeholder:"Укажите лечащего врача"},model:{value:e.formData.doctors,callback:function(t){e.$set(e.formData,"doctors",t)},expression:"formData.doctors"}})],1),a("custom-checkbox",{attrs:{options:["Не отправлять СМС"]},model:{value:e.formData.smscheck,callback:function(t){e.$set(e.formData,"smscheck",t)},expression:"formData.smscheck"}}),a("div")],1),a("fieldset",{staticClass:"fieldset"},[a("h3",[e._v("Адрес")]),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"index",placeholder:"Введите ваш индекс",label:"Индекс"},model:{value:e.formData.index,callback:function(t){e.$set(e.formData,"index",t)},expression:"formData.index"}}),a("base-input",{attrs:{type:"text",id:"country",placeholder:"Введите вашу страну",label:"Страна"},model:{value:e.formData.country,callback:function(t){e.$set(e.formData,"country",t)},expression:"formData.country"}})],1),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"region",placeholder:"Введите вашу область",label:"Область"},model:{value:e.formData.region,callback:function(t){e.$set(e.formData,"region",t)},expression:"formData.region"}}),a("base-input",{attrs:{type:"text",id:"city",placeholder:"Введите ваш город",label:"Город *",isInvalid:e.$v.formData.city.$error,validations:[{condition:!e.$v.formData.city.required,text:"Поле должно быть заполнено"}]},on:{input:function(t){return e.$v.formData.city.$touch()}},model:{value:e.formData.city,callback:function(t){e.$set(e.formData,"city",t)},expression:"formData.city"}})],1),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"street",placeholder:"Введите вашу улицу",label:"Улица"},model:{value:e.formData.street,callback:function(t){e.$set(e.formData,"street",t)},expression:"formData.street"}}),a("base-input",{attrs:{type:"text",id:"house",placeholder:"Введите номер дома",label:"Дом"},model:{value:e.formData.house,callback:function(t){e.$set(e.formData,"house",t)},expression:"formData.house"}})],1),a("div")]),a("fieldset",{staticClass:"fieldset"},[a("h3",[e._v("Документ")]),a("div",{staticClass:"input-row"},[a("custom-select",{attrs:{options:[{value:"passport",text:"Паспорт"},{value:"birthCertificate",text:"Свидетельство о рождении"},{value:"driversLicense",text:"Водительское удостоверение"}],label:"Тип документа *",placeholder:"Укажите тип документа",validations:[{condition:!e.$v.formData.documentType.required,text:"Необходимо указать тип документа"}]},model:{value:e.formData.documentType,callback:function(t){e.$set(e.formData,"documentType",t)},expression:"formData.documentType"}}),a("base-input",{attrs:{type:"text",id:"docSeries",placeholder:"Введите серию",label:"Серия"},model:{value:e.formData.docSeries,callback:function(t){e.$set(e.formData,"docSeries",t)},expression:"formData.docSeries"}})],1),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"docNumber",placeholder:"Введите номер",label:"Номер"},model:{value:e.formData.docNumber,callback:function(t){e.$set(e.formData,"docNumber",t)},expression:"formData.docNumber"}}),a("base-input",{attrs:{type:"date",id:"passportDate",label:"Дата выдачи *",isInvalid:e.$v.formData.passportDate.$error,validations:[{condition:!e.$v.formData.passportDate.required,text:"Поле должно быть заполнено"}]},on:{input:function(t){return e.$v.formData.passportDate.$touch()}},model:{value:e.formData.passportDate,callback:function(t){e.$set(e.formData,"passportDate",t)},expression:"formData.passportDate"}})],1),a("div",{staticClass:"input-row"},[a("base-input",{attrs:{type:"text",id:"docWho",placeholder:"Введите название организации",label:"Кем выдан"},model:{value:e.formData.docWho,callback:function(t){e.$set(e.formData,"docWho",t)},expression:"formData.docWho"}})],1),a("div",{staticClass:"input-row"}),a("base-button",{staticClass:"submitButton",attrs:{text:"Создать нового клиента"},on:{click:e.submitHandler}}),a("div",{staticClass:"input-row"})],1)])},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-input"},[e.label?a("label",{attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),a("input",{staticClass:"input",class:{invalid:e.isInvalid},attrs:{type:e.type,placeholder:e.placeholder,id:e.id},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e._l(e.validations,(function(t){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isInvalid,expression:"isInvalid"}],key:t.condition},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.condition,expression:"validation.condition"}],staticClass:"error-message"},[e._v(" "+e._s(t.text)+" ")])])}))],2)},c=[],u={name:"BaseInput",props:{id:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:"text",validator:e=>["email","text","number","date"].includes(e)},errorMessage:{type:String,default:""},isInvalid:{type:Boolean,default:!1},placeholder:{type:String},disabled:{type:Boolean,default:!1},value:{type:String,required:!0},validations:{type:Array}}},d=u,p=a(1001),m=(0,p.Z)(d,l,c,!1,null,null,null),f=m.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-select"},[e.label?a("label",{attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),a("div",{staticClass:"custom-select",attrs:{tabindex:"0"},on:{blur:function(t){e.open=!1}}},[a("div",{staticClass:"trigger",class:{invalid:e.isInvalid,open:e.open,empty:e.isEmpty},on:{click:function(t){e.open=!e.open}}},[e._v(" "+e._s(e.selectedText)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"items"},e._l(e.options,(function(t){return a("div",{key:t.value,staticClass:"item",class:{selected:e.isOptionSelected(t)},on:{click:function(a){return e.handleOptionClick(t)}}},[e.isOptionSelected(t)?a("span",[e._v("▸")]):e._e(),e._v(" "+e._s(t.text)+" ")])})),0)]),e._l(e.validations,(function(t){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isInvalid,expression:"isInvalid"}],key:t.condition},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.condition,expression:"validation.condition"}],staticClass:"error-message"},[e._v(" "+e._s(t.text)+" ")])])}))],2)},h=[],b={name:"CustomSelect",props:{value:{type:[String,Array],required:!0},label:{type:String,default:""},options:{type:Array,required:!0},isInvalid:{type:Boolean,default:!1},tabindex:{type:Number,required:!1,default:0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},validations:{type:Array}},data(){return{open:!1}},computed:{isEmpty(){let e=this.multiple?this.value:[this.value];return 0===e.length||!e.every((e=>e))},selectedText(){let e=this.multiple?this.value:[this.value];return this.isEmpty?this.placeholder:e.map(this.getOptionByValue).map((e=>e.text)).join(", ")}},methods:{getOptionByValue(e){return this.options.find((t=>t.value===e))??e},isOptionSelected(e){return this.multiple?this.value.includes(e.value):this.value===e.value},handleOptionClick(e){if(this.multiple){let t=[...this.value];this.isOptionSelected(e)?t=t.filter((t=>t!==e.value)):t.push(e.value),this.$emit("input",t)}else this.open=!1,this.$emit("input",e.value)}}},D=b,y=(0,p.Z)(D,v,h,!1,null,null,null),x=y.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"button",on:{click:function(t){return e.$emit("click")}}},[e._v(" "+e._s(e.text)+" ")])},k=[],C={name:"BaseButton",props:{text:{type:String,default:"Button"}}},_=C,g=(0,p.Z)(_,$,k,!1,null,null,null),N=g.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"checkbox-form"},[a("div",{staticClass:"options"},e._l(e.options,(function(t,r){return a("label",{key:r,staticClass:"item"},[a("span",{attrs:{for:t}},[e._v(e._s(t))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{id:t,type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.checked)?e._i(e.checked,t)>-1:e.checked},on:{change:[function(a){var r=e.checked,i=a.target,o=!!i.checked;if(Array.isArray(r)){var n=t,s=e._i(r,n);i.checked?s<0&&(e.checked=r.concat([n])):s>-1&&(e.checked=r.slice(0,s).concat(r.slice(s+1)))}else e.checked=o},e.changeHandler]}}),a("span",{staticClass:"checkmark"})])})),0)])])},q=[],S={name:"CustomCheckbox",props:{options:{type:Array,required:!1,default:()=>[]}},data(){return{checked:[]}},methods:{changeHandler(){this.$emit("input",this.checked)}}},O=S,I=(0,p.Z)(O,w,q,!1,null,null,null),B=I.exports,E=a(6409),T={name:"CreateUserForm",components:{BaseInput:f,CustomSelect:x,BaseButton:N,CustomCheckbox:B},data(){return{formData:{lastName:"",firstName:"",middleName:"",birthdayDate:"",phoneNumber:"",gender:"",clientGroup:[],smscheck:[],doctors:"",index:"",country:"",region:"",city:"",street:"",house:"",documentType:"passport",docSeries:"",docNumber:"",docWho:"",passportDate:""}}},validations:{formData:{lastName:{required:E.C1},firstName:{required:E.C1},birthdayDate:{required:E.C1},phoneNumber:{required:E.C1,numeric:E.uR,startsWith(e){return 7==e[0]},length:e=>11==e.length},clientGroup:{required:E.C1},city:{required:E.C1},documentType:{required:E.C1},passportDate:{required:E.C1},docSeries:{numeric:E.uR,length:e=>4===e.length},docNumber:{numeric:E.uR,length:e=>6===e.length}}},methods:{submitHandler(){this.$v.$touch(),this.$v.$error?alert("Проверьте правильность данных"):alert("Новый клиент успешно создан")}}},Z=T,A=(0,p.Z)(Z,n,s,!1,null,null,null),G=A.exports,j={name:"app",components:{CreateUserForm:G}},W=j,P=(0,p.Z)(W,i,o,!1,null,null,null),H=P.exports,F=a(2424);r.Z.config.productionTip=!1,r.Z.config.devtools=!0,r.Z.use(F.ZP),new r.Z({render:e=>e(H)}).$mount("#app")}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,i,o){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],o=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(s=!1,o<n&&(n=o));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,n=r[0],s=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var u=l(a)}for(t&&t(r);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunkclient_creation_form"]=self["webpackChunkclient_creation_form"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6924)}));r=a.O(r)})();
//# sourceMappingURL=app.51c612d6.js.map