const categories = [
  {
    id: "1",
    title: "Woman's fashion",
    value: 200,
  },
  {
    id: "2",
    title: "Man's fashion",
    value: 201,
  },
  {
    id: "3",
    title: "Electronic",
    value: 202,
  },
  {
    id: "4",
    title: "Home & Lifestyle",
    value: 203,
  },
  {
    id: "5",
    title: "Medicine",
    value: 204,
  },
  {
    id: "6",
    title: "Sports & Outdoor",
    value: 205,
  },
  {
    id: "7",
    title: "Baby’s & Toys",
    value: 206,
  },
  {
    id: "8",
    title: "Groceries & Pets",
    value: 207,
  },
  {
    id: "9",
    title: "Health & Beauty",
    value: 208,
  },
];

const productList = [
  {
    id: "1",
    name: "HAVIT HV-G92 Gamepad",
    originalPrice: "120",
    discountPrice: "160",
    review: "86",
    image: "",
    saleAmount: "0",
    isOnSale: "false",
  },
  {
    id: "2",
    name: "AK-900 Wired Keyboard",
    originalPrice: "960",
    discountPrice: "1160",
    review: "75",
    image: "",
    saleAmount: "0",
    isOnSale: "false",
  },
  {
    id: "3",
    name: "IPS LCD Gaming Monitor",
    originalPrice: "400",
    discountPrice: "370",
    review: "99",
    image: "",
    saleAmount: "0",
    isOnSale: "false",
  },
  {
    id: "4",
    name: "S-Series Comfort Chair ",
    originalPrice: "400",
    discountPrice: "375",
    review: "99",
    image: "",
    saleAmount: "0",
    isOnSale: "false",
  },
];

const image = [
  "../assets/joystick.png",
  "../assets/joystick.png",
  "/assets/computer.png",
  "/assets/chair.png",
];

const searchInput = document.getElementById("input-search-product");
let inputValue = "";

searchInput.addEventListener("input", function (event) {
  inputValue = event.target.value;
});

function searchProduct() {
  console.log("It went to search product", inputValue);
}

const categoriesBox = document.getElementById("categoryBox");

for (let i = 0; i < categories.length; i++) {
  const span = document.createElement("span");
  span.textContent = categories[i].title;
  categoriesBox.append(span);
}

const productListLayout = document.getElementById("productList");

const bestSellingProduct = document.getElementById("bestSellingProduct");

createProduct(productListLayout, productList); // you are calling a function

createProduct(bestSellingProduct); //you are calling a function

const newProducts = [
  {
    id: "1",
    name: "Phones",
    value: 100,
  },
  {
    id: "2",
    name: "Computers",
    value: 110,
  },
  {
    id: "3",
    name: "SmartWatch",
    value: 120,
  },
  {
    id: "4",
    name: "Camera",
    value: 130,
  },
  {
    id: "5",
    name: "Headphones",
    value: 140,
  },
  {
    id: "6",
    name: "Gamepad",
    value: 150,
  },
];
const images = [
  "../assets/phone.png",
  "../assets/c_omputer.png",
  "../assets/smartWatch.png",
  "../assets/camera.png",
  "../assets//headphone.png",
  "../assets/gamepad.png",
];

const iconBottom = document.getElementById("iconBottom");

for (let i = 0; i < newProducts.length; i++) {
  const iconBox = document.createElement("div");
  iconBox.id = "iconBox";
  iconBox.className = "icon-box";

  const span = document.createElement("span");
  span.textContent = newProducts[i].name;

  const iconImage = document.createElement("div");
  iconImage.className = "icon-image";

  const image = document.createElement("img");
  image.src = images[i];

  iconImage.append(image);

  iconBox.append(iconImage);
  iconBox.append(span);
  iconBottom.append(iconBox);
}

// getElementById access to element
// createElement create a new element
