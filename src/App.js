
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import {useState } from "react";
import './App.css';

function App() {
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState("")
  
  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3f257c93e1b3e37ba779e3e52ca40ccc&units=metric`
    axios.get(apiURL).then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleChangeInput = (e) => {
    console.log(e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }
  
  
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

            <h5 className="weathorCity">
              {data?.city?.name}
            </h5>
            <h6 className="weathorTemp">{data?.list?.main?.temp}</h6>
          </div>
        </div>
      }

    </div>
  );
}

export default App;