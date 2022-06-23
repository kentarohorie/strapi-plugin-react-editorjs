import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import EditorJs from "react-editor-js";
import requiredTools from "./requiredTools";
import customTools from "../../config/customTools";

import MediaLibAdapter from "../medialib/adapter";
import MediaLibComponent from "../medialib/component";
import { changeFunc, getToggleFunc } from "../medialib/utils";

import InlineLink from "../../custom_tools/InlineLink";

const Editor = ({ onChange, name, value }) => {
  const [editorInstance, setEditorInstance] = useState();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = useState(-1);
  const [isMediaLibOpen, setIsMediaLibOpen] = useState(false);

  const [updateMediaData, setUpdateMediaData] = useState({
    keyName: null,
    originalData: null,
  });
  const [isCustomMediaLibOpen, setIsCustomMediaLibOpen] = useState(false);

  const mediaLibToggleFunc = useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibOpen,
      indexStateSetter: setMediaLibBlockIndex,
    }),
    []
  );

  const customMediaLibToggleFunc = useCallback(() => {
    setIsCustomMediaLibOpen((prev) => !prev);
  });

  const handleMediaLibChange = useCallback(
    (data) => {
      changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: editorInstance,
      });
      mediaLibToggleFunc();
    },
    [mediaLibBlockIndex, editorInstance]
  );

  const handleCustomMediaLibChange = useCallback(
    (data) => {
      const entry = data[0];
      const newBlockData = {
        file: {
          url: entry.url.replace(window.location.origin, ""),
          mime: entry.mime,
          height: entry.height,
          width: entry.width,
          size: entry.size,
          alt: entry.alt,
          formats: entry.formats,
        },
        caption: "",
        withBorder: false,
        withBackground: false,
        stretched: false,
      };

      const currentBlockIndex = editorInstance.blocks.getCurrentBlockIndex();
      const currentBlock = editorInstance.blocks.getBlockByIndex(0);
      editorInstance.blocks.update(currentBlock.id, {
        ...updateMediaData.originalData,
        [updateMediaData.keyName]: newBlockData,
      });
      currentBlock.dispatchChange();
      customMediaLibToggleFunc();
    },
    [editorInstance, updateMediaData]
  );

  const customImageTool = {
    mediaLib: {
      class: MediaLibAdapter,
      config: {
        mediaLibToggleFunc,
      },
    },
  };

  const inlineLinkTool = {
    InlineLink: {
      class: InlineLink,
      config: {
        customMediaLibToggleFunc,
        setUpdateMediaData,
      },
    },
  };

  return (
    <>
      <div
        style={{
          border: `1px solid rgb(227, 233, 243)`,
          borderRadius: `2px`,
          marginTop: `4px`,
        }}
      >
        <EditorJs
          // data={JSON.parse(value)}
          // enableReInitialize={true}
          onReady={(api) => {
            if (value && JSON.parse(value).blocks.length) {
              api.blocks.render(JSON.parse(value));
            }
            document.querySelector('[data-tool="image"]').remove();
          }}
          onChange={(api, newData) => {
            if (newData.blocks.length) {
              onChange({ target: { name, value: JSON.stringify(newData) } });
            }
          }}
          tools={{
            ...requiredTools,
            ...customTools,
            ...customImageTool,
            ...inlineLinkTool,
          }}
          instanceRef={(instance) => setEditorInstance(instance)}
        />
      </div>
      <MediaLibComponent
        isOpen={isMediaLibOpen}
        onChange={handleMediaLibChange}
        onToggle={mediaLibToggleFunc}
      />
      <MediaLibComponent
        isOpen={isCustomMediaLibOpen}
        onChange={handleCustomMediaLibChange}
        onToggle={customMediaLibToggleFunc}
      />
    </>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
