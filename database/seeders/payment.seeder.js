const { Payment } = require("../../src/models/Payment");

class PaymentSeeder {
    static async seed() {
        const newPayment = {
            date: "27/06/2020",
            amount: 200.1,
            description: "",
            orderID: "-MAxzsAfSOFpaAhNRdPL",
            paymet_methodID: "NULL",
            bill: {
                date_emission: "27/06/2020",
                amount: 200.1,
                description: "",
            }
        };
        await Payment.instance.create(newPayment);
    }
}

module.exports = { PaymentSeeder };
