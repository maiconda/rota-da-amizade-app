import { useState, useEffect, Fragment, useRef } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar(){

    const history = useLocation()
    const containerRef = useRef(null);

    useEffect(() => {
        selectButton()
    }, [history]);

    const selectButton = () => {
    const path = window.location.pathname
    const segments = path.split("/")
    const url = segments.pop();

    const buttons = {
        'municipios': {
        button: document.getElementById('municipios-button'),
        svg: document.getElementById('municipios-svg')
        },
        'associados': {
        button: document.getElementById('associados-button'),
        svg: document.getElementById('associados-svg')
        },
        'eventos': {
        button: document.getElementById('eventos-button'),
        svg: document.getElementById('eventos-svg')
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

    const openPopup = () => {
        const container = containerRef.current;
        if (container) {
          container.style.zIndex = '2';
          setTimeout(() => {
            container.style.opacity = '100%';
          }, 100);
        }
    };
    
    const closePopup = () => {
        const container = containerRef.current;
        if (container) {
          container.style.opacity = '0';
          setTimeout(() => {
            container.style.zIndex = '-1';
          }, 100);
        }
    };


    return(
    <Fragment>
        <div  ref={containerRef} className='development-container'>
            <div className="card">
                <div className="header">
                    <div className="image">
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    </div>
                    <div className="content">
                        <h2 className="title">Em Breve!</h2>
                        <p className="message">O aplicativo está em fase de desenvolvimento, portanto, algumas funções ainda não estão disponíveis.</p>
                    </div>
                    <div className="actions">
                        <button onClick={closePopup} className="redirectHome" type="button">Voltar ao início</button>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar-nav">
        <section className="navbar-section">
            <div id='inicio-button' className='button-navbar'>
                <svg id='inicio-svg' width="35px" height="35px" viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path>
                </svg>
                <p>Início</p>
            </div>
            <div onClick={openPopup} id='municipios-button' className='button-navbar'>
            <svg id='municipios-svg-2' width="30px" height="25px" viewBox="0 0 24 24" fill="none">
            <path  id='municipios-svg' fillRule="evenodd" clipRule="evenodd" d="M11.3856 23.789L11.3831 23.7871L11.3769 23.7822L11.355 23.765C11.3362 23.7501 11.3091 23.7287 11.2742 23.7008C11.2046 23.6451 11.1039 23.5637 10.9767 23.4587C10.7224 23.2488 10.3615 22.944 9.92939 22.5599C9.06662 21.793 7.91329 20.7041 6.75671 19.419C5.60303 18.1371 4.42693 16.639 3.53467 15.0528C2.64762 13.4758 2 11.7393 2 10C2 7.34784 3.05357 4.8043 4.92893 2.92893C6.8043 1.05357 9.34784 0 12 0C14.6522 0 17.1957 1.05357 19.0711 2.92893C20.9464 4.8043 22 7.34784 22 10C22 11.7393 21.3524 13.4758 20.4653 15.0528C19.5731 16.639 18.397 18.1371 17.2433 19.419C16.0867 20.7041 14.9334 21.793 14.0706 22.5599C13.6385 22.944 13.2776 23.2488 13.0233 23.4587C12.8961 23.5637 12.7954 23.6451 12.7258 23.7008C12.6909 23.7287 12.6638 23.7501 12.645 23.765L12.6231 23.7822L12.6169 23.7871L12.615 23.7885C12.615 23.7885 12.6139 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789ZM12 23L11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"/>
            </svg>
                <p>Municípios</p>
            </div>
            <div onClick={openPopup} id='eventos-button' className='button-navbar'>
                <svg width="30px" id='eventos-svg-2' height="32px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" id='eventos-svg' clipRule="evenodd" d="M7 2a1 1 0 0 0-1 1v1.001c-.961.014-1.34.129-1.721.333a2.272 2.272 0 0 0-.945.945C3.116 5.686 3 6.09 3 7.205v10.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h11.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V7.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C19.34 4.13 18.961 4.015 18 4V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zM5 9v8.795c0 .427.019.694.049.849.012.06.017.074.049.134a.275.275 0 0 0 .124.125c.06.031.073.036.134.048.155.03.422.049.849.049h11.59c.427 0 .694-.019.849-.049a.353.353 0 0 0 .134-.049.275.275 0 0 0 .125-.124.353.353 0 0 0 .048-.134c.03-.155.049-.422.049-.849L19.004 9H5zm8.75 4a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5z" fill="#000000"/></svg>
                <p>Próximos Eventos</p>
            </div>
            <div onClick={openPopup} id='associados-button' className='button-navbar'>
                <svg id='associados-svg-2' width="34px" height="42px" viewBox="0 0 24 24" fill="none">
                <path  id='associados-svg' fillRule="evenodd" clipRule="evenodd" d="M5.63605 5.63605C7.19815 4.07395 9.73081 4.07395 11.2929 5.63605L14.1213 8.46448C15.6834 10.0266 15.6834 12.5592 14.1213 14.1213C13.7308 14.5119 13.0976 14.5119 12.7071 14.1213C12.3166 13.7308 12.3166 13.0976 12.7071 12.7071C13.4882 11.9261 13.4882 10.6597 12.7071 9.87869L9.87869 7.05026C9.09764 6.26922 7.83131 6.26922 7.05026 7.05026C6.26922 7.83131 6.26922 9.09764 7.05026 9.87869L7.75737 10.5858C8.1479 10.9763 8.14789 11.6095 7.75737 12C7.36685 12.3905 6.73368 12.3905 6.34316 12L5.63605 11.2929C4.07395 9.73081 4.07395 7.19815 5.63605 5.63605ZM11.2929 9.8787C11.6834 10.2692 11.6834 10.9024 11.2929 11.2929C10.5119 12.074 10.5119 13.3403 11.2929 14.1213L14.1213 16.9498C14.9024 17.7308 16.1687 17.7308 16.9498 16.9498C17.7308 16.1687 17.7308 14.9024 16.9498 14.1213L16.2427 13.4142C15.8521 13.0237 15.8521 12.3905 16.2427 12C16.6332 11.6095 17.2663 11.6095 17.6569 12L18.364 12.7071C19.9261 14.2692 19.9261 16.8019 18.364 18.364C16.8019 19.9261 14.2692 19.9261 12.7071 18.364L9.8787 15.5356C8.3166 13.9735 8.3166 11.4408 9.8787 9.8787C10.2692 9.48817 10.9024 9.48817 11.2929 9.8787Z" fill="#000000"/>
                </svg>
                <p>Associados</p>
            </div>
            <div onClick={openPopup} id='more-button' className='button-navbar'>
                <svg id='more-svg' fill="#000000" width="29px" height="33px" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM9.47,12.29a1.31,1.31,0,0,1-.09.28,1.05,1.05,0,0,1-.13.26,1.45,1.45,0,0,1-.19.23,2.11,2.11,0,0,1-.23.19l-.26.14-.28.08a1.42,1.42,0,0,1-.58,0l-.28-.08-.26-.14a2.11,2.11,0,0,1-.23-.19,1.45,1.45,0,0,1-.19-.23,1.59,1.59,0,0,1-.14-.26,2.29,2.29,0,0,1-.08-.28,1.36,1.36,0,0,1,0-.29,1.52,1.52,0,0,1,.44-1.06,2.11,2.11,0,0,1,.23-.19,1.26,1.26,0,0,1,.26-.13,1.31,1.31,0,0,1,.28-.09,1.42,1.42,0,0,1,.58,0,1.31,1.31,0,0,1,.28.09,1.26,1.26,0,0,1,.26.13,2.11,2.11,0,0,1,.23.19A1.52,1.52,0,0,1,9.5,12,1.36,1.36,0,0,1,9.47,12.29Zm3.59.77A1.52,1.52,0,0,1,12,13.5a1.36,1.36,0,0,1-.29,0l-.28-.08a1.59,1.59,0,0,1-.26-.14,1.45,1.45,0,0,1-.23-.19A1.52,1.52,0,0,1,10.5,12a1.36,1.36,0,0,1,0-.29,2.29,2.29,0,0,1,.08-.28,2.15,2.15,0,0,1,.14-.26,1.57,1.57,0,0,1,.42-.42l.26-.14.28-.08a1.5,1.5,0,0,1,1.35.41,1.45,1.45,0,0,1,.19.23,1.26,1.26,0,0,1,.13.26,1.31,1.31,0,0,1,.09.28,1.36,1.36,0,0,1,0,.29A1.52,1.52,0,0,1,13.06,13.06Zm4.41-.77a1.31,1.31,0,0,1-.09.28,1.05,1.05,0,0,1-.13.26,1.45,1.45,0,0,1-.19.23A1.52,1.52,0,0,1,16,13.5a1.5,1.5,0,0,1-1.06-.44,1.45,1.45,0,0,1-.19-.23,1.59,1.59,0,0,1-.14-.26,2.29,2.29,0,0,1-.08-.28,1.36,1.36,0,0,1,0-.29,1.52,1.52,0,0,1,.44-1.06,1.55,1.55,0,0,1,2.12,0A1.52,1.52,0,0,1,17.5,12,1.36,1.36,0,0,1,17.47,12.29Z"></path></svg>
                <p>Mais</p>
            </div>
        </section>
        </nav>
    </Fragment>
    )
}