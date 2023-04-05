//205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let checker = {};
    for(let i = 0; i < s.length; i++){
        if(s[i] in checker){
            if(!(checker[s[i]] == t[i])){
                return false;
            }
        }
        else if(Object.values(checker).includes(t[i])){
            let keyCheck = Object.keys(checker).find(key => checker[key] === t[i]);
            if(keyCheck != s[i]){
                return false;
            }
        }
        else{
            checker[s[i]] = t[i];
        }
    }
    return true;
};