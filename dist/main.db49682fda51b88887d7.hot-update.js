self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/@headlessui/react/dist/components/combobox/combobox.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/combobox/combobox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combobox": () => (/* binding */ ko)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-computed.js */ "./node_modules/@headlessui/react/dist/hooks/use-computed.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-tree-walker.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../hooks/use-watch.js */ "./node_modules/@headlessui/react/dist/hooks/use-watch.js");
/* harmony import */ var _hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../hooks/use-tracked-pointer.js */ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js");
var Fe=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Fe||{}),_e=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(_e||{}),ke=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(ke||{}),we=(i=>(i[i.OpenCombobox=0]="OpenCombobox",i[i.CloseCombobox=1]="CloseCombobox",i[i.GoToOption=2]="GoToOption",i[i.RegisterOption=3]="RegisterOption",i[i.UnregisterOption=4]="UnregisterOption",i[i.RegisterLabel=5]="RegisterLabel",i))(we||{});function ne(t,r=n=>n){let n=t.activeOptionIndex!==null?t.options[t.activeOptionIndex]:null,o=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_17__.sortByDomNode)(r(t.options.slice()),u=>u.dataRef.current.domRef.current),a=n?o.indexOf(n):null;return a===-1&&(a=null),{options:o,activeOptionIndex:a}}let Be={[1](t){return t.dataRef.current.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},[0](t){if(t.dataRef.current.disabled||t.comboboxState===0)return t;let r=t.activeOptionIndex,{isSelected:n}=t.dataRef.current,o=t.options.findIndex(a=>n(a.dataRef.current.value));return o!==-1&&(r=o),{...t,comboboxState:0,activeOptionIndex:r}},[2](t,r){var a;if(t.dataRef.current.disabled||t.dataRef.current.optionsRef.current&&!t.dataRef.current.optionsPropsRef.current.static&&t.comboboxState===1)return t;let n=ne(t);if(n.activeOptionIndex===null){let u=n.options.findIndex(i=>!i.dataRef.current.disabled);u!==-1&&(n.activeOptionIndex=u)}let o=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.calculateActiveIndex)(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...n,activeOptionIndex:o,activationTrigger:(a=r.trigger)!=null?a:1}},[3]:(t,r)=>{let n={id:r.id,dataRef:r.dataRef},o=ne(t,u=>[...u,n]);t.activeOptionIndex===null&&t.dataRef.current.isSelected(r.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(n));let a={...t,...o,activationTrigger:1};return t.dataRef.current.__demoMode&&t.dataRef.current.value===void 0&&(a.activeOptionIndex=0),a},[4]:(t,r)=>{let n=ne(t,o=>{let a=o.findIndex(u=>u.id===r.id);return a!==-1&&o.splice(a,1),o});return{...t,...n,activationTrigger:1}},[5]:(t,r)=>({...t,labelId:r.id})},re=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);re.displayName="ComboboxActionsContext";function Q(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(re);if(r===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Q),n}return r}let ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ae.displayName="ComboboxDataContext";function j(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ae);if(r===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return r}function Ue(t,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(r.type,Be,t,r)}let Ge=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ne(t,r){let{value:n,defaultValue:o,onChange:a,name:u,by:i=(b,m)=>b===m,disabled:d=!1,__demoMode:c=!1,nullable:e=!1,multiple:p=!1,...P}=t,[s=p?[]:void 0,y]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_21__.useControllable)(n,a,o),[T,C]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ue,{dataRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),comboboxState:c?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(typeof i=="string"?(b,m)=>{let A=i;return(b==null?void 0:b[A])===(m==null?void 0:m[A])}:i),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(f.mode,{[1]:()=>s.some(m=>D(m,b)),[0]:()=>D(s,b)}),[s]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...T,optionsPropsRef:R,labelRef:K,inputRef:h,buttonRef:w,optionsRef:B,value:s,defaultValue:o,disabled:d,mode:p?1:0,get activeOptionIndex(){if(g.current&&T.activeOptionIndex===null&&T.options.length>0){let b=T.options.findIndex(m=>!m.dataRef.current.disabled);if(b!==-1)return b}return T.activeOptionIndex},compare:D,isSelected:W,nullable:e,__demoMode:c}),[s,o,d,p,e,c,T]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{T.dataRef.current=f},[f]),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_7__.useOutsideClick)([f.buttonRef,f.inputRef,f.optionsRef],()=>U.closeCombobox(),f.comboboxState===0);let F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:f.comboboxState===0,disabled:d,activeIndex:f.activeOptionIndex,activeOption:f.activeOptionIndex===null?null:f.options[f.activeOptionIndex].dataRef.current.value,value:s}),[f,d,s]),_=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(b=>{let m=f.options.find(A=>A.id===b);!m||V(m.dataRef.current.value)}),O=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{if(f.activeOptionIndex!==null){let{dataRef:b,id:m}=f.options[f.activeOptionIndex];V(b.current.value),U.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,m)}}),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{C({type:0}),g.current=!0}),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{C({type:1}),g.current=!1}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((b,m,A)=>(g.current=!1,b===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific?C({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,id:m,trigger:A}):C({type:2,focus:b,trigger:A}))),X=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((b,m)=>(C({type:3,id:b,dataRef:m}),()=>C({type:4,id:b}))),Y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(b=>(C({type:5,id:b}),()=>C({type:5,id:null}))),V=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(f.mode,{[0](){return y==null?void 0:y(b)},[1](){let m=f.value.slice(),A=m.findIndex($=>D($,b));return A===-1?m.push(b):m.splice(A,1),y==null?void 0:y(m)}})),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({onChange:V,registerOption:X,registerLabel:Y,goToOption:E,closeCombobox:L,openCombobox:l,selectActiveOption:O,selectOption:_}),[]),de=r===null?{}:{ref:r},Z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),ce=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!Z.current||o!==void 0&&ce.addEventListener(Z.current,"reset",()=>{V(o)})},[Z,V]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(re.Provider,{value:U},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ae.Provider,{value:f},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(f.comboboxState,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.State.Closed})},u!=null&&s!=null&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_16__.objectToFormEntries)({[u]:s}).map(([b,m],A)=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Features.Hidden,ref:A===0?$=>{var le;Z.current=(le=$==null?void 0:$.closest("form"))!=null?le:null}:void 0,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.compact)({key:b,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:b,value:m})})),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:de,theirProps:P,slot:F,defaultTag:Ge,name:"Combobox"}))))}let He=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(Ne),je="input",Ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){var f,F,_,O;let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-input-${o}`,onChange:u,displayValue:i,type:d="text",...c}=r,e=j("Combobox.Input"),p=Q("Combobox.Input"),P=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(e.inputRef,n),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),y=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)(),T=function(){var l;return typeof i=="function"&&e.value!==void 0?(l=i(e.value))!=null?l:"":typeof e.value=="string"?e.value:""}();(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_22__.useWatch)(([l,L],[E,X])=>{s.current||!e.inputRef.current||(X===0&&L===1||l!==E)&&(e.inputRef.current.value=l)},[T,e.comboboxState]),(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_22__.useWatch)(([l],[L])=>{if(l===0&&L===1){let E=e.inputRef.current;if(!E)return;let X=E.value,{selectionStart:Y,selectionEnd:V,selectionDirection:U}=E;E.value="",E.value=X,U!==null?E.setSelectionRange(Y,V,U):E.setSelectionRange(Y,V)}},[e.comboboxState]);let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{C.current=!0}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{setTimeout(()=>{C.current=!1})}),K=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(l=>{switch(s.current=!0,l.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Backspace:case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Delete:if(e.mode!==0||!e.nullable)return;let L=l.currentTarget;y.requestAnimationFrame(()=>{L.value===""&&(p.onChange(null),e.optionsRef.current&&(e.optionsRef.current.scrollTop=0),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Nothing))});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Enter:if(s.current=!1,e.comboboxState!==0||C.current)return;if(l.preventDefault(),l.stopPropagation(),e.activeOptionIndex===null){p.closeCombobox();return}p.selectActiveOption(),e.mode===0&&p.closeCombobox();break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowDown:return s.current=!1,l.preventDefault(),l.stopPropagation(),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(e.comboboxState,{[0]:()=>{p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Next)},[1]:()=>{p.openCombobox()}});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowUp:return s.current=!1,l.preventDefault(),l.stopPropagation(),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(e.comboboxState,{[0]:()=>{p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Previous)},[1]:()=>{p.openCombobox(),y.nextFrame(()=>{e.value||p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last)})}});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Home:if(l.shiftKey)break;return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.PageUp:return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.End:if(l.shiftKey)break;return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.PageDown:return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Escape:return s.current=!1,e.comboboxState!==0?void 0:(l.preventDefault(),e.optionsRef.current&&!e.optionsPropsRef.current.static&&l.stopPropagation(),p.closeCombobox());case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Tab:if(s.current=!1,e.comboboxState!==0)return;e.mode===0&&p.selectActiveOption(),p.closeCombobox();break}}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(l=>{p.openCombobox(),u==null||u(l)}),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{s.current=!1}),B=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_1__.useComputed)(()=>{if(!!e.labelId)return[e.labelId].join(" ")},[e.labelId]),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:e.comboboxState===0,disabled:e.disabled}),[e]),W={ref:P,id:a,role:"combobox",type:d,"aria-controls":(f=e.optionsRef.current)==null?void 0:f.id,"aria-expanded":e.disabled?void 0:e.comboboxState===0,"aria-activedescendant":e.activeOptionIndex===null||(F=e.options[e.activeOptionIndex])==null?void 0:F.id,"aria-multiselectable":e.mode===1?!0:void 0,"aria-labelledby":B,"aria-autocomplete":"list",defaultValue:(O=(_=r.defaultValue)!=null?_:e.defaultValue!==void 0?i==null?void 0:i(e.defaultValue):null)!=null?O:e.defaultValue,disabled:e.disabled,onCompositionStart:g,onCompositionEnd:R,onKeyDown:K,onChange:h,onBlur:w};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:W,theirProps:c,slot:D,defaultTag:je,name:"Combobox.Input"})}),We="button",Xe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){var C;let o=j("Combobox.Button"),a=Q("Combobox.Button"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(o.buttonRef,n),i=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:d=`headlessui-combobox-button-${i}`,...c}=r,e=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)(),p=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(g=>{switch(g.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowDown:return g.preventDefault(),g.stopPropagation(),o.comboboxState===1&&a.openCombobox(),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowUp:return g.preventDefault(),g.stopPropagation(),o.comboboxState===1&&(a.openCombobox(),e.nextFrame(()=>{o.value||a.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last)})),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Escape:return o.comboboxState!==0?void 0:(g.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&g.stopPropagation(),a.closeCombobox(),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})}));default:return}}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(g=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_14__.isDisabledReactIssue7711)(g.currentTarget))return g.preventDefault();o.comboboxState===0?a.closeCombobox():(g.preventDefault(),a.openCombobox()),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})})}),s=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_1__.useComputed)(()=>{if(!!o.labelId)return[o.labelId,d].join(" ")},[o.labelId,d]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),T={ref:u,id:d,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_8__.useResolveButtonType)(r,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(C=o.optionsRef.current)==null?void 0:C.id,"aria-expanded":o.disabled?void 0:o.comboboxState===0,"aria-labelledby":s,disabled:o.disabled,onClick:P,onKeyDown:p};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:T,theirProps:c,slot:y,defaultTag:We,name:"Combobox.Button"})}),$e="label",Je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-label-${o}`,...u}=r,i=j("Combobox.Label"),d=Q("Combobox.Label"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(i.labelRef,n);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>d.registerLabel(a),[a]);let e=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{var s;return(s=i.inputRef.current)==null?void 0:s.focus({preventScroll:!0})}),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i.comboboxState===0,disabled:i.disabled}),[i]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{ref:c,id:a,onClick:e},theirProps:u,slot:p,defaultTag:$e,name:"Combobox.Label"})}),qe="ul",Qe=_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.Features.Static,Ye=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-options-${o}`,hold:u=!1,...i}=r,d=j("Combobox.Options"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(d.optionsRef,n),e=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.useOpenClosed)(),p=(()=>e!==null?e===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.State.Open:d.comboboxState===0)();(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{var T;d.optionsPropsRef.current.static=(T=r.static)!=null?T:!1},[d.optionsPropsRef,r.static]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{d.optionsPropsRef.current.hold=u},[d.optionsPropsRef,u]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_10__.useTreeWalker)({container:d.optionsRef.current,enabled:d.comboboxState===0,accept(T){return T.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:T.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(T){T.setAttribute("role","none")}});let P=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_1__.useComputed)(()=>{var T,C;return(C=d.labelId)!=null?C:(T=d.buttonRef.current)==null?void 0:T.id},[d.labelId,d.buttonRef.current]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:d.comboboxState===0}),[d]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{"aria-labelledby":P,role:"listbox",id:a,ref:c},theirProps:i,slot:s,defaultTag:qe,features:Qe,visible:p,name:"Combobox.Options"})}),Ze="li",ze=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){var F,_;let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-option-${o}`,disabled:u=!1,value:i,...d}=r,c=j("Combobox.Option"),e=Q("Combobox.Option"),p=c.activeOptionIndex!==null?c.options[c.activeOptionIndex].id===a:!1,P=c.isSelected(i),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),y=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)({disabled:u,value:i,domRef:s,textValue:(_=(F=s.current)==null?void 0:F.textContent)==null?void 0:_.toLowerCase()}),T=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(n,s),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>e.selectOption(a));(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>e.registerOption(a,y),[y,a]);let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!c.__demoMode);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{if(!c.__demoMode)return;let O=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_12__.disposables)();return O.requestAnimationFrame(()=>{g.current=!0}),O.dispose},[]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{if(c.comboboxState!==0||!p||!g.current||c.activationTrigger===0)return;let O=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_12__.disposables)();return O.requestAnimationFrame(()=>{var l,L;(L=(l=s.current)==null?void 0:l.scrollIntoView)==null||L.call(l,{block:"nearest"})}),O.dispose},[s,p,c.comboboxState,c.activationTrigger,c.activeOptionIndex]);let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>{if(u)return O.preventDefault();C(),c.mode===0&&e.closeCombobox()}),K=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{if(u)return e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Nothing);e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,a)}),h=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__.useTrackedPointer)(),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>h.update(O)),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>{!h.wasMoved(O)||u||p||e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,a,0)}),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>{!h.wasMoved(O)||u||!p||c.optionsPropsRef.current.hold||e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Nothing)}),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:p,selected:P,disabled:u}),[p,P,u]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{id:a,ref:T,role:"option",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-selected":P,disabled:void 0,onClick:R,onFocus:K,onPointerEnter:w,onMouseEnter:w,onPointerMove:B,onMouseMove:B,onPointerLeave:D,onMouseLeave:D},theirProps:d,slot:W,defaultTag:Ze,name:"Combobox.Option"})}),ko=Object.assign(He,{Input:Ke,Button:Xe,Label:Je,Options:Ye,Option:ze});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": () => (/* binding */ F),
/* harmony export */   "useDescriptions": () => (/* binding */ k)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function u(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(n===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return n}function k(){let[n,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>(t(o=>[...o,r]),()=>t(o=>{let s=o.slice(),p=s.indexOf(r);return p!==-1&&s.splice(p,1),s}))),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(d.Provider,{value:a},e.children)},[t])]}let S="p",F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,c){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__.useId)(),{id:i=`headlessui-description-${e}`,...a}=t,r=u(),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(c);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>r.register(i),[i,r.register]);let s={ref:o,...r.props,id:i};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:s,theirProps:a,slot:r.slot||{},defaultTag:S,name:r.name||"Description"})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/dialog/dialog.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* binding */ gt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/focus-trap/focus-trap.js */ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js");
/* harmony import */ var _hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-inert-others.js */ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js");
/* harmony import */ var _components_portal_portal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/portal/portal.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _internal_stack_context_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../internal/stack-context.js */ "./node_modules/@headlessui/react/dist/internal/stack-context.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../hooks/document-overflow/use-document-overflow.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js");
var Ee=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Ee||{}),ve=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(ve||{});let be={[0](r,e){return r.titleId===e.id?r:{...r,titleId:e.id}}},M=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);M.displayName="DialogContext";function L(r){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M);if(e===null){let t=new Error(`<${r} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return e}function he(r,e,t=()=>[document.body]){(0,_hooks_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_20__.useDocumentOverflowLockedEffect)(r,e,d=>{var l;return{containers:[...(l=d.containers)!=null?l:[],t]}})}function Ce(r,e){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(e.type,be,r,e)}let Oe="div",Se=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,Le=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-${d}`,open:n,onClose:o,initialFocus:a,__demoMode:c=!1,...g}=e,[D,F]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),i=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.useOpenClosed)();n===void 0&&i!==null&&(n=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i,{[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Open]:!0,[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Closed]:!1}));let _=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),J=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(T,t),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),P=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_16__.useOwnerDocument)(T),$=e.hasOwnProperty("open")||i!==null,N=e.hasOwnProperty("onClose");if(!$&&!N)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!$)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!N)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let s=n?0:1,[y,Q]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ce,{titleId:null,descriptionId:null,panelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>o(!1)),W=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(p=>Q({type:0,id:p})),w=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_13__.useServerHandoffComplete)()?c?!1:s===0:!1,k=D>1,X=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M)!==null,Z=k?"parent":"leaf";(0,_hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_8__.useInertOthers)(T,k?w:!1);let Y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>{var A,f;return[...Array.from((A=P==null?void 0:P.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?A:[]).filter(m=>!(m===document.body||m===document.head||!(m instanceof HTMLElement)||m.contains(U.current)||y.panelRef.current&&m.contains(y.panelRef.current))),(f=y.panelRef.current)!=null?f:T.current]});(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_15__.useOutsideClick)(()=>Y(),R,w&&!k),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_17__.useEventListener)(P==null?void 0:P.defaultView,"keydown",p=>{p.defaultPrevented||p.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.Escape&&s===0&&(k||(p.preventDefault(),p.stopPropagation(),R()))}),he(P,s===0&&!X,Y),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(s!==0||!T.current)return;let p=new IntersectionObserver(A=>{for(let f of A)f.boundingClientRect.x===0&&f.boundingClientRect.y===0&&f.boundingClientRect.width===0&&f.boundingClientRect.height===0&&R()});return p.observe(T.current),()=>p.disconnect()},[s,T,R]);let[ee,te]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_11__.useDescriptions)(),oe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{dialogState:s,close:R,setTitleId:W},y],[s,y,R,W]),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:s===0}),[s]),re={ref:J,id:l,role:"dialog","aria-modal":s===0?!0:void 0,"aria-labelledby":y.titleId,"aria-describedby":ee};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_14__.StackProvider,{type:"Dialog",enabled:s===0,element:T,onUpdate:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)((p,A,f)=>{A==="Dialog"&&(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(p,{[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_14__.StackMessage.Add](){_.current.add(f),F(m=>m+1)},[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_14__.StackMessage.Remove](){_.current.add(f),F(m=>m-1)}})})},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_10__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_9__.Portal,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(M.Provider,{value:oe},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_9__.Portal.Group,{target:T},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_10__.ForcePortalRoot,{force:!1},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(te,{slot:j,name:"Dialog.Description"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap,{initialFocus:a,containers:_,features:w?(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(Z,{parent:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.RestoreFocus,leaf:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.All&~_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.FocusLock}):_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.None},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:re,theirProps:g,slot:j,defaultTag:Oe,features:Se,visible:s===0,name:"Dialog"})))))))),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Features.Hidden,ref:U}))}),Fe="div",ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-overlay-${d}`,...n}=e,[{dialogState:o,close:a}]=L("Dialog.Overlay"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(i=>{if(i.target===i.currentTarget){if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_5__.isDisabledReactIssue7711)(i.currentTarget))return i.preventDefault();i.preventDefault(),i.stopPropagation(),a()}}),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l,"aria-hidden":!0,onClick:g},theirProps:n,slot:D,defaultTag:Fe,name:"Dialog.Overlay"})}),Ie="div",Me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-backdrop-${d}`,...n}=e,[{dialogState:o},a]=L("Dialog.Backdrop"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_10__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_9__.Portal,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l,"aria-hidden":!0},theirProps:n,slot:g,defaultTag:Ie,name:"Dialog.Backdrop"})))}),_e="div",we=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-panel-${d}`,...n}=e,[{dialogState:o},a]=L("Dialog.Panel"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t,a.panelRef),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(i=>{i.stopPropagation()});return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l,onClick:D},theirProps:n,slot:g,defaultTag:_e,name:"Dialog.Panel"})}),xe="h2",He=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-title-${d}`,...n}=e,[{dialogState:o,setTitleId:a}]=L("Dialog.Title"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(a(l),()=>a(null)),[l,a]);let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l},theirProps:n,slot:g,defaultTag:xe,name:"Dialog.Title"})}),gt=Object.assign(Le,{Backdrop:Me,Panel:we,Overlay:ke,Title:He,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_11__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Disclosure": () => (/* binding */ ke)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _utils_start_transition_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/start-transition.js */ "./node_modules/@headlessui/react/dist/utils/start-transition.js");
var Q=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(Q||{}),V=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.LinkPanel=4]="LinkPanel",t[t.UnlinkPanel=5]="UnlinkPanel",t))(V||{});let X={[0]:e=>({...e,disclosureState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},[3](e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},B=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);B.displayName="DisclosureContext";function v(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(B);if(n===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,v),l}return n}let h=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);h.displayName="DisclosureAPIContext";function K(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(h);if(n===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,K),l}return n}let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);H.displayName="DisclosurePanelContext";function Y(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(H)}function Z(e,n){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(n.type,X,e,n)}let ee=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(n,l){let{defaultOpen:y=!1,...u}=n,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),t=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(l,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.optionalRef)(a=>{T.current=a},n.as===void 0||n.as===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Z,{disclosureState:y?0:1,linkedPanel:!1,buttonRef:f,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:p},D]=s,d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(a=>{D({type:1});let r=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_9__.getOwnerDocument)(T);if(!r||!p)return;let c=(()=>a?a instanceof HTMLElement?a:a.current instanceof HTMLElement?a.current:r.getElementById(p):r.getElementById(p))();c==null||c.focus()}),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:d}),[d]),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i===0,close:d}),[i,d]),S={ref:t};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(h.Provider,{value:P},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:S,theirProps:u,slot:A,defaultTag:ee,name:"Disclosure"}))))}),ne="button",le=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(n,l){let y=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:u=`headlessui-disclosure-button-${y}`,...T}=n,[t,o]=v("Disclosure.Button"),f=Y(),s=f===null?!1:f===t.panelId,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(i,l,s?null:t.buttonRef);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s)return o({type:2,buttonId:u}),()=>{o({type:2,buttonId:null})}},[u,o,s]);let D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(r=>{var c;if(s){if(t.disclosureState===1)return;switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Enter:r.preventDefault(),r.stopPropagation(),o({type:0}),(c=t.buttonRef.current)==null||c.focus();break}}else switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Enter:r.preventDefault(),r.stopPropagation(),o({type:0});break}}),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(r=>{switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:r.preventDefault();break}}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(r=>{var c;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_6__.isDisabledReactIssue7711)(r.currentTarget)||n.disabled||(s?(o({type:0}),(c=t.buttonRef.current)==null||c.focus()):o({type:0}))}),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.disclosureState===0}),[t]),S=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_8__.useResolveButtonType)(n,i),a=s?{ref:p,type:S,onKeyDown:D,onClick:P}:{ref:p,id:u,type:S,"aria-expanded":n.disabled?void 0:t.disclosureState===0,"aria-controls":t.linkedPanel?t.panelId:void 0,onKeyDown:D,onKeyUp:d,onClick:P};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:a,theirProps:T,slot:A,defaultTag:ne,name:"Disclosure.Button"})}),re="div",oe=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(n,l){let y=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:u=`headlessui-disclosure-panel-${y}`,...T}=n,[t,o]=v("Disclosure.Panel"),{close:f}=K("Disclosure.Panel"),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(l,t.panelRef,P=>{(0,_utils_start_transition_js__WEBPACK_IMPORTED_MODULE_11__.startTransition)(()=>o({type:P?4:5}))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(o({type:3,panelId:u}),()=>{o({type:3,panelId:null})}),[u,o]);let i=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.useOpenClosed)(),p=(()=>i!==null?i===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open:t.disclosureState===0)(),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.disclosureState===0,close:f}),[t,f]),d={ref:s,id:u};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H.Provider,{value:t.panelId},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:d,theirProps:T,slot:D,defaultTag:re,features:oe,visible:p,name:"Disclosure.Panel"}))}),ke=Object.assign(te,{Button:le,Panel:se});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusTrap": () => (/* binding */ de)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-watch.js */ "./node_modules/@headlessui/react/dist/hooks/use-watch.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
let z="div";var A=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(A||{});let de=Object.assign((0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(u,e){let l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(l,e),{initialFocus:m,containers:t,features:n=30,...E}=u;(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)()||(n=1);let s=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_10__.useOwnerDocument)(l);J({ownerDocument:s},Boolean(n&16));let S=Q({ownerDocument:s,container:l,initialFocus:m},Boolean(n&2));X({ownerDocument:s,container:l,containers:t,previousActiveElement:S},Boolean(n&8));let H=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.useTabDirection)(),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(o=>{let c=l.current;if(!c)return;(_=>_())(()=>{(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(H.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Forwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(c,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First,{skipElements:[o.relatedTarget]})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Backwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(c,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Last,{skipElements:[o.relatedTarget]})}})})}),B=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_14__.useDisposables)(),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),P={ref:a,onKeyDown(o){o.key=="Tab"&&(L.current=!0,B.requestAnimationFrame(()=>{L.current=!1}))},onBlur(o){let c=new Set(t==null?void 0:t.current);c.add(l);let p=o.relatedTarget;p instanceof HTMLElement&&p.dataset.headlessuiFocusGuard!=="true"&&(h(c,p)||(L.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(l.current,(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(H.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Forwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Backwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Previous})|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.WrapAround,{relativeTo:o.target}):o.target instanceof HTMLElement&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(o.target)))}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,Boolean(n&4)&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Features.Focusable}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:P,theirProps:E,defaultTag:z,name:"FocusTrap"}),Boolean(n&4)&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Features.Focusable}))}),{features:A});function J({ownerDocument:r},u){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_11__.useEventListener)(r==null?void 0:r.defaultView,"focusout",a=>{!u||e.current||(e.current=a.target)},!0),(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__.useWatch)(()=>{u||((r==null?void 0:r.activeElement)===(r==null?void 0:r.body)&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(e.current),e.current=null)},[u]);let l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(l.current=!1,()=>{l.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__.microTask)(()=>{!l.current||((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(e.current),e.current=null)})}),[])}function Q({ownerDocument:r,container:u,initialFocus:e},l){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),m=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_9__.useIsMounted)();return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__.useWatch)(()=>{if(!l)return;let t=u.current;!t||(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__.microTask)(()=>{if(!m.current)return;let n=r==null?void 0:r.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===n){a.current=n;return}}else if(t.contains(n)){a.current=n;return}e!=null&&e.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(e.current):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(t,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=r==null?void 0:r.activeElement})},[l]),a}function X({ownerDocument:r,container:u,containers:e,previousActiveElement:l},a){let m=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_9__.useIsMounted)();(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_11__.useEventListener)(r==null?void 0:r.defaultView,"focus",t=>{if(!a||!m.current)return;let n=new Set(e==null?void 0:e.current);n.add(u);let E=l.current;if(!E)return;let s=t.target;s&&s instanceof HTMLElement?h(n,s)?(l.current=s,(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(s)):(t.preventDefault(),t.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(E)):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(l.current)},!0)}function h(r,u){var e;for(let l of r)if((e=l.current)!=null&&e.contains(u))return!0;return!1}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/label/label.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/label/label.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ F),
/* harmony export */   "useLabels": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function c(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(u);if(n===null){let r=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,c),r}return n}function M(){let[n,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(l=>(r(t=>[...t,l]),()=>r(t=>{let i=t.slice(),a=i.indexOf(l);return a!==-1&&i.splice(a,1),i}))),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:o,slot:e.slot,name:e.name,props:e.props}),[o,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(u.Provider,{value:s},e.children)},[r])]}let h="label",F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,d){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__.useId)(),{id:o=`headlessui-label-${e}`,passive:s=!1,...l}=r,t=c(),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(d);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>t.register(o),[o,t.register]);let a={ref:i,...t.props,id:o};return s&&("onClick"in a&&delete a.onClick,"onClick"in l&&delete l.onClick),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:a,theirProps:l,slot:t.slot||{},defaultTag:h,name:t.name||"Label"})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/listbox/listbox.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Listbox": () => (/* binding */ Mt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-computed.js */ "./node_modules/@headlessui/react/dist/hooks/use-computed.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../hooks/use-tracked-pointer.js */ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js");
var Ue=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Ue||{}),Be=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(Be||{}),He=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(He||{}),Ge=(n=>(n[n.OpenListbox=0]="OpenListbox",n[n.CloseListbox=1]="CloseListbox",n[n.GoToOption=2]="GoToOption",n[n.Search=3]="Search",n[n.ClearSearch=4]="ClearSearch",n[n.RegisterOption=5]="RegisterOption",n[n.UnregisterOption=6]="UnregisterOption",n[n.RegisterLabel=7]="RegisterLabel",n))(Ge||{});function q(e,r=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,p=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_12__.sortByDomNode)(r(e.options.slice()),c=>c.dataRef.current.domRef.current),i=o?p.indexOf(o):null;return i===-1&&(i=null),{options:p,activeOptionIndex:i}}let je={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,p=e.options.findIndex(i=>o(i.dataRef.current.value));return p!==-1&&(r=p),{...e,listboxState:0,activeOptionIndex:r}},[2](e,r){var i;if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=q(e),p=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.calculateActiveIndex)(r,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});return{...e,...o,searchQuery:"",activeOptionIndex:p,activationTrigger:(i=r.trigger)!=null?i:1}},[3]:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let p=e.searchQuery!==""?0:1,i=e.searchQuery+r.value.toLowerCase(),t=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+p).concat(e.options.slice(0,e.activeOptionIndex+p)):e.options).find(n=>{var T;return!n.dataRef.current.disabled&&((T=n.dataRef.current.textValue)==null?void 0:T.startsWith(i))}),u=t?e.options.indexOf(t):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:i}:{...e,searchQuery:i,activeOptionIndex:u,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,r)=>{let o={id:r.id,dataRef:r.dataRef},p=q(e,i=>[...i,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(p.activeOptionIndex=p.options.indexOf(o)),{...e,...p}},[6]:(e,r)=>{let o=q(e,p=>{let i=p.findIndex(c=>c.id===r.id);return i!==-1&&p.splice(i,1),p});return{...e,...o,activationTrigger:1}},[7]:(e,r)=>({...e,labelId:r.id})},X=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);X.displayName="ListboxActionsContext";function B(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(X);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,B),o}return r}let J=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);J.displayName="ListboxDataContext";function H(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(J);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,H),o}return r}function Ke(e,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_7__.match)(r.type,je,e,r)}let Ve=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Ne=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.forwardRefWithAs)(function(r,o){let{value:p,defaultValue:i,name:c,onChange:t,by:u=(l,f)=>l===f,disabled:n=!1,horizontal:T=!1,multiple:g=!1,...A}=r;const m=T?"horizontal":"vertical";let P=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(o),[y=g?[]:void 0,S]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_20__.useControllable)(p,t,i),[h,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ke,{dataRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),Q=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(typeof u=="string"?(l,f)=>{let v=u;return(l==null?void 0:l[v])===(f==null?void 0:f[v])}:u),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_7__.match)(d.mode,{[1]:()=>y.some(f=>M(f,l)),[0]:()=>M(y,l)}),[y]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...h,value:y,disabled:n,mode:g?1:0,orientation:m,compare:M,isSelected:L,optionsPropsRef:a,labelRef:x,buttonRef:D,optionsRef:Q}),[y,n,g,h]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{h.dataRef.current=d},[d]),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_15__.useOutsideClick)([d.buttonRef,d.optionsRef],(l,f)=>{var v;s({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_12__.isFocusableElement)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_12__.FocusableMode.Loose)||(l.preventDefault(),(v=d.buttonRef.current)==null||v.focus())},d.listboxState===0);let G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:d.listboxState===0,disabled:n,value:y}),[d,n,y]),ie=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(l=>{let f=d.options.find(v=>v.id===l);!f||k(f.dataRef.current.value)}),re=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>{if(d.activeOptionIndex!==null){let{dataRef:l,id:f}=d.options[d.activeOptionIndex];k(l.current.value),s({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Specific,id:f})}}),ae=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>s({type:0})),le=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>s({type:1})),se=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)((l,f,v)=>l===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Specific?s({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Specific,id:f,trigger:v}):s({type:2,focus:l,trigger:v})),ue=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)((l,f)=>(s({type:5,id:l,dataRef:f}),()=>s({type:6,id:l}))),pe=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(l=>(s({type:7,id:l}),()=>s({type:7,id:null}))),k=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(l=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_7__.match)(d.mode,{[0](){return S==null?void 0:S(l)},[1](){let f=d.value.slice(),v=f.findIndex(w=>M(w,l));return v===-1?f.push(l):f.splice(v,1),S==null?void 0:S(f)}})),de=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(l=>s({type:3,value:l})),ce=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>s({type:4})),fe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({onChange:k,registerOption:ue,registerLabel:pe,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce}),[]),be={ref:P},j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),Te=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!j.current||i!==void 0&&Te.addEventListener(j.current,"reset",()=>{k(i)})},[j,k]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X.Provider,{value:fe},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(J.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_13__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_7__.match)(d.listboxState,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_13__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_13__.State.Closed})},c!=null&&y!=null&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_17__.objectToFormEntries)({[c]:y}).map(([l,f],v)=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Features.Hidden,ref:v===0?w=>{var Y;j.current=(Y=w==null?void 0:w.closest("form"))!=null?Y:null}:void 0,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.compact)({key:l,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:l,value:f})})),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.render)({ourProps:be,theirProps:A,slot:G,defaultTag:Ve,name:"Listbox"}))))}),We="button",Qe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.forwardRefWithAs)(function(r,o){var h;let p=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:i=`headlessui-listbox-button-${p}`,...c}=r,t=H("Listbox.Button"),u=B("Listbox.Button"),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(t.buttonRef,o),T=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__.useDisposables)(),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(s=>{switch(s.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.ArrowDown:s.preventDefault(),u.openListbox(),T.nextFrame(()=>{t.value||u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.First)});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.ArrowUp:s.preventDefault(),u.openListbox(),T.nextFrame(()=>{t.value||u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Last)});break}}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(s=>{switch(s.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Space:s.preventDefault();break}}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(s=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_11__.isDisabledReactIssue7711)(s.currentTarget))return s.preventDefault();t.listboxState===0?(u.closeListbox(),T.nextFrame(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(s.preventDefault(),u.openListbox())}),P=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_4__.useComputed)(()=>{if(!!t.labelId)return[t.labelId,i].join(" ")},[t.labelId,i]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),S={ref:n,id:i,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__.useResolveButtonType)(r,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(h=t.optionsRef.current)==null?void 0:h.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":P,disabled:t.disabled,onKeyDown:g,onKeyUp:A,onClick:m};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.render)({ourProps:S,theirProps:c,slot:y,defaultTag:We,name:"Listbox.Button"})}),$e="label",ze=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.forwardRefWithAs)(function(r,o){let p=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:i=`headlessui-listbox-label-${p}`,...c}=r,t=H("Listbox.Label"),u=B("Listbox.Label"),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(t.labelRef,o);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>u.registerLabel(i),[i]);let T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.render)({ourProps:{ref:n,id:i,onClick:T},theirProps:c,slot:g,defaultTag:$e,name:"Listbox.Label"})}),qe="ul",Xe=_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.Features.Static,Je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.forwardRefWithAs)(function(r,o){var s;let p=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:i=`headlessui-listbox-options-${p}`,...c}=r,t=H("Listbox.Options"),u=B("Listbox.Options"),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(t.optionsRef,o),T=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__.useDisposables)(),g=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__.useDisposables)(),A=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_13__.useOpenClosed)(),m=(()=>A!==null?A===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_13__.State.Open:t.listboxState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var x;let a=t.optionsRef.current;!a||t.listboxState===0&&a!==((x=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_18__.getOwnerDocument)(a))==null?void 0:x.activeElement)&&a.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(a=>{switch(g.dispose(),a.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Space:if(t.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),u.search(a.key);case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:x}=t.options[t.activeOptionIndex];u.onChange(x.current.value)}t.mode===0&&(u.closeListbox(),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_8__.disposables)().nextFrame(()=>{var x;return(x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}));break;case (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_7__.match)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.ArrowDown,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.ArrowRight}):return a.preventDefault(),a.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Next);case (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_7__.match)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.ArrowUp,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Previous);case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.PageUp:return a.preventDefault(),a.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.PageDown:return a.preventDefault(),a.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Escape:return a.preventDefault(),a.stopPropagation(),u.closeListbox(),T.nextFrame(()=>{var x;return(x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(u.search(a.key),g.setTimeout(()=>u.clearSearch(),350));break}}),y=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_4__.useComputed)(()=>{var a,x,D;return(D=(a=t.labelRef.current)==null?void 0:a.id)!=null?D:(x=t.buttonRef.current)==null?void 0:x.id},[t.labelRef.current,t.buttonRef.current]),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0}),[t]),h={"aria-activedescendant":t.activeOptionIndex===null||(s=t.options[t.activeOptionIndex])==null?void 0:s.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":t.orientation,id:i,onKeyDown:P,role:"listbox",tabIndex:0,ref:n};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.render)({ourProps:h,theirProps:c,slot:S,defaultTag:qe,features:Xe,visible:m,name:"Listbox.Options"})}),Ye="li",Ze=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.forwardRefWithAs)(function(r,o){let p=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:i=`headlessui-listbox-option-${p}`,disabled:c=!1,value:t,...u}=r,n=H("Listbox.Option"),T=B("Listbox.Option"),g=n.activeOptionIndex!==null?n.options[n.activeOptionIndex].id===i:!1,A=n.isSelected(t),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),P=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_21__.useLatestValue)({disabled:c,value:t,domRef:m,get textValue(){var L,d;return(d=(L=m.current)==null?void 0:L.textContent)==null?void 0:d.toLowerCase()}}),y=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(o,m);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{if(n.listboxState!==0||!g||n.activationTrigger===0)return;let L=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_8__.disposables)();return L.requestAnimationFrame(()=>{var d,G;(G=(d=m.current)==null?void 0:d.scrollIntoView)==null||G.call(d,{block:"nearest"})}),L.dispose},[m,g,n.listboxState,n.activationTrigger,n.activeOptionIndex]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>T.registerOption(i,P),[P,i]);let S=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(L=>{if(c)return L.preventDefault();T.onChange(t),n.mode===0&&(T.closeListbox(),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_8__.disposables)().nextFrame(()=>{var d;return(d=n.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})}))}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>{if(c)return T.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Nothing);T.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Specific,i)}),s=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_22__.useTrackedPointer)(),a=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(L=>s.update(L)),x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(L=>{!s.wasMoved(L)||c||g||T.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Specific,i,0)}),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(L=>{!s.wasMoved(L)||c||!g||T.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_10__.Focus.Nothing)}),Q=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:g,selected:A,disabled:c}),[g,A,c]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.render)({ourProps:{id:i,ref:y,role:"option",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,"aria-selected":A,disabled:void 0,onClick:S,onFocus:h,onPointerEnter:a,onMouseEnter:a,onPointerMove:x,onMouseMove:x,onPointerLeave:D,onMouseLeave:D},theirProps:u,slot:Q,defaultTag:Ye,name:"Listbox.Option"})}),Mt=Object.assign(Ne,{Button:Qe,Label:ze,Options:Je,Option:Ze});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/menu/menu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/menu/menu.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Ze)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-tree-walker.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/use-tracked-pointer.js */ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js");
var pe=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(pe||{}),de=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(de||{}),me=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(me||{});function U(t,i=o=>o){let o=t.activeItemIndex!==null?t.items[t.activeItemIndex]:null,s=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.sortByDomNode)(i(t.items.slice()),u=>u.dataRef.current.domRef.current),a=o?s.indexOf(o):null;return a===-1&&(a=null),{items:s,activeItemIndex:a}}let fe={[1](t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},[0](t){return t.menuState===0?t:{...t,menuState:0}},[2]:(t,i)=>{var a;let o=U(t),s=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.calculateActiveIndex)(i,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:s,activationTrigger:(a=i.trigger)!=null?a:1}},[3]:(t,i)=>{let s=t.searchQuery!==""?0:1,a=t.searchQuery+i.value.toLowerCase(),n=(t.activeItemIndex!==null?t.items.slice(t.activeItemIndex+s).concat(t.items.slice(0,t.activeItemIndex+s)):t.items).find(d=>{var l;return((l=d.dataRef.current.textValue)==null?void 0:l.startsWith(a))&&!d.dataRef.current.disabled}),e=n?t.items.indexOf(n):-1;return e===-1||e===t.activeItemIndex?{...t,searchQuery:a}:{...t,searchQuery:a,activeItemIndex:e,activationTrigger:1}},[4](t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},[5]:(t,i)=>{let o=U(t,s=>[...s,{id:i.id,dataRef:i.dataRef}]);return{...t,...o}},[6]:(t,i)=>{let o=U(t,s=>{let a=s.findIndex(u=>u.id===i.id);return a!==-1&&s.splice(a,1),s});return{...t,...o,activationTrigger:1}}},G=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);G.displayName="MenuContext";function O(t){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(G);if(i===null){let o=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,O),o}return i}function Te(t,i){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i.type,fe,t,i)}let ye=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Te,{menuState:1,buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),itemsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:u,buttonRef:n},e]=s,d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(o);(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_12__.useOutsideClick)([n,u],(R,A)=>{var g;e({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.isFocusableElement)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.FocusableMode.Loose)||(R.preventDefault(),(g=n.current)==null||g.focus())},a===0);let l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(()=>{e({type:1})}),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:a===0,close:l}),[a,l]),M=i,T={ref:d};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(G.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(a,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:T,theirProps:M,slot:f,defaultTag:ye,name:"Menu"})))}),ge="button",Me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){var g;let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)(),{id:a=`headlessui-menu-button-${s}`,...u}=i,[n,e]=O("Menu.Button"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(n.buttonRef,o),l=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_4__.useDisposables)(),f=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(c=>{switch(c.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowDown:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame(()=>e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First}));break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowUp:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame(()=>e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Last}));break}}),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(c=>{switch(c.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:c.preventDefault();break}}),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(c=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_10__.isDisabledReactIssue7711)(c.currentTarget))return c.preventDefault();i.disabled||(n.menuState===0?(e({type:1}),l.nextFrame(()=>{var b;return(b=n.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})})):(c.preventDefault(),e({type:0})))}),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:n.menuState===0}),[n]),A={ref:d,id:a,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_15__.useResolveButtonType)(i,n.buttonRef),"aria-haspopup":"menu","aria-controls":(g=n.itemsRef.current)==null?void 0:g.id,"aria-expanded":i.disabled?void 0:n.menuState===0,onKeyDown:f,onKeyUp:M,onClick:T};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:A,theirProps:u,slot:R,defaultTag:ge,name:"Menu.Button"})}),Re="div",be=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,Ae=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){var b,S;let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)(),{id:a=`headlessui-menu-items-${s}`,...u}=i,[n,e]=O("Menu.Items"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(n.itemsRef,o),l=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_16__.useOwnerDocument)(n.itemsRef),f=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_4__.useDisposables)(),M=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.useOpenClosed)(),T=(()=>M!==null?M===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.State.Open:n.menuState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let r=n.itemsRef.current;!r||n.menuState===0&&r!==(l==null?void 0:l.activeElement)&&r.focus({preventScroll:!0})},[n.menuState,n.itemsRef,l]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_13__.useTreeWalker)({container:n.itemsRef.current,enabled:n.menuState===0,accept(r){return r.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(r=>{var h,F;switch(f.dispose(),r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:if(n.searchQuery!=="")return r.preventDefault(),r.stopPropagation(),e({type:3,value:r.key});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:if(r.preventDefault(),r.stopPropagation(),e({type:1}),n.activeItemIndex!==null){let{dataRef:p}=n.items[n.activeItemIndex];(F=(h=p.current)==null?void 0:h.domRef.current)==null||F.click()}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.restoreFocusIfNecessary)(n.buttonRef.current);break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Next});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Previous});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.PageUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.PageDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Last});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Escape:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_3__.disposables)().nextFrame(()=>{var p;return(p=n.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Tab:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_3__.disposables)().nextFrame(()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.focusFrom)(n.buttonRef.current,r.shiftKey?_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Previous:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Next)});break;default:r.key.length===1&&(e({type:3,value:r.key}),f.setTimeout(()=>e({type:4}),350));break}}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(r=>{switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:r.preventDefault();break}}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:n.menuState===0}),[n]),c={"aria-activedescendant":n.activeItemIndex===null||(b=n.items[n.activeItemIndex])==null?void 0:b.id,"aria-labelledby":(S=n.buttonRef.current)==null?void 0:S.id,id:a,onKeyDown:R,onKeyUp:A,role:"menu",tabIndex:0,ref:d};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:c,theirProps:u,slot:g,defaultTag:Re,features:be,visible:T,name:"Menu.Items"})}),ve=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)(),{id:a=`headlessui-menu-item-${s}`,disabled:u=!1,...n}=i,[e,d]=O("Menu.Item"),l=e.activeItemIndex!==null?e.items[e.activeItemIndex].id===a:!1,f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),M=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(o,f);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{if(e.menuState!==0||!l||e.activationTrigger===0)return;let p=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_3__.disposables)();return p.requestAnimationFrame(()=>{var v,B;(B=(v=f.current)==null?void 0:v.scrollIntoView)==null||B.call(v,{block:"nearest"})}),p.dispose},[f,l,e.menuState,e.activationTrigger,e.activeItemIndex]);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:u,domRef:f});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{T.current.disabled=u},[T,u]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{var p,v;T.current.textValue=(v=(p=f.current)==null?void 0:p.textContent)==null?void 0:v.toLowerCase()},[T,f]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>(d({type:5,id:a,dataRef:T}),()=>d({type:6,id:a})),[T,a]);let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(()=>{d({type:1})}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>{if(u)return p.preventDefault();d({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.restoreFocusIfNecessary)(e.buttonRef.current)}),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(()=>{if(u)return d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Nothing});d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Specific,id:a})}),c=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_18__.useTrackedPointer)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>c.update(p)),S=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>{!c.wasMoved(p)||u||l||d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Specific,id:a,trigger:0})}),r=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>{!c.wasMoved(p)||u||!l||d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Nothing})}),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,disabled:u,close:R}),[l,u,R]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{id:a,ref:M,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:A,onFocus:g,onPointerEnter:b,onMouseEnter:b,onPointerMove:S,onMouseMove:S,onPointerLeave:r,onMouseLeave:r},theirProps:n,slot:h,defaultTag:ve,name:"Menu.Item"})}),Ze=Object.assign(Ie,{Button:Me,Items:Ae,Item:Se});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/popover/popover.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/popover/popover.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popover": () => (/* binding */ Rt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
var Me=(p=>(p[p.Open=0]="Open",p[p.Closed=1]="Closed",p))(Me||{}),Le=(t=>(t[t.TogglePopover=0]="TogglePopover",t[t.ClosePopover=1]="ClosePopover",t[t.SetButton=2]="SetButton",t[t.SetButtonId=3]="SetButtonId",t[t.SetPanel=4]="SetPanel",t[t.SetPanelId=5]="SetPanelId",t))(Le||{});let Fe={[0]:n=>({...n,popoverState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(n.popoverState,{[0]:1,[1]:0})}),[1](n){return n.popoverState===1?n:{...n,popoverState:1}},[2](n,r){return n.button===r.button?n:{...n,button:r.button}},[3](n,r){return n.buttonId===r.buttonId?n:{...n,buttonId:r.buttonId}},[4](n,r){return n.panel===r.panel?n:{...n,panel:r.panel}},[5](n,r){return n.panelId===r.panelId?n:{...n,panelId:r.panelId}}},le=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);le.displayName="PopoverContext";function Z(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(le);if(r===null){let p=new Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,Z),p}return r}let ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ae.displayName="PopoverAPIContext";function ue(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ae);if(r===null){let p=new Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,ue),p}return r}let se=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);se.displayName="PopoverGroupContext";function Te(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(se)}let pe=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);pe.displayName="PopoverPanelContext";function he(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(pe)}function Be(n,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r.type,Fe,n,r)}let xe="div",De=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){var x;let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(p,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.optionalRef)(e=>{C.current=e})),O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Be,{popoverState:1,buttons:O,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),afterPanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),[{popoverState:o,button:a,buttonId:v,panel:c,panelId:M,beforePanelSentinel:T,afterPanelSentinel:d},i]=t,u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_12__.useOwnerDocument)((x=C.current)!=null?x:a),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(!a||!c)return!1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(a))^Number(K==null?void 0:K.contains(c)))return!0;let e=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.getFocusableElements)(),l=e.indexOf(a),A=(l+e.length-1)%e.length,b=(l+1)%e.length,G=e[A],me=e[b];return!c.contains(G)&&!c.contains(me)},[a,c]),g=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_18__.useLatestValue)(v),y=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_18__.useLatestValue)(M),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:g,panelId:y,close:()=>i({type:1})}),[g,y,i]),I=Te(),F=I==null?void 0:I.registerPopover,j=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{var e;return(e=I==null?void 0:I.isFocusWithinPopoverGroup())!=null?e:(u==null?void 0:u.activeElement)&&((a==null?void 0:a.contains(u.activeElement))||(c==null?void 0:c.contains(u.activeElement)))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>F==null?void 0:F(L),[F,L]),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_13__.useEventListener)(u==null?void 0:u.defaultView,"focus",e=>{var l,A,b,G;o===0&&(j()||!a||!c||e.target!==window&&((A=(l=T.current)==null?void 0:l.contains)!=null&&A.call(l,e.target)||(G=(b=d.current)==null?void 0:b.contains)!=null&&G.call(b,e.target)||i({type:1})))},!0),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_10__.useOutsideClick)([a,c],(e,l)=>{i({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.isFocusableElement)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusableMode.Loose)||(e.preventDefault(),a==null||a.focus())},o===0);let h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{i({type:1});let l=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:a:a)();l==null||l.focus()}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:h,isPortalled:f}),[h,f]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0,close:h}),[o,h]),E=r,P={ref:R};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(le.Provider,{value:t},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ae.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(o,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:P,theirProps:E,slot:m,defaultTag:xe,name:"Popover"}))))}),He="button",ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:R=`headlessui-popover-button-${C}`,...O}=r,[t,o]=Z("Popover.Button"),{isPortalled:a}=ue("Popover.Button"),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=`headlessui-focus-sentinel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)()}`,M=Te(),T=M==null?void 0:M.closeOthers,i=he()!==null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!i)return o({type:3,buttonId:R}),()=>{o({type:3,buttonId:null})}},[i,R,o]);let[u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>Symbol()),f=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(v,p,i?null:e=>{if(e)t.buttons.current.push(u);else{let l=t.buttons.current.indexOf(u);l!==-1&&t.buttons.current.splice(l,1)}t.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&o({type:2,button:e})}),g=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(v,p),y=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_12__.useOwnerDocument)(v),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{var l,A,b;if(i){if(t.popoverState===1)return;switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Enter:e.preventDefault(),(A=(l=e.target).click)==null||A.call(l),o({type:1}),(b=t.button)==null||b.focus();break}}else switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Enter:e.preventDefault(),e.stopPropagation(),t.popoverState===1&&(T==null||T(t.buttonId)),o({type:0});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Escape:if(t.popoverState!==0)return T==null?void 0:T(t.buttonId);if(!v.current||(y==null?void 0:y.activeElement)&&!v.current.contains(y.activeElement))return;e.preventDefault(),e.stopPropagation(),o({type:1});break}}),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{i||e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space&&e.preventDefault()}),F=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{var l,A;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_6__.isDisabledReactIssue7711)(e.currentTarget)||r.disabled||(i?(o({type:1}),(l=t.button)==null||l.focus()):(e.preventDefault(),e.stopPropagation(),t.popoverState===1&&(T==null||T(t.buttonId)),o({type:0}),(A=t.button)==null||A.focus()))}),j=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{e.preventDefault(),e.stopPropagation()}),h=t.popoverState===0,s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:h}),[h]),m=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_9__.useResolveButtonType)(r,v),E=i?{ref:g,type:m,onKeyDown:L,onClick:F}:{ref:f,id:t.buttonId,type:m,"aria-expanded":r.disabled?void 0:t.popoverState===0,"aria-controls":t.panel?t.panelId:void 0,onKeyDown:L,onKeyUp:I,onClick:F,onMouseDown:j},P=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.useTabDirection)(),x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{let e=t.panel;if(!e)return;function l(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(P.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First),[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Last)})===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.getFocusableElements)().filter(b=>b.dataset.headlessuiFocusGuard!=="true"),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(P.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Previous}),{relativeTo:t.button})}l()});return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:E,theirProps:O,slot:s,defaultTag:He,name:"Popover.Button"}),h&&!i&&a&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{id:c,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:x}))}),Ge="div",we=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,_e=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:R=`headlessui-popover-overlay-${C}`,...O}=r,[{popoverState:t},o]=Z("Popover.Overlay"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(p),v=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.useOpenClosed)(),c=(()=>v!==null?v===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open:t===0)(),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(i=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_6__.isDisabledReactIssue7711)(i.currentTarget))return i.preventDefault();o({type:1})}),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t===0}),[t]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:a,id:R,"aria-hidden":!0,onClick:M},theirProps:O,slot:T,defaultTag:Ge,features:we,visible:c,name:"Popover.Overlay"})}),Ne="div",Ke=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,Ue=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:R=`headlessui-popover-panel-${C}`,focus:O=!1,...t}=r,[o,a]=Z("Popover.Panel"),{close:v,isPortalled:c}=ue("Popover.Panel"),M=`headlessui-focus-sentinel-before-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)()}`,T=`headlessui-focus-sentinel-after-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)()}`,d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(d,p,s=>{a({type:4,panel:s})}),u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_12__.useOwnerDocument)(d);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_19__.useIsoMorphicEffect)(()=>(a({type:5,panelId:R}),()=>{a({type:5,panelId:null})}),[R,a]);let f=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.useOpenClosed)(),g=(()=>f!==null?f===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open:o.popoverState===0)(),y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(s=>{var m;switch(s.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Escape:if(o.popoverState!==0||!d.current||(u==null?void 0:u.activeElement)&&!d.current.contains(u.activeElement))return;s.preventDefault(),s.stopPropagation(),a({type:1}),(m=o.button)==null||m.focus();break}});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var s;r.static||o.popoverState===1&&((s=r.unmount)!=null?s:!0)&&a({type:4,panel:null})},[o.popoverState,r.unmount,r.static,a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!O||o.popoverState!==0||!d.current)return;let s=u==null?void 0:u.activeElement;d.current.contains(s)||(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(d.current,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First)},[O,d,o.popoverState]);let L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.popoverState===0,close:v}),[o,v]),I={ref:i,id:R,onKeyDown:y,onBlur:O&&o.popoverState===0?s=>{var E,P,x,e,l;let m=s.relatedTarget;!m||!d.current||(E=d.current)!=null&&E.contains(m)||(a({type:1}),(((x=(P=o.beforePanelSentinel.current)==null?void 0:P.contains)==null?void 0:x.call(P,m))||((l=(e=o.afterPanelSentinel.current)==null?void 0:e.contains)==null?void 0:l.call(e,m)))&&m.focus({preventScroll:!0}))}:void 0,tabIndex:-1},F=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.useTabDirection)(),j=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{let s=d.current;if(!s)return;function m(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(F.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:()=>{var P;(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(s,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error&&((P=o.afterPanelSentinel.current)==null||P.focus())},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:()=>{var E;(E=o.button)==null||E.focus({preventScroll:!0})}})}m()}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{let s=d.current;if(!s)return;function m(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(F.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:()=>{var A;if(!o.button)return;let E=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.getFocusableElements)(),P=E.indexOf(o.button),x=E.slice(0,P+1),l=[...E.slice(P+1),...x];for(let b of l.slice())if(b.dataset.headlessuiFocusGuard==="true"||((A=o.panel)==null?void 0:A.contains(b))){let G=l.indexOf(b);G!==-1&&l.splice(G,1)}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First,{sorted:!1})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:()=>{var P;(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(s,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Previous)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error&&((P=o.button)==null||P.focus())}})}m()});return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(pe.Provider,{value:R},g&&c&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{id:M,ref:o.beforePanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:j}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:I,theirProps:t,slot:L,defaultTag:Ne,features:Ke,visible:g,name:"Popover.Panel"}),g&&c&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{id:T,ref:o.afterPanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h}))}),We="div",je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(C,p),[O,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(u=>{t(f=>{let g=f.indexOf(u);if(g!==-1){let y=f.slice();return y.splice(g,1),y}return f})}),a=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(u=>(t(f=>[...f,u]),()=>o(u))),v=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{var g;let u=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_11__.getOwnerDocument)(C);if(!u)return!1;let f=u.activeElement;return(g=C.current)!=null&&g.contains(f)?!0:O.some(y=>{var L,I;return((L=u.getElementById(y.buttonId.current))==null?void 0:L.contains(f))||((I=u.getElementById(y.panelId.current))==null?void 0:I.contains(f))})}),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(u=>{for(let f of O)f.buttonId.current!==u&&f.close()}),M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:a,unregisterPopover:o,isFocusWithinPopoverGroup:v,closeOthers:c}),[a,o,v,c]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),d=r,i={ref:R};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(se.Provider,{value:M},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:i,theirProps:d,slot:T,defaultTag:We,name:"Popover.Group"}))}),Rt=Object.assign(De,{Button:ke,Overlay:_e,Panel:Ue,Group:je});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/portal/portal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/portal/portal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": () => (/* binding */ $)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function x(i){let u=(0,_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_4__.usePortalRoot)(),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(A),e=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__.useOwnerDocument)(i),[r,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{if(!u&&o!==null||_utils_env_js__WEBPACK_IMPORTED_MODULE_9__.env.isServer)return null;let n=e==null?void 0:e.getElementById("headlessui-portal-root");if(n)return n;if(e===null)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{u||o!==null&&f(o.current)},[o,f,u]),r}let _=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,U=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(u,o){let e=u,r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)((0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.optionalRef)(a=>{r.current=a}),o),n=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__.useOwnerDocument)(r),t=x(r),[l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var a;return _utils_env_js__WEBPACK_IMPORTED_MODULE_9__.env.isServer?null:(a=n==null?void 0:n.createElement("div"))!=null?a:null}),b=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_5__.useServerHandoffComplete)(),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{if(p.current=!1,!(!t||!l))return t.contains(l)||(l.setAttribute("data-headlessui-portal",""),t.appendChild(l)),()=>{p.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_8__.microTask)(()=>{var a;!p.current||!t||!l||(l instanceof Node&&t.contains(l)&&t.removeChild(l),t.childNodes.length<=0&&((a=t.parentElement)==null||a.removeChild(t)))})}},[t,l]),b?!t||!l?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:f},theirProps:e,defaultTag:_,name:"Portal"}),l):null}),j=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,A=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(u,o){let{target:e,...r}=u,n={ref:(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(o)};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A.Provider,{value:e},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:n,theirProps:r,defaultTag:j,name:"Popover.Group"}))}),$=Object.assign(U,{Group:F});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroup": () => (/* binding */ ut)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-flags.js */ "./node_modules/@headlessui/react/dist/hooks/use-flags.js");
/* harmony import */ var _components_label_label_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/label/label.js */ "./node_modules/@headlessui/react/dist/components/label/label.js");
/* harmony import */ var _components_description_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-tree-walker.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
var he=(t=>(t[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t))(he||{});let ke={[0](n,r){let t=[...n.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...n,options:(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.sortByDomNode)(t,d=>d.element.current)}},[1](n,r){let t=n.options.slice(),d=n.options.findIndex(c=>c.id===r.id);return d===-1?n:(t.splice(d,1),{...n,options:t})}},$=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);$.displayName="RadioGroupDataContext";function ne(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($);if(r===null){let t=new Error(`<${n} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return r}let V=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);V.displayName="RadioGroupActionsContext";function ie(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(V);if(r===null){let t=new Error(`<${n} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ie),t}return r}function Fe(n,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(r.type,ke,n,r)}let Le="div",Ce=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(r,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:c=`headlessui-radiogroup-${d}`,value:D,defaultValue:O,name:I,onChange:E,by:G=(e,i)=>e===i,disabled:h=!1,...U}=r,T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(typeof G=="string"?(e,i)=>{let o=G;return(e==null?void 0:e[o])===(i==null?void 0:i[o])}:G),[k,F]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Fe,{options:[]}),a=k.options,[M,N]=(0,_components_label_label_js__WEBPACK_IMPORTED_MODULE_8__.useLabels)(),[m,L]=(0,_components_description_description_js__WEBPACK_IMPORTED_MODULE_9__.useDescriptions)(),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),W=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_11__.useSyncRefs)(C,t),[l,x]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_16__.useControllable)(D,E,O),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>a.find(e=>!e.propsRef.current.disabled),[a]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>a.some(e=>T(e.propsRef.current.value,l)),[a,l]),u=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{var o;if(h||T(e,l))return!1;let i=(o=a.find(f=>T(f.propsRef.current.value,e)))==null?void 0:o.propsRef.current;return i!=null&&i.disabled?!1:(x==null||x(e),!0)});(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_10__.useTreeWalker)({container:C.current,accept(e){return e.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});let K=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{let i=C.current;if(!i)return;let o=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_14__.getOwnerDocument)(i),f=a.filter(p=>p.propsRef.current.disabled===!1).map(p=>p.element.current);switch(e.key){case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Enter:(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_13__.attemptSubmit)(e.currentTarget);break;case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.ArrowLeft:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.WrapAround)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.FocusResult.Success){let y=a.find(j=>j.element.current===(o==null?void 0:o.activeElement));y&&u(y.propsRef.current.value)}break;case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.ArrowRight:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.Focus.WrapAround)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_6__.FocusResult.Success){let y=a.find(j=>j.element.current===(o==null?void 0:o.activeElement));y&&u(y.propsRef.current.value)}break;case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:{e.preventDefault(),e.stopPropagation();let p=a.find(y=>y.element.current===(o==null?void 0:o.activeElement));p&&u(p.propsRef.current.value)}break}}),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>(F({type:0,...e}),()=>F({type:1,id:e.id}))),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({value:l,firstOption:s,containsCheckedOption:b,disabled:h,compare:T,...k}),[l,s,b,h,T,k]),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerOption:w,change:u}),[w,u]),ae={ref:W,id:c,role:"radiogroup","aria-labelledby":M,"aria-describedby":m,onKeyDown:K},le=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({value:l}),[l]),_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),pe=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_19__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!_.current||O!==void 0&&pe.addEventListener(_.current,"reset",()=>{u(O)})},[_,u]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(N,{name:"RadioGroup.Label"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(V.Provider,{value:S},react__WEBPACK_IMPORTED_MODULE_0___default().createElement($.Provider,{value:R},I!=null&&l!=null&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_13__.objectToFormEntries)({[I]:l}).map(([e,i],o)=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__.Features.Hidden,ref:o===0?f=>{var p;_.current=(p=f==null?void 0:f.closest("form"))!=null?p:null}:void 0,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.compact)({key:e,as:"input",type:"radio",checked:i!=null,hidden:!0,readOnly:!0,name:e,value:i})})),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:ae,theirProps:U,slot:le,defaultTag:Le,name:"RadioGroup"})))))});var xe=(t=>(t[t.Empty=1]="Empty",t[t.Active=2]="Active",t))(xe||{});let we="div",Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(r,t){var w;let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:c=`headlessui-radiogroup-option-${d}`,value:D,disabled:O=!1,...I}=r,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),G=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_11__.useSyncRefs)(E,t),[h,U]=(0,_components_label_label_js__WEBPACK_IMPORTED_MODULE_8__.useLabels)(),[T,k]=(0,_components_description_description_js__WEBPACK_IMPORTED_MODULE_9__.useDescriptions)(),{addFlag:F,removeFlag:a,hasFlag:M}=(0,_hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_7__.useFlags)(1),N=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_18__.useLatestValue)({value:D,disabled:O}),m=ne("RadioGroup.Option"),L=ie("RadioGroup.Option");(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>L.registerOption({id:c,element:E,propsRef:N}),[c,L,E,r]);let C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(R=>{var S;if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_17__.isDisabledReactIssue7711)(R.currentTarget))return R.preventDefault();!L.change(D)||(F(2),(S=E.current)==null||S.focus())}),W=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(R=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_17__.isDisabledReactIssue7711)(R.currentTarget))return R.preventDefault();F(2)}),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>a(2)),x=((w=m.firstOption)==null?void 0:w.id)===c,s=m.disabled||O,b=m.compare(m.value,D),u={ref:G,id:c,role:"radio","aria-checked":b?"true":"false","aria-labelledby":h,"aria-describedby":T,"aria-disabled":s?!0:void 0,tabIndex:(()=>s?-1:b||!m.containsCheckedOption&&x?0:-1)(),onClick:s?void 0:C,onFocus:s?void 0:W,onBlur:s?void 0:l},K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:b,disabled:s,active:M(2)}),[b,s,M]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(k,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(U,{name:"RadioGroup.Label"},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:u,theirProps:I,slot:K,defaultTag:we,name:"RadioGroup.Option"})))}),ut=Object.assign(Ce,{Option:Ie,Label:_components_label_label_js__WEBPACK_IMPORTED_MODULE_8__.Label,Description:_components_description_description_js__WEBPACK_IMPORTED_MODULE_9__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/switch/switch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/switch/switch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Switch": () => (/* binding */ Pe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _label_label_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../label/label.js */ "./node_modules/@headlessui/react/dist/components/label/label.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);b.displayName="GroupContext";let Y=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Z(y){let[t,a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[s,m]=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_5__.useLabels)(),[c,o]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_6__.useDescriptions)(),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({switch:t,setSwitch:a,labelledby:s,describedby:c}),[t,a,s,c]),d={},h=y;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(o,{name:"Switch.Description"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(m,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(b.Provider,{value:p},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:d,theirProps:h,defaultTag:Y,name:"Switch.Group"}))))}let ee="button",te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(t,a){let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:m=`headlessui-switch-${s}`,checked:c,defaultChecked:o=!1,onChange:p,name:d,value:h,...v}=t,r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(b),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),k=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(u,a,r===null?null:r.setSwitch),[n,i]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_12__.useControllable)(c,p,o),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(()=>i==null?void 0:i(!n)),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(e=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_4__.isDisabledReactIssue7711)(e.currentTarget))return e.preventDefault();e.preventDefault(),T()}),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(e=>{e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_3__.Keys.Space?(e.preventDefault(),T()):e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_3__.Keys.Enter&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_10__.attemptSubmit)(e.currentTarget)}),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(e=>e.preventDefault()),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:n}),[n]),R={id:m,ref:k,role:"switch",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_7__.useResolveButtonType)(t,u),tabIndex:0,"aria-checked":n,"aria-labelledby":r==null?void 0:r.labelledby,"aria-describedby":r==null?void 0:r.describedby,onClick:g,onKeyUp:C,onKeyPress:D},A=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_13__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var E;let e=(E=u.current)==null?void 0:E.closest("form");!e||o!==void 0&&A.addEventListener(e,"reset",()=>{i(o)})},[u,i]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,d!=null&&n&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Features.Hidden,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.compact)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n,name:d,value:h})}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:R,theirProps:v,slot:L,defaultTag:ee,name:"Switch"}))}),Pe=Object.assign(te,{Group:Z,Label:_label_label_js__WEBPACK_IMPORTED_MODULE_5__.Label,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_6__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/tabs/tabs.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": () => (/* binding */ Xe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/focus-sentinel.js */ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/stable-collection.js */ "./node_modules/@headlessui/react/dist/utils/stable-collection.js");
var ce=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(ce||{}),pe=(l=>(l[l.Less=-1]="Less",l[l.Equal=0]="Equal",l[l.Greater=1]="Greater",l))(pe||{}),fe=(n=>(n[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n))(fe||{});let be={[0](e,t){var T;let r=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.sortByDomNode)(e.tabs,o=>o.current),l=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.sortByDomNode)(e.panels,o=>o.current),i=r.filter(o=>{var R;return!((R=o.current)!=null&&R.hasAttribute("disabled"))}),n={...e,tabs:r,panels:l};if(t.index<0||t.index>r.length-1){let o=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(Math.sign(t.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});return i.length===0?n:{...n,selectedIndex:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(o,{[0]:()=>r.indexOf(i[0]),[1]:()=>r.indexOf(i[i.length-1])})}}let c=r.slice(0,t.index),x=[...r.slice(t.index),...c].find(o=>i.includes(o));if(!x)return n;let f=(T=r.indexOf(x))!=null?T:e.selectedIndex;return f===-1&&(f=e.selectedIndex),{...n,selectedIndex:f}},[1](e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],l=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.sortByDomNode)([...e.tabs,t.tab],c=>c.current),i=(n=l.indexOf(r))!=null?n:e.selectedIndex;return i===-1&&(i=e.selectedIndex),{...e,tabs:l,selectedIndex:i}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.sortByDomNode)([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},z=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);z.displayName="TabsDataContext";function v(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(z);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,v),r}return t}let V=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);V.displayName="TabsActionsContext";function J(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(V);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,J),r}return t}function Te(e,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(t.type,be,e,t)}let me=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Pe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(t,r){let{defaultIndex:l=0,vertical:i=!1,manual:n=!1,onChange:c,selectedIndex:d=null,...x}=t;const f=i?"vertical":"horizontal",T=n?"manual":"auto";let o=d!==null,R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(r),[s,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Te,{selectedIndex:d!=null?d:l,tabs:[],panels:[]}),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:s.selectedIndex}),[s.selectedIndex]),m=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_9__.useLatestValue)(c||(()=>{})),A=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_9__.useLatestValue)(s.tabs),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({orientation:f,activation:T,...s}),[f,T,s]),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(u=>(p({type:1,tab:u}),()=>p({type:2,tab:u}))),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(u=>(p({type:3,panel:u}),()=>p({type:4,panel:u}))),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(u=>{w.current!==u&&m.current(u),o||p({type:0,index:u})}),w=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_9__.useLatestValue)(o?t.selectedIndex:s.selectedIndex),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerTab:h,registerPanel:L,change:I}),[]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{p({type:0,index:d!=null?d:l})},[d]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{if(w.current===void 0||s.tabs.length<=0)return;let u=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.sortByDomNode)(s.tabs,a=>a.current);u.some((a,b)=>s.tabs[b]!==a)&&I(u.indexOf(s.tabs[w.current]))});let W={ref:R};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_15__.StableCollection,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(V.Provider,{value:B},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z.Provider,{value:E},E.tabs.length<=0&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_10__.FocusSentinel,{onFocus:()=>{var u,D;for(let a of A.current)if(((u=a.current)==null?void 0:u.tabIndex)===0)return(D=a.current)==null||D.focus(),!0;return!1}}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:W,theirProps:x,slot:y,defaultTag:me,name:"Tabs"}))))}),ge="div",xe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(t,r){let{orientation:l,selectedIndex:i}=v("Tab.List"),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(r);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:{ref:n,role:"tablist","aria-orientation":l},theirProps:t,slot:{selectedIndex:i},defaultTag:ge,name:"Tabs.List"})}),ye="button",Ae=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(t,r){var u,D;let l=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:i=`headlessui-tabs-tab-${l}`,...n}=t,{orientation:c,activation:d,selectedIndex:x,tabs:f,panels:T}=v("Tab"),o=J("Tab"),R=v("Tab"),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(s,r);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>o.registerTab(s),[o,s]);let y=(0,_utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_15__.useStableCollectionIndex)("tabs"),m=f.indexOf(s);m===-1&&(m=y);let A=m===x,E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(a=>{var N;let b=a();if(b===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Success&&d==="auto"){let K=(N=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_14__.getOwnerDocument)(s))==null?void 0:N.activeElement,Q=R.tabs.findIndex(re=>re.current===K);Q!==-1&&o.change(Q)}return b}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(a=>{let b=f.map(K=>K.current).filter(Boolean);if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.Space||a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.Enter){a.preventDefault(),a.stopPropagation(),o.change(m);return}switch(a.key){case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.Home:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.PageUp:return a.preventDefault(),a.stopPropagation(),E(()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(b,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First));case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.End:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.PageDown:return a.preventDefault(),a.stopPropagation(),E(()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(b,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Last))}if(E(()=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(c,{vertical(){return a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.ArrowUp?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(b,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.WrapAround):a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.ArrowDown?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(b,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.WrapAround):_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error},horizontal(){return a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.ArrowLeft?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(b,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.WrapAround):a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.ArrowRight?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(b,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.WrapAround):_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error}}))===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Success)return a.preventDefault()}),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(()=>{var a;L.current||(L.current=!0,(a=s.current)==null||a.focus(),o.change(m),(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__.microTask)(()=>{L.current=!1}))}),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_11__.useEvent)(a=>{a.preventDefault()}),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:A}),[A]),W={ref:p,onKeyDown:h,onMouseDown:w,onClick:I,id:i,role:"tab",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_8__.useResolveButtonType)(t,s),"aria-controls":(D=(u=T[m])==null?void 0:u.current)==null?void 0:D.id,"aria-selected":A,tabIndex:A?0:-1};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:W,theirProps:n,slot:B,defaultTag:ye,name:"Tabs.Tab"})}),Ee="div",Re=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(t,r){let{selectedIndex:l}=v("Tab.Panels"),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(r),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:l}),[l]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:{ref:i},theirProps:t,slot:n,defaultTag:Ee,name:"Tabs.Panels"})}),Le="div",Ie=_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.Features.Static,Se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(t,r){var E,h,L,I;let l=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:i=`headlessui-tabs-panel-${l}`,tabIndex:n=0,...c}=t,{selectedIndex:d,tabs:x,panels:f}=v("Tab.Panel"),T=J("Tab.Panel"),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(o,r);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>T.registerPanel(o),[T,o]);let s=(0,_utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_15__.useStableCollectionIndex)("panels"),p=f.indexOf(o);p===-1&&(p=s);let y=p===d,m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:y}),[y]),A={ref:R,id:i,role:"tabpanel","aria-labelledby":(h=(E=x[p])==null?void 0:E.current)==null?void 0:h.id,tabIndex:y?n:-1};return!y&&((L=c.unmount)!=null?L:!0)&&!((I=c.static)!=null&&I)?react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__.Hidden,{as:"span",...A}):(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:A,theirProps:c,slot:m,defaultTag:Le,features:Ie,visible:y,name:"Tabs.Panel"})}),Xe=Object.assign(Ae,{Group:Pe,List:xe,Panels:Re,Panel:Se});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustScrollbarPadding": () => (/* binding */ c)
/* harmony export */ });
function c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleIOSLocking": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
function p(){if(!(0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_0__.isIOS)())return{};let o;return{before(){o=window.pageYOffset},after({doc:r,d:l,meta:s}){function i(e){return s.containers.flatMap(t=>t()).some(t=>t.contains(e))}l.style(r.body,"marginTop",`-${o}px`),window.scrollTo(0,0);let n=null;l.addEventListener(r,"click",e=>{if(e.target instanceof HTMLElement)try{let t=e.target.closest("a");if(!t)return;let{hash:c}=new URL(t.href),a=r.querySelector(c);a&&!i(a)&&(n=a)}catch{}},!0),l.addEventListener(r,"touchmove",e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+o),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overflows": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/store.js */ "./node_modules/@headlessui/react/dist/utils/store.js");
/* harmony import */ var _adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust-scrollbar-padding.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js");
/* harmony import */ var _handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-ios-locking.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js");
/* harmony import */ var _prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prevent-scroll.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js");
function m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a=(0,_utils_store_js__WEBPACK_IMPORTED_MODULE_1__.createStore)(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m(t)},c=[(0,_handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_3__.handleIOSLocking)(),(0,_adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_2__.adjustScrollbarPadding)(),(0,_prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__.preventScroll)()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});a.subscribe(()=>{let e=a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a.dispatch("TEARDOWN",t)}});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preventScroll": () => (/* binding */ l)
/* harmony export */ });
function l(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDocumentOverflowLockedEffect": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-store.js */ "./node_modules/@headlessui/react/dist/hooks/use-store.js");
/* harmony import */ var _overflow_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overflow-store.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js");
function p(e,r,n){let f=(0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_1__.useStore)(_overflow_store_js__WEBPACK_IMPORTED_MODULE_2__.overflows),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_0__.useIsoMorphicEffect)(()=>{if(!(!e||!r))return _overflow_store_js__WEBPACK_IMPORTED_MODULE_2__.overflows.dispatch("PUSH",e,n),()=>_overflow_store_js__WEBPACK_IMPORTED_MODULE_2__.overflows.dispatch("POP",e,n)},[r,e]),i}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-computed.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-computed.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useComputed": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function i(e,o){let[u,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>t(r.current),[r,t,...o]),u}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-controllable.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useControllable": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=l!==void 0,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e||s(n),r==null?void 0:r(n)))]}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisposables": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDocumentEvent": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function d(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEventListener": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function E(n,e,a,t){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(a);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEvent": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-flags.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-flags.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFlags": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function b(g=0){let[r,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(g),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a|e),[r]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>Boolean(r&e),[r]),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a&~e),[l]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a^e),[l]);return{addFlag:u,hasFlag:n,removeFlag:o,toggleFlag:s}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
var o;let I=(o=(react__WEBPACK_IMPORTED_MODULE_0___default().useId))!=null?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0___default().useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_3__.env.nextId():null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{e===null&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_3__.env.nextId())},[e]),e!=null?""+e:void 0};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-inert-others.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInertOthers": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let i=new Set,r=new Map;function u(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function l(t){let n=r.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert)}function M(t,n=!0){(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!n||!t.current)return;let o=t.current,a=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(o);if(!!a){i.add(o);for(let e of r.keys())e.contains(o)&&(l(e),r.delete(e));return a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let f of i)if(e.contains(f))return;i.size===1&&(r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e))}}),()=>{if(i.delete(o),i.size>0)a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!r.has(e)){for(let f of i)if(e.contains(f))return;r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e)}});else for(let e of r.keys())l(e),r.delete(e)}}},[n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMounted": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsoMorphicEffect": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLatestValue": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOutsideClick": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
function L(m,E,c=!0){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{requestAnimationFrame(()=>{i.current=c})},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(n!==null&&!!n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(n,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)&&n.tabIndex!==-1&&e.preventDefault(),E(e,n)}}let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("click",e=>{!u.current||(f(e,()=>u.current),u.current=null)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOwnerDocument": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServerHandoffComplete": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function l(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete===!1&&f(!1),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.handoff(),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-store.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-store.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStore": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../use-sync-external-store-shim/index.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js");
function S(t){return (0,_use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionalRef": () => (/* binding */ T),
/* harmony export */   "useSyncRefs": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => (/* binding */ s),
/* harmony export */   "useTabDirection": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
var s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s||{});function n(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_1__.useWindowEvent)("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTrackedPointer": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(r){e.current=t(r)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTreeWalker": () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o.current=t,l.current=r},[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-watch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWatch": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowEvent": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/focus-sentinel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusSentinel": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hidden_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
function p({onFocus:n}){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return r?react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_1__.Hidden,{as:"button",type:"button",features:_hidden_js__WEBPACK_IMPORTED_MODULE_1__.Features.Focusable,onFocus:a=>{a.preventDefault();let e,u=50;function t(){if(u--<=0){e&&cancelAnimationFrame(e);return}if(n()){o(!1),cancelAnimationFrame(e);return}e=requestAnimationFrame(t)}e=requestAnimationFrame(t)}}):null}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ s),
/* harmony export */   "Hidden": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let a="div";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(function(t,o){let{features:e=1,...r}=t,d={ref:o,"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)({ourProps:d,theirProps:r,slot:{},defaultTag:a,name:"Hidden"})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenClosedProvider": () => (/* binding */ C),
/* harmony export */   "State": () => (/* binding */ p),
/* harmony export */   "useOpenClosed": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var p=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(p||{});function s(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(o.Provider,{value:t},n)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/portal-force-root.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcePortalRoot": () => (/* binding */ P),
/* harmony export */   "usePortalRoot": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function l(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function P(o){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(e.Provider,{value:o.force},o.children)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/stack-context.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/stack-context.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackMessage": () => (/* binding */ s),
/* harmony export */   "StackProvider": () => (/* binding */ M),
/* harmony export */   "useStackContext": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});a.displayName="StackContext";var s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(s||{});function x(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a)}function M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((...t)=>{r==null||r(...t),l(...t)});return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(a.Provider,{value:o},i)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncExternalStore": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useSyncExternalStoreShimClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSyncExternalStoreShimClient.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js");
/* harmony import */ var _useSyncExternalStoreShimServer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSyncExternalStoreShimServer.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js");
const r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",s=!r,c=s?_useSyncExternalStoreShimServer_js__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore:_useSyncExternalStoreShimClient_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore,a="useSyncExternalStore" in react__WEBPACK_IMPORTED_MODULE_0__?(n=>n.useSyncExternalStore)(react__WEBPACK_IMPORTED_MODULE_0__):c;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncExternalStore": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const d=typeof Object.is=="function"?Object.is:i,{useState:u,useEffect:h,useLayoutEffect:f,useDebugValue:p}=react__WEBPACK_IMPORTED_MODULE_0__;let S=!1,_=!1;function y(e,t,c){const a=t(),[{inst:n},o]=u({inst:{value:a,getSnapshot:t}});return f(()=>{n.value=a,n.getSnapshot=t,r(n)&&o({inst:n})},[e,a,t]),h(()=>(r(n)&&o({inst:n}),e(()=>{r(n)&&o({inst:n})})),[e]),p(a),a}function r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!d(c,a)}catch{return!0}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncExternalStore": () => (/* binding */ t)
/* harmony export */ });
function t(r,e,n){return e()}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisabledReactIssue7711": () => (/* binding */ r)
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/calculate-active-index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": () => (/* binding */ a),
/* harmony export */   "calculateActiveIndex": () => (/* binding */ x)
/* harmony export */ });
function f(r){throw new Error("Unexpected object: "+r)}var a=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(a||{});function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=l!=null?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>s!==-1&&u.length-c-1>=s?!1:!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 2:return t.findIndex((e,i)=>i<=s?!1:!n.resolveDisabled(e));case 3:{let e=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:f(r)}})();return d===-1?l:d}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/class-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/class-names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": () => (/* binding */ e)
/* harmony export */ });
function e(...n){return n.filter(Boolean).join(" ")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disposables": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function m(){let a=[],i=[],r={enqueue(e){i.push(e)},addEventListener(e,t,n,s){return e.addEventListener(t,n,s),r.add(()=>e.removeEventListener(t,n,s))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},add(e){return a.push(e),()=>{let t=a.indexOf(e);if(t>=0){let[n]=a.splice(t,1);n()}}},dispose(){for(let e of a.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()},style(e,t,n){let s=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:s})})}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/env.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/env.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "env": () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": () => (/* binding */ L),
/* harmony export */   "FocusResult": () => (/* binding */ N),
/* harmony export */   "FocusableMode": () => (/* binding */ F),
/* harmony export */   "focusElement": () => (/* binding */ S),
/* harmony export */   "focusFrom": () => (/* binding */ v),
/* harmony export */   "focusIn": () => (/* binding */ I),
/* harmony export */   "getFocusableElements": () => (/* binding */ E),
/* harmony export */   "isFocusableElement": () => (/* binding */ h),
/* harmony export */   "restoreFocusIfNecessary": () => (/* binding */ g),
/* harmony export */   "sortByDomNode": () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L=(r=>(r[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r))(L||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),T=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(T||{});function E(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(F||{});function h(e,t=0){var n;return e===((n=(0,_owner_js__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(e))==null?void 0:n.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t,{[0](){return e.matches(f)},[1](){let l=e;for(;l!==null;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function g(e){let t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)().nextFrame(()=>{t&&!h(t.activeElement,0)&&S(e)})}function S(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function w(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?n:!1}function A(e,t=n=>n){return e.slice().sort((n,l)=>{let o=t(n),i=t(l);if(o===null||i===null)return 0;let r=o.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function v(e,t){return I(E(),t,{relativeTo:e})}function I(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,r=Array.isArray(e)?n?A(e):e:E(e);o.length>0&&r.length>1&&(r=r.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(l))-1;if(t&4)return Math.max(0,r.indexOf(l))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},c=0,a=r.length,u;do{if(c>=a||c+a<=0)return 0;let s=x+c;if(t&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=r[s],u==null||u.focus(p),c+=d}while(u!==i.activeElement);return t&6&&w(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attemptSubmit": () => (/* binding */ p),
/* harmony export */   "objectToFormEntries": () => (/* binding */ e)
/* harmony export */ });
function e(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))f(t,s(r,i),o);return t}function s(n,r){return n?n+"["+r+"]":r}function f(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f(n,s(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):typeof t=="boolean"?n.push([r,t?"1":"0"]):typeof t=="string"?n.push([r,t]):typeof t=="number"?n.push([r,`${t}`]):t==null?n.push([r,""]):e(t,r,n)}function p(n){var t;let r=(t=n==null?void 0:n.form)!=null?t:n.closest("form");if(!!r){for(let i of r.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "microTask": () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOwnerDocument": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function e(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.env.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/platform.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/platform.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIOS": () => (/* binding */ o)
/* harmony export */ });
function o(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ j),
/* harmony export */   "RenderStrategy": () => (/* binding */ w),
/* harmony export */   "compact": () => (/* binding */ P),
/* harmony export */   "forwardRefWithAs": () => (/* binding */ V),
/* harmony export */   "render": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var j=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(j||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:l}){let o=h(t,r);if(n)return m(o,e,a,l);let u=s!=null?s:0;if(u&2){let{static:i=!1,...d}=o;if(i)return m(d,e,a,l)}if(u&1){let{unmount:i=!0,...d}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i?0:1,{[0](){return null},[1](){return m({...d,hidden:!0,style:{display:"none"}},e,a,l)}})}return m(o,e,a,l)}function m(r,t={},e,a){var y;let{as:s=e,children:n,refName:l="ref",...o}=T(r,["unmount","static"]),u=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;o.className&&typeof o.className=="function"&&(o.className=o.className(t));let d={};if(t){let f=!1,c=[];for(let[p,F]of Object.entries(t))typeof F=="boolean"&&(f=!0),F===!0&&c.push(p);f&&(d["data-headlessui-state"]=c.join(" "))}if(s===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(P(o)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let f=(0,_class_names_js__WEBPACK_IMPORTED_MODULE_1__.classNames)((y=i.props)==null?void 0:y.className,o.className),c=f?{className:f}:{};return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},h(i.props,P(T(o,["ref"]))),d,u,O(i.ref,u.ref),c))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(s,Object.assign({},T(o,["ref"]),s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function O(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function h(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...l){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function V(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function P(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function T(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/stable-collection.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/stable-collection.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StableCollection": () => (/* binding */ C),
/* harmony export */   "useStableCollectionIndex": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const s=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function a(){return{groups:new Map,get(n,t){var c;let e=this.groups.get(n);e||(e=new Map,this.groups.set(n,e));let l=(c=e.get(t))!=null?c:0;e.set(t,l+1);let o=Array.from(e.keys()).indexOf(t);function i(){let u=e.get(t);u>1?e.set(t,u-1):e.delete(t)}return[o,i]}}}function C({children:n}){let t=react__WEBPACK_IMPORTED_MODULE_0__.useRef(a());return react__WEBPACK_IMPORTED_MODULE_0__.createElement(s.Provider,{value:t},n)}function d(n){let t=react__WEBPACK_IMPORTED_MODULE_0__.useContext(s);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let e=f(),[l,o]=t.current.get(n,e);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>o,[]),l}function f(){var l,o,i;let n=(i=(o=(l=react__WEBPACK_IMPORTED_MODULE_0__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:l.ReactCurrentOwner)==null?void 0:o.current)!=null?i:null;if(!n)return Symbol();let t=[],e=n;for(;e;)t.push(e.index),e=e.return;return"$."+t.join(".")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/start-transition.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/start-transition.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startTransition": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var t;let a=(t=(react__WEBPACK_IMPORTED_MODULE_0___default().startTransition))!=null?t:function(i){i()};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/store.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/store.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ a)
/* harmony export */ });
function a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}


/***/ }),

/***/ "./src/_app/shared/CommandPalette.tsx":
/*!********************************************!*\
  !*** ./src/_app/shared/CommandPalette.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommandPalette)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/combobox/combobox.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/className */ "./src/_app/shared/utils/className.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var projects = [{
  id: 1,
  name: "Workflow Inc. / Website Redesign",
  category: "Projects",
  url: "#"
}
// More projects...
];

var users = [{
  id: 1,
  name: "Leslie Alexander",
  url: "#",
  imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}
// More users...
];

function CommandPalette(props) {
  var openPalette = props.openPalette,
    setOpenPalette = props.setOpenPalette;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    rawQuery = _useState2[0],
    setRawQuery = _useState2[1];
  var query = rawQuery.toLowerCase().replace(/^[#>]/, "");
  var filteredProjects = rawQuery === "#" ? projects : query === "" || rawQuery.startsWith(">") ? [] : projects.filter(function (project) {
    return project.name.toLowerCase().includes(query);
  });
  var filteredUsers = rawQuery === ">" ? users : query === "" || rawQuery.startsWith("#") ? [] : users.filter(function (user) {
    return user.name.toLowerCase().includes(query);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
    show: openPalette,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    afterLeave: function afterLeave() {
      return setRawQuery("");
    },
    appear: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
    as: 'div',
    className: 'relative z-10',
    onClose: setOpenPalette
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
    className: 'mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox
  //   onChange={(item) => (window.location = item.url)}
  , null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__.MagnifyingGlassIcon, {
    className: 'pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Input, {
    className: 'h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm',
    placeholder: 'Search...',
    onChange: function onChange(event) {
      return setRawQuery(event.target.value);
    }
  })), (filteredProjects.length > 0 || filteredUsers.length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Options, {
    "static": true,
    className: 'max-h-80 scroll-py-10 scroll-py-10 scroll-pb-2 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2'
  }, filteredProjects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: 'text-xs font-semibold text-gray-900'
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: '-mx-4 mt-2 text-sm text-gray-700'
  }, filteredProjects.map(function (project) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Option, {
      key: project.id,
      value: project,
      className: function className(_ref) {
        var active = _ref.active;
        return (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(active ? "flex cursor-default select-none items-center px-4 py-2" : "flex cursor-default select-none items-center px-4 py-2 bg-indigo-600 text-white");
      }
    }, function (_ref2) {
      var active = _ref2.active;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.FolderIcon, {
        className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("h-6 w-6 flex-none", active ? "text-white" : "text-gray-400"),
        "aria-hidden": 'true'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: 'ml-3 flex-auto truncate'
      }, project.name));
    });
  }))), filteredUsers.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: 'text-xs font-semibold text-gray-900'
  }, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: '-mx-4 mt-2 text-sm text-gray-700'
  }, filteredUsers.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Option, {
      key: user.id,
      value: user,
      className: function className(_ref3) {
        var active = _ref3.active;
        return (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(active ? "flex cursor-default select-none items-center px-4 py-2" : "flex cursor-default select-none items-center px-4 py-2 bg-indigo-600 text-white");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: user.imageUrl,
      alt: '',
      className: 'h-6 w-6 flex-none rounded-full'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'ml-3 flex-auto truncate'
    }, user.name));
  })))), rawQuery === "?" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'py-14 px-6 text-center text-sm sm:px-14'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.LifebuoyIcon, {
    className: 'mx-auto h-6 w-6 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-4 font-semibold text-gray-900'
  }, "Help with searching"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-2 text-gray-500'
  }, "Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects.")), query !== "" && rawQuery !== "?" && filteredProjects.length === 0 && filteredUsers.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'py-14 px-6 text-center text-sm sm:px-14'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.ExclamationTriangleIcon, {
    className: 'mx-auto h-6 w-6 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-4 font-semibold text-gray-900'
  }, "No results found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-2 text-gray-500'
  }, "We couldn\u2019t find anything with that term. Please try again.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700'
  }, "Type", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery.startsWith("#") ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900")
  }, "#"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sm:hidden'
  }, "for projects,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'hidden sm:inline'
  }, "to access projects,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery.startsWith(">") ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900")
  }, ">"), " ", "for users, and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery === "?" ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900")
  }, "?"), " ", "for help.")))))));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/FlyoutMenu.tsx":
