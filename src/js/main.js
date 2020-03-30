fetch(
  'https://gist.githubusercontent.com/punalsc/b74313826cc464b1400524e319c68ed1/raw/67290602a3ff1ca18407e011990b66cbc9eef4f2/cardone.json'
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
