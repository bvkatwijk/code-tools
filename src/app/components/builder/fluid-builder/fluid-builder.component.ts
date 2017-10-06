import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluid-builder',
  templateUrl: './fluid-builder.component.html',
  styleUrls: ['./fluid-builder.component.css']
})
export class FluidBuilderComponent implements OnInit {

  code = `
  public class HelloWorld {
    
    public static void main(String[] args) {
      System.out.println("Hello, World");
    }
    
  }`;

  constructor() { }

  ngOnInit() {
  }

}