/*!****************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/FlyoutMenu.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentAppContext": () => (/* binding */ CurrentAppContext),
/* harmony export */   "default": () => (/* binding */ FlyoutMenu),
/* harmony export */   "solutions": () => (/* binding */ solutions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/className */ "./src/_app/shared/utils/className.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var solutions = [{
  name: "Channels Engine",
  description: "Get a better understanding of where your traffic is coming from.",
  href: "/channels",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ChartBarIcon
}, {
  name: "Retail/Loan Engine",
  description: "Speak directly to your customers in a more meaningful way.",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CursorArrowRaysIcon
}, {
  name: "Security",
  description: "Your customers' data will be safe and secure.",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ShieldCheckIcon
}, {
  name: "CRM/Helpdesk Engine",
  description: "Connect with third-party tools that you're already using.",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Squares2X2Icon
}, {
  name: "Performance Insights",
  description: "Build strategic funnels that will drive your customers to convert",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowPathIcon
}];
var callsToAction = [{
  name: "Watch Demo",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.PlayIcon
}, {
  name: "Contact Sales",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon
}];
var CurrentAppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function FlyoutMenu() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentApp = _React$useState2[0],
    setCurrentApp = _React$useState2[1];
  var handleSwitch = function handleSwitch(name) {
    localStorage.setItem("currentApp", name);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentAppContext.Provider, {
    value: currentApp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    className: 'relative'
  }, function (_ref) {
    var open = _ref.open;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:pl-12")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Choose an application ", currentApp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"),
      "aria-hidden": 'true'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      enter: 'transition ease-out duration-200',
      enterFrom: 'opacity-0 translate-y-1',
      enterTo: 'opacity-100 translate-y-0',
      leave: 'transition ease-in duration-150',
      leaveFrom: 'opacity-100 translate-y-0',
      leaveTo: 'opacity-0 translate-y-1'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {
      className: 'absolute md:left-64 left-32 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'
    }, solutions.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        key: item.name,
        href: item.href,
        onClick: function onClick() {
          return handleSwitch(item.href.slice(1));
        },
        className: '-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {
        className: 'h-6 w-6 flex-shrink-0 text-indigo-600',
        "aria-hidden": 'true'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: 'ml-4'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: 'text-base font-medium text-gray-900'
      }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: 'mt-1 text-sm text-gray-500'
      }, item.description)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'
    }, callsToAction.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: item.name,
        className: 'flow-root'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: item.href,
        className: '-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-100'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {
        className: 'h-6 w-6 flex-shrink-0 text-gray-400',
        "aria-hidden": 'true'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: 'ml-3'
      }, item.name)));
    }))))));
  }));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/MobileSidebar.tsx":
