// code your solution here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

function mondayWork(activityTwo = "go to the office"){
    return `This Monday, I will ${activityTwo}.`;
};
console.log(mondayWork());
console.log(mondayWork("work from home"));


function wrapAdjective(flair = "*"){
    return function (adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}
const wrapStar = wrapAdjective("*");
console.log(wrapStar("a hard worker"));
const wrapLine = wrapAdjective("||");
console.log(wrapLine("a dedicated programmer"));