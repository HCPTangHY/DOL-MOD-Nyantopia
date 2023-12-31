var neargoPlayer = {
    leftHand:"",
    rightHand:"",
    backpack:"",
    inventory:"",

    move_to : function(target) {
        V.outside = 0
        V.location = target
    },
    travel : function(target) {
        V.outside = 1
        V.location = target
    }
}

Object.defineProperty(window,"neargoPlayer",{value:neargoPlayer})