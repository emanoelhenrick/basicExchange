const $button = document.querySelector('button')
const $inputBRL = document.querySelector('input')
const $showUSD = document.querySelector('h1')

$button.onclick = () => exchangeAPI($inputBRL.value)

const exchangeAPI = amount => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "ko4Dt2SEa7DlGWsLLLUSsDaDSiaowDor");

    const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=USD&from=BRL&amount=${amount}`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => changeHTML(result.result))
        .catch(error => console.log('error', error));
}

const changeHTML = (result) => {
    const amount = result.toFixed(2)
    $showUSD.innerHTML = `${amount} USD`
}