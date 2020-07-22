(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module-ngfactory"],{

/***/ "./src/app/shared/project-tile/project-tile.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/project-tile/project-tile.module.ts ***!
  \************************************************************/
/*! exports provided: ProjecTileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjecTileModule", function() { return ProjecTileModule; });
class ProjecTileModule {
}


/***/ }),

/***/ "./src/app/split-screen/web/projects/projects.module.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/split-screen/web/projects/projects.module.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: WebProjectsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebProjectsModuleNgFactory", function() { return WebProjectsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.module */ "./src/app/split-screen/web/projects/projects.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _song_to_piano_song_to_piano_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./song-to-piano/song-to-piano.service */ "./src/app/split-screen/web/projects/song-to-piano/song-to-piano.service.ts");
/* harmony import */ var _shared_utilities_window_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/utilities/window.service */ "./src/app/shared/utilities/window.service.ts");
/* harmony import */ var _song_to_piano_note_generator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./song-to-piano/note-generator.service */ "./src/app/split-screen/web/projects/song-to-piano/note-generator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects.routing */ "./src/app/split-screen/web/projects/projects.routing.ts");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _shared_utilities_core_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../shared/utilities/core.module */ "./src/app/shared/utilities/core.module.ts");
/* harmony import */ var _shared_project_tile_project_tile_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../shared/project-tile/project-tile.module */ "./src/app/shared/project-tile/project-tile.module.ts");
/* harmony import */ var _song_to_piano_song_to_piano_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./song-to-piano/song-to-piano.module */ "./src/app/split-screen/web/projects/song-to-piano/song-to-piano.module.ts");
/* harmony import */ var _xr_xr_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./xr/xr.module */ "./src/app/split-screen/web/projects/xr/xr.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































var WebProjectsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_projects_module__WEBPACK_IMPORTED_MODULE_1__["WebProjectsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["SimpleSnackBarNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _song_to_piano_song_to_piano_service__WEBPACK_IMPORTED_MODULE_15__["SongToPianoService"], _song_to_piano_song_to_piano_service__WEBPACK_IMPORTED_MODULE_15__["SongToPianoService"], [_shared_utilities_window_service__WEBPACK_IMPORTED_MODULE_16__["WindowService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _song_to_piano_note_generator_service__WEBPACK_IMPORTED_MODULE_17__["NoteGeneratorService"], _song_to_piano_note_generator_service__WEBPACK_IMPORTED_MODULE_17__["NoteGeneratorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _projects_routing__WEBPACK_IMPORTED_MODULE_19__["WebProjectsRoutingModule"], _projects_routing__WEBPACK_IMPORTED_MODULE_19__["WebProjectsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _directives_directives_module__WEBPACK_IMPORTED_MODULE_38__["DirectivesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_38__["DirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_utilities_core_module__WEBPACK_IMPORTED_MODULE_40__["CoreModule"], _shared_utilities_core_module__WEBPACK_IMPORTED_MODULE_40__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_project_tile_project_tile_module__WEBPACK_IMPORTED_MODULE_41__["ProjecTileModule"], _shared_project_tile_project_tile_module__WEBPACK_IMPORTED_MODULE_41__["ProjecTileModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _song_to_piano_song_to_piano_module__WEBPACK_IMPORTED_MODULE_42__["SongToPianoModule"], _song_to_piano_song_to_piano_module__WEBPACK_IMPORTED_MODULE_42__["SongToPianoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _xr_xr_module__WEBPACK_IMPORTED_MODULE_43__["XRModule"], _xr_xr_module__WEBPACK_IMPORTED_MODULE_43__["XRModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _projects_module__WEBPACK_IMPORTED_MODULE_1__["WebProjectsModule"], _projects_module__WEBPACK_IMPORTED_MODULE_1__["WebProjectsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], function () { return [[]]; }, [])]); });



/***/ }),

/***/ "./src/app/split-screen/web/projects/projects.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/split-screen/web/projects/projects.module.ts ***!
  \**************************************************************/
/*! exports provided: WebProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebProjectsModule", function() { return WebProjectsModule; });
class WebProjectsModule {
}


/***/ }),

/***/ "./src/app/split-screen/web/projects/projects.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/split-screen/web/projects/projects.routing.ts ***!
  \***************************************************************/
/*! exports provided: WebProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebProjectsRoutingModule", function() { return WebProjectsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

const routes = [
// {
// 	path: '', component: WebProjectsComponent
// }
];
class WebProjectsRoutingModule {
}


/***/ }),

/***/ "./src/app/split-screen/web/projects/song-to-piano/note-generator.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/split-screen/web/projects/song-to-piano/note-generator.service.ts ***!
  \***********************************************************************************/
/*! exports provided: NoteGeneratorService, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteGeneratorService", function() { return NoteGeneratorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _piano_keys_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piano-keys.config */ "./src/app/split-screen/web/projects/song-to-piano/piano-keys.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




const LOGGER = (v) => console.log(v);
const ɵ0 = LOGGER;
class NoteGeneratorService {
    constructor() {
        /* Work largely done by Chris Wilson (c) 2014 used under The MIT License (MIT) -- https://github.com/cwilso/PitchDetect */
        this._noteList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](''); // tslint:disable-line:variable-name
        this.noteList$ = this._noteList.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])((acc, val) => acc += val + ' ')); // could also collect it in the BeahaviorSubject, but this way there's less visible code for tracking changes?
        this.isPlaying = false;
        this.buflen = 256;
        this.buf = new Float32Array(this.buflen);
        this.MIN_SAMPLES = 0;
        this.GOOD_ENOUGH_CORRELATION = 0.95; // this is the "bar" for how close a correlation needs to be
        this.audioContext = new AudioContext();
        this.MAX_SIZE = Math.max(4, Math.floor(this.audioContext.sampleRate / 5000)); // corresponds to a 5kHz signal
    }
    toggleLiveInput() {
        if (this.isPlaying) {
            this.stopPlaying();
            return;
        }
        const audioOptions = { audio: { advanced: [
                    { echoCancellation: false },
                    { autoGainControl: false },
                    { noiseSuppression: false },
                ] } };
        navigator.mediaDevices.getUserMedia(audioOptions).then(stream => {
            // Create an AudioNode from the stream.
            this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
            // Connect it to the destination.
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 512;
            this.mediaStreamSource.connect(this.analyser);
            this.updatePitch();
            this.startPlaying();
        })
            .catch(e => {
            alert(e);
            this.stopPlaying();
        });
    }
    stopPlaying() {
        this.isPlaying = false;
        this.audioContext.suspend().then(LOGGER, LOGGER).catch(LOGGER);
    }
    startPlaying() {
        this.isPlaying = true;
        this.audioContext.resume().then(LOGGER, LOGGER).catch(LOGGER);
    }
    autoCorrelate() {
        const sampleRate = this.audioContext.sampleRate;
        const SIZE = this.buflen;
        const MAX_SAMPLES = Math.floor(this.buflen / 2);
        const correlations = {};
        let bestOffset = -1;
        let bestCorrelation = 0;
        let rms = 0;
        let foundGoodCorrelation = false;
        let lastCorrelation = 1;
        for (let i = 0; i < SIZE; i++) {
            const val = this.buf[i];
            rms += val * val;
        }
        rms = Math.sqrt(rms / SIZE);
        // not enough signal
        if (rms < 0.01) {
            return -1;
        }
        for (let offset = this.MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
            let correlation = 0;
            for (let i = 0; i < MAX_SAMPLES; i++) {
                correlation += Math.abs((this.buf[i]) - (this.buf[i + offset]));
            }
            correlations[offset] = 1 - (correlation / MAX_SAMPLES); // store it, for the tweaking we need to do below.
            if ((correlation > this.GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
                foundGoodCorrelation = true;
                if (correlation > bestCorrelation) {
                    bestCorrelation = correlation;
                    bestOffset = offset;
                }
            }
            else if (foundGoodCorrelation) {
                /**
                 * short-circuit - A good correlation was found, then a bad one.
                 * Without this catch, you'd see duplicates.
                 *
                 * Now we need to tweak the offset - by interpolating between the values to the left and right of the
                 * best offset, and shifting it.
                 *
                 * This is complex, and HACKY in this code (happy to take PRs!) -
                 * we need to do a curve fit on correlations around best_offset in order to better determine precise
                 * (anti-aliased) offset.
                 *
                 * best_offset >=1
                 * and since foundGoodCorrelation cannot go to true until the second pass (offset=1)
                 * and we can't drop into this clause until the following pass (else if).
                 */
                const shift = (correlations[bestOffset + 1] - correlations[bestOffset - 1]) / correlations[bestOffset];
                return sampleRate / (bestOffset + (8 * shift));
            }
            lastCorrelation = correlation;
        }
        return bestCorrelation > 0.01 ? sampleRate / bestOffset : -1;
    }
    updatePitch() {
        this.analyser.getFloatTimeDomainData(this.buf);
        const pitch = this.autoCorrelate();
        if (pitch !== -1) {
            this.printNote(pitch);
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(this.resolution).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(() => this.updatePitch());
    }
    printNote(pitch) {
        const pianoKey = Math.floor(12 * Math.log2(pitch / 440) + 49);
        const noteEl = _piano_keys_config__WEBPACK_IMPORTED_MODULE_2__["PIANO_KEYS"][pianoKey];
        this._noteList.next(noteEl);
    }
}
NoteGeneratorService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function NoteGeneratorService_Factory() { return new NoteGeneratorService(); }, token: NoteGeneratorService, providedIn: "root" });



