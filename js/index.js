import burgerMenu from "./burgerMenu.js";
import closeModal from "./displayDetails.js";
import sendMail from "./form.js";
import projectDetails from "./projectoDetails.js";
import titleEffect from "./titleEffect.js";

const d = document;

d.addEventListener('DOMContentLoaded', e =>{
    burgerMenu('#menu','#btn-burger','#link');
    projectDetails('.clickDiv');
    titleEffect();
    closeModal('#btnClose');
    sendMail();
})