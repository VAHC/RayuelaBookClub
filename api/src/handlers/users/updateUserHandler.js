const updateUser = require('../../controllers/users/updateUser')

const updateUserHandler = async (req, res) => {

    const { id, firstName, lastName, email, profile } = req.body;
    let phone = req.body.phone
    if(!phone)
    {
      phone = null;
    }
    try {
        if (!firstName|| !lastName || !email || !profile) {
            res.status(400).send('Please check that you have completed all the required fields')

        } else {
           
            const updatedUser = await updateUser(id, firstName, lastName, email, phone, profile)
            res.status(200).send('Congratulations! The user has been updated!')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateUserHandler;