

///////////////////////

// qayleri hertakanutyun
// <ul>
//   <li><span>bookname(value)</span></li>
//   <li><span>delete</span></li>
// </ul>




// stexcel li(list)

const addButoon = document.getElementById('add-button')
const addFormInput = document.getElementById('add-form-input')
// const bookNames = document.getElementsByClassName('name') 
const ulList = document.querySelector('#book-list>ul')
const hideBox = document.getElementById('hide')
const serachInput = document.getElementById('searchBar')


///////////////////////--------------------------------------

// qayleri hertakanutyun
// <ul>
//   <li><span>bookname(value)</span></li>
//   <li><span>delete</span></li>
// </ul>




// stexcel li(list)

//add book functionality




const handleAddBook = () => {

  const { value } = addFormInput;
  if (value.trim()) {
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteButton = document.createElement('span')
    bookName.innerText = value
    deleteButton.innerText = 'delete'
    bookName.classList.add('name')
    deleteButton.classList.add('delete')
    li.appendChild(bookName)
    li.appendChild(deleteButton)
    ulList.appendChild(li)

    addFormInput.value = ''
  }

}

addButoon.addEventListener('click', handleAddBook)


/////----------------------------------------------------

const handleDeleteBook = event => {
  const { target } = event
  if (target.className === 'delete') {
    const li = target.parentElement
    ulList.removeChild(li)
    console.log(li);
  }
}
ulList.addEventListener('click', handleDeleteBook)

///----------------------------------------------------


