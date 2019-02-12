function toogleMenu() {
    if (this.classList.contains("st-1")) {
        this.classList.toggle("st-2");
        setTimeout(() => this.classList.toggle("st-1"), 500);
    } else {
        this.classList.toggle("st-1");
        setTimeout(() => this.classList.toggle("st-2"), 500);
    }

    document
        .querySelector("div.navbar-collapse")
        .classList.toggle("show-collapse");
}

function delayClick(ev){
    ev.preventDefault();
    setTimeout(()=>{
        document.location = this.href;
    }, 200);
}
function delayClickDisapearBody(ev){
    ev.preventDefault();
    console.log(ev);
    if(ev.target.tagName === 'A') {
        // setTimeout(()=>{
        //     document.location = this.href;
        // }, 200);
    }
    
}
document.body.addEventListener("click", delayClickDisapearBody);
document.querySelector(".navbar-brand a").addEventListener('click', delayClick);

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        const menuButton = document.querySelector(
            'button[class="navbar-toggler"]'
        );
        menuButton.addEventListener("click", toogleMenu, false);

        const blogCards = document.querySelectorAll(
            '.blog .card'
        );

        blogCards.forEach((el) => {
            el.addEventListener('mouseenter', (event) => {
                blogCards.forEach((el) => {
                    if (!el.classList.contains('fade')) {
                        el.classList.add('fade');
                    }
                });
            });
            el.addEventListener('mouseleave', (event) => {
                blogCards.forEach((el) => {
                    if (el.classList.contains('fade')) {
                        el.classList.remove('fade');
                    }
                });
            })
        });

    }
};