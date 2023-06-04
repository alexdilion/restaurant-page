import backgroundImage from "./background.jpg";

const MENU_ITEMS = {
    Beverages: [
        {name: "Espresso", price: "€2.50"},
        {name: "Americano", price: "€3.00"},
        {name: "Cappuccino", price: "€4.50"},
        {name: "Latte", price: "€4.75"},
        {name: "Mocha", price: "€5.25"},
        {name: "Macchiato", price: "€3.75"},
        {name: "Iced Coffee", price: "€3.50"},
        {name: "Cold Brew", price: "€4.50"},
        {name: "Frappé", price: "€5.75"},
        {name: "Hot Chocolate", price: "€4.00"},
    ],
    Teas: [
        {name: "Green Tea", price: "€3.50"},
        {name: "Black Tea", price: "€3.25"},
        {name: "Herbal Tea", price: "€3.75"},
        {name: "Chai Tea Latte", price: "€4.50"},
        {name: "Iced Tea", price: "€3.25"},
        {name: "Matcha Latte", price: "€5.00"},
    ],
    "Specialty Drinks": [
        {name: "Vanilla Bean Latte", price: "€5.50"},
        {name: "Caramel Macchiato", price: "€5.75"},
        {name: "Hazelnut Mocha", price: "€6.00"},
        {name: "Pumpkin Spice Latte (seasonal)", price: "€5.75"},
        {name: "Peppermint Mocha (seasonal)", price: "€6.25"},
    ],
    Pastries: [
        {name: "Croissant", price: "€2.50"},
        {name: "Muffin", price: "€2.75"},
        {name: "Scone", price: "€3.00"},
        {name: "Bagel with Cream Cheese", price: "€3.50"},
        {name: "Cookie", price: "€1.50"},
    ],
};

export default function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Our Menu";
    content.appendChild(header);

    Object.keys(MENU_ITEMS).forEach((itemType) => {
        const itemsList = document.createElement("ul");
        itemsList.id = `${itemType.toLowerCase()}-list`;

        MENU_ITEMS[itemType].forEach((item) => {
            const itemElement = document.createElement("li");
            itemElement.textContent = `${item.name} - ${item.price}`;

            itemsList.appendChild(itemElement);
        });

        content.appendChild(itemsList);
    });

    const background = new Image();
    background.src = backgroundImage;
    background.classList.add("page-background");
    background.setAttribute("alt", "Background");
    background.setAttribute("height", "720px");
    background.setAttribute("width", "1280px");
    content.appendChild(background);
}
