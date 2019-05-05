//Book constructor

class Book{
    constructor(title, author, isbn, status = 'unsold'){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        this.status = status;
    }

}


//UI constructor
class UIBook extends Book{
    constructor(title, author, isbn, status = 'unsold'){
        super(title, author, isbn, status);

    }
    addBookToListtoshowBook(){
        const list = document.getElementById('book-list');
        console.log(list);
        const row = document.createElement('tr');
        row.innerHTML = `
        < td scope = "col" >${title}</th>
                <td scope="col">${this.author}</th>
                <td scope="col">${this.isbn}</th>
                <td scope="col">${this.status}</th>
                <td scope="col"><a href='$#' class='delete-item'>X</a></th>`
        list.appendChild(row);}
    
    
}
UIBook.prototype.addBookToList=(book)=>{
    const list = document.getElementById('book-list');
    console.log(list);
    const row = document.createElement('tr');
    row.innerHTML = `
        < td scope = "col" >${this.title}</th>
                <td scope="col">${this.author}</th>
                <td scope="col">${this.isbn}</th>
                <td scope="col">${this.status}</th>
                <td scope="col"><a href='$#' class='delete-item'>X</a></th>`
    list.appendChild(row);
    removeInputFields();
}
UIBook.prototype.removeInputFields = () => {
    document.getElementById('title').value='';
   document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}


UIBook.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}
//show alert
function showAlert(classname,msg){
    const output=document.querySelector('#output');
    output.className=classname;
    document.querySelector('#output').style.display = 'block';
    output.textContent=msg;
    setTimeout(()=>{
        document.querySelector('#output').style.display = 'none';
    },3000)
}
//event listensers

document.getElementById('book-form').addEventListener('submit',(e)=>{
  //get values from form 
   const title=document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
   
  const book=new Book(title,author,isbn);
  
  const uibook=new UIBook(book);
  if(title===''||author===''||isbn===''){
      showAlert("alert alert-danger","Check your inputs !!!");
  } else { uibook.addBookToListtoshowBook();
      showAlert("alert alert-success","Book details successfully added");    
}
    
  console.log(book);
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',function(e){
const ui=new UIBook();

ui.deleteBook(e.target);
    showAlert("alert alert-success", "Book details successfully Removed"); 

e.preventDefault();
})







