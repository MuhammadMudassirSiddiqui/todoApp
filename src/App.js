import "./App.css";
import Search from "./comp/Search";
import Body from "./comp/Body";
function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/** search */}
        <Search />

        {/** body */}
        <Body />
      </div>
    </div>
  );
}

export default App;
