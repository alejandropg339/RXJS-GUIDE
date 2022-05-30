import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = arg => console.log(`Hola ${arg}`);

asyncScheduler.schedule( saludar, 2000 );
/*this method only support a parameter of saludar2 if you want more info should be an object */
asyncScheduler.schedule( saludar2, 2000, 'Alejandro' );

const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state)
    this.schedule( state + 1, 1000 );
}, 3000, 0)

// setTimeout(() => {subs.unsubscribe()}, 6000);

asyncScheduler.schedule(() => subs.unsubscribe, 6000)