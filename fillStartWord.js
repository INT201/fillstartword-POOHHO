
//const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let a = startWord;
  let b = word;

  if(word == null || word == undefined){
    return undefined;
  }else if(b.startsWith(a)){
    return b;
  }else{
    return a+b;
  }
}
console.log(fillStartWord("JS","word"));
//module.exports = fillStartWord


