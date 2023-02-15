// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

console.log("----- opdracht 1a ----");
const brandsTv = inventory.map((inventory) => {
return inventory.type
});
console.log(brandsTv);

console.log("----- opdracht 1b ----");
const soldOut = inventory.filter((inventory) => {
  return inventory.originalStock - inventory.sold === 0;;
})
console.log(soldOut);

console.log("----- opdracht 1c ----");
function hasAmbilight(array) {
  return array.filter((inventory) => {
    return inventory.options.ambiLight === true;
  });
}
console.log(hasAmbilight);

console.log("----- opdracht 1d ----");
function sortPrice(Array) {
  inventory.sort((a, b) => {
    if (a.price > b.price) {
      return 1
    } else if (a.price < b.price) {
      return -1
    } else {
      return 0
    }
  });
}
console.log(inventory);

console.log("----- opdracht 2a ----");
const sold = inventory.map((inventory) => {
  return inventory.sold
});
console.log(sumArray(sold));

function sumArray(array) {
  return array.reduce((number, currentValue) => {
    return number + currentValue;
  }, 0);
}

console.log("----- opdracht 2b ----");
const soldTv = document.getElementById("soldTv");
soldTv.textContent = `Er zijn   ${sumArray(sold)} tv's verkocht`;

console.log("----- opdracht 2c ----");
const bought = inventory.map((inventory) => {
  return inventory.originalStock
});
console.log(bought);
console.log("----- opdracht 2d ----")
const boughtTv = document.getElementById("boughtTV");
boughtTv.textContent = `Er zijn ${sumArray(bought)}  tv's ingekocht`;

console.log("----- opdracht 2e ----");

function stockLeft(bought, sold) {
  let result = [];
  for (let i = 0; i < bought.length; i++) {
    let stock = bought[i] - sold[i];
    if (stock > 0) {
      result.push(stock);
    }
  }
  console.log(result)
  return result;
}

  const remainingStock = document.getElementById("remainingStock");
 remainingStock.innerHTML = `<p>Er moeten nog ${sumArray(stockLeft(bought, sold))}  tv's verkocht worden,</p>
<p>Dus zet hem op!</p>`;

console.log("----- opdracht 3a ----");

const uniqueBrands = Array.from(new Set(inventory.map(brand => brand.brand)));
console.log(uniqueBrands);

console.log("----- opdracht 3b ----");
function unique(){
 return  Array.from(new Set(inventory.map(brand => brand.brand))) }
console.log(unique());

console.log("----- opdracht 4a ----");
function container(tvArray){
  return `${tvArray.brand} ${tvArray.type} - ${tvArray.name}`;
}
console.log(container(inventory[0]));

console.log("----- opdracht 4b ----");
function priceCheck(price){
  return ` €${price.price},-`
}
console.log(priceCheck(inventory[0]));

console.log("----- opdracht 4c ----");
function sizes(tvArray){
   let output = '';

  for (let j = 0; j < tvArray.length; j++) {
    const SizeInches  = tvArray[j];
    const SizeCm = SizeInches * 2.54;

    output = output + `${SizeInches} inch (${Math.round(SizeCm)} cm)`;

    if (j < tvArray.length -1) {
      output = `${output} | `;
    }
  }
  return output;
}
console.log(sizes(inventory[0].availableSizes))

console.log("----- opdracht 4d ----");
const tv = document.getElementById("tv");
const i = 0;
tv.innerHTML = `
<p>${container(inventory[i])}</p>
<p>${priceCheck(inventory[i])}</p>
<p>${sizes(inventory[i])}</p>
`;


  function generateTvList(tvArray) {
    const tvModelList = document.getElementById('inventory-models');

    const modelItems = tvArray.map((tvObject) => {
      return `
    <section id="Container">
      <li>
        <h3>${container(tvObject)}</h3>
        <h4>${priceCheck(tvObject)}</h4>
        <p>${sizes(tvObject.availableSizes)}</p>
      </li>
      </section>
    `;
    });

    tvModelList.innerHTML = `${modelItems.join('')}`;
  }
  generateTvList(inventory);

generateTvList(inventory);

const sortpriceButton = document.getElementById('sortPrice');
const filterambilight = document.getElementById('ambilight');
const soldout = document.getElementById('soldOut');


sortpriceButton.addEventListener('click', sortTv);
function sortTv(){
  sortPrice(inventory);
  generateTvList(inventory);
}
filterambilight.addEventListener('click', hasAmbi);
function hasAmbi(){
  const filteredInv = hasAmbilight(inventory);
  generateTvList(filteredInv);
}
soldout.addEventListener('click', isSoldOut);
function isSoldOut() {
  let updatedInv = [];
  for (let i = 0; i < inventory.length; i++) {
    if (bought[i] <= sold[i]) {
      updatedInv.push(inventory[i]);
    }
  }
  generateTvList(updatedInv);
}

//Side projectje :D
let select = document.createElement("select");
select.id = "brand-select";
uniqueBrands.unshift("All");



for (let i = 0; i < uniqueBrands.length; i++) {
  let option = document.createElement("option");
  option.value = uniqueBrands[i];
  option.text = uniqueBrands[i];
  select.appendChild(option);
}
document.body.appendChild(select);

select.addEventListener('change', () => {
  let selectedBrand = select.value;
  console.log(selectedBrand);
const sorted = inventory.filter((inventory) => {
  return inventory.brand === selectedBrand
});

  if (selectedBrand === "All") {
    generateTvList(inventory);
  } else {
   generateTvList(sorted)
    console.log(sorted)
  }});




const toggleDarkMode = document.getElementById('toggle-dark-mode');

toggleDarkMode.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});