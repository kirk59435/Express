webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fba_calculator_fba_calculator_component__ = __webpack_require__("./src/app/components/fba-calculator/fba-calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_keyword_management_keyword_management_component__ = __webpack_require__("./src/app/components/keyword-management/keyword-management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'fba-calculator',
        component: __WEBPACK_IMPORTED_MODULE_3__components_fba_calculator_fba_calculator_component__["a" /* FbaCalculatorComponent */]
    },
    {
        path: 'keyword-management',
        component: __WEBPACK_IMPORTED_MODULE_4__components_keyword_management_keyword_management_component__["a" /* KeywordManagementComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<br><br><br>\r\n<div class=\"container\" >\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_keyword_management_keyword_management_component__ = __webpack_require__("./src/app/components/keyword-management/keyword-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_fba_calculator_fba_calculator_component__ = __webpack_require__("./src/app/components/fba-calculator/fba-calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_keyword_management_keyword_management_component__["a" /* KeywordManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_fba_calculator_fba_calculator_component__["a" /* FbaCalculatorComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/fba-calculator/fba-calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <label>Weight:</label><br>\r\n    <input type=\"number\" name=\"weight\" [(ngModel)]='weight' required><br>\r\n    <label>Height:</label><br>\r\n    <input type=\"number\" name=\"height\" [(ngModel)]='height' required><br>\r\n    <label>Length:</label><br>\r\n    <input type=\"number\" name=\"length\" [(ngModel)]='length' required><br>\r\n    <label>Width:</label><br>\r\n    <input type=\"number\" name=\"width\" [(ngModel)]='width' required><br>\r\n    <input type=\"checkbox\" name=\"isCloth\" [(ngModel)]='isCloth' >Clothing Items<br>\r\n    <input type=\"button\" value=\"Calaulate\" (click)=\"FbaCal()\"><br><br>\r\n</form>\r\n<div>\r\n  <label>Result:</label><br>\r\n    <input type=\"number\" name=\"price\" [(ngModel)]='price' disabled>\r\n</div>"

/***/ }),

