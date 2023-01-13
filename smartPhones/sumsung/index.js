const samsungPhons = [
  {
    image: "./photos/SAMSUNG_Galaxy_Z_Fold4.jpg",
    id: 1,
    name: "Samsung galaxy Z Fold4 (Black)",
    ratings: "1,87,255",
    reviews: "11,252",
    rating: "4.3",
    spec: [
      "12GB ram | 512GB rom | expandable upto 200gb",
      "50mp + 10mp +10pm + 12mp front camera",
      "android 12v | snapdragon processor 900",
      "5000 mAh battery | 5G 4G Network",
      "Display 7.6 inch full HD | Dynamic Amoled 2X",
    ],
    actualPrice: "1,59,999",
    discountedPrice: "1,49,999",
    discountedPercentage: "10%",
  },
  {
    image: "./photos/flip_two.jpg",
    id: 2,
    name: "Samsung galaxy Z FLIP3 (Black)",
    ratings: "1,87,255",
    reviews: "11,252",
    rating: "4.3",
    spec: [
      "8GB ram | 128GB rom | expandable upto 100gb",
      "12mp +12pm + 10mp front camera",
      "android 12v | snapdragon processor 888",
      "4000 mAh battery | 5G 4G Network",
      "Display 6.7 inch full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "69,999",
    actualPrice: "95,999",
    discountedPercentage: "27%",
  },
];

const phoneListElement = document.getElementById("phonelist");

let phoneList = "";

samsungPhons.map((phone, index) => {
  let specs = "";
  phone.spec.map((spc, index) => {
    specs += `<p>${spc}</p>`;
  });
  console.log(specs);
  phoneList += `
     <div class="container" id="item1">
            <div class="container-zero">
                <img src=${phone.image} alt="" width="400px" height="500px">
            </div>
            <div class="container-one">
                <h1>${phone.name}</h1>
                <button type="button">${phone.rating} <i class="fa fa-star"></i></button><span>${phone.ratings} rating & ${phone.reviews}
                    reviews</span>

                    ${specs}
                <div class="discount">
                    <p><i class="fa fa-rupee">${phone.discountedPrice}</i></p>
                    <p class="off"><i class="fa fa-rupee"> <s>${phone.actualPrice}</s></i></p>
                    <p>${phone.discountedPercentage} off </p>
                </div>
                <div class="container-two">
                    <div class="one">
                        <a href="#"><i class="fa fa-heart"></i>favorite</a>
                    </div>
                    <div class="one" onclick="addcart(item1)">
                        <a href="#"><i class="fas fa-cart-plus"></i>addcart</a>
                    </div>
                    <div class="one">
                        <a href="#">buy now</a>
                    </div>
                </div>
            </div>
        </div>

    `;
});

// console.log(phoneList);
console.log(phoneListElement);
phoneListElement.insertAdjacentHTML("afterbegin", phoneList);
