(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contacts/contacts.component */ "./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/error-not-found/error-not-found.component */ "./src/app/pages/error-not-found/error-not-found.component.ts");








const routes = [
    {
        path: '', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: 'contacts', component: _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
    },
    {
        path: 'about', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]
    },
    {
        path: '404error', component: _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_5__["ErrorNotFoundComponent"]
    },
    {
        path: '', redirectTo: '/', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '404error'
    }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");







function AppComponent_app_slider_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-slider");
} }
class AppComponent {
    constructor(_router) {
        this._router = _router;
        this.title = 'landing-page';
        this.router = _router;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AppComponent_app_slider_1_Template, 1, 0, "app-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.router.url == "/");
    } }, directives: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contacts/contacts.component */ "./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/error-not-found/error-not-found.component */ "./src/app/pages/error-not-found/error-not-found.component.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");














class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
        _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"],
        _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
        _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_9__["ErrorNotFoundComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"],
        _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                    _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"],
                    _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                    _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_9__["ErrorNotFoundComponent"],
                    _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"],
                    _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"],
                    _components_form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardsComponent.??fac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 26, vars: 0, consts: [[1, "py-2"], [1, "row"], [1, "col-md-4", "text-center"], [1, "card", "my-2", "bg-blk", "border-0"], [1, "card-header", "border-0", "bg-pry"], [1, "card-title", "txt-blk", "py-2", "font-weight-bold"], [1, "card-body"], [1, "card-text", "p-4", "text-white"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Misi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellat accusamus id labore dolorum impedit reiciendis temporibus ipsam, voluptatem consectetur ducimus tenetur quae maiores odio fuga, veritatis eaque iste cumque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Visi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat quibusdam, atque tempore deleniti voluptates, laudantium dignissimos at autem sunt tempora delectus dolores doloribus eius? Ratione est autem itaque pariatur!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Valores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat quibusdam, atque tempore deleniti voluptates, laudantium dignissimos at autem sunt tempora delectus dolores doloribus eius? Ratione est autem itaque pariatur!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards',
                templateUrl: './cards.component.html',
                styleUrls: ['./cards.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



class FormComponent {
    constructor() {
        this.arrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlaneArrival"];
    }
    ngOnInit() {
    }
}
FormComponent.??fac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 20, vars: 0, consts: [[1, "p-4"], [1, "form-group", "mb-3"], ["for", "input1", 1, "form-label"], ["type", "text", "id", "input1", "placeholder", "George Adams", 1, "round", "p-3", "form-control", "border-0"], ["for", "input2", 1, "form-label"], ["type", "email", "id", "input2", "placeholder", "name@example.com", 1, "round", "p-3", "form-control", "border-0"], ["for", "input3", 1, "form-label"], ["type", "text", "id", "input3", "placeholder", "+1(809)010-0000", 1, "round", "p-3", "form-control", "border-0"], ["for", "input4", 1, "form-label"], ["id", "input4", "rows", "3", "placeholder", "Your message...", 1, "round", "p-3", "form-control", "border-0"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "bg-blk", "text-white", "px-4"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 1, consts: [[1, "bg-blk", "py-4", "text-center"], [1, "txt-pry"], [1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "2Koders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" | ", ctx.year, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../../../assets/logo.png", "width", "60", "alt", "", 1, ""], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "contacts", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.??fac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 16, vars: 0, consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/banner.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../../assets/banner-2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/banner-3.jpg", "alt", "...", 1, "d-block", "w-100"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.??fac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutUsComponent, selectors: [["ng-component"]], decls: 45, vars: 0, consts: [[1, "container", "mt-4"], [1, "content", "text-left", "mt-4"], [1, "font-weight-bold", "txt-pry"], [1, "row"], [1, "col-md-7"], [1, "col-md-5"], [1, "card"], ["src", "../../../assets/logo.jpg", "alt", "...", 1, "w-100"], ["src", "../../../assets/logo-2.jpg", "alt", "...", 1, "w-100"], ["src", "../../../assets/logo-3.jpg", "alt", "...", 1, "w-100"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Ventajas de trabajar con nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae fugiat expedita pariatur culpa quidem tempore totam, nisi magni. Earum expedita dignissimos laboriosam? Neque placeat quasi consequatur expedita. Provident, dolore pariatur illum exercitationem distinctio natus eaque consequatur? Consequatur ut harum maiores labore deserunt, minima consequuntur sapiente distinctio, iure atque, nobis vel dolor dicta laboriosam culpa? Quas, labore assumenda maiores dicta corporis eveniet nihil fuga repellendus vero quibusdam molestiae odit culpa mollitia aliquid quaerat, tempora accusantium consequatur voluptatum neque! Inventore mollitia, in maiores fuga, assumenda autem corporis quod harum delectus sint similique dolorum nemo illum repudiandae! Possimus rem ex minima itaque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate voluptates nisi fugit inventore, repudiandae ea necessitatibus culpa a vitae! Vitae voluptatem doloribus corporis ad. Cumque porro quod ducimus. Deserunt necessitatibus ullam consequatur alias minus beatae voluptatum culpa, dolor ea reprehenderit, quam cumque saepe, voluptas distinctio suscipit fuga molestias? Quos laborum illo aut dicta corrupti nulla facilis totam aspernatur ad fuga, cum est corporis quo voluptatum cupiditate ducimus, culpa dolorum. Doloremque voluptatum non sit, explicabo alias obcaecati molestiae esse ducimus illum, assumenda eius ullam incidunt magni pariatur? Eaque asperiores eos est aspernatur magni quos eligendi facere, doloremque, dicta, nulla natus!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus deserunt aperiam debitis ab, eaque numquam ipsum delectus dignissimos harum quo, facere deleniti corporis quos tempore excepturi? Error libero tempore ducimus voluptates! Earum magnam fugiat consequuntur quis omnis quos voluptatem a adipisci quibusdam, quo autem animi incidunt repellat, voluptas debitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "La calidad de servicio es primordial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae fugiat expedita pariatur culpa quidem tempore totam, nisi magni. Earum expedita dignissimos laboriosam? Neque placeat quasi consequatur expedita. Provident, dolore pariatur illum exercitationem distinctio natus eaque consequatur? Consequatur ut harum maiores labore deserunt, minima consequuntur sapiente distinctio, iure atque, nobis vel dolor dicta laboriosam culpa? Quas, labore assumenda maiores dicta corporis eveniet nihil fuga repellendus vero quibusdam molestiae odit culpa mollitia aliquid quaerat, tempora accusantium consequatur voluptatum neque! Inventore mollitia, in maiores fuga, assumenda autem corporis quod harum delectus sint similique dolorum nemo illum repudiandae! Possimus rem ex minima itaque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consectetur, hic dolorem voluptatum distinctio, earum molestiae dignissimos corrupti voluptatem quidem eum laudantium alias laboriosam eius.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus deserunt aperiam debitis ab, eaque numquam ipsum delectus dignissimos harum quo, facere deleniti corporis quos tempore excepturi? Error libero tempore ducimus voluptates! Earum magnam fugiat consequuntur quis omnis quos voluptatem a adipisci quibusdam, quo autem animi incidunt repellat, voluptas debitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim ab reprehenderit corrupti inventore ullam sequi alias accusamus quisquam animi! Necessitatibus nisi cumque odio tempora dignissimos corrupti. Ipsam quae excepturi ratione animi similique dolorem quia aut assumenda quas culpa ut libero perferendis quam, voluptatum officia voluptatibus consectetur ullam laboriosam adipisci pariatur. Facilis minima hic quas deleniti minus, sapiente quos illo? Temporibus veniam praesentium quo ullam mollitia eligendi maiores, unde, molestias minima commodi impedit quia atque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\u00BFEste ejemplo est\u00E1 completo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae fugiat expedita pariatur culpa quidem tempore totam, nisi magni. Earum expedita dignissimos laboriosam? Neque placeat quasi consequatur expedita. Provident, dolore pariatur illum exercitationem distinctio natus eaque consequatur? Consequatur ut harum maiores labore deserunt, minima consequuntur sapiente distinctio, iure atque, nobis vel dolor dicta laboriosam culpa? Quas, labore assumenda maiores dicta corporis eveniet nihil fuga repellendus vero quibusdam molestiae odit culpa mollitia aliquid quaerat, tempora accusantium consequatur voluptatum neque! Inventore mollitia, in maiores fuga, assumenda autem corporis quod harum delectus sint similique dolorum nemo illum repudiandae! Possimus rem ex minima itaque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate voluptates nisi fugit inventore, repudiandae ea necessitatibus culpa a vitae! Vitae voluptatem doloribus corporis ad. Cumque porro quod ducimus. Deserunt necessitatibus ullam consequatur alias minus beatae voluptatum culpa, dolor ea reprehenderit, quam cumque saepe, voluptas distinctio suscipit fuga molestias? Quos laborum illo aut dicta corrupti nulla facilis totam aspernatur ad fuga, cum est corporis quo voluptatum cupiditate ducimus, culpa dolorum. Doloremque voluptatum non sit, explicabo alias obcaecati molestiae esse ducimus illum, assumenda eius ullam incidunt magni pariatur? Eaque asperiores eos est aspernatur magni quos eligendi facere, doloremque, dicta, nulla natus!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus deserunt aperiam debitis ab, eaque numquam ipsum delectus dignissimos harum quo, facere deleniti corporis quos tempore excepturi? Error libero tempore ducimus voluptates! Earum magnam fugiat consequuntur quis omnis quos voluptatem a adipisci quibusdam, quo autem animi incidunt repellat, voluptas debitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.ts ***!
  \******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form/form.component */ "./src/app/components/form/form.component.ts");



class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.??fac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactsComponent, selectors: [["ng-component"]], decls: 29, vars: 0, consts: [[1, "body-fake", "bg-sec", "text-white"], [1, "container", "pt-4"], [1, "row", "justify-content-evenly"], [1, "col-md-5", "my-4", "p-1", "h-full", "bg-pry", "round", "text-center"], [1, "row", "mt-4"], [1, "title"], [1, "row", "mt-2"], [1, "w-75", "mx-auto"], [1, "row", "h-25", "text-center", "justify-content-center"], ["href", "https://wa.me/message/46THJ4IGXRJKB1", "target", "_blank", "rel", "noopener noreferrer", 1, "text-decoration-none", "text-center", "col-md-3", "round", "bg-white", "h-full", "p-2", "m-4"], ["src", "../../../assets/whatsapp.png", "alt", "", 1, "m-auto"], ["href", "https://www.instagram.com/2koders_/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-decoration-none", "text-center", "col-md-3", "round", "bg-white", "h-full", "p-2", "m-4"], ["src", "../../../assets/instagram.png", "alt", "", 1, "m-auto"], ["href", "#", "target", "_blank", "rel", "noopener noreferrer", 1, "text-decoration-none", "text-center", "col-md-3", "round", "bg-white", "h-full", "p-2", "m-4"], ["src", "../../../assets/telegram.png", "alt", "", 1, "m-auto"], ["href", "https://twitter.com/EnmanuelBalcac3", "target", "_blank", "rel", "noopener noreferrer", 1, "text-decoration-none", "text-center", "col-md-3", "round", "bg-white", "h-full", "p-2", "m-4"], ["src", "../../../assets/twitter.png", "alt", "", 1, "m-auto"], [1, "col-md-5", "my-4", "h-full", "bg-pry", "round", "text-center"], [1, "row", "text-left"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, non officiis mollitia nesciunt, in maiores dolores, accusantium enim ratione optio quisquam recusandae totam quod repudiandae.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Send us a message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "app-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]], styles: [".body-fake[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 89.2vh;\n  max-width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 1vmin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZS12YXJpYWJsZXNcIjtcclxuXHJcbi5ib2R5LWZha2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDg5LjJ2aDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxdm1pbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/error-not-found/error-not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/error-not-found/error-not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: ErrorNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorNotFoundComponent", function() { return ErrorNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorNotFoundComponent.??fac = function ErrorNotFoundComponent_Factory(t) { return new (t || ErrorNotFoundComponent)(); };
ErrorNotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ErrorNotFoundComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function ErrorNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "error-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yLW5vdC1mb3VuZC9lcnJvci1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './error-not-found.component.html',
                styleUrls: ['./error-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");



class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.??fac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LandingComponent, selectors: [["ng-component"]], decls: 55, vars: 0, consts: [[1, "container", "mt-4"], [1, "inf", "text-center", "mt-4"], [1, "font-weight-bold"], [1, "w-75", "mx-auto", "text-center"], [1, "content", "text-left", "mt-4"], [1, "font-weight-bold", "txt-pry"], [1, "row"], [1, "col-md-7"], [1, "col-md-5"], [1, "card"], ["src", "../../../assets/logo.jpg", "alt", "...", 1, "w-100"], ["src", "../../../assets/logo-2.jpg", "alt", "...", 1, "w-100"], ["src", "../../../assets/logo-3.jpg", "alt", "...", 1, "w-100"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Formula2 Example Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quidem sint ipsum incidunt molestiae? Perferendis ducimus nihil nemo ex obcaecati deleniti aspernatur error cupiditate! Tempora, odit totam? Harum, voluptas aliquam!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Ventajas de trabajar con nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae fugiat expedita pariatur culpa quidem tempore totam, nisi magni. Earum expedita dignissimos laboriosam? Neque placeat quasi consequatur expedita. Provident, dolore pariatur illum exercitationem distinctio natus eaque consequatur? Consequatur ut harum maiores labore deserunt, minima consequuntur sapiente distinctio, iure atque, nobis vel dolor dicta laboriosam culpa? Quas, labore assumenda maiores dicta corporis eveniet nihil fuga repellendus vero quibusdam molestiae odit culpa mollitia aliquid quaerat, tempora accusantium consequatur voluptatum neque! Inventore mollitia, in maiores fuga, assumenda autem corporis quod harum delectus sint similique dolorum nemo illum repudiandae! Possimus rem ex minima itaque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate voluptates nisi fugit inventore, repudiandae ea necessitatibus culpa a vitae! Vitae voluptatem doloribus corporis ad. Cumque porro quod ducimus. Deserunt necessitatibus ullam consequatur alias minus beatae voluptatum culpa, dolor ea reprehenderit, quam cumque saepe, voluptas distinctio suscipit fuga molestias? Quos laborum illo aut dicta corrupti nulla facilis totam aspernatur ad fuga, cum est corporis quo voluptatum cupiditate ducimus, culpa dolorum. Doloremque voluptatum non sit, explicabo alias obcaecati molestiae esse ducimus illum, assumenda eius ullam incidunt magni pariatur? Eaque asperiores eos est aspernatur magni quos eligendi facere, doloremque, dicta, nulla natus!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus deserunt aperiam debitis ab, eaque numquam ipsum delectus dignissimos harum quo, facere deleniti corporis quos tempore excepturi? Error libero tempore ducimus voluptates! Earum magnam fugiat consequuntur quis omnis quos voluptatem a adipisci quibusdam, quo autem animi incidunt repellat, voluptas debitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "La calidad de servicio es primordial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae fugiat expedita pariatur culpa quidem tempore totam, nisi magni. Earum expedita dignissimos laboriosam? Neque placeat quasi consequatur expedita. Provident, dolore pariatur illum exercitationem distinctio natus eaque consequatur? Consequatur ut harum maiores labore deserunt, minima consequuntur sapiente distinctio, iure atque, nobis vel dolor dicta laboriosam culpa? Quas, labore assumenda maiores dicta corporis eveniet nihil fuga repellendus vero quibusdam molestiae odit culpa mollitia aliquid quaerat, tempora accusantium consequatur voluptatum neque! Inventore mollitia, in maiores fuga, assumenda autem corporis quod harum delectus sint similique dolorum nemo illum repudiandae! Possimus rem ex minima itaque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consectetur, hic dolorem voluptatum distinctio, earum molestiae dignissimos corrupti voluptatem quidem eum laudantium alias laboriosam eius.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus deserunt aperiam debitis ab, eaque numquam ipsum delectus dignissimos harum quo, facere deleniti corporis quos tempore excepturi? Error libero tempore ducimus voluptates! Earum magnam fugiat consequuntur quis omnis quos voluptatem a adipisci quibusdam, quo autem animi incidunt repellat, voluptas debitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim ab reprehenderit corrupti inventore ullam sequi alias accusamus quisquam animi! Necessitatibus nisi cumque odio tempora dignissimos corrupti. Ipsam quae excepturi ratione animi similique dolorem quia aut assumenda quas culpa ut libero perferendis quam, voluptatum officia voluptatibus consectetur ullam laboriosam adipisci pariatur. Facilis minima hic quas deleniti minus, sapiente quos illo? Temporibus veniam praesentium quo ullam mollitia eligendi maiores, unde, molestias minima commodi impedit quia atque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\u00BFEste ejemplo est\u00E1 completo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae fugiat expedita pariatur culpa quidem tempore totam, nisi magni. Earum expedita dignissimos laboriosam? Neque placeat quasi consequatur expedita. Provident, dolore pariatur illum exercitationem distinctio natus eaque consequatur? Consequatur ut harum maiores labore deserunt, minima consequuntur sapiente distinctio, iure atque, nobis vel dolor dicta laboriosam culpa? Quas, labore assumenda maiores dicta corporis eveniet nihil fuga repellendus vero quibusdam molestiae odit culpa mollitia aliquid quaerat, tempora accusantium consequatur voluptatum neque! Inventore mollitia, in maiores fuga, assumenda autem corporis quod harum delectus sint similique dolorum nemo illum repudiandae! Possimus rem ex minima itaque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate voluptates nisi fugit inventore, repudiandae ea necessitatibus culpa a vitae! Vitae voluptatem doloribus corporis ad. Cumque porro quod ducimus. Deserunt necessitatibus ullam consequatur alias minus beatae voluptatum culpa, dolor ea reprehenderit, quam cumque saepe, voluptas distinctio suscipit fuga molestias? Quos laborum illo aut dicta corrupti nulla facilis totam aspernatur ad fuga, cum est corporis quo voluptatum cupiditate ducimus, culpa dolorum. Doloremque voluptatum non sit, explicabo alias obcaecati molestiae esse ducimus illum, assumenda eius ullam incidunt magni pariatur? Eaque asperiores eos est aspernatur magni quos eligendi facere, doloremque, dicta, nulla natus!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus deserunt aperiam debitis ab, eaque numquam ipsum delectus dignissimos harum quo, facere deleniti corporis quos tempore excepturi? Error libero tempore ducimus voluptates! Earum magnam fugiat consequuntur quis omnis quos voluptatem a adipisci quibusdam, quo autem animi incidunt repellat, voluptas debitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\A\Documents\Pojects\2koders\landing-page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map