const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
let newData = [
  {name: "Sahil", age: 22 , profession:"developer"},
  {name: "pratik", age: 23 , profession:"Manager"}
];
// 1. Print Developers
function printDeveloper() {
  for(let i in data){
    if(data[i].profession==="developer"){
    console.log(data[i]);
}
}
}

// 2. Add Data
function addData() {
  let devName = prompt("Enter Developer Name");
  let devAge = parseInt(prompt("Enter Developer Age"));
  let devProfession = prompt("Enter Developer Profession");
  const newData = { name: devName, age: devAge, profession: devProfession };
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {

  const filterData = data.filter(item => item.profession !== "admin");

for(let i in filterData){
  console.log(filterData[i]);
}
}

// 4. Concatenate Array
function concatenateArray() {
 
   newData=newData.concat(data);
   for(let i in newData){
    console.log(newData[i]);
  }
}

// 5. Average Age
function averageAge() {
  let sum =0;
  let avg = 0 ;
  for(let i in data){
    sum +=  data[i].age;
  }
  for(let i in data){
    console.log(data[i]);
  }
    avg = sum/data.length;
    console.log("Average age of all People is "+avg);
    
}

// 6. Age Check
function checkAgeAbove25() {
  let c ;
  for(let i in data){
    if(data[i].age>25){
    console.log(data[i]);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = new Set(data.map(item => item.profession));
  console.log("Unique Professions:", Array.from(professions));
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  for(let i in data){
    console.log(data[i]);
  }
}

// 9. Update Profession
function updateJohnsProfession() {
  let idx ;
  for(let i in data){
    if(data[i].name==="john"){
      data[i].profession = "Manager"
      idx=i;
    }
  }
    console.log(data[idx]);
  }


// 10. Profession Count
function getTotalProfessions() {
  let pCount ={};

  data.forEach(item => {
    if (pCount[item.profession]) {
      pCount[item.profession]++;
    } else {
      pCount[item.profession] = 1;
    }
  });
  console.log("Profession Count:", pCount);

}
