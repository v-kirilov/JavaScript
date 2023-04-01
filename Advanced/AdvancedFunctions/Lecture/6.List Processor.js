function solve(input) {
    let result = [];
    
    for (const cmd of input) {
        let [command,str] = cmd.split(' ');

        if (command=='add') {
            add(str);
        }else if (command=='remove') {
            remove(str);
        }else {
            print();
        }
    }
    function add(toAdd) {
        return result.push(toAdd);
    }
    function remove(toRemove) {
        let index = result.indexOf(toRemove);
        if (index!=-1) {
            return result.splice(index,1);
        }
    }
    function print() {
        console.log(result.join(','));
    }

}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);