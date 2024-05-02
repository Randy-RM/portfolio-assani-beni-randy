const React = require("react");
const ReactDOM = require("react-dom/client");
const BaseLayout = require("./src/components/layout/base-layout");

// Wraps each page in a global component
exports.wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment;
  return <Layout {...props}>{element}</Layout>;
};

exports.replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};
