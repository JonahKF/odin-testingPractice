export const caesarCipher = (string, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const keyAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
  let newString = "";

  for (let n = 0; n < string.length; n++) {
    let pos = alphabet.indexOf(string.charAt(n));
    newString += keyAlphabet.charAt(pos);
  }

  return newString.toUpperCase();
};

console.log(caesarCipher("spaghetti", 4));
