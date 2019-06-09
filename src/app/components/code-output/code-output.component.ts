import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-output',
  templateUrl: './code-output.component.html',
  styleUrls: ['./code-output.component.css']
})
export class CodeOutputComponent {

  @Input() code;

}
