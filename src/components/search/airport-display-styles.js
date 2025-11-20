import { css } from 'lit';

export const airportDisplayStyles = css`
  .airport-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    padding: 16px 0;
    justify-items: center;
  }

  .airport-card {
    width: 100%;
    max-width: 320px;
    background: #ffffff;
    border-radius: 14px;
    padding: 20px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .airport-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }

  .airport-card h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }

  .airport-section {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .airport-section:last-child {
    border-bottom: none;
  }

  .airport-section p {
    margin: 0;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #555;
  }

  .airport-section p .label {
    font-weight: 600;
    color: #222;
  }

  .airport-section p .value {
    font-weight: 400;
    color: #333;
  }

  .airport-section.traffic p {
    color: #0b76ef;
    font-weight: 600;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    .airport-grid {
      grid-template-columns: 1fr;
      padding: 0;
    }

    .airport-card {
      max-width: 100%;
    }
  }
`;
