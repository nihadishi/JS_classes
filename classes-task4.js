class Dic{
    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = { word, description };
        }
    }
    remove(word) {
        delete this.words[word];
    }
    get(word) {
        return this.words[word];
    }
    showAllWords() {
        for (let word in this.words) {
            console.log(`${this.words[word].word} - ${this.words[word].description}`);
        }
    }
}

const dict = new Dic('Explanatory Dict');
dict.add('JavaScript ', 'popular programming language');
dict.add('Web developer', 'Person creates new services and sites or maintains...');
dict.remove('JS');
dict.showAllWords();


