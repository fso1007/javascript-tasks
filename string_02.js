/*Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false*/

alert( checkSpam("xXXx") );

function checkSpam(str) {
  lowerStr = str.toLowerCase(); // First we took of capitalized chars
  
  return lowerStr.includes("xxx") || lowerStr.includes("viagra");
}