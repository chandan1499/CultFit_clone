function clock() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs == 0) {
        hrs=12
    }
    if (hrs < 10) {
        hrs="0"+(time.getHours()-12);
    }
    if (min < 10) {
        min="0"+time.getMinutes();
    }
    if (sec < 10) {
        sec="0"+time.getSeconds();
    }
    document.getElementById('clock').innerHTML=`${hrs} : ${min} : ${sec}`
}

setInterval(clock, 500)

    var rotateDropDown = -180;
    function dropdowneffect(x) {
        var img = document.getElementById(x);
        img.style.transform = `rotate(${rotateDropDown}deg)`;
        var dropdown = document.getElementById('dropdown-links');
        if (rotateDropDown == -180) {
            rotateDropDown = 0;
            dropdown.style.display = "inline";
        }
        else {
            rotateDropDown = -180;
            dropdown.style.display = "none";
            console.log("hidden");
        }
    }

    function fetchLoginPage() {
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');

        var popup = document.getElementById('login-page');
        popup.classList.toggle('active');
          
        // popup.style.z - index="100px";
        // 
    }




    //------------- Cart js ----------\\
    function displayCart() {
        var cart = document.querySelector('.Cart-container');
        cart.style.display = "inherit";
    }

    function hideCart() {
        var cart = document.querySelector('.Cart-container');
        cart.style.display = "none";
    }



    // ----------- cart js --------- \\
    var borderBottomAchor = document.getElementById('eatfit');
    function underline(x) {
        var a = document.getElementById(x);
        borderBottomAchor.style.borderBottom = "none";
        borderBottomAchor.style.fontWeight = "500";

        borderBottomAchor = a;
        borderBottomAchor.style.fontWeight = "bolder";
        a.style.borderBottom = "2px solid rgb(255, 50, 120)";

        var cartImg = document.getElementById('cart-img-1');
        var cartDes = document.getElementById('cart-description');

        if (x == "cultgear") {
            cartImg.style.display = "none";
            cartDes.style.display = "none";
        }
        else {
            cartImg.style.display = "inherit";
            cartDes.style.display = "inherit";
        }
    }


    // ----------- location pop up ------------\\

    function locationUpdate(x) {
        var a = document.getElementById('location-popup');
        a.style.display = "none";

        var b = document.getElementById('change-location-navbar');
        b.innerText = x;

        
    }

    function displayLocation(x) {
        var a = document.getElementById('location-popup');
        a.style.display = "flex";
    }
