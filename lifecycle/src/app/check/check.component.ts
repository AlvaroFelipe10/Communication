import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  @Input() test!: string;

  name: string ="";
  age: number = 0;

  constructor(){
    console.log("            CheckChild: constructor")
  }

  ngOnInit(): void {
      console.log("            CheckChild: ngOnInit")
  }

  ngOnChanges(): void {
    console.log("            CheckChild: ngOnChanges")
  }

  ngDoCheck(): void {
    console.log("            CheckChild: ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("            CheckChild: ngAfterContentInit")
  }

  ngAfterViewInit(): void {
    console.log("            CheckChild: ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("            CheckChild: ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("            CheckChild: ngOnDestroy")
  }
}
