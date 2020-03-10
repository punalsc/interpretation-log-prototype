// import dataJSON from '../js/data/1602593.json';

fetch(
  'https://gist.githubusercontent.com/punalsc/b74313826cc464b1400524e319c68ed1/raw/6a7c25837f74243443a3d518118a74f78e02d70b/cardone.json'
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let result = '';
    const comments = document.getElementById('comments');
    const reGex = /\[(.*?)\]/g;
    data.comments.forEach(comment => {
      result += `<li>${comment.replace(
        reGex,
        '<span class="bold">[$1]</span>'
      )}</li>`;
    });
    comments.innerHTML = result;
  })
  .catch(err => console.log(err));
