export const caesarCipher = (string, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shifted = alphabet.slice(key) + alphabet.slice(0, key);

  return string
    .split("")
    .map((char) => {
      const lower = char.toLowerCase();
      const index = alphabet.indexOf(lower);

      // If character is not in alphabet, return it unchanged
      if (index === -1) return char;

      // Preserve case of original character
      const shifted_char = shifted[index];
      return char === lower ? shifted_char : shifted_char.toUpperCase();
    })
    .join("");
};
