import { fromEvent, Observer } from 'rxjs';

/* 
    Eventos del dom
*/

const src1 = fromEvent(document, 'click');
const src2 = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val),
}

src1.subscribe(observer)
src2.subscribe( eventInfo => {console.log(eventInfo.key)})