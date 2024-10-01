// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   let length = haystack.split('').length
   let needle2 = needle.split('')
    for(let i=0;i<length+1-needle2.length;i++){
        let test = haystack.split('').slice(i,i+needle2.length).join('')
        if(test===needle){
            return i
        }}
        return -1
        
};
