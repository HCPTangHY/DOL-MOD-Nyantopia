var neargoPlayer = {
    leftHand:"",
    rightHand:"",
    backpack:"",
    inventory:[],

    move_to : function(target) {
        V.outside = 0
        V.location = target
    },
    travel : function(target) {
        V.outside = 1
        V.location = target
    },
    buy_item : function(args) {
        let itemID=args[0];let price=args[1];
        console.log(window.neargoPlayer)
        if (window.neargoPlayer.inventory.length >=4) {return "空间不足"};
        window.neargoPlayer.inventory.push(itemID);
        V.money -= price*100;
        return "你购买了"+itemID
    }
}

Object.defineProperty(window,"neargoPlayer",{value:neargoPlayer})