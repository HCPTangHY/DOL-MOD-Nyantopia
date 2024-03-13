class NyanEvent {
    id;desc;trigger;callFunc;option;
    constructor(args) {
        this.id = args[0];
        this.desc = window.localization[navigator.language][this.id+"_desc"];
        this.trigger = args[1];
        this.callFunc = args[2];
        this.option = args[3].split(",");
    }
    static read_event(data) {
        let events = {}
        for (let i=0;i<data.length;i++) {
            if (data[i]=='') {continue;}
            events[data[i][0]] = new NyanEvent(data[i]);
        }
        return events
    }

}
console.log(window.NyanEvent);
Object.defineProperty(setup,"NyanEvent",{value:NyanEvent.read_event(window.NyanEvent)});
