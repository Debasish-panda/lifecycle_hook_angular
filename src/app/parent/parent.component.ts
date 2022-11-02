import { ChangeDetectorRef, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) {
    // console.log('parent constructor');
  }

  //@ContentChild(ChildComponent) childcomponent: ChildComponent; //to use ngAfterCOntentInit
  //@ContentChild(ChildComponent, {static:true}) childcomponent: ChildComponent; //to use insted of ngAfterCOntentInit with other hooks

  //@ViewChild(ChildComponent) childcomponent: ChildComponent;

  // ngOnChanges(){
  //   console.log('parent ngOnChanges');
  // }

  ngOnInit(): void {
    //this.childcomponent.name="Panda"; //this can be possible but not right way
  }
  // ngDoCheck(){
  //   console.log('ngDocheck called in parent');
  // }
  // ngOnDestroy(){
  //   console.log('parent component ngOnDestroy called');
  // }

  // ngAfterContentInit() { //during content projection work
  //   //console.log('parent ngaftercontentinit'); //associated with child but main use in parent, no need to use in child

  // this.childcomponent.name="Panda"; //this will update in child name because top to bottom work code and this hook execute post ngOnInit()
  // }
  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked called from parent'); //calls multiple times post ngaftercontentinit
  // }

  //ngAfterContentInit used during content projection, but ngAfterViewInit used for simple parent child relation so both are completely different.

  // ngAfterViewInit(){
  //   console.log('ngAfterviewInit called from parent'); //not use in child
  //   this.childcomponent.name='debata'; //if we update or change value will get error
  //   this.cd.detectChanges();
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked called from parent');
  // }


  //Viewchild, viewchildren, contentchild, contentchildren

  //@ViewChild(ChildComponent) childcomponent: ChildComponent;
  // @ViewChild('name') elName: ElementRef;
  // @ViewChild('age') elAge: ElementRef;
  @ViewChildren(ChildComponent) childcomponent: QueryList<ChildComponent>;



  increase() {
    //  this.childcomponent.increasebyone(); // for child
    //this.childcomponent.forEach(el => el.increasebyone()); //as we are using children so in html multiple root tag
    // console.log(this.childcomponent.length); //to check length of app-child ans is 3
    //this.childcomponent.first.increasebyone(); //if we want to use with first tag only
    //this.childcomponent.find(el=> el.name==='panda').increasebyone();
    this.childcomponent.filter(el => el.name === 'panda').forEach(el => el.increasebyone());
  }
  decrease() {
    //  this.childcomponent.decreasebyon();
    //this.childcomponent.forEach(el=> el.decreasebyon());
    //this.childcomponent.first.decreasebyon();
    //this.childcomponent.find(el=> el.name==='panda').decreasebyon(); //if there is 2 name same then find always work for first searched element, but filter will work for all and it will return array
    this.childcomponent.filter(el => el.name === 'panda').forEach(el => el.decreasebyon());


  }

  // ngAfterViewInit() { //getting error nativeElement type error
  //   this.elName.nativeElement.style.backgroundColor = 'black';
  //   this.elAge.nativeElement.style.backgroundColor = 'cyan';

  //   this.elName.nativeElement.style.color = 'white';
  //   this.elAge.nativeElement.style.color = 'red';
  // }




}
