function BookCreator(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

BookCreator.prototype.info = function() {
    return (` The ${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`);
}

let myLibrary = [
    {
        title = 'Deep work',
        author = 'Cal Newport',
        pages = 298,
        haveRead = true,
        id = '3434'
    }
];

function addBookToLibrary() {
    let book = new BookCreator(title, author, pages, read);
    book.id = Math.ceil(Math.random()*100) + 1;

    myLibrary.push(book);
}

function displayAllBooks() {
    for (books of myLibrary) {
        let status = books.haveRead ? 'Have not read' : 'Have read';

        $container.innerHTML = 
        `
        <article class='card'>
            <header class='card-head'>
                <h2 class='title'> ${books.title} </h2>
            </header>
            <section class='card-body'>
                <div> 
                    <p> Wrote by <span author> ${books.author} <span></p>
                    <p> <span class='pages'>${books.pages}</span> pages, <span class='status'>${status}</span>.</p>
                </div>
            </section>
        </article>
        `;

    }
}