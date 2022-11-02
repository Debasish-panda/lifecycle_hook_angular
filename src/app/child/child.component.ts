import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() pdata:any;
  @Input() name:string;
  constructor() {
    // console.log('child constructor');
  }

  // ngOnChanges(changes: any){ //ngOnChanges return a value (which give 3 property) to capture we used changes variable
  //   console.log('Child OnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
  }
  // ngDoCheck(){
  //   console.log('ngDocheck called in parent');
  // }

  //   name:string="Debasish";
  // change(){
  //   this.name='sushree';
  // }

   message: string = "";
   count: number = 0;
   increasebyone() {
     this.count = this.count + 1;
     this.message = "counter : " + this.count
 }
   decreasebyon() {
     this.count = this.count - 1;
     this.message = "counter : " + this.count
   }

}
