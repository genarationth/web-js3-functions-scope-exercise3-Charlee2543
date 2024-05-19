// ### Exercise #3.1

const PayPercent = costPercent => costPercent*0.0001 ;
const pay = 2320
const userCost =PayPercent(pay);
console.log(pay+userCost+3);

// ### Exercise #3.2 Part1
const myFriends =["jen","nun","bow"];
console.log("Welcome "+ myFriends);

// ### Exercise #3.2 Part2
const birth = 1989;
const now =2024;
const age =(birth,now)=>console.log(now-birth);
;
age(birth,now);

// ### Exercise #3.2 Part3
const isName=["name1","name2","name3"];
const ageMyFriends =[14,19,30];
const nameAge = (isName,ageName)=>{
console.log(` Welcome ${isName[0]}, you are ${ageName[0]}.`);
console.log(` Welcome ${isName[1]}, you are ${ageName[1]}.`);
console.log(` Welcome ${isName[2]}, you are ${ageName[2]}.`);
};
nameAge(isName,ageMyFriends);

// ### Challenge Yourself
let nameRubric =11;
switch(true){
    case nameRubric === 11:
        console.log("Perfect");
        break;
    case  nameRubric > 8 :
        console.log("Excellent");
        break;
    case nameRubric >= 5 :
        console.log(true);
        break;
    default:
        console.log("false");
}
