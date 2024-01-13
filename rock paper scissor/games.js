let person1 = prompt("Enter the rock,paper,scissor")
let person2 = prompt("Enter the rock,paper,scissor")

if(person1 =="rock" && person2 =="paper" ){
    alert(person2+" is a winner");
}
else if(person1 =="paper" && person2 =="rock" ){
    alert(person1+" is a winner");
}


else if(person1 =="scissor" && person2 =="paper"){
    alert(person1+" is a winner");  
}
else if(person1 =="paper" && person2 =="scissor"){
    alert(person2+" is a winner");
}


else if (person1 =="scissor" && person2=="rock"){
    alert(person2+ "is a winner");
}
else if (person1 =="rock" && person2=="scissor"){
    alert(person1+ "is a winner");
}


else if(person1 == "rock"&& person2 == "rock"){
    alert("draw");
}
else if(person1 == "paper"&& person2 == "paper"){
    alert("draw");
}
else if(person1 == "scissor"&& person2 == "scissor"){
    alert("draw");
}




