const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class QuoteWithLink {
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
      "引用文",
      this.data.innerText || ""
    );
    const citeLinkInput = createCustomCommonInput(
      "citeLink",
      "参照元リンク",
      this.data.hrefAttr || ""
    );
    const citeTextInput = createCustomCommonInput(
      "citeText",
      "参照元名",
      this.data.hrefAttr || ""
    );
    const commentInput = createCustomCommonInput(
      "comment",
      "コメント",
      this.data.hrefAttr || ""
    );

    wrapper.appendChild(textInput);
    wrapper.appendChild(commentInput);
    forms.appendChild(citeTextInput);
    forms.appendChild(citeLinkInput);
    wrapper.appendChild(forms);

    return wrapper;
  }

  save(blockContent) {
    return {
      text: blockContent.querySelector("#text").value,
      citeLink: blockContent.querySelector("#citeLink").value,
      citeText: blockContent.querySelector("#citeText").value,
      comment: blockContent.querySelector("#comment").value,
    };
  }

  static get toolbox() {
    return {
      title: "リッチ引用",
      icon: "<span>付</span>",
    };
  }
}

module.exports = QuoteWithLink;
