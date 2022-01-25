
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
    },
    {
        title: 'How to talk out loud',
        author: 'Franck Cutter',
        pages: 359,
        haveRead: true,
    }
];
let bookIndex = myLibrary.length-1;

function BookCreator(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}
function delete_a_book(e) {
    myLibrary.splice(bookIndex, 1);
    (e.target.parentNode.parentNode.remove());
    bookIndex--;
}
const toggleReadStatus = () => {

}
const toggleForm = () => {
    $formContainer.classList.toggle('hide');
    $container.classList.toggle('hide');
    $addbtn.disabled = true;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new BookCreator(title, author, pages, read));
}



const display_a_book = index => {
    let status = myLibrary[index].haveRead ? 'Read': 'Not Read';
    let j$card = document.createElement('article');
    let j$cardheader = document.createElement('header');
    let j$cardimg_holder = document.createElement('div');
    let j$cardTitle = document.createElement('h3');
    let j$cardBody = document.createElement('section');
    let j$cardFooter = document.createElement('footer');
    let j$deleteBtn, j$readBtn, j$cardPages, j$cardAuthor;
    j$deleteBtn = document.createElement('button');
    j$readBtn = document.createElement('button');
    j$cardPages = document.createElement('p');
    j$cardAuthor = document.createElement('p');

    j$card.classList.add('card');
        j$cardheader.classList.add('card-header');
            j$cardTitle.classList.add('title');
            j$cardimg_holder.classList.add('img-holder');
            j$cardheader.appendChild(j$cardimg_holder);
            j$cardTitle.textContent = `${myLibrary[index].title}`;
            j$cardheader.appendChild(j$cardTitle);

        j$cardBody.classList.add('card-body');
            j$cardAuthor.classList.add('author');
            j$cardAuthor.textContent = `${myLibrary[index].author}`;
            j$cardPages.textContent = `${myLibrary[index].pages} pages`
            j$cardBody.appendChild(j$cardAuthor);
            j$cardBody.appendChild(j$cardPages);

        j$cardFooter.classList.add('card-footer');
            j$deleteBtn.setAttribute('data-id', `${bookIndex}`);
            j$deleteBtn.textContent = 'Delete';
            j$readBtn.textContent = `${status}`;
            j$readBtn.addEventListener('click', toggleReadStatus);
            j$deleteBtn.addEventListener('click', delete_a_book);
            j$cardFooter.append(j$readBtn);
            j$cardFooter.appendChild(j$deleteBtn);
            
    j$card.appendChild(j$cardheader);
    j$card.appendChild(j$cardBody);
    j$card.appendChild(j$cardFooter);
    $container.appendChild(j$card);

}

(function displayAllBooks() {
    for (let i = 0; i <= bookIndex; i++){
        display_a_book(i);
    }
})();


function handleSubmit(e){
    if (e.keyCode === 13){
        console.log('can\'t');
    }
    e.preventDefault();
    let form_data = document.getElementById('addBookForm').elements;
    let title = form_data['title'].value;
    let author = form_data['author'].value;
    let pages = form_data['pages'].value;
    let haveRead = form_data['haveRead'].checked;
    if (title == '' || pages == '' || author == ''){
        return
    }
    addBookToLibrary(title, author, pages, haveRead);
    
    bookIndex++; //increment the book key as the book is added.
    display_a_book(bookIndex);//display the currently book
    toggleForm();//to toggle the form container and the main container
    form_data['title'].value = form_data['author'].value = 
        form_data['pages'].value = ""; //reset the input control to empty
    $addbtn.disabled = false;
}
let $cancel = document.getElementById('cancel')
$cancel.addEventListener('click', () => {
    toggleForm();
    $addbtn.disabled = false;
})
let $deleteBtn = document.querySelectorAll('#delete');
$deleteBtn.forEach(abtn => {
    abtn.addEventListener('click', delete_a_book);  
});
$form.addEventListener('submit', handleSubmit);
$addbtn.addEventListener('click', toggleForm);
