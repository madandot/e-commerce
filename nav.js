const navbar = `
<header class="navbar">
    <div class="logo" >
        <a href='/'>Lavish</a>
    </div>
    <div class="items" >
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li><i class="fa fa-heart"></i></li>
            <li><i class="fa fa-cart-plus"></i></li>
            <li><i class="fa fa-user"></i><a href="/logIn/index.html">Login/Signup</a></li>
        </ul>
    </div>
</header>
`;
let oldelem = document.querySelector("script#replace_with_navbar");
let newelem = document.createElement("div");
newelem.innerHTML = navbar;
oldelem.parentNode.replaceChild(newelem, oldelem);