/***/ "./src/app/components/fba-calculator/fba-calculator.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/fba-calculator/fba-calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbaCalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FbaCalculatorComponent = /** @class */ (function () {
    function FbaCalculatorComponent() {
        this.price = 0;
        this.isCloth = false;
    }
    FbaCalculatorComponent.prototype.ngOnInit = function () {
    };
    FbaCalculatorComponent.prototype.FbaCal = function () {
        // Amazon Charge fee standard
        var clothCharge = 0.4;
        var smallPrize = 2.41;
        var largePrize1 = 3.19; // large size weight less than 1 lb;
        var largePrize2 = 4.71; // Large size wiehgt between 1 to 2 lbs;
        var largePrizeOver2 = 0.38; // Large size price for over 2 lbs;
        var smallOverPrize = 8.13;
        var smallOverPrizeOver = 0.38; // Small Overesize price for over 2 lbs;
        var mediumOverPrize = 9.44;
        var mediumOverPrizeOver = 0.38; // Medium Overesize price for over 2 lbs;
        var largeOverPrize = 73.18;
        var largeOverPrizeOver = 0.79; // Large Overesize price for over 90 lbs;
        var specialOverPrize = 137.32;
        var specialOverPrizeOver = 0.91; // Special Overesize price for over 90 lbs;
        var dimension = [this.height, this.length, this.width];
        if (this.isCloth) {
            this.price += clothCharge;
        }
        var long, mid, short;
        long = Math.max(this.height, this.length, this.width); // Find the longest side
        short = Math.min(this.height, this.length, this.width); // Find the shortest side
        // Find the medium side
        mid = dimension.filter(function (item) {
            return (item !== long && item !== short);
        });
        if (mid.length === 0) {
            mid = [long];
        }
        var size = this.sizeCheck(long, mid[0], short, this.weight);
        switch (size) {
            case 'small':
                this.price += smallPrize;
                break;
            case 'large':
                if (this.weight <= 1) {
                    this.price += largePrize1;
                }
                else if (this.weight > 1 && this.weight <= 2) {
                    this.price += largePrize2;
                }
                else {
                    this.price += largePrize2 + (this.weight - 2) * largePrizeOver2;
                }
                break;
            case 'smallOversize':
                this.price += smallOverPrize + (this.weight - 2) * smallOverPrizeOver;
                break;
            case 'mediumOversize':
                this.price += mediumOverPrize + (this.weight - 2) * mediumOverPrizeOver;
                break;
            case 'largeOversize':
                this.price += largeOverPrize + (this.weight - 90) * largeOverPrizeOver;
                break;
            case 'specialOversize':
                this.price += specialOverPrize + (this.weight - 90) * specialOverPrizeOver;
                break;
        }
        this.price = Number(this.price.toFixed(2));
    };
    FbaCalculatorComponent.prototype.sizeCheck = function (long, mid, short, weight) {
        var lPlusGirth = long + (mid + short) * 2; // long plus girth
        // Amazon Size Standard
        if (long <= 15 && short <= 0.75 && mid <= 12 && weight <= 1) {
            return 'small';
        }
        else if (long <= 18 && short <= 8 && mid <= 14 && weight <= 20) {
            return 'large';
        }
        else if (long <= 60 && mid <= 30 && lPlusGirth <= 130 && weight <= 70) {
            return 'smallOversize';
        }
        else if (long <= 108 && lPlusGirth <= 130 && weight <= 150) {
            return 'mediumOversize';
        }
        else if (long <= 108 && lPlusGirth <= 165 && weight <= 150) {
            return 'largeOversize';
        }
        else {
            return 'specialOversize';
        }
    };
    FbaCalculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fba-calculator',
            template: __webpack_require__("./src/app/components/fba-calculator/fba-calculator.component.html"),
            styles: [__webpack_require__("./src/app/components/fba-calculator/fba-calculator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FbaCalculatorComponent);
    return FbaCalculatorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>My First Practice</h1>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\" >Register</a><a class=\"btn btn-default\" [routerLink]=\"['/login']\" >Login</a>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/keyword-management/keyword-management.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n  </head>\r\n  <body>\r\n    <div class='row' align='center'>\r\n      <div class=\"column1\">\r\n          <label>Keywords</label><br>\r\n          <input type=\"button\" (click)=\"editKey()\" *ngIf=\"!keyword.editable\" value='Edit keyword'><br>\r\n          <textarea rows='20' cols=\"60\" name='keyword' [(ngModel)]='keyword.value' (keyup)='saveKeyword()' [disabled]=!keyword.editable></textarea>\r\n          <br><span>{{keyword.length}}</span>\r\n          <br>\r\n          <br>\r\n          <div *ngIf=\"keyword.editable\">\r\n              <label>Option</label><br>\r\n              <input type='checkbox' name='option' [(ngModel)]='RD'>Remove duplicates\r\n              <input type='checkbox' name='option' [(ngModel)]='MP'>Maintain phrases\r\n              <br>\r\n              <input type=\"checkbox\" name=\"option\" [(ngModel)]=\"RSW\">Remove single word\r\n              <input type=\"checkbox\" name=\"option\" [(ngModel)]=\"RSL\">Remove single letter\r\n              <br>\r\n              <input type=\"checkbox\" name=\"option\" [(ngModel)]=\"OWPL\">One word/pharse per line\r\n              <br>\r\n              <button (click)='restore()'>Restore</button>\r\n              <button (click)='process()'>Process</button>\r\n          </div>\r\n          <div *ngIf=\"!keyword.editable\">\r\n              <label>Used Key Word</label><br>\r\n              <textarea rows=\"20\" cols='60' name='used' [(ngModel)]='used.value' disabled></textarea>\r\n          </div>\r\n      </div>\r\n      <div class=\"column2\">\r\n          <div>\r\n              <label>Title</label>\r\n          <br>\r\n          <select [(ngModel)]=title.format (change)=\"format(title.format,title)\" name=\"title\">\r\n              <option value=\"initial\">Select a format</option>\r\n              <option>ALL CAPS</option>\r\n              <option>all lowercase</option>\r\n              <option>First Letter Caps</option>\r\n              <option>Sentence caps</option>\r\n          </select>\r\n          <br>\r\n              <textarea rows=\"10\" maxlength={{title.max}} cols='80' name='title' [(ngModel)]='title.value' (keyup)='detectInput()'></textarea>\r\n              <br>\r\n              <span>{{title.length}}</span>\r\n              <i class=\"material-icons\" (click)='changeLimit(title)' style=\"font-size:16px;color:blue\">mode_edit</i>\r\n              <br>\r\n              <br>\r\n          </div>\r\n          <div>\r\n              <label>Description</label>\r\n          <br>\r\n          <select [(ngModel)]=description.format (change)=\"format(description.format,description)\" name=\"description\">\r\n              <option value=\"initial\">Select a format</option>\r\n              <option>ALL CAPS</option>\r\n              <option>all lowercase</option>\r\n              <option>First Letter Caps</option>\r\n              <option>Sentence caps</option>\r\n          </select>\r\n          <br>\r\n              <textarea rows=\"25\" maxlength={{description.max}} cols='80' name='description' [(ngModel)]='description.value' (keyup)='detectInput()'></textarea>\r\n              <br>\r\n              <span>{{description.length}}</span>\r\n              <i class=\"material-icons\" (click)='changeLimit(description)' style=\"font-size:16px;color:blue\">mode_edit</i>\r\n          </div>\r\n          <div>\r\n              <div *ngIf=\"extra1.display\" >\r\n                  <br>\r\n                  <label>Extra Description</label>\r\n                  <select [(ngModel)]=extra1.format (change)=\"format(extra1.format,extra1)\" name=\"extra1\">\r\n                      <option value=\"initial\">Select a format</option>\r\n                      <option>ALL CAPS</option>\r\n                      <option>all lowercase</option>\r\n                      <option>First Letter Caps</option>\r\n                      <option>Sentence caps</option>\r\n                  </select>\r\n                  <br>\r\n                  <textarea rows=\"10\" maxlength={{extra1.max}} cols='80' name='extra1' [(ngModel)]='extra1.value' (keyup)='detectInput()'></textarea>\r\n                  <br>\r\n                  <span>{{extra1.length}}</span>\r\n                  <i class=\"material-icons\" (click)='changeLimit(extra1)' style=\"font-size:16px;color:blue\">mode_edit</i>\r\n              </div>\r\n              <div *ngIf=\"extra2.display\">\r\n                  <br>\r\n                  <label>Extra Description</label>\r\n                  <select [(ngModel)]=extra2.format (change)=\"format(extra2.format,extra2)\" name=\"extra2\">\r\n                      <option value=\"initial\">Select a format</option>\r\n                      <option>ALL CAPS</option>\r\n                      <option>all lowercase</option>\r\n                      <option>First Letter Caps</option>\r\n                      <option>Sentence caps</option>\r\n                  </select>\r\n                  <br>\r\n                  <textarea rows=\"10\" maxlength={{extra2.max}} cols='80' name='extra2' [(ngModel)]='extra2.value' (keyup)='detectInput()'></textarea>\r\n                  <br>\r\n                  <span>{{extra2.length}}</span>\r\n                  <i class=\"material-icons\" (click)='changeLimit(extra2)' style=\"font-size:16px;color:blue\">mode_edit</i>\r\n              </div>\r\n              <div *ngIf=\"extra3.display\">\r\n                  <br>\r\n                  <label>Extra Description</label>\r\n                  <select [(ngModel)]=extra3.format (change)=\"format(extra3.format,extra3)\" name=\"extra3\">\r\n                      <option value=\"initial\">Select a format</option>\r\n                      <option>ALL CAPS</option>\r\n                      <option>all lowercase</option>\r\n                      <option>First Letter Caps</option>\r\n                      <option>Sentence caps</option>\r\n                  </select>\r\n                  <br>\r\n                  <textarea rows=\"10\" maxlength={{extra3.max}} cols='80' name='extra3' [(ngModel)]='extra3.value' (keyup)='detectInput()'></textarea>\r\n                  <br>\r\n                  <span>{{extra3.length}}</span>\r\n                  <i class=\"material-icons\" (click)='changeLimit(extra3)' style=\"font-size:16px;color:blue\">mode_edit</i>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"showBox()\" *ngIf=\"count < 3\">\r\n                  <span class=\"glyphicon glyphicon-plus-sign\"></span> Add Extra Describtion\r\n              </button>                    \r\n          </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n  "

/***/ }),

