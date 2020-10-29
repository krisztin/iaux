import { html } from 'lit-element';
import TrackedElement from './tracked-element'
import shareIcon from '../assets/icons/icon-share';
import shareButtonCSS from '../assets/styles/css-share-button';

class ShareButton extends TrackedElement {
  static get styles() {
    return shareButtonCSS;
  }

  static get properties() {
    return {
      identifier: { type: String },
    };
  }

  constructor() {
    super();
    this.identifier = '';
  }

  render() {
    return html`
      <div class="grid-item">
        <button id='share-button'
          class='button share-button grid-item'
          type='button'
          onclick='return AJS.modal_go(this, {ignore_lnk:1, shown:AJS.embed_codes_adjust})'
          data-target='#cher-modal'
          data-toggle='tooltip'
          data-container='body'
          data-placement='bottom'
          data-original-title='Share this item'
          aria-haspopup='true'>
          ${shareIcon} <span>Share</span>
        </button>
      </div>
    `;
  }
}

customElements.define('share-button', ShareButton);
