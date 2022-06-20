const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class InlineLinkButton {
  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const forms = document.createElement("div");
    forms.classList.add("custom-two-column", "cdx-block");

    const textInput = createCustomCommonInput(
      "text",
      "ボタンテキスト",
      this.data.text || ""
    );

    const linkURLInput = createCustomCommonInput(
      "linkURL",
      "URL",
      this.data.linkURL || ""
    );

    forms.appendChild(textInput);
    forms.appendChild(linkURLInput);
    wrapper.appendChild(forms);

    return wrapper;
  }

  save(blockContent) {
    return {
      text: blockContent.querySelector("text").value,
      linkURL: blockContent.querySelector("linkURL").value,
    };
  }

  static get toolbox() {
    return {
      title: "リンクボタン",
      icon: "<span>ボ</span>",
    };
  }
}

module.exports = InlineLinkButton;
