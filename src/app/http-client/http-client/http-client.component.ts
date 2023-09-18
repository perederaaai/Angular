import { Component, OnInit } from '@angular/core';
import { httpClientService, ITodo } from '../../services/http-client-service';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
//import HttpClientModule in app.module, then use constructor (before .subscribe, we can add another operators of
// transform data)

export class HttpClientComponent implements OnInit {

  respHttp: ITodo[];
  userTitle: string = '';
  loadFlag: boolean = false;

  constructor(public httpClient: httpClientService) {
  }

  ngOnInit() {
    this.downloadData()
  }

  addTitle() {
    if (!this.userTitle.trim()) {
      return
    }
    this.httpClient.addTitle(
      {
        completed: false,
        title: this.userTitle
      }).subscribe(resp => {
      this.respHttp.push(resp)
      this.userTitle = '';
      console.log(resp, 'POST')
      console.log(this.respHttp, 'download2')
    })
  }

  downloadData() {
    this.loadFlag = true;
    this.httpClient.downloadData()
      .subscribe(response => {
        console.log(response, 'download1')
        if(!response){
          return
        }
        this.respHttp = response;
        this.loadFlag = false;
        console.log(this.respHttp, 'download11')
      })
  }

  removePost(id?: number) {
    this.httpClient.removePost(id)
      .subscribe(() => {
        this.respHttp = this.respHttp.filter(p => p.id != id)
      })
  }

  completedElement(id?: number) {
    this.httpClient.completed(id).subscribe((resp) => {
      if(!resp) return;
      const findedPost = this.respHttp.find( p => p.id === resp.id);
      findedPost ? findedPost.completed = true : null;
      // this.respHttp.forEach(p => {
      //   p.id === next.id ? p.completed = true : null
      // })
    })
  }

}

