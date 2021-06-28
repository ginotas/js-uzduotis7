"use strict";

// 1. susikurti klase Namas. 

class Namas {
    constructor(miestas, pastatymoData, adresas, laiptiniuSk, butuSk) {
        this.miestas = miestas;
        this.pastatymoData = pastatymoData;
        this.adresas = adresas;
        this.laiptiniuSk = laiptiniuSk;
        this.butuSk = butuSk;
    }
    static bendrasButuSk() {
        return this.laiptiniuSk * this.butuSk; //perdaryti~, kol kas nesamone!
    }
}

let namas1 = new Namas("Vilnius", 2000, "Moletu plentas 1", [1,2,3,4], [20,22,19,13]);

console.log(namas1);
console.log(Namas.bendrasButuSk());


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

let butas1 = new Butas("Vilnius", 2000, "Moletu plentas 1", [1,2,3,4], [20,22,19,13], 7, 4, 5);

console.log(butas1.butoInfo());

// Susikurti "Namas" objektų masyvą.
// Masyva sudaro 5 objektai sukurti pagal klasę. 
// Duomenis užpildyti savo nuožiūrą.
// 4. Masyvą išvesti į console.log


let namai = [];

//namai.push(new )

// to be  continued..















