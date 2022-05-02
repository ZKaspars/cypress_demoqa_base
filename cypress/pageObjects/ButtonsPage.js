import BasePage from "./BasePage";


class ButtonsPage extends BasePage {
    static get url() {
      return "/buttons";
    }
    static get exampleElement() {
      return cy.get("exampleSelector");
    }
    static get doubleClickButton() {
        return cy.get("#doubleClickBtn");
      }
    static get rightClickButton() {
        return cy.get("#rightClickBtn");
      }
    static get doubleClickButton() {
        return cy.get("#doubleClickBtn");
      }
      static get dynamicClickButton() {
        return cy.get(".btn-primary").contains(/^Click Me/);
      }
    static get doubleClickMsg() {
        return cy.get("#doubleClickMessage");
    }
    static get rightClickMsg() {
        return cy.get("#rightClickMessage");
    }
    
}


export default ButtonsPage;
