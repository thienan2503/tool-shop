import UITabContent from "~/components/UITabContent";
import { tabContent } from "~/config/tabTiki.config";

const TikiPage = () => {
  return <UITabContent tabData={tabContent} />;
};
export default TikiPage;
