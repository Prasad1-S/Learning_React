interface Prop{
    color:string;
    text:string;
    onClick:()=>void;
}
function Button({color, text, onClick}:Prop){
    return <button type="button" className={`btn btn-${color}`} onClick={onClick}>{text}</button>;
}
export default Button;