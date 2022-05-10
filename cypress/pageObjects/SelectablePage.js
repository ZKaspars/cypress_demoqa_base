import BasePage from "./BasePage";

class SelectablePage extends BasePage {
    static get url() {
      return "/selectable";
    }

    static get resultsSection() {
        return cy.get(".text-success");
    }
    static get listItem() {
        return cy.get(".list-group-item");
    }
    static get gridButton() {
        return cy.get("a#demo-tab-grid");
    }
}


export default SelectablePage;
