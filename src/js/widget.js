import visa from '../img/visa.png'
import master from '../img/mastercard.png'
import mir from '../img/mir.svg'
import amex from '../img/american-express.png'
import discover from '../img/discover.png'
import jcb from '../img/jcb.png'
import diner from '../img/dinersclub.png'

import validate from "./validator";
import cardIdentity from "./сardidentity";

export class CardFormWidget {
    constructor(parentEl) {
        this.parentEl = parentEl

        this.onSubmit = this.onSubmit.bind(this);

    }

    static get markup() {
        return `
            <h3>Check your credit card number</h3>
            <div class="cards">
                <img src="${visa}" alt="visa" class="card visa">
                <img src="${master}" alt="master" class="card master">
                <img src="${mir}" alt="mir" class="card mir">
                <img src="${amex}" alt="american express" class="card amex">
                <img src="${discover}" alt="discover" class="card discover">
                <img src="${jcb}" alt="jcb" class="card jcb">
                <img src="${diner}" alt="diner" class="card diner">
            </div>
            <form class="card-form-widget">
                <div class="control">
                    <input id="card-input" class="input" type="text" placeholder="Credit card number">
                    <button class="submit">Click to Validate</button>
                </div>
                
            </form>
        `
    }

    static get submitSelector() {
        return '.submit';
    }

    static get inputSelector() {
        return '.input';
    }


    static get selector() {
        return '.card-form-widget';
    }

    bindToDom() {
        this.parentEl.innerHTML = CardFormWidget.markup

        this.element = this.parentEl.querySelector(CardFormWidget.selector);
        this.submit = this.element.querySelector(CardFormWidget.submitSelector);
        this.input = this.element.querySelector(CardFormWidget.inputSelector);


        this.element.addEventListener('submit', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();

        const value = this.input.value;
        const cardIdent = cardIdentity(value);

        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => card.classList.remove('active-card'));
        if (cardIdent !== '') {
            this.activeCard = document.querySelector(`.${cardIdent}`);
            this.activeCard.classList.add('active-card');
        }

        if (validate(value)) {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
        } else {
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
        }
    }

}