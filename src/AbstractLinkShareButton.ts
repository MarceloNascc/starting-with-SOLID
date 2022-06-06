import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
  url: string;

  constructor(url: string, className: string, eventHandler: EventHandler) {
    super(className, eventHandler);

    this.url = url;
  }

  abstract createLink(): string;

  createAction(): Function {
    const link = this.createLink();

    return () => window.open(link);
  }
}
