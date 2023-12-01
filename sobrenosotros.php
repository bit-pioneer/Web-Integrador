<?php 
require __DIR__ . "/includes/app.php";

incluirTemplate('header');
?>

    <section class="sobre-nosotros_banner">
        <div class="contenedor">
            <p>Sobre <span class="txt-negritas">PirateKeys</span></p>
            <h2>Nuestra misión es llevar la alegría de los videojuegos a todo el mundo!</h2>
            <p>Los videojuegos dejaron de ser un nicho, hoy todo el mundo puede (y debería) probar algún videojuego. Es por eso que aquí en PirateKeys ofrecemos las <span class="txt-negritas">KEYS</span> más económicas para los mejores juegos.</p>
        </div>
    </section>

    <main class="contenedor sobre-nosotros">
        <div class="sobre-nosotros_contenido">
            <h1>Más sobre nosotros</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut amet adipisci sequi explicabo deserunt doloribus laudantium cupiditate natus praesentium expedita ea repellendus facilis doloremque perferendis eos necessitatibus enim, similique possimus!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quibusdam, expedita sapiente eveniet facilis consequatur</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut amet adipisci sequi explicabo deserunt doloribus laudantium cupiditate natus praesentium expedita ea repellendus facilis doloremque perferendis eos necessitatibus enim, similique possimus!</p>
        </div>
        <div class="sobre-nosotros_imagen">
            <picture>
                <source srcset="build/img/nier.avif" type="image/avif">
                <source srcset="build/img/nier.webp" type="image/webp">
                <img loading="lazy"  width="200" height="300" src="build/img/nier.jpg" alt="imagen juego">
            </picture>
        </div>
    </main>

    <footer class="contenedor footer">
        <div class="footer_lista">
            <h4>Sobre <span class="txt-negritas">PirateKeys</span></h4>
            <ul class="footer_lista">
                <li>
                    <a href="sobrenosotros.php">Sobre nosotros</a>
                </li>
            </ul>
        </div>
        <div class="footer_lista">
            <h4>Ayuda</h4>
            <ul class="footer_lista">
                <li>
                    <a href="guia_activacion.php">¿Cómo activo una clave?</a>
                </li>
            </ul>
        </div>
        <div class="footer_iconos">
            <h4>Redes sociales</h4>
            <a href="https://www.facebook.com/" class="icon-link" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" class="icon-link" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/home" class="icon-link" target="_blank">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.twitch.tv/" class="icon-link" target="_blank">
                <i class="fa-brands fa-twitch"></i>
            </a>
            <a href="https://www.youtube.com/" class="icon-link" target="_blank">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div><!--.footer_iconos-->
    </footer><!--.footer-->
    
    <!-- Modernizr  -->
    <script src="build/js/modernizr.js"></script>
    <!-- Iconos -->
    <script src="https://kit.fontawesome.com/8951c38389.js" crossorigin="anonymous"></script>
</body>

</html>