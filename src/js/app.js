import {CardFormWidget} from "./widget.js";


const container = document.querySelector('.container');
const form = new CardFormWidget(container);

form.bindToDom()