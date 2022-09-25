export function findElements(tagname: string) {
  const allElements: HTMLCollectionOf<Element> = document.getElementsByTagName(`${tagname}`)
  const elementArray: Element[] = Array.from(allElements)
  return elementArray
}

export function findElementWithText(tagname: string, text: string) {
  const allElements: Element[] = findElements(tagname)
  const element: Element[] = allElements.filter((element) => element.textContent === text)
  return element
}