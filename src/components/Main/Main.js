import './Main.css'

export const createMain = () => {
  const main = document.createElement('main')
  main.id = 'main'
  main.className = 'grid-container'
  document.body.append(main)
}
