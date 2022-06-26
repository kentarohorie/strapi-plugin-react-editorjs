import Embed from "@editorjs/embed";

export default class ExtendedEmbed extends Embed {
  constructor({ data, api, readOnly }) {
    super({ data: data, api: api, readOnly: readOnly });
  }

  render() {
    const title = document.createElement("div");

    title.classList.add("title");
    title.style.border = "1px solid rgba(201,201,204,.48)";
    title.style.padding = "10px 12px";
    title.style.marginTop = "7px";
    title.contentEditable = !this.readOnly;
    title.dataset.placeholder = "タイトル";
    title.innerHTML = this.data.title || "";

    // https://github.com/editor-js/embed/blob/master/src/index.js#L87
    // このタイミングの前にtitle.innerHTMLを埋めないと次回からgetterが走り
    // まだ値が入ってないtitle.innerHTMLでthis._data.titleが上書きされてしまう
    const container = super.render();
    if (container.lastElementChild) {
      container.lastElementChild.before(title);
    }

    return container;
  }

  set data(data) {
    // https://github.com/editor-js/embed/blob/master/src/index.js#L75
    // this.dataやthis._dataの初期化でtitleが消えるのを防ぐ
    const title = data.title || this.data.title || "";
    super.data = data;
    this._data.title = title;
  }

  get data() {
    if (this.element) {
      const title = this.element.querySelector(".title");

      this._data.title = title ? title.innerHTML : "";
    }

    return super.data;
  }
}
