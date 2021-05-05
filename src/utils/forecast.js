const request = require('request')
const forecast = (latitude, longitude, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=d39d00e753663976ca1581ba1e2f57c1&query=' + latitude + ',' + longitude + '&units=f'

  request ({ url, json: true}, (error, {body}) => {
  
    if(error) {

        callback('Unable to find services!', undefined)
    }else if(body.error){
          callback('Unable to find location', undefined)
    }else{
     
        callback(undefined,"It is currently " + body.current.temperature + " degrees out. It is feels like " 
        +  body.current.feelslike+ " degress out. The humidity is " + body.current.humidity + "%." )
        
      }
  })
}

module.exports = {
  forecast : forecast
}