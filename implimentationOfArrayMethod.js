
let arrMrhods = {
    myPush : function (array, elem) {
        if (Array.isArray(array)) {
            array[array.length] = elem
            return array.length
        } else {
            console.log("Your argument is not array");
        }
    },
    myPop : function (array) {
        if (Array.isArray(array)) {
            if (!array.length) {
                return undefined
            } else {
                let res = array[array.length - 1];
                array.length = array.length - 1;
                return res;
            }
        } else {
            console.log("Your argument is not array");
        } 
    },
    myShift : function () {
        if (Array.isArray(array)) {
            if (array.length) {
                for(let i = 0; i < array.length; i++) {
                    array[i] = array[i - 1]
                }
            } else {
                return undefined
            }
        } else {
            throw new Error("Your argument is not array");
        }
    },
    myUnshift : function (array, elem) {
        if (Array.isArray(array)) {
                for(let i = 1; i < array.length + 1; i++) {
                    array[i] = array[i - 1];
                }
                array[0] = elem;
                return array.length;
        } else {
            throw new Error("Your argument is not array");
        }
    },
    myConcat : function (array1, array2) {
        if (Array.isArray(array1)) {
            let res = []
            res = [...array1]
            console.log(res);
            let j = 0;    
            if (Array.isArray(array2)) {
                for(let i = res.length ; i < array1.length + array2.length - 1; i++) {
                    res[i] = array2[j];
                    j++;
                }
            } else {
                res[res.length] = array2
            }
            return res;
        } else {
            throw new Error("Your argument is not array");
        }
    },
    myJoin : function (array) {
        if (Array.isArray(array)) {
            let str = "";
            for(let i = 0; i < array.length; i++) {
                str[i] = array[i]
            }
            return str;
        } else {
            throw new Error("Your argument is not array");

        }
    },
    myMap : function (array, callback) {
        if (Array.isArray(array)) {
            let res = [];
            for(let i = 0; i < array.length; i++) {
                res[i] = callback(array[i])
            }
            return res;
        } else {
            throw new Error("Your argument is not array");
        }
    },
    myFilter : function (array, callback){
        if (Array.isArray(array)) {
            let res = [];
            for(let i = 0; i < array.length; i++) {
                if (callback(array[i])) {
                    if (res[res.length]) {
                        res[res.length - 1] = array[i] 
                    } else {
                        res[0] = array[i]
                    }
                }
            }
            return res;
        } else {
            throw new Error("Your argument is not array");

        }
    },
    myFind : function (array, elem){
        if (Array.isArray(array)) {
            for(let i = 0; i < array.length; i++) {
                if (array[i] === elem) {
                    return true
                }
            }
            return false;
        } else {
            throw new Error("Your argument is not array");

        }
    },
    reduce : function (arr, fn, initialValue){
        let acc = initialValue === undefined ? arr[0] : initialValue
        let i = initialValue === undefined ? 1 : 0
        for(; i < arr.length; i++){
            acc = fn(acc, arr[i], i, arr)
        }
        return acc
    },
    lastIndexOf : function (arr, param, s = arr.length){
        if (!Array.isArray(arr) || typeof(s) !== 'number' ) {
            console.log('something wrong')
            return
        }
        s = Math.abs(s)
        for (; s => 0; s--) {
        if(arr[s] === param){
            return s
        }
        }
        return -1
    },
    flater : function (arr){
        let array = []
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                array.push(...flater(arr[i]));
            }else{
                array.push(arr[i])
            }
        }
        return array
    },
    indexOf : function (arr, param, s = 0){
        if (!Array.isArray(arr) || typeof(s) !== 'number' ) {
            console.log('something wrong')
            return
        }
        s = Math.abs(s)
        for (; s < arr.length; s++) {
        if(arr[s] === param){
            return s
        }
        }
        return -1
    },
    includes : function (arr, item){
        for (let i = 0; i< arr.length; i++) {
            if (arr[i] === item) {
                return true 
            }
        }
        return false
    }
}