/*!*******************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/MobileSidebar.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/className */ "./src/_app/shared/utils/className.tsx");
/* harmony import */ var _ChannelsMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ChannelsMenu */ "./src/_app/shared/ChannelsMenu.tsx");
/* harmony import */ var _SidebarSecondary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SidebarSecondary */ "./src/_app/shared/SidebarSecondary.tsx");







function MobileSidebar(props) {
  var show = props.show,
    toggle = props.toggle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {
    show: show,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    as: 'div',
    className: 'relative z-40 md:hidden',
    onClose: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'transition-opacity ease-linear duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity ease-linear duration-300',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 bg-gray-600 bg-opacity-75'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 z-40 flex'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'transition ease-in-out duration-300 transform',
    enterFrom: '-translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transition ease-in-out duration-300 transform',
    leaveFrom: 'translate-x-0',
    leaveTo: '-translate-x-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Panel, {
    className: 'relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-in-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in-out duration-300',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute top-0 right-0 -mr-12 pt-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
    onClick: function onClick() {
      return toggle(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Close sidebar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.XMarkIcon, {
    className: 'h-6 w-6 text-white',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-shrink-0 items-center px-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-auto',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    alt: 'Your Company'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-5 h-0 flex-1 overflow-y-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: 'space-y-1 px-2'
  }, _ChannelsMenu__WEBPACK_IMPORTED_MODULE_2__.navigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(item.current ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900", "group flex items-center px-2 py-2 text-base font-medium rounded-md")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"),
      "aria-hidden": 'true'
    }), item.name);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SidebarSecondary__WEBPACK_IMPORTED_MODULE_3__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'w-14 flex-shrink-0',
    "aria-hidden": 'true'
  }))));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/Topbar.tsx":
