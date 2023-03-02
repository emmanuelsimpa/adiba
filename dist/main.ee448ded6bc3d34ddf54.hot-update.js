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
var Fe=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Fe||{}),_e=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(_e||{}),ke=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(ke||{}),we=(i=>(i[i.OpenCombobox=0]="OpenCombobox",i[i.CloseCombobox=1]="CloseCombobox",i[i.GoToOption=2]="GoToOption",i[i.RegisterOption=3]="RegisterOption",i[i.UnregisterOption=4]="UnregisterOption",i[i.RegisterLabel=5]="RegisterLabel",i))(we||{});function ne(t,r=n=>n){let n=t.activeOptionIndex!==null?t.options[t.activeOptionIndex]:null,o=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_17__.sortByDomNode)(r(t.options.slice()),u=>u.dataRef.current.domRef.current),a=n?o.indexOf(n):null;return a===-1&&(a=null),{options:o,activeOptionIndex:a}}let Be={[1](t){return t.dataRef.current.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},[0](t){if(t.dataRef.current.disabled||t.comboboxState===0)return t;let r=t.activeOptionIndex,{isSelected:n}=t.dataRef.current,o=t.options.findIndex(a=>n(a.dataRef.current.value));return o!==-1&&(r=o),{...t,comboboxState:0,activeOptionIndex:r}},[2](t,r){var a;if(t.dataRef.current.disabled||t.dataRef.current.optionsRef.current&&!t.dataRef.current.optionsPropsRef.current.static&&t.comboboxState===1)return t;let n=ne(t);if(n.activeOptionIndex===null){let u=n.options.findIndex(i=>!i.dataRef.current.disabled);u!==-1&&(n.activeOptionIndex=u)}let o=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.calculateActiveIndex)(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...n,activeOptionIndex:o,activationTrigger:(a=r.trigger)!=null?a:1}},[3]:(t,r)=>{let n={id:r.id,dataRef:r.dataRef},o=ne(t,u=>[...u,n]);t.activeOptionIndex===null&&t.dataRef.current.isSelected(r.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(n));let a={...t,...o,activationTrigger:1};return t.dataRef.current.__demoMode&&t.dataRef.current.value===void 0&&(a.activeOptionIndex=0),a},[4]:(t,r)=>{let n=ne(t,o=>{let a=o.findIndex(u=>u.id===r.id);return a!==-1&&o.splice(a,1),o});return{...t,...n,activationTrigger:1}},[5]:(t,r)=>({...t,labelId:r.id})},re=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);re.displayName="ComboboxActionsContext";function Q(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(re);if(r===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Q),n}return r}let ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ae.displayName="ComboboxDataContext";function j(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ae);if(r===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return r}function Ue(t,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(r.type,Be,t,r)}let Ge=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ne(t,r){let{value:n,defaultValue:o,onChange:a,name:u,by:i=(b,m)=>b===m,disabled:d=!1,__demoMode:c=!1,nullable:e=!1,multiple:p=!1,...P}=t,[s=p?[]:void 0,y]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_21__.useControllable)(n,a,o),[T,C]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ue,{dataRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),comboboxState:c?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(typeof i=="string"?(b,m)=>{let A=i;return(b==null?void 0:b[A])===(m==null?void 0:m[A])}:i),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(f.mode,{[1]:()=>s.some(m=>D(m,b)),[0]:()=>D(s,b)}),[s]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...T,optionsPropsRef:R,labelRef:K,inputRef:h,buttonRef:w,optionsRef:B,value:s,defaultValue:o,disabled:d,mode:p?1:0,get activeOptionIndex(){if(g.current&&T.activeOptionIndex===null&&T.options.length>0){let b=T.options.findIndex(m=>!m.dataRef.current.disabled);if(b!==-1)return b}return T.activeOptionIndex},compare:D,isSelected:W,nullable:e,__demoMode:c}),[s,o,d,p,e,c,T]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{T.dataRef.current=f},[f]),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_7__.useOutsideClick)([f.buttonRef,f.inputRef,f.optionsRef],()=>U.closeCombobox(),f.comboboxState===0);let F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:f.comboboxState===0,disabled:d,activeIndex:f.activeOptionIndex,activeOption:f.activeOptionIndex===null?null:f.options[f.activeOptionIndex].dataRef.current.value,value:s}),[f,d,s]),_=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(b=>{let m=f.options.find(A=>A.id===b);!m||V(m.dataRef.current.value)}),O=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{if(f.activeOptionIndex!==null){let{dataRef:b,id:m}=f.options[f.activeOptionIndex];V(b.current.value),U.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,m)}}),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{C({type:0}),g.current=!0}),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{C({type:1}),g.current=!1}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((b,m,A)=>(g.current=!1,b===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific?C({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,id:m,trigger:A}):C({type:2,focus:b,trigger:A}))),X=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((b,m)=>(C({type:3,id:b,dataRef:m}),()=>C({type:4,id:b}))),Y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(b=>(C({type:5,id:b}),()=>C({type:5,id:null}))),V=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(f.mode,{[0](){return y==null?void 0:y(b)},[1](){let m=f.value.slice(),A=m.findIndex($=>D($,b));return A===-1?m.push(b):m.splice(A,1),y==null?void 0:y(m)}})),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({onChange:V,registerOption:X,registerLabel:Y,goToOption:E,closeCombobox:L,openCombobox:l,selectActiveOption:O,selectOption:_}),[]),de=r===null?{}:{ref:r},Z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),ce=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!Z.current||o!==void 0&&ce.addEventListener(Z.current,"reset",()=>{V(o)})},[Z,V]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(re.Provider,{value:U},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ae.Provider,{value:f},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(f.comboboxState,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.State.Closed})},u!=null&&s!=null&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_16__.objectToFormEntries)({[u]:s}).map(([b,m],A)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Features.Hidden,ref:A===0?$=>{var le;Z.current=(le=$==null?void 0:$.closest("form"))!=null?le:null}:void 0,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.compact)({key:b,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:b,value:m})})),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:de,theirProps:P,slot:F,defaultTag:Ge,name:"Combobox"}))))}let He=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(Ne),je="input",Ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){var f,F,_,O;let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-input-${o}`,onChange:u,displayValue:i,type:d="text",...c}=r,e=j("Combobox.Input"),p=Q("Combobox.Input"),P=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(e.inputRef,n),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),y=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)(),T=function(){var l;return typeof i=="function"&&e.value!==void 0?(l=i(e.value))!=null?l:"":typeof e.value=="string"?e.value:""}();(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_22__.useWatch)(([l,L],[E,X])=>{s.current||!e.inputRef.current||(X===0&&L===1||l!==E)&&(e.inputRef.current.value=l)},[T,e.comboboxState]),(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_22__.useWatch)(([l],[L])=>{if(l===0&&L===1){let E=e.inputRef.current;if(!E)return;let X=E.value,{selectionStart:Y,selectionEnd:V,selectionDirection:U}=E;E.value="",E.value=X,U!==null?E.setSelectionRange(Y,V,U):E.setSelectionRange(Y,V)}},[e.comboboxState]);let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{C.current=!0}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{setTimeout(()=>{C.current=!1})}),K=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(l=>{switch(s.current=!0,l.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Backspace:case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Delete:if(e.mode!==0||!e.nullable)return;let L=l.currentTarget;y.requestAnimationFrame(()=>{L.value===""&&(p.onChange(null),e.optionsRef.current&&(e.optionsRef.current.scrollTop=0),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Nothing))});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Enter:if(s.current=!1,e.comboboxState!==0||C.current)return;if(l.preventDefault(),l.stopPropagation(),e.activeOptionIndex===null){p.closeCombobox();return}p.selectActiveOption(),e.mode===0&&p.closeCombobox();break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowDown:return s.current=!1,l.preventDefault(),l.stopPropagation(),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(e.comboboxState,{[0]:()=>{p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Next)},[1]:()=>{p.openCombobox()}});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowUp:return s.current=!1,l.preventDefault(),l.stopPropagation(),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_15__.match)(e.comboboxState,{[0]:()=>{p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Previous)},[1]:()=>{p.openCombobox(),y.nextFrame(()=>{e.value||p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last)})}});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Home:if(l.shiftKey)break;return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.PageUp:return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.End:if(l.shiftKey)break;return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.PageDown:return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Escape:return s.current=!1,e.comboboxState!==0?void 0:(l.preventDefault(),e.optionsRef.current&&!e.optionsPropsRef.current.static&&l.stopPropagation(),p.closeCombobox());case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Tab:if(s.current=!1,e.comboboxState!==0)return;e.mode===0&&p.selectActiveOption(),p.closeCombobox();break}}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(l=>{p.openCombobox(),u==null||u(l)}),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{s.current=!1}),B=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_1__.useComputed)(()=>{if(!!e.labelId)return[e.labelId].join(" ")},[e.labelId]),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:e.comboboxState===0,disabled:e.disabled}),[e]),W={ref:P,id:a,role:"combobox",type:d,"aria-controls":(f=e.optionsRef.current)==null?void 0:f.id,"aria-expanded":e.disabled?void 0:e.comboboxState===0,"aria-activedescendant":e.activeOptionIndex===null||(F=e.options[e.activeOptionIndex])==null?void 0:F.id,"aria-multiselectable":e.mode===1?!0:void 0,"aria-labelledby":B,"aria-autocomplete":"list",defaultValue:(O=(_=r.defaultValue)!=null?_:e.defaultValue!==void 0?i==null?void 0:i(e.defaultValue):null)!=null?O:e.defaultValue,disabled:e.disabled,onCompositionStart:g,onCompositionEnd:R,onKeyDown:K,onChange:h,onBlur:w};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:W,theirProps:c,slot:D,defaultTag:je,name:"Combobox.Input"})}),We="button",Xe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){var C;let o=j("Combobox.Button"),a=Q("Combobox.Button"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(o.buttonRef,n),i=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:d=`headlessui-combobox-button-${i}`,...c}=r,e=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)(),p=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(g=>{switch(g.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowDown:return g.preventDefault(),g.stopPropagation(),o.comboboxState===1&&a.openCombobox(),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowUp:return g.preventDefault(),g.stopPropagation(),o.comboboxState===1&&(a.openCombobox(),e.nextFrame(()=>{o.value||a.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Last)})),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Escape:return o.comboboxState!==0?void 0:(g.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&g.stopPropagation(),a.closeCombobox(),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})}));default:return}}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(g=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_14__.isDisabledReactIssue7711)(g.currentTarget))return g.preventDefault();o.comboboxState===0?a.closeCombobox():(g.preventDefault(),a.openCombobox()),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})})}),s=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_1__.useComputed)(()=>{if(!!o.labelId)return[o.labelId,d].join(" ")},[o.labelId,d]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),T={ref:u,id:d,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_8__.useResolveButtonType)(r,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(C=o.optionsRef.current)==null?void 0:C.id,"aria-expanded":o.disabled?void 0:o.comboboxState===0,"aria-labelledby":s,disabled:o.disabled,onClick:P,onKeyDown:p};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:T,theirProps:c,slot:y,defaultTag:We,name:"Combobox.Button"})}),$e="label",Je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-label-${o}`,...u}=r,i=j("Combobox.Label"),d=Q("Combobox.Label"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(i.labelRef,n);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>d.registerLabel(a),[a]);let e=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{var s;return(s=i.inputRef.current)==null?void 0:s.focus({preventScroll:!0})}),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i.comboboxState===0,disabled:i.disabled}),[i]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{ref:c,id:a,onClick:e},theirProps:u,slot:p,defaultTag:$e,name:"Combobox.Label"})}),qe="ul",Qe=_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.Features.Static,Ye=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-options-${o}`,hold:u=!1,...i}=r,d=j("Combobox.Options"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(d.optionsRef,n),e=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.useOpenClosed)(),p=(()=>e!==null?e===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_19__.State.Open:d.comboboxState===0)();(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{var T;d.optionsPropsRef.current.static=(T=r.static)!=null?T:!1},[d.optionsPropsRef,r.static]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{d.optionsPropsRef.current.hold=u},[d.optionsPropsRef,u]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_10__.useTreeWalker)({container:d.optionsRef.current,enabled:d.comboboxState===0,accept(T){return T.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:T.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(T){T.setAttribute("role","none")}});let P=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_1__.useComputed)(()=>{var T,C;return(C=d.labelId)!=null?C:(T=d.buttonRef.current)==null?void 0:T.id},[d.labelId,d.buttonRef.current]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:d.comboboxState===0}),[d]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{"aria-labelledby":P,role:"listbox",id:a,ref:c},theirProps:i,slot:s,defaultTag:qe,features:Qe,visible:p,name:"Combobox.Options"})}),Ze="li",ze=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(function(r,n){var F,_;let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:a=`headlessui-combobox-option-${o}`,disabled:u=!1,value:i,...d}=r,c=j("Combobox.Option"),e=Q("Combobox.Option"),p=c.activeOptionIndex!==null?c.options[c.activeOptionIndex].id===a:!1,P=c.isSelected(i),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),y=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)({disabled:u,value:i,domRef:s,textValue:(_=(F=s.current)==null?void 0:F.textContent)==null?void 0:_.toLowerCase()}),T=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(n,s),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>e.selectOption(a));(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>e.registerOption(a,y),[y,a]);let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!c.__demoMode);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{if(!c.__demoMode)return;let O=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_12__.disposables)();return O.requestAnimationFrame(()=>{g.current=!0}),O.dispose},[]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{if(c.comboboxState!==0||!p||!g.current||c.activationTrigger===0)return;let O=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_12__.disposables)();return O.requestAnimationFrame(()=>{var l,L;(L=(l=s.current)==null?void 0:l.scrollIntoView)==null||L.call(l,{block:"nearest"})}),O.dispose},[s,p,c.comboboxState,c.activationTrigger,c.activeOptionIndex]);let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>{if(u)return O.preventDefault();C(),c.mode===0&&e.closeCombobox()}),K=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(()=>{if(u)return e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Nothing);e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,a)}),h=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__.useTrackedPointer)(),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>h.update(O)),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>{!h.wasMoved(O)||u||p||e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Specific,a,0)}),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(O=>{!h.wasMoved(O)||u||!p||c.optionsPropsRef.current.hold||e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Nothing)}),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:p,selected:P,disabled:u}),[p,P,u]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{id:a,ref:T,role:"option",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-selected":P,disabled:void 0,onClick:R,onFocus:K,onPointerEnter:w,onMouseEnter:w,onPointerMove:B,onMouseMove:B,onPointerLeave:D,onMouseLeave:D},theirProps:d,slot:W,defaultTag:Ze,name:"Combobox.Option"})}),ko=Object.assign(He,{Input:Ke,Button:Xe,Label:Je,Options:Ye,Option:ze});


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
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function u(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(n===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return n}function k(){let[n,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>(t(o=>[...o,r]),()=>t(o=>{let s=o.slice(),p=s.indexOf(r);return p!==-1&&s.splice(p,1),s}))),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:a},e.children)},[t])]}let S="p",F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,c){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_1__.useId)(),{id:i=`headlessui-description-${e}`,...a}=t,r=u(),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(c);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>r.register(i),[i,r.register]);let s={ref:o,...r.props,id:i};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:s,theirProps:a,slot:r.slot||{},defaultTag:S,name:r.name||"Description"})});


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
var Ee=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Ee||{}),ve=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(ve||{});let be={[0](r,e){return r.titleId===e.id?r:{...r,titleId:e.id}}},M=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);M.displayName="DialogContext";function L(r){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M);if(e===null){let t=new Error(`<${r} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return e}function he(r,e,t=()=>[document.body]){(0,_hooks_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_20__.useDocumentOverflowLockedEffect)(r,e,d=>{var l;return{containers:[...(l=d.containers)!=null?l:[],t]}})}function Ce(r,e){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(e.type,be,r,e)}let Oe="div",Se=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,Le=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-${d}`,open:n,onClose:o,initialFocus:a,__demoMode:c=!1,...g}=e,[D,F]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),i=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.useOpenClosed)();n===void 0&&i!==null&&(n=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i,{[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Open]:!0,[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Closed]:!1}));let _=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),J=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(T,t),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),P=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_16__.useOwnerDocument)(T),$=e.hasOwnProperty("open")||i!==null,N=e.hasOwnProperty("onClose");if(!$&&!N)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!$)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!N)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let s=n?0:1,[y,Q]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ce,{titleId:null,descriptionId:null,panelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>o(!1)),W=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(p=>Q({type:0,id:p})),w=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_13__.useServerHandoffComplete)()?c?!1:s===0:!1,k=D>1,X=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M)!==null,Z=k?"parent":"leaf";(0,_hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_8__.useInertOthers)(T,k?w:!1);let Y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(()=>{var A,f;return[...Array.from((A=P==null?void 0:P.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?A:[]).filter(m=>!(m===document.body||m===document.head||!(m instanceof HTMLElement)||m.contains(U.current)||y.panelRef.current&&m.contains(y.panelRef.current))),(f=y.panelRef.current)!=null?f:T.current]});(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_15__.useOutsideClick)(()=>Y(),R,w&&!k),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_17__.useEventListener)(P==null?void 0:P.defaultView,"keydown",p=>{p.defaultPrevented||p.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_4__.Keys.Escape&&s===0&&(k||(p.preventDefault(),p.stopPropagation(),R()))}),he(P,s===0&&!X,Y),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(s!==0||!T.current)return;let p=new IntersectionObserver(A=>{for(let f of A)f.boundingClientRect.x===0&&f.boundingClientRect.y===0&&f.boundingClientRect.width===0&&f.boundingClientRect.height===0&&R()});return p.observe(T.current),()=>p.disconnect()},[s,T,R]);let[ee,te]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_11__.useDescriptions)(),oe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{dialogState:s,close:R,setTitleId:W},y],[s,y,R,W]),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:s===0}),[s]),re={ref:J,id:l,role:"dialog","aria-modal":s===0?!0:void 0,"aria-labelledby":y.titleId,"aria-describedby":ee};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_14__.StackProvider,{type:"Dialog",enabled:s===0,element:T,onUpdate:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)((p,A,f)=>{A==="Dialog"&&(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(p,{[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_14__.StackMessage.Add](){_.current.add(f),F(m=>m+1)},[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_14__.StackMessage.Remove](){_.current.add(f),F(m=>m-1)}})})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_10__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_9__.Portal,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:oe},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_9__.Portal.Group,{target:T},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_10__.ForcePortalRoot,{force:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(te,{slot:j,name:"Dialog.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap,{initialFocus:a,containers:_,features:w?(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(Z,{parent:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.RestoreFocus,leaf:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.All&~_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.FocusLock}):_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_7__.FocusTrap.features.None},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:re,theirProps:g,slot:j,defaultTag:Oe,features:Se,visible:s===0,name:"Dialog"})))))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_18__.Features.Hidden,ref:U}))}),Fe="div",ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-overlay-${d}`,...n}=e,[{dialogState:o,close:a}]=L("Dialog.Overlay"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(i=>{if(i.target===i.currentTarget){if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_5__.isDisabledReactIssue7711)(i.currentTarget))return i.preventDefault();i.preventDefault(),i.stopPropagation(),a()}}),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l,"aria-hidden":!0,onClick:g},theirProps:n,slot:D,defaultTag:Fe,name:"Dialog.Overlay"})}),Ie="div",Me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-backdrop-${d}`,...n}=e,[{dialogState:o},a]=L("Dialog.Backdrop"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_10__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_9__.Portal,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l,"aria-hidden":!0},theirProps:n,slot:g,defaultTag:Ie,name:"Dialog.Backdrop"})))}),_e="div",we=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-panel-${d}`,...n}=e,[{dialogState:o},a]=L("Dialog.Panel"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t,a.panelRef),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_19__.useEvent)(i=>{i.stopPropagation()});return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l,onClick:D},theirProps:n,slot:g,defaultTag:_e,name:"Dialog.Panel"})}),xe="h2",He=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(e,t){let d=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_6__.useId)(),{id:l=`headlessui-dialog-title-${d}`,...n}=e,[{dialogState:o,setTitleId:a}]=L("Dialog.Title"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(a(l),()=>a(null)),[l,a]);let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:c,id:l},theirProps:n,slot:g,defaultTag:xe,name:"Dialog.Title"})}),gt=Object.assign(Le,{Backdrop:Me,Panel:we,Overlay:ke,Title:He,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_11__.Description});


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
let z="div";var A=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(A||{});let de=Object.assign((0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(u,e){let l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(l,e),{initialFocus:m,containers:t,features:n=30,...E}=u;(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)()||(n=1);let s=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_10__.useOwnerDocument)(l);J({ownerDocument:s},Boolean(n&16));let S=Q({ownerDocument:s,container:l,initialFocus:m},Boolean(n&2));X({ownerDocument:s,container:l,containers:t,previousActiveElement:S},Boolean(n&8));let H=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.useTabDirection)(),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(o=>{let c=l.current;if(!c)return;(_=>_())(()=>{(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(H.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Forwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(c,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First,{skipElements:[o.relatedTarget]})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Backwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(c,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Last,{skipElements:[o.relatedTarget]})}})})}),B=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_14__.useDisposables)(),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),P={ref:a,onKeyDown(o){o.key=="Tab"&&(L.current=!0,B.requestAnimationFrame(()=>{L.current=!1}))},onBlur(o){let c=new Set(t==null?void 0:t.current);c.add(l);let p=o.relatedTarget;p instanceof HTMLElement&&p.dataset.headlessuiFocusGuard!=="true"&&(h(c,p)||(L.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(l.current,(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(H.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Forwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_8__.Direction.Backwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Previous})|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.WrapAround,{relativeTo:o.target}):o.target instanceof HTMLElement&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(o.target)))}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,Boolean(n&4)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Features.Focusable}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:P,theirProps:E,defaultTag:z,name:"FocusTrap"}),Boolean(n&4)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_4__.Features.Focusable}))}),{features:A});function J({ownerDocument:r},u){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_11__.useEventListener)(r==null?void 0:r.defaultView,"focusout",a=>{!u||e.current||(e.current=a.target)},!0),(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__.useWatch)(()=>{u||((r==null?void 0:r.activeElement)===(r==null?void 0:r.body)&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(e.current),e.current=null)},[u]);let l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(l.current=!1,()=>{l.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__.microTask)(()=>{!l.current||((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(e.current),e.current=null)})}),[])}function Q({ownerDocument:r,container:u,initialFocus:e},l){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),m=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_9__.useIsMounted)();return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__.useWatch)(()=>{if(!l)return;let t=u.current;!t||(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_12__.microTask)(()=>{if(!m.current)return;let n=r==null?void 0:r.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===n){a.current=n;return}}else if(t.contains(n)){a.current=n;return}e!=null&&e.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(e.current):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(t,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=r==null?void 0:r.activeElement})},[l]),a}function X({ownerDocument:r,container:u,containers:e,previousActiveElement:l},a){let m=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_9__.useIsMounted)();(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_11__.useEventListener)(r==null?void 0:r.defaultView,"focus",t=>{if(!a||!m.current)return;let n=new Set(e==null?void 0:e.current);n.add(u);let E=l.current;if(!E)return;let s=t.target;s&&s instanceof HTMLElement?h(n,s)?(l.current=s,(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(s)):(t.preventDefault(),t.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(E)):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusElement)(l.current)},!0)}function h(r,u){var e;for(let l of r)if((e=l.current)!=null&&e.contains(u))return!0;return!1}


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
var pe=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(pe||{}),de=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(de||{}),me=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(me||{});function U(t,i=o=>o){let o=t.activeItemIndex!==null?t.items[t.activeItemIndex]:null,s=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.sortByDomNode)(i(t.items.slice()),u=>u.dataRef.current.domRef.current),a=o?s.indexOf(o):null;return a===-1&&(a=null),{items:s,activeItemIndex:a}}let fe={[1](t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},[0](t){return t.menuState===0?t:{...t,menuState:0}},[2]:(t,i)=>{var a;let o=U(t),s=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.calculateActiveIndex)(i,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:s,activationTrigger:(a=i.trigger)!=null?a:1}},[3]:(t,i)=>{let s=t.searchQuery!==""?0:1,a=t.searchQuery+i.value.toLowerCase(),n=(t.activeItemIndex!==null?t.items.slice(t.activeItemIndex+s).concat(t.items.slice(0,t.activeItemIndex+s)):t.items).find(d=>{var l;return((l=d.dataRef.current.textValue)==null?void 0:l.startsWith(a))&&!d.dataRef.current.disabled}),e=n?t.items.indexOf(n):-1;return e===-1||e===t.activeItemIndex?{...t,searchQuery:a}:{...t,searchQuery:a,activeItemIndex:e,activationTrigger:1}},[4](t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},[5]:(t,i)=>{let o=U(t,s=>[...s,{id:i.id,dataRef:i.dataRef}]);return{...t,...o}},[6]:(t,i)=>{let o=U(t,s=>{let a=s.findIndex(u=>u.id===i.id);return a!==-1&&s.splice(a,1),s});return{...t,...o,activationTrigger:1}}},G=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);G.displayName="MenuContext";function O(t){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(G);if(i===null){let o=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,O),o}return i}function Te(t,i){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i.type,fe,t,i)}let ye=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Te,{menuState:1,buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),itemsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:u,buttonRef:n},e]=s,d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(o);(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_12__.useOutsideClick)([n,u],(R,A)=>{var g;e({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.isFocusableElement)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.FocusableMode.Loose)||(R.preventDefault(),(g=n.current)==null||g.focus())},a===0);let l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(()=>{e({type:1})}),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:a===0,close:l}),[a,l]),M=i,T={ref:d};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(G.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(a,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:T,theirProps:M,slot:f,defaultTag:ye,name:"Menu"})))}),ge="button",Me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){var g;let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)(),{id:a=`headlessui-menu-button-${s}`,...u}=i,[n,e]=O("Menu.Button"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(n.buttonRef,o),l=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_4__.useDisposables)(),f=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(c=>{switch(c.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowDown:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame(()=>e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First}));break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowUp:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame(()=>e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Last}));break}}),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(c=>{switch(c.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:c.preventDefault();break}}),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(c=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_10__.isDisabledReactIssue7711)(c.currentTarget))return c.preventDefault();i.disabled||(n.menuState===0?(e({type:1}),l.nextFrame(()=>{var b;return(b=n.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})})):(c.preventDefault(),e({type:0})))}),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:n.menuState===0}),[n]),A={ref:d,id:a,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_15__.useResolveButtonType)(i,n.buttonRef),"aria-haspopup":"menu","aria-controls":(g=n.itemsRef.current)==null?void 0:g.id,"aria-expanded":i.disabled?void 0:n.menuState===0,onKeyDown:f,onKeyUp:M,onClick:T};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:A,theirProps:u,slot:R,defaultTag:ge,name:"Menu.Button"})}),Re="div",be=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,Ae=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){var b,S;let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)(),{id:a=`headlessui-menu-items-${s}`,...u}=i,[n,e]=O("Menu.Items"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(n.itemsRef,o),l=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_16__.useOwnerDocument)(n.itemsRef),f=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_4__.useDisposables)(),M=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.useOpenClosed)(),T=(()=>M!==null?M===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_14__.State.Open:n.menuState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let r=n.itemsRef.current;!r||n.menuState===0&&r!==(l==null?void 0:l.activeElement)&&r.focus({preventScroll:!0})},[n.menuState,n.itemsRef,l]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_13__.useTreeWalker)({container:n.itemsRef.current,enabled:n.menuState===0,accept(r){return r.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(r=>{var h,F;switch(f.dispose(),r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:if(n.searchQuery!=="")return r.preventDefault(),r.stopPropagation(),e({type:3,value:r.key});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:if(r.preventDefault(),r.stopPropagation(),e({type:1}),n.activeItemIndex!==null){let{dataRef:p}=n.items[n.activeItemIndex];(F=(h=p.current)==null?void 0:h.domRef.current)==null||F.click()}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.restoreFocusIfNecessary)(n.buttonRef.current);break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Next});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.ArrowUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Previous});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.PageUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.PageDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Last});case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Escape:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_3__.disposables)().nextFrame(()=>{var p;return(p=n.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Tab:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_3__.disposables)().nextFrame(()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.focusFrom)(n.buttonRef.current,r.shiftKey?_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Previous:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.Focus.Next)});break;default:r.key.length===1&&(e({type:3,value:r.key}),f.setTimeout(()=>e({type:4}),350));break}}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(r=>{switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:r.preventDefault();break}}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:n.menuState===0}),[n]),c={"aria-activedescendant":n.activeItemIndex===null||(b=n.items[n.activeItemIndex])==null?void 0:b.id,"aria-labelledby":(S=n.buttonRef.current)==null?void 0:S.id,id:a,onKeyDown:R,onKeyUp:A,role:"menu",tabIndex:0,ref:d};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:c,theirProps:u,slot:g,defaultTag:Re,features:be,visible:T,name:"Menu.Items"})}),ve=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(i,o){let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.useId)(),{id:a=`headlessui-menu-item-${s}`,disabled:u=!1,...n}=i,[e,d]=O("Menu.Item"),l=e.activeItemIndex!==null?e.items[e.activeItemIndex].id===a:!1,f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),M=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(o,f);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{if(e.menuState!==0||!l||e.activationTrigger===0)return;let p=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_3__.disposables)();return p.requestAnimationFrame(()=>{var v,B;(B=(v=f.current)==null?void 0:v.scrollIntoView)==null||B.call(v,{block:"nearest"})}),p.dispose},[f,l,e.menuState,e.activationTrigger,e.activeItemIndex]);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:u,domRef:f});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{T.current.disabled=u},[T,u]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{var p,v;T.current.textValue=(v=(p=f.current)==null?void 0:p.textContent)==null?void 0:v.toLowerCase()},[T,f]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>(d({type:5,id:a,dataRef:T}),()=>d({type:6,id:a})),[T,a]);let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(()=>{d({type:1})}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>{if(u)return p.preventDefault();d({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_11__.restoreFocusIfNecessary)(e.buttonRef.current)}),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(()=>{if(u)return d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Nothing});d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Specific,id:a})}),c=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_18__.useTrackedPointer)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>c.update(p)),S=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>{!c.wasMoved(p)||u||l||d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Specific,id:a,trigger:0})}),r=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_17__.useEvent)(p=>{!c.wasMoved(p)||u||!l||d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Nothing})}),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,disabled:u,close:R}),[l,u,R]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{id:a,ref:M,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:A,onFocus:g,onPointerEnter:b,onMouseEnter:b,onPointerMove:S,onMouseMove:S,onPointerLeave:r,onMouseLeave:r},theirProps:n,slot:h,defaultTag:ve,name:"Menu.Item"})}),Ze=Object.assign(Ie,{Button:Me,Items:Ae,Item:Se});


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
var Me=(p=>(p[p.Open=0]="Open",p[p.Closed=1]="Closed",p))(Me||{}),Le=(t=>(t[t.TogglePopover=0]="TogglePopover",t[t.ClosePopover=1]="ClosePopover",t[t.SetButton=2]="SetButton",t[t.SetButtonId=3]="SetButtonId",t[t.SetPanel=4]="SetPanel",t[t.SetPanelId=5]="SetPanelId",t))(Le||{});let Fe={[0]:n=>({...n,popoverState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(n.popoverState,{[0]:1,[1]:0})}),[1](n){return n.popoverState===1?n:{...n,popoverState:1}},[2](n,r){return n.button===r.button?n:{...n,button:r.button}},[3](n,r){return n.buttonId===r.buttonId?n:{...n,buttonId:r.buttonId}},[4](n,r){return n.panel===r.panel?n:{...n,panel:r.panel}},[5](n,r){return n.panelId===r.panelId?n:{...n,panelId:r.panelId}}},le=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);le.displayName="PopoverContext";function Z(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(le);if(r===null){let p=new Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,Z),p}return r}let ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ae.displayName="PopoverAPIContext";function ue(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ae);if(r===null){let p=new Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,ue),p}return r}let se=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);se.displayName="PopoverGroupContext";function Te(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(se)}let pe=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);pe.displayName="PopoverPanelContext";function he(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(pe)}function Be(n,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r.type,Fe,n,r)}let xe="div",De=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){var x;let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(p,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.optionalRef)(e=>{C.current=e})),O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Be,{popoverState:1,buttons:O,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),afterPanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),[{popoverState:o,button:a,buttonId:v,panel:c,panelId:M,beforePanelSentinel:T,afterPanelSentinel:d},i]=t,u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_12__.useOwnerDocument)((x=C.current)!=null?x:a),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(!a||!c)return!1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(a))^Number(K==null?void 0:K.contains(c)))return!0;let e=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.getFocusableElements)(),l=e.indexOf(a),A=(l+e.length-1)%e.length,b=(l+1)%e.length,G=e[A],me=e[b];return!c.contains(G)&&!c.contains(me)},[a,c]),g=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_18__.useLatestValue)(v),y=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_18__.useLatestValue)(M),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:g,panelId:y,close:()=>i({type:1})}),[g,y,i]),I=Te(),F=I==null?void 0:I.registerPopover,j=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{var e;return(e=I==null?void 0:I.isFocusWithinPopoverGroup())!=null?e:(u==null?void 0:u.activeElement)&&((a==null?void 0:a.contains(u.activeElement))||(c==null?void 0:c.contains(u.activeElement)))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>F==null?void 0:F(L),[F,L]),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_13__.useEventListener)(u==null?void 0:u.defaultView,"focus",e=>{var l,A,b,G;o===0&&(j()||!a||!c||e.target!==window&&((A=(l=T.current)==null?void 0:l.contains)!=null&&A.call(l,e.target)||(G=(b=d.current)==null?void 0:b.contains)!=null&&G.call(b,e.target)||i({type:1})))},!0),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_10__.useOutsideClick)([a,c],(e,l)=>{i({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.isFocusableElement)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusableMode.Loose)||(e.preventDefault(),a==null||a.focus())},o===0);let h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{i({type:1});let l=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:a:a)();l==null||l.focus()}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:h,isPortalled:f}),[h,f]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0,close:h}),[o,h]),E=r,P={ref:R};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(le.Provider,{value:t},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ae.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(o,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:P,theirProps:E,slot:m,defaultTag:xe,name:"Popover"}))))}),He="button",ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:R=`headlessui-popover-button-${C}`,...O}=r,[t,o]=Z("Popover.Button"),{isPortalled:a}=ue("Popover.Button"),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=`headlessui-focus-sentinel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)()}`,M=Te(),T=M==null?void 0:M.closeOthers,i=he()!==null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!i)return o({type:3,buttonId:R}),()=>{o({type:3,buttonId:null})}},[i,R,o]);let[u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>Symbol()),f=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(v,p,i?null:e=>{if(e)t.buttons.current.push(u);else{let l=t.buttons.current.indexOf(u);l!==-1&&t.buttons.current.splice(l,1)}t.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&o({type:2,button:e})}),g=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(v,p),y=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_12__.useOwnerDocument)(v),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{var l,A,b;if(i){if(t.popoverState===1)return;switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Enter:e.preventDefault(),(A=(l=e.target).click)==null||A.call(l),o({type:1}),(b=t.button)==null||b.focus();break}}else switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Enter:e.preventDefault(),e.stopPropagation(),t.popoverState===1&&(T==null||T(t.buttonId)),o({type:0});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Escape:if(t.popoverState!==0)return T==null?void 0:T(t.buttonId);if(!v.current||(y==null?void 0:y.activeElement)&&!v.current.contains(y.activeElement))return;e.preventDefault(),e.stopPropagation(),o({type:1});break}}),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{i||e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Space&&e.preventDefault()}),F=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{var l,A;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_6__.isDisabledReactIssue7711)(e.currentTarget)||r.disabled||(i?(o({type:1}),(l=t.button)==null||l.focus()):(e.preventDefault(),e.stopPropagation(),t.popoverState===1&&(T==null||T(t.buttonId)),o({type:0}),(A=t.button)==null||A.focus()))}),j=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(e=>{e.preventDefault(),e.stopPropagation()}),h=t.popoverState===0,s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:h}),[h]),m=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_9__.useResolveButtonType)(r,v),E=i?{ref:g,type:m,onKeyDown:L,onClick:F}:{ref:f,id:t.buttonId,type:m,"aria-expanded":r.disabled?void 0:t.popoverState===0,"aria-controls":t.panel?t.panelId:void 0,onKeyDown:L,onKeyUp:I,onClick:F,onMouseDown:j},P=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.useTabDirection)(),x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{let e=t.panel;if(!e)return;function l(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(P.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First),[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Last)})===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.getFocusableElements)().filter(b=>b.dataset.headlessuiFocusGuard!=="true"),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(P.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Previous}),{relativeTo:t.button})}l()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:E,theirProps:O,slot:s,defaultTag:He,name:"Popover.Button"}),h&&!i&&a&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{id:c,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:x}))}),Ge="div",we=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,_e=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:R=`headlessui-popover-overlay-${C}`,...O}=r,[{popoverState:t},o]=Z("Popover.Overlay"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(p),v=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.useOpenClosed)(),c=(()=>v!==null?v===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open:t===0)(),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(i=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_6__.isDisabledReactIssue7711)(i.currentTarget))return i.preventDefault();o({type:1})}),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t===0}),[t]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:a,id:R,"aria-hidden":!0,onClick:M},theirProps:O,slot:T,defaultTag:Ge,features:we,visible:c,name:"Popover.Overlay"})}),Ne="div",Ke=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,Ue=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:R=`headlessui-popover-panel-${C}`,focus:O=!1,...t}=r,[o,a]=Z("Popover.Panel"),{close:v,isPortalled:c}=ue("Popover.Panel"),M=`headlessui-focus-sentinel-before-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)()}`,T=`headlessui-focus-sentinel-after-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)()}`,d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(d,p,s=>{a({type:4,panel:s})}),u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_12__.useOwnerDocument)(d);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_19__.useIsoMorphicEffect)(()=>(a({type:5,panelId:R}),()=>{a({type:5,panelId:null})}),[R,a]);let f=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.useOpenClosed)(),g=(()=>f!==null?f===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.State.Open:o.popoverState===0)(),y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(s=>{var m;switch(s.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_5__.Keys.Escape:if(o.popoverState!==0||!d.current||(u==null?void 0:u.activeElement)&&!d.current.contains(u.activeElement))return;s.preventDefault(),s.stopPropagation(),a({type:1}),(m=o.button)==null||m.focus();break}});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var s;r.static||o.popoverState===1&&((s=r.unmount)!=null?s:!0)&&a({type:4,panel:null})},[o.popoverState,r.unmount,r.static,a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!O||o.popoverState!==0||!d.current)return;let s=u==null?void 0:u.activeElement;d.current.contains(s)||(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(d.current,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First)},[O,d,o.popoverState]);let L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.popoverState===0,close:v}),[o,v]),I={ref:i,id:R,onKeyDown:y,onBlur:O&&o.popoverState===0?s=>{var E,P,x,e,l;let m=s.relatedTarget;!m||!d.current||(E=d.current)!=null&&E.contains(m)||(a({type:1}),(((x=(P=o.beforePanelSentinel.current)==null?void 0:P.contains)==null?void 0:x.call(P,m))||((l=(e=o.afterPanelSentinel.current)==null?void 0:e.contains)==null?void 0:l.call(e,m)))&&m.focus({preventScroll:!0}))}:void 0,tabIndex:-1},F=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.useTabDirection)(),j=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{let s=d.current;if(!s)return;function m(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(F.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:()=>{var P;(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(s,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error&&((P=o.afterPanelSentinel.current)==null||P.focus())},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:()=>{var E;(E=o.button)==null||E.focus({preventScroll:!0})}})}m()}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{let s=d.current;if(!s)return;function m(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(F.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Forwards]:()=>{var A;if(!o.button)return;let E=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.getFocusableElements)(),P=E.indexOf(o.button),x=E.slice(0,P+1),l=[...E.slice(P+1),...x];for(let b of l.slice())if(b.dataset.headlessuiFocusGuard==="true"||((A=o.panel)==null?void 0:A.contains(b))){let G=l.indexOf(b);G!==-1&&l.splice(G,1)}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First,{sorted:!1})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_16__.Direction.Backwards]:()=>{var P;(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(s,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Previous)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error&&((P=o.button)==null||P.focus())}})}m()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(pe.Provider,{value:R},g&&c&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{id:M,ref:o.beforePanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:j}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:I,theirProps:t,slot:L,defaultTag:Ne,features:Ke,visible:g,name:"Popover.Panel"}),g&&c&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Hidden,{id:T,ref:o.afterPanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_14__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h}))}),We="div",je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(C,p),[O,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(u=>{t(f=>{let g=f.indexOf(u);if(g!==-1){let y=f.slice();return y.splice(g,1),y}return f})}),a=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(u=>(t(f=>[...f,u]),()=>o(u))),v=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(()=>{var g;let u=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_11__.getOwnerDocument)(C);if(!u)return!1;let f=u.activeElement;return(g=C.current)!=null&&g.contains(f)?!0:O.some(y=>{var L,I;return((L=u.getElementById(y.buttonId.current))==null?void 0:L.contains(f))||((I=u.getElementById(y.panelId.current))==null?void 0:I.contains(f))})}),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_15__.useEvent)(u=>{for(let f of O)f.buttonId.current!==u&&f.close()}),M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:a,unregisterPopover:o,isFocusWithinPopoverGroup:v,closeOthers:c}),[a,o,v,c]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),d=r,i={ref:R};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(se.Provider,{value:M},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:i,theirProps:d,slot:T,defaultTag:We,name:"Popover.Group"}))}),Rt=Object.assign(De,{Button:ke,Overlay:_e,Panel:Ue,Group:je});


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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function x(i){let u=(0,_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_4__.usePortalRoot)(),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(A),e=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__.useOwnerDocument)(i),[r,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{if(!u&&o!==null||_utils_env_js__WEBPACK_IMPORTED_MODULE_9__.env.isServer)return null;let n=e==null?void 0:e.getElementById("headlessui-portal-root");if(n)return n;if(e===null)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{u||o!==null&&f(o.current)},[o,f,u]),r}let _=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,U=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(u,o){let e=u,r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)((0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.optionalRef)(a=>{r.current=a}),o),n=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__.useOwnerDocument)(r),t=x(r),[l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var a;return _utils_env_js__WEBPACK_IMPORTED_MODULE_9__.env.isServer?null:(a=n==null?void 0:n.createElement("div"))!=null?a:null}),b=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_5__.useServerHandoffComplete)(),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{if(p.current=!1,!(!t||!l))return t.contains(l)||(l.setAttribute("data-headlessui-portal",""),t.appendChild(l)),()=>{p.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_8__.microTask)(()=>{var a;!p.current||!t||!l||(l instanceof Node&&t.contains(l)&&t.removeChild(l),t.childNodes.length<=0&&((a=t.parentElement)==null||a.removeChild(t)))})}},[t,l]),b?!t||!l?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:f},theirProps:e,defaultTag:_,name:"Portal"}),l):null}),j=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,A=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(u,o){let{target:e,...r}=u,n={ref:(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(o)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(A.Provider,{value:e},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:n,theirProps:r,defaultTag:j,name:"Popover.Group"}))}),$=Object.assign(U,{Group:F});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": () => (/* binding */ Ke)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-transition.js */ "./node_modules/@headlessui/react/dist/hooks/use-transition.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _utils_class_names_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function P(i=""){return i.split(" ").filter(e=>e.trim().length>1)}let A=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);A.displayName="TransitionContext";var ge=(s=>(s.Visible="visible",s.Hidden="hidden",s))(ge||{});function be(){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(A);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}function Ee(){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}let M=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);M.displayName="NestingContext";function I(i){return"children"in i?I(i.children):i.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function ne(i,e){let s=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)(i),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),m=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)(),y=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_11__.useDisposables)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)((l,r=_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden)=>{let t=n.current.findIndex(({el:o})=>o===l);t!==-1&&((0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(r,{[_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Unmount](){n.current.splice(t,1)},[_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden](){n.current[t].state="hidden"}}),y.microTask(()=>{var o;!I(n)&&m.current&&((o=s.current)==null||o.call(s))}))}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(l=>{let r=n.current.find(({el:t})=>t===l);return r?r.state!=="visible"&&(r.state="visible"):n.current.push({el:l,state:"visible"}),()=>b(l,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Unmount)}),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Promise.resolve()),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({enter:[],leave:[],idle:[]}),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)((l,r,t)=>{S.current.splice(0),e&&(e.chains.current[r]=e.chains.current[r].filter(([o])=>o!==l)),e==null||e.chains.current[r].push([l,new Promise(o=>{S.current.push(o)})]),e==null||e.chains.current[r].push([l,new Promise(o=>{Promise.all(p.current[r].map(([f,a])=>a)).then(()=>o())})]),r==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>t(r)):t(r)}),v=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)((l,r,t)=>{Promise.all(p.current[r].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=S.current.shift())==null||o()}).then(()=>t(r))});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({children:n,register:E,unregister:b,onStart:d,onStop:v,wait:u,chains:p}),[E,b,n,d,v,p,u])}function Se(){}let xe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(i){var s;let e={};for(let n of xe)e[n]=(s=i[n])!=null?s:Se;return e}function Pe(i){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(re(i));return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e.current=re(i)},[i]),e}let He="div",ie=_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.Features.RenderStrategy,oe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(e,s){let{beforeEnter:n,afterEnter:m,beforeLeave:y,afterLeave:b,enter:E,enterFrom:S,enterTo:u,entered:p,leave:d,leaveFrom:v,leaveTo:l,...r}=e,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(t,s),f=r.unmount?_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Unmount:_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden,{show:a,appear:x,initial:se}=be(),[h,_]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(a?"visible":"hidden"),K=Ee(),{register:D,unregister:V}=K,j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>D(t),[D,t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(f===_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden&&!!t.current){if(a&&h!=="visible"){_("visible");return}return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(h,{["hidden"]:()=>V(t),["visible"]:()=>D(t)})}},[h,t,D,V,a,f]);let U=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)({enter:P(E),enterFrom:P(S),enterTo:P(u),entered:P(p),leave:P(d),leaveFrom:P(v),leaveTo:P(l)}),L=Pe({beforeEnter:n,afterEnter:m,beforeLeave:y,afterLeave:b}),k=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(k&&h==="visible"&&t.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,h,k]);let G=se&&!x,le=(()=>!k||G||j.current===a?"idle":a?"enter":"leave")(),ae=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(C=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(C,{enter:()=>L.current.beforeEnter(),leave:()=>L.current.beforeLeave(),idle:()=>{}})),ue=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(C=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(C,{enter:()=>L.current.afterEnter(),leave:()=>L.current.afterLeave(),idle:()=>{}})),w=ne(()=>{_("hidden"),V(t)},K);(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_9__.useTransition)({container:t,classes:U,direction:le,onStart:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)(C=>{w.onStart(t,C,ae)}),onStop:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)(C=>{w.onStop(t,C,ue),C==="leave"&&!I(w)&&(_("hidden"),V(t))})}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!G||(f===_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderStrategy.Hidden?j.current=null:j.current=a)},[a,G,h]);let B=r,de={ref:o};return x&&a&&_utils_env_js__WEBPACK_IMPORTED_MODULE_13__.env.isServer&&(B={...B,className:(0,_utils_class_names_js__WEBPACK_IMPORTED_MODULE_12__.classNames)(r.className,...U.current.enter,...U.current.enterFrom)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:w},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(h,{["visible"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__.State.Open,["hidden"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:de,theirProps:B,defaultTag:He,features:ie,visible:h==="visible",name:"Transition.Child"})))}),J=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(e,s){let{show:n,appear:m=!1,unmount:y,...b}=e,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),S=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(E,s);(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)();let u=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__.useOpenClosed)();if(n===void 0&&u!==null&&(n=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(u,{[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__.State.Open]:!0,[_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__.State.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n?"visible":"hidden"),v=ne(()=>{d("hidden")}),[l,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([n]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>{l!==!1&&t.current[t.current.length-1]!==n&&(t.current.push(n),r(!1))},[t,n]);let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({show:n,appear:m,initial:l}),[n,m,l]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(n)d("visible");else if(!I(v))d("hidden");else{let a=E.current;if(!a)return;let x=a.getBoundingClientRect();x.x===0&&x.y===0&&x.width===0&&x.height===0&&d("hidden")}},[n,v]);let f={unmount:y};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:v},react__WEBPACK_IMPORTED_MODULE_0__.createElement(A.Provider,{value:o},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({ourProps:{...f,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe,{ref:S,...f,...b})},theirProps:{},defaultTag:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,features:ie,visible:p==="visible",name:"Transition"})))}),Ne=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.forwardRefWithAs)(function(e,s){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(A)!==null,m=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_2__.useOpenClosed)()!==null;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,!n&&m?react__WEBPACK_IMPORTED_MODULE_0__.createElement(J,{ref:s,...e}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(oe,{ref:s,...e}))}),Ke=Object.assign(J,{Child:Ne,Root:J});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transition": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _utils_once_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/once.js */ "./node_modules/@headlessui/react/dist/utils/once.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
function v(t,...e){t&&e.length>0&&t.classList.add(...e)}function f(t,...e){t&&e.length>0&&t.classList.remove(...e)}function F(t,e){let n=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();if(!t)return n.dispose;let{transitionDuration:a,transitionDelay:i}=getComputedStyle(t),[m,d]=[a,i].map(o=>{let[r=0]=o.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,g)=>g-l);return r});if(m+d!==0){let o=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),o())})}else e();return n.add(()=>e()),n.dispose}function M(t,e,n,a){let i=n?"enter":"leave",m=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)(),d=a!==void 0?(0,_utils_once_js__WEBPACK_IMPORTED_MODULE_0__.once)(a):()=>{};i==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let u=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i,{enter:()=>e.enter,leave:()=>e.leave}),o=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return f(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),v(t,...u,...r),m.nextFrame(()=>{f(t,...r),v(t,...o),F(t,()=>(f(t,...u),v(t,...e.entered),d()))}),m.dispose}


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
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


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
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
var o;let I=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)!=null?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_3__.env.nextId():null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{e===null&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_3__.env.nextId())},[e]),e!=null?""+e:void 0};


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
function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(r){e.current=t(r)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-transition.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTransition": () => (/* binding */ D)
/* harmony export */ });
/* harmony import */ var _components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/transitions/utils/transition.js */ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _use_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _use_is_mounted_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=(0,_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(),c=(0,_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)(),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__.useLatestValue)(t);(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>{let e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();c.add(e.dispose);let n=i.current;if(!!n&&r.current!=="idle"&&!!a.current)return e.dispose(),s.current(r.current),e.add((0,_components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_0__.transition)(n,o.current,r.current==="enter",()=>{e.dispose(),u.current(r.current)})),e.dispose},[t])}


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
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}


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
let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var p=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(p||{});function s(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o.Provider,{value:t},n)}


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
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function l(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function P(o){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:o.force},o.children)}


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
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});a.displayName="StackContext";var s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(s||{});function x(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a)}function M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((...t)=>{r==null||r(...t),l(...t)});return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Provider,{value:o},i)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncExternalStore": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useSyncExternalStoreShimClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSyncExternalStoreShimClient.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js");
/* harmony import */ var _useSyncExternalStoreShimServer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSyncExternalStoreShimServer.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js");
const r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",s=!r,c=s?_useSyncExternalStoreShimServer_js__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore:_useSyncExternalStoreShimClient_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore,a= false?(n=>n.useSyncExternalStore)(/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))):c;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncExternalStore": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const d=typeof Object.is=="function"?Object.is:i,{useState:u,useEffect:h,useLayoutEffect:f,useDebugValue:p}=/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));let S=!1,_=!1;function y(e,t,c){const a=t(),[{inst:n},o]=u({inst:{value:a,getSnapshot:t}});return f(()=>{n.value=a,n.getSnapshot=t,r(n)&&o({inst:n})},[e,a,t]),h(()=>(r(n)&&o({inst:n}),e(()=>{r(n)&&o({inst:n})})),[e]),p(a),a}function r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!d(c,a)}catch{return!0}}


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

