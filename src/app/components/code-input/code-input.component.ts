import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.css']
})
export class CodeInputComponent implements OnInit {

  @Input() code = 'public class Example {\n\n\tpublic final String value;\n\n}';
  @Output() codeChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  setCode(code: string) {
    this.code = code;
    this.codeChange.emit(code);
  }

}
