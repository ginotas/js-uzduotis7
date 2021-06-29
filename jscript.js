"use strict";

// 1. susikurti klase Namas. 

// apibrezti masyvai:

let laiptines = [1,2,3,4];
let laiptiniuSk = laiptines.length;
let butuSk = [];

// random funkcija:

function randomizer(min, max) {
    return Math.floor((Math.random() * (max-min + 1)) + min);
}


// butu skaicius laiptinese: 

for (let i = 0; i < laiptiniuSk; i++) {
    butuSk.push(randomizer(20,50));
}

// bendras butu skaicius name (kiek yra butu visose namo laiptinese kartu sudejus)

let bendrasButuSk = 0;
for (let i = 0; i < butuSk.length; i++) {
    bendrasButuSk += butuSk[i];
}

console.log(laiptiniuSk);
console.log(butuSk);
console.log(bendrasButuSk);



class Namas {
    constructor(miestas, pastatymoData, adresas, laiptiniuSk, butuSk) {
        this.miestas = miestas;
        this.pastatymoData = pastatymoData;
        this.adresas = adresas;
        this.laiptiniuSk = laiptiniuSk;
        this.butuSk = butuSk;
    }
    static bendrasButuSk(a,b) {
        let suma = 0;
        for (let i = 0; i < butuSk.length; i++) {
            suma += butuSk[i];
        } return suma;
    }
    
}





// 2. susikurti klase Butas.

class Butas extends Namas {
    constructor(miestas, pastatymoData, adresas, laiptiniuSk, butuSk, numeris, kambariuSk, gyventojuSk) {
        super(miestas, pastatymoData, adresas, laiptiniuSk, butuSk);
        this.numeris = numeris;
        this.kambariuSk = kambariuSk;
        this.gyventojuSk = gyventojuSk;
    }
    butoInfo() {
        return `Buto numeris yra ${this.numeris}, buto kambariu skaicius yra ${this.kambariuSk}, o gyventoju skaicius bute yra ${this.gyventojuSk}`;

    }
}

let butas1 = new Butas("Vilnius", 2000, "Moletu plentas 1", laiptines, butuSk, 7, 4, 5);

console.log(butas1);
console.log(butas1.butoInfo());

// Susikurti "Namas" objektų masyvą.
// Masyva sudaro 5 objektai sukurti pagal klasę. 
// Duomenis užpildyti savo nuožiūrą.
// 4. Masyvą išvesti į console.log


let namai = [];

namai.push(new Namas("Vilnius", 2000, "Moletu g.1", laiptines, butuSk));
namai.push(new Namas("Vilnius", 2000, "Moletu g.1", laiptines, butuSk));
namai.push(new Namas("Vilnius", 2000, "Moletu g.1", laiptines, butuSk));
namai.push(new Namas("Vilnius", 2000, "Moletu g.1", laiptines, butuSk));
namai.push(new Namas("Vilnius", 2000, "Moletu g.1", laiptines, butuSk));

console.log(namai);














