import { Component } from '@angular/core';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-photo-changer',
  templateUrl: './photo-changer.component.html',
  styleUrls: ['./photo-changer.component.scss'],
  providers: []
})
export class PhotoChangerComponent {
  inputPhoto: string;
  result: string;
  result2: string;
  img:string ="https://media.istockphoto.com/id/1186398334/vector/cool-sign-in-pop-art-style-comi-icon-over-dotted-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=PFJXc_FjXBkUJqqt5m0Z2X1WQFA5NVs0szeuaUCxOCk="
  toogle: boolean = true;

  constructor(public GlobalService: GlobalServiceService) {

  }


  activateChanger(){
    this.toogle = !this.toogle
    this.toogle ?
      this.img = "https://media.istockphoto.com/id/1186398334/vector/cool-sign-in-pop-art-style-comi-icon-over-dotted-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=PFJXc_FjXBkUJqqt5m0Z2X1WQFA5NVs0szeuaUCxOCk=" :
        this.img ='data:image/jpeg;base64,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'
        this.GlobalService.decr()
    // this.toogle = !this.toogle
  }

  twiser(){
    this.result = this.inputPhoto
  }

}
