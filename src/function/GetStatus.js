export default async function getStatus(temp, humidity){
    let status;
    if (await temp >= 30 &&  humidity >90){
        status = 'Need to cool down'
      } else if (await temp >= 23 && humidity > 80){
        status = 'Stable Now'
      } else if (await temp > 18 && humidity >70){
        status = 'Need to heat up'
      } else {
        status = 'Water quality is bad'
      }
      console.log(status)
      return status;
}


