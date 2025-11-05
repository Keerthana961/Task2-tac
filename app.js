const menu = [
  //  Breakfast
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 79.99,
    img: "https://simplyhomecooked.com/wp-content/uploads/2022/08/buttermilk-pancakes.jpg",
    desc: "Fluffy golden pancakes topped with butter and maple syrup.",
  },
  {
    id: 2,
    title: "Bread Omelette",
    category: "breakfast",
    price: 50.99,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/bread-omelette-480x270.jpg",
    desc: "Crispy toasted bread filled with spicy omelette mix.",
  },
  {
    id: 3,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 99.99,
    img: "https://emachiog.netlify.app/images/item-7.jpeg",
    desc: "Crispy bacon strips with scrambled eggs and buttered toast.",
  },

  //  Lunch
  {
    id: 4,
    title: "Chicken Biryani",
    category: "lunch",
    price: 200.00,
    img: "https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg",
    desc: "Aromatic basmati rice cooked with tender chicken and spices.",
  },
  {
    id: 5,
    title: "Mutton Biryani",
    category: "lunch",
    price: 300.00,
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Mutton-Biryani-Recipe.jpg",
    desc: "Slow-cooked mutton layered with saffron-infused rice.",
  },
  {
    id: 6,
    title: "Fish Curry",
    category: "lunch",
    price: 200.00,
    img: "https://ik.imagekit.io/iwcam3r8ka/prod/blog-header/202504/112cf7c4-957c-47b1-893e-5207e5a90891.jpg",
    desc: "Tangy coconut-based curry with fresh coastal fish.",
  },

  // DInner
  {
    id: 7,
    title: "Butter Chicken",
    category: "dinner",
    price: 149.99,
    img: "https://www.crownresto.com/wp-content/uploads/2021/10/Butter-Chicken.jpg",
    desc: "Creamy tomato gravy with tender chicken pieces and herbs.",
  },
  {
    id: 8,
    title: "Paneer Tikka Masala",
    category: "dinner",
    price: 180.00,
    img: "https://www.nehascookbook.com/wp-content/uploads/2022/11/Paneer-tikka-masala-WS-1068x601.jpg",
    desc: "Charred paneer cubes simmered in a rich spicy sauce.",
  },
  {
    id: 9,
    title: "Hyderabadi Dum Biryani",
    category: "dinner",
    price: 190.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBM1LNl1AoGgjpD4jjuMZK6l-B3G_h32SOVw&s",
    desc: "Royal biryani cooked under steam, full of flavors and aroma.",
  },

  //  Shakes
  {
    id: 10,
    title: "Pista Shake",
    category: "shakes",
    price: 60.00,
    img: "https://img-cdn.publive.online/fit-in/1280x960/filters:format(webp)/sanjeev-kapoor/media/post_banners/1e98cd2ffe0cb460a5a143facc4b69c4c23e1fc2cbbde7a74e2eb67dfdd47ceb.jpg",
    desc: "Smooth and nutty pistachio shake served chilled.",
  },
  {
    id: 11,
    title: "Brownie Shake",
    category: "shakes",
    price: 100.09,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/11/359336589/ET/VC/NT/87963143/chocolate-brownie-shake-1000x1000.jpg",
    desc: "Chocolate shake topped with chunks of fudgy brownie.",
  },
  {
    id: 12,
    title: "Banana Shake",
    category: "shakes",
    price: 60.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVBz4DaKHlTvk6XtYsbWqwLYYc0x_Y6KLCQ&s",
    desc: "A creamy blend of fresh banana, vanilla ice cream, and milk.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// Load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

// Filter buttons
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.category;
    const menuCategory =
      category === "all"
        ? menu
        : menu.filter((menuItem) => menuItem.category === category);
    displayMenuItems(menuCategory);
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map(function (item) {
      return `
        <article class="menu-item">
          <img src="${item.img}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">₹${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>`;
    })
    .join("");
  sectionCenter.innerHTML = displayMenu;
}
