
export const fetchListData = async({type = 'all', pageNumber = 1, pageSize = 40 }) => {
    return fetch(`https://cnodejs.org/api/v1/topics?tab=${type}&page=${pageNumber}&limit=${pageSize}`).then(res => res.json());
}
export const fetchDetailData = async(id) => {
    return fetch(`https://cnodejs.org/api/v1/topic/${id}`).then(res => res.json());
}
