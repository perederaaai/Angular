import { Component } from '@angular/core';
import { LocalServiceService } from './services/local-service.service';
import { GlobalServiceService } from './services/global-service.service';
import { interval, map, Observable, Subject, Subscription } from 'rxjs';

export interface userDate {
  name: string,
  secondName: string,
  password: any
}

export interface dateWithoutPass {
  name: string,
  secondName: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalServiceService]
})

export class AppComponent {

  // Work with Post
  names: dateWithoutPass;
  myName: string = 'Ihor';
  mySecondName: string = 'Peredera'

  colorValue: string = '';
  date: userDate;

  usersName(event: dateWithoutPass) {
    this.names = event
    console.log(this.names)
  }

  showInfo(event: userDate) {
    this.date = event
    console.log(this.date)
  }

  setInputValue(event: string): void {
    this.colorValue = event;
    // console.log(this.colorValue, 'app')
  }

                               //work with Service in constructor and html
                                   // create variable for stream$
  num: number = 3;
  value: any
  sub: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  intervalStream$ = interval(1000);
  subscribe$: Subject<number> = new Subject<number>();


  constructor(public LocalService: LocalServiceService,
              public GlobalService: GlobalServiceService) {

    //Work with streams$

    this.sub3 = this.subscribe$.subscribe((value) => {
      console.log('subscribe value is ', value)
    })

    const streams$ = new Observable(obs => {
      setTimeout(() => {
        obs.next(1)
      }, 1000)

      setTimeout(() => {
        obs.error('somising went wrong')
      }, 1500)


      setTimeout(() => {
        obs.complete()
      }, 1600)


      setTimeout(() => {
        obs.next(2)
      }, 3000)
    });


    this.sub2 = streams$
      .subscribe(
        value1 => console.log(value1, 'value1'),
        error => console.log(error, 'error'),
        () => console.log('stream is done')
      )
    //    опрацювати помилку через еррор. якшо готово то через компліт

    this.sub = this.intervalStream$
      .pipe(
        map((value) =>
          `maped value = ${value.toString()}`
        )
      )
      .subscribe(value => {
        console.log(value)
        value = String(this.num = this.num + 1)
        // console.log(value, 'num')
        this.num === 6 ? this.sub.unsubscribe() : null
      });
  }


  stop() {
    this.sub.unsubscribe()
    this.sub2.unsubscribe()
    this.sub3.unsubscribe()
  };

  nextSubscribe() {
    this.num++
    this.subscribe$.next(this.num)
  }

}
