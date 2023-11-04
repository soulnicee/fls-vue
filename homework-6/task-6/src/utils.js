export default function onKeyDown(event) {
  const key = event.key
  const isDigit = key >= '0' && key <= '9'
  const isBackspace = key === 'Backspace'
  if (!isDigit && !isBackspace) {
    event.preventDefault()
  }
}