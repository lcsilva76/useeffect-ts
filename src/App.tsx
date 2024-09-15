import { useState } from 'react'
import './App.css'
import ExemploEffect from './components/ExemploEffect'

function App() {
  const [valor, setValor] = useState<number>(0)
  const [filho, setFilho] = useState<boolean>(true)

  function aumentar(){
    setValor(valor + 1)
  }
  
  return (
    <div>
      <h1>Componente App</h1>
      <button onClick={()=>setFilho(!filho)}>{filho ? "Apagar" : "Criar"}</button>
      {filho ? <ExemploEffect valor={valor} aumentar={aumentar} /> : ''}
    </div>
  )
}
export default App
