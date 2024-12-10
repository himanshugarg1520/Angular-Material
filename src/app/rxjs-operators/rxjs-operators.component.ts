import { Component } from '@angular/core';
import { concatMap, debounceTime, delay, exhaustMap, filter, forkJoin, fromEvent, map, merge, mergeMap, switchMap, tap } from 'rxjs';
import { of } from 'rxjs';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit{


ngOnInit(): void {

  // Map Rxjs Operator
console.log("Map")
const numbers = of(1, 2, 3, 4, 5);
const doubled = numbers.pipe(map(value => value * 3));

doubled.subscribe(result=>{
  console.log(result);
});


// Filter Rxjs Operator
console.log("Filter")
const filterrxjs = of(1,2,3,4,5,6,7,8,9,10);

const filtervalue = filterrxjs.pipe(filter(value => value % 3 === 0));

filtervalue.subscribe(result=>{
  console.log(result);
})


// Concat Map
console.log("Concat Map")
const concatmap = of(1,2,3,4,5,6);
const delayednum = concatmap.pipe(concatMap(value=> of(value).pipe(delay(1000))));
delayednum.subscribe(response=>{
  console.log(response);
})


console.log("Merge Map")
const mergemap = of(10,20,30,40,50);
const mergenum = mergemap.pipe(mergeMap(result=> of(result).pipe(delay(1000))));

mergenum.subscribe(output=>{
  console.log(output);
})

console.log("Switch Map");
const switchmap = of(100,200,300,400);
const switchnumber = switchmap.pipe(switchMap(result=> of(result).pipe(delay(1000))));
switchnumber.subscribe(result=>{
  console.log(result);
})

console.log("Tap Operator")
const tapoperator = of(101,102,103,104,105,106,110);

const tapnumber = tapoperator.pipe(tap(value=>console.log(`Before Tap ${value}`)),
  map(value=>value*2)
).subscribe(value=>{
  console.log(`After Tap ${value}`)
})



console.log("Debonce");
const input = document.querySelector('input');
fromEvent(input,'input').pipe(
  debounceTime(500),
  map((event: Event)=> (event.target as HTMLInputElement).value)
).subscribe(value=>{
  console.log(value);
})


console.log("FORK JOIN");

const apicall1 = of('Data From API1').pipe(delay(2000));
const apicall2 = of('Data From API2').pipe(delay(3000));
const apicall3 = of('Data From API3').pipe(delay(4000));

forkJoin([apicall1,apicall2,apicall3]).subscribe(
  ([data1,data2,data3]) =>{
    console.log(data1);
    console.log(data2);
    console.log(data3);
  }
)


// Exhaust Map

console.log("Exhaust Map")

const apicall = () => of('API Response').pipe(delay(2000));
const button = document.getElementById('myButton');
const clicks$ = fromEvent(button,'click');

clicks$.pipe(
  exhaustMap( () => apicall() )
).subscribe(result=>console.log(result));
  }
}

const exhaustMapapicall = () => of('Exhaust ApiCall').pipe(delay(2500));
const button1 = document.getElementById('myButton');

const exhaustclicks$ = fromEvent(button1,'click');
exhaustclicks$.pipe(
  exhaustMap( () => exhaustMapapicall() )
).subscribe(output=> console.log(output)
);