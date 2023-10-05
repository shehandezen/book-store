import BookList from "./BookList";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <h2> The Book Store </h2>
      <BookList />
    </div>
  );
  //   return React.createElement(
  //     "React.Fragment",
  //     {},
  //     React.createElement("h2", {}, "Hello World"),
  //   );
};

export default App;
