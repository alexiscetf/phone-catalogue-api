'use strict'


const mockPhones = require('./mockPhones.json')

module.exports = {
    getAllPhones,
}

/**
 * returns all phones
 */
async function getAllPhones() {

    //return mock phones 
    return mockPhones

}
