import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const GlobalStyle = createGlobalStyle`
/* font */
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


/* css */
input, button {
    font: inherit;
    color: inherit;
}
[class^=btn] {
    cursor: pointer;
    border: 0;
    border-radius: 56px;
    padding: 21px 49px;

    color: #5B2386;
    font-size: 24px;
    font-weight: 700;
    font-family: 'GmarketSansMedium', sans-serif;
    background-color: #FCEE21;
    box-shadow: 0 0 10px rgba(0 0 0 0.5 );

}

.a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}

body {
    ${reset}

    color: white;
    background-color: #5B2386;
    text-align: center;
    font-family: 'GmarketSansMedium',sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
            <Footer />
        </>
    );
}
export default App;
