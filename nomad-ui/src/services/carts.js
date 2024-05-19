const baseUrl = 'https://dummyjson.com/carts';

export const getCart = async({
    cartId,
}) => {
    return await fetch(`${baseUrl}/${cartId}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => data)
}

