function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
      return data; // Ensures the function returns data for test assertions
    })
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clears previous content before rendering new books
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);
