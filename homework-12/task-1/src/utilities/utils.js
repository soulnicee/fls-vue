export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0
}

// export function filterList(elementsList, elementId, filteredList) {
//   let professionId = elementsList.find((item) => item.id === elementId).professionId
//   return filteredList.filter((item) => item.professionId === professionId)
// }

export function filterList(elementsList, elementId, filteredList, idField = 'id', professionIdField = 'professionId') {
  const element = elementsList.find((item) => item[idField] === elementId)
  const professionId = element ? element[professionIdField] : null
  return professionId ? filteredList.filter((item) => item[professionIdField] === professionId) : filteredList
}