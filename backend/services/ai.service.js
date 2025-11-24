const booksDB = [
  { id: 1, title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', genre: 'Fantasia' },
  { id: 2, title: 'O Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasia' },
  { id: 3, title: 'Dom Casmurro', author: 'Machado de Assis', genre: 'Romance' },
  { id: 4, title: '1984', author: 'George Orwell', genre: 'Distopia' },
  { id: 5, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', genre: 'Infantil' },
  { id: 6, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', genre: 'Fantasia' },
  { id: 7, title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', genre: 'Romance' },
  { id: 8, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Distopia' }
];

exports.recommendBooks = async (userHistory) => {
  const favoriteGenres = userHistory.map(book => book.genre);
  const recommendations = booksDB.filter(book =>
    favoriteGenres.includes(book.genre) &&
    !userHistory.some(read => read.id === book.id)
  );
  return recommendations.slice(0, 5);
};
