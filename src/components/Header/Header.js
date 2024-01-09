import './Header.css'
import { buttonWithText, buttonWithImage } from '../Button/Button'
import { createSearchElements } from '../Search/Search'
const search = createSearchElements

export const createHeader = () => {
  const header = document.createElement('header')
  const headerDiv = document.createElement('div')
  const leftButtonsDiv = document.createElement('div')
  const searchDiv = document.createElement('div')
  const rightButtonsDiv = document.createElement('div')

  header.id = 'header'
  headerDiv.id = 'headerDiv'
  leftButtonsDiv.id = 'leftButtonsDiv'
  searchDiv.id = 'searchDiv'
  rightButtonsDiv.id = 'rightButtonsDiv'

  headerDiv.append(leftButtonsDiv)
  headerDiv.append(searchDiv)
  headerDiv.append(rightButtonsDiv)
  header.append(headerDiv)
  document.body.appendChild(header)
}
createHeader()

const leftDiv = document.querySelector('#leftButtonsDiv')
leftDiv.innerHTML = `
${buttonWithImage({
  size: 'm',
  imageUrl: '/icons/logo-pinterest.png'
})}
${buttonWithText({ texto: 'Home' })}
${buttonWithText({ texto: 'Create' })} 
 `

const rightDiv = document.querySelector('#rightButtonsDiv')
rightDiv.innerHTML = `
${buttonWithImage({
  size: 'm',
  imageUrl: '/icons/notification.png'
})}
${buttonWithImage({
  size: 'm',
  imageUrl: '/icons/chat.png'
})}
${buttonWithImage({
  size: 'm',
  imageUrl: '/icons/dots.png'
})}
${buttonWithImage({
  size: 'm',
  imageUrl: '/icons/dropDown.png'
})}
`
const searchDiv = document.querySelector('#searchDiv')
createSearchElements(searchDiv)
