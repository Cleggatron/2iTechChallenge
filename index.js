//this function will iterate in multiples of A until X
//then in multiples of A+1 until 2X
//then in multiples of A+3 until 3X

//for example if A = 2 and x = 12
//iterate in multiples of 2 till 12
//then in multiples of 3 till 24
//then in multiples of 4 till 36

function iterator(A, X){
    if(isNaN(A) || isNaN(X)){
        throw new Error("You have not provided valid arguements")
    }

    const output = {
        one: [],
        two: [],
        three: []
    };

    for(let i = A, count = 1; i <= 3*X ; i+=A, count++){
        if(i <= X){
            output.one.push(i);
        }
        if(count * (A+1) <= 2*X){
            output.two.push(count * (A+1))
        }
        if(count * (A+2) <= 3*X){
            output.three.push(count * (A+2))
        }
    }

    const subArrays = Object.values(output);

    subArrays.forEach(subArray => {
        console.log("New Array:")
        subArray.forEach(number => {
            console.log(number)
        })
    })

    return output;
}

iterator(2, 14);
iterator(3, 32);

module.exports = iterator;