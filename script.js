'use strict';

const form = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#form-status');

// Forma yra demonstracinė: duomenys nesiunčiami ir nesaugomi.
// Neleidžiame pateikti formos ir tada, jei naršyklė nepalaiko tikrinimo.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (![...form.querySelectorAll('[required]')].every((field) => field.value.trim())) {
    statusMessage.textContent = 'Prašome užpildyti visus laukus – vien tarpų nepakanka.';
    statusMessage.hidden = false;
    statusMessage.focus();
    return;
  }
  statusMessage.textContent = 'Ačiū už jūsų žinutę! Tai demonstracinė forma: žinutė neišsiųsta, o staliukas nerezervuotas.';
  statusMessage.hidden = false;
  form.reset();
  statusMessage.focus();
});

// Be „JavaScript“ forma išjungiama, kad įvestis nepatektų į URL.
form.querySelector('button').disabled = false;
document.querySelector('#year').textContent = new Date().getFullYear();
