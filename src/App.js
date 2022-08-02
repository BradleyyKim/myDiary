import Counter from "./Counter";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

function App() {
  const style = {
    App: {
      backgroundColor: "lightblue",
    },
    header: {
      backgroundColor: "red",
    },
  };
  return (
    <div style={style.App}>
      <MyHeader />
      <Counter />
    </div>
  );
}

export default App;
