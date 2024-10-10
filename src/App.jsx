import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [ data, setData ] = useState(null)
  const [ loading, setLoading ]= useState(false)
  const [showModal, setShowModal] = useState(false)
  
  function handleToggleModal(){
    setShowModal(!showModal)
  }
  
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + 
      `?api_key=${NASA_KEY}`
      
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
          setData(apiData)
          console.log('Fetch from cache today')
          return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetch from API today')
      }catch (err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      { data ? (<Main data={data}/>) : (
        // Loading state
        <div className="flex items-center justify-center flex-[1]">
          <i className="fa-solid fa-gear opacity-20 text-white text-7xl animate-spin"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
        )}
      <Footer data={data} handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App