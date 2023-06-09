import './inDevelopment.css'
import { useNavigate } from 'react-router-dom';


export default function InDevelopment(){

    const navigate = useNavigate();

    const redirectHome = () => {
        navigate('/')
    }

    return(
        <div className='development-container'>
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
                        <button onClick={redirectHome} className="redirectHome" type="button">Voltar ao início</button>
                    </div>
                </div>
            </div>
        </div>
    )
}