/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/map/popup.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/security';
export class Wrapper_PopupComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PopupComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.PopupComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_x(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.x = currValue;
      this._expr_0 = currValue;
    }
  }
  check_y(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.y = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_PopupComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PopupComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PopupComponent>;
  _PopupComponent_0_3:Wrapper_PopupComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PopupComponent_Host0,renderType_PopupComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'popup',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PopupComponent0(this.viewUtils,this,0,this._el_0);
    this._PopupComponent_0_3 = new Wrapper_PopupComponent(new import9.ElementRef(this._el_0));
    this.compView_0.create(this._PopupComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PopupComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PopupComponent) && (0 === requestNodeIndex))) { return this._PopupComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PopupComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PopupComponentNgFactory:import8.ComponentFactory<import0.PopupComponent> = new import8.ComponentFactory<import0.PopupComponent>('popup',View_PopupComponent_Host0,import0.PopupComponent);
const styles_PopupComponent:any[] = ['.popup[_ngcontent-%COMP%] { \n            position: fixed; \n            background-color: white;\n            z-index: 402;\n            top: 0;\n            left: 0;    \n        }'];
var renderType_PopupComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_PopupComponent,{});
export class View_PopupComponent0 extends import2.AppView<import0.PopupComponent> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PopupComponent0,renderType_PopupComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','popup'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.y;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementStyle(this._el_0,'top',((this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_2) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_2).toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.x;
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementStyle(this._el_0,'left',((this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_3) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_3).toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.display();
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementStyle(this._el_0,'visibility',((this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_4) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_4).toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.height;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementStyle(this._el_0,'height',((this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_5) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_5).toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementStyle(this._el_0,'width',((this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_6) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_6).toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = import3.inlineInterpolate(1,'I\'M A POPUP ',this.context.marker,'');
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_1,currVal_7);
      this._expr_7 = currVal_7;
    }
  }
}