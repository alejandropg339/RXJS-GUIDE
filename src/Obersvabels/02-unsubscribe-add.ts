import { Observable, Observer } from 'rxjs';

const observer: Observer<any> ={
    next : value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}

const interval$ = new Observable<number>( subscriber => {
    let i = 0;
    const interval = setInterval(() => {
        i++;
        subscriber.next(i)
        console.log(i);
    }, 1000);

    setInterval(() => {
        subscriber.complete()
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('interval destroyed');
    } 
});


const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

// concat unsubscriptions
subs1.add(subs2)
subs1.add(subs3)

setTimeout(() => {
    subs1.unsubscribe()
    console.log('completado timeout')
}, 3000)