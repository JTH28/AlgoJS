class Node {
    constructor(key, data) {
        this.key = key;
        this.data = data;
    }
}

class HashTable {
    constructor() {
        this.table = new Array(137);
        this.buildChains();
    }

    buildChains(){
        for(let i = 0; i < this.table.length; i++){
            this.table[i] = [];
        }
    }

    testDistro() {
        let totEntries = 0;
        for(let i = 0; i < this.table.length; i++){
            console.log( i + ": " + "chain length: " + this.table[i].length);
            totEntries += this.table[i].length;
        }
        console.log(totEntries);
    }

    put(key, data) {
        let pos = this.hash(key);
        let index = 0;
        if(this.table[pos][index] == undefined){
            this.table[pos][index] = new Node(key,data);
        } else {
            while(this.table[pos][index] != undefined){
                index++;
            }
            this.table[pos][index] =  new Node(key,data);
        }
    }

    get(key){
        let index = 0;
        let pos = this.hash(key);
        for(let i = 0; i < this.table[pos].length; i++){
            if(this.table[pos][i].key == key){
                return this.table[pos][i].data;
            }
        }
        return undefined
    }

    hash(string){
        const H = 31;
        let total = 0;
        for(let i = 0; i < string.length; i++){
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if(total < 0){
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
}

let ht = new HashTable();

for(let i = 0 ; i < 10000; i++){
    ht.put(i.toString(), i.toString());
}

ht.testDistro();
