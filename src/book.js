function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name:  name,
    age: age ,
    pronouns: pronouns,
  };
  return character;
}

function saveReview(strForArray, reviewArray) {
  if (reviewArray.includes(strForArray) === true) {
    return strForArray;
  }
return reviewArray.push(strForArray);
}
// .length() *20
function calculatePageCount(bookPageCount) {
  return bookPageCount.length * 20;
}

function writeBook(bookTitle, mainCharacter, genre) {
 return {
   title: bookTitle,
   mainCharacter: mainCharacter ,
   genre: genre,
   pageCount: calculatePageCount(bookTitle) ,
 };
}

function editBook (originalBook) {
originalBook.pageCount = originalBook.pageCount * .75
}



module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
};
