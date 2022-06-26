const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class RichImage {
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

    const titleInput = createCustomCommonInput(
      "title",
      "タイトル",
      this.data.title || ""
    );

    const commentInput = createCustomCommonInput(
      "comment",
      "コメント",
      this.data.comment || ""
    );

    const displayImage = document.createElement("img");
    displayImage.style.maxWidth = "50%";
    displayImage.setAttribute("src", this.data.image?.file?.url);
    displayImage.addEventListener("click", () => {
      this.config.customMediaLibToggleFunc();
      this.config.setUpdateMediaData({
        keyName: "image",
        originalData: this.data,
        blockId: this.block.id,
      });
    });

    wrapper.appendChild(displayImage);
    forms.appendChild(titleInput);
    forms.appendChild(commentInput);
    wrapper.appendChild(forms);

    return wrapper;
  }

  save(blockContent) {
    return {
      title: blockContent.querySelector("#title").value,
      comment: blockContent.querySelector("#comment").value,
      image: this.data.image,
    };
  }

  static get toolbox() {
    return {
      title: "リッチイメージ",
      icon: "<span>イ</span>",
    };
  }
}

module.exports = RichImage;
