import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecyclehook';
  // msg: any = "";

  constructor(private _messageservice: MessageService) { }

  // ngOnInit() {
  //   // this.msg = this._messageservice.display();
  // }
  // isshow: Boolean = true;
  // showhide() {
  //   this.isshow = !this.isshow;
  // }
  // ngOnDestroy(){
  //   console.log('app component ngOnDestroy called');
  // }

}
