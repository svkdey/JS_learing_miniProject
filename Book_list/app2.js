class Book {
    constructor(title, author, isbn, status = 'unsold') {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.status = status;
    }

}
class UIBook extends Book {
    // constructor(title, author, isbn, status = 'unsold') {
    //     super(title, author, isbn, status);
    // }
     addBookToList(book){
        const list = document.getElementById('book-list');
        console.log(list);
        const row = document.createElement('tr');
        row.innerHTML = `
                <td scope="col">${book.title}</th>
                <td scope="col">${book.author}</th>
                <td scope="col">${book.isbn}</th>
                <td scope="col">${book.status}</th>
                <td scope="col"><a href='#' class='delete-item'>X</a></th>`
        list.appendChild(row);
    }
    showAlert(classname, msg){
        const output = document.querySelector('#output');
        output.className = classname;
        document.querySelector('#output').style.display = 'block';
        output.textContent = msg;
        setTimeout(() => {
            document.querySelector('#output').style.display = 'none';
        }, 3000)
    }
    deleteBook(target) {
       // console.log(target.className);
        if (target.className === 'delete-item') {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}
//
class Store{
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function (book) {
            const ui = new UIBook();

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
     //   console.log(isbn);
        books.forEach(function (book, index) {
          
            if (book.isbn === isbn) {
         //       console.log(book.isbn)
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}
//DOM load event

document.addEventListener('DOMContentLoaded', Store.displayBooks);


document.getElementById('book-form').addEventListener('submit', function (e) {
    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UIBook();
    // const store=new Store();

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert("alert alert-danger", "Check your inputs !!!");
    } else {
        // Add book to list
        ui.addBookToList(book);
        Store.addBook(book);
        

        // Show success
        ui.showAlert("alert alert-success", "Book details successfully added");

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {

    // Instantiate UI
    const ui = new UIBook();

    // Delete book
    ui.deleteBook(e.target);

    // Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    // Show message
    ui.showAlert("alert alert-danger",'Book Removed!');

    e.preventDefault();
});

// document.querySelector("#btn2").addEventListener('click',()=>{
//     if (document.querySelector('.table').style.display === 'none'){
//     document.querySelector('.table').style.display = 'block';
//         document.querySelector("#btn2").textContent='Hide table';
// }else{
//         document.querySelector('.table').style.display = 'none';
//         document.querySelector("#btn2").textContent = 'Show table';
//     }
// })






