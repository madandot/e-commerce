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
  {
    image: "./photos/flip.jpg",
    id: 3,
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
  {
    image: "./photos/fold4.webp",
    id: 4,
    name: "Samsung galaxy Z FOLD3 5G (Phantom Black)",
    ratings: "1,77,255",
    reviews: "10,252",
    rating: "4.2",
    spec: [
      "12GB Ram | 256GB Rom | Expandable Upto 250gb",
      "12mp + 12mp + 12MP + 10mp Front Camera",
      "android 12v | snapdragon processor 888",
      "4000 mAh battery | 5G 4G Network",
      "Display 7.6 inch full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "1,39,999",
    actualPrice: "1,42,999",
    discountedPercentage: "2%",
  },
  {
    image: "./photos/22sultra.jpg",
    id: 5,
    name: "Samsung galaxy S22 ULTRA 5G (Dark Pink)",
    ratings: "1,66,255",
    reviews: "9,252",
    rating: "4.2",
    spec: [
      "12GB Ram | 256GB Rom | Expandable Upto 250gb",
      "108mp +12mp + 10mp+ 10MP + 10MP Front Camera",
      "Android 12v | Snapdragon Processor 888",
      "5000 MAh Battery | 5G 4G Network",
      "Display 6.8 Inch Full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "1,19,999",
    actualPrice: "1,42,999",
    discountedPercentage: "19%",
  },
  {
    image: "./photos/S21two.webp",
    id: 6,
    name: "Samsung galaxy S21 FE 5G (Graphite)",
    ratings: "1,56,255",
    reviews: "11,252",
    rating: "4.3",
    spec: [
      "8GB Ram | 128GB Rom | Expandable Upto 100gb",
      "12mp +12pm +8MP(OIS) + 32mp Front Camera",
      "Android 12v | Snapdragon Processor 777",
      "4500 MAh Battery | 5G 4G Network",
      "Display 6.4 Inch Full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "34,999",
    actualPrice: "74,999",
    discountedPercentage: "53%",
  },
  {
    image: "./photos/21swhite.avif",
    id: 7,
    name: "Samsung galaxy S21 FE 5G (White)",
    ratings: "1,46,255",
    reviews: "9,252",
    rating: "4.2",
    spec: [
      "8GB Ram | 128GB Rom | Expandable Upto 100gb",
      "12mp +12pm +8MP(OIS) + 32mp Front Camera",
      "Android 12v | Snapdragon Processor 777",
      "4500 MAh Battery | 5G 4G Network",
      "Display 6.4 Inch Full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "34,999",
    actualPrice: "74,999",
    discountedPercentage: "53%",
  },
  {
    image: "./photos/21spink.jpg",
    id: 8,
    name: "Samsung galaxy S21 FE 5G (Lavender)",
    ratings: "1,97,255",
    reviews: "21,252",
    rating: "4.4",
    spec: [
      "8GB Ram | 128GB Rom | Expandable Upto 100gb",
      "12mp +12pm +8MP(OIS) + 32mp Front Camera",
      "Android 12v | Snapdragon Processor 777",
      "4500 MAh Battery | 5G 4G Network",
      "Display 6.4 Inch Full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "34,999",
    actualPrice: "74,999",
    discountedPercentage: "53%",
  },
  {
    image: "./photos/73aone.avif",
    id: 9,
    name: "Samsung galaxy A73 (Awesome White)",
    ratings: "1727,255",
    reviews: "21,252",
    rating: "4.2",
    spec: [
      "8GB Ram | 128GB Rom | Expandable Upto 100gb",
      "108mp +12mp + 5mp +5mp + 32mp Front Camera",
      "Android 12v | Snapdragon Processor 778",
      "5000 MAh Battery | 5G 4G Network",
      "Display 6.7 Inch Full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "41,999",
    actualPrice: "47,999",
    discountedPercentage: "11%",
  },
  {
    image: "./photos/52mone.jpg",
    id: 10,
    name: "Samsung galaxy M52 5G (Icy Black)",
    ratings: "10,000",
    reviews: "1,252",
    rating: "4",
    spec: [
      "8GB Ram | 128GB Rom | Expandable Upto 100gb",
      "32mp + 10mp Front Camera",
      "Android 12v | Snapdragon Processor 777",
      "5000 MAh Battery | 5G 4G Network",
      "Display 6.4 Inch Full HD | Dynamic Amoled 2X",
    ],
    discountedPrice: "30,999",
    actualPrice: "40,999",
    discountedPercentage: "10%",
  },
];
const phoneListElement = document.getElementById("phoneList");
const highToLowElement = document.getElementById("highToLow");
const lowToHightElement = document.getElementById("lowToHigh");
const popularityElement = document.getElementById("popularity");

let sortedPhones = samsungPhons;
highToLowElement.onclick = () => {
  sortedPhones = [];
  sortedPhones = samsungPhons.sort((a, b) => {
    const priceA = a.discountedPrice.replaceAll(",", "");
    const priceB = b.discountedPrice.replaceAll(",", "");

    return Number(priceB) - Number(priceA);
  });
  renderElement(sortedPhones);
  // console.log(sortedPhones);
};
lowToHightElement.onclick = () => {
  sortedPhones = [];
  sortedPhones = samsungPhons.sort((a, b) => {
    const priceA = a.discountedPrice.replaceAll(",", "");
    const priceB = b.discountedPrice.replaceAll(",", "");

    return Number(priceA) - Number(priceB);
  });
  renderElement(sortedPhones);
  // console.log(sortedPhones);
};

popularityElement.onclick = () => {
  sortedPhones = [];
  sortedPhones = samsungPhons.sort((a, b) => {
    return parseFloat(b.rating) - parseFloat(a.rating);
  });
  renderElement(sortedPhones);
  // console.log(sortedPhones);
};

const renderElement = (sortedPhones) => {
  phoneListElement.innerHTML = "";
  let phoneList = "";

  sortedPhones.map((phone, index) => {
    let specs = "";
    phone.spec.map((spc, index) => {
      specs += `<p>${spc}</p>`;
    });
    // console.log(specs);
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

  phoneListElement.insertAdjacentHTML("afterbegin", phoneList);
};

renderElement(sortedPhones);
// console.log(sortedPhones);
// console.log(phoneListElement);
