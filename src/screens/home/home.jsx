import './home.css'
import HomeButtons from '../../components/homeButtons/homeButtons'
import { Fragment, useState, useEffect } from 'react';
import CardHome from '../../components/cardHome/cardHome';

export default function Home(){

    const buttons = [
        {name: 'Rotas Turísticas', svg: 
        (<svg width="30px" height="30px" viewBox="0 0 48 48">
        <title>map-solid</title>
        <g>
          <g>
            <rect width="48" height="48" fill="none"/>
          </g>
          <g id="icons_Q2" fill='#801436'>
            <path d="M3.5,7.6A1.9,1.9,0,0,0,2,9.5V41.4a2,2,0,0,0,2,2h.5L15,40.5V4.5ZM44,4.6h-.5L33,7.5v36l11.5-3.1A1.9,1.9,0,0,0,46,38.5V6.6A2,2,0,0,0,44,4.6Zm-25,36,10,2.8V7.4L19,4.6Z"/>
          </g>
        </g>
      </svg>), 
        color1: '#EEB5C7'},
        {name: 'Onde Dormir', svg:
        (<svg fill="#CC3666" width="35px" height="35px" viewBox="0 0 24 24"><path d="M20,12V4a1,1,0,0,0-2,0V6H6V4A1,1,0,0,0,4,4v8a2,2,0,0,0-2,2v6a1,1,0,0,0,2,0V18H20v2a1,1,0,0,0,2,0V14A2,2,0,0,0,20,12Zm-6-2h3a1,1,0,0,1,1,1v1H13V11A1,1,0,0,1,14,10ZM6,11a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v1H6Z"/></svg>),
        color1: '#FCD8E3'},
        {name: 'Onde Comer', svg: 
        (<svg fill="#CCC249" width="30px" height="30px" viewBox="0 -3.84 122.88 122.88" version="1.1">
        <g>
        <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z"/>
        </g>
        </svg>),
        color1: '#FFFDE8'},
        {name: 'O Que Fazer', svg: 
        (<svg width="33px" height="33px" viewBox="0 0 24 24" fill="none"><path d="M14.5 16.5H16.1152C16.9825 16.5 17.7946 16.0745 18.2883 15.3614L21.6315 10.5323C21.8588 10.204 21.889 9.77803 21.7105 9.42094C21.3678 8.73545 20.4444 8.60613 19.9265 9.17109L17.2727 12.0661C16.2059 13.23 14.5301 13.612 13.0643 13.0257L9.44043 11.5762C8.53873 11.2155 7.51727 11.3218 6.70922 11.8605L2.87237 14.4184C2.37401 14.7507 2.20104 15.402 2.4689 15.9377C2.76223 16.5244 3.47562 16.7622 4.06229 16.4689L7.24772 14.8762C7.86821 14.5659 8.54577 15.1811 8.29674 15.8286L6.50003 20.5M7.00003 4H4.00003M6.00003 7H4.00003M18 6.5C18 8.70914 16.2092 10.5 14 10.5C11.7909 10.5 10 8.70914 10 6.5C10 4.29086 11.7909 2.5 14 2.5C16.2092 2.5 18 4.29086 18 6.5Z" stroke="#21A6CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"/></svg>),
        color1: '#D3F2FB'},
        {name: 'Perto de Você', svg: 
        (<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.3856 23.789L11.3831 23.7871L11.3769 23.7822L11.355 23.765C11.3362 23.7501 11.3091 23.7287 11.2742 23.7008C11.2046 23.6451 11.1039 23.5637 10.9767 23.4587C10.7224 23.2488 10.3615 22.944 9.92939 22.5599C9.06662 21.793 7.91329 20.7041 6.75671 19.419C5.60303 18.1371 4.42693 16.639 3.53467 15.0528C2.64762 13.4758 2 11.7393 2 10C2 7.34784 3.05357 4.8043 4.92893 2.92893C6.8043 1.05357 9.34784 0 12 0C14.6522 0 17.1957 1.05357 19.0711 2.92893C20.9464 4.8043 22 7.34784 22 10C22 11.7393 21.3524 13.4758 20.4653 15.0528C19.5731 16.639 18.397 18.1371 17.2433 19.419C16.0867 20.7041 14.9334 21.793 14.0706 22.5599C13.6385 22.944 13.2776 23.2488 13.0233 23.4587C12.8961 23.5637 12.7954 23.6451 12.7258 23.7008C12.6909 23.7287 12.6638 23.7501 12.645 23.765L12.6231 23.7822L12.6169 23.7871L12.615 23.7885C12.615 23.7885 12.6139 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789ZM12 23L11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" fill="#1B6980"/>
        </svg>),
        color1: '#BBDCE5'},
        {name: 'Outros Serviços', svg: 
        (<svg fill="#801436" height="28px" width="28px" version="1.1"
        viewBox="0 0 612.004 612.004">
        <g>
            <path d="M593.676,241.87h-48.719c-5.643-21.066-13.982-41.029-24.649-59.482l34.459-34.459c7.158-7.154,7.158-18.755,0-25.912
                l-64.783-64.783c-7.154-7.156-18.757-7.156-25.909,0l-34.461,34.461c-18.453-10.667-38.414-19.005-59.482-24.647V18.325
                c0-10.121-8.201-18.324-18.324-18.324h-91.616c-10.123,0-18.324,8.203-18.324,18.324V67.05c-21.068,5.64-41.027,13.98-59.48,24.647
                l-34.459-34.459c-7.158-7.158-18.755-7.158-25.912,0l-64.785,64.781c-7.158,7.156-7.158,18.755,0,25.913l34.461,34.461
                C81.03,200.845,72.69,220.804,67.051,241.87H18.326C8.205,241.87,0,250.073,0,260.193v91.618c0,10.121,8.205,18.324,18.326,18.324
                h48.725c5.64,21.066,13.98,41.027,24.645,59.478l-34.461,34.461c-7.158,7.154-7.158,18.757,0,25.911l64.781,64.783
                c7.16,7.158,18.759,7.158,25.916,0l34.459-34.459c18.451,10.665,38.412,19.005,59.48,24.645v48.727
                c0,10.119,8.201,18.324,18.324,18.324h91.616c10.123,0,18.324-8.205,18.324-18.324v-48.727c21.068-5.64,41.029-13.98,59.482-24.647
                l34.461,34.459c7.154,7.158,18.755,7.158,25.913,0l64.781-64.781c7.158-7.158,7.158-18.759,0-25.913l-34.459-34.459
                c10.667-18.453,19.007-38.414,24.649-59.479h48.721c10.123,0,18.324-8.203,18.324-18.324v-91.618
                C612,250.073,603.799,241.87,593.676,241.87z M306.002,397.619c-50.601,0-91.616-41.021-91.616-91.616
                c0-50.597,41.017-91.616,91.616-91.616s91.616,41.019,91.616,91.616C397.616,356.598,356.601,397.619,306.002,397.619z"/>
        </g>
        </svg>),
        color1: '#EEB5C7'}
    ]
    const cities = [
        {name: 'Todos os Municípios', img: 'https://deolhonofuturo.uninter.com/wp-content/uploads/2020/06/turismo-pos-pandemia-1123x675.png'},
        {name: 'Arroio Trinta', img: 'https://rotadaamizade.com.br/wp-content/uploads/2021/08/arroio_trinta_17.png'},
        {name: 'Fraiburgo', img: 'https://static.coalize.com.br/data/images/fraiburgo-sc.jpg'},
        {name: 'Iomerê', img: 'https://rotadaamizade.com.br/wp-content/uploads/2021/08/iomere_03.jpg'},
        {name: 'Pinheiro Preto', img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/d3/12/0c/visao-geral-do-parque.jpg'},
        {name: 'Tangará', img: 'https://turismo.tangara.sc.gov.br/uploads/sites/217/2022/12/Tangara-Cidade-Vista-Aerea-scaled-2000x1000.jpg'},
        {name: 'Videira', img: 'https://i.ytimg.com/vi/GRSomT3B5sw/maxresdefault.jpg'}
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState({name:'Selecione um Município', img:'https://deolhonofuturo.uninter.com/wp-content/uploads/2020/06/turismo-pos-pandemia-1123x675.png'})
    const [div1Height, setDiv1Height] = useState(0)
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [activeButton, setActiveButton] = useState('')

    useEffect(() => {
        const div1 = document.getElementById('content-header');
        const height = div1.offsetHeight;
        setDiv1Height(height);
    }, [selectedValue]);
  
    useEffect(() => {
        const cities2 = [
            "Fraiburgo",
            "Arroio Trinta",
            "Tangará",
            "Videira",
            "Pinheiro Preto",
            "Iomerê"
        ];
    
        const types = [
            "Rotas Turísticas",
            "Onde Dormir",
            "Onde Comer",
            "O Que Fazer",
            "Perto de Você"
        ];
    
        const cutePhrases = [
            "Explorando juntos as maravilhas de",
            "Descobrindo o encanto de",
            "Aproveitando o aconchego de",
            "Saboreando as delícias de",
            "Aventurando-se em",
            "Vivendo momentos mágicos em",
            "Explorando a beleza natural de",
            "Conhecendo a cultura e história de",
            "Relaxando na paz e tranquilidade de",
            "Descobrindo as surpresas encantadoras de"
        ];
    
        const getRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    
        const getRandomElement = (array) => {
            const randomIndex = getRandomNumber(0, array.length - 1);
            return array[randomIndex];
        };
    
        const getRandomCutePhrase = () => {
            const phrase = getRandomElement(cutePhrases);
            return `${phrase} `;
        };
    
        const getRandomType = () => {
            return getRandomElement(types);
        };
    
        const imgs = [
            'https://s1.static.brasilescola.uol.com.br/be/2022/04/turismo.jpg',
            'https://blog.123milhas.com/wp-content/uploads/2022/05/tipos-de-turismo-para-fazer-no-brasil-ecoturismo-cultural-gastronomico-conexao123.png.jpg',
            'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/coral-reforestation-maldives.jpg?w=1600&h=900',
            'https://rodoviariaonline.com.br/wp-content/uploads/2019/05/o-que-e-turismo-de-aventura-e-como-pratica-lo.jpg',
            'https://www.passagenspromo.com.br/blog/wp-content/uploads/2022/02/Tipos-de-turismo-740x415.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFijr6IFhZBwxr0wTC_52st4O_OdNDzM9U-g&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAaIQ1tQdBowMxZLK6yA-tH0Wn9CgnW9kJw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFFPKy_YROP-MzI5q9mHC6Va4-IeKvDPamg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67e3BG2R81kqfiUrOXdC7xjBvIrO0AG4rOA&usqp=CAU',
            'https://www.melhoresdestinos.com.br/wp-content/uploads/2022/04/melhores-destinos-mundo-turismo-aventura-capa.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48zBccABbdIZ8af-mPPYAz3W-VkZNPVxPsA&usqp=CAU'
        ];
    
        const generatedPosts = [];

        for (let i = 0; i < 30; i++) {
            const city = getRandomElement(cities2);
            const phrase = getRandomCutePhrase() + city;
            const type = getRandomType();
            const img = getRandomElement(imgs);
    
            generatedPosts.push({
            title: phrase,
            city: city,
            img,
            type
            });
        }
  
        setPosts(generatedPosts);
    }, []);

    const filteredPosts = posts.filter((post) => {
        if (
          selectedValue.name === 'Selecione um Município' ||
          selectedValue.name === 'Todos os Municípios'
        ) {
          return true
        } else {
          return post.city === selectedValue.name
        }
    }).filter((post) => {
        if (searchTerm === '') {
          return true
        } else {
          const lowerCaseSearchTerm = searchTerm.toLowerCase()
          return post.title.toLowerCase().includes(lowerCaseSearchTerm)
        }
    }).filter((post) => {
        if (activeButton === '') {
          return true
        } else {
          return post.type === activeButton
        }
    });

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = (name, img) => {
        setSelectedValue({name: name, img: img});
        setIsOpen(false);
    }

    return(
        <Fragment>
        <section className="home-container">
            <div className='home-cities'>
            <div className='select'>
                <button onClick={openModal}>{selectedValue.name}</button>
            </div>
                <span className='background-img'></span>
                <img src={selectedValue.img} alt="" />
            </div>
            <div className='home-content'>
            <div id='content-header'>
                <h3>{selectedValue.name == 'Selecione um Município' || selectedValue.name == 'Todos os Municípios' ? 'Seja bem vindo à Rota da Amizade!' : ` Seja bem vindo a ${selectedValue.name}!`}</h3>
                <div className='home-search'>
                    <input onChange={(e) => {setSearchTerm(e.target.value)}} placeholder='Pesquisar' type="text" />
                    <button className='search-icon-button'>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Interface / Search_Magnifying_Glass">
                        <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#3D3E3F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        </svg>
                    </button>
                </div>
            </div>
                <div id='posts-div' style={{height: `calc(100% - ${div1Height}px - 32px`}}>
                    <div className='buttons-div'>
                            {buttons.map((button, index) => (
                                <HomeButtons
                                    key = {index}
                                    name = {button.name}
                                    color1 = {button.color1}
                                    svg = {button.svg}
                                    buttonActive = {activeButton == button.name ? 'button-div-active' : 'button-div-desactive'}
                                    onClick = {() => {
                                        if (activeButton == button.name) {
                                            setActiveButton('')
                                        } else {
                                            setActiveButton(button.name)
                                        }
                                    }}
                                />
                            ))}
                    </div>
                    {filteredPosts.length > 0 ? 
                        filteredPosts.map((post, index) => (
                            <CardHome
                                key = {index}
                                img = {post.img}
                                title = {post.title}
                                city = {post.city}
                                type = {post.type}
                            />
                        )) : 
                        <div className='no-result'>Sem resultados disponíveis</div>
                    }
                </div>
            </div>
        </section>
        {isOpen && (
        <div className="modal-container">
            <div  onClick={() => {setIsOpen(false)}} className='modal-background'></div>
            <div className="modal-content">
                {cities.map((city, index) => (
                    <div key={index} className='button-city-div'>
                        <button key={index} onClick={() => {closeModal(city.name, city.img)}}>{city.name}</button>
                    </div>
                ))}
            </div>
        </div>
        )}
        </Fragment>
    )
}