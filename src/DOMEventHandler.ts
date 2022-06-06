import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
  addEventListnerToClass(className: string, event: string, fn: Function) {
    const elements: any = document.querySelectorAll(className);

    for (const element of elements) {
      element.addEventListener(event, fn);
    }
  }
}