/***/ }),

/***/ "./src/app/split-screen/web/projects/song-to-piano/piano-keys.config.ts":
/*!******************************************************************************!*\
  !*** ./src/app/split-screen/web/projects/song-to-piano/piano-keys.config.ts ***!
  \******************************************************************************/
/*! exports provided: PIANO_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIANO_KEYS", function() { return PIANO_KEYS; });
const PIANO_KEYS = {
    88: 'C8',
    87: 'B7 	',
    86: 'A♯7/B♭7',
    85: 'A7',
    84: 'G♯7/A♭7',
    83: 'G7',
    82: 'F♯7/G♭7',
    81: 'F7',
    80: 'E7',
    79: 'D♯7/E♭7',
    78: 'D7',
    77: 'C♯7/D♭7',
    76: 'C7',
    75: 'B6',
    74: 'A♯6/B♭6',
    73: 'A6',
    72: 'G♯6/A♭6',
    71: 'G6',
    70: 'F♯6/G♭6',
    69: 'F6',
    68: 'E6',
    67: 'D♯6/E♭6',
    66: 'D6',
    65: 'C♯6/D♭6',
    64: 'C6',
    63: 'B5',
    62: 'A♯5/B♭5',
    61: 'A5',
    60: 'G♯5/A♭5',
    59: 'G5',
    58: 'F♯5/G♭5',
    57: 'F5',
    56: 'E5',
    55: 'D♯5/E♭5',
    54: 'D5',
    53: 'C♯5/D♭5',
    52: 'C5',
    51: 'B4',
    50: 'A♯4/B♭4',
    49: 'A4',
    48: 'G♯4/A♭4',
    47: 'G4',
    46: 'F♯4/G♭4',
    45: 'F4',
    44: 'E4',
    43: 'D♯4/E♭4',
    42: 'D4',
    41: 'C♯4/D♭4',
    40: 'C4',
    39: 'B3',
    38: 'A♯3/B♭3',
    37: 'A3',
    36: 'G♯3/A♭3',
    35: 'G3',
    34: 'F♯3/G♭3',
    33: 'F3',
    32: 'E3',
    31: 'D♯3/E♭3',
    30: 'D3',
    29: 'C♯3/D♭3',
    28: 'C3',
    27: 'B2',
    26: 'A♯2/B♭2',
    25: 'A2',
    24: 'G♯2/A♭2',
    23: 'G2',
    22: 'F♯2/G♭2',
    21: 'F2',
    20: 'E2',
    19: 'D♯2/E♭2',
    18: 'D2',
    17: 'C♯2/D♭2',
    16: 'C2',
    15: 'B1',
    14: 'A♯1/B♭1',
    12: 'G♯1/A♭1',
    11: 'G1',
    9: 'F1',
    7: 'D♯1/E♭1',
    5: 'C♯1/D♭1',
    4: 'C1',
    3: 'B0',
    2: 'A♯0/B♭0',
    1: 'A0;'
};


/***/ }),

