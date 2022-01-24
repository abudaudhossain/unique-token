const getCapitalizeSent = (sentance) =>{
   const allWords = sentance.split(" ");
   for(let i = 0; i < allWords.length; i++){
       allWords[i] = allWords[i][0].toUpperCase()+ allWords[i].slice(1);
   }
    return allWords.join( " ");
}

console.log(getCapitalizeSent("sdfj dsfjds df"));