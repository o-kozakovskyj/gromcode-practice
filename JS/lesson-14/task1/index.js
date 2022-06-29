let message = 'just learn it'
export function sendMessage(name) {
  console.log(`${name}, ${message}! Your Gromcode`)
}
export function setMessage(text) {
  message = text
}
sendMessage('Ann')
setMessage('Good job')
sendMessage('Ann')
