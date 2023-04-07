import React from "react";


// Import the components here 
import TabletCards from "./TabletCards";
import phoneCards from "./phoneCards";
const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};




const MyComponent = () => {
  const { width } = useViewport();
// This was 900 change it back  
  const breakpoint = 960;

// < was what it was set to. phone then tablet 
  return width < breakpoint ? <TabletCards /> : <phoneCards />;
};

export default function CardRender() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}


 