module.exports = function toReadable (number) {
  const beforeTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const beforeTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const multTen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let result;

if (number === 0) {return 'zero'};
  if (number < 10) {return beforeTen[number]};
  if (number >= 10 && number < 20) {
    result = beforeTwenty[number % 10];
    return result.trim();
  };
  if (number >= 20 && number < 100) {
    let decade = Math.floor(number / 10);
    result = `${multTen[decade]} ${beforeTen[number % 10]}`;
    return result.trim();
  };
  if (number >= 100 && number < 1000) {
    let hundr = Math.floor(number / 100);
    if (number % 100 > 10 && number % 100 < 20) {
      result = `${beforeTen[hundr]} hundred ${beforeTwenty[(number % 100) % 10]}`;
      return result.trim();
    } else if (number % 100 < 10) {
      result = `${beforeTen[hundr]} hundred ${beforeTen[number % 100]}`;
      return result.trim();    
    } else {    
      let hundrDecade = number.toString()[1];
      let result = `${beforeTen[hundr]} hundred ${multTen[hundrDecade]} ${beforeTen[number % 10]}`;
      return result.trim();
    }
  }  
  
}
