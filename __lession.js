/* What is TypeScript ?

TypeScript is an Object Orianted Programming Language
build on top of JavaScript with extra features.



To Use TypeScrit we have to make a file ts .. and then write our typeScript code and then we can 
give command to terminal tsc and then it will convert it into a js file..


but to edit the directory we have to open the TS congif file.. 
to open the config file we have to give a command call tsc --init

then in the tscongif.json file we have to find roodDir to define the directory of the ts file

we can define our ts file directory there ..

after that to define the compiled js file directory we will find outDir and by editning it we 
can define the directory of the js file .. 

to change the version of the js file we have to find target file and we can change the version
*/


/* Primitive Tyepes & Non Primitive types 

Primitive:

1.Number
2.String
3.Boolean
4.null
5.undifined
6.symble



non primitive types:
1.Array
2.Object
3.Tuple
 */


/* Object and optional literal


we can write an object in typeScript by this manner

const ruble:{name:"string"; profession:"string"}={name:"Mahamdul Hasan Abir", profession:"web developer"}

but we can give an optional sign if there is an option which can be exist or not.
like const ruble:{name?:"string";profession:"stirng"}={profession:"Web Developer"}


if we want to fiexed any value we can give that value as type like

const number:{number:01941992390}={number:01941992390}

we can access object property by only giving name and then . 
like ruble. then we will get suggesssion .. 

if we want to keep an object non-editable then we can give readonly before declearing type.
*/

/* Spread Operator


to add an array to an array as element we cant push directly 
we have to add a ... spread operator  .. example 1.7



ADDING 2 OBJECT

we can add 2 objects element together by useing spread operator
where new Objects element will be the elements of both first and secod operator... example in 1.7



we can assign rest operator by using ... then to call each and every element of the operator we have to for each it 
example in 1.7
*/