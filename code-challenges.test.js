// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
//input: ["purple", "blue", "green", "yellow", "pink"]
//output: can be (remove first item and shuttle input array) ["yellow", "blue", "pink", "green"]

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removalReplace", () => {
  it("removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]..

    expect(removalReplace(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(removalReplace(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})



// b) Create the function that makes the test pass.

// Pseudo code:
// use the .slice() method to create a newArray
// shuffle the remaining array using Fisher-yates shuffle algorithm

const removalReplace = (arr) => {
    let newArray = arr.slice(1)

  for (let i = newArray.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  return newArray
}






// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// input: { upVotes: 13, downVotes: 2 }
// output: 11

describe("tallyCount", () => {
  it("returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(tallyCount(votes1)).toEqual(11)
    expect(tallyCount(votes2)).toEqual(-31)
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// use an obj as a parameter
// return end tally using dot notation, obj.upVotes - obj.downVotes

const tallyCount = (obj) => {
  return obj.upVotes - obj.downVotes
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// input: const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noD", () => {
  it("returns one array with no duplicate values", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noD(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// pass 2 arrays as parameters
// create new empty arrays
// iterate over each array using a for loop with an if statment utilize the .includes and .push methods to ensure we dont have dupes and the return the new output array

const noD = (arr1, arr2) => {
  let oldArr = []
  let outputArr = []
  for (let i = 0; i < arr1.length; i++){
    if (!oldArr.includes(arr1[i])){
      outputArr.push(arr1[i])
      oldArr.push(arr1[i])
    }
  }
  for (let i = 0; i < arr2.length; i++){
    if (!oldArr.includes(arr2[i])){
      outputArr.push(arr2[i])
      oldArr.push(arr2[i])
    }
  }
  return outputArr
}
