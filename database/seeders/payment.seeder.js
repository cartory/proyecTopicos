// const { Payment } = require("../../src/models/Payment");
// const faker = require("faker");

// class PaymentSeeder {
//   static async seed() {
//     const newPayment = {
//       date: "27/06/2020",
//       amount: 200.1,
//       description: "",
//       orderID: "-MAxzsAfSOFpaAhNRdPL",
//       paymet_methodID: "NULL",
//       bill: {
//         date_emission: "27/06/2020",
//         amount: 200.1,
//         description: "",
//       },
//     };


//     await Payment.instance.create(newPayment);
//   }


//   static addDays(dateObj, numDays) {
//     dateObj.setDate(dateObj.getDate() + numDays);
//     return dateObj;
//   }


//   static async fake(nro) {

//     while (nro--) {

//       const p = faker.random.number({ 'min': 1, 'max': 100 });
//       const d = this.addDays(
//         new Date(),
//         faker.random.number({ min: -7, max: 7 })
//       );

//       const newPayment = {
//         date: d,
//         amount: p,
//         description: faker.lorem.sentence,
//         orderID: faker.random.alphaNumeric({ 'number': 10 }),
//         paymet_methodID: faker.random.alphaNumeric(16),
//         bill: {
//           date_emission: d,
//           amount: p,
//           description: faker.lorem.sentence
//         },
//       };

//       await Payment.instance.create(newPayment);
//     }
//   }

// }

// module.exports = { PaymentSeeder };
