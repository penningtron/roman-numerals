function toRomanLazy(num) {

  let output = "";

  let romanNumeralToArabic = {
    "I": 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000 

  }

  let romanNumeralPriorityOrder = [
    "M",
    "D",
    "C",
    "L",
    "X",
    "V",
    "I"
  ]

  // Iterate through roman numeral priority order
  for (let i = 0; i < romanNumeralPriorityOrder.length; i++ ){

    
  }

  // use division and Math.floor to find out how many times a given num can be divided


  return "";
}

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