/***/ "./node_modules/@headlessui/react/dist/utils/once.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": () => (/* binding */ l)
/* harmony export */ });
function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}


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
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var j=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(j||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:l}){let o=h(t,r);if(n)return m(o,e,a,l);let u=s!=null?s:0;if(u&2){let{static:i=!1,...d}=o;if(i)return m(d,e,a,l)}if(u&1){let{unmount:i=!0,...d}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i?0:1,{[0](){return null},[1](){return m({...d,hidden:!0,style:{display:"none"}},e,a,l)}})}return m(o,e,a,l)}function m(r,t={},e,a){var y;let{as:s=e,children:n,refName:l="ref",...o}=T(r,["unmount","static"]),u=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;o.className&&typeof o.className=="function"&&(o.className=o.className(t));let d={};if(t){let f=!1,c=[];for(let[p,F]of Object.entries(t))typeof F=="boolean"&&(f=!0),F===!0&&c.push(p);f&&(d["data-headlessui-state"]=c.join(" "))}if(s===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(P(o)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let f=(0,_class_names_js__WEBPACK_IMPORTED_MODULE_1__.classNames)((y=i.props)==null?void 0:y.className,o.className),c=f?{className:f}:{};return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},h(i.props,P(T(o,["ref"]))),d,u,O(i.ref,u.ref),c))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(s,Object.assign({},T(o,["ref"]),s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function O(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function h(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...l){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function V(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function P(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function T(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
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

/***/ "./src/_app/shared/components/layouts/default.tsx":
/*!********************************************************!*\
  !*** ./src/_app/shared/components/layouts/default.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errors": () => (/* binding */ errors),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral */ "./node_modules/piral-notifications/esm/Notifications.js");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../landing */ "./src/landing/index.tsx");




var errors = {
  not_found: function not_found() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: 'error'
    }, "Could not find the requested page. Are you sure it exists?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Go back ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: '/'
    }, "to the dashboard"), "."));
  }
};
var layout = {
  ErrorInfo: function ErrorInfo(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_3__.SwitchErrorInfo, Object.assign({}, props)));
  },
  DashboardContainer: function DashboardContainer(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_landing__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  },
  Layout: function Layout(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_4__.Notifications, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, children));
  },
  NotificationsHost: function NotificationsHost(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notifications'
    }, children);
  },
  NotificationsToast: function NotificationsToast(_ref4) {
    var options = _ref4.options,
      onClose = _ref4.onClose,
      children = _ref4.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "notification-toast ".concat(options.type)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-details'
    }, options.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-title'
    }, options.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-description'
    }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-close',
      onClick: onClose
    }));
  }
};

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
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
/* harmony import */ var piral_page_layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! piral-page-layouts */ "./node_modules/piral-page-layouts/esm/create.js");
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

  plugins: [].concat(_toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_5__.createStandardApi)()), [(0,piral_page_layouts__WEBPACK_IMPORTED_MODULE_6__.createPageLayoutsApi)()]),
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
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

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createLocation": () => (/* binding */ createLocation),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createPath": () => (/* binding */ createPath),
/* harmony export */   "locationsAreEqual": () => (/* binding */ locationsAreEqual),
/* harmony export */   "parsePath": () => (/* binding */ parsePath)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0,value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




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

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/piral-dashboard/esm/Dashboard.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/Dashboard.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-dashboard/esm/components.js");



