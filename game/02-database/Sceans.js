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
}

var data = "PublicSquare,中央广场,中央广场四周都是餐厅和店铺，道路两旁摆满了桌子。这里算是城市的核心吧，每年5月举办猫之庆典时，中央广场就被装点得格外漂亮，游客人数也增加不少。,东广场|move_to:PublicSquareEast 西广场|move_to:PublicSquareWest 前往曼奇肯大道|move_to:ManticanStreet 前往海滩|move_to:Beach 前往日晷丘陵|move_to:HillSundial 前往索马里大道|move_to:SorumariStreet,city\nPublicSquareEast,东广场,中央广场的东侧，这里有很多的空公寓，选择住在这里一定非常热闹,走进售楼处|move_to:PSSalesOffices 走进「西伯利亚」烘焙坊|move_to:SiberiaBakery 离开|move_to:PublicSquare,city\nPublicSquareWest,西广场,中央广场的西侧，有着很多的店铺，猫猫们懒洋洋的趴在店铺门口,走进蛋糕店|move_to:CakeShop 走进剧院|move_to:Theater 走进咖啡屋|move_to:Cafe 走进可丽饼店|move_to:CrepeShop 离开|move_to:PublicSquare,city\nSorumariStreet,索马里大道,从火车站到鱼市场附近，是交通要道。报社、市政府等建筑物都在火车站附近，很是热闹,前往报社|move_to:Newspaper 前往市政府|move_to:CityHall 前往火车站|move_to:TrainStation 旅游大巴|move_to:TouristBus 前往中央广场|move_to:PublicSquare 前往东方公园|move_to:EastPark,city\nManticanStreet,曼奇肯大道,曼奇肯大道是主干道，左右两边都是经中央大桥出入城市的车辆。,前往中央大桥|move_to:CityGate 前往中央广场|move_to:PublicSquare 前往布利斯大道|move_to:BricksStreet 前往哈瓦那大道|move_to:HabanaStreet,city\nHabanaStreet,哈瓦那大道,在哈瓦那大道举行的猫咪马戏团街头表演很受欢迎！自由猫们穿梭在队伍里更是一绝,前往曼奇肯大道|move_to:ManticanStreet 前往东方公园|move_to:EastPark 前往利普尔港|move_to:LeeplePort,city\nEastPark,东方公园,城市东部的巨大的公园，白天参观天文台的人多，此时人声鼎沸；到了晚上就成了猫咪们的聚会地,前往哈瓦那大道|move_to:HabanaStreet,city\nLeeplePort,利普尔港,靠近利普尔港，还得气息就越浓厚，渔船一艘艘出现在眼前，充满港口风情,前往哈瓦那大道|move_to:HabanaStreet 前往索马里大道|move_to:SorumariStreet,city\nBeach,海滩,从海滩上空可以俯瞰整个中央广场，还能看到远处的城堡，风景一绝,前往中央广场|move_to:PublicSquare,city\nHillSundial,日晷丘陵,和平公园坐落于此，通往日晷丘陵的阶梯两侧有很多精品店，很是热闹,前往杰克尼森林|move_to:HillSundial 前往中央广场|move_to:PublicSquare,city\nZeconeForest,杰克尼森林,位于诺贝尔克城堡南方的一大片森林，已经被指定为了国家公园,前往日晷丘陵|move_to:HillSundial,city\nNyanbelcForest,诺贝尔克森林,由诺贝尔伯爵于14世纪兴建的城堡，至今仍保留着风貌，因此这座历史古城成了最著名的旅游经典,前往布利斯大道|move_to:BricksStreet,city\nBricksStreet,布利斯大道,在坡度平缓的大道上，消防局、警察局坐落于此,前往诺贝尔克森林|move_to:NyanbelcForest 前往曼奇肯大道|move_to:ManticanStreet,city\nCityGate,中央大桥,大概是出城的唯一通道，海关和猫猫卫兵在这里站岗,前往曼奇肯大道|move_to:ManticanStreet,city\nSiberiaBakery,「西伯利亚」烘焙坊,据说这家店第一个老板养了一只西伯利亚猫，于是索性就把店名起做「西伯利亚」了|克罗华森正在楼梯上玩 酷儿正在柜台上睡觉,鱼面包(3火币)|buy_item:FishBread 脚掌面包(1.5火币)|buy_item:PawBread 猫形面包(9火币)|buy_item:CatBread 脚印烧口袋三明治(8.5火币)|buy_item:PawPocketSandwich 离开|move_to:PublicSquare,city\nCakeShop,蛋糕店,中央广场的一家蛋糕店，售卖着各式各样的蛋糕|梅普正在吃一块蛋糕 梅普正在努力上楼 梅普正在和顾客玩耍,猫形饼干(11火币)|buy_item:CatBiscuit 鱼形饼干(11火币)|buy_item:FishBiscuit 购买一块低糖减脂蛋糕(10火币)|buy_item:FitnessCake 购买一角苹果派(6.5火币)|buy_item:OneApplePie 购买整个苹果派(39火币)|buy_item:ApplePie 离开|move_to:PublicSquare,city\nTheater,剧院,结合了音乐厅、电影院、剧院等多功能设施，市民们经常来观赏演出|杰克正在捉老鼠 杰克正在椅子上舔毛,观看电影(20火币)|watch 欣赏古典音乐会|watch 离开|move_to:PublicSquare,city\nCafe,咖啡屋,位于中央广场的咖啡店，连接着广场和索马里大道,猫猫咖啡(5火币)|buy_item:PawCoffee 卡布奇诺(6火币)|buy_item:Cappuccino 焦糖玛奇朵(8火币)|buy_item:CaramelMacchiato 购买奶昔(3火币)|buy_item:Milkshake 购买奶茶(5火币)|buy_item:MilkTea 离开|move_to:PublicSquare,city\nCrepeShop,可丽饼店,飘散着香甜的奶油香味，一只名叫“巧克力”的猫在椅子桑打盹,草莓可丽饼(10火币)|buy_item:CrepesStrawberry 香蕉可丽饼(9火币)|buy_item:CrepesBanana 健康可丽饼(9火币)|buy_item:CrepesFitness 奶油可丽饼(5火币)|buy_item:CrepesCream 离开|move_to:PublicSquare,city\nCityHall,市政府,城市的行政首脑，公务员们和猫们在大厅里穿梭,离开|move_to:SorumariStreet,city\nNewspaper,报社,整个城市的报社，在没有网络的年代，大概是唯一的媒体了吧,买一份报(2火币)|buy_item:CatNews 离开|move_to:SorumariStreet,city\nTrainStation,火车站,非常热闹的车站，各种游客和本地居民出入往来|卡米拉正在带小猫上厕所 卡米拉在长椅上休息,离开|move_to:SorumariStreet,city\nTouristBus,旅游大巴,正前方的黄色建筑物是旅游局，满载着游客的巴士好像正要出发，前往哈瓦那大道,前往哈瓦那大道|move_to:HabanaStreet 离开|move_to:SorumariStreet,city\nPSSalesOffices,售楼处,中央公寓区的售楼处，此处的公寓因交通便利而十分紧俏。剩余房屋：3,购买一套四室公寓(1000火币)|buy_house_ps:4 购买一套三室公寓(800火币)|buy_house_ps:3 购买一套两室公寓(600火币)|buy_house_ps:2 离开|move_to:PublicSquareEast,city\nPetalFlowerShop,花店「PETAL」,名叫Petal的花店，一进门便是浓郁的花香。铃兰、郁金香等对猫咪有毒地花朵被放到了高处。店员在给花们浇水|弗洛拉在卖力地吃着猫草…… 弗洛拉在花丛中探头,购买一朵红玫瑰(2.5火币)|buy_item:RedRose;2.5 购买一把向日葵(10火币)|buy_item:Sunflower;10 购买一朵郁金香(4火币)|buy_item:Tulip;4 离开|move_to:SorumariStreet,city\nLeeplePortStation,利普尔港车站,利普尔港车站内，白天总是繁忙熙攘，车流往来而去，而夜晚则一片寂静,前往诺贝尔克森林|move_to:NyanbelcForest 前往布利斯大道|move_to:BricksStreet 前往哈瓦那大道|move_to:HabanaStreet 前往曼奇肯大道|move_to:ManticanStreet,city\nSorumariNeighborhood,索马里住宅区,宁静的住宅区，坐落着众多小型宅院,前往地产商|move_to:NSSalesOffices 前往东方公园|move_to:EastPark,city\nNSSalesOffices,索马里街区地产商,索马里大道地区的地产商，这里的宅院廉价且温馨，适合租为民宿或自住。剩余宅院：3,购买一套宅院(600火币)|buy_house:2 离开|move_to:SorumariNeighborhood,city"
// console.log(Scean.read_scean(data).PublicSquare)
Object.defineProperty(window,"Sceans",{value:Scean.read_scean(data)})