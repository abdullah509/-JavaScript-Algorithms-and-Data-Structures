// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// SOLUTION:
function rot13(str) {

  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

  var arr = str.split("");
  var arr2 = [];

  for(var i = 0; i < arr.length; i++){
    if(alphabet.indexOf(arr[i]) === -1){
      arr2.push(arr[i]);
    }
    else{
      for(var j = 0; j < alphabet.length; j++){
        if(arr[i] === alphabet[j]){
          arr2.push(alphabet[j + 13]);
        }
      }
    }
  }
  return arr2.join("");


}

rot13("SERR PBQR PNZC");

// TESTS:
// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP

// rot13("SERR CVMMN!") should decode to FREE PIZZA!

// rot13("SERR YBIR?") should decode to FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
