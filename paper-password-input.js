import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@polymer/paper-styles/default-theme.js";


class PaperPasswordInput extends PolymerElement {
	static get template() { return html`
    
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
			invalid="{{invalid}}"
			validator="[[validator]]"
			error-message="[[errorMessage]]"
			char-counter="[[charCounter]]">
			<paper-icon-button
				slot="suffix"
				icon="[[_getIcon(visible)]]"
				on-tap="_toggleVisible"
				class="visibility-icon"
				tabindex="-1"
				alt="[[alt]]"
			></paper-icon-button>
		</paper-input>`;
	}

	static get properties() {
		return {
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
			label: String,
			name: String,
			disabled: Boolean,
			required: Boolean,
			readonly: Boolean,
			autofocus: Boolean,
			autoValidate: Boolean,
			validator: String,
			errorMessage: String,
			charCounter: Boolean,
			maxlength: Number,
			allowedPattern: String,
			alt: String,
		};
	}
    
	validate() {
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