import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> ={
    next : value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}

const interval$ = new Observable( subs => {
    const intervalId = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(intervalId);
        console.log('Destroyed interval');
     }
});

// const subs1 = interval$.subscribe( rnd => console.log('subs1', rnd));
// const subs2 = interval$.subscribe( rnd => console.log('subs2', rnd));

/* --- CHARACTRISTICS ---
    1. Multiple casting.
    2. Is an observer.
    3. have (next, error, complete)
*/
const subject$ = new Subject();

const subscription = interval$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)


/* ---- Important to know ----
    Cuando la data es porducida pro el observable en si mismo es considerado como un 'Cold observable'
    pero cuando la data es producida FUERA del observable es llamado un 'Hot observable'.

    -Fernando Herrera.
*/
