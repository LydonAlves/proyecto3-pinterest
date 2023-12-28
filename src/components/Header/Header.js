import './Header.css'
import { ButtonWithText, ButtonWithImage } from '../Button/Button'
import { CreateSearchElements } from '../Search/Search'
const Search = CreateSearchElements

export const CreateHeader = () => {
  const Header = document.createElement('header')
  const HeaderDiv = document.createElement('div')
  const LeftButtonsDiv = document.createElement('div')
  const SearchDiv = document.createElement('div')
  const RightButtonsDiv = document.createElement('div')

  Header.id = 'Header'
  HeaderDiv.id = 'HeaderDiv'
  LeftButtonsDiv.id = 'LeftButtonsDiv'
  SearchDiv.id = 'SearchDiv'
  RightButtonsDiv.id = 'RightButtonsDiv'

  HeaderDiv.append(LeftButtonsDiv)
  HeaderDiv.append(SearchDiv)
  HeaderDiv.append(RightButtonsDiv)
  Header.append(HeaderDiv)
  document.body.appendChild(Header)
}
CreateHeader()
const LeftDiv = document.querySelector('#LeftButtonsDiv')
// console.log(LeftDiv)
LeftDiv.innerHTML = `
${ButtonWithImage({
  size: 'm',
  imageUrl: './public/icons/logo-pinterest.png'
})}
${ButtonWithText({ texto: 'Home' })}
${ButtonWithText({ texto: 'Create' })} 
 `

const RightDiv = document.querySelector('#RightButtonsDiv')
RightDiv.innerHTML = `
${ButtonWithImage({
  size: 'm',
  imageUrl: './public/icons/notification.png'
})}
${ButtonWithImage({
  size: 'm',
  imageUrl: './public/icons/chat.png'
})}
${ButtonWithImage({
  size: 'm',
  imageUrl: './public/icons/dots.png'
})}
${ButtonWithImage({
  size: 'm',
  imageUrl: './public/icons/dropDown.png'
})}
`
const SearchDiv = document.querySelector('#SearchDiv')
CreateSearchElements(SearchDiv)
