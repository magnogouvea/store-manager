const chai = require("chai");
const sinon = require("sinon");

const productModels = require("../../../src/models/productModels");
const productServices = require("../../../src/services/productService");

describe("./services/productService", () => {
  describe("getAll", () => {
    afterEach(sinon.restore);
    it("Verifica se todos os produtos são retornados", async () => {
      sinon.stub(productModels, "getAll").resolves([{}]);
      const products = await productServices.getAll();
      chai.expect(products).to.deep.equal([{}]);
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
})
});
