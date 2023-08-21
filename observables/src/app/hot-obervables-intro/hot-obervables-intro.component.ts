import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-hot-obervables-intro',
  templateUrl: './hot-obervables-intro.component.html',
  styleUrls: ['./hot-obervables-intro.component.css']
})
export class HotObervablesIntroComponent implements OnInit {

  @ViewChild('myButton', { read: ElementRef })
  button!: ElementRef;

  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  constructor() { }

  ngOnInit() {
    let myBtnClickObservable: Observable<any> = fromEvent(
      this.button.nativeElement, 'click');
    myBtnClickObservable.subscribe( () => console.log('button clicked 1'));
    myBtnClickObservable.subscribe( () => console.log('button clicked 2'));

    class Producer {
      private myListeners = [];
      private n = 0;
      private id!: number;

      addListener(l: { (n: any): void; (n: any): void; (n: number): void; }) {
        this.myListeners.push();
        console.log(this.myListeners.length);
      }

      start() {
       /* this.id = setInterval(()=>{
          this.n++;
          console.log('From Producer: ' + this.n);
          for(let l of this.myListeners)
            l(this.n);
        }, 1000);*/
      }

      stop() {
        clearInterval(this.id);
      }

    }

    let producer:  Producer = new Producer();
    producer.start();
    setTimeout(
      ()=>{
        producer.addListener((n: any) => console.log('From listener 1', n));
        producer.addListener((n: any) => console.log('From listener 2', n));
      }, 4000);

    const myHotObservable = new Observable(
      (observer: Observer<number>)=> {
        producer.addListener( (n: number) => observer.next(n))
      }
    );
    myHotObservable.subscribe((n) => console.log('From Subscriber 1', n));
    myHotObservable.subscribe((n) => console.log('From Subscriber 2', n));

  }

}

