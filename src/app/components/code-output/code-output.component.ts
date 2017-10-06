import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-output',
  templateUrl: './code-output.component.html',
  styleUrls: ['./code-output.component.css']
})
export class CodeOutputComponent implements OnInit {

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
