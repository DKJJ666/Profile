import './style.css'
import Title from '../Title/index.jsx'
import ProfileSection from '../ProfileSection/index.jsx'  
import LinkButton from '../LInkButton/index.jsx'  

export default function Profile(props){
    const eventoButton = (ev) =>{
        console.log(ev)
        alert("Obrigado por me seguir!!")
    }

    return(
        <div className='container'>
            <img className='avatar' src={props.avatar} alt={props.name}></img>

            <Title>
                <h2>{props.name}</h2>
                <button onClick={eventoButton}>Seguir</button>
            </Title>

            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>

            <div className='links'>
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinbUrl}>Linkedin</LinkButton>
                <LinkButton href={props.instagramUrl}>Instagram</LinkButton>
            </div>
        </div>
    )
}