/*!************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/Topbar.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Topbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var _FlyoutMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlyoutMenu */ "./src/_app/shared/MasterLayout/components/FlyoutMenu.tsx");
/* harmony import */ var _CommandPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommandPalette */ "./src/_app/shared/CommandPalette.tsx");
/* harmony import */ var _SlideOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SlideOver */ "./src/_app/shared/SlideOver.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// import SlideOver from '../../../../components/SlideOver';



function Topbar() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    openPalette = _React$useState4[0],
    setOpenPalette = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState("profile"),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    content = _React$useState6[0],
    setContent = _React$useState6[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-1 justify-between px-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex w-full md:ml-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center w-full text-gray-400 focus-within:text-gray-600'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FlyoutMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'ml-4 flex items-center md:ml-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpenPalette(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.MagnifyingGlassIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpen(true);
      setContent("messages");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "View messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.EnvelopeIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpen(true);
      setContent("notifications");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "View notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.BellIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    as: 'div',
    className: 'relative ml-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Button, {
    className: 'flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpen(true);
      setContent("profile");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Open user menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-8 rounded-full',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SlideOver__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    setOpen: setOpen,
    content: content
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CommandPalette__WEBPACK_IMPORTED_MODULE_2__["default"], {
    openPalette: openPalette,
    setOpenPalette: setOpenPalette
  })))));
}

