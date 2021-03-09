const titleCase = string => {
  let phrase = string.toLowerCase().split(" ");
  for (let i = 0; i < string.length; i++) {
    phrase[i] = phrase[i][0].toUpperCase() + sentence [i]
  }

}



titleCase("i love meowscles")\

function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
document.write(sentence.join(" "));
return sentence;
}
titleCase("tutorix is one of best e-platforms");