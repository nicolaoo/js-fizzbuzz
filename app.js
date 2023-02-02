console.log('ciao tutti')

// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi (quindi multipli di 15) “FizzBuzz”.

let cicloElement = document.querySelector('ciclo')
console.log(cicloElement)




for ( let i = 1; i <= 100; i++ ){

    let restoTre = i % 3
    // console.log('tre', i)

    let restoCinque = i % 5
    // console.log(i, restoCinque)

    let restoQuindici = i % 15

    if (restoQuindici === 0 ) {
        console.log(i, 'Fizz' + 'Buzz')
    } else if (restoCinque === 0) {
        console.log(i, 'Buzz')
    } else if (restoTre === 0) {
        console.log(i, 'Fizz')
    }
    
    cicloElement.innerHTML = i
}

