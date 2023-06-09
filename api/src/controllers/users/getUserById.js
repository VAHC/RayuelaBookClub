const { Review, User, Book, Order } = require('../../db');

const getUserById = async (id) => {

    const user = await User.findByPk(id, {
        include: [{
            model: Review,
            attributes: ['id', 'title', 'qualification', 'comment', 'deleted', 'id_book'],
            include: {
                model: Book,
                attributes: ['title'],
            }
        },
        {
            model: Order,
            attributes: ['street_and_number', 'floor_and_department', 'city', 'CP', 'province'],
        }]
    })

    const userMapped = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        phone: user.phone,
        profile: user.profile,
        createdDb: user.createdDb,
        suscribed: user.suscribed,
        date_suscription: user.date_suscription,
        state: user.state,
        deleted: user.deleted,
        reviews: user.reviews.map(r => {
            return {
                id: r.id,
                title: r.title,
                qualification: r.qualification,
                comment: r.comment,
                deleted: r.deleted,
                id_book: r.id_book,
                book: r.book.title
            }
        }),
        orders: user.orders.map(o => {
            return {
                street_and_number: o.street_and_number,
                floor_and_department: o.floor_and_department,
                city: o.city,
                CP: o.CP,
                province: o.province
            }
        })
    }


    return userMapped;
}

module.exports = getUserById