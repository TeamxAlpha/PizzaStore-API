var mongoose = require("mongoose");
var pizzaSchema = new mongoose.Schema({

  id: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: "Pizza",
  },
  price: {
    type: Number,
    default: 0,
  },
  flavour: {
    type: String,
    default: "Pizza", 
  },
  
});

module.exports = mongoose.model("Pizza", pizzaSchema);
