import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['button'];

    sync(event) {
        this.buttonTarget.innerHTML = event.currentTarget.value || '☹️';
    }
}
