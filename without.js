const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual,expected) {
  let arrayCompare = eqArrays(actual, expected);
  if (arrayCompare === true) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

//step0. get rid of the elements of the second from the first array (goal)
//step1. to compare two arrays
//step1.1 creat empty array to store values and returned at the end
//step2. loop the first array
//step3. see if the first value of the second array exists from the first array
//step4. if match skip, if not match
//step5. create a checker to see if there is no match
//step6. loop second array
//step7. if there is a mismatch update checker
//step8. look up checker to see a mismatch
//step9. if mismatch update value in empty array
// final step return array of values

const without = (array1, array2) => {
  const emptyArray = [];

  for (let i = 0; i < array1.length; i++) {
    const array1Val = array1[i];
    let isMatch = false;

    for (let j = 0; j < array2.length; j++) {
      const array2Val = array2[j];
      
      if (array1Val === array2Val) {
        isMatch = true;
      }
    }
    if (isMatch === false) {
      emptyArray.push(array1Val);
    }
  }
  return emptyArray;
};

// Test Code
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]