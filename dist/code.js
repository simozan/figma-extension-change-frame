"use strict";
(() => {
  // lib/code.ts
  figma.showUI(__html__, {
    height: 500,
    width: 500
  });
  figma.ui.onmessage = (msg) => {
    if (msg.type === "update-text") {
      const selection = figma.currentPage.selection;
      for (const node of selection) {
        if (node.type === "FRAME") {
          const textNodes = node.findAll(
            (child) => child.type === "TEXT"
          );
          for (const textNode of textNodes) {
            textNode.characters = "gleef";
          }
        }
      }
    }
    figma.closePlugin();
  };
})();