/***/ }),

/***/ "./src/_app/shared/Profile.tsx":
/*!*************************************!*\
  !*** ./src/_app/shared/Profile.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");



// import { useNavigate } from "react-router-dom";
function Profile() {
  // let navigate = useNavigate();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pb-1 sm:pb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "relative h-40 sm:h-56"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "absolute h-full w-full object-cover",
    src: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sm:flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "text-xl font-bold text-gray-900 sm:text-2xl"
  }, "Ashley Porter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Online"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-sm text-gray-500"
  }, "@ashleyporter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return location.href = "/settings";
    },
    type: "button",
    className: "inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
  }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return location.href = "/user/signin";
    },
    type: "button",
    className: "inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Sign Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ml-3 inline-flex sm:ml-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    as: "div",
    className: "relative inline-block text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
    className: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Copy profile link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__.LinkIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-4 pt-5 pb-5 sm:px-0 sm:pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", {
    className: "space-y-8 px-4 sm:space-y-6 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, "New York, NY, USA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, "ashleyporter.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Birthday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("time", {
    dateTime: "1988-06-23"
  }, "June 23, 1988"))))));
}

/***/ }),

/***/ "./src/_app/shared/SlideOver.tsx":
/*!***************************************!*\
  !*** ./src/_app/shared/SlideOver.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideOver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feed */ "./src/_app/shared/Feed.tsx");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ "./src/_app/shared/Profile.tsx");
