import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
interface UITabContentProps {
  tabData: any;
}

const UITabContent = ({ tabData }: UITabContentProps) => {
  return (
    <Tabs>
      <TabList>
        {tabData?.head.map((tab: { title: string }, index: number) => (
          <Tab key={index}>{tab.title}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabData?.body.map((tab: any, index: number) => (
          <TabPanel key={index}>{React.createElement(tab.cpn)}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
export default UITabContent;
