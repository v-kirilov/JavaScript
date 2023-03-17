function extractText() {
    let uiElements = document.getElementById('items');
    let textAreaElement = document.getElementById('result');

    textAreaElement.textContent = uiElements.textContent;
}