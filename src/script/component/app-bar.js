class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div id="appBar" class="app-bar">`;
    }
}

customElements.define("app-bar", AppBar);