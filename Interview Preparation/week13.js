{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*
    Number of People (Code Signal Algo)

    Given a number of legs, return an array of the possible number of people in a combination of cats that are possible.
    */
}

function solution(legs) {
    let result = [];
    let peopleLegs = 2;

    if (legs % 4 === 0) {
        result.push(0);
    }

    while (peopleLegs <= legs) {
        let catLegs = legs - peopleLegs;
        if (catLegs % 4 === 0) {
            result.push(peopleLegs / 2);
        }
        peopleLegs += 2;
    }

    return result;
}

console.log(solution(8));
