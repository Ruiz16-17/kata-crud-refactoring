const HOST_API = "http://localhost:8080/api";

export default {

    List: async () => {

        return fetch(HOST_API + "/todosLists");
    },

    save: async (request) => {

        return fetch(HOST_API + "/todoList", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    delete: async (id) => {

        return fetch(HOST_API + "/" + id + "/todoList", {
            method: "DELETE"
        })
    }

}