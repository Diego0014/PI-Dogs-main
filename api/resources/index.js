const { Temperament } = require('../src/db');
const axios = require('axios');

const awaitForTemperaments = async() => {
    const {data} = await axios.get('https://api.thedogapi.com/v1/breeds');
    let temperaments = [];
    data.forEach(e => {
        if(typeof(e.temperament) === "string"){
            let result = e.temperament.split(",").map(element => element.trim());            
            temperaments = [...temperaments, ...result];
        }
    });
    temperaments = Array.from(new Set(temperaments)).sort() 
    for await (let temp of temperaments) {
        Temperament.create({name: temp})
    }
}

module.exports = awaitForTemperaments;