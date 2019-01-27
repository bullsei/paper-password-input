import {PolymerElement} from "@polymer/polymer";
import {mixinBehaviors} from "@polymer/polymer/lib/legacy/class.js";
import {IronValidatorBehavior} from "@polymer/iron-validator-behavior/iron-validator-behavior.js";

class MatchPasswordsValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement){
	// This validator only validates strings, and is only valid if
	// the value is "cat".
	static get properties() {
		return {
			password: String
		};
	}
  
	validate(value) {
		return value === "cat";
	}
}
customElements.define("match-passwords-validator", MatchPasswordsValidator);