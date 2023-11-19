const valorEmDolar = prompt('Digite o valor em dolar:');
if (!valorEmDolar) {
    alert('Você precisa digitar um valor');
}

const response = fetch(' https://economia.awesomeapi.com.br/last/USD-BRL', {method: 'get'})
    .then(function(data) {
      return data.json()
    })
    .then(function(jsonData) {
        const conversaoDolarReal = jsonData.USDBRL.bid
        var valorEmReal = valorEmDolar * conversaoDolarReal
        valorEmReal = valorEmReal.toFixed(2)
        alert("O valor é R$" + valorEmReal)
    })
    .catch(error => {
        console.error('Erro:', error);
    });