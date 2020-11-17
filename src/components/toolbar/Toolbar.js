import { CamagruComponent } from "../../core/CamagruComponent";

export class Toolbar extends CamagruComponent {
    constructor($root) {
        super($root, {
            name: 'toolbar',
            listeners: ['click']
        });


    }
    static className = 'toolbar';

    onClick(event) {
        console.log(event);
    }

    toHTML() {
        return `
            <div class='flex center-content toolbar_buttons container'>
                <span>Настройки</span>
                <span>Выйти</span>
            </div>
        `;
    }
}