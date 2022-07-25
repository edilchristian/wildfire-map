import Map from './components/Map'
import { useState, useEffect} from 'react'
import Loader from './components/Loader'
import Header from './components/Header'

console.log(process.env.REACT_APP_WILDFIRE_API_KEY)

function App() {

  const [eventData, setEventData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      console.log("events are ", events)
      setEventData(events)
      setLoading(false)
    }


  fetchEvents()
  }, [])
  

  console.log("event data is ", eventData)

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
