let myLibrary = []

function Book(book, author, read) {
    this.book = book
    this.author = author
    this.read = read
}

function addBookToLibrary() {
    let newBook = document.getElementById('book').value
    let newAuthor = document.getElementById('author').value
    let readOrNot = document.getElementById('readOrNot').value
    let entry = new Book (newBook, newAuthor, readOrNot)
    if (newBook === '' || newAuthor === '') {
        alert('Please, fill out all required fields.')
    } else {
        myLibrary.push(entry)
    } 
    console.log(myLibrary)
}

const cards = document.querySelector('#cards')

function showBook() {
    const button = document.querySelector('#btn')
    button.addEventListener('click', () => {
        // Clear every card on the screen
        let removeCards = document.querySelectorAll('.card')
        removeCards.forEach((card) => {
        card.remove()
        })
        // Loop through myLibrary array, create cards and displays it
        for (let i = 0; i < myLibrary.length; i++) {
            let book = document.createElement('div')
            book.innerHTML = `
            <input type="button" class="delete" id="${myLibrary.indexOf(myLibrary[i])}" value="&times;" onclick="deleteCard(this)">
            <div class="book">${myLibrary[i].book}</div> 
            <div class="author">by ${myLibrary[i].author}</div>
            <input type="button" value="${myLibrary[i].read}" class="readOrNot" id="readOrNot">
            
            `
            book.setAttribute('id', `card${myLibrary.indexOf(myLibrary[i])}`)
            book.classList.add('card')
            cards.append(book)
        }
        // Clear the input field
        let bookField = document.getElementById('book')
        let authorField = document.getElementById('author')
        bookField.value = ''
        authorField.value = ''
    })
}

function changeStatus() {
    const button = document.getElementById('readOrNot')
    button.addEventListener('click', () => {
        button.value === 'Meu Pau'
    })
}

function deleteAll() {
    let cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
        card.remove()
    })
    myLibrary = [];
}

function deleteCard(x) {
    let buttonIndex = x.id
    let card = document.getElementById(`card${buttonIndex}`)
    card.remove()
    myLibrary.splice(buttonIndex, 1)
}

const bookInput = document.querySelector('.book-input')
const openBookInput = document.querySelector('#open-button')
const closeBookInput = document.querySelector('.close-button')
const submitAndClose = document.querySelector('.submitButton')

openBookInput.addEventListener('click', () => {
    bookInput.showModal();
})

closeBookInput.addEventListener('click', () => {
    bookInput.close();
})

submitAndClose.addEventListener('click', () => {
    bookInput.close();
})

showBook()
