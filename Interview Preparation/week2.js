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
    /* Grading Students
    HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
    
    */
}

function gradingStudents(grades) {
    let roundedGrades = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            roundedGrades.push(grades[i]);
        } else if ((grades[i] + 1) % 5 === 0) {
            roundedGrades.push(grades[i] + 1);
        } else if ((grades[i] + 2) % 5 === 0) {
            roundedGrades.push(grades[i] + 2);
        } else {
            roundedGrades.push(grades[i]);
        }
    }
    console.log(roundedGrades);
    return roundedGrades;
}

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}

{
    /* 1
2
112 42 83 119
56 125 56 49
15 78 101 43
62 98 114 108  */
}
function flippingMatrix(matrix) {
    let temp;
    let sum1 = 0;
    let sum2 = 0;
    let pivot = matrix.length / 2;

    console.log("pivot:", pivot);

    for (let i = 0; i < matrix.length / 2; i++) {
        for (let j = 0; j < pivot - 1; j++) {
            sum1 += matrix[i][j];
        }
        console.log("sum1:", sum1);
        for (let j = pivot; j < matrix[i].length; j++) {
            sum2 += matrix[i][j];
        }
        console.log("sum2:", sum2);

        if (sum2 > sum1) {
            for (let j = 0; j < pivot - 1; j++) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[i][j + 1];
                matrix[i][j + 1] = temp;
            }
        }
        console.log(matrix);
    }
}
