import BasePage from "./BasePage";

class WebTablesPage extends BasePage {
    static get url() {
      return "/webtables";
    }
    static get exampleElement() {
      return cy.get("exampleSelector");
    }
    static get newRecordButton() {
        return cy.get("#addNewRecordButton");
    }
    static get firstNameField() {
        return cy.get("#firstName");
    }
    static get lastNameField() {
        return cy.get("#lastName");
    }
    static get userEmailField() {
        return cy.get("#userEmail");
    }
    static get ageField() {
        return cy.get("#age");
    }
    static get salaryField() {
        return cy.get("#salary");
    }
    static get departmentField() {
        return cy.get("#department");
    }
    static get submit() {
        return cy.get("#submit");
    }
    static get rows() {
        return cy.get("[role = 'rowgroup']");
    }
    static deleteUser (value) {
        return this.findRow(value).find("[title='Delete']").click();
    }
    static findRow(value) {
        return this.rows.contains(value).parent();
    }
}


export default WebTablesPage;
