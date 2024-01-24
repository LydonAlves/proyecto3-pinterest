import './Card.css'
import { buttonWithText, buttonWithImage } from '../Button/Button'

const createCardButtons = (parent) => {
  const buttonsDiv = document.createElement('div')
  const topButtonsDiv = document.createElement('div')
  const profileDiv = document.createElement('div')
  const bottomButtonsDiv = document.createElement('div')

  buttonsDiv.classList.add('buttonsDiv', 'hide')
  topButtonsDiv.classList.add('topButtonsDiv')
  profileDiv.id = 'profileDiv'
  bottomButtonsDiv.id = 'bottomButtonsDiv'

  topButtonsDiv.innerHTML = `
  ${buttonWithText({ texto: 'Save', size: 's' })}
  `

  profileDiv.innerHTML = `
  ${buttonWithText({ texto: 'Profile', size: 's' })}
  ${buttonWithImage({
    size: 's',
    imageUrl: '/icons/dropDown.png'
  })}
  `

  bottomButtonsDiv.innerHTML = `
${buttonWithImage({
  imageUrl: '/icons/upload.png'
})}
${buttonWithImage({
  imageUrl: '/icons/dots.png'
})}
`
  topButtonsDiv.append(profileDiv)
  buttonsDiv.append(topButtonsDiv)
  buttonsDiv.append(bottomButtonsDiv)
  parent.append(buttonsDiv)
}

export const showCardButtons = () => {
  const cardDiv = document.querySelectorAll('.cardDiv')
  cardDiv.forEach((div) => {
    // console.log(div)
    const buttonsDiv = div.querySelector('.buttonsDiv')
    // console.log(buttonsDiv)
    div.addEventListener('mouseover', () => {
      buttonsDiv.classList.remove('hide')
    })
    div.addEventListener('mouseleave', () => {
      buttonsDiv.classList.add('hide')
    })
  })
}

export const accessKey = 'uVuCB7MqJE96NZEmciVwZlg4185EI7RY8BUy_DkvJfM'

export const fetchAndAssignImages = async () => {
  const main = document.querySelector('#main')
  main.innerHTML = ''
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=${30}&client_id=${accessKey}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    let images = await response.json()
    createCardsFromImages(images)
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

export const createCardsFromImages = (images) => {
  const main = document.querySelector('#main')

  images.forEach((image) => {
    const cardDiv = document.createElement('div')
    const cardImg = document.createElement('img')

    cardDiv.className = 'cardDiv'
    cardImg.className = 'cardImg'
    cardImg.src = image.urls.regular

    cardDiv.append(cardImg)
    main.append(cardDiv)
    createCardButtons(cardDiv)
  })
  showCardButtons()
}
