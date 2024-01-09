import './NoResultFound.css'

export const createNotification = () => {
  const main = document.querySelector('main')
  const notificationDiv = document.createElement('div')
  const notification = document.createElement('h2')

  notificationDiv.className = 'notificationDiv'
  notification.innerText = 'No results have been found'
  notification.className = 'notification'

  notificationDiv.append(notification)
  main.append(notificationDiv)
}
