const baseUrl = 'http://localhost:8000/api/cart/';

export const checkCart = async({
    cartData,
}) => {
    const raw = JSON.stringify(cartData);
    return await fetch(`${baseUrl}`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: raw
    }).then(response => response.json())
    .catch(error => console.log(error))
}

