import { useRef } from "react";
import styles from "./CreateForm.module.css";
import aiImage from "../images/ai.png";

const CreateForm = () => {
  const promptValue = useRef("");

  const handlePromptSubmit = (event) => {
    event.preventDefault();

    const prompt = promptValue.current.value;
    promptValue.current.value = " ";
    console.log(prompt);

    // sending user prompt to backend
    fetch("http:localhost:8080/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });
  };
  return (
    <div className={styles["container"]}>
      <form onSubmit={handlePromptSubmit} className={styles["form"]}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className={`form-label ${styles["prompt-text"]}`}
          >
            What's on your mind ?
          </label>
          <input
            ref={promptValue}
            type="text"
            className={`form-control ${styles["prompt-input"]}`}
            id="text"
            placeholder="Enter your prompt to generate image"
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${styles["btn-generate-img"]}`}
        >
          Generate Image
        </button>
      </form>
      <div className={styles["image"]}>
        <img src={aiImage} alt="image" />
      </div>
    </div>
  );
};
export default CreateForm;
