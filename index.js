// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(){
    return cats.push('Ralph')
    }

function destructivelyPrependCat(name){
    return cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name) {
    const catsNew = [...cats, name]; 
    return catsNew;
}
appendCat('Broom');

function prependCat(name) {
    const  catsNew= [name, ...cats]; 
    return catsNew;
}
prependCat('Arnold');

function removeLastCat(name){
    const catsNew = cats.slice()
    return catsNew.slice(0, cats.length -1);
}

function removeFirstCat(name){
    const catsNew = cats.slice(1)
    return catsNew;
}