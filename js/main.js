const requestUrl = 'https://reqres.in/api/users';
const usersList = document.getElementById('user-table');
let users = [];

const createTemplate = data => {
    let template = `
        <tr class="user-table__item">
            <td class="users-table__id">${data.id}</td>
            <td class="users-table__avatar">
              <img src="${data.avatar}" alt="avatar">
            </td>
            <td class="user-table__name">
                <span class="users-table__first-name">${data.first_name}</span>
                <span class="users-table__last-name">${data.last_name}</span>
            </td>
            <td class="users-table__email">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
        </tr>
    `
    return template;
};

const getUsers = url => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            users = json.data;
            users.forEach(item => {
                usersList.innerHTML = usersList.innerHTML + createTemplate(item);
            })
        })
};

getUsers(requestUrl);