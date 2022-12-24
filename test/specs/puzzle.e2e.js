const puzzlePage = require('../../pageobjects/puzzle.page.js');
const generalPage = require('../../pageobjects/general.page.js');
const homePage = require('../../pageobjects/home.page.js');
const { sleep } = require('wd/lib/commands.js');

describe('The puzzle drag and drop', () => {
    beforeAll('click puzzle', async () => {
        await homePage.homeScreen.waitForDisplayed(5000)
        await generalPage.clickNav("puzzle")
        await puzzlePage.puzzleScreen.waitForDisplayed(5000)
    })
    it('Verify show congrats message if solve the puzzle', async () => {
        await puzzlePage.solveWithDragAndDropPuzzle("l1")
        await puzzlePage.solveWithDragAndDropPuzzle("l2")
        await puzzlePage.solveWithDragAndDropPuzzle("l3")
        await puzzlePage.solveWithDragAndDropPuzzle("c1")
        await puzzlePage.solveWithDragAndDropPuzzle("c2")
        await puzzlePage.solveWithDragAndDropPuzzle("c3")
        await puzzlePage.solveWithDragAndDropPuzzle("r1")
        await puzzlePage.solveWithDragAndDropPuzzle("r2")
        await puzzlePage.solveWithDragAndDropPuzzle("r3")
        await expect(await puzzlePage.congrastText).toBeDisplayed
    });
});