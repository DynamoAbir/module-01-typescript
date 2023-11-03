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

const ruble:{name:"string"; profession:"string"}={name:"Mahamdul Hasan Abir",
 profession:"web developer"}

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



we can assign rest operator by using ... then to call each and every element of the operator
 we have to for each it 
example in 1.7
*/


/* Object Destructuring

to dustructure an object we have to declear it .
then we can destructure it as normal . but in nested face4 we have to re destructure
 it like example 1.8 kokil
but we can't give type in destructering face.. we can rename it by that.
*/


/* Array Destructuring

in array we can destructer it by giving name of there index cordially
but if we don't want to name any index we can easily skip by using a coma. and if we want all after that
we can give ...rest . we can accass them all by this rest example 1.8
*/

/* Type Alias

we can set standerd type by declearing type ..

after writting type we can use it in many data
to declear it we have to write type and then convention is write a Capitalletter name
after that we can use it.. example in 1.9ts
*/



// Union ALias

/* We can add 2 type into 1 type !! it is possible in typeScript

to do that we have to decleat 2 types first 
and then we if we want to say that final type can contain only one of this then we will use | this line.

and if we want to say that final product should have both of those type then we have to use & this sign.


example in 1.10.ts;



*/

//Turnarry operator | nullish coalescing operator

/* 
If we want a function like it will return if the result is this or that then run this or that function ,

in this kind of case we use turnarry operator !!
but if there couldbe a possibilty that come undefine of null.. in that case we use nullish coalescing operator..
to call a nullinsh coalesing operator we use ?? ..
*/


// Never Type

/* If we know there is a function who will never give a perticuler result !! we can call it a never type ...

like an Error function which is demonstrated in 1.12.ts file*/