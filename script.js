
let $container = document.querySelector('.container'); //the main container whr all the books are rendered.
let $formContainer = document.querySelector('.form-container');
let $form = document.getElementById('addBookForm');//actual form element

let $addbtn = document.querySelector('#addbookbtn');


let myLibrary = [
    {
        title: 'Deep work',
        author: 'Cal Newport',
        pages : 298,
        haveRead: true,
    },
    {
        title: 'Mindset',
        author: 'NaN',
        pages: 359,
        haveRead: false,
    }
];
let bookKey = myLibrary.length-1;

function BookCreator(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}


const addBookForm = () => {
    $formContainer.classList.toggle('hide');
    $container.classList.toggle('hide');
}

function addBookToLibrary(title, author, pages, read) {

    myLibrary.push(new BookCreator(title, author, pages, read));
}



const display_a_book = index => {
    $container.innerHTML += 
        `
        <article class='card' data-id='${index}'>
            <header class='card-head'>
                <h2 class='title'>loop number ${index} ${myLibrary[index].title} </h2>
            </header>
            <section class='card-body'>
                <div> 
                    <p> Wrote by <span author> ${myLibrary[index].author} <span></p>
                    <p> <span class='pages'>${myLibrary[index].pages}</span> pages, 
                        <span class='status'>${myLibrary[index].haveRead}</span>.
                    </p>
                </div>
            </section>
            <section class='card-footer'>
                <button id='readStatus' onclick="{myLibrary[${index}].toggler()}">
                    ${myLibrary[index].haveRead}
                </button>
                <button id='editor'>Edit</button>
            </section>
        </article>
        `;
}

(function displayAllBooks() {
    let counter = 0;
    for (let i = 0; i <= bookKey; i++){
        display_a_book(i)
    }

})();


function handleSubmit(e){
    e.preventDefault();
    let form_data = document.getElementById('addBookForm').elements;
    
    addBookToLibrary(form_data['title'].value, form_data['author'].value, 
            form_data['pages'].value, form_data['haveRead'].checked)
    
    bookKey++; //increment the book key as the book is added.
    display_a_book(bookKey)//display the currently book
    addBookForm();//to toggle the form container and the main container
    form_data['title'].value = form_data['author'].value = 
        form_data['pages'].value = ""; //reset the input control to empty
    
}
$form.addEventListener('submit', handleSubmit)
$addbtn.addEventListener('click', addBookForm)
