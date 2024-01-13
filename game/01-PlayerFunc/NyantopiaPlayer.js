class NyantopiaPlayer {
    constructor() {
        this.leftHand = "";
        this.rightHand = "";
        this.location = "";
        this.inventory = [];
    }
    init() {
        this.leftHand = V.nyantopiaPlayer.leftHand;
        this.rightHand = V.nyantopiaPlayer.rightHand;
        this.location = V.nyantopiaPlayer.location;
        this.inventory = V.nyantopiaPlayer.inventory;
    }
    update() {
        Object.defineProperty(V,"nyantopiaPlayer",{value:this});
    }
    count_slots() {
        let slots = 0;
        for (let key of Object.keys(V.worn)) {
            let value = V.worn[key];
            let slot = setup.clothesSlots[value.name] || 0;
            slots += slot;
        }
        return slots;
    }
    move_to(target) {
        V.outside = 0;
        V.location = target;
    }
    travel(args) {
        args = String(args).split(";")
        let target=args[0];let time=args[1];
        if (!time) {time=0;}
        Time.pass(time * 60);
        V.outside = 1;
        V.location = target;
    }
    buy_item(args) {
        args = String(args).split(";")
        let itemID=args[0];let price=args[1];
        if (V.money < price*100) {return "你没钱了！"}
        if (this.leftHand == '') {
            this.leftHand = itemID;
            V.money -= price*100;
            this.update();
            return "你购买了"+setup.Items[itemID].name;
        }
        if (this.rightHand == '') {
            this.rightHand = itemID;
            V.money -= price*100;
            this.update();
            return "你购买了"+setup.Items[itemID].name;
        }
        if (this.inventory.length+1 <= this.count_slots()){
            this.inventory.push(itemID);
            V.money -= price*100;
            this.update();
            return "你购买了"+setup.Items[itemID].name;
        }
        return "空间不足";
    }
}
if (window.nyantopiaPlayer == undefined) {
    let np = new NyantopiaPlayer("","","",{});
    Object.defineProperty(window,"nyantopiaPlayer",{value:np});
}