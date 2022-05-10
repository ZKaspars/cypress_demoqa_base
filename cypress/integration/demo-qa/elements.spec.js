import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonsPage from "../../pageObjects/ButtonsPage";
import LinksPage from "../../pageObjects/LinksPage";
import SelectablePage from "../../pageObjects/SelectablePage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });


      it("Filling in and validating Text Boxes", () => {
        cy.fixture("textBoxData").then((data) => {
          TextBoxPage.fullNameInputField.type(data.fullName);
          TextBoxPage.emailInputField.type(data.email);
          TextBoxPage.currentAddressInputField.type(data.currentAddress);
          TextBoxPage.permanentAddressInputField.type(data.permanentAddress);
          TextBoxPage.submitButton.click();
          TextBoxPage.paragraphName.should("contain", data.fullName);
          TextBoxPage.paragraphEmail.should("contain", data.email);
      
      TextBoxPage.paragraphName.should("exist").should('be.visible')
      .should('contain', data.fullName
      );
      TextBoxPage.paragraphEmail.should('contain', data.email
      );
      TextBoxPage.paragraphcurrentAddress.should('contain', data.currentAddress
      );
      TextBoxPage.paragraphPermanentAddress.should('contain', data.permanentAddress
      );
      TextBoxPage.paragraphEmail.should('contain', data.email
      );
    })
    });
  });
  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

  it("Click checkboxes - notes and general", () => {
      CheckBoxPage.expandButton.click();
      CheckBoxPage.CheckBoxTitles.contains("Notes").click();
      CheckBoxPage.CheckBoxTitles.contains("General").click();
      CheckBoxPage.checkedResults
      .should("contain", "notes")
      .should("contain", "general");
    });

    it("Click boxes - Office", () => {
        CheckBoxPage.expandButton.click();
        CheckBoxPage.CheckBoxTitles.contains('Office').click();
        CheckBoxPage.checkedResults
        .should("contain", "office")
        .should("contain", "public")
        .should("contain", "private")
        .should("contain", "classified")
        .should("contain", "general");
    });
});
context("Radio button scenarios", () => {
  beforeEach(() => {
    RadioButtonsPage.visit();
  });

it("Click radio buttons", () => {
  //Click - yes button
  RadioButtonsPage.yesButton.click({ force: true });
  // Validate yes is clicked
  RadioButtonsPage.resultsSection.should("contain", "Yes");
  // Click impressive button
  RadioButtonsPage.impressiveButton.click({ force: true });
  // Validate impressive is clicked
  RadioButtonsPage.resultsSection.should("contain", "Impressive");
  // no click
  RadioButtonsPage.noButton.should('exist').should('be.disabled');
  
});
  });

  context("Web tables scenarios", () => {
  beforeEach(() => {
    WebTablesPage.visit();
  });
  it("Open webtables", () => {
    //Click - add button
    WebTablesPage.newRecordButton.click();
    // input info
    WebTablesPage.firstNameField.type("Frrr");
    WebTablesPage.lastNameField.type("Ruuu");
    WebTablesPage.userEmailField.type("frrr.ruuu@gmail.com");
    WebTablesPage.ageField.type("22");
    WebTablesPage.salaryField.type("23000");
    WebTablesPage.departmentField.type("Somethin");
    //clicks submit
    WebTablesPage.submit.click();
    //validate new record
    WebTablesPage.findRow("frrr.ruuu@gmail.com").should(
      "contain",
      "Frrr"
    );
 
    
    });
    it("Delete all users", () => {
      WebTablesPage.rows.should("contain", "kierra@example.com");
      WebTablesPage.deleteUser("kierra@example.com");
      WebTablesPage.rows.should("not.contain", "kierra@example.com");
      WebTablesPage.rows.should("contain", "cierra@example.com");
      WebTablesPage.deleteUser("cierra@example.com");
      WebTablesPage.rows.should("not.contain", "cierra@example.com");
      WebTablesPage.rows.should("contain", "alden@example.com");
      WebTablesPage.deleteUser("alden@example.com");
      WebTablesPage.rows.should("not.contain", "alden@example.com");
    });
  });
    context("Buttons scenarios", () => {
      beforeEach(() => {
        ButtonsPage.visit();
      });
      it("Button clicking", () => {
        ButtonsPage.doubleClickButton.dblclick();
        ButtonsPage.doubleClickMsg
        .should("be.visible")
        .should("contain","You have done a double click")
        ButtonsPage.rightClickButton.rightclick();
        ButtonsPage.dynamicClickButton.click();
      });
    });

    context("Links", () => {
      beforeEach(() => {
        LinksPage.visit();
      });
      it("API intercepting", () => {
        cy.intercept('GET',"created", {statusCode: 200});
        LinksPage.createdLink.click();
        LinksPage.linkResponse.should("contain","200");
      });
    });

    context("Moodle Homework", () => {
      beforeEach(() => {
        SelectablePage.visit();
      });
      it("List page clicking", () => {
        

        SelectablePage.listItem.contains("Cras justo odio").click()
        SelectablePage.listItem.contains("Morbi leo risus").click()
        // validate active fields
        SelectablePage.listItem.contains("Cras justo odio")
        .should("have.class","active");
        SelectablePage.listItem.contains("Morbi leo risus")
        .should("have.class","active");
        // validate inactive fields
        SelectablePage.listItem.contains("Dapibus ac facilisis in")
        .should("not.have.class","active");
        SelectablePage.listItem.contains("Porta ac consectetur ac")
        .should("not.have.class","active");
      });
        it("Grid page clicking", () => {

        SelectablePage.gridButton.click();
        SelectablePage.listItem.contains("Two").click();
        SelectablePage.listItem.contains("Four").click();
        SelectablePage.listItem.contains("Six").click();
        SelectablePage.listItem.contains("Eight").click();
        // validate active fields
        SelectablePage.listItem.contains("Two")
        .should("have.class","active");
        SelectablePage.listItem.contains("Four")
        .should("have.class","active");
        SelectablePage.listItem.contains("Six")
        .should("have.class","active");
        SelectablePage.listItem.contains("Eight")
        .should("have.class","active");

          // validate inactive fields
        SelectablePage.listItem.contains("One")
        .should("not.have.class","active");
        SelectablePage.listItem.contains("Three")
        .should("not.have.class","active");
        SelectablePage.listItem.contains("Five")
        .should("not.have.class","active");
        SelectablePage.listItem.contains("Seven")
        .should("not.have.class","active");
        SelectablePage.listItem.contains("Nine")
        .should("not.have.class","active");
        
      });


    });
    

});
