
let $container = document.querySelector('.container');

let myLibrary = [
    {
        title: 'Deep work',
        author: 'Cal Newport',
        pages : 298,
        haveRead: true,
        id: '3434',
        info: function() {
            return `${this.haveRead}`
        },
        toggler: function(){
            console.log(this.haveRead);
            this.haveRead = !this.haveRead;
            console.log(this.haveRead)
        }
    },
    {
        title: 'Mindset',
        author: 'NaN',
        pages: 359,
        haveRead: false,
        id: 7890,
    }
];

function BookCreator(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

BookCreator.prototype.info = function() {
    return (` The ${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`);
}
BookCreator.prototype.readStatusToggler = function() {
    this.haveRead = !this.haveRead;
    console.log(this.haveRead)
}



function addBookToLibrary() {
    let book = new BookCreator(title, author, pages, read);
    book.id = Math.ceil(Math.random()*100) + 1;

    myLibrary.push(book);
}

function displayAllBooks() {
    let counter = 0;
    for (books of myLibrary) {
        let status = books.haveRead ? 'Have read' : 'Have not read';

        $container.innerHTML += 
        `
        <article class='card' data-id='${counter}'>
            <header class='card-head'>
                <h2 class='title'> ${books.title} </h2>
            </header>
            <section class='card-body'>
                <div> 
                    <p> Wrote by <span author> ${books.author} <span></p>
                    <p> <span class='pages'>${books.pages}</span> pages, <span class='status'>${books.haveRead}</span>.</p>
                </div>
            </section>
            <section class='card-footer'>
                <button id='readStatus' onclick="{myLibrary[${counter}].toggler()}">${books.haveRead}</button>
                <button id='editor'>Edit</button>
            </section>
        </article>
        `;
        ++counter;

    }
}

displayAllBooks();
// function toggleRead(index) {
//     myLibrary[index].toggler();
    

//     console.log(myLibrary[index].info())
// }