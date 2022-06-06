import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  className: string;
  eventHandler: EventHandler;

  constructor(className: string, eventHandler: EventHandler) {
    this.className = className;
    this.eventHandler = eventHandler;
  }

  abstract createAction(): Function;

  bind() {
    const action = this.createAction();

    this.eventHandler.addEventListnerToClass(this.className, "click", action);
  }
}
