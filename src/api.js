import axios from 'axios';

const endpoint = "http://localhost:3001";

const getAll = () => {
    return axios.get(endpoint + "/books");
};

const create = book => {
    return axios.post(endpoint + "/books", book);
};

const destroy = id => {
    return axios.delete(endpoint + `/books/${id}`);
};

export default {
    books: {
        getAll,
        create,
        destroy
    }
};