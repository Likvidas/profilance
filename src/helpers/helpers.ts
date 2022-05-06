export function generateId(lengthId = 18) {
  const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  let resultID = '';
  for (let i = 0; i < lengthId; i += 2) {
    const sizeLetter = Math.round(Math.random() * 2);
    const randomLetter =
      alphabetStr[Math.round(Math.random() * (alphabetStr.length - 1))];
    const randomNum = Math.floor(Math.random() * 10);

    if (sizeLetter > 1) {
      resultID += randomLetter.toUpperCase();
    } else {
      resultID += randomLetter;
    }

    resultID += randomNum;
  }
  return resultID.length === lengthId ? resultID : resultID.slice(0, -1);
}
