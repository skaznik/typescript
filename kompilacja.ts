let x: string = 'Jakiś tekst';
let y: number = 5;
let z: boolean = true;

//typowanie do dwóch

let a: string | number = 5

//typowanie tablicy
let b: number[] = [1,2,3];

//typowanie tablicy do dwóch rodzajów (numer i string)
let c: (number | string)[] = [1,2,'abc'];

//typowanie funkcji
function f(b: string, c: number, d: boolean) {

}
f('fsdf', 4, true);


//typowanie zwracanego typu z funckji

function f1(e: number): number {
    return e;
}

let ff: number = f1(1);
