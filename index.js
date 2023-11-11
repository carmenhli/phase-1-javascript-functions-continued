// code your solution here
function saturdayFun(activity){
    if (activity === undefined){
        return 'This Saturday, I want to roller-skate!';
    } else {
        return 'This Saturday, I want to bathe my dog!';
    }
}

function mondayWork(activity2){
    if (activity2 === undefined){
        return 'This Monday, I will go to the office.';
    } else {
        return 'This Monday, I will work from home.';
    }
}

function wrapAdjective(flair){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}