export const caesarCipher = (string, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const keyAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
  let newString = "";

  for (let n = 0; n < string.length; n++) {
    if (alphabet.indexOf(string.charAt(n).toLowerCase()) > -1) {
      if (string.charAt(n) === string.charAt(n).toUpperCase()) {
        let pos = alphabet.indexOf(string.charAt(n).toLowerCase());
        newString += keyAlphabet.charAt(pos).toUpperCase();
      } else {
        let pos = alphabet.indexOf(string.charAt(n));
        newString += keyAlphabet.charAt(pos);
      }
    } else {
      newString += string.charAt(n);
    }
  }

  return newString;
};
