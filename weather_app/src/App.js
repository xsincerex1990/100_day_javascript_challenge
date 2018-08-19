import React from'react';
import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "d4a6d2a0c7a7a7d4d2784d787d5f1ba7"

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d4a6d2a0c7a7a7d4d2784d787d5f1ba7')
        
        const data = await api_call.json()

    }
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        );
    }
}
export default App;

