import {PolymerElement} from "@polymer/polymer";
import {mixinBehaviors} from "@polymer/polymer/lib/legacy/class.js";
import {IronValidatorBehavior} from "@polymer/iron-validator-behavior/iron-validator-behavior.js";

class MatchPasswordsValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement){
	// This validator only validates strings, and is only valid if
	// the value is "cat".
	static get properties() {
		return {
			password: {
				type: String
			}
		};
	}
  
	validate(value) {
		// Ignore if no confirm password was entered
		return !value || value === this.password;
	}
}
customElements.define("match-passwords-validator", MatchPasswordsValidator);