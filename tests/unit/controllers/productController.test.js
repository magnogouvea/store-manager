const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const products = require("./productController.mock");

chai.use(sinonChai);

const productService = require("../../../src/services/productService");
const productController = require("../../../src/controllers/productController");

describe("./controllers/productContoller", () => {
  describe("getAll", () => {
    afterEach(sinon.restore);
    it("Testando metodo de buscar todos os produtos", async () => {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(products);
      sinon.stub(productService, "getAll").resolves(products);
      await productController.getAll(req, res);
      sinon.assert.calledWith(res.status, 200);
      sinon.assert.calledWith(res.json, products);
    });
  });

  describe("getById", () => {
    afterEach(sinon.restore);
    it("Testando metodo getById", async () => {
      const res = {};
      const req = { params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(products[0]);
      sinon.stub(productService, "getById").resolves(products[0]);
      await productController.getById(req, res);
      sinon.assert.calledWith(res.status, 200);
      sinon.assert.calledWith(res.json, products[0]);
    });
  });

  describe("insertProduct", () => {
    afterEach(sinon.restore);
    it("Testando método insertProduct", async () => {
      const res = {};
      const req = { body: { name: "Martelo do Thor" } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(products[0]);
      sinon.stub(productService, "insertProduct").resolves(products[0]);
      await productController.insertProduct(req, res);
      sinon.assert.calledWith(res.status, 201);
      sinon.assert.calledWith(res.json, products[0]);
    });
  });
});
