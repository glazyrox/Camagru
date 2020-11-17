class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }

    on(action, listener) {
        console.log(action, listener);
        this.$el.addEventListener(action, listener);
    }

    clear() {
        this.html('');
        
        return this;
    }

    append(node) {
        if (Element.prototype.append) {
            this.$el.append(node.$el);
        } else {
            this.$el.appendChild(node);
        }
    }
}

export function $(selector) {

    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    const elem = document.createElement(tagName);
    
    if (classes) {
        elem.classList.add(classes);
    }

    return $(elem);
};