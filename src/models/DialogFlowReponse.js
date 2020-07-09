const { CategoryController } = require("../controllers/category.controller");
const { OrderController } = require("../controllers/order.controller");
const { PaymentController } = require("../controllers/payment.controller");
const { ProductController } = require("../controllers/product.controller");
const { UserController } = require("../controllers/user.controller");

class DialogFlowResponse {
  static instance = new DialogFlowResponse();

  
}

module.exports = { DialogFlowResponse };