/* harmony import */ var _FeedStandardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedStandardList */ "./src/_app/shared/FeedStandardList.tsx");







var slideOverContents = [{
  name: "messages",
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FeedStandardList__WEBPACK_IMPORTED_MODULE_3__["default"], null)
}, {
  name: "notifications",
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Feed__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  name: "profile",
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}];
function SlideOver(props) {
  var _a;
  var open = props.open,
    setOpen = props.setOpen,
    content = props.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {
    show: open,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
    as: 'div',
    className: 'relative z-10',
    onClose: setOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-in-out duration-500',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in-out duration-500',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 overflow-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute inset-0 overflow-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'transform transition ease-in-out duration-500 sm:duration-700',
    enterFrom: 'translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transform transition ease-in-out duration-500 sm:duration-700',
    leaveFrom: 'translate-x-0',
    leaveTo: 'translate-x-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Panel, {
    className: 'pointer-events-auto relative w-screen max-w-md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-in-out duration-500',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in-out duration-500',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white',
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Close panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.XMarkIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 sm:px-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Title, {
    className: 'text-lg font-medium text-gray-900'
  }, "Panel title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative mt-6 flex-1 px-4 sm:px-6'
  }, (_a = slideOverContents.find(function (item) {
    return item.name === content;
  })) === null || _a === void 0 ? void 0 : _a.component)))))))));
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instance": () => (/* binding */ instance)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
/* harmony import */ var piral_page_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral-page-layouts */ "./node_modules/piral-page-layouts/esm/create.js");
/* harmony import */ var _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app/shared/components/layouts/default */ "./src/_app/shared/components/layouts/default.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






// change to your feed URL here (either using feed.piral.cloud or your own service)
var feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
var instance = (0,piral__WEBPACK_IMPORTED_MODULE_4__.createInstance)({
  state: {
    components: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.layout,
    errorComponents: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.errors
    // routes: {
    //   "/": Landing,
    // },
  },

  plugins: [].concat(_toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_4__.createStandardApi)()), [(0,piral_page_layouts__WEBPACK_IMPORTED_MODULE_5__.createPageLayoutsApi)()]),
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
});
(0,_app_app__WEBPACK_IMPORTED_MODULE_2__.setupShell)(instance.root);
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector("#app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_4__.Piral, {
  instance: instance
}));

/***/ }),

/***/ "./src/landing/components/Hero.tsx":
/*!*****************************************!*\
  !*** ./src/landing/components/Hero.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var navigation = [{
  name: "Product",
  href: "#"
}, {
  name: "Features",
  href: "#"
}, {
  name: "Marketplace",
  href: "#"
}, {
  name: "Company",
  href: "#"
}];
var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative overflow-hidden bg-gray-800'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'hidden sm:absolute sm:inset-0 sm:block',
    "aria-hidden": 'true'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none',
    width: 364,
    height: 384,
    viewBox: '0 0 364 384',
    fill: 'none'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pattern", {
    id: 'eab71dd9-9d7a-47bd-8044-256344ee00d0',
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: 'userSpaceOnUse'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    fill: 'currentColor'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: 364,
    height: 384,
    fill: 'url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative pt-6 pb-16 sm:pb-24'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: 'relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6',
    "aria-label": 'Global'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-1 items-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex w-full items-center justify-between md:w-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Your Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-auto sm:h-10',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
    alt: ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: '-mr-2 flex items-center md:hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
    className: 'focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Open main menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Bars3Icon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'hidden space-x-10 md:ml-10 md:flex'
  }, navigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: 'font-medium text-white hover:text-gray-300'
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'hidden md:flex'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/login',
    className: 'inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700'
  }, "Log in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'duration-150 ease-out',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'duration-100 ease-in',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
    focus: true,
    className: 'absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center justify-between px-5 pt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-auto',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    alt: ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: '-mr-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
    className: 'inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Close menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.XMarkIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'space-y-1 px-2 pt-2 pb-3'
  }, navigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: 'block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/',
    className: 'block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100'
  }, "Log in"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: 'mt-16 sm:mt-24'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mx-auto max-w-7xl'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'lg:grid lg:grid-cols-12 lg:gap-8'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white'
  }, "We're hiring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'ml-4 text-sm'
  }, "Visit our careers page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__.ChevronRightIcon, {
    className: 'ml-2 h-5 w-5 text-gray-500',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: 'mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'
  }, "Data to enrich your online business"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'
  }, "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-8 text-base font-semibold text-white sm:mt-10'
  }, "Used by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-wrap items-start justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-center px-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-9 sm:h-10',
    src: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
    alt: 'Tuple'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-center px-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-9 sm:h-10',
    src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
    alt: 'Workcation'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-center px-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-9 sm:h-10',
    src: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    alt: 'StaticKit'
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-16 sm:mt-24 lg:col-span-6 lg:mt-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 py-8 sm:px-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-sm font-medium text-gray-700'
  }, "Sign in with"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-1 grid grid-cols-3 gap-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Sign in with Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'h-5 w-5',
    "aria-hidden": 'true',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: 'evenodd',
    d: 'M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z',
    clipRule: 'evenodd'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Sign in with Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'h-5 w-5',
    "aria-hidden": 'true',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: 'M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Sign in with GitHub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'h-5 w-5',
    "aria-hidden": 'true',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: 'evenodd',
    d: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z',
    clipRule: 'evenodd'
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative mt-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute inset-0 flex items-center',
    "aria-hidden": 'true'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'w-full border-t border-gray-300'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative flex justify-center text-sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'bg-white px-2 text-gray-500'
  }, "Or"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: '/',
    method: 'POST',
    className: 'space-y-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'name',
    className: 'sr-only'
  }, "Full name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: 'text',
    name: 'name',
    id: 'name',
    autoComplete: 'name',
    placeholder: 'Full name',
    required: true,
    className: 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'mobile-or-email',
    className: 'sr-only'
  }, "Mobile number or email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: 'text',
    name: 'mobile-or-email',
    id: 'mobile-or-email',
    autoComplete: 'email',
    placeholder: 'Mobile number or email',
    required: true,
    className: 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'password',
    className: 'sr-only'
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    autoComplete: 'current-password',
    required: true,
    className: 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'submit',
    className: 'flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/sign-up'
  }, "Create your account")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-xs leading-5 text-gray-500'
  }, "By signing up, you agree to our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'font-medium text-gray-900 hover:underline'
  }, "Terms"), ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'font-medium text-gray-900 hover:underline'
  }, "Data Policy"), " ", "and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'font-medium text-gray-900 hover:underline'
  }, "Cookies Policy"), ".")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./node_modules/client-only/index.js":
/*!*******************************************!*\
  !*** ./node_modules/client-only/index.js ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/formik/dist/formik.esm.js":
/*!************************************************!*\
  !*** ./node_modules/formik/dist/formik.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessage": () => (/* binding */ ErrorMessage),
