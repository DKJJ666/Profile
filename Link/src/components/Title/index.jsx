import './style.css'
export default function Title (props){

    return(
        <h2 className="title">
            {props.children}
        </h2>
    )
}