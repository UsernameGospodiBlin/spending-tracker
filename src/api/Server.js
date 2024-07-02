export class  Server {

    static async POST(path, object) {
        let request = await fetch(`http://localhost:8080/api/${path}`,
            {
                // mode: 'no-cors',
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(object)
            });
        return await request.json();
    }

    static async POSTA(path, object, token) {
        let request = await fetch(`http://localhost:8080/api/${path}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization' : token },
                body: JSON.stringify(object)
            });
        return await request.json();
    }

    static async PUTA(path, object, token) {
        let request = await fetch(`http://localhost:8080/api/${path}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization' : token },
                body: JSON.stringify(object)
            });
        return await request.json();
    }

    static async DELETEA(path, id, token) {
        let request = await fetch(`http://localhost:8080/api/${path}/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization' : token },
            });
        return await request.json();
    }

    static async GETA(path, token) {
        let request = await fetch(`http://localhost:8080/api/${path}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization' : token },
            });
        return await request.json();
    }
}
