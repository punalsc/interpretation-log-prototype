fetch('../../../src/js/data/1602593.json')
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
