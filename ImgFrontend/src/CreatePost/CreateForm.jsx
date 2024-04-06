import { useRef } from "react";
import styles from "./CreateForm.module.css";
import aiImage from "../images/ai.png";

const CreateForm = () => {
  const prompt = useRef("");

  const handlePromptSubmit = (event) => {
    event.preventDefault();

    const promptValue = prompt.current.value;
    prompt.current.value = " ";
    console.log(promptValue);
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
            ref={prompt}
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
