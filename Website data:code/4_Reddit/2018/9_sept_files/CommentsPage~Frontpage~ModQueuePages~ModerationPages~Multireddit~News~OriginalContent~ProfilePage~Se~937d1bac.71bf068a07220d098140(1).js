var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(window.webpackJsonp=window.webpackJsonp||[]).push([["CommentsPage~Frontpage~ModQueuePages~ModerationPages~Multireddit~News~OriginalContent~ProfilePage~Se~937d1bac"],{"./src/reddit/components/ConfirmUserActionModal/index.tsx":function(e,n,t){"use strict";t("./node_modules/react/index.js");var o,r=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/reselect/lib/index.js"),c=t("./bundled-modules/styled-components/styled-components.min.js"),d=t.n(c),l=t("./src/app/strings/index.ts"),s=t("./src/higherOrderComponents/asModal.tsx"),a=t("./src/reddit/components/ModalStyledComponents/index.tsx"),u=t("./src/reddit/controls/TextButton/index.tsx"),f=t("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),p=t("./src/reddit/selectors/user.ts"),m=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,n,t,r){var i=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var d in i)void 0===n[d]&&(n[d]=i[d]);else n||(n=i||{});if(1===c)n.children=r;else if(c>1){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}),b=d()(a.j).withConfig({componentId:"s1mpd70m-0"})(["line-height: 22px;margin: 10px 0px;"]),y=Object(i.createStructuredSelector)({language:p.y}),h=Object(r.connect)(y),x=function(e){return e.preventDefault()};n.a=Object(s.a)(h(function(e){return m(a.c,{},void 0,m(a.g,{},void 0,m(f.b,{},void 0,m(a.k,{},void 0,e.headerText||Object(l.a)(e.language,"subredditModeration.confirm")),m(u.a,{onClick:function(){e.trackCancel&&e.trackCancel(),e.toggleModal()}},void 0,m(a.b,{})))),m(a.h,{},void 0,m(b,{},void 0,e.modalText)),m(a.e,{},void 0,m(a.a,{onMouseDown:x,onClick:function(){e.trackCancel&&e.trackCancel(),e.toggleModal()},"data-redditstyle":!0},void 0,e.cancelActionText||Object(l.a)(e.language,"subredditModeration.buttons.cancel")),m(a.o,{onMouseDown:x,onClick:function(n){e.onConfirm(),e.toggleModal(),e.trackClick()},"data-redditstyle":!0},void 0,e.actionText)))}))},"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx":function(e,n,t){"use strict";var o,r=t("./node_modules/react/index.js"),i=t.n(r),c=t("./bundled-modules/styled-components/styled-components.min.js"),d=t.n(c),l=t("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),s=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),a=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,n,t,r){var i=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var d in i)void 0===n[d]&&(n[d]=i[d]);else n||(n=i||{});if(1===c)n.children=r;else if(c>1){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}),u=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&(t[o[r]]=e[o[r]])}return t},f=d()(function(e){e.fake;var n=u(e,["fake"]);return i.a.createElement(l.e,n)}).withConfig({componentId:"s1lpgwrj-0"})(["color: ",";"],function(e){return e.fake?Object(s.c)(e).inactive:Object(s.c)(e).actionIcon}),p=d()(function(e){e.fake;var n=u(e,["fake"]);return i.a.createElement(l.b,n)}).withConfig({componentId:"s1lpgwrj-1"})(["color: ",";"],function(e){return e.fake?Object(s.c)(e).inactive:Object(s.c)(e).actionIcon});n.a=function(e){return a("div",{},void 0,a(f,{fake:e.fake},void 0,e.label),e.description&&a(p,{fake:e.fake},void 0,e.description))}},"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx":function(e,n,t){"use strict";t("./node_modules/react/index.js");var o,r=t("./bundled-modules/styled-components/styled-components.min.js"),i=t.n(r),c=t("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),d=t("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),l=t("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),s=t("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),a=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,n,t,r){var i=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var d in i)void 0===n[d]&&(n[d]=i[d]);else n||(n=i||{});if(1===c)n.children=r;else if(c>1){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}),u=i()(l.a).withConfig({componentId:"s1qxdj12-0"})(["cursor: pointer;padding: 4px 0;display: block;"]),f=i()(s.a).withConfig({componentId:"s1qxdj12-1"})(["align-items: center;"]);n.a=function(e){return a(u,{value:e.value,selected:e.selected,onClick:e.onClick},void 0,a(f,{},void 0,e.selected?a(d.f,{redditStyle:!0}):a(d.e,{redditStyle:!0}),a(c.a,{label:e.label,description:e.description})),e.children)}},"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts":function(e,n,t){"use strict";t.d(n,"j",function(){return l}),t.d(n,"n",function(){return s}),t.d(n,"m",function(){return a}),t.d(n,"l",function(){return u}),t.d(n,"k",function(){return f}),t.d(n,"f",function(){return p}),t.d(n,"h",function(){return m}),t.d(n,"a",function(){return b}),t.d(n,"g",function(){return y}),t.d(n,"i",function(){return h}),t.d(n,"e",function(){return x}),t.d(n,"b",function(){return v}),t.d(n,"c",function(){return g}),t.d(n,"d",function(){return w});var o=t("./bundled-modules/styled-components/styled-components.min.js"),r=t.n(o),i=t("./src/reddit/constants/colors.ts"),c=t("./src/reddit/helpers/styles/mixins/fonts.tsx"),d=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),l=r.a.section.withConfig({componentId:"lmhy4-0"})(["padding: 12px;padding-bottom: 40px;"]),s=r.a.h1.withConfig({componentId:"lmhy4-1"})(["","color: ",";margin-bottom: 40px;padding-top: 4px;"],c.titleFontH4,function(e){return Object(d.c)(e).bodyText}),a=r.a.div.withConfig({componentId:"lmhy4-2"})(["margin-bottom: 32px;"]),u=r.a.h1.withConfig({componentId:"lmhy4-3"})(["","border-bottom: 2px solid ",";color: ",";margin-bottom: 8px;padding-bottom: 8px;"],c.titleFontH3,function(e){return Object(d.c)(e).line},function(e){return Object(d.c)(e).bodyText}),f=r.a.div.withConfig({componentId:"lmhy4-4"})(["margin-bottom: 24px;"]),p=r.a.div.withConfig({componentId:"lmhy4-5"})(["border-bottom: 1px solid ",";margin-bottom: 8px;padding-bottom: 2px;&:last-of-type {border-bottom-width: 0;}"],function(e){return Object(d.c)(e).line}),m=r.a.h2.withConfig({componentId:"lmhy4-6"})(["","color: ",";padding-bottom: 8px;padding-top: 8px;"],c.titleFontH5,function(e){return Object(d.c)(e).bodyText}),b=r.a.div.withConfig({componentId:"lmhy4-7"})(["padding: 8px 0;"]),y=r.a.div.withConfig({componentId:"lmhy4-8"})(["","color: ",";margin-bottom: 8px;"],c.metadataFont,function(e){return Object(d.c)(e).actionIcon}),h=r.a.div.withConfig({componentId:"lmhy4-9"})(["margin-bottom: 8px;"]),x=r.a.h3.withConfig({componentId:"lmhy4-10"})(["","color: ",";"],c.titleFontH6,function(e){return Object(d.c)(e).actionIcon}),v=r.a.div.withConfig({componentId:"lmhy4-11"})(["","color: ",";"],c.metadataFont,function(e){return Object(d.c)(e).actionIcon}),g=r.a.div.withConfig({componentId:"lmhy4-12"})(["","color: ",";"],c.metadataFont,i.a.warning),w=r.a.div.withConfig({componentId:"lmhy4-13"})(["margin-top: 24px;"])},"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts":function(e,n,t){"use strict";var o=t("./bundled-modules/styled-components/styled-components.min.js"),r=t.n(o),i=t("./src/reddit/controls/Input/index.tsx"),c=t("./node_modules/react/index.js"),d=t.n(c),l=t("./node_modules/react-redux/es/index.js"),s=t("./src/reddit/actions/modal.ts"),a=t("./src/reddit/constants/keycodes.ts"),u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},f=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var p=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&(t[o[r]]=e[o[r]])}return t},m=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.handleKeyDown=function(n){n.keyCode===a.a.Escape&&e.props.closeModal()},e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,d.a.Component),f(n,[{key:"render",value:function(){var e=this.props,n=(e.closeModal,p(e,["closeModal"]));return d.a.createElement("input",u({onKeyDown:this.handleKeyDown},n))}}]),n}(),b=Object(l.connect)(null,{closeModal:s.d})(m),y=r()(b).withConfig({componentId:"eg8eqf-0"})(["",""],i.b),h=t("./src/reddit/icons/svgs/Checkbox/index.tsx"),x=t("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),v=t("./src/reddit/icons/svgs/RadioOff/index.tsx"),g=t("./src/reddit/icons/svgs/RadioOn/index.tsx"),w=t("./src/reddit/models/Theme/NewColorSystem/index.ts");t.d(n,"d",function(){return O}),t.d(n,"c",function(){return C}),t.d(n,"f",function(){return S}),t.d(n,"e",function(){return I}),t.d(n,"a",function(){return _}),t.d(n,"b",function(){return P}),t.d(n,"h",function(){return M}),t.d(n,"g",function(){return T});var j=function(e){return r()(e).withConfig({componentId:"jzv5r1-0"})(["background-color: ",";box-sizing: border-box;color: ",";width: 100%;border: 1px solid ",";border-radius: 4px;&:focus {border-color: ",";}&::placeholder {color: ",";}"],function(e){return Object(w.c)(e).body},function(e){return Object(w.c)(e).bodyText},function(e){return Object(w.c)(e).line},function(e){return Object(w.c)(e).active},function(e){return Object(w.c)(e).placeholder})},O=j(y),C=j(i.a),k="\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n",S=r()(g.a).withConfig({componentId:"jzv5r1-1"})(["","fill: ",";"],k,function(e){return Object(w.c)(e).active}),I=r()(v.a).withConfig({componentId:"jzv5r1-2"})(["","fill: ",";"],k,function(e){return Object(w.c)(e).actionIcon}),_=r()(h.a).withConfig({componentId:"jzv5r1-3"})(["",""],k),P=r()(x.a).withConfig({componentId:"jzv5r1-4"})(["","fill: ",";"],k,function(e){return Object(w.c)(e).active}),M=r.a.textarea.withConfig({componentId:"jzv5r1-5"})(["background-color: ",";border: 1px solid ",";border-radius: 4px;box-sizing: border-box;color: ",";display: block;width: 100%;padding: 8px;&::placeholder {color: ",";}"],function(e){return Object(w.c)(e).body},function(e){return Object(w.c)(e).line},function(e){return Object(w.c)(e).bodyText},function(e){return Object(w.c)(e).placeholder}),T=r.a.label.withConfig({componentId:"jzv5r1-6"})(["cursor: pointer;"])},"./src/reddit/controls/Dropdown/Row.tsx":function(e,n,t){"use strict";t.d(n,"a",function(){return y}),t.d(n,"d",function(){return h}),t.d(n,"b",function(){return v});var o,r=t("./node_modules/react/index.js"),i=t.n(r),c=t("./bundled-modules/styled-components/styled-components.min.js"),d=t.n(c),l=t("./src/reddit/controls/UnstyledInternalLink/index.tsx"),s=t("./src/reddit/helpers/styles/mixins/fonts.tsx"),a=t("./src/reddit/layout/row/InlineButton/index.tsx"),u=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),f=t("./node_modules/lodash/throttle.js"),p=t.n(f),m=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,n,t,r){var i=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var d in i)void 0===n[d]&&(n[d]=i[d]);else n||(n=i||{});if(1===c)n.children=r;else if(c>1){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}),b=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var y=d.a.div.withConfig({componentId:"s1vspxim-0"})(["display: inline-block;vertical-align: middle;margin-right: 2px;width: 20px;"]),h="\n  fill: currentColor;\n  display: block;\n  margin: 0 auto;\n  height: 16px;\n  width: 16px;\n",x=d.a.span.withConfig({componentId:"s1vspxim-1"})(["display: inline-block;"]),v=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.handleMouseMove=p()(function(){var n=e.props;n.handleActivateRow&&n.handleActivateRow(n.index)},500),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),b(n,[{key:"render",value:function(){var e=this.props;return e.href?m(l.a,{id:e.id,className:e.className,onMouseMove:this.handleMouseMove,role:"menuitem",to:e.href},void 0,e.children&&m(y,{},void 0,e.children),m(x,{},void 0,e.displayText)):m(a.a,{id:e.id,className:e.className,onClick:e.onClick,onMouseMove:p()(this.handleMouseMove,500),role:"menuitem"},void 0,e.children&&(e.noIcon?m("div",{},void 0,e.children):m(y,{},void 0,e.children)),e.displayText&&m(x,{},void 0,e.displayText))}}]),n}();n.c=d()(v).withConfig({componentId:"s1vspxim-2"})(["","color: ",";fill: ",";background-color: ",";border: "," solid 1px;display: block;padding: 8px;text-transform: capitalize;white-space: nowrap;","","&:focus {background-color: ",";border-color: ",";color: ",";fill: ",";outline: none;}"],s.titleFontH5,function(e){return e.isSelected?Object(u.c)(e).button:Object(u.c)(e).actionIcon},function(e){return e.isSelected?Object(u.c)(e).button:Object(u.c)(e).actionIcon},function(e){return Object(u.c)(e).body},function(e){return Object(u.c)(e).line},"",function(e){return e.noHover?"":"\n    &:active,\n    &:hover,\n  "},function(e){return Object(u.c)(e).highlight},function(e){return Object(u.c)(e).highlight},function(e){return e.isSelected?Object(u.c)(e).button:Object(u.c)(e).bodyText},function(e){return e.isSelected?Object(u.c)(e).button:Object(u.c)(e).bodyText})},"./src/reddit/controls/Input/index.tsx":function(e,n,t){"use strict";t.d(n,"b",function(){return d});var o=t("./bundled-modules/styled-components/styled-components.min.js"),r=t.n(o),i=t("./src/reddit/helpers/styles/mixins/fonts.tsx"),c=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),d="\n  "+i.bodyFont+"\n  border: none;\n  color: "+function(e){return Object(c.c)(e).actionIcon}+";\n  display: block;\n  height: 36px;\n  padding: 0 8px;\n  outline: none;\n";n.a=r.a.input.withConfig({componentId:"ed4rwa-0"})(["",""],d)},"./src/reddit/controls/UnstyledInternalLink/index.tsx":function(e,n,t){"use strict";var o=t("./bundled-modules/styled-components/styled-components.min.js"),r=t.n(o),i=t("./src/reddit/controls/InternalLink/index.tsx");n.a=r()(i.a).withConfig({componentId:"s1fauk9w-0"})(["text-decoration: none;fill: currentColor;color: inherit;"])},"./src/reddit/helpers/styles/mixins/loading.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u});var o,r,i=t("./bundled-modules/styled-components/styled-components.min.js"),c=t("./src/reddit/helpers/styles/components/index.tsx"),d=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),l=(o=["\n  animation: "," 1.5s ease infinite;\n  background: ",";\n  background-size: 200%;\n"],r=["\n  animation: "," 1.5s ease infinite;\n  background: ",";\n  background-size: 200%;\n"],Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}})));var s=Object(i.keyframes)(["from { background-position: 0 0; }to { background-position: -200% 0; }"]),a=Object(c.d)()(l,function(e){return e.isLoading?s:"none"},function(e){var n=Object(d.c)(e);return e.isLoading?"linear-gradient(\n          90deg,\n          "+n.field+",\n          "+n.inactive+",\n          "+n.field+"\n        )":""+n.field}),u="\n  border-radius: 4px;\n";Object(i.css)(["background: ",";border-radius: 4px;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);"],function(e){return Object(d.c)(e).post})},"./src/reddit/icons/svgs/ChevronDown/index.tsx":function(e,n,t){"use strict";t("./node_modules/react/index.js");var o,r=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,n,t,r){var i=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var d in i)void 0===n[d]&&(n[d]=i[d]);else n||(n=i||{});if(1===c)n.children=r;else if(c>1){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}});n.a=function(e){return r("svg",{className:e.className,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",onClick:e.onClick},void 0,r("g",{},void 0,r("polygon",{fill:"inherit",points:"11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"})))}},"./src/reddit/icons/svgs/ChevronUp/index.tsx":function(e,n,t){"use strict";t("./node_modules/react/index.js");var o,r=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,n,t,r){var i=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var d in i)void 0===n[d]&&(n[d]=i[d]);else n||(n=i||{});if(1===c)n.children=r;else if(c>1){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}});n.a=function(e){return r("svg",{className:e.className,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},void 0,r("g",{},void 0,r("polygon",{fill:"inherit",transform:"translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",points:"11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"})))}},"./src/reddit/layout/twoCol/ExpandRight/index.tsx":function(e,n,t){"use strict";var o,r=t("./node_modules/react/index.js"),i=t.n(r),c=t("./bundled-modules/styled-components/styled-components.min.js"),d=t.n(c),l=t("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),s=t("./src/reddit/helpers/styles/components/index.tsx"),a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,n,t,r){var i=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={}),n&&i)for(var d in i)void 0===n[d]&&(n[d]=i[d]);else n||(n=i||{});if(1===c)n.children=r;else if(c>1){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}),f=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&(t[o[r]]=e[o[r]])}return t},p=d()(Object(s.a)()).withConfig({componentId:"re8tt7-0"})(["flex: 0 0 ",";margin-right: ",";"],function(e){return e.width?e.width+"px":""},function(e){return(e.gutter||0)+"px"}),m=d.a.div.withConfig({componentId:"re8tt7-1"})(["flex: 1 1 100%;width: 100%;"]);n.a=d()(Object(l.a)(function(e){var n=e.className,t=e.children,o=e.widthLeft,r=e.gutter,c=f(e,["className","children","widthLeft","gutter"]);return i.a.createElement("div",a({className:n},c),u(p,{width:o,gutter:r},void 0,t&&t[0]),u(m,{},void 0,t&&t[1]))},2)).withConfig({componentId:"re8tt7-2"})(["display: flex;flex-direction: row;"])}}]);
//# sourceMappingURL=CommentsPage~Frontpage~ModQueuePages~ModerationPages~Multireddit~News~OriginalContent~ProfilePage~Se~937d1bac.71bf068a07220d098140.js.map

}
/*
     FILE ARCHIVED ON 02:30:10 Sep 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:35:13 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.136
  exclusion.robots.policy: 0.114
  cdx.remote: 0.189
  esindex: 0.019
  LoadShardBlock: 217.586 (6)
  PetaboxLoader3.datanode: 181.535 (8)
  load_resource: 144.574 (2)
  PetaboxLoader3.resolve: 93.287 (2)
*/