const Dashboard = (props) => {
    const tiles = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((s) => s.registry.tiles);
    const { filter = () => true } = props;
    const children = Object.keys(tiles)
        .filter((tile) => filter(tiles[tile]))
        .map((tile) => {
        const { component: Component, preferences } = tiles[tile];
        const { initialColumns = 1, initialRows = 1, resizable = false } = preferences;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralDashboardTile, { key: tile, columns: initialColumns, rows: initialRows, resizable: resizable, meta: preferences },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, { columns: initialColumns, rows: initialRows })));
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralDashboardContainer, Object.assign({}, props, { children: children }));
};
Dashboard.displayName = 'Dashboard';
//# sourceMappingURL=Dashboard.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/actions.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/actions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerTile": () => (/* binding */ registerTile),
/* harmony export */   "unregisterTile": () => (/* binding */ unregisterTile)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function registerTile(ctx, name, value) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { tiles: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withKey)(state.registry.tiles, name, value) }) })));
}
function unregisterTile(ctx, name) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { tiles: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withoutKey)(state.registry.tiles, name) }) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/components.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/components.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PiralDashboardContainer": () => (/* binding */ PiralDashboardContainer),
/* harmony export */   "PiralDashboardTile": () => (/* binding */ PiralDashboardTile)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralDashboardContainer = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('DashboardContainer');
const PiralDashboardTile = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('DashboardTile');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/create.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/create.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDashboardApi": () => (/* binding */ createDashboardApi)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-dashboard/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard */ "./node_modules/piral-dashboard/esm/Dashboard.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./node_modules/piral-dashboard/esm/helpers.js");




