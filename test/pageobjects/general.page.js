class generalPage {
    get homeNav() {return $("~Home")}
    get webviewNav() {return $("~Webview")}
    get formNav() {return $("~Forms")}
    get puzzleNav() {return $("~Drag")}

    clickNav(navigation) {
        switch (navigation.toLowerCase()) {
            case "home":
                this.homeNav.click()
                break;
            case "webview":
                this.webviewNav.click()
                break;
            case "form":
                this.formNav.click()
                break;
            case "puzzle":
                this.puzzleNav.click()
                break;
            default:
                throw "the navigation " + navigation + " not found"
        }
    }
}
module.exports = new generalPage()
