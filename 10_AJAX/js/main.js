document.addEventListener('click', function(){
    const btn = this.getElementById('searchBtn');
    btn.addEventListener('click', getUser)
});

async function getUser()
{
    const username = document.getElementById("input").value;
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);

    if(response.ok)
    {
        const data = await response.json();
        document.getElementById('profile').innerHTML = 
        `
            <img src="${data.avatar_url} alt=Avatar">
            <p>Name: ${data.name || "No name"}</p>
            <p>Login: ${data.login}</p>
            <p>Url to github: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
            <p>Blog: <a href="${data.blog}" target="_blank">${data.blog}</a></p>
            <p>City: ${data.location}</p>
            <p>Email: ${data.email || "No email"}</p>
            <p>Folowers: ${data.folowers || "No folowers"}</p>
            <p>Folowings: ${data.folowings || "No folowers"}</p>
        `
    }
    else{
        document.getElementById('profile').innerHTML = "Not found";
    }
}
