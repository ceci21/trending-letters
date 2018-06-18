export const removeLetter = (letter, collection) => {
  // Find index where letter is
  let index = null;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === letter) {
      index = i;
      break;
    }
  }
  
  // Build new array where letter is removed
  const newCollection = [];
  for (let i = 0; i < collection.length; i++) {
    if (i !== index) {
      newCollection.push(collection[i]);
    }
  }
  return newCollection;
}