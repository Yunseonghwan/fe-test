// 해당 파일에 과제에 필요한 기능을 구현합니다.

const BASE_URL = 'http://test.zerorder.kr'



const getProductList = async() => {
    const tbody = document.getElementById('list')
    const list = document.createDocumentFragment();
    const res = await fetch(`${BASE_URL}/products`)
    const data = await res.json();
    const items = data.items;
    items.map((item) => {
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let name = document.createElement('td');
        let categoryName = document.createElement('td');
        let price = document.createElement('td');
        let stock = document.createElement('td');
        let rating = document.createElement('td');
        let manufacturer = document.createElement('td');
        let createdAt = document.createElement('td');

        id.innerHTML = item.id
        name.innerHTML = item.name
        categoryName.innerHTML = item.categoryName
        price.innerHTML = item.price
        stock.innerHTML = item.stock
        rating.innerHTML = item.rating
        manufacturer.innerHTML = item.manufacturer
        createdAt.innerHTML = item.createdAt

        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(categoryName)
        tr.appendChild(price)
        tr.appendChild(stock)
        tr.appendChild(rating)
        tr.appendChild(manufacturer)
        tr.appendChild(createdAt)
        list.appendChild(tr);
    })
    tbody.appendChild(list);    
}

const getCategoryList = async() => {
    const select = document.getElementById('category-id');
    const res = await fetch(`${BASE_URL}/products/categories`);
    const data = await res.json();
    data.map((category) =>  {
        let option = document.createElement('option');
        option.innerHTML = category.name;
        option.value = `${category.id}`;
        select.appendChild(option)
    })
}

window.addEventListener('load', () => {
    Promise.all([getProductList(), getCategoryList()])
})