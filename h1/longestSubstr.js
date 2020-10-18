/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if(s.length === 0) {
        return 0;
    }   
    else if(s.length === 1){
        return 1;
    }
    else {
        let maxLength = 0;
        let tmpLength = 0;
        const chars = new Map();
        for(let i = 0; i < s.length; i++){
            if(!chars.has(s[i])) {
                chars.set(s[i], true);
                tmpLength++;
            } else {
                i = i - tmpLength; 
                tmpLength = 0;
                chars.clear();
            }
            if(maxLength < tmpLength) {
                maxLength = tmpLength;
            } 
        }
        return maxLength;
    }
};