//4.READ BOOKS

//Crea una función que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.

var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function findBook (books, titleToSearch) {
  for (i=0; i<books.length; i++) {
    if (books[i].title === titleToSearch) {
      if (books[i].isRead === true) {
        return "Ese libro existe y se ha leído"
      }else {
        return "Ese libro existe y no se ha leído"
      }
    }
  }
  return "El título de ese libro no existe."
};

console.log (findBook (books, "Harry Potter y la piedra filosofal")); //Existe y se ha leído.
console.log (findBook(books, "Beatriz y los cuerpos celestes")); //El tito de ese libro no existe.
console.log (findBook(books, "Canción de hielo y fuego")); //Existe y no se ha leído.

//Opcional.Utiliza Typescript para añadir los tipos adecuados:???


