document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // add user choices later on
  // const choice = document.querySelector('input').value
  const url = 'http://www.boredapi.com/api/activity/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let h2 = document.querySelector('h2');
        h2.innerHTML = data.activity;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}