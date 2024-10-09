const methids = {
    split : function(str, pattern) {
        if (typeof str === "string") {
            let res = []
            if(typeof pattern === "string") {
                if (pattern === '') {                    
                    for (let i = 0; i < str.length; i++) {
                        res[i] = str[i]
                    }
                } else {                    
                    let tmp = ""
                    let arrJ = 0;
                    let iTmp = 0;
                    for (let i = 0; i < str.length; i++) {
                        if (str[i] === pattern) {
                            if (tmp) {
                                res[arrJ] = tmp;
                                iTmp = 0;
                                arrJ++;
                            }
                        } else {
                            tmp  = tmp + str[i] 
                            iTmp++;                            
                        }
                    }
                    res[arrJ] = tmp

                }
            } else {
                if (Array.isArray(pattern)) {
                    for (let i = 0; i < str.length; i++) {
                        res[i] = str[i]
                    }
                } else {
                    res[0] = str;
                }
            }
            return res;
        } else {
            throw new Error("Your argument is not string")
        }
    },
    substring : function(str, start, end) {
        let res = ""
        if (typeof str === "string") {
            if (end === undefined) {
                end = str.length;
            } else if (end < start) {
                let tmp = start;
                start = end;
                end = tmp
            } 
            if (end > str.length) {
                end = str.length;
            }
            for (let i = start; i < end; i++) {
                res += str[i]
            }
            
            return res;
        } else {
            throw new Error("Your argument is not string")
        }
    },
    slice : function (str, start, end) {
        let res = "";
        if ((start < 0 && end > 0)) {
            return res;
        }
        if (end > str.length) {
            end = str.length;
        }
        if (start < 0 && end < 0) {
            start = str.length + start;
            if (start < 0) {
                start = 0;
            }
            end = str.length + start;
            if (end < 0) {
                end = 0;
            }
        }
        for (let i = start; i < end; i++) {
            res += str[i];
        }
        return res
    },
    replace : function(str) {
        let res = '';
        for (let i = str.length - 1; i >= 0; i--) {
            res += str[i]
        }
        return res
    },
    indexof : function(str, elem) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === elem) {
                return i
            }
        }
        return -1;
    },
    includes(str, substring) {
        if (typeof str !== "string" || typeof substring !== "string") {
            throw new Error("Your arguments is not valid");
        }
        if (substring.length > str.length) {
            return false;
        }
        for (let i = 0; i <= str.length - substring.length; i++) {
            let match = true;
            for (let j = 0; j < substring.length; j++) {
                if (str[i + j] !== substring[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
        return false;
    },
    trim(str) {
        let res = "";
        i = 0;
        j = str.length - 1;
        while(str[i] === " ") {
            i++;
        }
        while(str[j] === " ") {
            j--;
        }
        for (; i <= j ; i++) {
            res += str[i]
        }
        return res;
    },
    repeat(str, count) {
        let res = 0;
        for (let i = 0; i < count; i++) {
            res += str;
        }
        return res
    },
    myToUpperCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let charCode = str[i].charCodeAt(0); 
            if (charCode >= 97 && charCode <= 122) {
                charCode -= 32;
            }
            result += String.fromCharCode(charCode);
        }
        return result;
    }
}
