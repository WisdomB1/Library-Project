const availableBooks = getBooks();
const booksWrapper = document.querySelector('.books');

function renderBooks(filtered) {
    if(filtered === "LOW_TO_HIGH") {
        availableBooks.sort((a, b) => a.salePrice - b.salePrice);
    } else if(filtered === "HIGH_TO_LOW") {
        availableBooks.sort((a, b) => b.salePrice - a.salePrice);
    } else if(filtered === "RATING") {
        availableBooks.sort((a, b) => b.rating - a.rating);
    }

    const allBooks = availableBooks.map((book) => {
    return      `<div class="book">
                    <figure class="book__img--wrapper">
                        <img class="book__img" src="${book.url}" alt="Book Image">
                    </figure>
                    <div class="book__title">
                        ${book.title}
                    </div>
                    <div class="book__ratings">
                        ${ratingStars(book.rating)}
                    </div>
                    <div class="book__price">
                        <span class="book__price--normal">$${book.originalPrice.toFixed(2)}</span> $${book.salePrice.toFixed(2)}
                    </div>
                </div>`
    }).join('');

    booksWrapper.innerHTML = allBooks;
}
setTimeout(() => {
    renderBooks();
});

function filterBooks(event) {
    // console.log(event.target.value)
    renderBooks(event.target.value)
}

function ratingStars(rating) {
    let bookStars = "";
    for(let i = 1; i <= Math.floor(rating); i++) {
      bookStars += `<i class="fas fa-star"></i>`
    }
    if(!Number.isInteger(rating)) {
      bookStars += `<i class="fas fa-star-half-alt"></i>`
    }
    // console.log(bookStars);
    return bookStars;
}


// FAKE DATA
function getBooks() {
    return [
      {
        id: 1,
        title: "Crack the Coding Interview",
        url: "assets/crack the coding interview.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 2,
        title: "Atomic Habits",
        url: "assets/atomic habits.jpg",
        originalPrice: 39,
        salePrice: 18.95,
        rating: 5,
      },
      {
        id: 3,
        title: "Deep Work",
        url: "assets/deep work.jpeg",
        originalPrice: 29,
        salePrice: 12,
        rating: 4.5,
      },
      {
        id: 4,
        title: "The 10X Rule",
        url: "assets/book-1.jpeg",
        originalPrice: 39.95,
        salePrice: 19.95,
        rating: 4.5,
      },
      {
        id: 5,
        title: "Be Obsessed or Be Average",
        url: "assets/book-2.jpeg",
        originalPrice: 32,
        salePrice: 17,
        rating: 4,
      },
      {
        id: 6,
        title: "Rich Dad Poor Dad",
        url: "assets/book-3.jpeg",
        originalPrice: 70,
        salePrice: 12.5,
        rating: 5,
      },
      {
        id: 7,
        title: "Cashflow Quadrant",
        url: "assets/book-4.jpeg",
        originalPrice: 11,
        salePrice: 10,
        rating: 4,
      },
      {
        id: 8,
        title: "48 Laws of Power",
        url: "assets/book-5.jpeg",
        originalPrice: 38,
        salePrice: 17.95,
        rating: 4.5,
      },
      {
        id: 9,
        title: "The 5 Second Rule",
        url: "assets/book-6.jpeg",
        originalPrice: 35,
        salePrice: 15.95,
        rating: 4,
      },
      {
        id: 10,
        title: "Your Next Five Moves",
        url: "assets/book-7.jpg",
        originalPrice: 40,
        salePrice: 19.95,
        rating: 4,
      },
      {
        id: 11,
        title: "Mastery",
        url: "assets/book-8.jpeg",
        originalPrice: 30,
        salePrice: 13.95,
        rating: 4.5,
      },
    ];
}