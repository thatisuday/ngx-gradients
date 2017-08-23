import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getGradient } from './grad-types.class';

@Directive({
  selector: '[grad-background]'
})
export class GradBackgroundDirective {

  @Input('grad-background') type: string = 'night-call';

  constructor(
    private domSanitizer: DomSanitizer,
    private elem: ElementRef,
    private renderer: Renderer2
  ){}

  ngOnInit(){
    this.changeGradient(this.type);
  }

  ngOnChanges(changes: any){
    if(changes.type) this.changeGradient(changes.type.currentValue);
  }

  private changeGradient(type){
    this.renderer.setStyle(this.elem.nativeElement, 'background', getGradient(type));
    this.renderer.addClass(this.elem.nativeElement, type);
  }
}
