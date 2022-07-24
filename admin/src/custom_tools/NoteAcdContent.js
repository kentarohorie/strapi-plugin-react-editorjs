const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class NoteAcdContent {
  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const label = document.createElement("label");
    label.innerText = "香りの変化を確認";

    const productIdInput = createCustomCommonInput(
      "productId",
      "商品ID",
      this.data.productId || ""
    );

    wrapper.appendChild(label);
    wrapper.appendChild(productIdInput);

    return wrapper;
  }

  save(blockContent) {
    const productId = blockContent.querySelector("#productId").value;

    return {
      productId: productId,
    };
  }

  static get toolbox() {
    return {
      title: "香りの変化確認",
      icon: "<span>香</span>",
    };
  }
}

module.exports = NoteAcdContent;
