import ProductStore from "~/components/pages/tiki/ProductStore";
import ProductTiki from "~/components/pages/tiki/ProductTiki";

const tabHead = [
  {
    title: "Tiki Sale",
  },
  {
    title: "Tiki xả kho",
  },
];

const tabBody = [
  {
    cpn: ProductTiki,
  },
  {
    cpn: ProductStore,
  },
];

const tabContent = {
  head: tabHead,
  body: tabBody,
};

export { tabContent };