/**
 * Creates the Pilet API extension for activating dashboard support.
 */
function createDashboardApi(config = {}) {
    const { tiles = [], defaultPreferences = {}, routes = ['/'] } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_0__);
        context.dispatch((0,piral_core__WEBPACK_IMPORTED_MODULE_1__.withAll)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.withTiles)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getTiles)(tiles, defaultPreferences)), (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.withRootExtension)('piral-dashboard', _Dashboard__WEBPACK_IMPORTED_MODULE_3__.Dashboard), (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.withRoutes)(routes)));
        return (api, target) => {
            const pilet = target.name;
            let next = 0;
            return {
                registerTile(name, arg, preferences) {
                    if (typeof name !== 'string') {
                        preferences = arg;
                        arg = name;
                        name = next++;
                    }
                    const id = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.buildName)(pilet, name);
                    context.registerTile(id, {
                        pilet,
                        component: (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.withApi)(context, arg, api, 'tile'),
                        preferences: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getPreferences)(defaultPreferences, preferences),
                    });
                    return () => api.unregisterTile(name);
                },
                unregisterTile(name) {
                    const id = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.buildName)(pilet, name);
                    context.unregisterTile(id);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/default.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/default.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultContainer": () => (/* binding */ DefaultContainer),
/* harmony export */   "DefaultTile": () => (/* binding */ DefaultTile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultContainer = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionSlot, { name: "dashboard", params: props, empty: () => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(props.children, 'default_dashboard') }));
const DefaultTile = (props) => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(props.children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/helpers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPreferences": () => (/* binding */ getPreferences),
/* harmony export */   "getTiles": () => (/* binding */ getTiles),
/* harmony export */   "withRoutes": () => (/* binding */ withRoutes),
/* harmony export */   "withTiles": () => (/* binding */ withTiles)
/* harmony export */ });
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./node_modules/piral-dashboard/esm/default.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard */ "./node_modules/piral-dashboard/esm/Dashboard.js");


