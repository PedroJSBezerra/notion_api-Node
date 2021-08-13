require('dotenv').config()
const {Client} = require('@notionhq/client')

const faker = require('./fakergenerator.js')

const notion = new Client({
    //token secreto do notion
    auth: process.env.API_TOKEN
})
// Este id vem na url
const DATABASE_ID = 'aba0a011301046f6b149877bc34f2b2c'

async function main() {
    //dados falsos gerados para preencher os campos de dados
    const {name, email, phone, subscribed} = faker.generateClient()
    //inserindo dados na tabela do notion
    await notion.pages.create({
        parent: {database_id: DATABASE_ID},
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: name
                        }
                    }
                ]
            },
            Email: {
                email: email
            },
            Phone: {
                phone_number: phone
            },
            "Subscribed Newsletter": {
                checkbox: subscribed
            }
        }
    })
}

main()
