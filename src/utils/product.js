function createProduct(layout, productList = [], productImages) {
  const emptyContainer = document.createElement("div");
  emptyContainer.id = "emptyContainer";
  emptyContainer.className = "empty-container";
  emptyContainer.textContent = "There is not Product";

  if (productList.length === 0) {
    layout.append(emptyContainer);
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

      productImageSrc.src = productImages[index]; //images[i];
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

      productContainer.addEventListener("click", function () {
        window.location.replace("/src/pages/description.html");
      });

      layout.append(productContainer);
    }
  }
}
