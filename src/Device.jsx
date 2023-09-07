export default function Device(props){
    console.log(props);
    return(
        <div>
            <h2>This device: name: {props.name} , price: {props.price}</h2>
        </div>
    )
}