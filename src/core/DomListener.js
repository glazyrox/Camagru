import { capitalize } from "./utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root');
        }

        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            this.$root.on(listener, this[method]?.bind(this));
        });
    }
    
    removeDOMListeners() {
        console.log('removeList'); // realize it!
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}