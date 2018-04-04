class Set{
    constructor(){
        this.dataStore = [];
    }

    contains(element){
        return this.dataStore.includes(element);
    }

    //The add function will enforce the set property of nonduplicity
    add(element) {
        if(!this.contains(element)){
            this.dataStore.push(element);
        }
        return this;
    }

    remove(element) {
        if(this.dataStore.includes(element)){
            this.dataStore = this.dataStore.filter( i => i !== element);
        }
    }

    size(){
        return this.dataStore.length;
    }

    union(set){
        let tempSet = new Set();

        for(let element of this.dataStore){
            tempSet.add(element);
        }

        for(let element of set.dataStore){
            tempSet.add(element);
        }
        return tempSet;
    }

    intersect(set) {
        let tempSet = new Set();
        for(let element of this.dataStore){
            if(set.contains(element)){
                tempSet.add(element);
            }
        }
        return tempSet;
    }

    subset(set){
        for(let element of set){
            if(!this.contains(element)){
                return false;
            }
        }
        return true;
    }

    difference(set){
        let tempSet = new Set();
        for(let element of this.dataStore){
            if(!set.contains(element)){
                tempSet.add(element);
            }
        }
        return tempSet;
    }

    show(){
        console.log(this.dataStore);
    }
}

let basicSet = new Set();

basicSet.add(1);
basicSet.add(2);
basicSet.add(3);


basicSet.show();

basicSet.remove(2);
basicSet.show();

console.log(basicSet.size());

secondSet = new Set();
secondSet.add(4);
secondSet.add(5);
secondSet.add(6);

let unionedSet = basicSet.union(secondSet);
unionedSet.show();

let orgSet = basicSet.intersect(unionedSet);
orgSet.show();

console.log(basicSet.subset(orgSet));

let difSet = basicSet.difference(unionedSet);
difSet.show();
