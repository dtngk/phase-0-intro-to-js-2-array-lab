// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    var cat = [...cats, name];

    return cat;
}

function prependCat(name){
    var cat = [name,...cats];

    return cat;
}

function removeLastCat(){
    var cat = [... cats];
    cat.pop();

    return cat;
}

function removeFirstCat(){

    return cats.slice(1);

}