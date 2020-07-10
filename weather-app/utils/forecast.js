const request = require('request');

const forecast = (lat,long,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=be25f9e10fc07c422696f9ce0938d99b&query=${lat},${long}&units=m`

    request({url,json:true},(error,response)=>{

        const {body = {} } = response;
        const {current = {}} = body;
        const description = current && current.weather_descriptions && current.weather_descriptions[0] || ""
    
        if(error){
            callback('Failed to fetch results!',undefined)
        }
        else if(body.error){
            callback('Unable to find location!',undefined)
        }
        else{
            callback(undefined,
                `${description} It is currently ${current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast