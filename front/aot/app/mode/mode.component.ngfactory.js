/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/mode/mode.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/event/event.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from './mode.component.css.shim.ngstyle';
var Wrapper_ModeComponent = (function () {
    function Wrapper_ModeComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.ModeComponent(p0, p1);
    }
    Wrapper_ModeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ModeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ModeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ModeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ModeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ModeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ModeComponent;
}());
export { Wrapper_ModeComponent };
var renderType_ModeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ModeComponent_Host0 = (function (_super) {
    __extends(View_ModeComponent_Host0, _super);
    function View_ModeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ModeComponent_Host0, renderType_ModeComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ModeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'mode-selector', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ModeComponent0(this.viewUtils, this, 0, this._el_0);
        this._ModeComponent_0_3 = new Wrapper_ModeComponent(this.injectorGet(import8.EventService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._ModeComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ModeComponent_0_3.context);
    };
    View_ModeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ModeComponent) && (0 === requestNodeIndex))) {
            return this._ModeComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ModeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ModeComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ModeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ModeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ModeComponent_Host0;
}(import1.AppView));
export var ModeComponentNgFactory = new import7.ComponentFactory('mode-selector', View_ModeComponent_Host0, import0.ModeComponent);
var styles_ModeComponent = [import10.styles];
var renderType_ModeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_ModeComponent, {});
var View_ModeComponent0 = (function (_super) {
    __extends(View_ModeComponent0, _super);
    function View_ModeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ModeComponent0, renderType_ModeComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ModeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mode-title'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Where are you?', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mode-button'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'Out in the Field', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mode-button'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, 'At a Desk', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_14));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_ModeComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.enterMap('field') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ModeComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.enterMap('desktop') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ModeComponent0;
}(import1.AppView));
export { View_ModeComponent0 };
//# sourceMappingURL=mode.component.ngfactory.js.map