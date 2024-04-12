function pelnoletnosc(wiek){
    wiek=prompt("podaj swoj wiek")
    if(wiek<18){
        console.log("Nie jestes pelnoletni")
    }
    else{
        console.log("jestes pelnoletni")
    }
}

function celsiustofahrenheit(temperatura){
    temperatura=prompt("podaj temperature w stopniach celciusza");{
        console.log(temperatura*9/5+32)
        
    }
}

function tablice(){
    let tab=[1,2,3,4,5];
    let suma=0;
    console.log("Suma: ")
    for(let i=0; i suma+=tab[i]
    }
    console.log(suma)
    
    console.log("Liczby parzyste: ")
    for(let i=0; i if(tab[i]%2==0){
    console.log(tab[i])
    }
    
    
    console.log("Pomnozone przez 3: ")
    for(let i=0; i <tab.length; i++){
        console.log(tab[i]*3);
    }
    
    
    console.log("Indeks numeru albumu: ")
    tab.push(69960);
    console.log(tab.indexOf(69960))
    tab.pop(69960)
    
    console.log("Srednia: ")
    srednia=suma/tab.length;
    console.log(srednia)
    
    console.log("Najwieksza wartosc: ")
    let max=tab[0]
    for(let i=0; i <tab.length; i++){
        if(max max=tab[i])
    }
    
    console.log(max)
    
  
    
    function fibonacci(){
    let i;
    let fib = [0, 1];
    for (i = 2; i < 100; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib)
    }
