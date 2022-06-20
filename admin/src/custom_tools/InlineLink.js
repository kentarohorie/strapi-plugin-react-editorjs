const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class InlineLink {
  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const forms = document.createElement("div");
    forms.classList.add("custom-two-column", "cdx-block");

    const linkTitleInput = createCustomCommonInput(
      "linkTitle",
      "タイトル",
      this.data.linkTitle || ""
    );

    const linkURLInput = createCustomCommonInput(
      "linkURL",
      "URL",
      this.data.linkURL || ""
    );

    const linkContentTextInput = createCustomCommonInput(
      "linkContentText",
      "概要",
      this.data.linkContentText || "",
      true
    );

    const linkCommentInput = createCustomCommonInput(
      "linkComment",
      "コメント",
      this.data.linkCommentInput || "",
      true
    );

    forms.appendChild(linkTitleInput);
    forms.appendChild(linkURLInput);
    wrapper.appendChild(forms);
    wrapper.appendChild(linkContentTextInput);
    wrapper.appendChild(linkCommentInput);

    return wrapper;
  }

  save(blockContent) {
    return {
      linkTitle: blockContent.querySelector("linkTitle").value,
      linkURL: blockContent.querySelector("linkURL").value,
      linkContentImage: {},
      linkContentText: blockContent.querySelector("linkContentText").value,
      linkComment: blockContent.querySelector("linkComment").value,
    };
  }

  static get toolbox() {
    return {
      title: "リッチリンク",
      icon: "<span>リ</span>",
    };
  }
}

module.exports = InlineLink;
