import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  animations:[
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('2000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('2000ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class TopnavComponent implements OnInit {

  fader:string = "slideInLeft animated";
  line = "line";
  threelines:string="threelines "
  

  constructor() { }

//Booleans for menu
  public menuBool:boolean=false;
  public lineSpinBool:boolean = false;

  ngOnInit(): void {
  }

  public openCloseMenu(){

    this.lineSpinBool = !this.menuBool;
    if(!this.menuBool){
      this.fader = "slideInLeft animated";
      this.menuBool = !(this.menuBool);
      console.log(this.fader);
      
    }else{
      this.fader = "slideOutLeft animated";    
      setTimeout(() => {
        this.menuBool = !(this.menuBool)
      }, 1000);
      
      
    }
    
    
    
  }

}
