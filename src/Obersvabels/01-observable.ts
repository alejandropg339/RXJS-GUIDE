import { Observable, Observer } from 'rxjs';

const observer: Observer<any> ={
    next : value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}

const obs$ = new Observable<string>(subs => {
    subs.next('hola');
    subs.next('Mundo');

    //force an error
    // const a = undefined;
    // a.nombre = 'Alejandro',

    subs.complete();

    subs.next('Mundo');
});

//FIXME: DEPRECATED PLEASE USE AN OBSERVER
// obs$.subscribe(
//     valor => console.log('Next:', valor),
//     error => console.warn('Error:', error),
// )

obs$.subscribe(observer);