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

const productLayout = document.getElementById("productList");
const emptyContainer = document.createElement("div");
emptyContainer.id = "emptyContainer";
emptyContainer.className = "empty-container";
emptyContainer.textContent = "There is not Product";

if (productList.length === 0) {
  productLayout.append(emptyContainer);
} else {
  for (let index = 0; index < productList.length; index++) {
    // Product List
    const productContainer = document.createElement("div");
    productContainer.id = "productContainer";
    productContainer.className = "product-container";

    // Product Top
    const productTop = document.createElement("div");
    productTop.id = "productTop";
    productTop.className = "product-top";

    // Product Image
    const productImage = document.createElement("div");
    const productImageSrc = document.createElement("img");
    productImage.id = "productImage";
    productImage.className = "product-image";

    // Product discount
    const productDiscount = document.createElement("div");
    productDiscount.id = "productDiscount";
    productDiscount.className = "product-discount";
    productDiscount.textContent = productList[index].saleAmount;

    //product-show-hide
    const productShowHide = document.createElement("div");
    const productHide = document.createElement("img");
    const productShow = document.createElement("img");

    productShowHide.id = "productShowHide";
    productShowHide.className = "product-show-hide";

    //Product Name
    const productName = document.createElement("div");
    const prodNameSpan = document.createElement("span");
    productName.id = "productName";
    productName.className = "product-name";
    prodNameSpan.textContent = productList[index].name;

    // Product Price
    const productPrice = document.createElement("div");
    productPrice.id = "productPrice";
    productPrice.className = "product-price";

    // Discount Price
    const discountPrice = document.createElement("span");
    discountPrice.id = "discountPrice";
    discountPrice.className = "discount-price";
    discountPrice.textContent = productList[index].originalPrice;

    const price = document.createElement("span");
    price.id = "price";
    price.className = "price";
    price.textContent = productList[index].originalPrice;

    // Product Ranking
    const productRanking = document.createElement("div");
    productRanking.textContent =
      "*****" + "(" + productList[index].review + ")";
    productRanking.id = "productRanking";
    productRanking.className = "product-ranking";

    productImageSrc.src = "../assets/joystick.png";
    productImage.append(productImageSrc);
    productTop.append(productImage);
    if (productList[index].isOnSale) {
      productTop.append(productDiscount);
    }

    productShow.src = "../assets/heart.png";
    productHide.src = "../assets/eye.png";

    productShowHide.append(productShow);
    productShowHide.append(productHide);
    productTop.append(productShowHide);
    productContainer.append(productTop);

    productName.append(prodNameSpan);
    if (productList[index].isOnSale) {
      productPrice.append(discountPrice);
    }
    productPrice.append(price);
    productName.append(productPrice);

    productName.append(productRanking);

    productContainer.append(productName);
    productLayout.append(productContainer);
  }
}

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
