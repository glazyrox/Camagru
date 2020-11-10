import { CamagruComponent } from "../../core/CamagruComponent";

export class Header extends CamagruComponent {
    static className = 'header';

    toHTML() {
        return `
            <div class='flex center-content toolbar_buttons container'>
                <span>Настройки</span>
                <span>Выйти</span>
            </div>
        `;
    }
}