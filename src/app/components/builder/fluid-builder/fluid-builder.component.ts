import { Component, OnInit } from '@angular/core';
import { FluidBuilderConverter } from 'app/components/builder/fluid-builder/converter/fb-converter';

import 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-css';
declare var Prism: any;

@Component({
  selector: 'app-fluid-builder',
  templateUrl: './fluid-builder.component.html',
  styleUrls: ['./fluid-builder.component.css']
})
export class FluidBuilderComponent implements OnInit {

  public isCollapsed = false;
  result: string;

  constructor() { }

  ngOnInit() { }

  updateCode(code: string) {
    this.result = Prism.highlight(new FluidBuilderConverter().convert(code), Prism.languages.java, 'java');
  }

}
