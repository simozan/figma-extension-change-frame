// import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  // const [count, setCount] = useState(0);

  // function handleOnChange(event: Event) {
  //   const target = event.target as HTMLInputElement;

  //   setCount(parseInt(target?.value));
  // }

  // function handleCreate() {
  //   parent.postMessage(
  //     { pluginMessage: { type: "create-rectangles", count } },
  //     "*",
  //   );
  // }



  function handleCancel() {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }

  function changeOpacity() {
    parent.postMessage(
      { pluginMessage: { type: "update-text" } }, "*"
    )
  }

  return (
    <>
      <h2>Select a frame and change the text to Gleef</h2>
      <p>
        Select a frame
        {/* Count: <input id="count" value={count} onChange={handleOnChange} /> */}
      </p>
      {/* <button id="changeOpacity" onClick={changeOpacity}> */}

      {/* <button id="create" onClick={handleCreate}> */}
      {/* Select
      </button> */}
      <button id="change-opacity" onClick={changeOpacity}> change text</button>
      <button id="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
}
