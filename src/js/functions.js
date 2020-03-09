fetch('../../../src/js/data/1602593.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });

console.log('hiiii');
