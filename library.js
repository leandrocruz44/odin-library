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
    let required = document.getElementById('required')
    let entry = new Book (newBook, newAuthor, readOrNot)
    if (newBook === '' || newAuthor === ''){
        required.classList.replace('requiredHidden', 'requiredShow')
    } else{
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
        for (let i = 0; i < myLibrary.length; i++) {
            let book = document.createElement('div')
            book.innerHTML = `
            <input type="button" class="delete" id="${myLibrary.indexOf(myLibrary[i])}" value="&times;" onclick="deleteCard(this)">
            <div class="book">${myLibrary[i].book}</div> 
            <div class="author">by ${myLibrary[i].author}</div>
            <input type="button" value="${myLibrary[i].read}" class="toggleBtn" id="toggleBtn${myLibrary.indexOf(myLibrary[i])}" onclick="changeStatus(this)">
            
            `
            book.setAttribute('id', `card${myLibrary.indexOf(myLibrary[i])}`)
            book.classList.add('card')
            cards.append(book)

            // Toggle button color
            let toggle = document.getElementById(`toggleBtn${myLibrary.indexOf(myLibrary[i])}`)
            if (toggle.value == 'Read'){
                toggle.classList.add('toggleBtnRead')
            } else if(toggle.value == 'Not Read'){
                toggle.classList.add('toggleBtnNotRead')
            }
        }

        // Clear the input field
        let bookField = document.getElementById('book')
        let authorField = document.getElementById('author')
        bookField.value = ''
        authorField.value = ''
    })
}

function changeStatus(x) {
    let cardIndex = x.id
    let cardStatus = x.value
    let i = cardIndex.charAt(cardIndex.length - 1)
    let button = document.getElementById(`${cardIndex}`)
    if (cardStatus == 'Read'){
        button.value = 'Not Read'
        myLibrary[i].read = 'Not Read'
        button.style.backgroundColor = 'lightcoral'
    } else if (cardStatus == 'Not Read'){
        button.value = 'Read'
        myLibrary[i].read = 'Read'
        button.style.backgroundColor = 'lightgreen'
    }
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
