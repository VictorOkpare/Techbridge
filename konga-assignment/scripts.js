const cardData = [
    {
      image: "image1.jpg",
      name: "Product 1",
      realPrice: 10000,
      discountPercentage: 20,
    },
    {
      image: "image2.jpg",
      name: "Product 2",
      realPrice: 15000,
      discountPercentage: 10,
    },
    {
      image: "image3.jpg",
      name: "Product 3",
      realPrice: 8000,
      discountPercentage: 25,
    },
  ];
  


document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".cards-container");
  
    cardData.forEach((item) => {
      // Calculate discount price and savings
      const discountPrice = item.realPrice - (item.realPrice * item.discountPercentage) / 100;
      const savings = item.realPrice - discountPrice;
  
      // Create the card element
      const card = document.createElement("div");
      card.classList.add("todays-deal-card");
  
      // Populate the card with HTML
      card.innerHTML = `
        <div class="td-card-left">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="td-card-right">
            <p class="product-name">${item.name}</p>
            <div class="td-price-ctn">
                <span class="discount-price">&#8358; ${discountPrice.toFixed(2)}</span>
                <span class="real-price-slash">&#8358; ${item.realPrice.toFixed(2)}</span>
                <span class="percentage-discount">- ${item.discountPercentage}%</span>
            </div>
            <p class="discount">You save &#8358;${savings.toFixed(2)}</p>
        </div>
      `;
  
      // Append the card to the container
      cardContainer.appendChild(card);
    });
  });
  