/***/ "./src/app/components/keyword-management/keyword-management.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/keyword-management/keyword-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeywordManagementComponent = /** @class */ (function () {
    function KeywordManagementComponent() {
        this.RD = true; // Remove duplicates
        this.MP = false; // Maintain phrases
        this.RSW = false; // Remove single word
        this.RSL = false; // Remove single letter
        this.OWPL = false; // One word/pharse per line
        this.processed = false;
        this.detectArray = [];
        this.extraString = '';
        this.unused = [];
        this.count = 0;
        // Initial Object
        this.keyword = {
            editable: true,
            value: '',
            length: 'Words: 0, Characters: 0',
            array: [],
            record: ''
        };
        this.used = {
            value: '',
            array: []
        };
        this.title = {
            value: '',
            max: 50,
            length: 'Words: 0, Characters: 0/50',
            array: [],
            format: 'initial'
        };
        this.description = {
            value: '',
            max: 200,
            length: 'Words: 0, Characters: 0/200',
            array: [],
            format: 'initial'
        };
        this.extra1 = {
            value: '',
            max: 200,
            length: 'Words: 0, Characters: 0/200',
            array: [],
            display: false,
            format: 'initial'
        };
        this.extra2 = {
            value: '',
            max: 200,
            length: 'Words: 0, Characters: 0/200',
            array: [],
            display: false,
            format: 'initial'
        };
        this.extra3 = {
            value: '',
            max: 200,
            length: 'Words: 0, Characters: 0/200',
            array: [],
            display: false,
            format: 'initial'
        };
    }
    KeywordManagementComponent.prototype.ngOnInit = function () {
    };
    // Make the keyword field editable
    KeywordManagementComponent.prototype.editKey = function () {
        this.keyword.value = this.keyword.record;
        this.keyword.editable = true;
        this.processed = false;
    };
    KeywordManagementComponent.prototype.saveKeyword = function () {
        this.keyword.record = this.keyword.value;
        var words = this.saveWord(this.keyword.value).length;
        this.keyword.length = 'Words: ' + words + ', Characters: ' + this.keyword.value.length;
    };
    KeywordManagementComponent.prototype.restore = function () {
        this.keyword.value = this.keyword.record;
        this.processed = false;
    };
    KeywordManagementComponent.prototype.process = function () {
        var temp = this.lowercase(this.keyword.value);
        if (this.MP) {
            this.keyword.array = this.savePhrases(temp);
        }
        else {
            this.keyword.array = this.saveWord(temp);
        }
        if (this.RD) {
            this.keyword.array = this.RemoveDuplicates(this.keyword.array);
        }
        if (this.RSL) {
            this.keyword.array = this.removeSignleLetters(this.keyword.array);
        }
        if (this.RSW) {
            this.keyword.array = this.removeSingleWord(this.keyword.array);
        }
        if (this.OWPL) {
            this.keyword.value = this.oneWordPerLine(this.keyword.array);
        }
        else {
            if (this.MP) {
                this.keyword.value = this.printPharse(this.keyword.array);
            }
            else {
                this.keyword.value = this.printArray(this.keyword.array);
            }
        }
        this.processed = true;
    };
    KeywordManagementComponent.prototype.saveWord = function (string) {
        var array = string.split(/[^A-Za-z0-9]+/);
        if (array[array.length - 1] === '') {
            array.splice(array.length - 1, 1);
        }
        return array;
    };
    KeywordManagementComponent.prototype.savePhrases = function (string) {
        var array = string.split(/[^A-Za-z0-9 ]+/);
        array = array.map(function (word) {
            if (word.substring(0, 1) === ' ') {
                // word start with space
                word = word.substring(1, word.length);
            }
            return word;
        });
        if (array[array.length - 1] === '') {
            array.splice(array.length - 1, 1);
        }
        return array;
    };
    KeywordManagementComponent.prototype.RemoveDuplicates = function (array) {
        this.keyword.array = Array.from(new Set(array));
        return this.keyword.array;
    };
    KeywordManagementComponent.prototype.lowercase = function (string) {
        string = string.toLowerCase();
        return string;
    };
    KeywordManagementComponent.prototype.removeSignleLetters = function (array) {
        return array.filter(function (element) { return element.length !== 1; });
    };
    KeywordManagementComponent.prototype.removeSingleWord = function (array) {
        array = array.filter(function (element) {
            return element.indexOf(' ') !== -1;
        });
        return array;
    };
    // Output elemetent in an array to one string
    KeywordManagementComponent.prototype.printArray = function (array) {
        // Output the element in the array to a String
        var str = '';
        for (var i = 0; i < array.length; i++) {
            if (i !== array.length - 1) {
                str = str + array[i] + ' ';
            }
            else {
                // Do not output last ' ', that count 1 character and people can't see
                str = str + array[i];
            }
        }
        return str;
    };
    KeywordManagementComponent.prototype.printPharse = function (array) {
        var str = '';
        for (var i = 0; i < array.length; i++) {
            if (i !== array.length - 1) {
                str = str + array[i] + ', ';
            }
            else {
                // Do not output last ' ', that count 1 character and people can't see
                str = str + array[i];
            }
        }
        return str;
    };
    KeywordManagementComponent.prototype.oneWordPerLine = function (array) {
        var str = '';
        for (var i = 0; i < array.length; i++) {
            if (i !== array.length - 1) {
                str = str + array[i] + '\n';
            }
            else {
                str = str + array[i];
            }
        }
        return str;
    };
    // Change the character limition
    KeywordManagementComponent.prototype.changeLimit = function (obj) {
        var newLimit = prompt('Enter new character limit : '); // Need to change to using dialog
        if (newLimit) {
            obj.max = newLimit;
        }
        this.getInfo();
    };
    // Get the user input in Title and Description field
    KeywordManagementComponent.prototype.getInfo = function () {
        var title = this.saveWord(this.title.value).length;
        var description = this.saveWord(this.description.value).length;
        var extra1 = this.saveWord(this.extra1.value).length;
        var extra2 = this.saveWord(this.extra2.value).length;
        var extra3 = this.saveWord(this.extra3.value).length;
        this.extraString = this.extra1.value + ',' + this.extra2.value + ',' + this.extra3.value;
        this.title.length = 'Words: ' + title + ', Characters: ' + this.title.value.length + '/' + this.title.max;
        this.description.length = 'Words: ' + description + ', Characters: ' + this.description.value.length + '/' + this.description.max;
        this.extra1.length = 'Words: ' + extra1 + ', Characters: ' + this.extra1.value.length + '/' + this.extra1.max;
        this.extra2.length = 'Words: ' + extra2 + ', Characters: ' + this.extra2.value.length + '/' + this.extra2.max;
        this.extra3.length = 'Words: ' + extra3 + ', Characters: ' + this.extra3.value.length + '/' + this.extra3.max;
    };
    // Prepare for compare the keyword with user input
    KeywordManagementComponent.prototype.detectInput = function () {
        this.title.format = 'initial';
        this.description.format = 'initial';
        this.extra1.format = 'initial';
        this.extra2.format = 'initial';
        this.extra3.format = 'initial';
        this.keyword.editable = false;
        // Make sure process funcation run and only run once
        if (this.processed === false) {
            this.process();
        }
        this.getInfo();
        if (this.MP) {
            this.detectArray = this.savePhrases(this.title.value).concat(this.savePhrases(this.description.value))
                .concat(this.savePhrases(this.extraString));
        }
        else {
            this.detectArray = this.saveWord(this.title.value).concat(this.saveWord(this.description.value))
                .concat(this.saveWord(this.extraString));
        }
        // Clear used array in case user delete the key-word type in title
        this.used.array = [];
        this.compareWord(this.keyword.array, this.detectArray);
    };
    // Compare the keyword with user input
    KeywordManagementComponent.prototype.compareWord = function (keyArray, inputArray) {
        var _this = this;
        keyArray.forEach(function (key) {
            inputArray.forEach(function (input) {
                var condition1 = new RegExp(' ' + key.toLowerCase() + '[^A-Za-z0-9]');
                var condition2 = new RegExp(key.toLowerCase() + '[^A-Za-z0-9]');
                var condition3 = new RegExp(' ' + key.toLowerCase());
                if (key.toLowerCase() === input.toLowerCase() || condition1.test(input.toLowerCase()) ||
                    condition2.test(input.toLowerCase()) || condition3.test(input.toLowerCase())) {
                    _this.used.array.push(key);
                }
            });
        });
        // Remove the duplicate word in the used array
        // the duplicate may happen if user type in a same key word in key-word filed after put it into the title filed
        this.used.array = Array.from(new Set(this.used.array));
        this.display();
    };
    // Display the value in the keyword and used keyword filed
    KeywordManagementComponent.prototype.display = function () {
        var _this = this;
        // Return the difference between keyword array and used keyword array
        this.unused = this.keyword.array.filter(function (word) {
            return _this.used.array.indexOf(word) < 0;
        });
        if (this.OWPL) {
            this.keyword.value = this.oneWordPerLine(this.unused);
        }
        else {
            if (this.MP) {
                this.keyword.value = this.printPharse(this.unused);
            }
            else {
                this.keyword.value = this.printArray(this.unused);
            }
        }
        this.used.value = this.printArray(this.used.array);
        this.keyword.length = 'Words: ' + this.unused.length + ', Characters: ' + this.keyword.value.length;
    };
    // Format the title and describtion field
    KeywordManagementComponent.prototype.format = function (value, object) {
        if (value) {
            switch (value) {
                case 'ALL CAPS':
                    object.value = object.value.toUpperCase();
                    break;
                case 'all lowercase':
                    object.value = object.value.toLowerCase();
                    break;
                case 'First Letter Caps':
                    object.value = this.firstLetterCap(object.value);
                    break;
                case 'Sentence caps':
                    object.value = this.sentenceCaps(object.value);
                    break;
            }
        }
    };
    // Capital first letter of every word
    KeywordManagementComponent.prototype.firstLetterCap = function (string) {
        var temp = this.lowercase(string);
        var array = temp.split(' ');
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        }
        array.join(' ');
        return this.printArray(array);
    };
    // Capital first letter of the sentence
    KeywordManagementComponent.prototype.sentenceCaps = function (string) {
        var temp = this.lowercase(string);
        var array = temp.split('. ');
        for (var i = 0; i < array.length; i++) {
            if (array[i].substring(0, 1) === ' ') {
                array[i] = array[i].substring(1, array[i].length);
            }
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
            array[i] = array[i] + '. ';
        }
        return this.printArray(array);
    };
    KeywordManagementComponent.prototype.showBox = function () {
        this.count++;
        if (this.count === 1) {
            this.extra1.display = true;
        }
        else if (this.count === 2) {
            this.extra2.display = true;
        }
        else if (this.count === 3) {
            this.extra3.display = true;
        }
    };
    KeywordManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-keyword-management',
            template: __webpack_require__("./src/app/components/keyword-management/keyword-management.component.html"),
            styles: [__webpack_require__("./src/app/components/keyword-management/keyword-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], KeywordManagementComponent);
    return KeywordManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"tryLogin()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Login Success', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Practice</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"nav navbar-nav mr-auto\">\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home </a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav ml-auto\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n        </li>       \n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.flashMessage.show('Logged Out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegister()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('User Registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Register Faild', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map