

async function fetchData(url){
    let result = await fetch(url)
                    .then(response => {
                        if(response.ok){
                            return response.json();
                        }
                    })
                    .then(data => data)
                    .catch(error => `${error.message}`)
    return result;
}

async function fake_delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

module.exports = {
    fetchData,
    fake_delay
}


fetchData('https://www.zippopotam.us/bg/8000');