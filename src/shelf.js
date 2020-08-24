function shelfBook(bookObj, shelf) {
 shelf.unshift(bookObj);
 if (shelf.length > 3) {
   shelf.shift();
 }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++)
  if (shelf[i].title === book)
   shelf.splice(i, 1);
}

function listTitles(shelf) {
  var bookTitles = []
  for (var i = 0; shelf.length; i++ )
  titleArray
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  // searchShelf: searchShelf
};
