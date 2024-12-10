import { Component } from '@angular/core';
import { of , from,interval, concatMap, delay, merge, mergeMapTo, exhaustMap} from 'rxjs';
import { throwError } from 'rxjs';
import { switchMap, mergeMap, forkJoin } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  // SwitchMap Rxjs Operator

  ngOnInit(): void {

    // SwitchMap

    interval(1000).pipe(
      switchMap(val=> of(`Observable Switch to ${val}`))
    ).subscribe(console.log)

    // ConcatMap
    interval(1000).pipe(
      concatMap(val=> of(`Concatenated ${val}`).pipe(delay(500)))
    ).subscribe(console.log);

    // MergeMap
    interval(1000).pipe(
      mergeMap(val=> of(`Merge ${val}`).pipe(delay(500)))
    ).subscribe(console.log);

    // ExhaustMap
    interval(1000).pipe(
      exhaustMap(result=> of(`Exhaust map ${result}`).pipe(delay(500)))
    ).subscribe(console.log);

    // ForkJoin Rxjs Operator

  //   const obs1 = of('First Resut').pipe(delay(1000));
  //   const obs2 = of('Second Result').pipe(delay(2000));
  //   const obs3 = of('Third Result').pipe(delay(3000));
  //   const obs4 = of('Fourth Result').pipe(delay(4000));

  //   forkJoin([obs1,obs2,obs3,obs4]).subscribe({
  //     next: ([res1,res2,res3])=>{
  //       console.log(res1);
  //       console.log(res2);
  //       console.log(res3);
  //     },
  //     complete: () =>{
  //       console.log("All Observable Completed");
  //     }
  //   })
  // }


    const observ1 = of('First Observ').pipe(delay(10));
    const observ2 = of('Second Observ').pipe(delay(20));
    const observ3 = of('Third Observ').pipe(delay(30));

    forkJoin([observ1,observ2,observ3]).subscribe({
      next: ([output1,output2,output3])=>{
        console.log(output1);
        console.log(output2);
        console.log(output3);
      },
      complete: ()=>{
        console.log("All Observable Comple");
      }
    })


    // Map Rxjs Operator
    
    of(1,2,3,4).pipe(
      map(i=>i*10)
    ).subscribe(console.log);


    of(10,20,30).pipe(
      map(i=>i+10)
    ).subscribe(console.log);


    // map object example
    const users = of(
      {name:"John",age: 23},
      {name:"Wick",age: 29},
      {name:"Joyname",age: 33},
    ).pipe(
      map(user=>({name:user.name, age:user.age}))
    ).subscribe(console.log)

    
    // another example
    const persons = from([1,2,3,4,5]
      ).pipe(
        map(person=>person*2)
      ).subscribe(console.log);


    const personsdetails = [
      {name:'JohnWick',age:23},
      {name:'JamesWick', age: 25},
      {name:'DomesDave',age: 42},
    ]

    from(personsdetails).pipe(
      map(person=>{person.name, person.age})
    ).subscribe(console.log)


    // Rxjs Tap Operator


    const numbers = of(1,2,3,4,5);

    numbers.pipe(
      tap(value=> console.log("Before Transformation: ",value)),
      map(value=>value*2),
      tap(value=> console.log("After Transformation: ", value))
    ).subscribe(console.log);


    // Handling Error with Tap

    const Errorobservable = throwError("This is Error Coming");
    Errorobservable.pipe(
      tap({
        next: value=>console.log("Value Emitted",value),
        error: err=>console.log("Cought Error",err),
      }),
      catchError(err=>{
        console.log("Error Handling",err);
        return of("Error Handle")
      })
    ).subscribe(console.log)
    
  }


  

}