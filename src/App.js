import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer"

function App() {
    const [title, setTitle] = useState('');

    const topMenu = ['About',
        'Service',
        'Help',
        'Selling']
    const handleTopMenu = (el) => {
        setTitle(el);
        //alert(el + ' Clicked ' + count + ' times');
    }
    const footerMenuItem = (el)=>{
        console.log('el = '+el);
        setTitle(el);
    }

    let footerMenu = [
        {title: 'ON SHOP', items:['sopping','ertertert','ertertert']},
        {title: 'SERVICE', items:['sdfsdfsdf','sopping','ertertert','ertertert','']},
        {title: 'HELP', items:['sdfsdfsdf','sopping','ertertert','ertertert','']}
    ]


    return (
        <div className="App">
            <Header topMenu={topMenu} handleTopMenu={handleTopMenu}/>
            <div><h1>{title}</h1></div>
            <Footer footerMenu = {footerMenu} footerMenuItem={footerMenuItem}/>

        </div>
    );
}

export default App;
