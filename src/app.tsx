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
      { pluginMessage: { type: "change-opacity" } }, "*"
    )
  }

  return (
    <>
      <h2>Select a node and change the opacity to 0.5</h2>
      <p>
        Select a node
        {/* Count: <input id="count" value={count} onChange={handleOnChange} /> */}
      </p>
      {/* <button id="changeOpacity" onClick={changeOpacity}> */}

      {/* <button id="create" onClick={handleCreate}> */}
      {/* Select
      </button> */}
      <button id="change-opacity" onClick={changeOpacity}> change opacity</button>
      <button id="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
}
