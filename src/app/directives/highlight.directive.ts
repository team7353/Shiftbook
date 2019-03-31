import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('defaultColor') defaultColor: string  = 'transparent';
  @Input() highlightColor: string = 'AliceBlue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'AliceBlue');
  this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

ngOnInit(){
  this.backgroundColor = this.defaultColor;
}
}
