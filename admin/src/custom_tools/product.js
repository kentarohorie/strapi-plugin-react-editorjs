const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class product {
  constructor({ data, config }) {
    this.data = data;
    this.config = config;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const forms = document.createElement("div");
    forms.classList.add("custom-two-column", "cdx-block");

    const nameInput = createCustomCommonInput(
      "name",
      "商品名",
      this.data.name || ""
    );

    const priceInput = createCustomCommonInput(
      "price",
      "料金",
      this.data.price || ""
    );
    priceInput.setAttribute("type", "number");

    const descriptionInput = createCustomCommonInput(
      "description",
      "説明",
      this.data.description || ""
    );

    const commentInput = createCustomCommonInput(
      "comment",
      "コメント",
      this.data.comment || ""
    );

    const productLinkInput = createCustomCommonInput(
      "productLink",
      "URL",
      this.data.productLink || ""
    );

    const displayImage = document.createElement("img");
    displayImage.style.maxWidth = "50%";
    displayImage.setAttribute("src", this.data.image?.file?.url);
    displayImage.addEventListener("click", () => {
      this.config.customMediaLibToggleFunc();
      this.config.setUpdateMediaData({
        keyName: "image",
        originalData: this.data,
      });
    });

    wrapper.appendChild(displayImage);
    forms.appendChild(nameInput);
    forms.appendChild(priceInput);
    wrapper.appendChild(forms);
    wrapper.appendChild(descriptionInput);
    wrapper.appendChild(commentInput);
    wrapper.appendChild(productLinkInput);

    return wrapper;
  }

  save(blockContent) {
    return {
      productLink: blockContent.querySelector("#productLink").value,
      name: blockContent.querySelector("#name").value,
      description: blockContent.querySelector("#description").value,
      price: parseInt(blockContent.querySelector("#price").value) || 0,
      comment: blockContent.querySelector("#comment").value,
      image: this.data.image,
    };
  }

  static get toolbox() {
    return {
      title: "商品",
      icon: "<span>商</span>",
    };
  }
}

module.exports = product;
