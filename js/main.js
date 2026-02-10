// manipulating complex objects
//we have objects inside the array
var myMusic = [
    {
        'aritist': 'Billy Joel',
        'title': 'piano Man', 
        'release_year': 1973,
        'formats': [
            'CD',
            '8T',
            'LP'
        ],
        'gold': true
    },
    //add record here 
    {
        'aritist': 'Beau Carnes',
        'title': 'Cereal Man', 
        'release_year': 2004,
        'formats': [
            'YouTube Video'
        ]
    },
    //Working with nested objects etc
    {
        'artist': {
            'Names': ['james', 'Andrio'],
            'Music together' : {
                'Name01': 'song1',
                'Name02': 'song2',
                'Name03' : 'song3'
            },
            'year': 2022
        }
    },
];

console.log(myMusic[2].artist['Music together']);



// Data Collection

var collection = {
    "111" : {
        "album": "Slipery when wet",
        "artist": "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "222" : {
        "album": "1989",
        "artist": "hhshfh",
        "tracks" : [
            "Let It Rock",
            "Lettle Red Corvette"
        ]
    },
    "333" : {
        "album": "1983",
        "artist": "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "444" : {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id , prop, value){
    if(value == ''){
        delete collection[id][prop];
    }else if(prop === 'tracks'){
        collection[id][prop] == collection[id][prop] || [];
        collection[id][prop].push(value)
    }else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(444,'artist', 'ABBA'))



// Higher Order arrow functions

const realNumberArray = [4, 5.6, 9.8, -3.44, 40, 7, 8.3, -2];

const squareList = (arr) =>{
    //filtering the whole numbers and then mapping it in array
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Difference between Rest-Operators and spread-Operators
// Rest-0perator
const sum = (function() {
    //instead of sum(x, y, z) we can use ...args so it can handle any added or reduced argument/value
    return function sum(...args){
        //now this is no longer need because of rest operator
        //const args = [x, y, z];
        return args.reduce((a,b) => a + b, 0);
    };
})();

console.log(sum(3,4,5))

//Spread Operators
//it spreads the array into new array
const arr1 = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY']
let arr2;
(function() {
   // arr2 = arr1; // this will change the arr1
   arr2 = [...arr1] // this will spreads the new array and not change the original one
    arr1[0] = 'patato'
})();
console.log(arr2);

//Distructing assignments to assign variable from bjects

var voxel = {x: 3.6, y: 7.4, z: 6.54};

//old way of doing that
var x = voxel.x // x = 3.6
var y = voxel.y // y = 7.4
var z = voxel.z // z = 6.54

// getting z from voxel and assigning to a
const {x : a, y : b, z : c} = voxel; //x = 3.6 , y = 7.4 , // z = 6.54

console.log(x,y,z)


//Distructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: {min: 72, max: 83 },
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";

    const {tomorrow : { max : maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));





//getters and Setters in JS

function makeClass(){
    class Thermostate {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        
        //getter
        get temperature(){
           return this._temp; 
        }
        //setter
        set temperature(updatedTemp){
            return this._temp = updatedTemp
        }
    }
    return Thermostate;
};

const Thermostate = makeClass();
const Thermos = new Thermostate(76);
let temp = Thermos.temperature; //getters and setters are accessed similar to properties
Thermos.temperature = 55;
temp = Thermos.temperature;
console.log(temp)




//IMPORT AND EXPORT IN JS
//import

import { capitalizeString } from "./string_function";
const cap = capitalizeString("hello!");
console.log(cap)


//use export to reuse a block
