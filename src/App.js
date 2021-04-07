import React, { useState } from "react";
import Hero from "./components/search/Hero";

function App() {
  const [language, setLanguage] = useState(false);
  return (
    <>
      <Hero language={language} languageHandle={() => setLanguage(!language)} />
    </>
  );
}

export default App;
