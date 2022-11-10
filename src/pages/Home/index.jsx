import './styles.css';
import {Card} from '../../components/Card';

export function Home() {
  return (
    <div className="container">
    <h1>Lista de presença</h1>
    <input type="text" placeholder="Digite o nome"/>
    <button type="button">Adicionar</button>

    <Card name="Samuel" time="10:55"/>
    <Card name="João" time="11:00"/>
    <Card name="Ana" time="12:35"/>
    </div>
    
  )
}


