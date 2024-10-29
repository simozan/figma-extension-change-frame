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

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  if (msg.type === "update-text") {
    const selection = figma.currentPage.selection;
    
    // Loop through the selected nodes
    for (const node of selection) {
      // Check if the selected node is a Frame
      if (node.type === "FRAME") {
        // Find all TEXT nodes within the Frame
        const textNodes = node.findAll(
          (child) => child.type === "TEXT"
        ) as TextNode[];

        // Load the font asynchronously before updating text
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        // Update each text node's content
        for (const textNode of textNodes) {
          textNode.characters = "gleef";
        }
      }
    }
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};