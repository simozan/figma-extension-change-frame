import "./app.css";

export function App() {

  function changeText() {
    parent.postMessage({ pluginMessage: { type: "update-text" } }, "*");
  }

  function undoChange() {
    parent.postMessage({ pluginMessage: { type: "undo-text" } }, "*");
  }

  function handleCancel() {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }


  
  return (
    <>
      <h2>Select a frame and change the text to Gleef</h2>
      <p>
        Select a frame
      </p>

      <button id="change-text" onClick={changeText}>Change text</button>
      <button id="undo-text" onClick={undoChange}>Undo change</button>
      <button id="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
}
