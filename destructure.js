const person = { name: "Jewel", age: 17, job: 'facebooker', gfName: 'Keya', phone: '01919091369'}

const friend = ['Sakib Khan', 'Solaiman Khan', 'Sarukh Khan', 'Arbaj Khan']


const [first, second, ...restFriends] = friend;

console.log(first);


const {phone, gfName} = person;


console.log(gfName, phone);