function getPreferences(defaultPreferences, customPreferences = {}) {
    return Object.assign(Object.assign({}, defaultPreferences), customPreferences);
}
function getTiles(items, defaultPreferences) {
    const tiles = {};
    let i = 0;
    for (const { component, preferences } of items) {
        tiles[`global-${i++}`] = {
            pilet: undefined,
            component,
            preferences: getPreferences(defaultPreferences, preferences),
        };
    }
    return tiles;
}
function withTiles(tiles) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ DashboardTile: _default__WEBPACK_IMPORTED_MODULE_0__.DefaultTile, DashboardContainer: _default__WEBPACK_IMPORTED_MODULE_0__.DefaultContainer }, state.components), registry: Object.assign(Object.assign({}, state.registry), { tiles }) }));
}
function withRoutes(routes) {
    return (state) => (Object.assign(Object.assign({}, state), { routes: Object.assign(Object.assign({}, state.routes), routes.reduce((newRoutes, route) => {
            newRoutes[route] = _Dashboard__WEBPACK_IMPORTED_MODULE_1__.Dashboard;
            return newRoutes;
        }, {})) }));
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": () => (/* reexport safe */ _Dashboard__WEBPACK_IMPORTED_MODULE_2__.Dashboard),
/* harmony export */   "PiralDashboardContainer": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardContainer),
/* harmony export */   "PiralDashboardTile": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardTile),
/* harmony export */   "createDashboardApi": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_0__.createDashboardApi)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-dashboard/esm/create.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-dashboard/esm/components.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard */ "./node_modules/piral-dashboard/esm/Dashboard.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-ext/esm/create.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-ext/esm/create.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStandardApi": () => (/* binding */ createStandardApi)
/* harmony export */ });
/* harmony import */ var piral_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-translate */ "./node_modules/piral-translate/esm/create.js");
/* harmony import */ var piral_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-dashboard */ "./node_modules/piral-dashboard/esm/create.js");
/* harmony import */ var piral_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-menu */ "./node_modules/piral-menu/esm/create.js");
/* harmony import */ var piral_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral-notifications */ "./node_modules/piral-notifications/esm/create.js");
/* harmony import */ var piral_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral-modals */ "./node_modules/piral-modals/esm/create.js");
/* harmony import */ var piral_feeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral-feeds */ "./node_modules/piral-feeds/esm/create.js");






/**
 * Creates an array including all standard APIs from piral-ext.
 * @param settings Customizes the standard plugin settings.
 */
function createStandardApi(settings = {}) {
    const { locale = undefined, dashboard = undefined, menu = undefined, notifications = undefined, modals = undefined, feeds = undefined, } = settings;
    return [
        locale !== false && (0,piral_translate__WEBPACK_IMPORTED_MODULE_0__.createLocaleApi)(locale),
        dashboard !== false && (0,piral_dashboard__WEBPACK_IMPORTED_MODULE_1__.createDashboardApi)(dashboard),
        menu !== false && (0,piral_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuApi)(menu),
        notifications !== false && (0,piral_notifications__WEBPACK_IMPORTED_MODULE_3__.createNotificationsApi)(notifications),
        modals !== false && (0,piral_modals__WEBPACK_IMPORTED_MODULE_4__.createModalsApi)(modals),
        feeds !== false && (0,piral_feeds__WEBPACK_IMPORTED_MODULE_5__.createFeedsApi)(feeds),
    ].filter(Boolean);
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-ext/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/piral-ext/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.Dashboard),
/* harmony export */   "Languages": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.Languages),
/* harmony export */   "Menu": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.Menu),
/* harmony export */   "Modals": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.Modals),
/* harmony export */   "Notifications": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.Notifications),
/* harmony export */   "PiralDashboardContainer": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardContainer),
/* harmony export */   "PiralDashboardTile": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardTile),
/* harmony export */   "PiralLanguagesPicker": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralLanguagesPicker),
/* harmony export */   "PiralMenuContainer": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralMenuContainer),
/* harmony export */   "PiralMenuItem": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralMenuItem),
/* harmony export */   "PiralModalsDialog": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralModalsDialog),
/* harmony export */   "PiralModalsHost": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralModalsHost),
/* harmony export */   "PiralNotificationsHost": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralNotificationsHost),
/* harmony export */   "PiralNotificationsToast": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.PiralNotificationsToast),
/* harmony export */   "createDashboardApi": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.createDashboardApi),
/* harmony export */   "createFeedsApi": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.createFeedsApi),
/* harmony export */   "createLocaleApi": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.createLocaleApi),
/* harmony export */   "createMenuApi": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.createMenuApi),
/* harmony export */   "createModalsApi": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.createModalsApi),
/* harmony export */   "createNotificationsApi": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.createNotificationsApi),
/* harmony export */   "createStandardApi": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_0__.createStandardApi),
/* harmony export */   "getUserLocale": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.getUserLocale),
/* harmony export */   "setupLocalizer": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.setupLocalizer),
/* harmony export */   "useDynamicLanguage": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.useDynamicLanguage),
/* harmony export */   "useFeed": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.useFeed),
/* harmony export */   "useTranslate": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.useTranslate),
/* harmony export */   "withFeed": () => (/* reexport safe */ _libs__WEBPACK_IMPORTED_MODULE_1__.withFeed)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs */ "./node_modules/piral-ext/esm/libs.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-ext/esm/libs.js":
/*!********************************************!*\
  !*** ./node_modules/piral-ext/esm/libs.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": () => (/* reexport safe */ piral_dashboard__WEBPACK_IMPORTED_MODULE_1__.Dashboard),
