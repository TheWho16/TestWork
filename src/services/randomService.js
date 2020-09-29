export default class RandomServise {
    _apiBase = 'https://randomuser.me/api';


    //Take data from the server
    async getResourse(url) {
        const res = await fetch(` ${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`, `, received ${res.status}`)
        }
        return await res.json();
    }

    getAllPeople = async (page = 3, results=6) => {
        // const res = await this.getResourse(`?page=3&results=6&seed=abc`);
        const res = await this.getResourse(`?page=${page}&results=${results}&seed=abc`);

        console.log(page, results)
        return res.results.map(this._transformPerson);

    }

    _transformPerson = (person) => {
        return {
            id: person.id.value,
            name: person.name,
            gender: person.gender,
            phone: person.phone,
            picture: person.picture,
            email: person.email,
            country: person.location.country,
            postcode: person.location.postcode,
            userState: person.location.state,
            city: person.location.city,
            street: person.location.street,
            age: person.registered.age
        }
    }
}



