/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

const tabs = [
  {
    menu: 'Home',
    compo: <Home />,
  },
  {
    menu: 'Skills',
    compo: <Skills />,
  },
  {
    menu: 'Contact',
    compo: <Contact />,
  },
];

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  useEffect(() => {
    document.title = `자기소개페이지 ${currentTab}`;
  }, [currentTab]);
  
  return (
    <div css={wrapper}>
      <header>
        <Nav tabs={tabs} setCurrentTab={setCurrentTab} />
      </header>
      <main css={contents}>
        {tabs.map((tab) => (
          currentTab === tab.menu && tab.compo
        ))}
      </main>
    </div>
  );
}

export default App;

const wrapper = css`
  margin: 0;
  padding: 0;
`;
const contents = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 2.4688rem);
`;