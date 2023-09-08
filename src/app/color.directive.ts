import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { colors } from '@angular/cli/src/utilities/color';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  // btnColor: any = '';
  @Input() color : any;
  addText : string = '';

  constructor(private eleRef: ElementRef, private rendener: Renderer2) {
    // this.rendener.setStyle(eleRef.nativeElement, 'background-color', this.changeColor)


    let color = this.rendener.createText('click to change color')
    rendener.appendChild(eleRef.nativeElement, color)
  }
  @HostListener('click', ['$event.target']) onClick(event: Event){
    this.rendener.setStyle(this.eleRef.nativeElement, 'background-color', this.color)
    console.log(event)

  }
}
