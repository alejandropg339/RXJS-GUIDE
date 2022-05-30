import { of, Observer } from 'rxjs';

const observer: Observer<any> ={
    next: next => console.log( 'Next: ', next ),
    error: null,
    complete: () => console.log('Terminamos la secuencis')
}

console.log('start of observable');
// const obs$ = of(1,2,3,4,5,6);
const obs$ = of([1,2],{ a: 1, b:2 }, function(){}, true, Promise.resolve(true));

obs$.subscribe( observer );

console.log('end of observable')