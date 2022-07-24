const { createCustomCommonInputWithLabel } = require("./common");

const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class ProductLinks {
  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const productIdInput = createCustomCommonInputWithLabel(
      "productId",
      "商品ID",
      this.data.productId || ""
    );

    const rakutenUrlInput = createCustomCommonInputWithLabel(
      "rakutenUrl",
      "楽天URL",
      this.data.rakutenUrl || ""
    );
    const amazonUrlInput = createCustomCommonInputWithLabel(
      "amazonUrl",
      "amazon URL",
      this.data.amazonUrl || ""
    );
    const officialUrlInput = createCustomCommonInputWithLabel(
      "officialUrl",
      "公式URL",
      this.data.officialUrl || ""
    );
    const otherUrlInput = createCustomCommonInputWithLabel(
      "otherUrl",
      "その他URL",
      this.data.otherUrl || ""
    );

    wrapper.appendChild(productIdInput);
    wrapper.appendChild(rakutenUrlInput);
    wrapper.appendChild(amazonUrlInput);
    wrapper.appendChild(officialUrlInput);
    wrapper.appendChild(otherUrlInput);

    return wrapper;
  }

  save(blockContent) {
    return {
      productId: blockContent.querySelector("#productId").value,
      rakutenUrl: blockContent.querySelector("#rakutenUrl").value,
      amazonUrl: blockContent.querySelector("#amazonUrl").value,
      officialUrl: blockContent.querySelector("#officialUrl").value,
      otherUrl: blockContent.querySelector("#otherUrl").value,
    };
  }

  static get toolbox() {
    return {
      title: "商品リンク",
      icon: "<span>商リ</span>",
    };
  }
}

module.exports = ProductLinks;
