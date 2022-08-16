{
    /* Lonely Integer
    
    Given an array of integers, where all elements but one occur twice, find the unique element. */
}

function lonelyinteger(a) {
    const map1 = [];

    for (let i = 0; i < a.length; i++) {
        if (!!map1[a[i]]) {
            map1[a[i]] += 1;
        } else {
            map1[a[i]] = 1;
        }
    }

    for (let key in map1) {
        if (map1[key] === 1) {
            return key;
        }
    }

    return;
}

a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));

{
    /*  */
}

{
    /*  */
}
