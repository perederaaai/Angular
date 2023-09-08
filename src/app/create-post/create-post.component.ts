import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dateWithoutPass, userDate } from '../app.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  @Input() myName: string;
  @Input() mySecondName: string;
  @Output() addDate: EventEmitter<userDate> = new EventEmitter<userDate>();
  @Output() twoNames: EventEmitter<dateWithoutPass> = new EventEmitter<dateWithoutPass>();

  name: string = '';
  secondName: string = '';
  password: any = '';



  getDate() {
    const userInfo: userDate = {
      name: this.name,
      secondName: this.secondName,
      password: this.password
    }
    this.addDate.emit(userInfo)
  }

  getName(){
    const twoName: dateWithoutPass ={
      name: this.name,
      secondName: this.secondName
    }
    this.twoNames.emit(twoName)
  }

  ngOnInit(): void {
    this.name = this.myName;
    this.secondName = this.mySecondName

  }
}
