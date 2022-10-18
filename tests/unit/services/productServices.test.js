const chai = require("chai");
const sinon = require("sinon");

const productModels = require("../../../src/models/productModels");
const productServices = require("../../../src/services/productService");
const { product, insert } = require('./productServices.mock');

describe("./services/productService", () => {
  describe("getAll", () => {
    afterEach(sinon.restore);
    it("Verifica se todos os produtos são retornados", async () => {
      sinon.stub(productModels, "getAll").resolves(product);
      const products = await productServices.getAll();
      chai.expect(products).to.deep.equal(product);
    });
  });

  describe("./services/productService", () => {
    describe("getByID", () => {
      afterEach(sinon.restore);
      it("Verifica se o é um produto retornado como esperado", async () => {
        sinon.stub(productModels, "getById").resolves({});
        const products = await productServices.getById(1);
        chai.expect(products).to.deep.equal({});
      });
    });
  });

  describe("./services/productService", () => {
    afterEach(sinon.restore);
    it("Verifica se retorna um erro caso um produto não seja encontrado", async () => {
      sinon.stub(productModels, 'getById').resolves();
      const products = await productServices.getById(1);
      chai.expect(products).to.deep.equal(undefined);
    });
  });

  describe("./services/productService", () => {
    afterEach(sinon.restore);
    it("Verifica se adiciona produtos", async () => {
      sinon.stub(productModels, "insertProduct").resolves(2);
      const products = await productServices.insertProduct(insert.name);
      chai.expect(products).to.deep.equal({ id: 2, name: "ProdutoX" });
    })
  });
});
