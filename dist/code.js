"use strict";
(() => {
  // lib/code.ts
  figma.showUI(__html__, {
    height: 500,
    width: 500
  });
  figma.ui.onmessage = async (msg) => {
    if (msg.type === "update-text") {
      const selection = figma.currentPage.selection;
      for (const node of selection) {
        if (node.type === "FRAME") {
          const textNodes = node.findAll(
            (child) => child.type === "TEXT"
          );
          await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          for (const textNode of textNodes) {
            textNode.characters = "gleef";
          }
        }
      }
    }
    figma.closePlugin();
  };
})();
