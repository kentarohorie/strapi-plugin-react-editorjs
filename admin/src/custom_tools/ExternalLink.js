const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class ExternalLink {
  constructor({ data, config, block }) {
    this.data = data;
    this.config = config;
    this.block = block;
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
      this.data.linkComment || "",
      true
    );

    const displayImage = document.createElement("img");
    displayImage.style.maxWidth = "50%";
    displayImage.setAttribute("src", this.data.linkContentImage?.file?.url);
    displayImage.addEventListener("click", () => {
      this.config.customMediaLibToggleFunc();
      this.config.setUpdateMediaData({
        keyName: "linkContentImage",
        originalData: this.data,
        blockId: this.block.id,
      });
    });

    wrapper.appendChild(displayImage);
    forms.appendChild(linkTitleInput);
    forms.appendChild(linkURLInput);
    wrapper.appendChild(forms);
    wrapper.appendChild(linkContentTextInput);
    wrapper.appendChild(linkCommentInput);

    return wrapper;
  }

  save(blockContent) {
    const new_data = {
      linkTitle: blockContent.querySelector("#linkTitle").value,
      linkURL: blockContent.querySelector("#linkURL").value,
      linkContentText: blockContent.querySelector("#linkContentText").value,
      linkContentImage: this.data.linkContentImage,
      linkComment: blockContent.querySelector("#linkComment").value,
    };

    this.data = new_data;
    return new_data;
  }

  static get toolbox() {
    return {
      title: "外部用リッチリンク",
      icon: "<span>リ</span>",
    };
  }
}

module.exports = ExternalLink;
