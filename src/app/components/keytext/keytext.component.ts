import { Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-keytext',
  templateUrl: './keytext.component.html',
  styleUrls: ['./keytext.component.css']
})
export class KeytextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text = 'Välkommen till träning och mat här kan du tränna äta och allt annat!';
 
  enterAnimation: TextAnimation = {
    animation: bounceIn,
    delay: 100,
    type: 'letter'
  };

}
