import BasePage from "./BasePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullNameInputField() {
    return cy.get("#userName");
  }
  static get emailInputField() {
    return cy.get("#userEmail");
  }
  static get currentAddressInputField() {
    return cy.get("textarea[id='currentAddress']");
  }
  static get permanentAddressInputField() {
    return cy.get("textarea#permanentAddress");
  }
  static get submitButton() {
    return cy.get("#submit");
  }
  static get paragraphName() {
    return cy.get("#name");
  }
  static get paragraphEmail() {
    return cy.get("p#email");
  }
  static get paragraphcurrentAddress() {
    return cy.get("p#currentAddress");
  }
  static get paragraphPermanentAddress() {
    return cy.get("p#permanentAddress");
  }
}



export default TextBoxPage;
