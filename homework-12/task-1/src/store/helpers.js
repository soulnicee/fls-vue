export function updateElement(elementsList, newElement) {
  let elementToUpdateIndex = elementsList.findIndex((item) => item.id === newElement.id)
  elementsList[elementToUpdateIndex] = newElement
}