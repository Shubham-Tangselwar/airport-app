import { LitElement, html } from 'lit';
import { airportDisplayStyles } from './airport-display-styles.js';
import { sharedStyles } from '../../styles/shared-styles.js';

export class AirportDisplay extends LitElement {
  static properties = {
    airports: { type: Array || undefined },
  };

  constructor() {
    super();
    this.airports = undefined;
  }

  static styles = [sharedStyles, airportDisplayStyles];

  render() {
    if (this.airports === undefined) {
      return html` <div class="empty-state">Enter the search text.</div> `;
    }

    if (this.airports.length === 0) {
      return html`
        <div class="empty-state">
          No airports found. Try a different filter and context.
        </div>
      `;
    }

    return html`
      <div class="airport-grid">
        ${this.airports.map(
          airport => html`
            <div class="airport-card">
              <!-- Airport Name -->
              <h3>${airport.airport_name}</h3>

              <!-- Basic Info Section -->
              <div class="airport-section">
                <p>
                  <span class="label">IATA:</span>
                  <span class="value">${airport.airport_code}</span>
                </p>
                <p>
                  <span class="label">Type:</span>
                  <span class="value">${airport.airport_type}</span>
                </p>
              </div>

              <!-- Location Section -->
              <div class="airport-section">
                <p>
                  <span class="label">City:</span>
                  <span class="value">${airport.city_name}</span>
                </p>
                <p>
                  <span class="label">State:</span>
                  <span class="value"
                    >${airport.state_name} (${airport.state_code})</span
                  >
                </p>
                <p>
                  <span class="label">Pincode:</span>
                  <span class="value">${airport.pincode}</span>
                </p>
              </div>

              <!-- Traffic Section -->
              <div class="airport-section traffic">
                <p>
                  <span class="label">Daily Travelers:</span>
                  <span class="value"
                    >${airport.daily_travelers.toLocaleString()}</span
                  >
                </p>
              </div>
            </div>
          `,
        )}
      </div>
    `;
  }
}

customElements.define('airport-display', AirportDisplay);
