// Main Carousel

const buttons = document.querySelectorAll('[data-carousel-button]')

// loop through the buttons
buttons.forEach((button) => {
  // add an event listener to each button
  button.addEventListener('click', () => {
    // get the offset from the button
    // Set the offset to 1 if the button is next and -1 if the button is previous
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    // Set slides to the closest data-carousel then find the data-slides.
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]')
    // set currentSlide to the closest data-slides then find the data-active
    const currentSlide = slides.querySelector('[data-active]')
    // set newIndex to the currentSlide and add the offset
    let newIndex = [...slides.children].indexOf(currentSlide) + offset
    // if the newIndex is less than 0 then set it to the length of the slides - 1
    if (newIndex < 0) newIndex = slides.children.length - 1
    // if the newIndex is greater than or equal to the length of the slides then set it to 0
    if (newIndex >= slides.children.length) newIndex = 0
    // Set slides children to the new index and set the data-active to true
    slides.children[newIndex].dataset.active = true
    // delete currentSlide.dataset.active when the button is clicked
    delete currentSlide.dataset.active
  })
})

let savedItems = []

const saveButton = document.getElementById('save')
// For each time the save button is clicked add 1 to the save count and store in local storage

saveButton.addEventListener('click', () => {
  const slide = document.querySelector('[data-active]')
  const image = slide.querySelector('img')
  const src = image.getAttribute('src')
  console.log('button clicked')
  if (localStorage.getItem('images') !== null) {
    savedItems = JSON.parse(localStorage.getItem('images'))
    // if value is already in local storage then don't add it again
    if (savedItems.includes(src)) {
      alert('Item already saved')
      return
    }
  }
  savedItems.push(src)
  localStorage.setItem('images', JSON.stringify(savedItems))
  alert('Item saved' + ' ' + savedItems.length)
})

const likeBtn = document.getElementById('likebtn')
let likeCountArray = []
console.log(likeBtn)
likeBtn.addEventListener('click', () => {
  const slide = document.querySelector('[data-active]')
  const image = slide.querySelector('img')
  const src = image.getAttribute('src')
  console.log('like button clicked')
  // Get the like count from local storage and convert to array then alert the amount of likes
  if (localStorage.getItem('likes') !== null) {
    likeCountArray = JSON.parse(localStorage.getItem('likes'))
  }
  // Get image src from local storage if like button is clicked mark image as liked don't allow any more like clicks on the image
  // If the image is already liked then don't add to the like count
  if (likeCountArray.includes(src)) {
    alert('Image already liked')
    return
  }
  // Add 1 to the like count
  likeCountArray.push(src)
  // Store the like count in local storage
  localStorage.setItem('likes', JSON.stringify(likeCountArray))
  // Alert the amount of likes
  alert('Like count' + ' ' + likeCountArray.length)
})
