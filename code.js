// added variables with prompts to create password
const name = prompt ('inserisci il tuo nome');
const surname = prompt ('inserisci il tuo cognome');
const color = prompt ('inserisci il tuo colore preferito');
const number = 22;
// variable linked to id to show password
document.getElementById('password').innerHTML = name + surname + color + number;