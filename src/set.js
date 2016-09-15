class Set{
    constructor(){
        this.dataStore = [];
    }

    contains(element){
        if(this.dataStore.indexOf(element) > -1){
            return true;
        } else {
            return false;
        }
    }

    findpos(element){ // fix me
        var pos = 0;
        if(this.dataStore.length == 0 || this.dataStore[0] > element){
            return 0;
        } else {
            //pos++;
            while(this.dataStore[pos] < element){
                pos++;
            }
            return pos + 1;
        }
    }

    add(element) {
        if(!this.contains(element)){
            var pos = this.findpos();
            console.log("pos: " + pos);
            this.dataStore.splice(pos, 0, element);
            return true;
        } else {
            return false;
        }
    }

    remove(element) {
        var pos = this.dataStore.indexOf(element);
        if(pos > -1){
            this.dataStore.splice(pos, 1);
            return true;
        }
        return false;
    }

    size(){
        return this.dataStore.length;
    }

    union(set){
        var tempSet = new Set();
        for(var i = 0; i < this.dataStore.length; i++){
            tempSet.add(this.dataStore[i]);
        }

        for(var j = 0; j < set.dataStore.length; j++){
            if(!tempSet.contains(set.dataStore[j])){
                tempSet.add(set.dataStore[j]);
            }
        }
        return tempSet;
    }

    intersect(set) {
        var tempSet = new Set();
        for(var i = 0; i < set.dataStore.length; i++){
            if(this.contains(set.dataStore[i])){
                tempSet.add(set.dataStore[i]);
            }
        }
        return tempSet;
    }

    subset(set){
        for(var i = 0; i < set.dataStore.length; i++){
            if(!this.contains(set.dataStore[i])){
                return false;
            }
        }
        return true;
    }

    difference(set){
        var tempSet = new Set();
        for(var i = 0; i < set.dataStore.length; i++){
            if(!this.contains(set.dataStore[i])){
                tempSet.add(set.dataStore[i]);
            }
        }
        return tempSet;
    }

    show(){
        console.log(this.dataStore);
    }
}

var basicSet = new Set();

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

var unionedSet = basicSet.union(secondSet);
unionedSet.show();

var orgSet = basicSet.intersect(unionedSet);
orgSet.show();

console.log(basicSet.subset(orgSet));

var difSet = basicSet.difference(unionedSet);
difSet.show();
