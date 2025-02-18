function changeLanguage() {
    
    document.getElementById("animals").innerText = "Strong Animals";
    document.getElementById("list-animals").innerHTML = `
        <li class="nav-item"><a class="nav-link" href="terrestres.html" style="color: white;">Terrestial</a></li>
        <li class="nav-item"><a class="nav-link" href="acuaticos.html" style="color: white;">Aquatic</a></li>
        <li class="nav-item"><a class="nav-link" href="aereos.html" style="color: white;">Air</a></li>
        <li class="nav-item"><a class="nav-link" href="contacto.html" style="color: white;">Contact</a></li>
    `;
    document.getElementById("main-title").innerText = "Welcome to the World's Strongest Animals";
    document.getElementById("main-description").innerText = "Discover the most powerful creatures on the planet in various habitats. On this website, we explore animals that stand out due to their incredible strength and resilience.";

    document.getElementById("section-title").innerText = "What will you learn here?";
    document.getElementById("section-description").innerText = "This website is dedicated to exploring the strongest animals and their adaptations in the natural world. You will discover how animals from different habitats have developed unique abilities that allow them to dominate their environments. Additionally, you will dive into the behaviors that grant them this exceptional strength, from the hunting techniques of felines to the resilience of the smallest insects. You will also learn about the records these animals break every day and the impressive feats they achieve in their fight for survival.";
    document.getElementById("section-description-2").innerText = "Some animals have developed impressive muscles, others have robust bone structures or surprising hunting abilities that make them the kings of their animal kingdom. These animals are not only strong, but also intelligent and strategic, knowing exactly how to take advantage of their natural resources to survive and dominate their habitats. From the land to the oceans and the skies, each of these animals has found a way to maximize their strength in the world they inhabit.";

    document.getElementById("facts-title").innerText = "Curious Facts";
    document.getElementById("facts-list").innerHTML = `
        <li><strong>The rhinoceros beetle</strong> can lift up to 850 times its body weight.</li>
        <li><strong>Killer whales</strong> hunt in teams, using complex strategies to catch their prey.</li>
        <li><strong>The harpy eagle</strong> has claws as strong as a brown bear's.</li>
        <li><strong>The male gorilla</strong> can lift up to 10 times its body weight, comparable to the strength of 2,000 humans.</li>
        <li><strong>The great white shark</strong> has such a powerful bite that it can easily break bones.</li>
        <li><strong>The African elephant</strong> is the largest land animal, and its strength is enough to move entire trees.</li>
        <li><strong>Leaf-cutter ants</strong> can carry up to 50 times their body weight, making them the strongest insects relative to their size.</li>
        <li><strong>The jaguar</strong> has an incredibly strong bite, capable of piercing the skull of its prey.</li>
        <li><strong>The blue whale</strong>, the largest animal on the planet, is capable of swimming at high speeds thanks to its powerful muscles.</li>
        <li><strong>The white rhinoceros</strong> is incredibly strong, with muscular mass that allows it to fight and defend itself from large predators.</li>
    `;
    document.getElementById("more-info-title").innerText = "More about the Strongest Animals";
    document.getElementById("more-info-description").innerText = "The animal world is full of amazing species that stand out due to their physical strength, but also for their special abilities that allow them to survive. Below, we explore in more detail how some of these animals use their strength in unique ways.";
    document.getElementById("more-info-animal").innerHTML =`
        <li><strong>Great White Shark:</strong> The great white shark is one of the most powerful predators in the oceans. With a bite that can generate up to 1,800 kilograms of pressure, this animal has enough strength to crush bones and cut through large prey such as seals and sea lions. In addition, its agility and speed make it a lethal hunter in its environment.</li>
        <li><strong>African Buffalo:</strong> African buffaloes are known for their strength and resilience. They can weigh over 800 kilograms and have long, strong horns that they use both for defense against predators and for fighting each other. Despite their calm appearance, they can be very aggressive if they feel threatened, and their strength has led to more hunter deaths in Africa than any other large animal.</li>
        <li><strong>Lion:</strong> The lion is considered the king of the African savannah due to its incredible strength and ability to hunt in groups. Male lions can weigh up to 250 kilograms and have a powerful jaw that allows them to take down large prey such as zebras and antelopes. Their sharp claws and musculature give them the necessary strength to dominate the ecosystem.</li>
    `;

    document.querySelector(".btn").innerText = "Cambiar a Español";
    document.querySelector(".btn").setAttribute("onclick", "changeLanguageBack()");
}

