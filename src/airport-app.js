import { html, LitElement } from 'lit';
import './components/search/City-Form.js';
import './components/search/Airport-Display.js';
import { sharedStyles } from './styles/shared-styles.js';

function normalizeAirportResponse(data) {
  if (Array.isArray(data)) {
    return data;
  }

  // detect single airport object
  if (data && typeof data === 'object' && data.airport_name) {
    return [data];
  }

  return [];
}

export class AirportApp extends LitElement {
  static properties = {
    airports: { type: Array || undefined },
    loading: { type: Boolean },
    error: { type: String },
  };

  constructor() {
    super();
    this.airports = undefined;
    this.loading = false;
    this.error = '';
  }

  static styles = [sharedStyles];

  async fetchAirports(field, value) {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch(
        `https://aerokey-api.vercel.app/v1/airports/${encodeURIComponent(field)}/${encodeURIComponent(value)}`,
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();

      this.airports = normalizeAirportResponse(data);
    } catch (err) {
      this.error = 'Failed to load data';
      this.airports = [];
    } finally {
      this.loading = false;
    }
  }

  render() {
    return html`
      <h1>Airport finder</h1>
      <city-form
        @city-submitted=${e =>
          this.fetchAirports(e.detail.field, e.detail.value)}
      ></city-form>
      ${this.loading ? html`<div class="loader">Loading...</div>` : ''}

      <airport-display .airports=${this.airports}></airport-display>
    `;
  }
}
