import './App.css'
import ListadoSedes from './components/ListadoSedes'
import MyTable from './components/MyTable';
import useSedes from './hooks/useSedes'

function App() {

  const { sedes, fetchSedes } = useSedes();

  return (
    <ListadoSedes sedes={sedes} fetchSedes={fetchSedes} />
    //<MyTable sedes={sedes} fetchSedes={fetchSedes} />
  )
}

export default App