/* harmony export */   "Languages": () => (/* reexport safe */ piral_translate__WEBPACK_IMPORTED_MODULE_0__.Languages),
/* harmony export */   "Menu": () => (/* reexport safe */ piral_menu__WEBPACK_IMPORTED_MODULE_3__.Menu),
/* harmony export */   "Modals": () => (/* reexport safe */ piral_modals__WEBPACK_IMPORTED_MODULE_4__.Modals),
/* harmony export */   "Notifications": () => (/* reexport safe */ piral_notifications__WEBPACK_IMPORTED_MODULE_5__.Notifications),
/* harmony export */   "PiralDashboardContainer": () => (/* reexport safe */ piral_dashboard__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardContainer),
/* harmony export */   "PiralDashboardTile": () => (/* reexport safe */ piral_dashboard__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardTile),
/* harmony export */   "PiralLanguagesPicker": () => (/* reexport safe */ piral_translate__WEBPACK_IMPORTED_MODULE_0__.PiralLanguagesPicker),
/* harmony export */   "PiralMenuContainer": () => (/* reexport safe */ piral_menu__WEBPACK_IMPORTED_MODULE_3__.PiralMenuContainer),
/* harmony export */   "PiralMenuItem": () => (/* reexport safe */ piral_menu__WEBPACK_IMPORTED_MODULE_3__.PiralMenuItem),
/* harmony export */   "PiralModalsDialog": () => (/* reexport safe */ piral_modals__WEBPACK_IMPORTED_MODULE_4__.PiralModalsDialog),
/* harmony export */   "PiralModalsHost": () => (/* reexport safe */ piral_modals__WEBPACK_IMPORTED_MODULE_4__.PiralModalsHost),
/* harmony export */   "PiralNotificationsHost": () => (/* reexport safe */ piral_notifications__WEBPACK_IMPORTED_MODULE_5__.PiralNotificationsHost),
/* harmony export */   "PiralNotificationsToast": () => (/* reexport safe */ piral_notifications__WEBPACK_IMPORTED_MODULE_5__.PiralNotificationsToast),
/* harmony export */   "createDashboardApi": () => (/* reexport safe */ piral_dashboard__WEBPACK_IMPORTED_MODULE_1__.createDashboardApi),
/* harmony export */   "createFeedsApi": () => (/* reexport safe */ piral_feeds__WEBPACK_IMPORTED_MODULE_2__.createFeedsApi),
/* harmony export */   "createLocaleApi": () => (/* reexport safe */ piral_translate__WEBPACK_IMPORTED_MODULE_0__.createLocaleApi),
/* harmony export */   "createMenuApi": () => (/* reexport safe */ piral_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuApi),
/* harmony export */   "createModalsApi": () => (/* reexport safe */ piral_modals__WEBPACK_IMPORTED_MODULE_4__.createModalsApi),
/* harmony export */   "createNotificationsApi": () => (/* reexport safe */ piral_notifications__WEBPACK_IMPORTED_MODULE_5__.createNotificationsApi),
/* harmony export */   "getUserLocale": () => (/* reexport safe */ piral_translate__WEBPACK_IMPORTED_MODULE_0__.getUserLocale),
/* harmony export */   "setupLocalizer": () => (/* reexport safe */ piral_translate__WEBPACK_IMPORTED_MODULE_0__.setupLocalizer),
/* harmony export */   "useDynamicLanguage": () => (/* reexport safe */ piral_translate__WEBPACK_IMPORTED_MODULE_0__.useDynamicLanguage),
/* harmony export */   "useFeed": () => (/* reexport safe */ piral_feeds__WEBPACK_IMPORTED_MODULE_2__.useFeed),
/* harmony export */   "useTranslate": () => (/* reexport safe */ piral_translate__WEBPACK_IMPORTED_MODULE_0__.useTranslate),
/* harmony export */   "withFeed": () => (/* reexport safe */ piral_feeds__WEBPACK_IMPORTED_MODULE_2__.withFeed)
/* harmony export */ });
/* harmony import */ var piral_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-translate */ "./node_modules/piral-translate/esm/index.js");
/* harmony import */ var piral_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-dashboard */ "./node_modules/piral-dashboard/esm/index.js");
/* harmony import */ var piral_feeds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-feeds */ "./node_modules/piral-feeds/esm/index.js");
/* harmony import */ var piral_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral-menu */ "./node_modules/piral-menu/esm/index.js");
/* harmony import */ var piral_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral-modals */ "./node_modules/piral-modals/esm/index.js");
/* harmony import */ var piral_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral-notifications */ "./node_modules/piral-notifications/esm/index.js");






//# sourceMappingURL=libs.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/actions.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-feeds/esm/actions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFeed": () => (/* binding */ createFeed),
/* harmony export */   "destroyFeed": () => (/* binding */ destroyFeed),
/* harmony export */   "loadFeed": () => (/* binding */ loadFeed),
/* harmony export */   "loadedFeed": () => (/* binding */ loadedFeed),
/* harmony export */   "updateFeed": () => (/* binding */ updateFeed)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function createFeed(ctx, id) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withKey)(state.feeds, id, {
            data: undefined,
            error: undefined,
            loaded: false,
            loading: false,
        }) })));
}
function destroyFeed(ctx, id) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withoutKey)(state.feeds, id) })));
}
function loadFeed(ctx, options) {
    const { id } = options;
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withKey)(state.feeds, id, {
            data: undefined,
            error: undefined,
            loaded: false,
            loading: true,
        }) })));
    return options.initialize().then((baseData) => {
        loadedFeed(ctx, id, baseData, undefined);
        options.dispose = options.connect((item) => {
            updateFeed(ctx, id, item, options.update);
        });
    }, (err) => loadedFeed(ctx, id, undefined, err));
}
function loadedFeed(ctx, id, data, error) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withKey)(state.feeds, id, {
            loading: false,
            loaded: true,
            error,
            data,
        }) })));
}
function updateFeed(ctx, id, item, reducer) {
    const feed = ctx.readState((state) => state.feeds[id]);
    const result = reducer(feed.data, item);
    if (result instanceof Promise) {
        return result
            .then((data) => loadedFeed(ctx, id, data, undefined))
            .catch((error) => loadedFeed(ctx, id, undefined, error));
    }
    else if (result !== feed.data) {
        loadedFeed(ctx, id, result, undefined);
    }
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/create.js":
/*!************************************************!*\
  !*** ./node_modules/piral-feeds/esm/create.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFeedsApi": () => (/* binding */ createFeedsApi)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-feeds/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _withFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withFeed */ "./node_modules/piral-feeds/esm/withFeed.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-feeds/esm/utils.js");




/**
 * Creates new Pilet API extensions for supporting simplified data feed connections.
 */
function createFeedsApi(config = {}) {
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_0__);
        context.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: {} })));
        return (_, target) => {
            let feeds = 0;
            return {
                createConnector(resolver) {
                    const id = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.buildName)(target.name, feeds++);
                    const options = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createFeedOptions)(id, resolver);
                    const invalidate = () => {
                        var _a;
                        (_a = options.dispose) === null || _a === void 0 ? void 0 : _a.call(options);
                        context.createFeed(options.id);
                    };
                    if (options.immediately) {
                        context.loadFeed(options);
                    }
                    else {
                        invalidate();
                    }
                    const connect = ((component) => (0,_withFeed__WEBPACK_IMPORTED_MODULE_3__.withFeed)(component, options));
                    Object.keys(options.reducers).forEach((type) => {
                        const reducer = options.reducers[type];
                        if (typeof reducer === 'function') {
                            connect[type] = (...args) => {
                                context.updateFeed(id, args, (data, item) => reducer.call(connect, data, ...item));
                            };
                        }
                    });
                    connect.invalidate = invalidate;
                    return connect;
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-feeds/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFeedsApi": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_0__.createFeedsApi),
/* harmony export */   "useFeed": () => (/* reexport safe */ _useFeed__WEBPACK_IMPORTED_MODULE_1__.useFeed),
/* harmony export */   "withFeed": () => (/* reexport safe */ _withFeed__WEBPACK_IMPORTED_MODULE_2__.withFeed)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-feeds/esm/create.js");
/* harmony import */ var _useFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFeed */ "./node_modules/piral-feeds/esm/useFeed.js");
/* harmony import */ var _withFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withFeed */ "./node_modules/piral-feeds/esm/withFeed.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/useFeed.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-feeds/esm/useFeed.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFeed": () => (/* binding */ useFeed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


/**
 * Hook that returns the connected feed.
 * @param options The options for retrieving the feed.
 */
function useFeed(options) {
    const { loaded, loading, error, data } = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((s) => s.feeds[options.id]);
    const load = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useAction)('loadFeed');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!loaded && !loading) {
            load(options);
        }
    }, [loaded]);
    return [loaded, data, error];
}
//# sourceMappingURL=useFeed.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-feeds/esm/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFeedOptions": () => (/* binding */ createFeedOptions)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const noop = () => { };
function createFeedOptions(id, resolver) {
    if ((0,piral_core__WEBPACK_IMPORTED_MODULE_0__.isfunc)(resolver)) {
        return {
            id,
            initialize() {
                return resolver();
            },
            connect() {
                return noop;
            },
            update(data) {
                return Promise.resolve(data);
            },
            immediately: false,
            reducers: {},
        };
    }
    else {
        return {
            id,
            initialize() {
                return resolver.initialize();
            },
            connect(cb) {
                if (typeof resolver.connect === 'function') {
                    return resolver.connect(cb);
                }
                else {
                    return noop;
                }
            },
            update(data, item) {
                if (typeof resolver.update === 'function') {
                    return resolver.update(data, item);
                }
                else {
                    return Promise.resolve(data);
                }
            },
            immediately: resolver.immediately,
            reducers: resolver.reducers || {},
        };
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/withFeed.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-feeds/esm/withFeed.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withFeed": () => (/* binding */ withFeed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _useFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFeed */ "./node_modules/piral-feeds/esm/useFeed.js");



function withFeed(Component, options) {
    const FeedView = (props) => {
        const [loaded, data, error] = (0,_useFeed__WEBPACK_IMPORTED_MODULE_1__.useFeed)(options);
        if (!loaded) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral_core__WEBPACK_IMPORTED_MODULE_2__.RegisteredLoadingIndicator, null);
        }
        else if (data) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, props, { data: data }));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral_core__WEBPACK_IMPORTED_MODULE_2__.RegisteredErrorInfo, { type: "feed", error: error });
        }
    };
    FeedView.displayName = `FeedView_${options.id}`;
    return FeedView;
}
//# sourceMappingURL=withFeed.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/Menu.js":
/*!*********************************************!*\
  !*** ./node_modules/piral-menu/esm/Menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-menu/esm/components.js");



const Menu = ({ type = 'general' }) => {
    const menuItems = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((s) => s.registry.menuItems);
    const renderItems = Object.keys(menuItems)
        .filter((name) => menuItems[name].settings.type === type)
        .map((name) => ({
        name,
        Component: menuItems[name].component,
        meta: menuItems[name].settings,
    }));
    const children = renderItems.map(({ name, Component, meta }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralMenuItem, { key: name, type: type, meta: meta },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, null))));
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralMenuContainer, { type: type }, children);
};
Menu.displayName = 'Menu';
//# sourceMappingURL=Menu.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/actions.js":
/*!************************************************!*\
  !*** ./node_modules/piral-menu/esm/actions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerMenuItem": () => (/* binding */ registerMenuItem),
/* harmony export */   "unregisterMenuItem": () => (/* binding */ unregisterMenuItem)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function registerMenuItem(ctx, name, value) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { menuItems: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withKey)(state.registry.menuItems, name, value) }) })));
}
function unregisterMenuItem(ctx, name) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { menuItems: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withoutKey)(state.registry.menuItems, name) }) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/components.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-menu/esm/components.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PiralMenuContainer": () => (/* binding */ PiralMenuContainer),
/* harmony export */   "PiralMenuItem": () => (/* binding */ PiralMenuItem)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralMenuContainer = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('MenuContainer');
const PiralMenuItem = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('MenuItem');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/create.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-menu/esm/create.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuApi": () => (/* binding */ createMenuApi)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-menu/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./node_modules/piral-menu/esm/default.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./node_modules/piral-menu/esm/Menu.js");




function getSettings(defaultSettings, customSettings = {}) {
    return Object.assign(Object.assign({ type: 'general' }, defaultSettings), customSettings);
}
function getMenuItems(items, defaultSettings) {
    const menuItems = {};
    let i = 0;
    for (const { component, settings } of items) {
        menuItems[`global-${i++}`] = {
            pilet: undefined,
            component,
            settings: getSettings(defaultSettings, settings),
        };
    }
    return menuItems;
}
function withMenu(menuItems) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ MenuContainer: _default__WEBPACK_IMPORTED_MODULE_0__.DefaultContainer, MenuItem: _default__WEBPACK_IMPORTED_MODULE_0__.DefaultItem }, state.components), registry: Object.assign(Object.assign({}, state.registry), { menuItems }) }));
}
/**
 * Creates new Pilet API extensions for integration of menu items.
 */
