const request = require('request');

const geocode = (address,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWRpdGktdHJlaGFuIiwiYSI6ImNrYnR0eWl1dDBkOTUyem1pZ3dnc2s3eTIifQ.e2yQK8JTpmpGS3rl_3TSvw&limit=1`

    request({url,json:true},(error,response)=>{
        if(error){
            callback('Not able to connect to location services!',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location.',undefined)
        }
        else{
            const {features = {}} = response.body;
            const feature = features[0]
            callback(undefined,{
                    latitude:feature.center[1],
                    longitude:feature.center[0],
                    location:feature.place_name
                })
        }
    })
}

module.exports = geocode