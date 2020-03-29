import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() fade:string;
  
  fade2:string = "slideInLeft animated";

  constructor() { }

  ngOnInit(): void {
  }

  public test(){
    console.log(this.fade);
  }

}
