import { LitElement, html } from 'lit';
import '@lion/input/define';
import '@lion/button/define';
import '@lion/select/define';
import { formStyles } from '../../styles/form-styles.js';

export class CityForm extends LitElement {
  static properties = {
    filterField: { type: String },
    filterValue: { type: String },
  };

  constructor() {
    super();
    this.filterField = 'city'; // default selected field
    this.filterValue = '';
  }

  static styles = [formStyles];

  handleFieldChange(e) {
    this.filterField = e.target.value;
    this.filterValue = '';
  }

  handleInput(e) {
    this.filterValue = e.target.modelValue;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.filterValue.trim()) return;

    this.dispatchEvent(
      new CustomEvent('city-submitted', {
        detail: {
          field: this.filterField,
          value: this.filterValue,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const isDisabled = !this.filterValue.trim();

    return html`
      <form @submit=${this.handleSubmit} class="filter-form">
        <div class="filter-field">
          <label for="filter-select">Filter by:</label>
          <select
            id="filter-select"
            @change=${this.handleFieldChange}
            .value=${this.filterField}
          >
            <option value="name">Airport Name</option>
            <option value="city">City</option>
            <option value="state">State</option>
            <option value="statecode">State Code</option>
          </select>
        </div>

        <lion-input
          label="Enter value"
          .modelValue=${this.filterValue}
          @model-value-changed=${this.handleInput}
          required
        ></lion-input>

        <lion-button-submit
          class="mod-button"
          type="submit"
          ?disabled=${isDisabled}
        >
          Search
        </lion-button-submit>
      </form>
    `;
  }
}

customElements.define('city-form', CityForm);
