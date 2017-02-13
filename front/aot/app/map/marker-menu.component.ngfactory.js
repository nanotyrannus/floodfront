/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '../../../app/map/marker-menu.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
import * as import9 from '@angular/core/src/security';
var Wrapper_MarkerMenuComponent = (function () {
    function Wrapper_MarkerMenuComponent() {
        this._changed = false;
        this.context = new import0.MarkerMenuComponent();
    }
    Wrapper_MarkerMenuComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MarkerMenuComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_MarkerMenuComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MarkerMenuComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_MarkerMenuComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MarkerMenuComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onMarkerPicked.subscribe(_eventHandler.bind(view, 'onMarkerPicked')));
        }
    };
    return Wrapper_MarkerMenuComponent;
}());
export { Wrapper_MarkerMenuComponent };
var renderType_MarkerMenuComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_MarkerMenuComponent_Host0 = (function (_super) {
    __extends(View_MarkerMenuComponent_Host0, _super);
    function View_MarkerMenuComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_MarkerMenuComponent_Host0, renderType_MarkerMenuComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_MarkerMenuComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'marker-menu', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_MarkerMenuComponent0(this.viewUtils, this, 0, this._el_0);
        this._MarkerMenuComponent_0_3 = new Wrapper_MarkerMenuComponent();
        this.compView_0.create(this._MarkerMenuComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._MarkerMenuComponent_0_3.context);
    };
    View_MarkerMenuComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MarkerMenuComponent) && (0 === requestNodeIndex))) {
            return this._MarkerMenuComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_MarkerMenuComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MarkerMenuComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_MarkerMenuComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._MarkerMenuComponent_0_3.ngOnDestroy();
    };
    View_MarkerMenuComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_MarkerMenuComponent_Host0;
}(import1.AppView));
export var MarkerMenuComponentNgFactory = new import7.ComponentFactory('marker-menu', View_MarkerMenuComponent_Host0, import0.MarkerMenuComponent);
var styles_MarkerMenuComponent = [
    '.marker-menu-container-visible[_ngcontent-%COMP%] {\n            background-color: white;\n            z-index: 401;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0%;\n            left: 0%;\n            trasition: top 1s, left 1s;\n        }',
    '.marker-menu-container-hidden[_ngcontent-%COMP%] {\n            background-color: white;\n            z-index: 401;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 100%;\n            left: 0%;\n            trasition: top 1s, left 1s;\n        }'
];
var renderType_MarkerMenuComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_MarkerMenuComponent, {});
var View_MarkerMenuComponent0 = (function (_super) {
    __extends(View_MarkerMenuComponent0, _super);
    function View_MarkerMenuComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_MarkerMenuComponent0, renderType_MarkerMenuComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_32 = import8.UNINITIALIZED;
        return _this;
    }
    View_MarkerMenuComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'marker-menu-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'img', new import3.InlineArray4(4, 'src', '/assets/images/marker_walkable.svg', 'style', 'height: 25%;'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Not Flooded', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'img', new import3.InlineArray4(4, 'src', '/assets/images/marker_border.svg', 'style', 'height: 25%;'), null);
        this._text_13 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_10, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Flood Boundary', null);
        this._text_16 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'img', new import3.InlineArray4(4, 'src', '/assets/images/marker_flood.svg', 'style', 'height: 25%;'), null);
        this._text_21 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_18, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Flooded', null);
        this._text_24 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'CLOSE', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_29 = this.renderer.createText(this._el_0, '\n', null);
        this._text_30 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_31 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'marker-menu-text'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_26, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_26));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31
        ]), [disposable_0]);
        return null;
    };
    View_MarkerMenuComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_32 = this.context.visibility;
        if (import3.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementStyle(this._el_0, 'visibility', ((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_32) == null) ? null : this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_32).toString()));
            this._expr_32 = currVal_32;
        }
    };
    View_MarkerMenuComponent0.prototype.handleEvent_26 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.toggle() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_MarkerMenuComponent0;
}(import1.AppView));
export { View_MarkerMenuComponent0 };
//# sourceMappingURL=marker-menu.component.ngfactory.js.map