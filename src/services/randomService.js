import reqwest from 'reqwest';


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

    getAllPeople = async (page, size) => {
        const res = await this.getResourse(`?page=${page}&results=${size}&seed=abc`);
        return res.results.map(this._transformPerson);
    }


    getRandomuserParams = params => {
        console.log(params.pagination, 'getRandomuserParams')
        const pageSize = params.pagination.pageSize
        console.log('pageSize', pageSize)
        return {
            results: pageSize,
            page: params.pagination.page,
            ...params,
        };
    };

    getFilterPeople = async ({gender, name, nat}) => {
        const res = await this.getResourse(`?inc=${gender},${name},${nat}`);
        return res.results.map(this._transformPerson);
    }

    getStatistick = async () => {
        const res = await this.getResourse(`?results=255&seed=abc`);
        return res.results.map(this._transformStatistick);
    }

    getAllPeopleTable = async (params = {}) => {
        let dataUser = null
        console.log('paramsServise', params)
        await reqwest({
            url: `https://randomuser.me/api`,
            method: 'get',
            type: 'json',
            data: this.getRandomuserParams(params),
        }).then(data => {
            console.log('dataServise', data.results)
            return dataUser = {
                data: data.results,
                pagination: {
                    ...params.pagination,
                    total: 200,
                    // 200 is mock data, you should read it from server
                    // total: data.totalCount,
                },
            };
        }).catch((err) => {
            console.log(err.status)
        })
        console.log('paramsServise', dataUser)
        return dataUser
    };



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
            age: person.registered.age,
            nat: person.nat
        }
    }

    _transformStatistick = (person) => {
        return {
            id: person.id.value,
            gender: person.gender,
            nat: person.nat,
        }
    }
}



