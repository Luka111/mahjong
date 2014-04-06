var hersdata = require('hersdata');

var root = new (hersdata.DataMaster)();

root.attach('mahjong',{
  name:'Mahjong',
  spinId : 1,
},undefined,{
  newHandId : function(){
    return ++this.self.spinId;
  }
});

root.startHTTP(8009,'web');
