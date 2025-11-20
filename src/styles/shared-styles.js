import { css } from 'lit';

export const sharedStyles = css`
  /* Host element styling */
  :host {
    display: block;
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    color: #333;
    font-size: 28px;
    margin-bottom: 24px;
  }

  /* Cards general */
  .card {
    background: #ffffff;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    margin-bottom: 16px;
    box-sizing: border-box;
  }

  .text-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #222;
  }

  .text-small {
    font-size: 14px;
    color: #555;
    margin: 2px 0;
  }

  p {
    margin: 4px 0;
    font-size: 14px;
    color: #444;
  }

  strong {
    color: #000;
    margin-right: 4px;
  }

  /* Loader */
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    font-size: 16px;
    color: #666;
    padding: 24px 0;
  }

  /* Buttons */
  lion-button {
    cursor: pointer;
    margin-top: 12px;
  }
`;
