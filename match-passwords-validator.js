import {PolymerElement, html} from "@polymer/polymer";
import {mixinBehaviors} from "@polymer/polymer/lib/legacy/class.js";
import {IronValidatorBehavior} from "@polymer/iron-validator-behavior/iron-validator-behavior.js";
import {IronMeta} from "@polymer/iron-meta/iron-meta.js";

class MatchPasswordsValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement){
	// This validator only validates strings, and is only valid if
	// the value is "cat".
	static get is() { return "match-passwords-validator"; }

	static get properties() {
		return {
			password: {
				type: String
			}
		};
	}

	// connectedCallback()
	// {
	// 	super.connectedCallback();
    
	// 	var validatorName = MatchPasswordsValidator.is;
    
	// 	if (this.name)
	// 	{
	// 		validatorName = this.name;
	// 	}
    
	// 	new IronMeta({ type: "validator", key: validatorName, value: this });
	// }
  
	validate(value) {
		console.log("validate in validator called");
		// Ignore if no confirm password was entered
		return !value || value === this.password;
	}
}
customElements.define(MatchPasswordsValidator.is, MatchPasswordsValidator);