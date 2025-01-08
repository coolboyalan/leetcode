/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
   let count = 0;
   for(let i=0;i<words.length-1;i++){
    for(let j=i+1;j<words.length;j++){
        isPrefixAndSuffix(words[i],words[j]) ? count+=1 : null;
    }
   }  
   return count;  
};

function isPrefixAndSuffix(test,main){
    if(main.length<test.length) return false;

    let pointer = 0;

    while(pointer < test.length){
        if(main[pointer]!== test[pointer] || main[main.length-1-pointer]!==test[test.length-1-pointer]){
            return false;
        }
        pointer+=1;
    }
    return test;
}
