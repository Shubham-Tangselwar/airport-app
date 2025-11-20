import { css } from 'lit';

export const formStyles = css`
  .filter-form {
    display: flex;
    gap: 12px;
    align-items: flex-end; /* align input + button baseline */
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .filter-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .filter-field label {
    font-weight: 600;
    font-size: 14px;
    color: #222;
  }

  select {
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #007bff;
    font-size: 14px;
    background: #fff;
    color: #222;
    min-width: 140px;
  }

  lion-input {
    width: 220px;
  }
  input {
    padding: 10px;
    border: 2px solid #007bff;
    border-radius: 8px;
  }
  .mod-button {
    padding: 12px 20px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }

  .mod-button:disabled {
    background: #a0c4ff;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    .filter-form {
      flex-direction: column;
      align-items: stretch;
    }

    lion-input,
    select,
    .mod-button {
      width: 100%;
    }
  }
`;