/***/ "./src/app/split-screen/web/projects/song-to-piano/song-to-piano.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/split-screen/web/projects/song-to-piano/song-to-piano.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SongToPianoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongToPianoModule", function() { return SongToPianoModule; });
class SongToPianoModule {
}


/***/ }),

/***/ "./src/app/split-screen/web/projects/song-to-piano/song-to-piano.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/split-screen/web/projects/song-to-piano/song-to-piano.service.ts ***!
  \**********************************************************************************/
/*! exports provided: SongToPianoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongToPianoService", function() { return SongToPianoService; });
/* harmony import */ var _shared_utilities_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/utilities/window.service */ "./src/app/shared/utilities/window.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



/** Source: https://stackoverflow.com/a/27852403 */
class SongToPianoService {
    constructor(window) {
        this.gainNode = null;
        this.audioContext = new AudioContext();
        this.BUFF_SIZE = 16384;
        this.microphoneStream = null;
        this.scriptProcessorNode = null;
        this.scriptProcessorFFTNode = null;
        this.analyserNode = null;
        this.navigator = window.navigator;
    }
    webaudioToolingObj() {
        console.log('audio is starting up ...');
        const getUserMedia = this.navigator.mediaDevices.getUserMedia;
        if (getUserMedia) {
            const opts = { audio: true };
            this.navigator.mediaDevices.getUserMedia(opts)
                .then((stream) => {
                console.log(stream);
                this.startMicrophone(stream);
            })
                .catch((e) => {
                console.error(e);
                alert('Error capturing audio.');
            });
        }
        else {
            alert('getUserMedia not supported in this browser.');
        }
    }
    startMicrophone(stream) {
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
        this.microphoneStream = this.audioContext.createMediaStreamSource(stream);
        this.microphoneStream.connect(this.gainNode);
        this.scriptProcessorNode = this.audioContext.createScriptProcessor(this.BUFF_SIZE, 1, 1);
        this.microphoneStream.connect(this.scriptProcessorNode);
        // --- setup FFT
        this.scriptProcessorFFTNode = this.audioContext.createScriptProcessor(2048, 1, 1);
        this.scriptProcessorFFTNode.connect(this.gainNode);
        this.analyserNode = this.audioContext.createAnalyser();
        this.analyserNode.smoothingTimeConstant = 0;
        this.analyserNode.fftSize = 2048;
        this.microphoneStream.connect(this.analyserNode);
        this.analyserNode.connect(this.scriptProcessorFFTNode);
        this.scriptProcessorFFTNode.onaudioprocess = () => {
            // get the average for the first channel
            const arr = new Uint8Array(this.analyserNode.frequencyBinCount);
            this.analyserNode.getByteFrequencyData(arr);
        };
    }
}
SongToPianoService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function SongToPianoService_Factory() { return new SongToPianoService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_utilities_window_service__WEBPACK_IMPORTED_MODULE_0__["WindowService"])); }, token: SongToPianoService, providedIn: "root" });


/***/ }),

/***/ "./src/app/split-screen/web/projects/xr/xr.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/split-screen/web/projects/xr/xr.module.ts ***!
  \***********************************************************/
/*! exports provided: XRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XRModule", function() { return XRModule; });
class XRModule {
}


/***/ })

}]);
//# sourceMappingURL=projects-projects-module-ngfactory-es2015.js.map