import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@polymer/paper-styles/default-theme.js";

class PaperPasswordInput extends PolymerElement {
	static get template() {
		return html`
			<style>
				.visibility-icon {
					color: var(--disabled-text-color);
					/** Bottom align visibility button with input box */
					height: 32px;
					width: 32px;
					padding: 0 4px;
					margin-top: -6px;
				}
			</style>

			<paper-input
				id="input"
				type="[[_getType(visible)]]"
				value="{{value}}"
				label="[[label]]"
				name="[[name]]"
				maxlength="[[maxlength]]"
				disabled="[[disabled]]"
				readonly="[[readonly]]"
				required="[[required]]"
				autofocus="[[autofocus]]"
				auto-validate="[[autoValidate]]"
				allowed-pattern="[[allowedPattern]]"
				pattern="[[pattern]]"
				invalid="{{invalid}}"
				validator="[[validator]]"
				error-message="[[errorMessage]]"
				char-counter="[[charCounter]]"
			>
				<paper-icon-button slot="suffix" icon="[[_getIcon(visible)]]" on-tap="_toggleVisible" class="visibility-icon" tabindex="-1" alt="[[alt]]" aria-label="[[ariaLabel]]"> </paper-icon-button>
			</paper-input>
		`;
	}

	static get properties() {
		return {
			/**
			 * True if the content of the password field is visible
			 */
			visible: {
				type: Boolean,
				value: false
			},
			value: {
				type: String,
				notify: true
			},
			invalid: {
				type: Boolean,
				notify: true
			},
			label: {
				type: String
			},
			name: {
				type: String
			},
			disabled: {
				type: Boolean
			},
			required: {
				type: Boolean
			},
			readonly: {
				type: Boolean
			},
			autofocus: {
				type: Boolean
			},
			autoValidate: {
				type: Boolean
			},
			validator: {
				type: String
			},
			errorMessage: {
				type: String
			},
			charCounter: {
				type: Boolean
			},
			maxlength: {
				type: Number
			},
			allowedPattern: {
				type: String
			},
			pattern: {
				type: String
			},
			alt: {
				type: String
			},
			ariaLabel: {
				type: String
			}
		};
	}

	validate() {
		console.log("validate in password in put called");
		return this.$.input.validate();
	}
	_getIcon(visible) {
		return visible ? "icons:visibility" : "icons:visibility-off";
	}
	_getType(visible) {
		return visible ? "" : "password";
	}
	_toggleVisible() {
		this.visible = !this.visible;
	}
}

window.customElements.define("paper-password-input", PaperPasswordInput);
