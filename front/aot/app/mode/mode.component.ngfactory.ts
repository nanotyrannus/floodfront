/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/mode/mode.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/event/event.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from './mode.component.css.shim.ngstyle';
export class Wrapper_ModeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ModeComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.ModeComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ModeComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ModeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ModeComponent>;
  _ModeComponent_0_3:Wrapper_ModeComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ModeComponent_Host0,renderType_ModeComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'mode-selector',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ModeComponent0(this.viewUtils,this,0,this._el_0);
    this._ModeComponent_0_3 = new Wrapper_ModeComponent(this.injectorGet(import8.EventService,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._ModeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ModeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ModeComponent) && (0 === requestNodeIndex))) { return this._ModeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ModeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ModeComponentNgFactory:import7.ComponentFactory<import0.ModeComponent> = new import7.ComponentFactory<import0.ModeComponent>('mode-selector',View_ModeComponent_Host0,import0.ModeComponent);
const styles_ModeComponent:any[] = [import10.styles];
var renderType_ModeComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_ModeComponent,{});
export class View_ModeComponent0 extends import1.AppView<import0.ModeComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ModeComponent0,renderType_ModeComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','mode-title'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'Where are you?',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','mode-button'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'Out in the Field',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','mode-button'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n        ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'At a Desk',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_14,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_14));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
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
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.enterMap('field')) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_14(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.enterMap('desktop')) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}