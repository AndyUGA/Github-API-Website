

const axios = require('axios');


export async function getData(githubUserName) {
    let githubAPIUrl = `https://api.github.com/users/${githubUserName}`;
    try {
        const response = await axios.get(githubAPIUrl);
        console.log(10, response.data);
        return response.data;
    } catch (err) { 
        console.log(err);
    }
}