export function updateElement(elementsList, newElement) {
  let elementToUpdateIndex = elementsList.findIndex((item) => item.id === newElement.id)
  elementsList[elementToUpdateIndex] = newElement
}

export const transformElementsListByProfessionId = (elementsList, getProfessionById) => elementsList.map((item) => ({
  ...item,
    profession: getProfessionById(item.professionId)
}))

export const getElementById = (elementsList, elementId) => elementsList.find((item) => item.id === elementId)


export function deleteElement(elementsList, elementId) {
  return elementsList.filter((item) => item.id !== elementId)
}
