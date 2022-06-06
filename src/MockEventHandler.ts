import EventHandler from "./EventHandler";

export default class MockEventHandler implements EventHandler {
  addEventListnerToClass(className: string, event: string, fn: Function) {
    console.log(className, event, fn);
  }
}
