// for(start, end, step) {
//   khối lệnh
// }
const productContainer = document.querySelector(".product-container");


let productList = [
  {
    name: "product 1",
    price: 1000,
  },
  {
    name: "product 2",
    price: 1200,
  },
  {
    name: "product 3",
    price: 1300,
  },
  {
    name: "product 4",
    price: 10000,
  },
  {
    name: "product 5",
    price: 1300,
  },
];

// Hàm xử lý render ra danh sách sản phẩm
function handleRenderProduct() {
  let htmlString = "";
  for (let i = 0; i < productList.length; i++) {
    // htmlString +=
    //   "<h3>" + productList[i].name + "</h3>"
    // + "<p>" + productList[i].price + "</p>"

    // Cách 2
    htmlString += `
      <h3>${productList[i].name}</h3>
      <p>${productList[i].price}</p>
    `;
    productContainer.innerHTML = htmlString;
  }
}

handleRenderProduct();

// Các phương phức đi kèm với kiểu dữ liệu Mảng
// (Array Methods)

// map (mapping)
let numbers = [1, 3, 8, 9, 5];
// Cú pháp: Tên_danh_sách.map()

// Tạo 1 hàm callback (callback là 1 hàm mà được gọi mỗi khi lặp)
function myCallback(number) {
  return number + 1;
}

// Dùng hàm map
// let newNumbers = numbers.map(myCallback)
let newNumbers = numbers.map(function (number) {
  return number + 1;
});

console.log(newNumbers); // => [2, 4, 9, 10, 6]

// filter - Lọc dữ liệu
let productFilter = productList.filter(function (product) {
  return product.price == 1300;
});

console.log(productFilter);

// find - Tìm kiếm dữ liệu
// Tìm sản phẩm có giá lớn hơn 1200
let productFind = productList.find(function (product) {
  return product.price > 1200;
});

console.log(productFind);

let carList = [
  {
    name: "Car 1",
    color: "red",
    price: 10000,
  },
  {
    name: "Car 2",
    color: "green",
    price: 90000,
  },
  {
    name: "Car 3",
    color: "red",
    price: 100000,
  },
  {
    name: "Car 4",
    color: "yellow",
    price: 99999,
  },
  {
    name: "Car 5",
    color: "pink",
    price: 90000,
  },
];

// 1. Tìm những ô tô có màu đỏ
// 2. Tìm ra ô tô đầu tiên có giá là 90000
