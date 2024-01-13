function read_csv(csv) {
    csv = csv.split("\n");
    for (let i=0;i<csv.length;i++) {
        csv[i] = csv[i].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
        for (let j=0;j<csv[i].length;j++) {
            csv[i][j] = csv[i][j].replace(/"/g,"");
        }
    }
    return csv
}

(async() => {
    var mod = window.modSC2DataManager.getModLoader().getModByNameOne("Nyantopia");
    var csv = await(mod.zip.zip.file("database/eventLocalization.csv").async("string"));
    csv = read_csv(csv)
    var l = {};
    l[csv[0][0]] = {};
    for (let i=1;i<csv.length;i++) {
        l[csv[0][0]][csv[i][0]] = csv[i][1];
    }
    Object.defineProperty(window,"eventLocalization",{value:l})
})();