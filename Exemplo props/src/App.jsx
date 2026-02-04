import { useState } from 'react'
import Curtidas from '../components/Curtidas.jsx'

function App() {
const [curtidas, setCurtidas] = useState(0)

const incrementarCurtidas = () => setCurtidas(curtidas => curtidas+1)

return (
  <div>
    <h1>Conteúdo incrível</h1>
    <p>Postagem do blog</p>
    <Curtidas aoClicar={incrementarCurtidas} total={curtidas} />
  </div>
)
}

export default App