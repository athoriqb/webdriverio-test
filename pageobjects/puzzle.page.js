class puzzlePage{
    get puzzleScreen() {return $("~Drag-drop-screen")}
    get congrastText() {return $("//*[@text='Congratulations']")}

    async solveWithDragAndDropPuzzle(codeBox){
        const eleDrag = await $("//*[@content-desc='drag-"+codeBox+"']")
        const eleDrop = await $("//*[@content-desc='drop-"+codeBox+"']")
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, origin: eleDrag.elementId  },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 250, origin: eleDrop.elementId  },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
        await driver.pause(1000);
    }
}
module.exports = new puzzlePage()