
//------------------------------------------------------------
// Target saveItems in save.html and display saved items from local storage


// on data-active target that slide's img src and store in local storage when whish list button is clicked.



// Content page
// For each time the like button is clicked add 1 to the like count and store in local storage
let saveItems = document.getElementById('saveItems')


// Create new list element
let li = document.createElement('li')
// Create new image element
let img = document.createElement('img')
// Get array from local storage and convert to src

// This is the Area To Target
let src = JSON.parse(localStorage.getItem('images'))
if (src === null) {
  src = []
} else {
  src = JSON.parse(localStorage.getItem('images'))
  console.log(src)
  src.forEach((pic) => {
    let li = document.createElement('li')
    let img = document.createElement('img')
    img.src = pic
    img.className = 'saved-image'
    li.className = 'saved-image-li'
    let item = document.createElement('p')
    // Create a like button inside item
    item.innerHTML = pic.split('/').pop()
    // Filter out .png and .jpg
    item.innerHTML = item.innerHTML.replace('.png', '')
    // Change only first letter of each word to uppercase
    item.innerHTML = item.innerHTML
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    li.appendChild(img)
    savedItems.appendChild(item)

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'checkbox'
    checkbox.id = 'checkbox'

    checkbox.addEventListener('click', () => {
      let userInput = document.getElementById('comment').value
      let messageArray = []
      messageArray.push(userInput)

      messageArray.forEach((message) => {
        let newMessage = document.createElement('p')
        newMessage.innerHTML = message
        item.appendChild(newMessage)
      })
    })

    item.appendChild(checkbox)
  })
}
// redo the above code so that the src of the image attribute can be taken from the local storage and displayed on the page
// let start now

// Create a function that will take the src from local storage and display it on the page
