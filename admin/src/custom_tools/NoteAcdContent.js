const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class NoteAcdContent {
  constructor({ data, config, block }) {
    this.data = data;
    this.config = config;
    this.block = block;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("cdx-block");

    const label = document.createElement("label");
    label.innerText = "香りの変化を確認";

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

    wrapper.appendChild(label);
    wrapper.appendChild(displayImage);

    return wrapper;
  }

  save() {
    const new_data = {
      image: this.data.image,
    };

    this.data = new_data;
    return new_data;
  }

  static get toolbox() {
    return {
      title: "香りの変化確認",
      icon: "<span>香</span>",
    };
  }
}

module.exports = NoteAcdContent;
