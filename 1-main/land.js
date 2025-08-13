document.getElementsById(`contactform`).addEventLitener(`submit`, funtion(event))   {
    event.preventDefault();

    const formdata = new formData(event.target);
    const dta = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data); // adiciona esta linha para 
    //verificar os dados no console

    fetch(`seu endereço`)
