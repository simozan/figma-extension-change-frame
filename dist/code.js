"use strict";
(() => {
  // lib/code.ts
  figma.showUI(__html__, {
    height: 500,
    width: 500
  });
  var originalTextMap = /* @__PURE__ */ new Map();
  figma.ui.onmessage = async (msg) => {
    if (msg.type === "update-text") {
      const selection = figma.currentPage.selection;
      for (const node of selection) {
        if (node.type === "FRAME") {
          const textNodes = node.findAll((child) => child.type === "TEXT");
          await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          for (const textNode of textNodes) {
            originalTextMap.set(textNode.id, textNode.characters);
            textNode.characters = "gleef";
          }
        }
      }
    }
    if (msg.type === "undo-text") {
      const selection = figma.currentPage.selection;
      for (const node of selection) {
        if (node.type === "FRAME") {
          const textNodes = node.findAll((child) => child.type === "TEXT");
          await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          for (const textNode of textNodes) {
            const originalText = originalTextMap.get(textNode.id);
            if (originalText !== void 0) {
              textNode.characters = originalText;
            }
          }
        }
      }
    }
    if (msg.type === "cancel") {
      figma.closePlugin();
    }
  };
})();
