var isMahjong = function (hand){
  if (hand.length % 3 != 2){
    console.log('Invalid hand!');
    return false;
  }
  for(var i=0; i<hand.length-1; i++){
    if (hand[i]>hand[i+1]){
      console.log('NIJE SORTIRAN!!!!');
      return false;
    }
  }
  //var possiblePairs = [ [0,1] , [3,4] , [6,7] , [9,10] , [12,13] ];
  var i=0;
  console.log('PROVERAVAMO RUKU',hand);
  while (i+2 <= hand.length){
    console.log('PAR [',hand[i],',',hand[i+1],'] NA MESTIMA',i,i+1);
    if (isPair(hand[i],hand[i+1])){
      if (isHandSet(hand,i)){
        return true;
      }
    }else{
      console.log('*** NIJE PAR ***');
    }
    i+=3;
  }
  return false;
}

function isPair(tile1,tile2){
  return (tile1 == tile2);
}

function isPung(tile1,tile2,tile3){
  if (tile1 > 33 || tile1 < 0){
    console.log (tile1,'cannot form pung!');
    return false;
  }
  if (tile2 > 33 || tile2 < 0){
    console.log (tile2,'cannot form pung!');
    return false;
  }
  if (tile3 > 33 || tile3 < 0){
    console.log (tile3,'cannot form pung!');
    return false;
  }
  if ((tile1 == tile2) && (tile2 == tile3)){
    console.log('Jesu iste!!',tile1,tile2,tile3);
    return true;
  }else{
    console.log('Nisu iste!',tile1,tile2,tile3);
    return false;
  }
}

function isChow(tile1,tile2,tile3){
  if (tile1 > 26 || tile1 < 0){
    console.log (tile1,'cannot form chow!');
    return false;
  }
  if (tile2 > 26 || tile2 < 0){
    console.log (tile2,'cannot form chow!');
    return false;
  }
  if (tile3 > 26 || tile3 < 0){
    console.log (tile3,'cannot form chow!');
    return false;
  }
  if ( ((tile1 % 9) == (tile2 % 9-1)) && ((tile2 % 9 - 1) == (tile3 % 9-2)) ){
    console.log('Jesu u nizu',tile1%9,tile2%9,tile3%9);
    return true;
  }else{
    console.log('Nisu u nizu',tile1%9,tile2%9,tile3%9);
    return false;
  }
}

function isHandSet(hand,pairPos){
  if (hand.length %3 != 2){
    return false;
  }
  var i=0;
  console.log('Pair Position',pairPos);
  while (i < hand.length){
    console.log('Current counter',i);
    if (i == pairPos){
      console.log('Preskocio sam 2 komada!');
      i+=2;
      continue;
    }
    if (isSet(hand[i],hand[i+1],hand[i+2])){
      i+=3;
    }else{
      return false;
    }
  }
  return true;
}

function isSet(tile1,tile2,tile3){
  if (isPung(tile1,tile2,tile3)) { return true; }
  if (isChow(tile1,tile2,tile3)) { return true; }
  return false;
}

exports.isMahjong = isMahjong;
