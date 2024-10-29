// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  height: 500,
  width: 500,
});



// Store original text contents
const originalTextMap = new Map<string, string>();

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  if (msg.type === "update-text") {
    const selection = figma.currentPage.selection;

    for (const node of selection) {
      if (node.type === "FRAME") {
        const textNodes = node.findAll((child) => child.type === "TEXT") as TextNode[];

        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        for (const textNode of textNodes) {
          // Store the original text in the map before updating
          originalTextMap.set(textNode.id, textNode.characters);

          // Update the text
          textNode.characters = "gleef";
        }
      }
    }
  }

  if (msg.type === "undo-text") {
    const selection = figma.currentPage.selection;

    for (const node of selection) {
      if (node.type === "FRAME") {
        const textNodes = node.findAll((child) => child.type === "TEXT") as TextNode[];

        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        for (const textNode of textNodes) {
          // Retrieve the original text from the map if available
          const originalText = originalTextMap.get(textNode.id);
          if (originalText !== undefined) {
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
