import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluid-builder',
  templateUrl: './fluid-builder.component.html',
  styleUrls: ['./fluid-builder.component.css']
})
export class FluidBuilderComponent implements OnInit {

  public isCollapsed = false;

  code = "public class HelloWorld {\n\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello, World\");\n\t}\n\n}";

  constructor() { }

  ngOnInit() {
  }

}
