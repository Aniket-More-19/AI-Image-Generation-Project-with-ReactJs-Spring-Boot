import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreatePost from "./CreatePost/CreatePost";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">AIimages</span>
          <button type="button" class="btn btn-primary create-btn-align ">
            Create
          </button>
        </div>
      </nav>

      <CreatePost />
      {/* <Home /> */}
    </>
  );
}

export default App;
