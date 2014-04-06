var fs = require('fs');
var mfs = require('../mahjongFunctionSet.js');

function main(){
  var myFile = fs.openSync('mahjongTestFile.txt','w');
  for(var j=0;j<200;j++){
    var hand = []; 
    for(var i=0;i<14;i++){
      var a = parseInt(Math.random()*27);
      hand.push(a);
    }
    hand.sort(function(a,b){return a-b});
    fs.writeSync(myFile,hand+'\n');
    var res = mfs.isMahjong(hand);
    fs.writeSync(myFile,res+'\n');
  }
  //console.log('Hand',hand);
  //console.log('Dal je mahjong?',mfs.isMahjong(hand));
}


main();
