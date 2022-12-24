const homePage = require('../../pageobjects/home.page.js');
const generalPage = require('../../pageobjects/general.page.js');
const formPage = require('../../pageobjects/forms.page.js');

describe('The form screen', () => {
    beforeAll('click forms', async () => {
        await homePage.homeScreen.waitForDisplayed(5000)
        await generalPage.clickNav("form")
        await formPage.formScreen.waitForDisplayed(5000)
    })
    it('Verify text result if input less 2 chars', async () => {
        const lessChar = "aa"
        await formPage.textInputField.setValue(lessChar)
        await expect(formPage.textResult).toHaveText(lessChar)
    })
    it('Verify text can not input more than 30 chars', async () => {
        await formPage.textInputField.setValue("gkjhkhkjhjkhkljhhh8ihiuhkjh8h899hhj")
        const text = await formPage.textResult.getText()
        await expect(text.length).toEqual(30)
    })
    it('Verify text result if input number only', async () => {
        const numberOnly = "01298210983908238"
        await formPage.textInputField.setValue(numberOnly)
        await expect(formPage.textResult).toHaveText(numberOnly)
    })
    it('Verify text result if input string only', async () => {
        const stringOnly = "sjkadkjakjdhjkshdjas"
        await formPage.textInputField.setValue(stringOnly)
        await expect(formPage.textResult).toHaveText(stringOnly)
    })
    it('Verify text result if input symbol only', async () => {
        const symbolOnly = "@#$@%#$^%&@&@$%@%#$%#__"
        await formPage.textInputField.setValue(symbolOnly)
        await expect(formPage.textResult).toHaveText(symbolOnly)
    })
    it('Verify toggle can turn on', async () => {
        await formPage.clickToggle("on")
        await expect(formPage.switchText).toHaveText("Click to turn the switch OFF")
    })
    it('Verify toggle can turn off', async () => {
        await formPage.clickToggle("off")
        await expect(formPage.switchText).toHaveText("Click to turn the switch ON")
    })
    it('Verify the text field is the same with the selected item', async () => {
        await formPage.dropdown.click()
        await formPage.listViewDialog.waitForDisplayed(5000)
        await formPage.chooseItemDropdown("Tanpa Biaya")
        await expect(formPage.dropdownText).toHaveTextContaining("Tanpa Biaya")
    })

});