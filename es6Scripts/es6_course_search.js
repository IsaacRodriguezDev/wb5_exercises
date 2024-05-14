'use strict'

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
 
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];



   
   // When does the PROG200 course start?
   let courseStart = courses.find(function searching (search){
    if(search.CourseId === 'PROG200'){
        return true
    }else{
        return false
    }
   })
   console.log(`The PROG200 course starts on:${courseStart.StartDate}`)
   console.log("-------------------------------------------")
// What is the title of the PROJ500 course?
let titleOfCourse = courses.find(function searching (search){
    if(search.CourseId === 'PROJ500'){
        return true
    }else{
        return false
    }
   })
   console.log(`The title of the PROJ500 course is: ${titleOfCourse.Title}`)
   console.log("-------------------------------------------")
   // What are the titles of the courses that cost $50 or less?
courses.filter(function searching (search){
    if(search.Fee <= 50 ){
        console.log(`Titles of the courses that cost $50 or less are: ${search.Title}`)
        return true 
    }else{
        return false
        
    }
   })
   console.log("-------------------------------------------")

   // What classes meet in "Classroom 1"?
   courses.filter(function searching (search){
    if(search.Location === "Classroom 1" ){
        console.log(`Classes that meet in Classroom 1 are: ${search.Title}`)
        return true
    }else{
        return false
    }
   })
   console.log("-------------------------------------------")