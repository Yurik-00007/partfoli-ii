import React from 'react';
import st from './App.module.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Hair from "./hair/Hair";
import Contacts from "./contacts/Сontacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className={st.App}>
            <div className={st.appDiv}><Header/></div>
            <div className={st.appDiv}><Main/></div>
            <div className={st.appDiv}><Skills/></div>
            <div className={st.appDiv}><Projects/></div>
            <div className={st.appDiv}><Hair/></div>
            <div className={st.appDiv}><Contacts/></div>
            <div className={st.appDiv}><Footer/></div>
        </div>
    );
}

export default App;
