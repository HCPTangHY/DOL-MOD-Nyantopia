class Item {
    id;name;desc;choice;battleSkill;formula;
    constructor(args) {
        let i=0;
        for (let key of Object.keys(this)) {
            this[key] = args[i];
            if (key=='choice' || key=='battleSkill') {
                this[key] = this[key].split(" ");
            }
            i++;
        }
    }
    static read_item(data) {
        let items = {}
        for (let i=0;i<data.length;i++) {
            if (data[i]=='') {continue;}
            items[data[i][0]] = new Item(data[i]);
        }
        return items
    }

}

console.log(window.Item);
// console.log(Item.read_item(data))
Object.defineProperty(setup,"Item",{value:Item.read_item(window.Item)});
