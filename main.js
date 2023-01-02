// *******************Exercise 1 : Checking The BMI***********************
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:

let person1 = {
    FullName: "akou jean vivien",
    Mass : 70,
    Height :1.80,
    // Each object should also have a key which value is a function (ie. A method),
    // that calculates the Body Mass Index (BMI) of each person
    BMI: function () {
        return this.Mass / (this.Height * this.Height );
  }
}

  let person2 = {
    FullName: "vivien jean akou",
    Mass : 90,
    Height: 1.60,
    // Each object should also have a key which value is a function (ie. A method), 
    //that calculates the Body Mass Index (BMI) of each person
    BMI: function () {
        return this.Mass / (this.Height * this.Height );
  }
}
// Outside of the objects, create a JS function that compares the BMI of both objects.
function Compare( ) {

    if (person2.BMI() > person1.BMI()  ) {
        console.log("l'individu 2 a le plus grand BMI")
        
    } else {
        console.log("l'individu 1 a le plus grand BMI")
    }

    // Display the name of the person who has the largest BMI    
}Compare( )



// *******************Exercise 2 : Grade Average***********************
// 
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

let gradesList=[12,13,15,17,8,8.5]
function findAvg(gradesList) {
    return gradesList
}findAvg()

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

let gradesList = [1000,13,15,17,8,8.5]
function findAvg(gradesList) {
    let sum = 0
    for (let notes of gradesList ){
        sum = sum + notes;//  calcul la somme de tous les elements du tableau
        
    }
    avg = sum/gradesList.length;//calcule la moyenne
//If the average is above 65 let the user know they passed
    if (avg>65) {
        console.log("vous avez reuissit")// sucess
    } else {// If the average is below 65 let the user know they failed and must repeat the course.
        console.log("vous avez echouer, vous  répéter le cours")//error
    }
    
    return avg
}findAvg(gradesList)



// II
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other

let gradesList = [1000,13,15,17,8,8.5]
function findAvg(gradesList) {
    let sum = 0
    for (let notes of gradesList ){
        sum = sum + notes;//  calcul la somme de tous les elements du tableau 
    }
    let avg = sum/gradesList.length;//calcule la moyenne

compare(avg)// j'appel la seconde fonction pour la comparaison 
    
    return avg
}findAvg(gradesList)

function compare(avg) {// 
//If the average is above 65 let the user know they passed
    if (avg>65) {
        console.log("vous avez reuissit")// sucess
    } else {// If the average is below 65 let the user know they failed and must repeat the course.
        console.log("vous avez echouer, vous  répéter le cours")//error
    }
    
}