import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dateWithoutPass, userDate } from '../app.component';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.scss']
})
export class ShowPostsComponent {
  @Input() data: userDate;
  @Input() names: dateWithoutPass;
  @Output() colorInputValue: EventEmitter<any> = new EventEmitter<any>();

  colorInput: string = '';

  saveColor(event: any) {
    this.colorInput = event.target.value;
    this.colorInputValue.emit(this.colorInput);
}
}
