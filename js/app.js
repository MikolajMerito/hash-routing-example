const routes = {
  "/products": `
  <section id="Products" class="section">
    <div class="container">
        <h2 class="section-title">Our Products</h2>
        <p class="section-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum odio amet id
            eaque repellat aut vitae excepturi aliquid, eos animi natus commodi et nobis quae non enim.
            Eligendi, repellat animi praesentium enim maxime possimus ipsum eveniet in vel. Mollitia itaque
            sunt, sit asperiores hic vitae iusto laudantium, omnis, sequi ipsam doloribus tempore accusamus.
            Possimus voluptatum reprehenderit sint quasi debitis mollitia veniam, sequi cupiditate consequuntur
            iste ratione ab, cumque atque consectetur nam tenetur repellat accusamus! Laborum, sapiente,
            voluptas voluptatem exercitationem a placeat suscipit illo eaque perferendis sed animi similique
            tempore maxime inventore repellendus, error saepe praesentium numquam corrupti esse consectetur.
            Vitae?</p>

        <div class="product-grid">
            <div class="card stacked">
                <img src="img/gitary/gitara1.jpg" alt="a closeup of a clasical guitar" class="card__img">

                <div class="card__content">
                    <h2 class="card__title">Lorem, ipsum dolor.</h2>
                    <p class="card__price">$199</p>
                    <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                        similique aut saepe itaque eaque quasi suscipit natus at unde a.</p>
                </div>
            </div>

            <div class="card stacked">
                <img src="img/pianina/pianino1.jpg" alt="a closeup of a clasical guitar" class="card__img">

                <div class="card__content">
                    <h2 class="card__title">Lorem, ipsum dolor.</h2>
                    <p class="card__price">$199</p>
                    <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                        similique aut saepe itaque eaque quasi suscipit natus at unde a.</p>
                </div>
            </div>

            <div class="card stacked">
                <img src="img/gitary/gitara2.jpg" alt="a closeup of a clasical guitar" class="card__img">

                <div class="card__content">
                    <h2 class="card__title">Lorem, ipsum dolor.</h2>
                    <p class="card__price">$199</p>
                    <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                        similique aut saepe itaque eaque quasi suscipit natus at unde a.</p>
                </div>
            </div>

            <div class="card stacked">
                <img src="img/pianina/pianino2.jpg" alt="a closeup of a clasical guitar" class="card__img">

                <div class="card__content">
                    <h2 class="card__title">Lorem, ipsum dolor.</h2>
                    <p class="card__price">$199</p>
                    <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                        similique aut saepe itaque eaque quasi suscipit natus at unde a.</p>
                </div>
            </div>

            <div class="card stacked">
                <img src="img/gitary/gitara3.jpg" alt="a closeup of a clasical guitar" class="card__img">

                <div class="card__content">
                    <h2 class="card__title">Lorem, ipsum dolor.</h2>
                    <p class="card__price">$199</p>
                    <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                        similique aut saepe itaque eaque quasi suscipit natus at unde a.</p>
                </div>
            </div>

            <div class="card stacked">
                <img src="img/pianina/pianino3.jpg" alt="a closeup of a clasical guitar" class="card__img">

                <div class="card__content">
                    <h2 class="card__title">Lorem, ipsum dolor.</h2>
                    <p class="card__price">$199</p>
                    <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                        similique aut saepe itaque eaque quasi suscipit natus at unde a.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  "/about": `
  <section id="About" class="section">
    <div class="container">
        <h2 class="section-title">About Us</h2>
        <p class="section-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
            magnam? Autem, deleniti ut voluptate quos culpa ex unde dolorem, ratione, esse eveniet fugiat
            voluptas ad? Sapiente maiores dicta architecto velit iusto in alias, excepturi quidem perspiciatis
            illo libero. Dicta enim quasi recusandae reprehenderit architecto nobis corrupti explicabo sit nisi
            repellendus? Nemo explicabo modi culpa quisquam repellat nesciunt expedita neque, provident sequi.
            Corporis cupiditate, ullam dolorem nulla pariatur amet laboriosam odio corrupti nisi quo, vel alias
            ducimus a harum deserunt consequatur repellendus asperiores recusandae culpa? Nobis cumque similique
            aliquid! Eum, officiis. Architecto dolores est ducimus assumenda cupiditate ipsa odio sunt ex?</p>
    </div>
</section>
  `,
  "/contact": `
          <section id="Contact" class="section">
            <div class="container contact-grid">
                <img src="img/gitary/gitara6.jpg" alt="greyscale image of guitar" class="contact-section-img">

                <form id="form" class="form" action="#" method="post">

                    <h2 class="contact-title">Contact Us</h2>

                    <input type="email" id="email" class="email" placeholder="Email Address" autocomplete="email" data-wrong="false" required>
                    <input type="text" id="name" class="name" placeholder="Name" required>
                    <input type="text" id="phone-number" class="phone-number" placeholder="999 888 777">
                    <input type="submit" id="button" class="button" value="submit">
                </form>
            </div>
        </section>
  `
}

// Funkcja renderująca odpowiednią stronę na podstawie hash
function renderRoute() {
  const pageContentContainer = document.getElementById("page-content-container");

  // Jeśli hash jest pusty, traktujemy to jak /home
  const hash = window.location.hash || "#/home";

  // Usuwamy znak #, zostaje np. "/home"
  const path = hash.slice(1);

  const page = routes[path];

  if (page) {
    pageContentContainer.innerHTML = page;
  } else {
    pageContentContainer.innerHTML = `
      <h2>404 nie znaleziono strony<h2>
      <p>Nie ma takiej strony.</p>
    `;
  }
}

// Reaguj na zmianę hash w pasku adresu
window.addEventListener("hashchange", renderRoute);

// Pierwsze renderowanie po załadowaniu strony
window.addEventListener("DOMContentLoaded", renderRoute);
