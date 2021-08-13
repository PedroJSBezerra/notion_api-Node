const faker = require('faker')

exports.generateClient = () => {
    const firstname = faker.name.firstName()
    const lastname = faker.name.lastName()
    const email = faker.internet.email(firstname, lastname)
    const phone = faker.phone.phoneNumber()
    const subscribed = faker.datatype.boolean()

    return {
        name: `${firstname} ${lastname}`,
        email,
        phone,
        subscribed
    }
}
