const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/products', function(req, res, next) {
  Product.find({},function(err, products) {
    if (err){
      res.send(err);
    } else {
      res.json(products);
    }
  });
});

router.post('/product', (req, res, next) => {
  const newProduct = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    category: {
        id: req.body.category.id,
        name: req.body.category.name
    },
    brand: req.body.brand
  });

  newProduct.save((err, product) => {
    if(err){
      res.send('Error has occured');
    }else{
      res.json(product);
    }
  });
});

router.get('/getProductsByName', function(req, res, next) {
  Product.find({ name: { "$regex": req.query.name , "$options": "i" }}, 
  (err, products) => {
    if (err){
      res.send(err);
    }else{
      res.json(products);
    }
  });
});



module.exports = router;
