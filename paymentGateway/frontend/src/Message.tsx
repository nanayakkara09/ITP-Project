//we can create easily dynamic content
//PascalCasing
function Message(){
    //JSX: Javascript xml

    const name = 'Thilina';
    if(name){
        return <h1>Hellow {name}</h1>;
    }
    return <h1>Hello world!!!</h1>;
    
}

export default  Message;