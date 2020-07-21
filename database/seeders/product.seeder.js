const { product } = require("../../src/models/Product");
const faker = require("faker");

const categories = [
  "-MAxNQyICr9nP2SQvM3v",
  "-MAxNXZRaXXR7KNb9WGe",
  "-MAxNjmGpdCx8no0XtKv",
  "-MAxNxC-Jf-zpgBC620U",
  "-MAxOWli2SHbL0MscC7z",
  "-MAy4W0oZgjOPtPSlJNS",
  "-MAy4e37HJTZV68E8tqE",
  "-MAy4kiIXDGHP08BWX3J",
  "-MAy4srCXcBs7ru2Bhbh",
  "-MAy5_Hr5gEH6bmiCPvW",
];


class ProductSeeder {

  



  static async seed() {

    const name = [
      "Yogrut bebible de durazno",
      "Cereal Cherios",
      "Chocolate Snicker mini",
      "Chocolate Reese",
      "Carne seca Jack Link"
  ];

  const url = [
    "https://pilandina.com.bo/wp-content/uploads/2019/07/500x500-bebible-durazno-1.jpg",
    "https://www.cheerios.com/wp-content/uploads/2018/04/Fruity_460x460.png",
    "https://pics.drugstore.com/prodimg/388054/900.jpg",
    "https://www.hersheys.com/content/dam/smartlabelproductsimage/reeses/00034000470563-0010.png",
    "https://www.costco.com.au/medias/sys_master/images/h0c/h82/26782349590558.jpg"
  ]

  const price = [
     7
  ];

  const desc = [
      "Yogurt frutado.",
  ];

    for (var i = 0; i < 1; i++) {
      const newProduct = {
        code: faker.random.alphaNumeric(10),
        name: name[i],
        description: desc[i],
        image_url: url[i],
        stock: faker.random.number({ min: 10, max: 50 }),
        price: price[i],
        category: ["-MAxNXZRaXXR7KNb9WGe","-MAy4kiIXDGHP08BWX3J"],
        promo: {
           discount : faker.random.number({ min: 0, max: 100 }) / 100,
           endDate : this.addDays(
            new Date(),
            -2
          ).getTime(),
        },
      };
  
      await product.create(newProduct);
    } 



    /*


    for(var i=0;i<5;++i){
      await product.create(list[i]);
    }

    


      


*/
  }

  static addDays(dateObj, numDays) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
  }

  static async fake(nro) {
    while (nro-- > 0) {
      var newProduct = {
        code: faker.random.alphaNumeric(10),
        name: faker.commerce.productName(),
        image_url: "https://i.imgur.com/O8wDXAc.png",
        description: faker.lorem.sentence(),
        stock: faker.random.number(100),
        price: faker.commerce.price(10.0),
        category: [
          faker.random.arrayElement(categories),
          faker.random.arrayElement(categories),
        ],
        promo: {
          discount: faker.random.number({ min: 0, max: 100 }) / 100,
          endDate: this.addDays(
            new Date(),
            faker.random.number({ min: 0, max: 7 })
          ).getTime(),
        },
      };

      await product.create(newProduct);
    }
  }
}

module.exports = { ProductSeeder };
