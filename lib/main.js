/*jslint browser: true*/
// see: https://developers.google.com/web/fundamentals/web-components/customelements
class PPNav extends HTMLElement {
    constructor() {
        // always call super first
        super();
        this.attachShadow({mode: 'open'});
    }
    get base() {
        return this._base;
    }
    set base(val) {
        if (!/\/$/.test(val)) {
            val += '/';
        }
        this._base = val;
    }
    get data() {
        return data;
    }
    set data(val) {
        if (typeof val === 'string') {
            val = JSON.parse(val);
        }
        this._data = val;
        this.render();
    }
    render () {
        if (this.ul) {
            this.ul.innerHTML = '';
            this._data.forEach(item => {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.innerHTML = item.title;
                a.href = item.url;
                li.appendChild(a);
                this.ul.appendChild(li);
            });
        }
    }
    connectedCallback() {
        this._data = [];
        this._base = '/';
        if (this.hasAttribute('data')) {
            this.data = this.getAttribute('data');
        }
        if (this.hasAttribute('base')) {
            this.base = this.getAttribute('base');
        }
        this.ul = document.createElement('ul');
        this.img = document.createElement('img');
        this.img.className = 'pp-nav-logo';
        this.img.src = this._base + 'img/logo.svg';
        this.shadowRoot.innerHTML = `<style>@import "${this._base}css/main.css";</style>`;
        this.shadowRoot.appendChild(this.img);
        this.shadowRoot.appendChild(this.ul);
        this.render();
    }
    disconnectedCallback() {
        // fires when the component is removed from the dom
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        // fires when an attribute has been changed
        this[attrName] = newVal;
    }
    adoptedCallback() {
        // fires when the element has been moved into a new document
    }
}
customElements.define('pp-nav', PPNav);
if (window.define) {
    define([], function () {
        return PPNav;
    });
}
