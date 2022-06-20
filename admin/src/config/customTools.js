import PluginId from "../pluginId";

import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import CustomMarker from "editor-js-custom-marker";
import CiteLink from "../custom_tools/CiteLink";
import InlineLink from "../custom_tools/InlineLink";
import InlineLinkButton from "../custom_tools/InlineLinkButton";

const customTools = {
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Quote",
      captionPlaceholder: "Quote`s author",
    },
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  redMarker: CustomMarker("赤", "#ffecec", "bg-red", "span"),
  blueMarker: CustomMarker("青", "#ececff", "bg-blue", "span"),
  greenMarker: CustomMarker("緑", "#ecffec", "bg-green", "span"),
  yellowMarker: CustomMarker("黄", "#fffbd6", "bg-yellow", "span"),
  redFontMarker: CustomMarker("赤", "#bb0000", "red", "span", true),
  blueFontMarker: CustomMarker("青", "#0000ff", "blue", "span", true),
  greenFontMarker: CustomMarker("緑", "#008000", "green", "span", true),
  CiteLink: CiteLink,
  InlineLink: InlineLink,
  InlineLinkButton: InlineLinkButton,
};

export default customTools;
