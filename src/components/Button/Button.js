import './Button.css'

export const buttonWithText = ({
  texto = 'Write here',
  size = 'm',
  importance = 'primary'
}) => {
  return `<button class="buttonWithText ${size} ${importance}"
  }>${texto}</button>`
}

export const buttonWithImage = ({ size, imageUrl }) => {
  return `<button class="buttonWithImage ${size}"><img src= ${imageUrl} alt="Button Image" class="imgButton" /></button>`
}
