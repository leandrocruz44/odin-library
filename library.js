let myLibrary = []

class Book {
    constructor (book, author, read) {
        this.book = book
        this.author = author
        this.read = read
    }
}

function addBookToLibrary() {
    let newBook = document.getElementById('book').value
    let newAuthor = document.getElementById('author').value
    let newBookToVal = document.getElementById('book')
    let newAuthorToVal = document.getElementById('author')
    let readOrNot = document.getElementById('readOrNot').value
    let required = document.getElementById('required')
    let entry = new Book (newBook, newAuthor, readOrNot)
    if (newBookToVal.validity.valueMissing || newAuthorToVal.validity.valueMissing){
        required.classList.replace('requiredHidden', 'requiredShow')
    } else {
        myLibrary.push(entry)
        required.classList.replace('requiredShow', 'requiredHidden')
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
        createCard()

        // Clear the input field
        let bookField = document.getElementById('book')
        let authorField = document.getElementById('author')
        bookField.value = ''
        authorField.value = ''
    })
}

function changeStatus() {
    window.addEventListener('click', (e) => {
        if (e.target.className === 'toggle') {
            let cardIndex = e.target.id
            let cardStatus = e.target.innerText
            let i = cardIndex.charAt(cardIndex.length - 1)
            let button = document.getElementById(cardIndex)
            if (cardStatus == 'Read'){
                button.innerText = 'Not Read'
                myLibrary[i].read = 'Not Read'
                button.style.backgroundColor = 'lightcoral'
            } else if (cardStatus == 'Not Read'){
                button.innerText = 'Read'
                myLibrary[i].read = 'Read'
                button.style.backgroundColor = 'lightgreen'
            }
        }
    })
}

function deleteAll() {
    let cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
        card.remove()
    })
    myLibrary = [];
}

function deleteCard() {
    window.addEventListener('click', (e) => {
        if (e.target.className === 'delete') {
            const delBtnId = e.target.id
            const card = document.getElementById(`card${delBtnId}`)
            card.remove()
            myLibrary.splice(delBtnId, 1)
            console.log(delBtnId)
        }        
    })
}

function createCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div')
        book.id = `card${myLibrary.indexOf(myLibrary[i])}`
        book.className = 'card'

        let delBtn = document.createElement('button')
        delBtn.className = 'delete'
        delBtn.id = `${myLibrary.indexOf(myLibrary[i])}`
        delBtn.innerText = 'X'
        book.appendChild(delBtn)

        let bookField = document.createElement('div')
        bookField.className = 'book'
        bookField.innerText = `${myLibrary[i].book}`
        book.appendChild(bookField)

        let authorField = document.createElement('div')
        authorField.className = 'author'
        authorField.innerText = `${myLibrary[i].author}`
        book.appendChild(authorField)

        let readOrNotReadBtn = document.createElement('button')
        readOrNotReadBtn.className = 'toggle'
        readOrNotReadBtn.id = `toggle${myLibrary.indexOf(myLibrary[i])}`
        readOrNotReadBtn.innerText = `${myLibrary[i].read}`
        readOrNotReadBtn.innerText == 'Read' ? readOrNotReadBtn.style.backgroundColor = 'lightgreen' : readOrNotReadBtn.style.backgroundColor = 'lightcoral'
        book.appendChild(readOrNotReadBtn)

        cards.append(book)
    }
}

// Modal code to pop-up the form

const bookInput = document.querySelector('.book-input')
const openBookInput = document.querySelector('#open-button')
const closeBookInput = document.querySelector('.close-button')


openBookInput.addEventListener('click', () => {
    bookInput.showModal();
})

closeBookInput.addEventListener('click', () => {
    bookInput.close();
})

showBook()
deleteCard()
changeStatus()
