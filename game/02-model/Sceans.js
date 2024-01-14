class Scean {
    id;desc;timeDiff;eventTrigger;choice;
    constructor(args) {
        let i=0;
        for (let key of Object.keys(this)) {
            this[key] = args[i];
            if (key=='choice') {
                this.choice = this.choice.split(",");
            }
            i++;
        }
    }
    static read_scean(data) {
        let sceans = {}
        for (let i=0;i<data.length;i++) {
            if (data[i]=='') {continue;}
            sceans[data[i][0]] = new Scean(data[i]);
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
console.log(window.Scean);
// console.log(Scean.read_scean(data).PublicSquare)
Object.defineProperty(setup,"Scean",{value:Scean.read_scean(window.Scean)});
