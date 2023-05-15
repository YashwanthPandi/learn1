import { Component } from '@angular/core';
import { SendServiceService } from './send-service.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn1';
  send = new SendServiceService;
  constructor(){}
  ngOnInit():void{ 
    
  }
}
