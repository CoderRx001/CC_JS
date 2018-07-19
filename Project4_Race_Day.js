let raceNumber = Math.floor(Math.random() * 1000);

const regEarly = false;

const age = 18;

if (age > 18 && regEarly === true) {
		console.log(raceNumber + 1000)
} 

if (age > 18 && regEarly === true) {
  	console.log('Your start time is 9:30 am' );
} else if (age > 18 && !regEarly === true) {
  	console.log('Your start time is 11:00 am');
} else if (age < 18 ) {
  console.log(`${raceNumber + 1000} Your race is at 12:30 pm `);
} else (age === 18) {
  console.log('please see the registration desk');
}

