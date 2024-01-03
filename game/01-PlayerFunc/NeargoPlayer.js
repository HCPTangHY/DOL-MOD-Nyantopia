// var neargoPlayer = {
//     leftHand:window.neargoPlayer.leftHand || "",
//     rightHand:window.neargoPlayer.rightHand || "",
//     backpack:window.neargoPlayer.backpack || "",
//     inventory:window.neargoPlayer.inventory || [],

//     move_to : function(target) {
//         V.outside = 0
//         V.location = target
//     },
//     travel : function(target) {
//         V.outside = 1
//         V.location = target
//     },
//     buy_item : function(args) {
//         let itemID=args[0];let price=args[1];
//         console.log(this)
//         if (window.neargoPlayer.inventory.length >=4) {return "空间不足"};
//         window.neargoPlayer.inventory.push(itemID);
//         V.money -= price*100;
//         return "你购买了"+itemID
//     }
// }
class NeargoPlayer {
    constructor(lh,rh,bp,inv) {
        this.leftHand = lh;
        this.rightHand = rh;
        this.backpack = bp||"";
        this.inventory = inv||{};
    }
    init(lh,rh,bp,inv) {
        this.leftHand = lh;
        this.rightHand = rh;
        this.backpack = bp;
        this.inventory = inv;
    }
    update() {
        Object.defineProperty(V,"neargoPlayer",{value:this});
    }
    count_slots() {
        let slots = 0
        for (let key of Object.keys(V.worn)) {
            let value = V.worn[key]
            let slot = window.clothesSlots[value.name] || 0
            if (slot!=0) {
                if (!(key in this.inventory)) {
                    this.inventory[key] = {name:value.name,slotNum:slot,inv:[]}
                    if ("cn_name_cap" in value) {
                        this.inventory[key].name = value.cn_name_cap
                    }
                    this.update()
                }
            }
            slots += slot
        }
        return slots
    }
    move_to(target) {
        V.outside = 0;
        V.location = target;
    }
    travel(target) {
        V.outside = 1;
        V.location = target;
    }
    buy_item(args) {
        args = String(args).split(";")
        let itemID=args[0];let price=args[1];
        if (V.money < price*100) {return "你没钱了！"}
        for (let key of Object.keys(this.inventory)) {
            if (this.inventory[key].inv.length+1 <= this.inventory[key].slotNum){
                this.inventory[key].inv.push(itemID)
                V.money -= price*100;
                this.update();
                return "你购买了"+itemID;
            }
        }
        return "空间不足"
    }
}
if (window.neargoPlayer == undefined) {
    let np = new NeargoPlayer("","","",{});
    Object.defineProperty(window,"neargoPlayer",{value:np});
}