class Ksiazka{
    constructor(tytul, autor, rok_wydania) {
     this.tytul = tytul;
     this.autor = autor;
     this.rok_wydania = rok_wydania;
    }
}
tytulKsiazki = function () {
    return this.tytul + "-" + this.autor + "(" + this.rok_wydania + ")"
}
const book= new Ksiazka("autor","tytul",2004)
console.log(book.tytulKsiazki)
   
class student{
    constructor(imie, nazwisko, album, ocena1, ocena2, ocena3){
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.album=album;
        this.ocena1=ocena1;
        this.ocena2=ocena2;
        this.ocena3=ocena3;
    }
    srednia= function(){
        return "srednia-"+ (ocena1+ocena2+ocena3)/3
    }
}   
const student_a=new student("imie","nazwisko", w696969, 3, 2, 4)
console.log(student_a.srednia())

class Auto{
    constructor(marka, model, rok_produkcji, kolor, predkość){
        this.marka=marka;
        this.model=model;
        this.rok_produkcji=rok_produkcji;
        this.kolor=kolor;
        this.predkość=predkość;
    }
   