/* harmony export */   "FastField": () => (/* binding */ FastField),
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "FieldArray": () => (/* binding */ FieldArray),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Formik": () => (/* binding */ Formik),
/* harmony export */   "FormikConsumer": () => (/* binding */ FormikConsumer),
/* harmony export */   "FormikContext": () => (/* binding */ FormikContext),
/* harmony export */   "FormikProvider": () => (/* binding */ FormikProvider),
/* harmony export */   "connect": () => (/* binding */ connect),
/* harmony export */   "getActiveElement": () => (/* binding */ getActiveElement),
/* harmony export */   "getIn": () => (/* binding */ getIn),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isEmptyChildren": () => (/* binding */ isEmptyChildren),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isInputEvent": () => (/* binding */ isInputEvent),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isNaN": () => (/* binding */ isNaN$1),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "move": () => (/* binding */ move),
/* harmony export */   "prepareDataForValidation": () => (/* binding */ prepareDataForValidation),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "setIn": () => (/* binding */ setIn),
/* harmony export */   "setNestedObjectValues": () => (/* binding */ setNestedObjectValues),
/* harmony export */   "swap": () => (/* binding */ swap),
/* harmony export */   "useField": () => (/* binding */ useField),
/* harmony export */   "useFormik": () => (/* binding */ useFormik),
/* harmony export */   "useFormikContext": () => (/* binding */ useFormikContext),
/* harmony export */   "validateYupSchema": () => (/* binding */ validateYupSchema),
/* harmony export */   "withFormik": () => (/* binding */ withFormik),
/* harmony export */   "yupToFormErrors": () => (/* binding */ yupToFormErrors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ "./node_modules/formik/node_modules/deepmerge/dist/es.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/isPlainObject'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/clone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/toPath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/cloneDeep'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());










function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/** @private is the value an empty array? */

var isEmptyArray = function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
/** @private is the given object an Object? */

var isObject = function isObject(obj) {
  return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */

var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */
// eslint-disable-next-line no-self-compare

var isNaN$1 = function isNaN(obj) {
  return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */

var isEmptyChildren = function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0;
};
/** @private is the given object/value a promise? */

var isPromise = function isPromise(value) {
  return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */

var isInputEvent = function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
/**
 * Deeply get a value from an object via its path.
 */

function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }

  var path = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/toPath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(key);

  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }

  return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

function setIn(obj, path, value) {
  var res = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/clone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/toPath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path);

  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/clone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current


  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */

function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }

  if (response === void 0) {
    response = {};
  }

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];

    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true); // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }

        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}

var FormikContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormikContext);
  !!!formik ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : 0 : void 0;
  return formik;
}

function formikReducer(state, msg) {
  switch (msg.type) {
    case 'SET_VALUES':
      return _extends({}, state, {
        values: msg.payload
      });

    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: msg.payload
      });

    case 'SET_ERRORS':
      if (react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(state.errors, msg.payload)) {
        return state;
      }

      return _extends({}, state, {
        errors: msg.payload
      });

    case 'SET_STATUS':
      return _extends({}, state, {
        status: msg.payload
      });

    case 'SET_ISSUBMITTING':
      return _extends({}, state, {
        isSubmitting: msg.payload
      });

    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: msg.payload
      });

    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_TOUCHED':
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_ERROR':
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });

    case 'RESET_FORM':
      return _extends({}, state, msg.payload);

    case 'SET_FORMIK_STATE':
      return msg.payload(state);

    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });

    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });

    default:
      return state;
  }
} // Initial empty states // objects


var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange,
      validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange,
      _ref$validateOnBlur = _ref.validateOnBlur,
      validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur,
      _ref$validateOnMount = _ref.validateOnMount,
      validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount,
      isInitialValid = _ref.isInitialValid,
      _ref$enableReinitiali = _ref.enableReinitialize,
      enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali,
      onSubmit = _ref.onSubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);

  var props = _extends({
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    validateOnMount: validateOnMount,
    onSubmit: onSubmit
  }, rest);

  var initialValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialValues);
  var initialErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialErrors || emptyErrors);
  var initialTouched = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialTouched || emptyTouched);
  var initialStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialStatus);
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var fieldRegistry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !(typeof isInitialValid === 'undefined') ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : 0 : void 0; // eslint-disable-next-line
    }, []);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);

  var _React$useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var runValidateHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values, field) {
    return new Promise(function (resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);

      if (maybePromisedErrors == null) {
        // use loose null check here on purpose
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function (errors) {
          resolve(errors || emptyErrors);
        }, function (actualException) {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }

          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  /**
   * Run validation against a Yup schema and optionally run a function if successful
   */

  var runValidationSchema = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function (resolve, reject) {
      promise.then(function () {
        resolve(emptyErrors);
      }, function (err) {
        // Yup will throw a validation error if validation fails. We catch those and
        // resolve them into Formik errors. We can sniff if something is a Yup error
        // by checking error.name.
        // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
          resolve(yupToFormErrors(err));
        } else {
          // We throw any other errors
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }

          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (field, value) {
    return new Promise(function (resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function (f) {
      return isFunction(fieldRegistry.current[f].validate);
    }); // Construct an array with all of the field validation functions

    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function (f) {
      return runSingleFieldLevelValidation(f, getIn(values, f));
    }) : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')]; // use special case ;)

    return Promise.all(fieldValidations).then(function (fieldErrorsList) {
      return fieldErrorsList.reduce(function (prev, curr, index) {
        if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
          return prev;
        }

        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }

        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]); // Run all validations and return the result

  var runAllValidations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function (_ref2) {
      var fieldErrors = _ref2[0],
          schemaErrors = _ref2[1],
          validateErrors = _ref2[2];
      var combinedErrors = deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"].all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge: arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]); // Run all validations methods and update state accordingly

  var validateFormWithHighPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    dispatch({
      type: 'SET_ISVALIDATING',
      payload: true
    });
    return runAllValidations(values).then(function (combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
        dispatch({
          type: 'SET_ERRORS',
          payload: combinedErrors
        });
      }

      return combinedErrors;
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (validateOnMount && isMounted.current === true && react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;

    var dispatchFn = function dispatchFn() {
      dispatch({
        type: 'RESET_FORM',
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors: errors,
          touched: touched,
          status: status,
          values: values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
        }
      });
    };

    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);

      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
      }

      if (validateOnMount) {
        validateFormWithHighPriority(initialValues.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: 'SET_ERRORS',
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: 'SET_TOUCHED',
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: 'SET_STATUS',
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function (name) {
    // This will efficiently validate a single field by avoiding state
    // changes if the validation function is synchronous. It's different from
    // what is called when using validateForm.
    if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);

      if (isPromise(maybePromise)) {
        // Only flip isValidating if the function is async.
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: true
        });
        return maybePromise.then(function (x) {
          return x;
        }).then(function (error) {
          dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: 'SET_ISVALIDATING',
            payload: false
          });
        });
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: 'SET_ISVALIDATING',
        payload: true
      });
      return runValidationSchema(state.values, name).then(function (x) {
        return x;
      }).then(function (error) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
      });
    }

    return Promise.resolve();
  });
  var registerField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate
    };
  }, []);
  var unregisterField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function (touched, shouldValidate) {
    dispatch({
      type: 'SET_TOUCHED',
      payload: touched
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (errors) {
    dispatch({
      type: 'SET_ERRORS',
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = isFunction(values) ? values(state.values) : values;
    dispatch({
      type: 'SET_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (field, value) {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field: field,
        value: value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (eventOrTextValue, maybePath) {
    // By default, assume that the first argument is a string. This allows us to use
    // handleChange with React Native and React Native Web's onChangeText prop which
    // provides just the value of the input.
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
    // so we handle like we would a normal HTML change event.

    if (!isString(eventOrTextValue)) {
      // If we can, persist the event
      // @see https://reactjs.org/docs/events.html#event-pooling
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }

      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type,
          name = target.name,
          id = target.id,
          value = target.value,
          checked = target.checked,
          outerHTML = target.outerHTML,
          options = target.options,
          multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;

      if (!field && "development" !== "production") {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
          handlerName: 'handleChange'
        });
      }

      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
      ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple // <select multiple>
      ? getSelectedValues(options) : value;
    }

    if (field) {
      // Set form fields by name
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrPath) {
    if (isString(eventOrPath)) {
      return function (event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }

    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e, path) {
    if (e.persist) {
      e.persist();
    }

    var _e$target = e.target,
        name = _e$target.name,
        id = _e$target.id,
        outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;

    if (!field && "development" !== "production") {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: 'handleblur-e-any--void',
        handlerName: 'handleBlur'
      });
    }

    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (isString(eventOrString)) {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (status) {
    dispatch({
      type: 'SET_STATUS',
      payload: status
    });
  }, []);
  var setSubmitting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (isSubmitting) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function () {
    dispatch({
      type: 'SUBMIT_ATTEMPT'
    });
    return validateFormWithHighPriority().then(function (combinedErrors) {
      // In case an error was thrown and passed to the resolved Promise,
      // `combinedErrors` can be an instance of an Error. We need to check
      // that and abort the submit.
      // If we don't do that, calling `Object.keys(new Error())` yields an
      // empty array, which causes the validation to pass and the form
      // to be submitted.
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;

      if (isActuallyValid) {
        // Proceed with submit...
        //
        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
        // This would be fine in simple cases, but make it impossible to disable submit
        // buttons where people use callbacks or promises as side effects (which is basically
        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
        // cleanup of isSubmitting on behalf of the consumer.
        var promiseOrUndefined;

        try {
          promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
          // via setSubmitting(false)

          if (promiseOrUndefined === undefined) {
            return;
          }
        } catch (error) {
          throw error;
        }

        return Promise.resolve(promiseOrUndefined).then(function (result) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_SUCCESS'
            });
          }

          return result;
        })["catch"](function (_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_FAILURE'
            }); // This is a legit error rejected by the onSubmit fn
            // so we don't want to break the promise chain

            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        // ^^^ Make sure Formik is still mounted before updating state
        dispatch({
          type: 'SUBMIT_FAILURE'
        }); // throw combinedErrors;

        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }

      return;
    });
  });
  var handleSubmit = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    } // Warn if form submission is triggered by a <button> without a
    // specified `type` attribute during development. This mitigates
    // a common gotcha in forms with both reset and submit buttons,
    // where the dev forgets to add type="button" to the reset button.


    if ( true && typeof document !== 'undefined') {
      // Safely get the active element (works with IE)
      var activeElement = getActiveElement();

      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : 0 : void 0;
      }
    }

    submitForm()["catch"](function (reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm: resetForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    setErrors: setErrors,
    setFieldError: setFieldError,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    setFormikState: setFormikState,
    submitForm: submitForm
  };
  var executeSubmit = useEventCallback(function () {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }

    resetForm();
  });
  var getFieldMeta = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nameOrOptions) {
    var isAnObject = isObject(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name: name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };

    if (isAnObject) {
      var type = nameOrOptions.type,
          valueProp = nameOrOptions.value,
          is = nameOrOptions.as,
          multiple = nameOrOptions.multiple;

      if (type === 'checkbox') {
        if (valueProp === undefined) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === 'radio') {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === 'select' && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }

    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);

  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleReset: handleReset,
    handleSubmit: handleSubmit,
    resetForm: resetForm,
    setErrors: setErrors,
    setFormikState: setFormikState,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    submitForm: submitForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    isValid: isValid,
    dirty: dirty,
    unregisterField: unregisterField,
    registerField: registerField,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    validateOnMount: validateOnMount
  });

  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component,
      children = props.children,
      render = props.render,
      innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(innerRef, function () {
    return formikbag;
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !!props.render ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : 0 : void 0; // eslint-disable-next-line
    }, []);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormikProvider, {
    value: formikbag
  }, component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, formikbag) : render ? render(formikbag) : children // children come last, always called
  ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children) : null : null);
}

function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent,
      documentationAnchorLink = _ref4.documentationAnchorLink,
      handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */


function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }

    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }

      var err = _ref5;

      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }

  return errors;
}
/**
 * Validate a yup schema.
 */

function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }

  if (context === void 0) {
    context = {};
  }

  var validateData = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](validateData, {
    abortEarly: false,
    context: context
  });
}
/**
 * Recursively prepare values.
 */

function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};

  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);

      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function (value) {
          if (Array.isArray(value) === true || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/isPlainObject'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/isPlainObject'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }

  return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */

function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === 'undefined') {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? (0,deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = (0,deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
/** Return multi select values based on an array of options */


function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
}
/** Return the next value for a checkbox */


function getValueForCheckbox(currentValue, checked, valueProp) {
  // If the current value was a boolean, return a boolean
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  } // If the currentValue was not a boolean we want to return an array


  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;

  if (!Array.isArray(currentValue)) {
    // eslint-disable-next-line eqeqeq
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    // If the current value is already an array, use it
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values


  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values


  if (!isValueInArray) {
    return currentArrayOfValues;
  } // If the checkbox was unchecked and the value is in the array, remove the value and return the array


  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useEventCallback(fn) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

function useField(propsOrFieldName) {
  var formik = useFormikContext();
  var getFieldProps = formik.getFieldProps,
      getFieldMeta = formik.getFieldMeta,
      getFieldHelpers = formik.getFieldHelpers,
      registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>

  var props = isAnObject ? propsOrFieldName : {
    name: propsOrFieldName
  };
  var fieldName = props.name,
      validateFn = props.validate;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (fieldName) {
      registerField(fieldName, {
        validate: validateFn
      });
    }

    return function () {
      if (fieldName) {
        unregisterField(fieldName);
      }
    };
  }, [registerField, unregisterField, fieldName, validateFn]);

  if (true) {
    !formik ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : 0 : void 0;
  }

  !fieldName ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : 0 : void 0;
  return [getFieldProps(props), getFieldMeta(fieldName), getFieldHelpers(fieldName)];
}
function Field(_ref) {
  var validate = _ref.validate,
      name = _ref.name,
      render = _ref.render,
      children = _ref.children,
      is = _ref.as,
      component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["validate", "name", "render", "children", "as", "component"]);

  var _useFormikContext = useFormikContext(),
      formik = _objectWithoutPropertiesLoose(_useFormikContext, ["validate", "validationSchema"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !!render ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : 0 : void 0;
      !!(is && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : 0 : void 0;
      !!(component && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : 0 : void 0;
      !!(render && children && !isEmptyChildren(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : 0 : void 0; // eslint-disable-next-line
    }, []);
  } // Register field and field-level validation with parent <Formik>


  var registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    registerField(name, {
      validate: validate
    });
    return function () {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);
  var field = formik.getFieldProps(_extends({
    name: name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field: field,
    form: formik
  };

  if (render) {
    return render(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (isFunction(children)) {
    return children(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (component) {
    // This behavior is backwards compat with earlier Formik 0.9 to 1.x
    if (typeof component === 'string') {
      var innerRef = props.innerRef,
          rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
        ref: innerRef
      }, field, rest), children);
    } // We don't pass `meta` for backwards compat


    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
      field: field,
      form: formik
    }, props), children);
  } // default to input here so we can check for both `as` and `children` above


  var asElement = is || 'input';

  if (typeof asElement === 'string') {
    var _innerRef = props.innerRef,
        _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({
      ref: _innerRef
    }, field, _rest), children);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({}, field, props), children);
}

var Form = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
  // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
  var action = props.action,
      rest = _objectWithoutPropertiesLoose(props, ["action"]);

  var _action = action != null ? action : '#';

  var _useFormikContext = useFormikContext(),
      handleReset = _useFormikContext.handleReset,
      handleSubmit = _useFormikContext.handleSubmit;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", Object.assign({
    onSubmit: handleSubmit,
    ref: ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = 'Form';

/**
 * A public higher-order component to access the imperative API
 */

function withFormik(_ref) {
  var _ref$mapPropsToValues = _ref.mapPropsToValues,
      mapPropsToValues = _ref$mapPropsToValues === void 0 ? function (vanillaProps) {
    var val = {};

    for (var k in vanillaProps) {
      if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
        // @todo TypeScript fix
        val[k] = vanillaProps[k];
      }
    }

    return val;
  } : _ref$mapPropsToValues,
      config = _objectWithoutPropertiesLoose(_ref, ["mapPropsToValues"]);

  return function createFormik(Component$1) {
    var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
    /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */

    var C = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(C, _React$Component);

      function C() {
        var _this;

        _this = _React$Component.apply(this, arguments) || this;

        _this.validate = function (values) {
          return config.validate(values, _this.props);
        };

        _this.validationSchema = function () {
          return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
        };

        _this.handleSubmit = function (values, actions) {
          return config.handleSubmit(values, _extends({}, actions, {
            props: _this.props
          }));
        };
        /**
         * Just avoiding a render callback for perf here
         */


        _this.renderFormComponent = function (formikProps) {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component$1, Object.assign({}, _this.props, formikProps));
        };

        return _this;
      }

      var _proto = C.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
            props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Formik, Object.assign({}, props, config, {
          validate: config.validate && this.validate,
          validationSchema: config.validationSchema && this.validationSchema,
          initialValues: mapPropsToValues(this.props),
          initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
          initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
          initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
          onSubmit: this.handleSubmit,
          children: this.renderFormComponent
        }));
      };

      return C;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

    C.displayName = "WithFormik(" + componentDisplayName + ")";
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(C, Component$1 // cast type to ComponentClass (even if SFC)
    );
  };
}

