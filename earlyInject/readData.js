(async() => {
    function read_csv(csv) {
        csv = csv.split("\r\n");
        for (let i=0;i<csv.length;i++) {
            csv[i] = csv[i].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
            for (let j=0;j<csv[i].length;j++) {
                csv[i][j] = csv[i][j].replace(/"/g,"");
            }
        }
        return csv
    }
    function localization_read(l,csv) {
        if (!l[csv[0][0]]) {
            l[csv[0][0]] = {};
        }
        for (let i=1;i<csv.length;i++) {
            l[csv[0][0]][csv[i][0]] = csv[i][1];
        }
        return l;
    }
    
    var mod = window.modSC2DataManager.getModLoader().getModByNameOne("Nyantopia");
    let addtionFlies = mod.mod.bootJson.additionFile;
    var l = {};
    for (f of addtionFlies) {
        if (f.search("database")==-1) {continue;}
        var csv = await(mod.zip.zip.file(f).async("string"));
        csv = read_csv(csv)
        let fileName = f.replace("database/","");
        fileName = fileName.replace(".csv","");
        if (f.search("Localization")!=-1) {
            l = localization_read(l,csv);
        } else {
            Object.defineProperty(window,fileName,{value:csv});
        }
    }
    Object.defineProperty(window,'localization',{value:l});
})();
