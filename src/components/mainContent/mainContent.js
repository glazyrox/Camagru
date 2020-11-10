import { CamagruComponent } from "../../core/CamagruComponent";

export class MainContent extends CamagruComponent {
    static className = 'content-container';

    toHTML() {
        return `
            <div class='camera-container'>

            </div>

            <div class='gallery-container'>
                <div class="photo-container container">
                    <span>вверх</span>
                    <div class='photo'>1</div>
                    <div class='photo'>2</div>
                    <div class='photo'>3</div>
                    <div class='photo'>4</div>
                    <div class='photo'>5</div>
                    <span>вниз</span>
                </div>
            </div>
        `;
    }
}