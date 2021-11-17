/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

const syncButton = (linkElement) => {
    document.querySelector('.js-custom-animal-target').innerHTML = linkElement.value || '☹️';
}
document.querySelector('.js-custom-animal').addEventListener('keyup', (event) => {
    syncButton(event.currentTarget);
});
document.querySelector('.js-custom-animal').addEventListener('change', (event) => {
    syncButton(event.currentTarget);
});
