function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add/add.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add/add.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col align-self-center\">\n    <form class=\"example-container\" [formGroup]=\"reactiveFormAdd\">\n      <h2>Add Pizza</h2>\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Name\" formControlName=\"name\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Type\" formControlName=\"type\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Quantity\" formControlName=\"quantity\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Description\" formControlName=\"description\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field *ngFor=\"let size of sizes\">\n        <label>\n          <input matInput placeholder=\"Price of {{size.name}}\" formControlName=\"{{size.control}}\">\n        </label>\n      </mat-form-field>\n\n\n      <label>\n        <input type=\"file\" multiple accept=\"image/png, image/jpeg\" (change)=\"setFiles($event.target.files)\">\n      </label>\n\n      <mat-card-actions class=\"centerBtn\">\n        <button type=\"submit\" (click)=\"onAdd()\" [disabled]=\"reactiveFormAdd.invalid\">Add</button>\n      </mat-card-actions>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/delete/delete.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/delete/delete.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDeleteDeleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-lg-3\" *ngFor=\"let product of products;let status = false\">\n    <mat-card>\n      <div class=\"productHeader\">\n        <span class=\"productTitle\">{{product.name}}</span>\n        <span class=\"productPrice\"><p class=\"price\">{{getPrice(product.price)}}</p></span>\n      </div>\n\n      <img mat-card-image\n           class=\"center\"\n           [src]=\"'data:image/jpg;base64,'+product.images[0]\">\n      <mat-card-actions class=\"center\">\n        <button (click)=\"onDelete(product)\" mat-mini-fab class=\"buttonRound\">-</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/statistics/statistics.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/statistics/statistics.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminStatisticsStatisticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-lg-8\">\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>client</th>\n        <th>number</th>\n        <th>name</th>\n        <th>size</th>\n        <th>description</th>\n        <th>status</th>\n      </tr>\n      </thead>\n      <tbody>\n      <ng-container *ngFor=\"let command of commands\">\n        <tr *ngFor=\"let p of command.idsProduct\">\n          <td>{{command.name}}</td>\n          <td>{{command.number}}</td>\n          <td>{{p.product.name}}</td>\n          <td>{{p.product.size.split('|')[0]}}</td>\n          <td>{{p.product.description}}</td>\n          <td>\n            <mat-checkbox [checked]=\"p.product.status\" (change)=\"isFinished(command,p)\">finished</mat-checkbox>\n          </td>\n        </tr>\n      </ng-container>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-lg-4\">\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>Number of visitors</th>\n        <th>Number of commands</th>\n        <th>Total</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>{{visitors}}</td>\n        <td>{{numbers}}</td>\n        <td>{{total}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update/update.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update/update.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUpdateUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col align-self-center\">\n\n    <div class=\"example-container\">\n      <h2>Update Pizza</h2>\n      <mat-label>Select Product</mat-label>\n      <mat-select>\n        <mat-option *ngFor=\"let product of products\" [value]=\"product.name\" (click)=\"setSelect(product)\">\n          {{product.name}}\n        </mat-option>\n      </mat-select>\n    </div>\n    <hr>\n    <form class=\"example-container\" [formGroup]=\"reactiveFormAdd\" *ngIf=\"select\">\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Name\" formControlName=\"name\" value=\"{{oldProduct.name}}\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Type\" formControlName=\"type\" value=\"{{oldProduct.type}}\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Quantity\" formControlName=\"quantity\" value=\"{{oldProduct.quantity}}\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field>\n        <label>\n          <input matInput placeholder=\"Description\" formControlName=\"description\" value=\"{{oldProduct.description}}\">\n        </label>\n      </mat-form-field>\n\n      <mat-form-field *ngFor=\"let size of sizes\">\n        <label>\n          <input matInput placeholder=\"Price of {{size.name}}\"\n                 formControlName=\"{{size.control}}\"\n                 value=\"{{size.price}}\">\n        </label>\n      </mat-form-field>\n\n\n      <label>\n        <input type=\"file\" multiple accept=\"image/png, image/jpeg\" (change)=\"setFiles($event.target.files)\">\n      </label>\n\n      <mat-card-actions class=\"centerBtn\">\n        <button type=\"submit\" (click)=\"onUpdate()\" [disabled]=\"reactiveFormAdd.invalid\">Update</button>\n      </mat-card-actions>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar-default\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <ng-container *ngFor=\"let menuItem of menuItems\">\n        <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n            <div *ngIf=\"menuItem.type; then thenBlock else elseBlock\"></div>\n            <ng-template #thenBlock><i class=\"material-icons\">{{menuItem.icon}}</i></ng-template>\n            <ng-template #elseBlock>\n              <i class=\"material-icons\"\n                 matBadge=\"{{getLengthDashboard()}}\"\n                 matBadgePosition=\"above after\"\n                 matBadgeColor=\"primary\"\n              >shopping_cart</i>\n            </ng-template>\n            <p>{{menuItem.title}}</p>\n          </a>\n        </li>\n      </ng-container>\n      <ng-container *ngIf=\"isAdmin()\">\n        <li routerLinkActive=\"active\" class=\"nav-item\" *ngFor=\"let menuItem of adminMenu\">\n          <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n            <i class=\"material-icons\">{{menuItem.icon}}</i>\n            <p>{{menuItem.title}}</p>\n          </a>\n        </li>\n      </ng-container>\n    </ul>\n\n    <button mat-mini-fab class=\"buttonAuth\" [ngStyle]=\"{'background-color':getStatus()}\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <p style=\"float: right\">{{visitors}}</p>\n  </div>\n</nav>\n\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container pri\" [ngStyle]=\"{'background-image': 'url('+image+')'}\">\n  <app-login></app-login>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"col-lg-6\">\n    <form class=\"example-container\" [formGroup]=\"reactiveFormLogin\">\n      <h2>Connexion</h2>\n      <label>Vous avez déjà un compte ? Connectez-vous ci-dessous.</label>\n      <mat-form-field>\n        <input matInput placeholder=\"Enter your email\" formControlName=\"email\">\n        <mat-error *ngIf=\"email.invalid && (email.dirty||email.touched)\">\n          <mat-error *ngIf=\"email.errors['required']\">Email is required</mat-error>\n          <mat-error *ngIf=\"email.errors['email']\">Email is not correct</mat-error>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n               formControlName=\"password\">\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n        <mat-error *ngIf=\"password.invalid && (password.dirty||password.touched)\">\n          <mat-error *ngIf=\"password.errors['required']\">Password is required</mat-error>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-card-actions class=\"centerBtn\">\n        <button type=\"submit\" (click)=\"onLogin()\" [disabled]=\"reactiveFormLogin.invalid\">Login\n        </button>\n      </mat-card-actions>\n      <mat-card-footer>\n        <h3>{{status}}</h3>\n      </mat-card-footer>\n    </form>\n  </div>\n  <div class=\"col-lg-6\">\n    <form class=\"example-container\" [formGroup]=\"reactiveFormRegister\">\n      <h2>S'inscrire à un compte gratuit</h2>\n      <mat-form-field>\n        <input matInput placeholder=\"Enter your name\" formControlName=\"name\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Enter your email\" formControlName=\"email\">\n        <mat-error *ngIf=\"email.invalid && (email.dirty||email.touched)\">\n          <mat-error *ngIf=\"email.errors['required']\">Email is required</mat-error>\n          <mat-error *ngIf=\"email.errors['email']\">Email is not correct</mat-error>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n               formControlName=\"password\">\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n        <mat-error *ngIf=\"password.invalid && (password.dirty||password.touched)\">\n          <mat-error *ngIf=\"password.errors['required']\">Password is required</mat-error>\n        </mat-error>\n      </mat-form-field>\n\n      <div>\n        <label>Gender: </label>\n        <mat-radio-group formControlName=\"gender\">\n          <mat-radio-button value=\"female\">Female</mat-radio-button>\n          <mat-radio-button value=\"male\">Male</mat-radio-button>\n          <mat-radio-button value=\"other\">Other</mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n\n      <div>\n        <label>status: </label>\n        <mat-radio-group formControlName=\"status\">\n          <mat-radio-button value=\"user\">User</mat-radio-button>\n          <mat-radio-button value=\"admin\">Admin</mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <mat-card-actions class=\"centerBtn\">\n        <button type=\"submit\" (click)=\"onRegister()\" [disabled]=\"reactiveFormRegister.invalid\">Register</button>\n      </mat-card-actions>\n\n      <mat-card-footer>\n        <h3>{{status}}</h3>\n      </mat-card-footer>\n    </form>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\n    <td mat-cell *matCellDef=\"let product\"> {{product.name}} </td>\n    <td mat-footer-cell *matFooterCellDef></td>\n  </ng-container>\n\n  <!-- Image Column -->\n  <ng-container matColumnDef=\"image\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Image</th>\n    <td mat-cell *matCellDef=\"let product\">\n      <img class=\"image\" [src]=\"'data:image/jpg;base64,'+product.images[0]\">\n    </td>\n    <td mat-footer-cell *matFooterCellDef>\n      <p style=\"float: left\">Total</p>\n      <button style=\"float: right\" (click)=\"validate()\">validate</button>\n    </td>\n  </ng-container>\n\n  <!-- Unit price Column -->\n  <ng-container matColumnDef=\"unit_price\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit price</th>\n    <td mat-cell *matCellDef=\"let product\"> {{product.price.split('|')[0]}} </td>\n    <td mat-footer-cell *matFooterCellDef></td>\n  </ng-container>\n\n  <!-- Amount Column -->\n  <ng-container matColumnDef=\"amount\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount</th>\n    <td mat-cell *matCellDef=\"let product\">\n      <div class=\"centerButton\">\n        <p>{{product.amount}}</p>\n        <button class=\"x\" (click)=\"OnAdd(product.id)\" mat-mini-fab style=\"background-color: green\"></button>\n        <button class=\"x\" (click)=\"OnSub(product.id)\" mat-mini-fab style=\"background-color: orange\"></button>\n      </div>\n    </td>\n    <td mat-footer-cell *matFooterCellDef></td>\n  </ng-container>\n\n  <!-- Total price Column -->\n  <ng-container matColumnDef=\"total_price\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Total price</th>\n    <td mat-cell *matCellDef=\"let product\"> {{getPriceAmount(product)}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost()}} </td>\n  </ng-container>\n\n\n  <!-- Delete Column -->\n  <ng-container matColumnDef=\"delete\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Delete</th>\n    <td mat-cell *matCellDef=\"let product\">\n      <button class=\"x\" (click)=\"OnDelete(product.id)\" mat-mini-fab style=\"background-color: red\"></button>\n    </td>\n    <td mat-footer-cell *matFooterCellDef></td>\n  </ng-container>\n\n\n  <!-- Delete Column -->\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Status</th>\n    <td mat-cell *matCellDef=\"let product\">{{getStatus()}}</td>\n    <td mat-footer-cell *matFooterCellDef></td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n</table>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"center\">\n    <button (click)=\"onStyle(1)\" mat-mini-fab class=\"buttonRound\">1</button>\n    <button (click)=\"onStyle(2)\" mat-mini-fab class=\"buttonRound\">2</button>\n    <button (click)=\"onStyle(3)\" mat-mini-fab class=\"buttonRound\">3</button>\n    <button (click)=\"onStyle(4)\" mat-mini-fab class=\"buttonRound\">4</button>\n    <button (click)=\"onStyle(6)\" mat-mini-fab class=\"buttonRound\">6</button>\n  </div>\n  <div [ngClass]=\"styleCss\" *ngFor=\"let product of products;let status = false\">\n    <mat-card (mouseover)=\"status=true\" (mouseout)=\"status = false\" class=\"product\">\n      <mat-card-title style=\"display: flex;margin: auto;justify-content: center\"\n                      [ngStyle]=\"{'color':getInfoColor(product.id)}\">{{getInfoStatus(product.id)}}</mat-card-title>\n      <div class=\"productHeader\" [routerLink]=[product.id]>\n        <span class=\"productTitle\">{{product.name}}</span>\n        <span class=\"productPrice\"><p class=\"price\">{{getPrice(product.price)}}</p></span>\n      </div>\n\n      <img mat-card-image\n           class=\"img imgZoom\"\n           [src]=\"'data:image/jpg;base64,'+product.images[0]\"\n           [routerLink]=[product.id]>\n      <mat-card-actions style=\"display: flex;margin: auto;justify-content: center\">\n        <a class=\"col-lg-4 buttonRound\" style=\"margin:auto;\" (click)=\"addLove(product)\" mat-mini-fab><i\n          class=\"material-icons\">thumb_up</i>{{product.love}}\n        </a>\n        <a class=\"col-lg-4 buttonRound\" style=\"margin:auto;\" (click)=\"addBad(product)\" mat-mini-fab><i\n          class=\"material-icons\">thumb_down</i>{{product.bad}}\n        </a>\n        <a class=\"col-lg-4 buttonRound\" style=\"margin:auto;\" mat-mini-fab><i\n          class=\"material-icons\">shopping_basket</i>{{product.buy}}</a>\n\n        <button (click)=\"OnAdd(product)\"\n                mat-mini-fab class=\"buttonRound\" style=\"margin:auto;\">+\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product/product.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product/product.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"divCenterFlex\">\n  <mat-card class=\"col-lg-6\">\n    <div class=\"divCenter1\">\n      <img [src]=\"'data:image/jpg;base64,'+defaultImg\" class=\"imgCenter\" *ngIf=\"defaultImg\">\n    </div>\n    <div [ngClass]=\"{divCenter1: product.images.length <= 5, divScroll: product.images.length > 5}\">\n      <img class=\"imgSmall\"\n           *ngFor=\"let image of product.images\"\n           [src]=\"'data:image/jpg;base64,'+image\"\n           (mouseover)=\"OnOver(image)\">\n    </div>\n  </mat-card>\n\n  <mat-card class=\"col-lg-6\">\n    <mat-card-title>\n      <span>{{product.name}}</span>\n    </mat-card-title>\n    <mat-card-content>\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th>Ingrédients de Base</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>\n            <mat-checkbox *ngFor=\"let a of description\" [checked]=\"a.checked\" (change)=\"setChange(a)\">{{a.ingredient}}</mat-checkbox>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th>Ingrédients supplémentaire</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>\n            <mat-checkbox *ngFor=\"let a of ingredients\" [checked]=\"a.checked\" (change)=\"setChange(a)\">{{a.ingredient}}</mat-checkbox>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n      <div>\n        <table class=\"table\">\n          <thead>\n          <tr>\n            <th>Format</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <mat-radio-button *ngFor=\"let sp of sizePrice\" [checked]=\"sp.checked\" (change)=\"setChange(sp)\">{{sp.size}} {{sp.price}}</mat-radio-button>\n            <td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <a routerLink=\"/products\">Return in products list</a>\n    </mat-card-content>\n    <mat-card-actions class=\"center\">\n      <button (click)=\"OnAdd()\"\n              mat-mini-fab class=\"buttonRound\">+\n      </button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n<div class=\"align-self-center\">\n  <div class=\"col-lg-12\">\n    <div class=\"divScroll\">\n      <img class=\"imgSmall\"\n           *ngFor=\"let OtherProduct of products\"\n           [src]=\"'data:image/jpg;base64,'+OtherProduct.images[0]\"\n           (click)=\"OnClick(OtherProduct.id)\">\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/add/add.component.css":
  /*!*********************************************!*\
    !*** ./src/app/admin/add/add.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAddAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, .4);\n}\n\n.centerBtn {\n  justify-content: center;\n  margin: auto;\n}\n\n.center {\n  margin: auto;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xufVxuXG4uY2VudGVyQnRuIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/add/add.component.ts":
  /*!********************************************!*\
    !*** ./src/app/admin/add/add.component.ts ***!
    \********************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppAdminAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _product_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../product/services/product.service */
    "./src/app/product/services/product.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddComponent = /*#__PURE__*/function () {
      function AddComponent(formBuilder, productService) {
        _classCallCheck(this, AddComponent);

        this.formBuilder = formBuilder;
        this.productService = productService;
        this.sizes = [{
          name: 'JUNIOR',
          control: 'price_junior'
        }, {
          name: 'SENIOR',
          control: 'price_senior'
        }, {
          name: 'MEGA',
          control: 'price_mega'
        }];
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reactiveFormAdd = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price_junior: [''],
            price_senior: [''],
            price_mega: [''],
            image: ['']
          });
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          var _this = this;

          var value = this.reactiveFormAdd.value;
          var product = {
            name: value.name,
            type: value.type,
            size: this.getSize(value),
            price: this.getPrice(value),
            quantity: value.quantity,
            description: value.description.split(';'),
            images: []
          };
          console.log('add : ', product);
          this.productService.create(product).then(function (value1) {
            console.log(value1);
            console.log(_this.files);

            if (_this.files) {
              var formData = new FormData();

              for (var i = 0; i < _this.files.length; i++) {
                var item = _this.files.item(i);

                formData.append('images', item, item.name);
              }

              _this.productService.image(formData, value1.id).then(function (value2) {
                console.log(value2);
              });
            }

            _this.productService.initProductRecommendation(value1.id).then(function (value3) {
              console.log(value3);
            });
          });
        }
      }, {
        key: "getSize",
        value: function getSize(value) {
          var size = '';

          if (value.price_junior && value.price_junior !== '') {
            size += this.sizes[0].name;
          }

          if (value.price_senior && value.price_senior !== '') {
            size += (size !== '' ? '|' : '') + this.sizes[1].name;
          }

          if (value.price_mega && value.price_mega !== '') {
            size += (size !== '' ? '|' : '') + this.sizes[2].name;
          }

          return size;
        }
      }, {
        key: "getPrice",
        value: function getPrice(value) {
          var price = '';

          if (value.price_junior && value.price_junior !== '') {
            price += value.price_junior;
          }

          if (value.price_senior && value.price_senior !== '') {
            price += (price !== '' ? '|' : '') + value.price_senior;
          }

          if (value.price_mega && value.price_mega !== '') {
            price += (price !== '' ? '|' : '') + value.price_mega;
          }

          return price;
        }
      }, {
        key: "setFiles",
        value: function setFiles(files) {
          this.files = files;
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _product_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
      }];
    };

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add/add.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.css */
      "./src/app/admin/add/add.component.css"))["default"]]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/admin/add/add.component.ts");
    /* harmony import */


    var _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./delete/delete.component */
    "./src/app/admin/delete/delete.component.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/admin/update/update.component.ts");
    /* harmony import */


    var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./statistics/statistics.component */
    "./src/app/admin/statistics/statistics.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/delete/delete.component.css":
  /*!***************************************************!*\
    !*** ./src/app/admin/delete/delete.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDeleteDeleteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  cursor: pointer;\n}\n\n.center {\n  display: flex;\n  width: 50%;\n  height: 50%;\n  margin: 5px auto;\n  overflow: hidden;\n  justify-content: center;\n}\n\n.img {\n  width: 50%;\n  height: 50%;\n}\n\n.square {\n  width: 100%;\n  height: 5px;\n  background: #069;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.btn_hidden {\n  visibility: hidden;\n}\n\n.btn_visible {\n  visibility: visible;\n}\n\n.card {\n  border: 1px solid #777777;\n  padding: 10%;\n}\n\n.text {\n  float: left;\n  word-break: break-word;\n}\n\n.name {\n  float: left;\n  word-break: break-all;\n  overflow: hidden;\n}\n\n.productPrice {\n  color: rgb(236, 0, 140) !important;\n  float: right;\n}\n\n.productTitle {\n  display: block;\n  float: left;\n  max-height: 20px;\n  margin-bottom: 4px;\n  overflow: hidden;\n  font-family: VP Next, sans-serif;\n}\n\n.productHeader {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  min-height: 85px;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.product {\n  width: 50%;\n  height: 50%;\n}\n\n.buttonAuth:hover {\n  transform: scale(1.1);\n  box-shadow: 0 0 1em deeppink;\n}\n\n.buttonDashboard:hover {\n  transform: scale(1.1);\n  box-shadow: 0 0 1em purple;\n}\n\n.buttonRound:hover {\n  transform: scale(1.1);\n  box-shadow: 0 0 1em hotpink;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUVsQixhQUFhO0VBRWIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uc3F1YXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDY5O1xufVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idG5faGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYnRuX3Zpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3Nzc3NztcbiAgcGFkZGluZzogMTAlO1xufVxuXG5cbi50ZXh0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5uYW1lIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3RQcmljZSB7XG4gIGNvbG9yOiByZ2IoMjM2LCAwLCAxNDApICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnByb2R1Y3RUaXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogVlAgTmV4dCwgc2Fucy1zZXJpZjtcbn1cblxuLnByb2R1Y3RIZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDg1cHg7XG59XG5cblxuLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ucHJvZHVjdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uYnV0dG9uQXV0aDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSBkZWVwcGluaztcbn1cblxuLmJ1dHRvbkRhc2hib2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSBwdXJwbGU7XG59XG5cbi5idXR0b25Sb3VuZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSBob3RwaW5rO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/delete/delete.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/delete/delete.component.ts ***!
    \**************************************************/

  /*! exports provided: DeleteComponent */

  /***/
  function srcAppAdminDeleteDeleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteComponent", function () {
      return DeleteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/services/product.service */
    "./src/app/product/services/product.service.ts");

    var DeleteComponent = /*#__PURE__*/function () {
      function DeleteComponent(productService) {
        _classCallCheck(this, DeleteComponent);

        this.productService = productService;
        this.products = [];
      }

      _createClass(DeleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log('init');
          this.productService.getAll().subscribe(function (products) {
            _this2.products = products;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getPrice",
        value: function getPrice(price) {
          return 'à partir de ' + price.split('|')[0];
        }
      }, {
        key: "onDelete",
        value: function onDelete(product) {
          var _this3 = this;

          this.productService["delete"](product.id).then(function (value) {
            console.log(value);

            _this3.products.splice(_this3.products.findIndex(function (value1) {
              return value1.id === product.id;
            }), 1);
          });
        }
      }]);

      return DeleteComponent;
    }();

    DeleteComponent.ctorParameters = function () {
      return [{
        type: _product_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/delete/delete.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete.component.css */
      "./src/app/admin/delete/delete.component.css"))["default"]]
    })], DeleteComponent);
    /***/
  },

  /***/
  "./src/app/admin/statistics/statistics.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/admin/statistics/statistics.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminStatisticsStatisticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/statistics/statistics.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/statistics/statistics.component.ts ***!
    \**********************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppAdminStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/services/product.service */
    "./src/app/product/services/product.service.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");

    var StatisticsComponent = /*#__PURE__*/function () {
      function StatisticsComponent(productService, appService) {
        _classCallCheck(this, StatisticsComponent);

        this.productService = productService;
        this.appService = appService;
        this.commands = [];
        this.products = [];
      }

      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.appService.getVisitors().then(function (value) {
            _this4.visitors = value;
          });
          this.productService.getAllCommand().then(function (commands) {
            _this4.numbers = commands.length;
            _this4.total = commands.map(function (command) {
              return command.price;
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
            console.log('---------------', _this4.total, _this4.numbers);

            _this4.productService.getAll().subscribe(function (products) {
              _this4.products = products;

              var _loop = function _loop(i) {
                var find = _this4.commands.find(function (value) {
                  return value.id === commands[i].id;
                });

                if (!find) {
                  var map = commands[i].idsProduct.map(function (id) {
                    return _this4.products.find(function (p) {
                      return p.id === Number(id);
                    });
                  });
                  var b = [];

                  for (var j = 0; j < map.length; j++) {
                    b.push({
                      status: false,
                      product: map[j]
                    });
                  }

                  _this4.commands.push({
                    id: commands[i].id,
                    name: commands[i].name,
                    number: commands[i].number,
                    ingredients: commands[i].ingredients,
                    status: commands[i].status,
                    idsProduct: b,
                    date: commands[i].date,
                    price: commands[i].price
                  });
                }
              };

              for (var i = 0; i < commands.length; i++) {
                _loop(i);
              }

              console.log('<---------', _this4.commands);
            }, function (error) {
              return console.log(error);
            });
          });
        }
      }, {
        key: "isFinished",
        value: function isFinished(command, p) {
          p.status = true;

          if (command.idsProduct.every(function (pp) {
            return pp.status;
          })) {
            this.productService.isFinished(command);
          }
        }
      }]);

      return StatisticsComponent;
    }();

    StatisticsComponent.ctorParameters = function () {
      return [{
        type: _product_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }];
    };

    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-statistics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./statistics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/statistics/statistics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./statistics.component.css */
      "./src/app/admin/statistics/statistics.component.css"))["default"]]
    })], StatisticsComponent);
    /***/
  },

  /***/
  "./src/app/admin/update/update.component.css":
  /*!***************************************************!*\
    !*** ./src/app/admin/update/update.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUpdateUpdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, .4);\n}\n\n.centerBtn {\n  justify-content: center;\n  margin: auto;\n}\n\n.center {\n  margin: auto;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xufVxuXG4uY2VudGVyQnRuIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/update/update.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/update/update.component.ts ***!
    \**************************************************/

  /*! exports provided: UpdateComponent */

  /***/
  function srcAppAdminUpdateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
      return UpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _product_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../product/services/product.service */
    "./src/app/product/services/product.service.ts");

    var UpdateComponent = /*#__PURE__*/function () {
      function UpdateComponent(formBuilder, productService) {
        _classCallCheck(this, UpdateComponent);

        this.formBuilder = formBuilder;
        this.productService = productService;
        this.sizes = [{
          name: 'JUNIOR',
          control: 'price_junior',
          price: ''
        }, {
          name: 'SENIOR',
          control: 'price_senior',
          price: ''
        }, {
          name: 'MEGA',
          control: 'price_mega',
          price: ''
        }];
        this.select = false;
        this.oldProduct = {};
      }

      _createClass(UpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.productService.getAll().subscribe(function (products) {
            _this5.products = products;
            console.log('products : ', products);
          }, function (error) {
            return console.log(error);
          });
          this.reactiveFormAdd = this.formBuilder.group({
            name: [''],
            type: [''],
            quantity: [''],
            description: [''],
            price_junior: [''],
            price_senior: [''],
            price_mega: [''],
            image: ['']
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this6 = this;

          var value = this.reactiveFormAdd.value;
          var product = {
            name: value.name !== '' ? value.name : this.oldProduct.name,
            type: value.type !== '' ? value.type : this.oldProduct.type,
            size: this.getSize(value),
            price: this.getPrice(value),
            quantity: value.quantity !== '' ? value.quantity : this.oldProduct.quantity,
            description: value.description ? value.description.split(';') : this.oldProduct.description,
            images: []
          };
          console.log('update : ', product);
          this.productService.update(this.oldProduct.id, product).then(function (value1) {
            console.log(value1);
            console.log(_this6.files);

            if (_this6.files) {
              var formData = new FormData();

              for (var i = 0; i < _this6.files.length; i++) {
                var item = _this6.files.item(i);

                formData.append('images', item, item.name);
              }

              _this6.productService.image(formData, value1.id).then(function (value2) {
                console.log(value2);
              });
            }
          });
        }
      }, {
        key: "getSize",
        value: function getSize(value) {
          var size = '';

          if (value.price_junior && value.price_junior !== '' || this.sizes[0].price !== '') {
            size += this.sizes[0].name;
          }

          if (value.price_senior && value.price_senior !== '' || this.sizes[1].price !== '') {
            size += (size !== '' ? '|' : '') + this.sizes[1].name;
          }

          if (value.price_mega && value.price_mega !== '' || this.sizes[2].price !== '') {
            size += (size !== '' ? '|' : '') + this.sizes[2].name;
          }

          return size;
        }
      }, {
        key: "getPrice",
        value: function getPrice(value) {
          var price = '';

          if (value.price_junior && value.price_junior !== '') {
            price += value.price_junior;
          } else if (this.sizes[0].price !== '') {
            price += this.sizes[0].price;
          }

          if (value.price_senior && value.price_senior !== '') {
            price += (price !== '' ? '|' : '') + value.price_senior;
          } else if (this.sizes[1].price !== '') {
            price += (price !== '' ? '|' : '') + this.sizes[1].price;
          }

          if (value.price_mega && value.price_mega !== '') {
            price += (price !== '' ? '|' : '') + value.price_mega;
          } else if (this.sizes[2].price !== '') {
            price += (price !== '' ? '|' : '') + this.sizes[2].price;
          }

          return price;
        }
      }, {
        key: "setFiles",
        value: function setFiles(files) {
          this.files = files;
        }
      }, {
        key: "setSelect",
        value: function setSelect(product) {
          console.log('product in database : ', product);
          this.select = true;
          this.oldProduct.id = product.id;
          this.oldProduct.name = product.name;
          this.oldProduct.type = product.type;
          this.oldProduct.quantity = product.quantity;
          this.oldProduct.description = product.description;
          var price = product.price.split('|');
          var size = product.size.split('|');

          if (size.includes('JUNIOR')) {
            this.sizes[0].price = price[0];
          }

          if (size.includes('SENIOR')) {
            this.sizes[1].price = price[1];
          }

          if (size.includes('MEGA')) {
            this.sizes[2].price = price[1];
          }
        }
      }]);

      return UpdateComponent;
    }();

    UpdateComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _product_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update/update.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update.component.css */
      "./src/app/admin/update/update.component.css"))["default"]]
    })], UpdateComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _product_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product/services/product.service */
    "./src/app/product/services/product.service.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(bpo, authService, productService, appService) {
        _classCallCheck(this, AppComponent);

        this.bpo = bpo;
        this.authService = authService;
        this.productService = productService;
        this.appService = appService;
        this.isMobile = true;
        this.length = 0;
        this.menuItems = [{
          title: 'Accueil',
          path: '/products',
          icon: 'list',
          type: true
        }, {
          title: 'Panier',
          path: '/dashboard',
          icon: 'shopping_cart',
          type: false
        }, {
          title: 'Authentification',
          path: '/auth',
          icon: 'login',
          type: true
        }];
        this.adminMenu = [{
          title: 'add',
          path: '/admin/add',
          icon: 'add_circle_outline'
        }, {
          title: 'update',
          path: '/admin/update',
          icon: 'update'
        }, {
          title: 'delete',
          path: '/admin/delete',
          icon: 'remove_circle_outline'
        }, {
          title: 'statistics',
          path: '/admin/statistics',
          icon: 'insights'
        }];
        this.visitors = 0;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.bpo.observe('(max-width: 600px)').subscribe(function (state) {
            _this7.isMobile = state.matches;
          });
          return this.appService.getVisitors().then(function (value) {
            return _this7.visitors = value;
          });
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          return this.authService.getStatus() ? 'green' : 'red';
        }
      }, {
        key: "getLengthDashboard",
        value: function getLengthDashboard() {
          return this.productService.getLength();
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.authService.isAdmin();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _product_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _routing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./routing/routing.module */
    "./src/app/routing/routing.module.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _product_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product/product.module */
    "./src/app/product/product.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular-material-extensions/google-maps-autocomplete */
    "./node_modules/@angular-material-extensions/google-maps-autocomplete/fesm2015/angular-material-extensions-google-maps-autocomplete.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatGoogleMapsAutocompleteModule"], _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppService = /*#__PURE__*/function () {
      function AppService(httpClient) {
        _classCallCheck(this, AppService);

        this.httpClient = httpClient;
        this.URL = 'http://localhost:3000';
      }

      _createClass(AppService, [{
        key: "getVisitors",
        value: function getVisitors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.URL + '/visit');
                    _context.next = 3;
                    return new Promise(function (resolve) {
                      _this8.httpClient.get(_this8.URL + '/visit').subscribe(function (value) {
                        resolve(value);
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pri {\n  width: 100%;\n  height: 100%;\n  -webkit-background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(authService) {
        _classCallCheck(this, AuthComponent);

        this.authService = authService;
        this.authStatus = false;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.authService.getImageBackground().then(function (value) {
            _this9.image = 'data:image/jpg;base64,' + value;
          });
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css"))["default"]]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../routing/routing.module */
    "./src/app/routing/routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular-material-extensions/google-maps-autocomplete */
    "./node_modules/@angular-material-extensions/google-maps-autocomplete/fesm2015/angular-material-extensions-google-maps-autocomplete.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyBwRN5-igI8X_dJ0BTcFSq_-AGfAUqPwAo'
      }), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"].forRoot(), _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatGoogleMapsAutocompleteModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 8%;\n  background: rgba(255, 255, 255, .4);\n}\n\n.centerBtn {\n  justify-content: center;\n  margin: auto;\n}\n\n.center {\n  margin: auto;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDglO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcbn1cblxuLmNlbnRlckJ0biB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var NOT_FOUND = 'NOT_FOUND';
    var FOUND = 'FOUND';
    var CREATED = 'CREATED';

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router, formBuilder) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.hide = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reactiveFormLogin = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
          this.reactiveFormRegister = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this10 = this;

          console.log('login : ', this.reactiveFormLogin.value);
          this.authService.singIn(this.reactiveFormLogin.value, 'login').then(function (result) {
            if (FOUND === result.code) {
              _this10.status = 'User is found';
              console.log(FOUND);

              _this10.setRoute(result);
            } else {
              _this10.status = 'User is not found';
              console.log(NOT_FOUND, result);
            }
          });
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this11 = this;

          this.reactiveFormRegister.value.address = 'default address';
          console.log('register : ', this.reactiveFormRegister.value);
          this.authService.singIn(this.reactiveFormRegister.value, 'register').then(function (result) {
            if (FOUND === result.code) {
              _this11.status = 'User is found';
              console.log(FOUND);

              _this11.setRoute(result);
            } else if (CREATED === result.code) {
              _this11.status = 'User is created';
              console.log(CREATED);

              _this11.setRoute(result);
            } else {
              _this11.status = 'User is not found';
              console.log(NOT_FOUND, result);
            }
          });
        }
      }, {
        key: "onAutocompleteSelected",
        value: function onAutocompleteSelected(result) {
          console.log('onAutocompleteSelected: ', result);
        }
      }, {
        key: "onLocationSelected",
        value: function onLocationSelected(result) {
          console.log('onLocationSelected: ', result);
          this.latitude = result.latitude;
          this.longitude = result.longitude;
        }
      }, {
        key: "onGermanAddressMapped",
        value: function onGermanAddressMapped(result) {
          console.log('onGermanAddressMapped: ', result);
        }
      }, {
        key: "setRoute",
        value: function setRoute(result) {
          if (this.authService.isAdmin()) {
            this.router.navigate(['admin/add']);
          } else {
            this.router.navigate(['dashboard/:', {
              id: result.access_token
            }]);
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this.reactiveFormLogin.get('name');
        }
      }, {
        key: "email",
        get: function get() {
          return this.reactiveFormLogin.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.reactiveFormLogin.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/services/auth-guard.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/services/auth-guard.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, route) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.route = route;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.isAuth) {
            return true;
          }

          return this.route.navigate(['/auth']);
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/services/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/services/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(httpClient) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.URL = 'http://localhost:3000/';
        this.user = {
          code: 'NOT_FOUND',
          access_token: '',
          user: null
        };
        this.isAuth = false;
      }

      _createClass(AuthService, [{
        key: "singIn",
        value: function singIn(body, type) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return new Promise(function (resolve) {
                      _this12.httpClient.post(_this12.URL + 'auth/' + type, body).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        _this12.user = val;
                        _this12.isAuth = true;
                        resolve(_this12.user);
                      }, function (response) {
                        _this12.user = {
                          code: 'NOT_FOUND'
                        };
                        console.log('POST call in error', response);
                        resolve(_this12.user);
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "singOut",
        value: function singOut() {
          this.isAuth = false;
        }
      }, {
        key: "getImageBackground",
        value: function getImageBackground() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return new Promise(function (resolve) {
                      _this13.httpClient.get(_this13.URL + 'background').subscribe(function (val) {
                        console.log('POST call successful value returned in body');
                        _this13.image = val.data;
                        resolve(_this13.image);
                      }, function (response) {
                        console.log('POST call in error', response);
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this14 = this;

            var headers;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.isAuth) {
                      _context4.next = 4;
                      break;
                    }

                    return _context4.abrupt("return", this.user);

                  case 4:
                    console.log(this.URL + 'profile/' + id);
                    headers = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        Authorization: 'Bearer ' + id
                      })
                    };
                    _context4.next = 8;
                    return new Promise(function (resolve) {
                      _this14.httpClient.get(_this14.URL + 'profile', headers).subscribe(function (value) {
                        resolve(value);
                      });
                    });

                  case 8:
                    return _context4.abrupt("return", _context4.sent);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          return this.isAuth;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.isAuth === true && this.user.user !== null && this.user.user.status === 'admin';
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\n  width: 20%;\n  height: 20%;\n}\n\n\n.productPrice {\n  color: rgb(236, 0, 140) !important;\n  float: right;\n}\n\n\n.productTitle {\n  display: block;\n  max-height: 20px;\n  margin-bottom: 4px;\n  overflow: hidden;\n  font-family: VP Next, sans-serif;\n}\n\n\n.productHeader {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  min-height: 85px;\n}\n\n\n.centerButton {\n  display: flex;\n}\n\n\ntable {\n  width: 50%;\n  justify-content: center;\n  margin: auto;\n}\n\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n\n.x {\n  display: block;\n  overflow: hidden;\n  margin: 0 auto;\n  width: 15px;\n  height: 15px;\n}\n\n\n.center{\n  justify-content: center;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7OztBQUVBO0VBQ0Usa0JBQWtCO0VBRWxCLGFBQWE7RUFFYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cblxuLnByb2R1Y3RQcmljZSB7XG4gIGNvbG9yOiByZ2IoMjM2LCAwLCAxNDApICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnByb2R1Y3RUaXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBWUCBOZXh0LCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvZHVjdEhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogODVweDtcbn1cblxuLmNlbnRlckJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cblxudGFibGUge1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ueCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLmNlbnRlcntcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product/services/product.service */
    "./src/app/product/services/product.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(productService, authService, route) {
        _classCallCheck(this, DashboardComponent);

        this.productService = productService;
        this.authService = authService;
        this.route = route;
        this.products = [];
        this.displayedColumns = ['name', 'image', 'unit_price', 'amount', 'total_price', 'delete', 'status'];
        this.dataSource = null;
        this.validated = false;
        this.status = '';
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var id = this.route.snapshot.paramMap.get('id');
          this.authService.getById(id).then(function (value) {
            _this15.user = value.user;
            console.log('user : ', _this15.user);

            _this15.productService.set(_this15.user);

            _this15.productService.getAllCommand().then(function (commands) {
              var sort = commands.filter(function (c) {
                return c.number === _this15.user.email && c.status === 'validated';
              }).sort(function (c1, c2) {
                return c2.id - c1.id;
              });

              if (sort && sort[0]) {
                _this15.status = sort[0].status;
                _this15.id = sort[0].id;
              } else {
                _this15.status = 'finished';
              }
            });

            _this15.productService.selectedProducts.subscribe(function (products) {
              _this15.products = products;
              _this15.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this15.products);
              console.log('product : ', _this15.products);
            });
          });
        }
      }, {
        key: "getTotalCost",
        value: function getTotalCost() {
          var _this16 = this;

          return String(this.products ? this.products.map(function (product) {
            return _this16.getPriceAmount(product);
          }).reduce(function (acc, value) {
            return acc + value;
          }, 0) : '').replace('.', '€');
        }
      }, {
        key: "getPrice",
        value: function getPrice(price) {
          return Number(price.split('|')[0].replace('€', '.'));
        }
      }, {
        key: "OnDelete",
        value: function OnDelete(productId) {
          this.productService.deleteCommand(this.id, productId);
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.products);
        }
      }, {
        key: "OnAdd",
        value: function OnAdd(productId) {
          var id = this.getId(productId);
          this.products[id].amount++;
        }
      }, {
        key: "OnSub",
        value: function OnSub(productId) {
          var id = this.getId(productId);
          var amount = this.products[id].amount;
          this.products[id].amount = amount > 0 ? amount - 1 : 0;
        }
      }, {
        key: "getId",
        value: function getId(productId) {
          return this.products.findIndex(function (product) {
            return product.id === productId;
          });
        }
      }, {
        key: "validate",
        value: function validate() {
          var _this17 = this;

          var ids = this.products.map(function (a) {
            return a.id;
          });
          this.validated = true;
          var command = {
            idsProduct: ids,
            name: this.user.name,
            number: this.user.email,
            ingredients: [],
            status: 'validated',
            date: Date.now(),
            price: this.getTotalCost().replace('€', '.')
          };
          this.productService.sendCommand(command).then(function (value) {
            _this17.command = value;
          });
          ids.forEach(function (value) {
            return _this17.productService.addBuy(value).then(function (value1) {
              return console.log(value1);
            });
          });
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          console.log(this.validated, this.status);

          if (this.validated || this.status === 'validated') {
            return 'En préparation ...';
          }

          if (this.status === 'finished') {
            return 'Finished';
          }

          return 'Non validé';
        }
      }, {
        key: "getPriceAmount",
        value: function getPriceAmount(product) {
          return this.getPrice(product.price) * product.amount;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _product_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__["BrowserAnimationsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/product/product-list/product-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/product/product-list/product-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  cursor: pointer;\n}\n\n.center {\n  display: flex;\n  width: 50%;\n  height: 100%;\n  margin: 5px auto;\n  overflow: hidden;\n  justify-content: center;\n}\n\n.square {\n  width: 100%;\n  height: 5px;\n  background: #069;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.btn_hidden {\n  visibility: hidden;\n}\n\n.btn_visible {\n  visibility: visible;\n}\n\n.card {\n  border: 1px solid #777777;\n  padding: 10%;\n}\n\n.text {\n  float: left;\n  word-break: break-word;\n}\n\n.name {\n  float: left;\n  word-break: break-all;\n  overflow: hidden;\n}\n\n.productPrice {\n  color: rgb(236, 0, 140) !important;\n  float: right;\n}\n\n.productTitle {\n  display: block;\n  float: left;\n  max-height: 20px;\n  margin-bottom: 4px;\n  overflow: hidden;\n  font-family: VP Next,sans-serif;\n}\n\n.productHeader {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  min-height: 85px;\n}\n\n.visible{\n  visibility: visible;\n}\n\n.hidden{\n  visibility: hidden;\n}\n\n.product:hover{\n  transform: scale(1.02);\n  box-shadow: 0 0 2em black;\n}\n\n.buttonAuth:hover{\n  transform: scale(1.1);\n  box-shadow: 0 0 1em deeppink;\n}\n\n.buttonDashboard:hover{\n  transform: scale(1.1);\n  box-shadow: 0 0 1em purple;\n}\n\n.buttonRound:hover{\n  transform: scale(1.1);\n  box-shadow: 0 0 1em hotpink;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUViLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zcXVhcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwNjk7XG59XG5cbi5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJ0bl9oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5idG5fdmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzc3Nzc3O1xuICBwYWRkaW5nOiAxMCU7XG59XG5cblxuLnRleHQge1xuICBmbG9hdDogbGVmdDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLm5hbWUge1xuICBmbG9hdDogbGVmdDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVjdFByaWNlIHtcbiAgY29sb3I6IHJnYigyMzYsIDAsIDE0MCkgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZHVjdFRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBWUCBOZXh0LHNhbnMtc2VyaWY7XG59XG5cbi5wcm9kdWN0SGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiA4NXB4O1xufVxuXG5cbi52aXNpYmxle1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uaGlkZGVue1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0OmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBib3gtc2hhZG93OiAwIDAgMmVtIGJsYWNrO1xufVxuXG4uYnV0dG9uQXV0aDpob3ZlcntcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAwIDAgMWVtIGRlZXBwaW5rO1xufVxuXG4uYnV0dG9uRGFzaGJvYXJkOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcHVycGxlO1xufVxuXG4uYnV0dG9uUm91bmQ6aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSBob3RwaW5rO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/product/product-list/product-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/product/product-list/product-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/product/services/product.service.ts");

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(productService) {
        _classCallCheck(this, ProductListComponent);

        this.productService = productService;
        this.products = [];
        this.info = [];
        this.styleCss = {
          'col-lg-3': true
        };
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          console.log('init');
          this.productService.getAll().subscribe(function (products) {
            _this18.products = products;
            _this18.info = [];
            var sort = products.sort(function (p1, p2) {
              return p2.love - p1.love;
            });

            for (var i = 0; i < sort.length; i++) {
              var status = _this18.getStatus(i, sort[i]);

              var color = _this18.getColor(status);

              _this18.info.push({
                status: status,
                color: color,
                sort: sort[i].love,
                id: sort[i].id
              });
            }

            console.log('---------', _this18.products, _this18.info);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "OnAdd",
        value: function OnAdd(productPreview) {
          this.productService.addToDashboard(productPreview);
        }
      }, {
        key: "onStyle",
        value: function onStyle(col) {
          switch (col) {
            case 1:
              {
                this.styleCss = {
                  'col-lg-12': true
                };
                break;
              }

            case 2:
              {
                this.styleCss = {
                  'col-lg-6': true
                };
                break;
              }

            case 3:
              {
                this.styleCss = {
                  'col-lg-4': true
                };
                break;
              }

            case 4:
              {
                this.styleCss = {
                  'col-lg-3': true
                };
                break;
              }

            case 6:
              {
                this.styleCss = {
                  'col-lg-2': true
                };
                break;
              }
          }
        }
      }, {
        key: "getPrice",
        value: function getPrice(price) {
          return 'à partir de ' + price.split('|')[0];
        }
      }, {
        key: "addLove",
        value: function addLove(product) {
          console.log('after addLove:', product);
          this.productService.addLove(product.id).then(function (value) {
            console.log('addLove:', value);
            product.love++;
          });
        }
      }, {
        key: "addBad",
        value: function addBad(product) {
          console.log('after subLove:', product);
          this.productService.addBad(product.id).then(function (value) {
            console.log('subLove:', value);
            product.bad++;
          });
        }
      }, {
        key: "getStatus",
        value: function getStatus(position, product) {
          var l = 'À découvrir';

          switch (position) {
            case 0:
            case 1:
            case 2:
              l = 'Populaire';
              break;
          }

          if (product.love === 0 && product.bad === 0 && product.buy === 0) {
            l = 'Nouvelle';
          }

          return l;
        }
      }, {
        key: "getColor",
        value: function getColor(status) {
          switch (status) {
            case 'À découvrir':
              return 'orange';

            case 'Populaire':
              return 'green';

            case 'Nouvelle':
              return 'greenyellow';
          }
        }
      }, {
        key: "getInfoStatus",
        value: function getInfoStatus(id) {
          var find = this.info.find(function (value) {
            return value.id === id;
          });
          return find ? find.status : '';
        }
      }, {
        key: "getInfoColor",
        value: function getInfoColor(id) {
          var find = this.info.find(function (value) {
            return value.id === id;
          });
          return find ? find.color : '';
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.css */
      "./src/app/product/product-list/product-list.component.css"))["default"]]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/product/product.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/product/product.module.ts ***!
    \*******************************************/

  /*! exports provided: ProductModule */

  /***/
  function srcAppProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return ProductModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../routing/routing.module */
    "./src/app/routing/routing.module.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product/product.component.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/product/services/product.service.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product/product-list/product-list.component.ts");

    var ProductModule = function ProductModule() {
      _classCallCheck(this, ProductModule);
    };

    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]]
    })], ProductModule);
    /***/
  },

  /***/
  "./src/app/product/product/product.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/product/product/product.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imgCenter {\n  width: 50%;\n  height: 50%;\n}\n\n.imgSmall {\n  margin: 5px;\n  width: 10%;\n  height: 10%;\n}\n\n.imgSmall:hover{\n  transform: scale(1.01);\n  box-shadow: 0 0 0.4em black;\n}\n\n.divCenter1 {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n}\n\n.divScroll {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.divCenter {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n}\n\n.divCenterFlex {\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nQ2VudGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5pbWdTbWFsbCB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLmltZ1NtYWxsOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICBib3gtc2hhZG93OiAwIDAgMC40ZW0gYmxhY2s7XG59XG5cblxuLmRpdkNlbnRlcjEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpdlNjcm9sbCB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi5kaXZDZW50ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpdkNlbnRlckZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product/product/product.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/product/product/product.component.ts ***!
    \******************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/product/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(productService, route, router) {
        var _this19 = this;

        _classCallCheck(this, ProductComponent);

        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = {
          name: 'name',
          color: 'color',
          price: '0€00',
          size: '',
          comment: [],
          images: []
        };
        this.description = [];
        this.sizePrice = [];
        this.navigationSubscription = this.router.events.subscribe(function (e) {
          // If it is a NavigationEnd event re-initalise the component
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this19.initialiseInvites();
          }
        });
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.id = this.route.snapshot.paramMap.get('id');
          this.productService.getById(this.id).then(function (value) {
            _this20.product = value;
            _this20.defaultImg = _this20.product.images[0];

            if (_this20.description.length === 0) {
              for (var i = 0; i < _this20.product.description.length; i++) {
                _this20.description.push({
                  ingredient: _this20.product.description[i],
                  checked: true
                });
              }
            }

            if (_this20.sizePrice.length === 0) {
              var prices = _this20.product.price.split('|');

              var sizes = _this20.product.size.split('|');

              for (var _i = 0; _i < prices.length; _i++) {
                _this20.sizePrice.push({
                  price: prices[_i],
                  size: sizes[_i],
                  checked: false
                });
              }
            }
          });
          this.productService.getAll().subscribe(function (products) {
            _this20.products = products;
          }, function (error) {
            return console.log(error);
          });
          this.productService.getAllIngredients().then(function (a) {
            _this20.ingredients = a;
            console.log(a);
          });
        }
      }, {
        key: "getColor",
        value: function getColor() {
          if (this.product.stock < 5) {
            return 'red';
          } else {
            return 'green';
          }
        }
      }, {
        key: "OnOver",
        value: function OnOver(thumbnail) {
          this.defaultImg = thumbnail;
        }
      }, {
        key: "OnClick",
        value: function OnClick(id) {
          this.router.navigate(['products/' + id]);
        }
      }, {
        key: "initialiseInvites",
        value: function initialiseInvites() {
          // Set default values and re-fetch any data you need.
          this.ngOnInit();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
          }
        }
      }, {
        key: "OnAdd",
        value: function OnAdd() {
          var sizePrice = this.sizePrice.filter(function (value) {
            return value.checked;
          });
          var ingredients = this.ingredients.filter(function (value) {
            return value.checked;
          });
          var description = this.description.filter(function (value) {
            return value.checked;
          });
          console.log(sizePrice);
          var product = {
            id: this.product.id,
            name: this.product.name,
            type: this.product.type,
            size: sizePrice[0].size,
            price: sizePrice[0].price,
            quantity: this.product.quantity,
            ingredients: ingredients.concat(description),
            images: this.product.images,
            amount: 1
          };
          console.log(product);
          this.productService.addToDashboard(product);
        }
      }, {
        key: "onDashboard",
        value: function onDashboard() {
          this.router.navigate(['dashboard']);
        }
      }, {
        key: "setChange",
        value: function setChange(a) {
          a.checked = !a.checked;
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product/product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/product/product/product.component.css"))["default"]]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/product/services/product.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/product/services/product.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppProductServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(httpClient) {
        var _this21 = this;

        _classCallCheck(this, ProductService);

        this.httpClient = httpClient;
        this.products = null;
        this.URL = 'http://localhost:3000/product';
        this.length = 0;
        this.selectedProducts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.selectedProducts$ = this.selectedProducts.asObservable();
        this.getAll().subscribe(function (products) {
          _this21.products = products;
        }, function (error) {
          return console.log(error);
        });
      }

      _createClass(ProductService, [{
        key: "addToDashboard",
        value: function addToDashboard(product) {
          var test = this.selectedProducts.value.find(function (productBdd) {
            return product.id === productBdd.id;
          });

          if (!test) {
            var newProduct = this.selectedProducts.value;
            newProduct = [].concat(_toConsumableArray(newProduct), [product]);
            this.selectedProducts.next(newProduct);
            this.length++;
          }
        }
      }, {
        key: "deleteToDashboard",
        value: function deleteToDashboard(id) {
          var newProduct = this.selectedProducts.value;
          var pp = newProduct.filter(function (value) {
            return value.id !== id;
          });
          this.selectedProducts.next(pp);
          this.length--;
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var _this22 = this;

          console.log(this.URL + '/all');
          return this.httpClient.get(this.URL + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (products) {
            return products.map(function (productJson) {
              return {
                id: productJson.id,
                name: productJson.name,
                type: productJson.type,
                size: productJson.size,
                price: productJson.price,
                quantity: productJson.quantity,
                description: productJson.description,
                images: productJson.images,
                amount: 1,
                love: productJson.love,
                bad: productJson.bad,
                buy: productJson.buy
              };
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (products) {
            _this22.products = products;
            /*this.products.forEach(product => {
              this.getRecommendation(product.id).then(value => {
                value.love;
                value.bad;
                value.buy;
              });
            });*/
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log(this.URL + '/one/' + id);
                    _context5.next = 3;
                    return new Promise(function (resolve) {
                      _this23.httpClient.get(_this23.URL + '/one/' + id).subscribe(function (value) {
                        resolve(value);
                      });
                    });

                  case 3:
                    return _context5.abrupt("return", _context5.sent);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "create",
        value: function create(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this24 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    console.log(this.URL + product);
                    _context6.next = 3;
                    return new Promise(function (resolve) {
                      _this24.httpClient.post(_this24.URL, product).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "image",
        value: function image(images, id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this25 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    url = 'http://localhost:3000/image/all/' + id;
                    console.log(url);
                    console.log('------', images);
                    _context7.next = 5;
                    return new Promise(function (resolve) {
                      _this25.httpClient.post(url, images).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "initProductRecommendation",
        value: function initProductRecommendation(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this26 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/set/' + id;
                    console.log(url);
                    _context8.next = 4;
                    return new Promise(function (resolve) {
                      _this26.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context8.abrupt("return", _context8.sent);

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }, {
        key: "getLength",
        value: function getLength() {
          return this.length;
        }
      }, {
        key: "update",
        value: function update(id, product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this27 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    console.log(this.URL + '/update/' + id, product);
                    _context9.next = 3;
                    return new Promise(function (resolve) {
                      _this27.httpClient.post(_this27.URL + '/update/' + id, product).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 3:
                    return _context9.abrupt("return", _context9.sent);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this28 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    console.log(this.URL + '/delete/' + id);
                    _context10.next = 3;
                    return new Promise(function (resolve) {
                      _this28.httpClient.get(_this28.URL + '/delete/' + id).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 3:
                    return _context10.abrupt("return", _context10.sent);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getAllIngredients",
        value: function getAllIngredients() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this29 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    console.log(this.URL + '/ingredients');
                    _context11.next = 3;
                    return new Promise(function (resolve) {
                      _this29.httpClient.get(_this29.URL + '/ingredients').subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 3:
                    return _context11.abrupt("return", _context11.sent);

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "sendCommand",
        value: function sendCommand(command) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this30 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    url = 'http://localhost:3000/command';
                    _context12.next = 3;
                    return new Promise(function (resolve) {
                      _this30.httpClient.post(url, command).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve(response);
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 3:
                    return _context12.abrupt("return", _context12.sent);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }, {
        key: "getAllCommand",
        value: function getAllCommand() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this31 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    url = 'http://localhost:3000/command';
                    _context13.next = 3;
                    return new Promise(function (resolve) {
                      _this31.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 3:
                    return _context13.abrupt("return", _context13.sent);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));
        }
      }, {
        key: "isFinished",
        value: function isFinished(command) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this32 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    command.status = true;
                    command.idsProduct = [];
                    url = 'http://localhost:3000/command/finished';
                    _context14.next = 5;
                    return new Promise(function (resolve) {
                      _this32.httpClient.post(url, command).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 5:
                    return _context14.abrupt("return", _context14.sent);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));
        }
      }, {
        key: "getOldCommand",
        value: function getOldCommand(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this33 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    url = 'http://localhost:3000/command/user';
                    _context15.next = 3;
                    return new Promise(function (resolve) {
                      _this33.httpClient.post(url, user).subscribe(function (val) {
                        console.log('POST call successful value returned in body commmmmm: ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 3:
                    return _context15.abrupt("return", _context15.sent);

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));
        }
      }, {
        key: "findById",
        value: function findById(id) {
          console.log(id, this.products);
          return this.products ? this.products.find(function (p) {
            return p.id === id;
          }) : {};
        }
      }, {
        key: "set",
        value: function set(user) {
          var _this34 = this;

          this.getAllCommand().then(function (commands) {
            var sortElement = commands.filter(function (c) {
              return c.number === user.email && c.status === 'validated';
            }).sort(function (c1, c2) {
              return c2.id - c1.id;
            })[0];
            console.log('##########>>', sortElement);

            if (sortElement) {
              var filter = sortElement.idsProduct.map(function (idd) {
                return _this34.findById(Number(idd));
              });
              filter.forEach(function (p) {
                return _this34.addToDashboard(p);
              });
            }
          });
        }
      }, {
        key: "deleteCommand",
        value: function deleteCommand(idCommand, idProduct) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this35 = this;

            var url, body;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.deleteToDashboard(idProduct);
                    url = 'http://localhost:3000/command/delete';
                    body = {
                      idCommand: idCommand,
                      idProduct: idProduct
                    };
                    _context16.next = 5;
                    return new Promise(function (resolve) {
                      _this35.httpClient.post(url, body).subscribe(function (val) {
                        console.log('POST call successful value returned in body commmmmm: ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 5:
                    return _context16.abrupt("return", _context16.sent);

                  case 6:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "getRecommendation",
        value: function getRecommendation(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this36 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/get/' + id;
                    console.log(url);
                    _context17.next = 4;
                    return new Promise(function (resolve) {
                      _this36.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context17.abrupt("return", _context17.sent);

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17);
          }));
        }
      }, {
        key: "addLove",
        value: function addLove(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this37 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/love_add/' + id;
                    console.log(url);
                    _context18.next = 4;
                    return new Promise(function (resolve) {
                      _this37.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context18.abrupt("return", _context18.sent);

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          }));
        }
      }, {
        key: "addBad",
        value: function addBad(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this38 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/bad_add/' + id;
                    console.log(url);
                    _context19.next = 4;
                    return new Promise(function (resolve) {
                      _this38.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context19.abrupt("return", _context19.sent);

                  case 5:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));
        }
      }, {
        key: "addBuy",
        value: function addBuy(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this39 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/buy_add/' + id;
                    console.log(url);
                    _context20.next = 4;
                    return new Promise(function (resolve) {
                      _this39.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context20.abrupt("return", _context20.sent);

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          }));
        }
      }, {
        key: "subLove",
        value: function subLove(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this40 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/love_sub/' + id;
                    console.log(url);
                    _context21.next = 4;
                    return new Promise(function (resolve) {
                      _this40.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context21.abrupt("return", _context21.sent);

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21);
          }));
        }
      }, {
        key: "subBad",
        value: function subBad(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this41 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/bad_sub/' + id;
                    console.log(url);
                    _context22.next = 4;
                    return new Promise(function (resolve) {
                      _this41.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context22.abrupt("return", _context22.sent);

                  case 5:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22);
          }));
        }
      }, {
        key: "subBuy",
        value: function subBuy(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var _this42 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    url = 'http://localhost:3000/recommendation/buy_sub/' + id;
                    console.log(url);
                    _context23.next = 4;
                    return new Promise(function (resolve) {
                      _this42.httpClient.get(url).subscribe(function (val) {
                        console.log('POST call successful value returned in body : ', val);
                        resolve(val);
                      }, function (response) {
                        console.log('POST call in error', response);
                        resolve({
                          code: 'NOT_FOUND'
                        });
                      }, function () {
                        console.log('The POST observable is now completed.');
                      });
                    });

                  case 4:
                    return _context23.abrupt("return", _context23.sent);

                  case 5:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/routing/routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/routing/routing.module.ts ***!
    \*******************************************/

  /*! exports provided: RoutingModule */

  /***/
  function srcAppRoutingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
      return RoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product/product-list/product-list.component */
    "./src/app/product/product-list/product-list.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _product_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product/product/product.component */
    "./src/app/product/product/product.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../auth/services/auth-guard.service */
    "./src/app/auth/services/auth-guard.service.ts");
    /* harmony import */


    var _admin_add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../admin/add/add.component */
    "./src/app/admin/add/add.component.ts");
    /* harmony import */


    var _admin_update_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../admin/update/update.component */
    "./src/app/admin/update/update.component.ts");
    /* harmony import */


    var _admin_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../admin/delete/delete.component */
    "./src/app/admin/delete/delete.component.ts");
    /* harmony import */


    var _admin_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../admin/statistics/statistics.component */
    "./src/app/admin/statistics/statistics.component.ts");

    var appRoutes = [{
      path: 'products',
      component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
    }, {
      path: 'products/:id',
      component: _product_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]
    }, {
      path: 'dashboard',
      canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    }, {
      path: 'dashboard/:id',
      canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    }, {
      path: 'admin/add',
      canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      component: _admin_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"]
    }, {
      path: 'admin/update',
      canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      component: _admin_update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"]
    }, {
      path: 'admin/delete',
      canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      component: _admin_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__["DeleteComponent"]
    }, {
      path: 'admin/statistics',
      canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      component: _admin_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"]
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
    }, {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/not-found'
    }];

    var RoutingModule = function RoutingModule() {
      _classCallCheck(this, RoutingModule);
    };

    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], RoutingModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/salvador/front/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map