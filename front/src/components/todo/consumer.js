const HOST_API = "http://localhost:8080/api";

export default {

    List: async () => {

        return fetch(HOST_API + "/todos");
    },

    save: async (request) => {

        return fetch(HOST_API + "/todo", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    update: async (request) => {

        return fetch(HOST_API + "/" + request.id_todo + "/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}