/**
 * 获取
 * @param {*} param0 
 */
export const fetchRandomData = async ({type = '', count = 10} = {}) => {
    return fetch(`https://cnodejs.org/api/v1/topics/`,{ method: "get"}).then(data=>data.json());
}

window.fetchRandomData = fetchRandomData;
