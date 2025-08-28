document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data);//adiciona linha para verificar os dados no console

    fetch('https://script.google.com/a/macros/escola.pr.gov.br/s/AKfycbwbb81xcm21BNO6Gp6bTBZhwZw80y-Mn-3D1QrL6vmwdUGA06iOlM38wJZQoSon5cgU/exec', {
        method: 'POST',
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.result === 'success') {
            alert ('Dados enviados com sucesso!');
            event.target.reset();
        } else if (responseData.result === 'error' && responseData.message ==='Email already exists' ) {
            alert('Erro: O email já existe.');
        } else {
            alert('Erro ao enviar os dados.')
        }
    })
    .catch(error => console.error('Error:' , error));
});