import './style.css'

export default function LInkButton(props){
    return(
        <a className='linkButton' href={props.href} target='_blank'>
            {props.children}
        </a>
    )
}