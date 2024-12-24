let a = prompt('Ismingizni kiriting')
let b = prompt('Space idingizni kiriting')
let c = prompt('Space passworddingizni kiriting')

let person = {
    name: `${a}`,
    id: `${b}`,
    password: `${c}`
};

console.log({name: `${person.name}`,  id: `${person.id}`, password:`${ person.password}`,}); 