const faker = require("faker");
const { PaymentMethod } = require("../../src/models/PaymentMethod");

const emails = [
    "sb-plaix2556467@personal.example.com",
    "sb-lysov1251869@personal.example.com",
    "sb-yumr471326001@personal.example.com"
  ];


class PaymentMethodSeeder {
    static async fakePaypal(nro) {
        while (nro-- > 0) {
            const newPaymentMethod = {
                clientID: faker.random.alphaNumeric(16),
                userID: faker.random.alphaNumeric(16),
                data: {
                    email: faker.random.arrayElement(emails),
                    password: faker.internet.password()
                }
            };

            await PaymentMethod.instance.create(newPaymentMethod);
        }
    }

    static async fakeStripe(nro) {
        while (nro-- > 0) {
            const newPaymentMethod = {
                clientID: '-' + faker.random.alphaNumeric(16),
                userID: '-' + faker.random.alphaNumeric(16),
                data: {
                    number: "4242424242424242",
                    cvc: faker.random.number({ 'min': 100, 'max': 999 }),
                    exp_month: faker.random.number({ 'min': 1, 'max': 12 }),
                    exp_year: faker.random.number({ 'min': 2020, 'max': 2030 }),
                }
            };

            await PaymentMethod.instance.create(newPaymentMethod);
        }
    }

}

module.exports = { PaymentMethodSeeder };
