class formPage {
    get formScreen() {return $("~Forms-screen")}
    get textInputField() {return $("~text-input")}
    get textResult() {return $("~input-text-result")}
    get switchToggle() {return $("~switch")}
    get switchText() {return $("~switch-text")}
    get dropdown() {return $("//*[@resource-id='android_touchable_wrapper']")}
    get listViewDialog() {return $("//*[contains(@resource-id,'select_dialog_listview')]")}
    get dropdownText() {return $("//*[@resource-id='android_touchable_wrapper']//android.widget.EditText")}

    clickToggle(status){
        if (status.toUpperCase() == this.#getToggleText) {
            console.log("Toggle already " + toggleText)
        } else {
            this.switchToggle.click()
        }
    }

    async chooseItemDropdown(text){
        const listItem = "//*[contains(@resource-id,'text1') and contains(@text,'"+text+"')]"
        await $(listItem).click()
    }

    #getToggleText(){ 
        return this.switchToggle.getText()
    }
}
module.exports = new formPage()
