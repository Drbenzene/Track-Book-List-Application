if (document.readyState == 'loading') {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready
}

function ready() {
  // const bookTitle = document.getElementById('title').addEventListener("change", (e) => {
  //   let title = e.target.value
  //   console.log(title)
  //   return title

  // })

  const author = document.getElementById('author').addEventListener("change", (e) => {
    let theAuthor = e.target.value;
    console.log(theAuthor)
    return author
  })

  document.getElementById('submit').addEventListener("click", submitInfoFunc)

  let removed = document.getElementsByClassName(' cancelC lass');
  for (let i = 0; i < removed.length; i++) {
    const theRemItem = removed[i];
    theRemItem.addEventListener("click", removeItemFunc)
  }

}

function submitInfoFunc(e) {
  e.preventDefault()
  let theSubmitted = e.target;
  let inputtedInfo = theSubmitted.parentElement;
  console.log(inputtedInfo)

  let bookTitle = inputtedInfo.getElementsByClassName("inputDetails")[0].value;
  console.log(bookTitle)

  let author = inputtedInfo.getElementsByClassName("inputDetails")[1].value;

  let isbn = inputtedInfo.getElementsByClassName("inputDetails")[2].value

  addedToTable(author, bookTitle, isbn)
}

let addedToTable = (author, bookTitle, isbn) => {
  
  let patternTest = /[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~]/gi;
  const tbody = document.getElementsByTagName("tbody")[0];
  const tr = document.createElement("tr");

  if (!author || !bookTitle || !isbn) {
    showAlert("Please provide all book details", 'warning')
    // setTimeout(() =>Swal.close(), 3000)  	
    return
  } if (isNaN(isbn)) {
    showAlert("Ensure the provided ISBN is a valid Number", 'warning')
    return
  } if(patternTest.test(bookTitle) || patternTest.test(author)) {
    showAlert("Ensure You provide a Valid Author Name and Book Title", 'warning');
    return
  }
  // } if (author.includes(patternTest) || bookTitle.includes(patternTest)) {
  //   showAlert("Ensure you provide valid Book Title and Author Name", 'warning');
  //   return
  // }
  
  
  else {


    // checkValues(author, bookTitle, isbn)

    const theBookInfo =
      `
    <td>${bookTitle}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><p  class="cancelClass"  id="cancelIcon">X</p></td>
    `

    tr.innerHTML = theBookInfo;
    tbody.appendChild(tr)
    showAlert("Book Added Successfully", 'success')
   	

    let removed = document.getElementsByClassName('cancelClass');
    for (let i = 0; i < removed.length; i++) {
      const theRemItem = removed[i];
      theRemItem.addEventListener("click", removeItemFunc)
    }

    document.theForm.reset();

  }

}

//Removed Function
function removeItemFunc(e) {
  let itemRemoved = e.target
  console.log(itemRemoved.parentElement.parentElement.remove())
  showAlert("Book Removed", 'error')
}

function darkModeActivated() {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
    document.getElementsByTagName("table")[0].classList.remove("table-dark")
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementsByTagName("table")[0].classList.add("table-dark")
  }
}

//Displaying Messages
function showAlert(message, iconClass) {

  let theAlert =   Swal.fire({
    position: 'center',
    icon: `${iconClass}`,
    title: `${message}`,
    showConfirmButton: false,
    timer: 2000
  })


  return theAlert;

   

  // const div = document.createElement("div");
  // div.className = `alert ${className}`;
  // const theText = document.createTextNode(message);
  // div.appendChild(theText);

  // const alertContainer = document.getElementsByClassName("alert-message")[0]
  // const alertRow = document.getElementsByClassName("alert-row")[0]
  // alertContainer.insertBefore(div, alertRow);

  // const parentAlertDiv = document.getElementsByClassName("alert");
  // console.log(parentAlertDiv)
  // for (let i = 0; i < parentAlertDiv.length; i++) {
  //   let theDiv = parentAlertDiv[i];

  //   theDiv.classList.add(className)
  //   theDiv.innerHTML = 
  //    ` 
  //    <p>${message}</p>
  //    `

}