const button = document.querySelector(`button`)

function buttonClick(){
    console.log(`button clicked`)
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then(res => {
        for (let i = 0; i < res.data.results[0].residents.length; i++){
            console.log(res.data.results[0].residents[i])
            axios.get(res.data.results[0].residents[i])
            .then(res => {
                console.log(res.data)
                let name = document.createElement(`h2`)
                name.textContent = res.data.name
                document.querySelector(`div`).appendChild(name)
            })
        }
    })
}

button.addEventListener(`click`, buttonClick)