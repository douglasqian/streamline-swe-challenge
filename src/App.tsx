import "./styles.css";
import Editor from "./Editor";

/*
MVP:
- Loading in existing JSON file
- Show sources when you hover AI-generated text snippets
*/

export default function App() {
  return (
    <div className="App">
      <h1>
        Streamline Design Challenge{" "}
        <span role="img" aria-label="cactus">
          🌵
        </span>
      </h1>
      <p>
        Made with{" "}
        <span role="img" aria-label="heart">
          💚
        </span>{" "}
        by <code>{"<your_name>"}</code>
      </p>
      <Editor />
    </div>
  );
}
