import { css } from 'lit-element';

export default css`
  :host {
    --buttonBlue: #194880;
    --white: #fff;
    --textColor: #333;

    --iconFillColor: var(--white);
    --linkColor: var(--white);
  }
  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    // height: 44px;
    display: inline;
    vertical-align: middle;
  }

  .button span {
    display: block;
  }

  .button {
    border-radius: 3px;
    text-decoration: none;
    display: inline-block;
    font-size: 14px; 
    font-family: 'Helvetica Neue';
    border: 1px solid var(--textColor);
    color: var(--textColor);
    outline: none;
    cursor: pointer;
    padding: 5px 5px 0 5px;
    // padding: 5px;
    // margin-left: 5px;
  }
  a {
    text-decoration: none;
    pointer: cursor;
  }
  .hidden {
    display: none;
  }
  svg {
    height: 18px;
    width: 18px;
  }
  @media (max-width: 767px) {
    .button span {
      display: none;
    }
  }
`;
