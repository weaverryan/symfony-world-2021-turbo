// assets/controllers/grow-flock-controller.js
import { Controller } from 'stimulus';
import { render } from 'react-dom';
import { PrintMessage } from '../components/PrintMessage';
import React from 'react';

export default class extends Controller {
    static values = {
        message: String
    }

    connect() {
        render(
            <PrintMessage message={this.messageValue} />,
            this.element
        );
    }
}