function createMenuApi(config = {}) {
    const { items = [], defaultSettings = {} } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_1__);
        context.dispatch((0,piral_core__WEBPACK_IMPORTED_MODULE_2__.withAll)(withMenu(getMenuItems(items, defaultSettings)), (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.withRootExtension)('piral-menu', _Menu__WEBPACK_IMPORTED_MODULE_3__.Menu)));
        return (api, target) => {
            const pilet = target.name;
            let next = 0;
            return {
                registerMenu(name, arg, settings) {
                    if (typeof name !== 'string') {
                        settings = arg;
                        arg = name;
                        name = next++;
                    }
                    const id = (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.buildName)(pilet, name);
                    context.registerMenuItem(id, {
                        pilet,
                        component: (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.withApi)(context, arg, api, 'menu'),
                        settings: getSettings(defaultSettings, settings),
                    });
                    return () => api.unregisterMenu(name);
                },
                unregisterMenu(name) {
                    const id = (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.buildName)(pilet, name);
                    context.unregisterMenuItem(id);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/default.js":
/*!************************************************!*\
  !*** ./node_modules/piral-menu/esm/default.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultContainer": () => (/* binding */ DefaultContainer),
/* harmony export */   "DefaultItem": () => (/* binding */ DefaultItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultContainer = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionSlot, { name: `menu_${props.type}`, params: props, empty: () => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(props.children, 'default_menu') }));
const DefaultItem = (props) => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(props.children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-menu/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_2__.Menu),
/* harmony export */   "PiralMenuContainer": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralMenuContainer),
/* harmony export */   "PiralMenuItem": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralMenuItem),
/* harmony export */   "createMenuApi": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_0__.createMenuApi)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-menu/esm/create.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-menu/esm/components.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./node_modules/piral-menu/esm/Menu.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/Modals.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-modals/esm/Modals.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modals": () => (/* binding */ Modals)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-modals/esm/components.js");



function closeAll(modals) {
    modals.forEach((m) => m.close());
}
function findModal(modals, name) {
    if (name) {
        const [modal] = Object.keys(modals)
            .filter((m) => modals[m].name === name)
            .map((m) => modals[m]);
        return modal;
    }
    return undefined;
}
const Modals = () => {
    const modals = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((s) => s.registry.modals);
    const dialogs = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((s) => s.modals);
    const close = () => closeAll(dialogs);
    const children = dialogs
        .map((n) => {
        const reg = modals[n.name] || findModal(modals, n.alternative);
        const Component = reg && reg.component;
        const defaults = reg && reg.defaults;
        const options = Object.assign(Object.assign({}, defaults), n.options);
        return (Component && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralModalsDialog, Object.assign({}, n, { options: options, defaults: reg.defaults, layout: reg.layout, key: n.name }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, { onClose: n.close, options: options }))));
    })
        .filter(Boolean);
    const open = children.length > 0;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralModalsHost, { open: open, close: close }, children));
};
Modals.displayName = 'Modals';
//# sourceMappingURL=Modals.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/actions.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-modals/esm/actions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "registerModal": () => (/* binding */ registerModal),
/* harmony export */   "unregisterModal": () => (/* binding */ unregisterModal)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function openModal(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { modals: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.prependItem)(state.modals, dialog) })));
}
function closeModal(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { modals: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.excludeOn)(state.modals, (modal) => modal.id === dialog.id) })));
}
function registerModal(ctx, name, value) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { modals: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withKey)(state.registry.modals, name, value) }) })));
}
function unregisterModal(ctx, name) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { modals: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withoutKey)(state.registry.modals, name) }) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/components.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-modals/esm/components.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PiralModalsDialog": () => (/* binding */ PiralModalsDialog),
/* harmony export */   "PiralModalsHost": () => (/* binding */ PiralModalsHost)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralModalsHost = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('ModalsHost');
const PiralModalsDialog = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('ModalsDialog');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/create.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-modals/esm/create.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModalsApi": () => (/* binding */ createModalsApi)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-modals/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./node_modules/piral-modals/esm/default.js");
/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modals */ "./node_modules/piral-modals/esm/Modals.js");




function getModalDialogs(dialogs) {
    const modals = {};
    for (const { name, component, defaults, layout = {} } of dialogs) {
        modals[`global-${name}`] = {
            pilet: undefined,
            name,
            component,
            defaults,
            layout,
        };
    }
    return modals;
}
function withModals(modals) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ ModalsHost: _default__WEBPACK_IMPORTED_MODULE_0__.DefaultHost, ModalsDialog: _default__WEBPACK_IMPORTED_MODULE_0__.DefaultDialog }, state.components), registry: Object.assign(Object.assign({}, state.registry), { modals }), modals: [] }));
}
/**
 * Creates new Pilet API extensions for support modal dialogs.
 */
function createModalsApi(config = {}) {
    const { dialogs = [], selectId = (name) => `${name}-${~~(Math.random() * 10000)}` } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_1__);
        context.dispatch((0,piral_core__WEBPACK_IMPORTED_MODULE_2__.withAll)(withModals(getModalDialogs(dialogs)), (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.withRootExtension)('piral-modals', _Modals__WEBPACK_IMPORTED_MODULE_3__.Modals)));
        return (api, target) => {
            const pilet = target.name;
            return {
                showModal(simpleName, options) {
                    const name = (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.buildName)(pilet, simpleName);
                    const dialog = {
                        id: selectId(name),
                        name,
                        alternative: simpleName,
                        options,
                        close() {
                            context.closeModal(dialog);
                        },
                    };
                    context.openModal(dialog);
                    return dialog.close;
                },
                registerModal(name, arg, defaults, layout = {}) {
                    const id = (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.buildName)(pilet, name);
                    context.registerModal(id, {
                        pilet,
                        name,
                        component: (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.withApi)(context, arg, api, 'modal'),
                        defaults,
                        layout,
                    });
                    return () => api.unregisterModal(name);
                },
                unregisterModal(name) {
                    const id = (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.buildName)(pilet, name);
                    context.unregisterModal(id);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/default.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-modals/esm/default.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultDialog": () => (/* binding */ DefaultDialog),
/* harmony export */   "DefaultHost": () => (/* binding */ DefaultHost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultHost = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "piral-modals-host" }, props.open && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "piral-modals-overlay" }, props.children)));
const DefaultDialog = (props) => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(props.children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/piral-modals/esm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modals": () => (/* reexport safe */ _Modals__WEBPACK_IMPORTED_MODULE_2__.Modals),
/* harmony export */   "PiralModalsDialog": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralModalsDialog),
/* harmony export */   "PiralModalsHost": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralModalsHost),
/* harmony export */   "createModalsApi": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_0__.createModalsApi)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-modals/esm/create.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-modals/esm/components.js");
/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modals */ "./node_modules/piral-modals/esm/Modals.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/Notifications.js":
/*!***************************************************************!*\
  !*** ./node_modules/piral-notifications/esm/Notifications.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notifications": () => (/* binding */ Notifications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-notifications/esm/components.js");



const Notifications = () => {
    const notifications = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((s) => s.notifications);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralNotificationsHost, null, notifications.map(({ component: Component, close, options, id }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralNotificationsToast, { onClose: close, options: options, key: id },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, { onClose: close, options: options }))))));
};
Notifications.displayName = 'Notifications';
//# sourceMappingURL=Notifications.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/actions.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-notifications/esm/actions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeNotification": () => (/* binding */ closeNotification),
/* harmony export */   "openNotification": () => (/* binding */ openNotification)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function openNotification(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { notifications: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.prependItem)(state.notifications, dialog) })));
}
function closeNotification(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { notifications: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.excludeOn)(state.notifications, (notification) => notification.id === dialog.id) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/components.js":
/*!************************************************************!*\
  !*** ./node_modules/piral-notifications/esm/components.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PiralNotificationsHost": () => (/* binding */ PiralNotificationsHost),
/* harmony export */   "PiralNotificationsToast": () => (/* binding */ PiralNotificationsToast)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralNotificationsHost = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('NotificationsHost');
const PiralNotificationsToast = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('NotificationsToast');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/create.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-notifications/esm/create.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotificationsApi": () => (/* binding */ createNotificationsApi)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-notifications/esm/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./node_modules/piral-notifications/esm/default.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Notifications */ "./node_modules/piral-notifications/esm/Notifications.js");





function isElement(element) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element);
}
function toComponent(component) {
    if (typeof component === 'string') {
        const text = component;
        return () => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(text);
    }
    else if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(component)) {
        const element = component;
        return () => element;
    }
    return component;
}
function createNotification(context, id, content, defaultOptions, customOptions = {}) {
    const options = Object.assign(Object.assign({}, defaultOptions), customOptions);
    const notification = {
        id,
        component: toComponent(content),
        options,
        close() {
            setTimeout(() => context.closeNotification(notification), 0);
        },
    };
    if (typeof options.autoClose === 'number' && options.autoClose > 0) {
        setTimeout(notification.close, options.autoClose);
    }
    return notification;
}
function getNotifications(context, messages, defaultOptions) {
    const notifications = [];
    let i = 0;
    for (const { content, options } of messages) {
        notifications.push(createNotification(context, `global-${i++}`, content, defaultOptions, options));
    }
    return notifications;
}
function withNotifications(notifications) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ NotificationsHost: _default__WEBPACK_IMPORTED_MODULE_2__.DefaultHost, NotificationsToast: _default__WEBPACK_IMPORTED_MODULE_2__.DefaultToast }, state.components), notifications }));
}
/**
 * Creates new Pilet API extensions for showing notifications.
 */
function createNotificationsApi(config = {}) {
    const { defaultOptions = {}, selectId = () => `${~~(Math.random() * 10000)}`, messages = [] } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_3__);
        context.dispatch((0,piral_core__WEBPACK_IMPORTED_MODULE_1__.withAll)(withNotifications(getNotifications(context, messages, defaultOptions)), (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.withRootExtension)('piral-notifications', _Notifications__WEBPACK_IMPORTED_MODULE_4__.Notifications)));
        return (api) => ({
            showNotification(content, customOptions) {
                const Component = typeof content === 'string'
                    ? content
                    : isElement(content)
                        ? content
                        : (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.withApi)(context, content, api, 'extension');
                const notification = createNotification(context, selectId(), Component, defaultOptions, customOptions);
                context.openNotification(notification);
                return notification.close;
            },
        });
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-notifications/esm/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultHost": () => (/* binding */ DefaultHost),
/* harmony export */   "DefaultToast": () => (/* binding */ DefaultToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultHost = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "piral-notifications-host", key: "default_notifications" }, props.children));
const DefaultToast = ({ children }) => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-notifications/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notifications": () => (/* reexport safe */ _Notifications__WEBPACK_IMPORTED_MODULE_2__.Notifications),
/* harmony export */   "PiralNotificationsHost": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralNotificationsHost),
/* harmony export */   "PiralNotificationsToast": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.PiralNotificationsToast),
/* harmony export */   "createNotificationsApi": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_0__.createNotificationsApi)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-notifications/esm/create.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-notifications/esm/components.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ "./node_modules/piral-notifications/esm/Notifications.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/Languages.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-translate/esm/Languages.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Languages": () => (/* binding */ Languages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-translate/esm/components.js");



const Languages = () => {
    const { available, selected } = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((m) => m.language);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PiralLanguagesPicker, { selected: selected, available: available });
};
//# sourceMappingURL=Languages.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/actions.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-translate/esm/actions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActions": () => (/* binding */ createActions)
/* harmony export */ });
function createActions(localizer) {
    return {
        selectLanguage(ctx, selected) {
            ctx.dispatch((state) => {
                localizer.language = selected;
                const previousLanguage = state.language.selected;
                const currentLanguage = selected;
                // emit this event *after* we changed the state container
                setTimeout(() => {
                    ctx.emit('select-language', {
                        previousLanguage,
                        currentLanguage,
                    });
                }, 0);
                return Object.assign(Object.assign({}, state), { language: Object.assign(Object.assign({}, state.language), { loading: selected === undefined, selected }) });
            });
        },
        translate(_, key, variables) {
            return localizer && localizer.localizeGlobal(key, variables);
        },
        setTranslations(ctx, language, data) {
            localizer.messages[language] = data.global;
            for (const item of data.locals) {
                const api = ctx.apis[item.name];
                if (api) {
                    const translations = api.getTranslations();
                    translations[language] = item.value;
                    api.setTranslations(translations);
                }
            }
        },
        getTranslations(ctx, language) {
            return {
                global: localizer.messages[language],
                locals: Object.keys(ctx.apis).map((name) => ({
                    name,
                    value: ctx.apis[name].getTranslations()[language],
                })),
            };
        },
    };
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/components.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-translate/esm/components.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PiralLanguagesPicker": () => (/* binding */ PiralLanguagesPicker)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralLanguagesPicker = (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.getPiralComponent)('LanguagesPicker');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/create.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-translate/esm/create.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLocaleApi": () => (/* binding */ createLocaleApi),
/* harmony export */   "setupLocalizer": () => (/* binding */ setupLocalizer)
/* harmony export */ });
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-translate/esm/actions.js");
/* harmony import */ var _localize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localize */ "./node_modules/piral-translate/esm/localize.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default */ "./node_modules/piral-translate/esm/default.js");




/**
 * Sets up a new localizer by using the given config.
 * @param config The configuration for the new localizer.
 */
function setupLocalizer(config = {}) {
    const msgs = config.messages || {};
    const languages = Object.keys(msgs);
    const defaultLang = languages[0] || 'en';
    const computeLang = config.language;
    const usedLang = typeof computeLang === 'function' ? computeLang(languages, defaultLang, 'en') : computeLang;
    const language = usedLang || defaultLang;
    return new _localize__WEBPACK_IMPORTED_MODULE_1__.Localizer(msgs, language, languages.length ? languages : [language], config.fallback);
}
/**
 * Creates new Pilet API extensions for localization.
 * @param localizer The specific localizer to be used, if any.
 */
