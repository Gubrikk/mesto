(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse).catch((function(e){console.log(e)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;this._container.innerHTML="",this._renderedItems.forEach((function(n){t._renderer(n,e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}},{key:"setRenderedItems",value:function(e){this._renderedItems=e}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){var o=r.handleCardClick,i=r.handleDeleteCard,a=r.handleLikeClick,c=r.userData;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteCard=i,this._handleLikeClick=a,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._cardLike=this._element.querySelector(".element__info-like"),this._userData=c,this._data=t}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setDeleteIcon",value:function(){this._userData._id!==this._data.owner._id&&this._element.querySelector(".element__trash").remove()}},{key:"isCardLiked",value:function(){var e=this;return this._data.likes.some((function(t){return t._id==e._userData._id}))}},{key:"setCardLiked",value:function(e){this._data=e,this._element.querySelector(".element__info-like-counter").innerText=this._data.likes.length,this.isCardLiked()?this._cardLike.classList.add("element__info-like_active"):this._cardLike.classList.remove("element__info-like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){e._handleLikeClick(e._data._id)})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleDeleteCard(e._element,e._data._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._cardImage=this._element.querySelector(".element__image"),this._element.querySelector(".element__name").innerText=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._setDeleteIcon(),this.setCardLiked(this._data),this._element}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.id,r=t.profileName,o=t.profileJob,i=t.profileAvatarImage;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=n,this._profileName=r,this._profileJob=o,this._profileAvatarImage=i}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{_id:this._id,profileName:this._profileName.textContent,profileJob:this._profileJob.textContent,profileAvatarImage:this._profileAvatarImage}}},{key:"setUserInfo",value:function(e,t,n,r){this._id=e,this._profileName.textContent=t,this._profileJob.textContent=n,this._profileAvatarImage.src=r}}])&&a(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._buttonSelector=t.buttonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._formElement=n,this._form=document.querySelector(this._formElement),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=document.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=document.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(e){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._checkInputValidity(t.target),e.toggleButtonState()}))})),this._form.addEventListener("reset",(function(){e._inputList.forEach((function(t){e._hideInputError(t)})),e.toggleButtonState()})),this.toggleButtonState()}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._buttonElement=this._form.querySelector(this._buttonSelector),this._setEventListeners()}}])&&u(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closeOnOverlayClick=this._closeOnOverlayClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.body.addEventListener("keydown",this._handleEscClose),document.body.addEventListener("click",this._closeOnOverlayClick)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.body.removeEventListener("keydown",this._handleEscClose),document.body.removeEventListener("click",this._closeOnOverlayClick)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-icon").addEventListener("click",(function(){e.close()}))}},{key:"_closeOnOverlayClick",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}}])&&s(t.prototype,n),e}();function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmitForm=r,t._form=t._popup.querySelector(".popup__container"),t._submitButton=t._form.querySelector(".popup__submit-button"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs=Array.from(this._popup.querySelectorAll(".popup__field")),this._inputs.forEach((function(t){return e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())})),d(m(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){d(m(a.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(e,t){this._submitButton.textContent=e?"Сохранение...":t}}])&&h(t.prototype,n),a}(f);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupText=document.querySelector(".popup__preview-text"),t._popupImage=document.querySelector(".popup__preview-image"),t}return t=a,(n=[{key:"open",value:function(e,t){k(w(a.prototype),"open",this).call(this),this._popupText.textContent=e,this._popupImage.src=t}}])&&g(t.prototype,n),a}(f);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmitForm=r,t._form=t._popup.querySelector(".popup__container"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._cardId)})),I(P(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e){I(P(a.prototype),"open",this).call(this),this._cardId=e}}])&&O(t.prototype,n),a}(f);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D={formSelector:".popup__container",inputSelector:".popup__field",buttonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_invalid",inputErrorClass:"popup__field_state_invalid"},x=document.querySelector(".profile__avatar"),A=document.querySelector(".profile__avatar-ellipse"),N=(document.querySelector(".popup__container_edit-profile-avatar").querySelector(".popup__field_avatar"),document.querySelector(".elements")),U=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button"),V=document.querySelector(".profile__name"),F=document.querySelector(".profile__job"),J=document.querySelector(".popup__field-name"),H=document.querySelector(".popup__field-job"),M=new c({profileName:V,profileJob:F,profileAvatarImage:A}),z=new C(".popup_image"),$=new l(D,".popup__container_profile-edit"),G=new l(D,".popup__container_edit-profile-avatar"),K=new l(D,".popup__container_new-place"),Q=new t({url:"https://mesto.nomoreparties.co/v1/cohort-20/",headers:{"content-type":"application/json",authorization:"80281606-7e64-45b0-a996-6277fb44273c"}}),W=[Q.getInitialCards(),Q.getUserInfo()];Promise.all(W).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(i._id,i.name,i.about,i.avatar),ne.setRenderedItems(o),ne.renderItems(i)})).catch((function(e){console.log(e)}));var X=new v({popupSelector:".popup_profile-edit",handleSubmitForm:function(e){X.loading(!0),Q.setUserInfo({name:e.name,about:e.job}).then((function(e){M.setUserInfo(e._id,e.name,e.about,e.avatar)})).catch((function(e){console.log(e)})).finally((function(){X.loading(!1,"Сохранить"),X.close()}))}}),Y=new v({popupSelector:".popup_edit-profile-avatar",handleSubmitForm:function(e){Y.loading(!0),Q.updateAvatar(e["avatar-edit"]).then((function(e){M.setUserInfo(e._id,e.name,e.about,e.avatar)})).catch((function(e){console.log(e)})).finally((function(){Y.loading(!1,"Сохранить"),Y.close()}))}}),Z=new v({popupSelector:".popup_add-card",handleSubmitForm:function(e){Z.loading(!0),Q.addNewCard({name:e["new-place"],link:e["link-image"]}).then((function(e){var t=te(e,".template",M.getUserInfo()).generateCard();ne.addNewItem(t)})).catch((function(e){console.log(e)})).finally((function(){Z.loading(!1,"Сохранить"),Z.close()}))}}),ee=new q({popupSelector:".popup_delete-card",handleSubmitForm:function(e){var t=e.element,n=e.cardId;Q.deleteCard(n).then((function(){t.remove(),ee.close()})).catch((function(e){console.log(e)}))}}),te=function(e,t,n){var r=new i(e,t,{handleCardClick:function(e,t){z.open(e,t)},handleDeleteCard:function(e,t){ee.open({element:e,cardId:t})},handleLikeClick:function(e){r.isCardLiked()?Q.deleteLikeCard(e).then((function(e){r.setCardLiked(e)})).catch((function(e){console.log(e)})):Q.addLikeCard(e).then((function(e){r.setCardLiked(e)})).catch((function(e){console.log(e)}))},userData:n});return r},ne=new r({renderer:function(e,t){var n=te(e,".template",t).generateCard();ne.addItem(n)}},N);x.addEventListener("click",(function(){Y.open()})),U.addEventListener("click",(function(){X.open(),J.value=M.getUserInfo().profileName,H.value=M.getUserInfo().profileJob})),B.addEventListener("click",(function(){Z.open(),K.toggleButtonState()})),$.enableValidation(),K.enableValidation(),G.enableValidation(),Z.setEventListeners(),X.setEventListeners(),Y.setEventListeners(),z.setEventListeners(),ee.setEventListeners()})();