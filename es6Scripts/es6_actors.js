let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
  
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   // Who is the Academy Member whose ID is 187?
let academyMember = academyMembers.find((member)=>member.memID === 187 ? true : false )
console.log(academyMember.name)
console.log('------------------------')


   // Who has been in at least 3 films?
let filmMembers = academyMembers.filter((members)=>{
    let filmsArray = members.films
    if(filmsArray.length >= 3){
        return true
    }else{
        return false
    }
})
filmMembers.forEach((member)=>console.log(member.name))
console.log('------------------------')


   // Who has a name that starts with "Bob"?
let findName = academyMembers.filter((member)=>{
    if(member.name.indexOf('Bob') === 0){
        return true
    }else {
        return false
    }
})
findName.forEach((member)=>console.log(member.name))
console.log('------------------------')


   // HARDER: Which Academy Members have been in a film that starts with "A"
let gotA = academyMembers.filter((members)=>{
    let films = members.films
 
   
        if(films[0].indexOf('A') !== -1){
            return true
        }else{
            return false
        }
    }
)

gotA.forEach((member)=>console.log(member.name))

