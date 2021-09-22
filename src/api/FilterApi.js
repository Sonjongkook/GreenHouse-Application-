import * as firebase from 'firebase'

export default async function getFilteredData(date, time) {
  let data
  let filtered

  await firebase
    .database()
    .ref()
    .on('value', (snapshot) => {
        data = snapshot.val()
        filtered = data.filter(element => element.Date == date & element.Time == time)
    })
  return filtered
}

