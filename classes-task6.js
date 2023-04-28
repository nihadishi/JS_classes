class Dictionary{
    #name;
    #words;
    constructor(name){
        this.#name=name;
        this.#words={};
    }
    addNewWord(word, description){
        this.#words[word]={word,description};
    }
    remove(word){
        delete this.#words[word];
    }
    get mainName(){
        return this.#name;
    }
    set setMainName(name){
        this.#name = name;
    }
    get allWords(){
        return this.#words;
    }
    add(word, description){
        if (!this.#words[word]){
            this.#words[word]={ word,description,isDifficult: true};
        }
    }
    showAllWords(){
        for (let word in this.#words){
            console.log(`${this.#words[word].word} - ${this.#words[word].description}`);
        }
    }
}
class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }
    addNewWord(word, description){
        this.add(word, description);
    }
}
const hardWordsDictionary = new HardWordsDictionary('Hard words');
hardWordsDictionary.add('amateur', 'One who practices science or art without special training, having only a superficial knowledge.');
hardWordsDictionary.add('neologism', 'A new word or expression, as well as the new meaning of the old word.');
hardWordsDictionary.add('quantum', 'The indivisible part of some quantity in physics.');
hardWordsDictionary.remove('neologism');
hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary.mainName); 
hardWordsDictionary.setMainName = 'New Dictionary';
console.log(hardWordsDictionary.mainName); 
console.log(hardWordsDictionary.allWords); 