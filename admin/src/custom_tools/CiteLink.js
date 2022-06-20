const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class CiteLink {
  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const forms = document.createElement("div");
    forms.classList.add("custom-two-column", "cdx-block");

    const previewLabel = document.createElement("span");
    previewLabel.innerText = "参照リンク:　";

    const previewLink = document.createElement("a");
    previewLink.setAttribute("href", this.data.hrefAttr);
    previewLink.innerText = this.data.innerText || "";

    const innerTextInput = createCustomCommonInput(
      "innerText",
      "表示テキスト",
      this.data.innerText || ""
    );
    const hrefAttrInput = createCustomCommonInput(
      "hrefAttr",
      "リンク",
      this.data.hrefAttr || ""
    );

    innerTextInput.addEventListener("change", () => {
      previewLink.innerText = innerTextInput.value;
    });

    hrefAttrInput.addEventListener("change", () => {
      previewLink.setAttribute("href", hrefAttrInput.value);
    });

    wrapper.appendChild(previewLabel);
    wrapper.appendChild(previewLink);
    forms.appendChild(innerTextInput);
    forms.appendChild(hrefAttrInput);
    wrapper.appendChild(forms);

    return wrapper;
  }

  save(blockContent) {
    const innerText = blockContent.querySelector("#innerText").value;
    const hrefAttr = blockContent.querySelector("#hrefAttr").value;

    return {
      innerText: innerText,
      hrefAttr: hrefAttr,
    };
  }

  static get toolbox() {
    return {
      title: "参照リンク",
      icon: "<span>参</span>",
    };
  }
}

module.exports = CiteLink;
