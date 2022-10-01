export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
    return true;
}
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null, null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFFLFNBQWlCLEVBQUUsSUFBWTtJQUMxRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQztBQVlELE1BQU0sVUFBVSxXQUFXLENBQUUsT0FBb0IsRUFBRSxNQUFrQjtJQUNuRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFFcEIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ25CLFdBQVcsR0FBRzsrQ0FDNkIsT0FBTyxDQUFDLElBQUk7YUFDOUMsT0FBTyxDQUFDLElBQUk7eUNBQ2dCLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksS0FBSSxTQUFTOztLQUU3RCxDQUFBO0tBQ0Y7SUFFRCxXQUFXLENBQ1QsYUFBYSxFQUNiLFdBQVcsQ0FDWixDQUFBO0lBRUQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQzNELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixNQUFNLENBQUMsT0FBTyxHQUFHO1lBQ2YsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUM1QyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDakI7WUFDRCxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQTtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZW5kZXJCbG9jayAoZWxlbWVudElkOiBzdHJpbmcsIGh0bWw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKVxuICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxcbiAgcmV0dXJuIHRydWVcbn1cblxudHlwZSBNZXNzYWdlVHlwZSA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbnR5cGUgQWN0aW9uVHlwZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBoYW5kbGVyOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9hc3QgKG1lc3NhZ2U6IE1lc3NhZ2VUeXBlLCBhY3Rpb246IEFjdGlvblR5cGUpIHtcbiAgbGV0IG1lc3NhZ2VUZXh0ID0gJydcbiAgXG4gIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICBtZXNzYWdlVGV4dCA9IGBcbiAgICAgIDxkaXYgaWQ9XCJpbmZvLWJsb2NrXCIgY2xhc3M9XCJpbmZvLWJsb2NrICR7bWVzc2FnZS50eXBlfVwiPlxuICAgICAgICA8cD4ke21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8ICfQl9Cw0LrRgNGL0YLRjCd9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cbiAgXG4gIHJlbmRlckJsb2NrKFxuICAgICd0b2FzdC1ibG9jaycsXG4gICAgbWVzc2FnZVRleHRcbiAgKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1tYWluLWFjdGlvbicpXG4gIGlmIChidXR0b24gIT0gbnVsbCkge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYWN0aW9uICE9IG51bGwgJiYgYWN0aW9uLmhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICBhY3Rpb24uaGFuZGxlcigpXG4gICAgICB9XG4gICAgICByZW5kZXJUb2FzdChudWxsLCBudWxsKVxuICAgIH1cbiAgfVxufSJdfQ==