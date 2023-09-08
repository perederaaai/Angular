import { Component } from '@angular/core';
import { LocalServiceService } from '../services/local-service.service';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-service-wrap',
  templateUrl: './service-wrap.component.html',
  styleUrls: ['./service-wrap.component.scss'],
  providers: [LocalServiceService]

})
export class ServiceWrapComponent {
  constructor(public LocalService: LocalServiceService,
              public GlobalService: GlobalServiceService) {
  }
}
