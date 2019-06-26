a = 14
b = 4 
c = '-5'

//console.log(a > 10 && b < 5 && c < 0) 

var arr = [ 1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(1,2);
//console.log(arr);
// Adding it back in
arr.splice(1,0,2,3);
//console.log('Second Array' + arr);



var products = [
    {type: "fruits", description: "oranges"},
    {type: "fruits", description: "apples"},
    {type: "vegetables", description: "peas"}
]
var result = products.filter(function(product) {
    return product.type === 'vegetables';

});
//console.log(result);


function uefaEuro2016(teams, score) {
    var announcement = "At match";

    announcement += teams.join(' - ') + ', ';

    if(score[0]>score[1]) {
        announcement += teams[0] + ' won!';
    }
    else if(score[0] < score[1]) {
        announcement += teams[1] + ' won!';
    }
    else {
        announcement += ' It is a draw!';
    }
    //console.log(announcement);
}
uefaEuro2016(['Germany', 'Ukraine'],[2,0] ) 

function middle(numbers) {
    var middlenumpos;
    if(0 !== numbers.indexOf(Math.max(numbers[0],numbers[1],numbers[2])) && 0 !== numbers.indexOf(Math.min(numbers[0],numbers[1],numbers[2]))) {
        middlenumpos = 0;
    } else if(1 !== numbers.indexOf(Math.max(numbers[0],numbers[1],numbers[2])) && 1 !== numbers.indexOf(Math.min(numbers[0],numbers[1],numbers[2]))) {
        middlenumpos = 1;
    }
    else {
        middlenumpos = 2;
    }
    var middlenum = numbers[middlenumpos];

    var announcement = middlenum+" at index "+middlenumpos+" lies between "+Math.max(numbers[0],numbers[1],numbers[2]).toString()+" and "+Math.min(numbers[0],numbers[1],numbers[2]).toString();
    //console.log(announcement);
}
var array1 = [-23.54, 300, 2000];
//middle(array1);

function moveletters(letters) {
    var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var letterone = letterArray.indexOf(letters[0])+10;
    var lettertwo = letterArray.indexOf(letters[1])+10;
    var letterthree = letterArray.indexOf(letters[2])+10;

    var newletters = (letterArray[letterone],letterArray[lettertwo],letterArray[letterthree]);
    console.log(newletters[0] + newletters[1] + newletters[2]);
}

console.log(moveletters(['d','o','g']));