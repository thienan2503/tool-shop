import UITabContent from "./components/UITabContent";
import { tabContent } from "./config/tab.config";

function App() {
  return (
    <>
      <UITabContent tabData={tabContent} />
    </>
  );
}

export default App;
