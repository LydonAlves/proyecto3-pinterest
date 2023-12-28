import './style.css'
import { createHeader } from './src/components/Header/Header.js'

export const body = document.querySelector('body')

import { createMain } from './src/components/Main/Main.js'
const main = createMain()

import { fetchAndAssignImages } from './src/components/Card/Card.js'

import { searchImages, clearSearchBar } from './src/components/Search/Search'
async function loadModule() {
  const module = await import('./src/components/Search/Search')
  const searchImages = module.searchImages
  displayImages(searchImages)
}

document.addEventListener('DOMContentLoaded', () => {
  const queryInput = document.getElementById('searchInput')
  if (queryInput) {
    queryInput.addEventListener('change', () => {
      const main = document.querySelector('#main')
      main.innerHTML = ''
      const searchQuery = queryInput.value.trim()
      displayImages(searchQuery)
    })
  } else {
    console.error('"Search Input" not found')
  }
})

export const displayImages = async (searchQuery) => {
  if (!searchQuery) {
    fetchAndAssignImages()
  } else if (searchQuery !== '') {
    searchImages(searchQuery)
  }
}

clearSearchBar()
displayImages()
