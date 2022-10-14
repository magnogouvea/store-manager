const chai = require("chai");
const sinon = require("sinon");

const productsModels = require("../../../src/models/productModels");
const db = require("../../../src/models/db");
const product = require('./productModels.mock');

describe('models/productModels', () => {
  describe("getAll", () => {
    afterEach(sinon.restore);
    it("Verifica se todos os produtos são retornados", async () => {
      sinon.stub(db, "execute").resolves([product]);
      const products = await productsModels.getAll();
      chai.expect(products).to.equal(product);
    });
  });

  describe("models/productModels", () => {
    describe("getById", () => {
      afterEach(sinon.restore);
      it("Verifica se apenas o id é retornado", async () => {
        sinon.stub(db, "execute").resolves([[product[0]]]);
        const products = await productsModels.getById(1);
        chai.expect(products).to.equal(product[0]);
      });
    });
  });

  describe("models/productModels", () => {
    it("Verifica se retorna mensagem de erro caso o produto não exista", async () => {
      sinon.stub(db, "execute").resolves([[]]);
      const product = await productsModels.getById(1);
      chai.expect(product).to.equal(undefined);
    });
  });
});