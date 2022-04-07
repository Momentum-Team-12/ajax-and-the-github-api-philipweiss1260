console. log ('linked')

const profileDiv = document.querySelector("#profile")

fetch('https://api.github.com/users/philipweiss1260', {
    method: "GET",
    headers: {},
})
.then (function (response){
    return response.json()
})
.then (function (data) {
    let nameDiv = document.createElement('p')
    nameDiv.innerText = data.name
    profileDiv.appendChild(nameDiv)
    let avatar = document.createElement('img')
    avatar.src = data.avatar_url
    profileDiv.appendChild(avatar)
    let locDiv = document.createElement('p')
    locDiv.innerText = `Location: ${data.location}`
    profileDiv.appendChild(locDiv)
    let companyDiv = document.createElement('p')
    companyDiv.innerText = data.company
    profileDiv.appendChild(companyDiv)
    let gitURL = document.createElement('p')
    gitURL.innerHTML = `GitHub URL: <a href="${data.html_url}">${data.login}</a>`
    profileDiv.appendChild(gitURL)
    let gitUser = document.createElement('p')
    gitUser.innerText = `GitHub username: ${data.login}`
    profileDiv.appendChild(gitUser)
    let reposDiv = document.createElement('p')
    reposDiv.innerHTML = `<a href="${data.repos_url}">REPOS</a>`
    profileDiv.appendChild(reposDiv)




})
