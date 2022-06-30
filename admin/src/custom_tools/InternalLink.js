const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class InternalLink {
  constructor({ data }) {
    this.data = data;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const forms = document.createElement("div");
    forms.classList.add("custom-two-column", "cdx-block");

    const articleIdInput = createCustomCommonInput(
      "articleId",
      "記事ID(UUID)",
      this.data.articleId || ""
    );

    forms.appendChild(articleIdInput);
    wrapper.appendChild(forms);

    return wrapper;
  }

  save(blockContent) {
    return {
      articleId: blockContent.querySelector("#articleId").value,
    };
  }

  static get toolbox() {
    return {
      title: "内部記事リンク",
      icon: "<span>内</span>",
    };
  }
}

module.exports = InternalLink;
