import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonLinkedIn from './ShareButtonLinkedIn';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonPrint from './ShareButtonPrint';
import AbstractShareButton from './AbstractShareButton';
// import DOMEventHandler from './DOMEventHandler';
import MockEventHandler from './MockEventHandler';

// const eventHandler = new DOMEventHandler();
const eventHandler = new MockEventHandler();

const shareButtonTwitter: AbstractShareButton = new ShareButtonTwitter('http://www.linkedin.com/in/j-marcelo-nascimento', '.btn-twitter', eventHandler);
shareButtonTwitter.bind();

const shareButtonFacebook: AbstractShareButton = new ShareButtonFacebook('http://www.linkedin.com/in/j-marcelo-nascimento', '.btn-facebook', eventHandler);
shareButtonFacebook.bind();

const shareButtonLinkedIn: AbstractShareButton = new ShareButtonLinkedIn('http://www.linkedin.com/in/j-marcelo-nascimento', '.btn-linkedin', eventHandler);
shareButtonLinkedIn.bind();

const shareButtonPrint: AbstractShareButton = new ShareButtonPrint('.btn-print', eventHandler);
shareButtonPrint.bind();