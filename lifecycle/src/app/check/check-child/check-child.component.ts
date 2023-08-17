import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit{

  constructor(){
    console.log("constructor")
  }

  ngOnInit(): void {
      console.log("ngOnInit")
  }

  ngOnChanges(): void {
    console.log("ngOnChanges")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
