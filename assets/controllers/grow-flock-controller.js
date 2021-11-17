import { Controller } from 'stimulus';

export default class extends Controller {
    static values = {
        animal: String
    }

    static targets = ['flock'];

    grow(event) {
        event.preventDefault();
        this.flockTarget.innerHTML = this.flockTarget.innerHTML + this.animalValue;
    }
}
