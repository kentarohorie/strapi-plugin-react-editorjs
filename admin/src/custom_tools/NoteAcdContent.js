const createCustomCommonInput = require("./common").createCustomCommonInput;
require("./common.css").toString();

class NoteAcdContent {
  constructor({ data, config }) {
    this.data = data;
    this.config = config;
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
      });
    });

    wrapper.appendChild(label);
    wrapper.appendChild(displayImage);

    return wrapper;
  }

  save() {
    return {
      image: this.data.image,
    };
  }

  static get toolbox() {
    return {
      title: "香りの変化確認",
      icon: "<span>香</span>",
    };
  }
}

module.exports = NoteAcdContent;
