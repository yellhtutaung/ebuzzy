console.log('%cHello', 'color:green; font-size: 2px');

let noArr = [1,1,1,1,1,1];

result = noArr.map(i => i*3 ); //we non't need for loop
//map function return all value

console.log(result);

noArr.filter(i => i% 2); //filter function only return when result is true

// noArr.reduce();

noArr.length = 0; //remove all of it's value -- >> if =3 remove 3 val above

let Str_Arr = ['orange','apple' ];

let combine = [...Str_Arr,...noArr]; // combining string array to num array

function add (a,b,...c ) {
    console.log(c);
}

add(1,2,3,4,5,6,7);

let user = {name:"Yell Min", age:12 };

