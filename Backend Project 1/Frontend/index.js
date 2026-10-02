const $ = (id) => document.getElementById(id);

const fillTable = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();

    console.log(data);

    const tableBody = $("táblázat");

    for (const obj of data) {
        const tr = document.createElement("tr");

        const Id = document.createElement("td");
        Id.innerText = obj.id;
        tr.appendChild(Id);

        const Name = document.createElement("td");
        Name.innerText = obj.name;
        tr.appendChild(Name);

        const Category = document.createElement("td");
        Category.innerText = obj.category;
        tr.appendChild(Category);

        const Brand = document.createElement("td");
        Brand.innerText = obj.brand;
        tr.appendChild(Brand);

        const Price = document.createElement("td");
        Price.innerText = `${obj.price} ${obj.currency}`;
        tr.appendChild(Price);

        const Stock = document.createElement("td");
        Stock.innerText = obj.stock;
        tr.appendChild(Stock);

        const Rating = document.createElement("td");
        Rating.innerText = obj.rating;
        tr.appendChild(Rating);

        const Active = document.createElement("td");
        Active.innerText = obj.active;
        tr.appendChild(Active);

        const Description = document.createElement("td");
        Description.innerText = obj.description;
        tr.appendChild(Description);

        tableBody.appendChild(tr);
    }
};

fillTable();