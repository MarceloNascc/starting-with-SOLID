import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
    constructor(url: string, className: string, eventHandler: EventHandler){
        super(url, className, eventHandler);
    }

    createLink(): string {
        return `https://www.facebook.com/sharer.php?u=${this.url}`;
    }
}