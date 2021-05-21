const express = require("express");
const productsModel = require("../models/products.model");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", async function (req, res) {

  // ghi file
  try {
    let student = [
      {
        name: "Mike",
        age: 23,
        gender: "Male",
        department: "English",
        departmentqwe: "English",
      },
    ];
    fs.writeFileSync(
      path.resolve(`${__dirname}`, "data.json"), // '../data.json'
      JSON.stringify(student),
      "utf8"
    );

    console.log(`File is written successfully!`);
  } catch (err) {
    console.log(`Error writing file: ${err}`);
  }
  let dataJson = {};
  try {
    const data = fs.readFileSync(path.resolve(__dirname, "data.json"), "utf8");

    const databases = JSON.parse(data);
    dataJson = databases;
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
  // let rawdata = fs.readFileSync("data.json");
  // let studentr = JSON.parse(rawdata);
  // console.log(studentr);
  res.json(dataJson);
});
router.get("/where", async function (req, res) {
  // const list = await productsModel.allWhere();
  // res.json(list);
});
router.get("/:id", async function (req, res) {
  // const id = req.params.id || 0;
  // const product = await productsModel.single(id);
  // if (product === null) {
  //   return res.status(204).end();
  // }
  // res.json(product);
});

router.get("/save", async function (req, res) {
  // fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  //   if (err) return console.log(err);
  //   console.log(JSON.stringify(file));
  //   console.log('writing to ' + fileName);
  // });
  // const product = req.body;
  // const id_list = await productsModel.add(product);
  // id_list.Product_ID = id_list[0];
  // res.status(201).json(id_list); // created
});

router.delete("/:id", async function (req, res) {
  // const id = req.params.id || 0;
  // if (id === 0) {
  //   return res.status(304).end();
  // }
  // await productsModel.delete(id);
  // res.json({
  //   message: "delete success",
  // });
});

router.put("/:id", async function (req, res) {
  // const id = req.params.id;
  // const product = req.body;
  // delete product.key;
  // delete product.Product_ID;
  // delete product.Product_CostPriceString;
  // delete product.Product_NewPriceString;
  // delete product.Product_ImageBase;
  // delete product.Categorie_Name;
  // delete product.Categorie_ID
  //  await productsModel.update(id, product);
  // res.json({
  //   message: "update success",
  // });
});

module.exports = router;
