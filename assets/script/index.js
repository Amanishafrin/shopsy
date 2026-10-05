   function signup(event){
   
   event.preventDefault()
   let username = document.getElementById("username").value;
let userEmail = document.getElementById("useremail").value;
let userPass = document.getElementById("userpass").value;

    alert("signup")
    console.log(userEmail, userPass, username);


    // storing data in local storage
 localStorage.setItem("username", username);
localStorage.setItem("useremail", userEmail);
localStorage.setItem("userPass", userPass);


    // moving to login page
    window.location.href = "../../index.html"
}
function login(event){
    event.preventDefault()
    let userEmail=document.getElementById("email").value;
    let userPass=document.getElementById("pass").value;
    let localEmail=localStorage.getItem("useremail")
    let localPass=localStorage.getItem("userPass")
    if (userEmail==localEmail&& userPass==localPass){
        alert("login successfully");
        window.location.href="./assets/pages/home.html"

    }
    else{
    alert("login failed");
    }
}

const products=[
    {
        "id":1,
        "name":"Gown",
        "category":"fashion",
        "price":"1000",
        "image":"./gown1.png",
        "description":"perfect for a graceful and stylish look."

    },
     {
        "id":2,
        "name":"Ethinic saree",
        "category":"fashion",
        "price":"600",
        "image":"https://i.pinimg.com/736x/80/77/6d/80776d78e447fc997e2f6fdc22abc0f9.jpg",
        "description":"Elegant saree with a beautiful traditional design."

    },
     {
        "id":3,
        "name":"Party wear",
        "category":"fashion",
        "price":"600",
        "image":"https://i.pinimg.com/736x/93/7b/1a/937b1ad1a09e86d359f7105a4f478eb1.jpg",
        "description":"perfect for a luxurious and graceful look."

    },
     {
        "id":4,
        "name":"Bow-Tie Maxi Dress",
        "category":"fashion",
        "price":"800",
        "image":"https://i.pinimg.com/736x/0b/2b/e1/0b2be153e034be581cd122fe8e1e48a5.jpg",
        "description":"Beautiful flowy outfit with a timeless style."

    },
    {
        "id":5,
        "name":"Swiss perfume",
        "category":"cosmetics",
        "price":"400",
        "image":"https://i.pinimg.com/1200x/7e/f2/66/7ef266fcf031375ac8cefe5f2d8523c7.jpg",
        "description":"Fresh and long-lasting fragrance for a pleasant everyday scent."


    },
     
    

     {
        "id":6,
        "name":"Swiss beauty lipstick",
        "category":"cosmetics",
        "price":"270",
        "image":"https://i.pinimg.com/736x/b6/6f/31/b66f3118083c026e993a4c07fe88a702.jpg",
        "description":"Long-lasting lipstick with a smooth finish and rich color."

    },
     {
        "id":7,
        "name":"Swiss beauty eyeshadow",
        "category":"cosmetics",
        "price":"350",
        "image":"https://i.pinimg.com/736x/93/2e/ef/932eef511a951c6e515b69e65cf6ffc3.jpg",
        "description":"Smooth and pigmented eyeshadow for a beautiful eye look."

    },
     {
        "id":8,
        "name":"Swiss beauty blush",
        "category":"cosmetics",
        "price":"250",
        "image":"https://i.pinimg.com/736x/aa/69/73/aa69737665584fb1b001cf62ce3bfbb8.jpg",
        "description":"Soft, blendable blush for a natural rosy glow."

    },
      {
        "id":9,
        "name":"Anti tarnish pendant",
        "category":"Jewellery",
        "price":"200",
        "image":"https://i.pinimg.com/1200x/04/1b/b3/041bb3a5ded6db3c861613bf0e83a7ab.jpg",
        "description":"Delicate heart pendant for an elegant everyday look."

    },
    {
        "id":10,
        "name":"Golden Hoop Earrings",
        "category":"Jewellery",
        "price":"150",
        "image":"https://i.pinimg.com/1200x/2b/e4/4b/2be44b5f807dcb888a2cfbfcb958646d.jpg",
        "description":"Stylish golden hoops for a chic look."

    },
     {
        "id":11,
        "name":"Leaf Crystal Ring",
        "category":"Jewellery",
        "price":"150",
        "image":"https://i.pinimg.com/1200x/d5/c4/e8/d5c4e8fa9869bf2902af780d398352c5.jpg",
        "description":"Sparkling leaf ring for a graceful look."

    },
    {
        "id":12,
        "name":"Heart Charm Bracelet",
        "category":"Jewellery",
        "price":"150",
        "image":"https://i.pinimg.com/736x/85/25/cf/8525cf0e0aa5300e9289436280f24460.jpg",
        "description":"bracelet with cute heart charms. "

    },
        
];
function showdata(){
    let data="";

    products.map((value) => (
        data += `
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card">

                <img src="${value.image}" class="productimg">

                <div class="card-body">

                    <h6>${value.name}</h6>

                    <h5>Price:${value.price}</h5>

                    <button class="addcart" onclick="cartfunc(${value.id})">
                    
                        Add to cart
                    </button>

                </div>
            </div>
        </div>
        `
    ));

    document.getElementById("homeproducts").innerHTML = data;
}

showdata();
function searchfun(event){
    event.preventDefault()
    let searchdata=document.getElementById("input").value
    let output=products.filter((value)=>
        value.name.toLowerCase().trim().includes(searchdata.toLowerCase().trim())||value.price.includes(searchdata.trim()))
    console.log("result",output);
     let data=""
    output.map((value)=>(
        data+=`
        <div class="col-lg-3 col-md-6 col-12">
        <div class="card">
        <img src="${value.image}" class="productimg">
        <div class="card-body">
        <h6>${value.name}</h6>
        <h5>Price:${value.price}</h5>
        
        </div>
        </div>
        </div>
        `

    ))
    document.getElementById("searchdata").innerHTML=data

}
let cart=[]

function cartfunc(proID){
    let cartdata=products.find((value)=>
        value.id == proID);
    let existingproduct=cart.find((value)=>
    value.id==proID);
    if (existingproduct){
        existingproduct.quantity++;
     alert(`${existingproduct.name} increased to ${existingproduct.quantity}`);
    }
    else{
        cartdata.quantity=1;
        cart.push(cartdata);
      alert(`${cartdata.name} Added to cart`);
    }
      
       console.log("cartdata",cartdata);
       console.log("cart",cart);
        showcart(cart);
        


}
function removefunc(proID){
    cart=cart.filter((value)=>
    value.id!=proID);
    showcart(cart);
}



  
function showcart(cart){
let data="";

    cart.map((value) => (
        data +=`
         <tr>
                    <td><img src="${value.image}" class="cartimage"</td>
                       <td>${value.name}</td>
                          <td>${value.price}</td>
                             <td>${value.quantity}</td>
                                <td><button class="btn-close removebtn" onclick="removefunc(${value.id})"></button></td>
                </tr>
      
        `
    ));
    document.getElementById("tablebody").innerHTML=data
}
