function aboutArrow() {
    let arrow = document.getElementById('animation');
    arrow.classList.toggle('rotate');
    let about = document.getElementById('repositorys');
    about.classList.toggle('showRepositys')
}

// AXIOS

let arr = [];

axios.get(`https://api.github.com/users/hudsonb1/repos`)
    .then(response => {
        const repositories = response.data;

        repositories.map((repository) => {
            arr.push({
                name: repository.name,
                url: repository.html_url
            })
        });
        console.log(arr);
        

        const list = document.getElementById("list");

        arr.map((item) => {
            let a = document.createElement("a");
            a.href = item.url;
            a.target = '_blank';
            a.innerHTML = item.name.toUpperCase();
            list.appendChild(a);
        });
    }).catch(error => console.error(error));
