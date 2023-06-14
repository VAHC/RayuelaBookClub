const { Gender } = require('../../db');

const createGender = async (name) => {
        
    const newGender = await Gender.findOrCreate({
        where: { name },
    })
 
    return newGender;

}

module.exports = createGender;