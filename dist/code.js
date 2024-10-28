"use strict";
(() => {
  // lib/code.ts
  figma.showUI(__html__, {
    height: 500,
    width: 500
  });
  figma.ui.onmessage = (msg) => {
    if (msg.type === "change-opacity") {
      for (const node of figma.currentPage.selection) {
        if ("opacity" in node) {
          node.opacity *= 0.5;
        }
      }
    }
    figma.closePlugin();
  };
})();
