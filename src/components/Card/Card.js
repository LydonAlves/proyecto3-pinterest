import './Card.css'
import { buttonWithText, buttonWithImage } from '../Button/Button'

const createCardButtons = (parent) => {
  const topButtonsDiv = document.createElement('div')
  const profileDiv = document.createElement('div')
  const bottomButtonsDiv = document.createElement('div')

  topButtonsDiv.id = 'topButtonsDiv'
  topButtonsDiv.innerHTML = `
  ${buttonWithText({ texto: 'Save', size: 's' })}
  `

  profileDiv.id = 'profileDiv'
  profileDiv.innerHTML = `
  ${buttonWithText({ texto: 'Profile', size: 's' })}
  ${buttonWithImage({
    size: 's',
    imageUrl: './public/icons/dropDown.png'
  })}
  `

  bottomButtonsDiv.id = 'bottomButtonsDiv'
  bottomButtonsDiv.innerHTML = `
${buttonWithImage({
  imageUrl: './public/icons/upload.png'
})}
${buttonWithImage({
  imageUrl: './public/icons/dots.png'
})}
`
  topButtonsDiv.append(profileDiv)
  parent.append(topButtonsDiv)
  parent.append(bottomButtonsDiv)
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

    // cardDiv.addEventListener('mouseenter', () => {
    //   console.log('Mouse entered')
    //   topButtons.classList.add('hide')
    // })
    // cardDiv.addEventListener('mouseleave', () => {
    //   console.log('Mouse left')
    //   topButtons.classList.remove('hide')
    // })

    cardDiv.append(cardImg)
    main.append(cardDiv)
    createCardButtons(cardDiv)
  })
}
