import './Search.css'
import {
  accessKey,
  createCardsFromImages,
  fetchAndAssignImages
} from '../Card/Card'
import { createNotification } from '../NoResultFound/NoResultFound'

export const createSearchElements = (parentElement) => {
  const searchInputDiv = document.createElement('div')
  const searchImg = document.createElement('img')
  const searchInput = document.createElement('input')
  const exitButton = document.createElement('button')
  const exitImg = document.createElement('img')

  searchImg.src = '/icons/magnify-grey.png'
  searchImg.alt = 'magnifying glass'
  searchImg.className = 'magnifyingGlass'
  exitButton.id = 'exitButton'
  exitImg.src = '/icons/simbolo-x.png'
  exitImg.alt = 'exit button'
  exitImg.className = 'exitImg'
  searchInputDiv.id = 'searchInputDiv'
  searchInput.id = 'searchInput'

  searchInputDiv.appendChild(searchImg)
  searchInputDiv.appendChild(searchImg)
  searchInputDiv.appendChild(searchInput)
  exitButton.append(exitImg)
  searchInputDiv.appendChild(exitButton)
  parentElement.append(searchInputDiv)
}

export const searchImages = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    let searchData = await response.json()
    console.log('it works' + searchData.results)

    if (searchData.results.length === 0) {
      createNotification()
      return []
    }

    createCardsFromImages(searchData.results)
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}

export const clearSearchBar = () => {
  const exitB = document.querySelector('#exitButton')
  const searchInput = document.querySelector('#searchInput')
  exitB.addEventListener('click', () => {
    fetchAndAssignImages()
    searchInput.value = ' '
  })
}
