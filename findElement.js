"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findElementWithText = exports.findElements = void 0;
function findElements(tagname) {
    const allElements = document.getElementsByTagName(`${tagname}`);
    const elementArray = Array.from(allElements);
    return elementArray;
}
exports.findElements = findElements;
function findElementWithText(tagname, text) {
    const allElements = findElements(tagname);
    const element = allElements.filter((element) => element.textContent === text);
    return element;
}
exports.findElementWithText = findElementWithText;
//# sourceMappingURL=findElement.js.map