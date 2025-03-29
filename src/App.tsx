import OptionsComponent from "./components/options/OptionsComponent";
import OptionProvider from "./providers/OptionProvider";

function App() {
  return (
    <OptionProvider>
      <OptionsComponent />
    </OptionProvider>
  );
}

export default App;
