import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('val', val),
    complete: () => console.log('complete')
};

const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5 );

//Interval method is async by default
const interval$ = interval(1000);
// you can send dates
const timer$ = timer(todayIn5);

console.log('start');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('end');