function changeLanguageBack() {
    
    document.getElementById("animals").innerText = "Animales Fuertes";
    document.getElementById("main-title").innerText = "Bienvenidos a Animales Más Fuertes del Mundo";
    document.getElementById("main-description").innerText = "Descubre las criaturas más poderosas del planeta en distintos hábitats. En este sitio web, exploramos los animales que destacan por su increíble fuerza y resistencia.";
    document.getElementById("list-animals").innerHTML = `
        <li class="nav-item"><a class="nav-link" href="terrestres.html" style="color: white;">Terrestres</a></li>
        <li class="nav-item"><a class="nav-link" href="acuaticos.html" style="color: white;">Acuáticos</a></li>
        <li class="nav-item"><a class="nav-link" href="aereos.html" style="color: white;">Aéreos</a></li>
        <li class="nav-item"><a class="nav-link" href="contacto.html" style="color: white;">Contacto</a></li>
    `;

    document.getElementById("section-title").innerText = "¿Qué aprenderás aquí?";
    document.getElementById("section-description").innerText = "Este sitio web está dedicado a explorar los animales más fuertes y sus adaptaciones en el mundo natural. Descubrirás cómo animales de diferentes hábitats han desarrollado habilidades únicas que les permiten dominar su entorno. Además, te sumergirás en los comportamientos que les otorgan esta fuerza excepcional, desde las técnicas de caza de los felinos hasta la resistencia de los insectos más pequeños. También aprenderás sobre los récords que estos animales rompen cada día y las impresionantes hazañas que logran en su lucha por la supervivencia.";
    document.getElementById("section-description-2").innerText = "Algunos animales han desarrollado músculos impresionantes, otros poseen estructuras óseas robustas o habilidades de caza sorprendentes que los convierten en los reyes de su reino animal. Estos animales no solo son fuertes, sino también inteligentes y estratégicos, sabiendo exactamente cómo aprovechar sus recursos naturales para sobrevivir y dominar sus hábitats. Desde la tierra hasta los océanos y los cielos, cada uno de estos animales ha encontrado una manera de maximizar su fuerza en el mundo que habita.";

    document.getElementById("facts-title").innerText = "Datos Curiosos";
    document.getElementById("facts-list").innerHTML = `
        <li><strong>El escarabajo rinoceronte </strong> puede levantar hasta 850 veces su peso corporal.</li>
        <li><strong>Las orcas</strong> cazan en equipo, utilizando estrategias complejas para atrapar a sus presas.</li>
        <li><strong>El águila harpía</strong> tiene garras tan fuertes como las de un oso pardo.</li>
        <li><strong>El gorila macho</strong> puede levantar hasta 10 veces su peso corporal, comparable a la fuerza de 2.000 humanos.</li>
        <li><strong>El tiburón blanco</strong> tiene una mordida tan poderosa que puede romper huesos con facilidad.</li>
        <li><strong>El elefante africano</strong> es el animal terrestre más grande y su fuerza es suficiente para mover árboles enteros.</li>
        <li><strong>Las hormigas cortadoras de hojas</strong> pueden cargar hasta 50 veces su peso, lo que las convierte en los insectos más fuertes en relación a su tamaño.</li>
        <li><strong>El jaguar</strong> tiene una mordida increíblemente fuerte, capaz de perforar el cráneo de sus presas.</li>
        <li><strong>La ballena azul</strong>, el animal más grande del planeta, es capaz de nadar a grandes velocidades gracias a su poderosos músculos.</li>
        <li><strong>El rinoceronte blanco</strong> es increíblemente fuerte, con una masa muscular que le permite luchar y defenderse de grandes depredadores.</li>
    `;
    document.getElementById("more-info-title").innerText = "Más sobre los animales fuertes";
    document.getElementById("more-info-description").innerText = "El mundo animal está lleno de especies sorprendentes que destacan por su fuerza física, pero también por sus habilidades especiales que les permiten sobrevivir. A continuación, exploramos más en detalle cómo algunos de estos animales usan su fuerza de manera única.";
    document.getElementById("more-info-animal").innerHTML =`
        <li><strong>Tiburón blanco:</strong>El tiburón blanco es uno de los depredadores más poderosos de los océanos. Con una mordida que puede generar hasta 1.800 kilogramos de presión, este animal tiene la fuerza suficiente para destrozar huesos y cortar presas grandes como focas y leones marinos. Además, su agilidad y velocidad lo convierten en un cazador letal en su entorno.</li>
        <li><strong>Búfalo africano:</strong> Los búfalos africanos son conocidos por su fuerza y resistencia. Pueden pesar más de 800 kilogramos y poseen cuernos largos y fuertes que usan tanto para defenderse de depredadores como para luchar entre ellos. A pesar de su aspecto tranquilo, pueden ser muy agresivos si se sienten amenazados, y su fuerza ha hecho que sean responsables de más muertes de cazadores en África que cualquier otro gran animal.</li>
        <li><strong>León:</strong> El león es considerado el rey de la sabana africana debido a su increíble fuerza y habilidad para cazar en grupo. Los leones machos pueden pesar hasta 250 kilogramos y tienen una poderosa mandíbula que les permite derribar a grandes presas como cebras y antílopes. Sus garras afiladas y su musculatura les dan la fuerza necesaria para dominar el ecosistema.</li>
    `;


    document.querySelector(".btn").innerText = "Switch to English";
    document.querySelector(".btn").setAttribute("onclick", "changeLanguage()");

}

function printPage() {
    window.print(); 
}
