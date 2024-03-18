export const getData = async (url) => {
    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error('Ошибка получения данных')
        }
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export const isResponseOk = (response) => {
    return !(response instanceof Error);
};

export const normalizeDataObject = (obj) => {
    return {
        ...obj,
        category: obj.categories,
        users: obj.users_permissions_users,
    };
};

export const normalizeData = (data) => {
    return data.map((item) => {
        return normalizeDataObject(item)
    })
}

export const getNormalizedGamesDataByCategory = async (url, category) => {
    try {
        const data = await getData(`${url}?categories.name=${category}`);
        if (data.lenght) {
            throw new Error("Нет игр в категории")
        }
        return isResponseOk(data) ? normalizeData(data) : data
    } catch (error) {
        return error
    }
}

export const getNormalizedGameDataById = async (url, id) => {
    const data = await getData(`${url}/${id}`);
    return isResponseOk(data) ? normalizeDataObject(data) : data;
};

export const authorize = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                // Сообщаем, что тип контента в body нашего запроса – текстовая строка
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.status !== 200) {
            throw new Error("Ошибка авторизации")
        }
        const result = await response.json()
        return result
    } catch (error) {
        return error
    }
}

//  * URL-адрес в виде строки, куда будет выполнен запрос
//  * JWT–токен в виде строки
export const getMe = async (url, jwt) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${jwt}` },
        });
        if (response.status !== 200) {
            throw new Error("Ошибка получения данных");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
};