$(function () {
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});

let products = {
  data: [
    // smoothies
    {
      productName: "Rootery !",
      description: "Everyone's favorite!!! \n note : not berries -.- ",

      // nutri: ["39", "932"],
      category: "smoothies",
      price: "5.5",
      image: "./images/smoothie-bowl/rootery.png",
    },
    {
      productName: "Mangooo",
      description: "Mango base",
      // nutri: ["37", "752"],
      category: "smoothies",
      price: "6.00",

      image: "./images/smoothie-bowl/mango.png",
    },
    {
      productName: "Pinada",
      description: "Spirulina combo",
      // nutri: ["32", "550"],
      category: "smoothies",
      price: "4.5",
      image: "./images/smoothie-bowl/pinada.png",
    },

    {
      productName: "Choco-Puds",
      description: "Heavenly chocolate taste ",
      // nutri: ["23", "370"],
      category: "smoothies",
      price: "5.5",
      image: "./images/smoothie-bowl/choco-puds.png",
    },

    {
      productName: "Avocado",
      description: "Avocado",
      // nutri: ["26", "365"],
      category: "smoothies",
      price: "5.00",
      image: "./images/smoothie-bowl/avocado.png",
    },
    {
      productName: "PB & Jam",
      description: "Strawberry Greek-yogurt base",
      // nutri: ["28", "705"],
      category: "smoothies",
      price: "5.00",
      image: "./images/smoothie-bowl/pb&jam.png",
    },
    {
      productName: "Banana-Straw",
      description: "You guess it right!",
      // nutri: ["20", "425"],
      category: "smoothies",
      price: "5.00",
      image: "./images/smoothie-bowl/bananstraw.png",
    },

    {
      productName: "Mixed berries",
      description: "Another right guess !",
      // nutri: ["47", "555"],
      category: "smoothies",
      price: "6.5",
      image: "./images/smoothie-bowl/berries.png",
    },
    {
      productName: "Açaí",
      description: "Boosted Açaí",
      // nutri: ["36", "583"],
      category: "smoothies",
      price: "9.00",
      image: "./images/smoothie-bowl/acai.png",
    },
    // {
    // productName: "Island Bowl",
    // description: "A mix feels like a good day to swim",
    // nutri: ["37", "685"],
    // category: "smoothies",
    // price: "12.00",
    // image: "./images/smoothie-bowl/island-bowl.png",
    // },

    //oatmealsssssss

    {
      productName: "Apple-Pie",
      description: "Feels like Autumn",
      // nutri: ["2.5", "185"],
      category: "oatmeals",
      price: "4.5",
      image: "./images/oatmeal-porridge/apple-pie.png",
    },
    {
      productName: "Bluebs",
      description: "Very high in Antioxidants ",
      // nutri: ["2", "159"],
      category: "oatmeals",
      price: "5.5",
      image: "./images/oatmeal-porridge/bluebs2.png",
    },
    {
      productName: "Chocow",
      description: "Ever wonder what is like eating a milkshake?",
      // nutri: ["2", "115"],
      category: "oatmeals",
      price: "5.5",
      image: "./images/oatmeal-porridge/chocow2.png",
    },
    {
      productName: "Strawberry",
      description: "Original one!",
      // nutri: ["2.2", "94"],
      category: "oatmeals",
      price: "4.5",
      image: "./images/oatmeal-porridge/straw.png",
    },
  ],
};
// Function to set equal heights and font size for card bodies
function setEqualHeightAndFontSize(cards) {
  let maxHeight = 0;
  let maxWords = 0;

  // Calculate the maximum height and maximum words in card bodies
  cards.forEach((card) => {
    const cardBody = card.querySelector(".card-body");
    if (cardBody) {
      const words = cardBody.innerText.trim().split(/\s+/).length; // Count words
      if (cardBody.offsetHeight > maxHeight) {
        maxHeight = cardBody.offsetHeight;
      }
      if (words > maxWords) {
        maxWords = words;
      }
    }
  });

  // Set all card bodies to the maximum height and set font size based on maximum words
  cards.forEach((card) => {
    const cardBody = card.querySelector(".card-body");
    if (cardBody) {
      cardBody.style.height = `${maxHeight}px`; // Set height
      const words = cardBody.innerText.trim().split(/\s+/).length;
      const fontSize = words === maxWords ? "16px" : "14px"; // Font size based on max words
      cardBody.style.fontSize = fontSize;
      cardBody.style.lineHeight = "1.5"; // Set line height for readability
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code to create cards
  for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "border-0", "h-100");

    // Image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.classList.add("card-img-top");
    card.appendChild(image);

    // Container
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Product name
    // let name = document.createElement("h5");
    // name.classList.add("card-title", "text-left ");
    // name.innerText = i.productName.toUpperCase();
    // cardBody.appendChild(name);

    // Product text
    let text = document.createElement("p");
    // let divSpan = document.createElement("div");
    // let nutriFactProtein = document.createElement("span");
    // let nutriFactKcal = document.createElement("span");

    // Add classes and content
    // divSpan.classList.add("text-left", "mt-auto"); // Use "mt-auto" to push divSpan to the bottom
    // nutriFactProtein.classList.add("badge", "badge-success", ".nutri");
    // nutriFactKcal.classList.add("badge", "badge-success", ".nutri");
    text.classList.add("card-text", "text-left");

    // nutriFactProtein.innerText = i.nutri[0] + "g" + "\n protein";
    // nutriFactKcal.innerText = i.nutri[1] + "\n Kcal";
    // "P : " + i.nutri[0] + "g" + " " + "/" + " " + i.nutri[1] + "kcal";
    text.innerText = i.description; // Assuming there's a description property

    // Append elements
    cardBody.appendChild(text);
    // divSpan.appendChild(nutriFactProtein);
    // divSpan.appendChild(nutriFactKcal);
    // cardBody.appendChild(divSpan);
    card.appendChild(cardBody);

    // Price
    let price = document.createElement("div");
    price.classList.add("card-footer", "text-right", "bg-light");
    let priceTxt = document.createElement("small");
    priceTxt.classList.add("text-muted");
    priceTxt.innerText = "$" + i.price;
    price.appendChild(priceTxt);
    card.appendChild(price);

    // Append the card to the appropriate section based on category
    let productsContainer;

    productsContainer = document.getElementById("products");

    if (productsContainer) {
      productsContainer.appendChild(card);
    } else {
      console.error("Element with id 'products' or 'sandwiches' not found.");
    }
  }

  // Ensure the DOM is fully loaded before adjusting heights and font sizes
  window.addEventListener("load", () => {
    const productCards = Array.from(
      document.querySelectorAll("#products .card")
    );
    setEqualHeightAndFontSize(productCards);

    // const sandwichCards = Array.from(
    //   document.querySelectorAll("#sandwiches .card")
    // );
    // setEqualHeightAndFontSize(sandwichCards);
    // const pastaCards = Array.from(document.querySelectorAll("#pastas .card"));
    // setEqualHeightAndFontSize(pastaCards);
  });

  // Function to filter products based on category (unchanged)
  function filterProducts(category) {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Add event listeners to category buttons (unchanged)
  document
    .getElementById("smoothiesBtn")
    .addEventListener("click", function () {
      document.getElementById("heading-item").innerText = "Smoothie-Bowls";
      document.getElementById("para-item").innerText =
        " because why drink your breakfast when you can eat it?";
      filterProducts("smoothies");
    });

  document.getElementById("oatmealsBtn").addEventListener("click", function () {
    document.getElementById("heading-item").innerText = "Oat-Meals";
    document.getElementById("para-item").innerText =
      "the grain that can change your life.";
    filterProducts("oatmeals");
  });

  // document.getElementById("meatBtn").addEventListener("click", function () {
  //   filterProducts("meat");
  // });

  // document.getElementById("cheeseBtn").addEventListener("click", function () {
  //   filterProducts("cheese");
  // });

  // document.getElementById("grainBtn").addEventListener("click", function () {
  //   filterProducts("grain");
  // });

  // document.getElementById("allBtn").addEventListener("click", function () {

  //   filterProducts("all");
  // });
});

let adds_1 = [1, 2, 3, 4, 5, 6];
let adds_2 = [7, 8, 9, 10, 11, 12];
