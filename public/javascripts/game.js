class Game {
    constructor(ownData,matchingData){

        // 固定要素
        this.SENTE = 100;
        this.GOTE  = 200;
        this.HOLD  = 1000;

        this.HU    = 0;
        this.KY    = 1;
        this.KE    = 2;
        this.GI    = 3;
        this.KI    = 4;
        this.KA    = 5;
        this.HI    = 6;
        this.OU    = 7;
        this.NHU   = 8;
        this.NKY   = 9;
        this.NKE   = 10;
        this.NGI   = 11;
        this.NKA   = 12;
        this.NHI   = 13;
    
        this.Guardian  = [0,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,101,102,103,104,105,106,107,108,109,110];
        this.SenteArea = [11,21,31,41,51,61,71,81,91,12,22,32,42,52,62,72,82,92,13,23,33,43,53,63,73,83,93];
        this.GoteArea  = [17,27,37,47,57,67,77,87,97,18,28,38,48,58,68,78,88,98,19,29,39,49,59,69,79,89,99];

        this.Koma_Base = {100:0,101:1,102:2,103:3,104:4,105:5,106:6,107:7,108:8,109:9,110:10,111:11,112:12,113:13,
                          200:0,201:1,202:2,203:3,204:4,205:5,206:6,207:7,208:8,209:9,210:10,211:11,212:12,213:13};

        this.Dan_1st = [11,21,31,41,51,61,71,81,91];
        this.Dan_2nd = [12,22,32,42,52,62,72,82,92];
        this.Dan_3rd = [13,23,33,43,53,63,73,83,93];
        this.Dan_4th = [14,24,34,44,54,64,74,84,94];
        this.Dan_5th = [15,25,35,45,55,65,75,85,95];
        this.Dan_6th = [16,26,36,46,56,66,76,86,96];
        this.Dan_7th = [17,27,37,47,57,67,77,87,97];
        this.Dan_8th = [18,28,38,48,58,68,78,88,98];
        this.Dan_9th = [19,29,39,49,59,69,79,89,99];
    
        this.Suji_1st = [11,12,13,14,15,16,17,18,19];
        this.Suji_2nd = [21,22,23,24,25,26,27,28,29];
        this.Suji_3rd = [31,32,33,34,35,36,37,38,39];
        this.Suji_4th = [41,42,43,44,45,46,47,48,49];
        this.Suji_5th = [51,52,53,54,55,56,57,58,59];
        this.Suji_6th = [61,62,63,64,65,66,67,68,69];
        this.Suji_7th = [71,72,73,74,75,76,77,78,79];
        this.Suji_8th = [81,82,83,84,85,86,87,88,89];
        this.Suji_9th = [91,92,93,94,95,96,97,98,99];

        // 対局情報
        this.ownId    = null;
        this.roomId   = null;
        this.isSente  = null;
        this.isGote   = null;

        // 進行状況
        this.battleStatus = 0;

    }

}