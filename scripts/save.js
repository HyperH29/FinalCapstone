let saveList = document.getElementById('saveList')
console.log(saveList)
{
  /* <ul id="saveItems"> */
}

// Create new list element
let li = document.createElement('li')
// Create new image element
let img = document.createElement('img')
console.log(img)
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

    //saveItems.appendChild(li)
    //li.appendChild(img)
    //saveItems.appendChild(item)

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
