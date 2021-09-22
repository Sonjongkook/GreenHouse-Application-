import * as firebase from 'firebase'

export default async function getData() {
  let data
  await firebase
    .database()
    .ref()
    .on('value', (snapshot) => {
      data = snapshot.val()
    })
  return data
}

