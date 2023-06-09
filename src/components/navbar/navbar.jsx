import { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar(){

    const history = useLocation()

    useEffect(() => {
        selectButton()
    }, [history]);

    const selectButton = () => {
    const path = window.location.pathname
    const segments = path.split("/")
    const url = segments.pop();

    const buttons = {
        'favoritos': {
        button: document.getElementById('favoritos-button'),
        svg: document.getElementById('favoritos-svg')
        },
        'qr': {
        button: document.getElementById('qr-button'),
        svg: document.getElementById('qr-svg')
        },
        'chat': {
        button: document.getElementById('chat-button'),
        svg: document.getElementById('chat-svg')
        },
        'more': {
        button: document.getElementById('more-button'),
        svg: document.getElementById('more-svg')
        },
        '': {
        button: document.getElementById('inicio-button'),
        svg: document.getElementById('inicio-svg')
        }
    };

    for (const key in buttons) {
        const buttonInfo = buttons[key]
        const button = buttonInfo.button
        const svg = buttonInfo.svg

        if (key === url) {
        button.style.backgroundColor = '#1b68801e'
        button.style.color = '#1b6880'
        svg.style.fill = '#1b6880'
        } else {
        button.style.backgroundColor = '#fff'
        button.style.color = '#BDBDBD'
        svg.style.fill = '#BDBDBD'
        }
    }
}

    return(
        <nav className="navbar-nav">
        <section className="navbar-section">
            <Link className='link' to="/">
                <div id='inicio-button' className='button-navbar'>
                    <svg id='inicio-svg' width="35px" height="35px" viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path>
                    </svg>
                    <p>Início</p>
                </div>
            </Link>
            <Link to="/favoritos">
                <div id='favoritos-button' className='button-navbar'>
                    <svg id='favoritos-svg' fill="#BDBDBD" width="33px" height="33px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3 5.71002C18.841 5.24601 18.2943 4.87797 17.6917 4.62731C17.0891 4.37666 16.4426 4.2484 15.79 4.25002C15.1373 4.2484 14.4909 4.37666 13.8883 4.62731C13.2857 4.87797 12.739 5.24601 12.28 5.71002L12 6.00002L11.72 5.72001C10.7917 4.79182 9.53273 4.27037 8.22 4.27037C6.90726 4.27037 5.64829 4.79182 4.72 5.72001C3.80386 6.65466 3.29071 7.91125 3.29071 9.22002C3.29071 10.5288 3.80386 11.7854 4.72 12.72L11.49 19.51C11.6306 19.6505 11.8212 19.7294 12.02 19.7294C12.2187 19.7294 12.4094 19.6505 12.55 19.51L19.32 12.72C20.2365 11.7823 20.7479 10.5221 20.7442 9.21092C20.7405 7.89973 20.2218 6.64248 19.3 5.71002Z" />
                    </svg>
                    <p>Favoritos</p>
                </div>
            </Link>
            <Link to="/qr">
                <div id='qr-button' className='button-navbar'>
                    <svg fill="#000000" width="24px" id='qr-svg' height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-k</title><rect x="336" y="336" width="80" height="80" rx="8" ry="8"/><rect x="272" y="272" width="64" height="64" rx="8" ry="8"/><rect x="416" y="416" width="64" height="64" rx="8" ry="8"/><rect x="432" y="272" width="48" height="48" rx="8" ry="8"/><rect x="272" y="432" width="48" height="48" rx="8" ry="8"/><path d="M448,32H304a32,32,0,0,0-32,32V208a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V64A32,32,0,0,0,448,32ZM416,168a8,8,0,0,1-8,8H344a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z"/><path d="M208,32H64A32,32,0,0,0,32,64V208a32,32,0,0,0,32,32H208a32,32,0,0,0,32-32V64A32,32,0,0,0,208,32ZM176,168a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z"/><path d="M208,272H64a32,32,0,0,0-32,32V448a32,32,0,0,0,32,32H208a32,32,0,0,0,32-32V304A32,32,0,0,0,208,272ZM176,408a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V344a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z"/></svg>
                    <p>QR Code</p>
                </div>
            </Link>
            <Link to="/chat">
                <div id='chat-button' className='button-navbar'>
                    <svg id='chat-svg' fill="#000000" width="28px" height="28px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>chat</title>
                    <path d="M25.042 18.672v-12.487c0-1.234-1-2.236-2.236-2.236h-19.571c-1.235-0.001-2.236 1.001-2.236 2.236v12.487c0 1.235 1.001 2.236 2.236 2.236h3.729v5.137l5.704-5.137h10.137c1.237 0 2.237-1.001 2.237-2.236zM28.765 8.858h-2.798c0 0 0 9.972 0 10.909s-1.216 2.142-2.153 2.142-10.945 0.055-10.945 0.055c0 1.235 1.001 1.986 2.236 1.986h4.309l5.622 5.102-0.007-5.102h3.736c1.236 0 2.236-0.751 2.236-1.986v-10.932c0-1.234-1-2.174-2.236-2.174z"></path>
                    </svg>
                    <p>Chat</p>
                </div>
            </Link>
            <Link to="/more">
                <div id='more-button' className='button-navbar'>
                    <svg id='more-svg' fill="#000000" width="29px" height="29px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM9.47,12.29a1.31,1.31,0,0,1-.09.28,1.05,1.05,0,0,1-.13.26,1.45,1.45,0,0,1-.19.23,2.11,2.11,0,0,1-.23.19l-.26.14-.28.08a1.42,1.42,0,0,1-.58,0l-.28-.08-.26-.14a2.11,2.11,0,0,1-.23-.19,1.45,1.45,0,0,1-.19-.23,1.59,1.59,0,0,1-.14-.26,2.29,2.29,0,0,1-.08-.28,1.36,1.36,0,0,1,0-.29,1.52,1.52,0,0,1,.44-1.06,2.11,2.11,0,0,1,.23-.19,1.26,1.26,0,0,1,.26-.13,1.31,1.31,0,0,1,.28-.09,1.42,1.42,0,0,1,.58,0,1.31,1.31,0,0,1,.28.09,1.26,1.26,0,0,1,.26.13,2.11,2.11,0,0,1,.23.19A1.52,1.52,0,0,1,9.5,12,1.36,1.36,0,0,1,9.47,12.29Zm3.59.77A1.52,1.52,0,0,1,12,13.5a1.36,1.36,0,0,1-.29,0l-.28-.08a1.59,1.59,0,0,1-.26-.14,1.45,1.45,0,0,1-.23-.19A1.52,1.52,0,0,1,10.5,12a1.36,1.36,0,0,1,0-.29,2.29,2.29,0,0,1,.08-.28,2.15,2.15,0,0,1,.14-.26,1.57,1.57,0,0,1,.42-.42l.26-.14.28-.08a1.5,1.5,0,0,1,1.35.41,1.45,1.45,0,0,1,.19.23,1.26,1.26,0,0,1,.13.26,1.31,1.31,0,0,1,.09.28,1.36,1.36,0,0,1,0,.29A1.52,1.52,0,0,1,13.06,13.06Zm4.41-.77a1.31,1.31,0,0,1-.09.28,1.05,1.05,0,0,1-.13.26,1.45,1.45,0,0,1-.19.23A1.52,1.52,0,0,1,16,13.5a1.5,1.5,0,0,1-1.06-.44,1.45,1.45,0,0,1-.19-.23,1.59,1.59,0,0,1-.14-.26,2.29,2.29,0,0,1-.08-.28,1.36,1.36,0,0,1,0-.29,1.52,1.52,0,0,1,.44-1.06,1.55,1.55,0,0,1,2.12,0A1.52,1.52,0,0,1,17.5,12,1.36,1.36,0,0,1,17.47,12.29Z"></path></svg>
                    <p>Mais</p>
                </div>
            </Link>
        </section>
        </nav>
    )
}