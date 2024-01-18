const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const exit_btn = document.querySelector(".exit_btn");
const img_url = document.querySelector(".img_url");
const prod_size = document.querySelector(".prod_size");
const prod_name = document.querySelector(".prod_name");
const prod_code = document.querySelector(".prod_code");
const prod_brend = document.querySelector(".prod_brend");
const prod_rate = document.querySelector(".prod_rate");
const prod_price = document.querySelector(".prod_price");
const send = document.querySelector(".send");
const cards = document.querySelector(".cards");
const popular = document.querySelector(".popular");

exit_btn.addEventListener("click", () => {
  modal.classList.add("active");
});

btn.addEventListener("click", () => {
  modal.classList.remove("active");
});

let proData = [];

 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    img: img_url.value,
    size: prod_size.value,
    code: prod_code.value,
    name: prod_name.value,
    brend: prod_brend.value,
    checked: prod_rate.checked,
    price: prod_price.value,
  };
  if (img_url.value && prod_size.value && prod_code.value && prod_name && prod_brend && prod_price != '') {
    
    proData.push(data);
    addItem(proData)
    
    img_url.value = ''
    prod_size.value = ''
    prod_code.value = ''
    prod_name.value = ''
    prod_brend.value = ''
    prod_rate.checked = ''
    prod_price.value = ''
    modal.classList.add("active");

  }
  else {
    alert("Please, fill in the information completely")
  }
});



let addItem = (info) => {
  cards.innerHTML = ''
  info.forEach((item) => {
    cards.innerHTML += `
      <div class="card">
      ${item.checked ? '<span class="popular">ПОПУЛЯРНОЕ</span>' : ""}
      
      <div class="img">
        <img src="${item.img}" alt="" />
      </div>
      <div class="size">
        <img src="./imgs/volume.png" alt="" />
        <h4>${item.size} мл</h4>
      </div>
      <div class="info">
      <h5><span> AOS</span>  средство для мытья посуды Crystal</h5>
      </div>
      <div class="box">
        <h5>Штрихкод: <span>${item.code}</span></h5>
        <h5>Производитель: <span>${item.name}</span></h5>
        <h5>Бренд: <span>${item.brend}</span></h5>
        </div>
      <div class="prise">
      <span>${item.price} ₸</span>
      <button>
      В КОРЗИНУ <i class="fa-solid fa-cart-shopping"></i>
        </button>
        </div>
        </div>
        `;
  });
};
addItem(proData);


