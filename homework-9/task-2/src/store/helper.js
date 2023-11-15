// export function isCorrespondToFilter(company, filterObj) {
// for (const props in filterObj) {
//   if( filterObj[props] && filterObj[props]!==company[props]) return false
// }
// return true
// }


export var isCorrespondToFilter = (company, filterObj) => Object.keys(filterObj).every(prop => !filterObj[prop] || filterObj[prop] === company[prop])
