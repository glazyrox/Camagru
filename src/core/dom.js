class Dom {
    constructor(selector) {
        this.$el = typeof(selector) === 'string' 
        ? document.querySelector(selector)
        : selector;
    }

    html(html) {
        if (typeof(html) === 'string') {
            this.$el.innerHTML = html;

            return this;
        }

        return this.$el.outerHTL.trim();
    }

   clear(params) {
        this.html('');

        return this;
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }
    
    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }
        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
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