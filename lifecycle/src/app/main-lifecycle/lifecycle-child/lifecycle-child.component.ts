import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges{

  @Input() name!: string;
  @Input() age!: number;
  @Input() food!: string;
  id!: number;

  events: LifeCycleEvent[] = [];
  nextEventId: number = 0;
  colors: string [] = ["accent", "warn", "primary"];


  constructor(){
    console.log(this.name + " -constructor ");
    this.newEvent("constructor");


  }

  ngOnInit(): void {
    console.log(this.name + " -ngOninit ");
    this.newEvent("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.name + " -ngOnChanges ");
    this.newEvent("ngOnChanges");
    /*
    for(let propName in changes){
      console.log(propName);
      console.log(changes[propName]);
    }*/

    /* pegar o nome que era antes
    if(changes['name']){
      console.log('old name: ' + changes['name'].previousValue);
    }*/

  }

  ngAfterContentInit(): void {
    console.log(this.name + " -ngAfterContentInit ");
    this.newEvent("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log(this.name + " -ngAfterViewInit ");
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log(this.name + " -ngOndestroy ");
    this.newEvent("ngOnDestroy");

  }

  newEvent(name: string){
    let i = this.nextEventId++;
    this.events.push({
      id: this.id,
      color: this.colors[this.id%this.colors.length],
      name: name
    });
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id==this.id);
      if(idx >= 0)
      this.events.splice(idx, 1);
    }, 3000 + this.events.length*2000);
  }

}
