import { Component, OnInit } from '@angular/core';
import { FluidBuilderConverter } from 'app/components/builder/fluid-builder/converter/fb-converter';

@Component({
  selector: 'app-fluid-builder',
  templateUrl: './fluid-builder.component.html',
  styleUrls: ['./fluid-builder.component.css']
})
export class FluidBuilderComponent implements OnInit {

  public isCollapsed = false;
  result: string;

  constructor() { }

  ngOnInit() {
  }

  updateCode(code: string) {
    this.result = new FluidBuilderConverter().convert(code);
  }

}
