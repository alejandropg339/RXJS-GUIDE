import { from, of } from "rxjs";

/*
    of = toma los argumentos y genera una secuencia,
    from = array, promise, iterable, observables
*/

const observer = {
    next: value => console.log('value: ', value),
    complete: () => console.log('complete')
}

// const source = from([1,2,3,4,5]);
// const source = of([1,2,3,4,5]);

const source = from(fetch('https://api.github.com/users/alejandropg339'));

/* ----- USING FETCH ----- */
source.subscribe(async (resp) => {
    console.log(resp.url)

    const dataResponse = await resp.json()
    console.log(dataResponse);
});
/* ----- END USING FETCH ----- */

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerator();

from(myIterable).subscribe( observer );
// source.subscribe( observer );