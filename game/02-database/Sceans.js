class Scean {
    id;name;desc;choice;
    constructor(args) {
        let i=0;
        for (let key of Object.keys(this)) {
            this[key] = args[i];
            if (key=='choice') {
                this.choice = this.choice.split(" ");
            }
            i++;
        }
    }
    static read_scean(data) {
        data = String(data).split("\n")
        for (let i=0;i<data.length;i++) {
            data[i] = data[i].split(",")
        }
        let sceans = {}
        for (let i=0;i<data.length;i++) {
            sceans[data[i][0]] = new Scean(data[i])
        }
        return sceans
    }
    update() {
        if (V.Sceans == undefined) {
            Object.defineProperty(V,"Sceans",{value:{}});
        }
        V.Sceans[this.id] = this;
    }
}
var data = "PublicSquare,中央广场,中央广场四周都是餐厅和店铺，道路两旁摆满了桌子。这里算是城市的核心吧，每年5月举办猫之庆典时，中央广场就被装点得格外漂亮，游客人数也增加不少。,靠近「西伯利亚」烘焙坊|move_to:SiberiaBakery 靠近蛋糕店|move_to:CakeShop 靠近咖啡屋|move_to:NyantopiaCafe 靠近可丽饼店|move_to:CrepeShop 前往曼奇肯大道|travel:ManticanStreet;5 前往海滩|travel:Beach;5 前往索马里大道|travel:SorumariStreet;5 前往哈瓦那大道|travel:HabanaStreet;5\nPublicSquareEast,东广场,中央广场的东侧，这里有很多的空公寓，选择住在这里一定非常热闹,走进🪄喵夢家居店|move_to:MamonFurnitureStore 走进博物馆|move_to NationalMuseum 走进售楼处|move_to:PSSalesOffices 走进「西伯利亚」烘焙坊|move_to:SiberiaBakery 离开|move_to:PublicSquare\nPublicSquareWest,西广场,中央广场的西侧，有着很多的店铺，猫猫们懒洋洋的趴在店铺门口,走进蛋糕店|move_to:CakeShop 走进剧院|move_to:Theater 走进咖啡屋|move_to:Cafe 走进可丽饼店|move_to:CrepeShop 离开|move_to:PublicSquare\nSorumariStreet,索马里大道,从火车站到鱼市场附近，是交通要道。报社、市政府等建筑物都在火车站附近，很是热闹,前往报社|move_to:Newspaper 前往市政府|move_to:CityHall 前往火车站|move_to:TrainStation 旅游大巴|move_to:TouristBus 前往哈瓦那大道|travel:HabanaStreet 前往中央广场|travel:PublicSquare 前往城堡区|travel:NyanbelcForest\nManticanStreet,曼奇肯大道,曼奇肯大道是主干道，左右两边都是经中央大桥出入城市的车辆。,前往中央广场|travel:PublicSquare 前往利普尔港口|travel:LeeplePort 前往城堡区|travel:NyanbelcFores 前往杰克尼森林|travel:ZeconeForest 前往日晷丘陵|travel:HillSundial\nHabanaStreet,哈瓦那大道,在哈瓦那大道举行的猫咪马戏团街头表演很受欢迎！自由猫们穿梭在队伍里更是一绝,前往中央广场|travel:PublicSquare 前往海滩|travel:Beach 前往索马里大道|travel:SorumariStreet\nLeeplePort,利普尔港,靠近利普尔港，还得气息就越浓厚，渔船一艘艘出现在眼前，充满港口风情,沿海滨公路前往日晷丘陵|travel:HillSundial 沿海滨公路前往海滩|travel:Beach 前往曼奇肯大道|travel:ManticanStreet\nBeach,海滩,从海滩上空可以俯瞰整个中央广场，还能看到远处的城堡，风景一绝,沿海滨公路前往利普尔港|travel:LeeplePort 前往哈瓦那大道|travel:HabanaStreet 前往中央广场|travel:PublicSquare\nHillSundial,日晷丘陵,和平公园坐落于此，通往日晷丘陵的阶梯两侧有很多精品店，很是热闹,沿海滨公路前往利普尔港|travel:LeeplePort 前往曼奇肯大道|travel:ManticanStreet\nZeconeForest,杰克尼森林,位于诺贝尔克城堡南方的一大片森林，已经被指定为了国家公园,前往曼奇肯大道|travel:ManticanStreet 前往城堡区|travel:NyanbelcForest\nNyanbelcForest,诺贝尔克森林,由诺贝尔伯爵于14世纪兴建的城堡，至今仍保留着风貌，因此这座历史古城成了最著名的旅游经典,前往索马里大道|travel:SorumariStreet 前往曼奇肯大道|travel:ManticanStreet 前往杰克尼森林|travel:ZeconeForest\nSiberiaBakery,「西伯利亚」烘焙坊,据说这家店第一个老板养了一只西伯利亚猫，于是索性就把店名起做「西伯利亚」了|克罗华森正在楼梯上玩 酷儿正在柜台上睡觉,鱼面包(3火币)|buy_item:FishBread;3 脚掌面包(1.5火币)|buy_item:PawBread;1.5 猫形面包(9火币)|buy_item:CatBread;9 脚印烧口袋三明治(8.5火币)|buy_item:PawPocketSandwich;8.5 离开|move_to:PublicSquare\nCakeShop,蛋糕店,中央广场的一家蛋糕店，售卖着各式各样的蛋糕|梅普正在吃一块蛋糕 梅普正在努力上楼 梅普正在和顾客玩耍,猫形饼干(11火币)|buy_item:CatBiscuit;11 鱼形饼干(11火币)|buy_item:FishBiscuit;11 购买一块低糖减脂蛋糕(10火币)|buy_item:FitnessCake;10 购买一角苹果派(6.5火币)|buy_item:OneApplePie;6.5 购买整个苹果派(39火币)|buy_item:ApplePie;39 离开|move_to:PublicSquare\nTheater,剧院,结合了音乐厅、电影院、剧院等多功能设施，市民们经常来观赏演出|杰克正在捉老鼠 杰克正在椅子上舔毛,观看电影(20火币)|watch 欣赏古典音乐会|watch 离开|move_to:PublicSquare\nNyantopiaCafe,咖啡屋,位于中央广场的咖啡店，连接着广场和索马里大道,猫猫咖啡(5火币)|buy_item:PawCoffee;5 卡布奇诺(6火币)|buy_item:Cappuccino;6 焦糖玛奇朵(8火币)|buy_item:CaramelMacchiato;8 购买奶茶(5火币)|buy_item:Milktea;5 离开|move_to:PublicSquare\nCrepeShop,可丽饼店,飘散着香甜的奶油香味，一只名叫“巧克力”的猫在椅子桑打盹,草莓可丽饼(10火币)|buy_item:CrepesStrawberry;10 香蕉可丽饼(9火币)|buy_item:CrepesBanana;9 健康可丽饼(9火币)|buy_item:CrepesFitness;9 奶油可丽饼(5火币)|buy_item:CrepesCream;5 离开|move_to:PublicSquare"
// console.log(Scean.read_scean(data).PublicSquare)
Object.defineProperty(setup,"Sceans",{value:Scean.read_scean(data)})