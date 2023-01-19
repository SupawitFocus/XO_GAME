
let winCombinations = []
export function createCombinations(num, valueNum){
    winCombinations = []
    createCombinationsHorizontal(num, valueNum);
    createCombinationsVertical(num, valueNum);
    createCombinationsDiagonal(num, valueNum);
}
export function createCombinationsHorizontal(num, valueNum){
    
    const arrayB = [];
    for(let i = 0; i < num; i++){
        arrayB.push(i);
    };
    while(arrayB.length) {
        winCombinations.push(arrayB.splice(0,valueNum));
    };
}

export function createCombinationsVertical(num, valueNum){
    const arrayB = [];
    var a = 0;
    for (let i = 0; i < valueNum; i++) {
        a = i;
        while(a < num){
            if(i===0){
                arrayB.push(a);
            }else{
                arrayB.push(a);
            }
            a+=valueNum
        };
    };
    while(arrayB.length) {
        winCombinations.push(arrayB.splice(0,valueNum));
    }
}

export function createCombinationsDiagonal(num, valueNum){
    const arrayB = [];
    const arrayC = [];
    var a = 0;
    var b = 0;
    while (a < num) {
        if (a === 0) {
            arrayB.push(a);
        } else {
            arrayB.push(a);
        }
        a += (valueNum + 1)
    };
    while(arrayB.length) {
        winCombinations.push(arrayB.splice(0,valueNum));
    }

    b = valueNum-1;
    while (b < num - (valueNum-1)) {
        arrayC.push(b);
        b += (valueNum-1);
    };
    while(arrayC.length) {
        winCombinations.push(arrayC.splice(0,valueNum));
    }
}

export function calWinner(square, turn){
    for (let i = 0; i < winCombinations.length; i++) {
        var check = winCombinations[i].every(index => square[index]===turn) //square[index]===turn
        if (check) {
          return turn;
        }
    }
    return null;
}

