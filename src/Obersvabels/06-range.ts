import { asyncScheduler, observeOn, of, range } from "rxjs";

// const src = of(1,2,3,4,5)
const src = range(1,100).pipe(observeOn(asyncScheduler)) // Range do referent to total emisions
console.log('start')
src.subscribe(console.log)
console.log('end')