function Message(){
    const name:string = 'Prashad';
    if (name){
        return <h1>Hellow {name}</h1>;
    }
    return <h1>Hellow World!</h1>;
}
export default Message;