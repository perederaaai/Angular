import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//суть - робиш все в окремому сервісі, в ап.модуль провайдер додаєш назву классу і в ХТМЛ апп компонента
//   // юзаєш данні одразу звідси
export class GlobalServiceService {

  counter: number = 1;

  decr() {
    this.counter++
  };

  ecr() {
    this.counter--
  };
}

//import { Component, Injectable } from '@angular/core';
//
// @Injectable()
//
//
// // @Injectable({
// //   providedIn: 'root'
// // })    дозволяє не підключати даний сервіс до аппмодуль а реєструє його самостійно
//
// @Component({
//   selector: 'app-servises',
//   templateUrl: './servises.component.html',
//   styleUrls: ['./servises.component.scss']
// })
// export class ServisesComponent {
//   //суть - робиш все в окремому сервісі, в ап.модуль провайдер додаєш назву классу і в ХТМЛ апп компонента
//   // юзаєш данні одразу звідси
//   //декоратор Injectable дозволяє підключати до даного сервісу інші сущності так само як цей до головного компонента
//
//   counter: number = 1;
//
//   decr(){
//     this.counter++
//   };
//
//   ecr(){
//     this.counter--
//   };
//
// }
