let myLibrary = []

function Book(book, author) {
    this.book = book
    this.author = author
}

function addBookToLibrary() {
    let newBook = document.getElementById('book').value
    let newAuthor = document.getElementById('author').value
    let entry = new Book (newBook, newAuthor)
    myLibrary.push(entry)
    console.log(myLibrary)
}

const cards = document.querySelector('#cards')

function showCard() {
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
            <div class="book"><p>${myLibrary[i].book}</p></div> 
            <div class="author">by ${myLibrary[i].author}</div>
            <input type="button" id="${myLibrary.indexOf(myLibrary[i])}" value="X" onclick="deleteCard(this)">
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

showCard()