function createLocaleApi(localizer = setupLocalizer()) {
    return (context) => {
        context.defineActions((0,_actions__WEBPACK_IMPORTED_MODULE_2__.createActions)(localizer));
        context.dispatch((state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ LanguagesPicker: _default__WEBPACK_IMPORTED_MODULE_3__.DefaultPicker }, state.components), language: {
                loading: false,
                available: localizer.languages,
                selected: localizer.language,
            } })));
        return (api) => {
            let localTranslations = {};
            return {
                addTranslations(messages, isOverriding = true) {
                    const messagesToMerge = messages;
                    if (isOverriding) {
                        messagesToMerge.unshift(localizer.messages);
                    }
                    else {
                        messagesToMerge.push(localizer.messages);
                    }
                    this.setTranslations(deepmerge__WEBPACK_IMPORTED_MODULE_0__.all(messagesToMerge));
                },
                getCurrentLanguage(cb) {
                    const selected = context.readState((s) => s.language.selected);
                    if (cb) {
                        cb(selected);
                        const handler = (ev) => {
                            cb(ev.currentLanguage);
                        };
                        api.on('select-language', handler);
                        return () => api.off('select-language', handler);
                    }
                    return selected;
                },
                setTranslations(messages) {
                    localTranslations = messages;
                },
                getTranslations() {
                    return localTranslations;
                },
                translate(tag, variables) {
                    return localizer.localizeLocal(localTranslations, tag, variables);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/current.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-translate/esm/current.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserLocale": () => (/* binding */ getUserLocale)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function getUserLocaleUnchecked(defaultLocale, remoteLocale) {
    const storedLocale = piral_core__WEBPACK_IMPORTED_MODULE_0__.cookie.getItem('_culture') || piral_core__WEBPACK_IMPORTED_MODULE_0__.storage.getItem('locale');
    if (storedLocale) {
        return storedLocale;
    }
    else if (remoteLocale) {
        return remoteLocale.toLowerCase().substring(0, 2);
    }
    else if (navigator.language) {
        return navigator.language.substring(0, 2);
    }
    return defaultLocale;
}
function getUserLocale(availableLocales, defaultLocale, fallbackLocale) {
    const selected = getUserLocaleUnchecked(defaultLocale, fallbackLocale || '');
    if (availableLocales.indexOf(selected) !== -1) {
        return selected;
    }
    return defaultLocale;
}
//# sourceMappingURL=current.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/default.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-translate/esm/default.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPicker": () => (/* binding */ DefaultPicker)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const DefaultPicker = (props) => (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.defaultRender)(undefined);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/hooks.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-translate/esm/hooks.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDynamicLanguage": () => (/* binding */ useDynamicLanguage),
/* harmony export */   "useTranslate": () => (/* binding */ useTranslate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


function useDynamicLanguage(defaultSelected, load) {
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSelected);
    const { selectLanguage, setTranslations, getTranslations } = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useActions)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let active = true;
        const current = getTranslations(selected);
        selectLanguage(undefined);
        load(selected, current).then((result) => {
            if (active) {
                setTranslations(selected, result);
                selectLanguage(selected);
            }
        }, (err) => console.error(err));
        return () => {
            active = false;
        };
    }, [selected]);
    return [selected, setSelected];
}
function useTranslate() {
    const { translate } = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useActions)();
    (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((m) => m.language.selected);
    return translate;
}
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-translate/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Languages": () => (/* reexport safe */ _Languages__WEBPACK_IMPORTED_MODULE_4__.Languages),
/* harmony export */   "PiralLanguagesPicker": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PiralLanguagesPicker),
/* harmony export */   "createLocaleApi": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_1__.createLocaleApi),
/* harmony export */   "getUserLocale": () => (/* reexport safe */ _current__WEBPACK_IMPORTED_MODULE_2__.getUserLocale),
/* harmony export */   "setupLocalizer": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_1__.setupLocalizer),
/* harmony export */   "useDynamicLanguage": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useDynamicLanguage),
/* harmony export */   "useTranslate": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useTranslate)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/piral-translate/esm/components.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/piral-translate/esm/create.js");
/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current */ "./node_modules/piral-translate/esm/current.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./node_modules/piral-translate/esm/hooks.js");
/* harmony import */ var _Languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Languages */ "./node_modules/piral-translate/esm/Languages.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/localize.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-translate/esm/localize.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Localizer": () => (/* binding */ Localizer)
/* harmony export */ });
function defaultFallback(key, language) {
    if (false) {}
    else {
        if (language) {
            console.warn(`Missing translation of "${key}" in language "${language}".`);
            return `__${language}_${key}__`;
        }
        else {
            return '';
        }
    }
}
function formatMessage(message, variables) {
    return message.replace(/{{\s*([A-Za-z0-9_.]+)\s*}}/g, (_match, p1) => {
        return p1 in variables ? variables[p1] || '' : `{{${p1}}}`;
    });
}
class Localizer {
    /**
     * Creates a new instance of a localizer.
     */
    constructor(messages, language, languages, fallback = defaultFallback) {
        this.messages = messages;
        this.language = language;
        this.languages = languages;
        this.fallback = fallback;
    }
    /**
     * Localizes the given key via the global translations.
     * @param key The key of the translation snippet.
     * @param variables The optional variables to use.
     */
    localizeGlobal(key, variables) {
        return this.localizeBase(key, variables);
    }
    /**
     * Localizes the given key via the local translations.
     * Uses the global translations as fallback mechanism.
     * @param localMessages The local translations to prefer.
     * @param key The key of the translation snippet.
     * @param variables The optional variables to use.
     */
    localizeLocal(localMessages, key, variables) {
        const message = this.translateMessage(localMessages, key, variables);
        if (message === undefined) {
            return this.localizeBase(key, variables);
        }
        return message;
    }
    localizeBase(key, variables) {
        const message = this.translateMessage(this.messages, key, variables);
        if (message === undefined) {
            return this.fallback(key, this.language);
        }
        return message;
    }
    translateMessage(messages, key, variables) {
        const language = this.language;
        const translations = language && messages[language];
        const translation = translations && translations[key];
        return translation && (variables ? formatMessage(translation, variables) : translation);
    }
}
//# sourceMappingURL=localize.js.map

/***/ }),

/***/ "./node_modules/piral/esm/api.js":
/*!***************************************!*\
  !*** ./node_modules/piral/esm/api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPiral": () => (/* binding */ createPiral),
/* harmony export */   "extendPiralApi": () => (/* binding */ extendPiralApi)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var piral_ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-ext */ "./node_modules/piral-ext/esm/create.js");


/**
 * Extends the standard Pilet API with custom API and settings.
 * @param settings Customizes the standard plugin settings.
 * @param customApis The custom APIs to add.
 * @deprecated Use `[...customApis, createStandardApi(settings)`] instead.
 */
function extendPiralApi(settings = {}, customApis = []) {
    const extenders = Array.isArray(customApis) ? customApis : [customApis];
    return [...extenders, ...(0,piral_ext__WEBPACK_IMPORTED_MODULE_1__.createStandardApi)(settings)];
}
/**
 * Creates a standard Piral instance.
 * @param config The config for creating the piral state.
 * @param settings Customizes the standard plugin settings.
 * @deprecated Use `createInstance` instead.
 */
function createPiral(config = {}, settings) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object.assign(Object.assign({}, config), { plugins: extendPiralApi(settings, config.plugins) }));
}
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/piral/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/piral/esm/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* empty/unused harmony star reexport */
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.Dashboard),
/* harmony export */   "Languages": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.Languages),
/* harmony export */   "Menu": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.Menu),
/* harmony export */   "Modals": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.Modals),
/* harmony export */   "Notifications": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.Notifications),
/* harmony export */   "PiralDashboardContainer": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardContainer),
/* harmony export */   "PiralDashboardTile": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralDashboardTile),
/* harmony export */   "PiralLanguagesPicker": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralLanguagesPicker),
/* harmony export */   "PiralMenuContainer": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralMenuContainer),
/* harmony export */   "PiralMenuItem": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralMenuItem),
/* harmony export */   "PiralModalsDialog": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralModalsDialog),
/* harmony export */   "PiralModalsHost": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralModalsHost),
/* harmony export */   "PiralNotificationsHost": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralNotificationsHost),
/* harmony export */   "PiralNotificationsToast": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.PiralNotificationsToast),
/* harmony export */   "createDashboardApi": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.createDashboardApi),
/* harmony export */   "createFeedsApi": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.createFeedsApi),
/* harmony export */   "createLocaleApi": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.createLocaleApi),
/* harmony export */   "createMenuApi": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.createMenuApi),
/* harmony export */   "createModalsApi": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.createModalsApi),
/* harmony export */   "createNotificationsApi": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.createNotificationsApi),
/* harmony export */   "createPiral": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.createPiral),
/* harmony export */   "createStandardApi": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.createStandardApi),
/* harmony export */   "extendPiralApi": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.extendPiralApi),
/* harmony export */   "getUserLocale": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.getUserLocale),
/* harmony export */   "hydrateInstance": () => (/* reexport safe */ _hydrate__WEBPACK_IMPORTED_MODULE_3__.hydrateInstance),
/* harmony export */   "renderInstance": () => (/* reexport safe */ _render__WEBPACK_IMPORTED_MODULE_4__.renderInstance),
/* harmony export */   "setupLocalizer": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.setupLocalizer),
/* harmony export */   "useDynamicLanguage": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.useDynamicLanguage),
/* harmony export */   "useFeed": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.useFeed),
/* harmony export */   "useTranslate": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.useTranslate),
/* harmony export */   "withFeed": () => (/* reexport safe */ piral_ext__WEBPACK_IMPORTED_MODULE_1__.withFeed)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var piral_ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-ext */ "./node_modules/piral-ext/esm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/piral/esm/api.js");
/* harmony import */ var _hydrate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hydrate */ "./node_modules/piral/esm/hydrate.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ "./node_modules/piral/esm/render.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral/esm/instance.js":
/*!********************************************!*\
  !*** ./node_modules/piral/esm/instance.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInstanceElement": () => (/* binding */ createInstanceElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var piral_ext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-ext */ "./node_modules/piral-dashboard/esm/Dashboard.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function createInstanceElement(instance, layout, errors, dashboardPath = '/', piralChildren) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { instance: instance },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { layout: layout }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { errors: errors }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { path: dashboardPath, component: piral_ext__WEBPACK_IMPORTED_MODULE_2__.Dashboard }),
        piralChildren));
}
//# sourceMappingURL=instance.js.map

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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


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

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.MemoryRouter),
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "Prompt": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Prompt),
/* harmony export */   "Redirect": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Redirect),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Router),
/* harmony export */   "StaticRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.StaticRouter),
/* harmony export */   "Switch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Switch),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   "useHistory": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useHistory),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useParams),
/* harmony export */   "useRouteMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRouteMatch),
/* harmony export */   "withRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.withRouter)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_7__.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),
    forceRefresh: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number)
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_7__.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_7__.createLocation)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_7__.createPath)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_7__.createPath)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func), prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().any)
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    activeStyle: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
    className: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)]),
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    style: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)])
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Prompt": () => (/* binding */ Prompt),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "StaticRouter": () => (/* binding */ StaticRouter),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "__HistoryContext": () => (/* binding */ historyContext),
/* harmony export */   "__RouterContext": () => (/* binding */ context),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "useHistory": () => (/* binding */ useHistory),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useRouteMatch": () => (/* binding */ useRouteMatch),
/* harmony export */   "withRouter": () => (/* binding */ withRouter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__);












var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" // 'global proper'
? // eslint-disable-next-line no-undef
globalThis : typeof window !== "undefined" ? window // Browser
: typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g // node.js
: {};

function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
} // Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // eslint-disable-next-line no-self-compare
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = "__create-react-context-" + getUniqueId() + "__";

  var Provider = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _React$Component);

    function Provider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
             true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, "calculateChangedBits: Expected the return value to be a " + "31-bit integer. Instead received: " + changedBits) : 0;
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_1__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_React$Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Consumer, _React$Component2);

    function Consumer() {
      var _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
      _this2.observedBits = void 0;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_1__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

// MIT License
var createContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext || createReactContext;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = createContext();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Router.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node),
    history: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object.isRequired),
    staticContext: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),
    initialIndex: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node)
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)]);
  Prompt.propTypes = {
    when: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_10__.locationsAreEqual)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    from: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    to: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node)]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is__WEBPACK_IMPORTED_MODULE_5__.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
    path: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().string), prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().string))]),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool)
  };

  Route.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_10__.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
      true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
    location: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Switch.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global$1 = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global$1[key] && global$1[key] !== "esm") {
      var initialBuildName = buildNames[global$1[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global$1[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvePathname);


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

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valueEqual);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("07727c2fd4e688fb1b5e")
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ee448ded6bc3d34ddf54.hot-update.js.map