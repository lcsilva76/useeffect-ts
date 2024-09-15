import { useEffect } from "react";

type ValorProps ={ valor: number; aumentar: ()=>void;}

export default function ExemploEffect({valor,aumentar}:ValorProps){

    useEffect(()=>{
        console.log('Em todas as alterações eu sou chamado!!!');
    })
    
    //Exemplo de chamada na criação
    useEffect(()=>{
        console.log('Sou chamado só quando o comp. é criado!!!');
    },[])
    
    //Exemplo de chamada na mudança de um valor específico
    useEffect(()=>{
        console.log(`Sou chamado só quando o ${valor} muda!!!`);
    },[valor])
    
    //Exemplo de chamada quando o elemento é excluído
    useEffect(()=>{
        return ()=> console.log(`Ops, me apagaram!`);
    },[])

    return(
        <div>
            <h2>Exemplo Effect</h2>
            <p>Valor do State: {valor}</p>
            <button onClick={aumentar}>Incrementar</button>
        </div>
    )
}

