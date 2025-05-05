// here's the code in js that converts given kelvin to celsius 
// and then converts celsius to fahrenheit 
// and then converts celsius to newton
// and logs the results to the console


<script>
// The forecast today is 293 Kelvin. Kelvin is a constant value.
const kelvin = 293;

// Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;

// Use the formula to convert Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature using Math.floor().
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit using string interpolation.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra practice: Convert Celsius to the Newton scale.
let newton = celsius * (33 / 100);

// Round down the Newton temperature using Math.floor().
newton = Math.floor(newton);

// Log the temperature in Newton using string interpolation.
console.log(`The temperature is ${newton} degrees Newton.`);
</script>
