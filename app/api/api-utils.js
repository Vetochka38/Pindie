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

// Чтобы отправить данные на сервер, надо использовать POST-запрос.
// Нужно указать, что тип контента, который мы отправляем, — ""
// В теле запроса будут данные, которые функция JSON.stringify() приведёт к строке.
// Если код ответа сервера не будет равен 200 (это означает, что с запросом что-то не так), то нужно выдать ошибку. Это можно сделать так: throw new Error("Ошибка авторизации"). В таком случае функция перейдёт в блок catch, откуда мы вернём ошибку авторизации.
// Адрес для отправки запроса: ${BASE_URL}, где ${BASE_URL} — основной адрес для запросов к Pindie API.