// 1. JAMB-style pass check
function checkJAMBScore(score) {
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}

// 2. Voting eligibility
function checkVotingEligibility(age) {
  return age >= 18 ? "You are eligible to vote" : "Not eligible";
}

// 3. Grade categorization
function gradeStudent(name, score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Fail";
  }
}

// 4. Access check
function grantAccess(hasID, isAbove18) {
  return hasID && isAbove18 ? "Access granted" : "Access denied";
}

// 5. Loop through scores
function checkScores(scores) {
  for (let score of scores) {
    if (score > 50) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
}

// 6. Arrow function to check if passed both Math and English
const passedBoth = (math, english) => (math >= 50 && english >= 50 ? "Yes" : "No");

// 7. Check for contact info before signup
function canSignUp(email, phone) {
  return email || phone ? "Proceed to sign up" : "Email or phone required";
}

// 8. Username/password validation
function validateLogin(username, password) {
  return !username || !password ? "Invalid input" : "Login successful";
}

// 9. Full-time/Part-time using ternary
function workStatus(hoursWorked) {
  return hoursWorked >= 40 ? "Full-time" : "Part-time";
}

// 10. Arrow function to return the larger of two numbers
const maxNumber = (a, b) => (a > b ? a : b);