/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */

function connect(Comp) {
  var C = function C(props) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormikConsumer, null, function (formik) {
      !!!formik ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : 0 : void 0;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, Object.assign({}, props, {
        formik: formik
      }));
    });
  };

  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
  // For example, <Field.WrappedComponent /> gets us <FieldInner/>

  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(C, Comp // cast type to ComponentClass (even if SFC)
  );
}

/**
 * Some array helpers!
 */

var move = function move(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};

var copyArrayLike = function copyArrayLike(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function (key) {
      return parseInt(key);
    }).reduce(function (max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};

var FieldArrayInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FieldArrayInner, _React$Component);

  function FieldArrayInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.updateArrayField = function (fn, alterTouched, alterErrors) {
      var _this$props = _this.props,
          name = _this$props.name,
          setFormikState = _this$props.formik.setFormikState;
      setFormikState(function (prevState) {
        var updateErrors = typeof alterErrors === 'function' ? alterErrors : fn;
        var updateTouched = typeof alterTouched === 'function' ? alterTouched : fn; // values fn should be executed before updateErrors and updateTouched,
        // otherwise it causes an error with unshift.

        var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;

        if (isEmptyArray(fieldError)) {
          fieldError = undefined;
        }

        if (isEmptyArray(fieldTouched)) {
          fieldTouched = undefined;
        }

        return _extends({}, prevState, {
          values: values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };

    _this.push = function (value) {
      return _this.updateArrayField(function (arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/cloneDeep'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)]);
      }, false, false);
    };

    _this.handlePush = function (value) {
      return function () {
        return _this.push(value);
      };
    };

    _this.swap = function (indexA, indexB) {
      return _this.updateArrayField(function (array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };

    _this.handleSwap = function (indexA, indexB) {
      return function () {
        return _this.swap(indexA, indexB);
      };
    };

    _this.move = function (from, to) {
      return _this.updateArrayField(function (array) {
        return move(array, from, to);
      }, true, true);
    };

    _this.handleMove = function (from, to) {
      return function () {
        return _this.move(from, to);
      };
    };

    _this.insert = function (index, value) {
      return _this.updateArrayField(function (array) {
        return insert(array, index, value);
      }, function (array) {
        return insert(array, index, null);
      }, function (array) {
        return insert(array, index, null);
      });
    };

    _this.handleInsert = function (index, value) {
      return function () {
        return _this.insert(index, value);
      };
    };

    _this.replace = function (index, value) {
      return _this.updateArrayField(function (array) {
        return replace(array, index, value);
      }, false, false);
    };

    _this.handleReplace = function (index, value) {
      return function () {
        return _this.replace(index, value);
      };
    };

    _this.unshift = function (value) {
      var length = -1;

      _this.updateArrayField(function (array) {
        var arr = array ? [value].concat(array) : [value];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      });

      return length;
    };

    _this.handleUnshift = function (value) {
      return function () {
        return _this.unshift(value);
      };
    };

    _this.handleRemove = function (index) {
      return function () {
        return _this.remove(index);
      };
    };

    _this.handlePop = function () {
      return function () {
        return _this.pop();
      };
    }; // We need TypeScript generics on these, so we'll bind them in the constructor
    // @todo Fix TS 3.2.1


    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FieldArrayInner.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };

  _proto.remove = function remove(index) {
    // We need to make sure we also remove relevant pieces of `touched` and `errors`
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var copy = array ? copyArrayLike(array) : [];

      if (!result) {
        result = copy[index];
      }

      if (isFunction(copy.splice)) {
        copy.splice(index, 1);
      }

      return copy;
    }, true, true);
    return result;
  };

  _proto.pop = function pop() {
    // Remove relevant pieces of `touched` and `errors` too!
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var tmp = array;

      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }

      return tmp;
    }, true, true);
    return result;
  };

  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };

    var _this$props2 = this.props,
        component = _this$props2.component,
        render = _this$props2.render,
        children = _this$props2.children,
        name = _this$props2.name,
        _this$props2$formik = _this$props2.formik,
        restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name: name
    });

    return component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props) : render ? render(props) : children // children come last, always called
    ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children) : null : null;
  };

  return FieldArrayInner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var FieldArray = /*#__PURE__*/connect(FieldArrayInner);

var ErrorMessageImpl = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorMessageImpl, _React$Component);

  function ErrorMessageImpl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ErrorMessageImpl.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        component = _this$props.component,
        formik = _this$props.formik,
        render = _this$props.render,
        children = _this$props.children,
        name = _this$props.name,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "formik", "render", "children", "name"]);

    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, rest, error) : error : null;
  };

  return ErrorMessageImpl;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var ErrorMessage = /*#__PURE__*/connect(ErrorMessageImpl);

/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */

var FastFieldInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FastFieldInner, _React$Component);

  function FastFieldInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var render = props.render,
        children = props.children,
        component = props.component,
        is = props.as,
        name = props.name;
    !!render ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : 0 : void 0;
    !!(component && render) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : 0 : void 0;
    !!(is && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : 0 : void 0;
    !!(component && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : 0 : void 0;
    !!(render && children && !isEmptyChildren(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : 0 : void 0;
    return _this;
  }

  var _proto = FastFieldInner.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate(props, this.props);
    } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
      return true;
    } else {
      return false;
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
    this.props.formik.registerField(this.props.name, {
      validate: this.props.validate
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }

    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        render = _this$props.render,
        is = _this$props.as,
        children = _this$props.children,
        component = _this$props.component,
        formik = _this$props.formik,
        props = _objectWithoutPropertiesLoose(_this$props, ["validate", "name", "render", "as", "children", "component", "shouldUpdate", "formik"]);

    var restOfFormik = _objectWithoutPropertiesLoose(formik, ["validate", "validationSchema"]);

    var field = formik.getFieldProps(_extends({
      name: name
    }, props));
    var meta = {
      value: getIn(formik.values, name),
      error: getIn(formik.errors, name),
      touched: !!getIn(formik.touched, name),
      initialValue: getIn(formik.initialValues, name),
      initialTouched: !!getIn(formik.initialTouched, name),
      initialError: getIn(formik.initialErrors, name)
    };
    var bag = {
      field: field,
      meta: meta,
      form: restOfFormik
    };

    if (render) {
      return render(bag);
    }

    if (isFunction(children)) {
      return children(bag);
    }

    if (component) {
      // This behavior is backwards compat with earlier Formik 0.9 to 1.x
      if (typeof component === 'string') {
        var innerRef = props.innerRef,
            rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
          ref: innerRef
        }, field, rest), children);
      } // We don't pass `meta` for backwards compat


      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
        field: field,
        form: formik
      }, props), children);
    } // default to input here so we can check for both `as` and `children` above


    var asElement = is || 'input';

    if (typeof asElement === 'string') {
      var _innerRef = props.innerRef,
          _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({
        ref: _innerRef
      }, field, _rest), children);
    }

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({}, field, props), children);
  };

  return FastFieldInner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var FastField = /*#__PURE__*/connect(FastFieldInner);


//# sourceMappingURL=formik.esm.js.map


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/piral-cli-webpack5/src/webpack-hot-middleware/client.js?path=http://localhost:58851/__webpack_hmr&reload=true":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/piral-cli-webpack5/src/webpack-hot-middleware/client.js?path=http://localhost:58851/__webpack_hmr&reload=true ***!
  \************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?path=http://localhost:58851/__webpack_hmr&reload=true";
/* module decorator */ module = __webpack_require__.nmd(module);
/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: '/__webpack_hmr',
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {},
};
if (true) {
  var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
  var overrides = querystring.parse(__resourceQuery.slice(1));
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
      'You should include a polyfill if you want to support this browser: ' +
      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools'
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect)
    options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors)
    options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles)
    options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function() {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function(fn) {
      listeners.push(fn);
    },
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == '\uD83D\uDC93') {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "./node_modules/piral-cli-webpack5/src/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles,
    });
  }

  var styles = {
    errors: 'color: #ff0000;',
    warnings: 'color: #999933;',
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type]
      .map(function(msg) {
        return strip(msg);
      })
      .join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : '';
    var title = '[HMR] bundle ' + name + 'has ' + obj[type].length + ' ' + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group('%c' + title, style);
      console.log('%c' + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        '%c' + title + '\n\t%c' + newProblems.replace(/\n/g, '\n\t'),
        style + 'font-weight: bold;',
        style + 'font-weight: normal;'
      );
    }
  }

  return {
    cleanProblemsCache: function() {
      previousProblems = null;
    },
    problems: function(type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function(customOverlay) {
      overlay = customOverlay;
    },
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "./node_modules/piral-cli-webpack5/src/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch (obj.action) {
    case 'building':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilding'
        );
      }
      break;
    case 'built':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilt in ' +
            obj.time +
            'ms'
        );
      }
    // fall through
    case 'sync':
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect,
  };
}


/***/ }),

/***/ "./node_modules/piral-cli-webpack5/src/webpack-hot-middleware/process-update.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/piral-cli-webpack5/src/webpack-hot-middleware/process-update.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = 'https://webpack.js.org/concepts/hot-module-replacement/'; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = {
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function (data) {
    console.warn(
      'Ignored an update to unaccepted module ' + data.chain.join(' -> ')
    );
  },
  onDeclined: function (data) {
    console.warn(
      'Ignored an update to declined module ' + data.chain.join(' -> ')
    );
  },
  onErrored: function (data) {
    console.error(data.error);
    console.warn(
      'Ignored an error while updating module ' +
        data.moduleId +
        ' (' +
        data.type +
        ')'
    );
  },
};

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function (hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == 'idle') {
    if (options.log) console.log('[HMR] Checking for updates on the server...');
    check();
  }

  function check() {
    var cb = function (err, updatedModules) {
      if (err) return handleError(err);

      if (!updatedModules || !updatedModules.length) {
        if (options.warn) {
          console.warn('[HMR] Cannot find update (Full reload needed)');
          console.warn('[HMR] (Probably because of restarting the server)');
        }
        performReload();
        return null;
      }

      var applyCallback = function (applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function (outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }
    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
      result.then(function (updatedModules) {
        cb(null, updatedModules);
      });
      result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function (moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if (unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
            '(Full reload needed)\n' +
            'This is usually because the modules which have changed ' +
            '(and their parents) do not know how to hot reload themselves. ' +
            'See ' +
            hmrDocsUrl +
            ' for more details.'
        );
        unacceptedModules.forEach(function (moduleId) {
          console.warn('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if (!renewedModules || renewedModules.length === 0) {
        console.log('[HMR] Nothing hot updated.');
      } else {
        console.log('[HMR] Updated modules:');
        renewedModules.forEach(function (moduleId) {
          console.log('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }

      if (upToDate()) {
        console.log('[HMR] App is up to date.');
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn('[HMR] Cannot check for update (Full reload needed)');
        console.warn('[HMR] ' + (err.stack || err.message));
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn('[HMR] Update check failed: ' + (err.stack || err.message));
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn('[HMR] Reloading page');
      window.location.reload();
    }
  }
};


/***/ }),

/***/ "./node_modules/piral/esm/hydrate.js":
/*!*******************************************!*\
  !*** ./node_modules/piral/esm/hydrate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hydrateInstance": () => (/* binding */ hydrateInstance)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ "./node_modules/piral/esm/run.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./node_modules/piral/esm/options.js");



/**
 * Sets up a new Piral instance and hydrates it using the provided options.
 * @param options The options to use when setting up the Piral instance.
 * @deprecated Use `createInstance` with `hydrate` directly.
 * @example
```ts
import { hydrateInstance } from 'piral';
hydrateInstance();
```
 */
function hydrateInstance(options) {
    return (0,_run__WEBPACK_IMPORTED_MODULE_1__.runInstance)((app, selector) => (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate)(app, (0,_options__WEBPACK_IMPORTED_MODULE_2__.getContainer)(selector)), options);
}
//# sourceMappingURL=hydrate.js.map

/***/ }),

/***/ "./node_modules/piral/esm/render.js":
/*!******************************************!*\
  !*** ./node_modules/piral/esm/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderInstance": () => (/* binding */ renderInstance)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./node_modules/piral/esm/options.js");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ "./node_modules/piral/esm/run.js");



/**
 * Sets up a new Piral instance and renders it using the provided options.
 * @param options The options to use when setting up the Piral instance.
 * @deprecated Use `createInstance` with `render` directly.
 * @example
```ts
import { renderInstance } from 'piral';
renderInstance();
```
 */
function renderInstance(options) {
    return (0,_run__WEBPACK_IMPORTED_MODULE_1__.runInstance)((app, selector) => (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.render)(app, (0,_options__WEBPACK_IMPORTED_MODULE_2__.getContainer)(selector)), options);
}
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/piral/esm/run.js":
/*!***************************************!*\
  !*** ./node_modules/piral/esm/run.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runInstance": () => (/* binding */ runInstance)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./node_modules/piral/esm/app.js");


function noChange(config) {
    return config;
}
/**
 * Sets up a new Piral instance and runs it using the provided runner.
 * @param options The options to use when setting up the Piral instance.
 * @deprecated Use `createInstance` with `render` or `hydrate` directly.
 * @example
```ts
import { render } from 'react-dom';
import { runInstance } from 'piral';

runInstance((app, selector) => render(app, document.querySelector(selector)));
```
 */
function runInstance(runner, options = {}) {
    const { selector = '#app', settings, layout, piralChildren, dashboardPath, errors, middleware = noChange } = options, config = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(options, ["selector", "settings", "layout", "piralChildren", "dashboardPath", "errors", "middleware"]);
    const { app, instance } = (0,_app__WEBPACK_IMPORTED_MODULE_1__.getAppInstance)(middleware(config), {
        settings,
        layout,
        errors,
        dashboardPath,
        piralChildren,
    });
    runner(app, selector);
    return instance;
}
//# sourceMappingURL=run.js.map

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (true) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (false) {} else {
  module.exports = Object(function webpackMissingModule() { var e = new Error("Cannot find module './cjs/react-dom.development.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.2.0';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__esDecorate": () => (/* binding */ __esDecorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__propKey": () => (/* binding */ __propKey),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__runInitializers": () => (/* binding */ __runInitializers),
/* harmony export */   "__setFunctionName": () => (/* binding */ __setFunctionName),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/headlessui.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/headlessui.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combobox": () => (/* reexport safe */ _components_combobox_combobox_js__WEBPACK_IMPORTED_MODULE_1__.Combobox),
/* harmony export */   "Dialog": () => (/* reexport safe */ _components_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_2__.Dialog),
/* harmony export */   "Disclosure": () => (/* reexport safe */ _components_disclosure_disclosure_js__WEBPACK_IMPORTED_MODULE_3__.Disclosure),
/* harmony export */   "FocusTrap": () => (/* reexport safe */ _components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_4__.FocusTrap),
/* harmony export */   "Listbox": () => (/* reexport safe */ _components_listbox_listbox_js__WEBPACK_IMPORTED_MODULE_5__.Listbox),
/* harmony export */   "Menu": () => (/* reexport safe */ _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_6__.Menu),
/* harmony export */   "Popover": () => (/* reexport safe */ _components_popover_popover_js__WEBPACK_IMPORTED_MODULE_7__.Popover),
/* harmony export */   "Portal": () => (/* reexport safe */ _components_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__.Portal),
/* harmony export */   "RadioGroup": () => (/* reexport safe */ _components_radio_group_radio_group_js__WEBPACK_IMPORTED_MODULE_9__.RadioGroup),
/* harmony export */   "Switch": () => (/* reexport safe */ _components_switch_switch_js__WEBPACK_IMPORTED_MODULE_10__.Switch),
/* harmony export */   "Tab": () => (/* reexport safe */ _components_tabs_tabs_js__WEBPACK_IMPORTED_MODULE_11__.Tab)
/* harmony export */ });
/* empty/unused harmony star reexport */
/* harmony import */ var client_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client-only */ "./node_modules/client-only/index.js");
/* harmony import */ var _components_combobox_combobox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/combobox/combobox.js */ "./node_modules/@headlessui/react/dist/components/combobox/combobox.js");
/* harmony import */ var _components_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dialog/dialog.js */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _components_disclosure_disclosure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/disclosure/disclosure.js */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js");
/* harmony import */ var _components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/focus-trap/focus-trap.js */ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js");
/* harmony import */ var _components_listbox_listbox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/listbox/listbox.js */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.js */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _components_popover_popover_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/popover/popover.js */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _components_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/portal/portal.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.js");
/* harmony import */ var _components_radio_group_radio_group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/radio-group/radio-group.js */ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js");
/* harmony import */ var _components_switch_switch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/switch/switch.js */ "./node_modules/@headlessui/react/dist/components/switch/switch.js");
/* harmony import */ var _components_tabs_tabs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tabs/tabs.js */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/transitions/transition.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("54422bde46cac6114a19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.db49682fda51b88887d7.hot-update.js.map