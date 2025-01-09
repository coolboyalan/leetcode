/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    
    let count = 0;

    for(let i of words){
        count+=1;
        for(let j in pref){
            if(pref[j]!==i[j]){
                count-=1;
                break;
            }
        }
    }
    return count;
}