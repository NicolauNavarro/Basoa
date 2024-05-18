//Nicolau Navarro
const body = document.querySelector("body");

window.addEventListener("load", loaded);

const moblieInfo = document.querySelector(".contformobile");

function loaded() {
  body.style.opacity = "1";
}

if (window.innerWidth > 600) {
  moblieInfo.remove();
}

const homeNav = document.querySelector("#homeNav");
const storeNav = document.querySelector("#storeNav");
const repairNav = document.querySelector("#repairNav");
const ecoNav = document.querySelector("#ecoNav");
const bikesNav = document.querySelector("#bikesNav");
const extrasNav = document.querySelector("#extrasNav");
const contactNav = document.querySelector("#contactNav");

const home = document.querySelector("#home");
const store = document.querySelector("#store");
const repair = document.querySelector("#repair");
const eco = document.querySelector("#eco");
const bikes = document.querySelector("#bikes");
const extras = document.querySelector("#extras");
const contact = document.querySelector("#contact");

homeNav.addEventListener("click", () => {
  gotosection(home);
});
storeNav.addEventListener("click", () => {
  gotosection(store);
});
repairNav.addEventListener("click", () => {
  gotosection(repair);
});
ecoNav.addEventListener("click", () => {
  gotosection(eco);
});
bikesNav.addEventListener("click", () => {
  gotosection(bikes);
});
extrasNav.addEventListener("click", () => {
  gotosection(extras);
});
contactNav.addEventListener("click", () => {
  gotosection(contact);
});

function gotosection(section) {
  section.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth" });
  }, 500);
  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

document.addEventListener("scroll", () => {
  navLine();
});

navLine();
function navLine() {
  const homeSituation = getSituationNav(home, "homeNav", "");
  const storeSituation = getSituationNav(store, "storeNav", "homeNav");
  const repairSituation = getSituationNav(repair, "repairNav", "storeNav");
  const ecoSituation = getSituationNav(eco, "ecoNav", "repairNav");
  const bikesSituation = getSituationNav(bikes, "bikesNav", "ecoNav");
  const extrasSituation = getSituationNav(extras, "extrasNav", "bikesNav");
  const contactSituation = getSituationNav(contact, "contactNav", "extrasNav");

  function getSituationNav(element, navId, beforeId) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      var tagafter = document.createElement("style");
      tagafter.innerHTML = `#${navId}::after {display: flex;}
      #${beforeId}::after{display:none;}`;
      document.head.appendChild(tagafter);
      return true;
    } else {
      var tagafter = document.createElement("style");
      tagafter.innerHTML = `#${navId}::after {display: none;}`;
      document.head.appendChild(tagafter);
      return false;
    }
  }
}

const languagebtn = document.querySelector(".languagebtn");
const storeContent = document.querySelector("#storeContent");
const repairContent = document.querySelector("#repairContent");
const ecoContent = document.querySelector("#ecoContent");
const bikesContent = document.querySelector("#bikesContent");
const extrasContent = document.querySelector("#extrasContent");
const foot = document.querySelector(".foot");
const mobileFoot = document.querySelector("#mobileFoot");
const showcaseMain = document.querySelector("#showcaseMain");

languagebtn.addEventListener("click", () => {
  let language = window.localStorage.getItem("language");
  if (language == "cat") {
    window.localStorage.setItem("language", "es");
  }
  if (language == "es") {
    window.localStorage.setItem("language", "eng");
  }
  if (language == "eng") {
    window.localStorage.setItem("language", "cat");
  }
  localstorageLanguage();
});

function languagebtnTn() {
  let language = window.localStorage.getItem("language");
  if (language == "cat") {
    window.localStorage.setItem("language", "es");
  }
  if (language == "es") {
    window.localStorage.setItem("language", "eng");
  }
  if (language == "eng") {
    window.localStorage.setItem("language", "cat");
  }
  localstorageLanguage();
}

localstorageLanguage();
function localstorageLanguage() {
  let language = window.localStorage.getItem("language");
  if (language == null) {
    window.localStorage.setItem("language", "cat");
    changeLang("cat");
  } else {
    changeLang(language);
  }
}

function changeLang(language) {
  if (language == "cat") {
    languagebtn.innerHTML = "<p>Cat</p>";
    showcaseMain.innerHTML = `
    <div class="infoSqr">
            <h6>Comerç local a</h6>
            <h5>Cerdanyola del Vallès</h5>
            <span class="material-symbols-outlined location_on">location_on</span>
          </div>
          <div class="infoSqr">
            <h6>Especialistes en</h6>
            <h5>Bicicletes elèctriques</h5>
            <span class="material-symbols-outlined">electric_bolt</span>
          </div>
          <button class="languagebtnT" onclick="languagebtnTn()">
          <p>Cat</p>
        </button>
    `;
  }
  if (language == "es") {
    languagebtn.innerHTML = "<p>Es</p>";
    showcaseMain.innerHTML = `
    <div class="infoSqr">
            <h6>Comercio local en</h6>
            <h5>Cerdanyola del Vallès</h5>
            <span class="material-symbols-outlined location_on">location_on</span>
          </div>
          <div class="infoSqr">
            <h6>Especialistas en</h6>
            <h5>Bicicletas eléctricas</h5>
            <span class="material-symbols-outlined">electric_bolt</span>
          </div>
          <button class="languagebtnT" onclick="languagebtnTn()">
          <p>Es</p>
        </button>
    `;
  }
  if (language == "eng") {
    languagebtn.innerHTML = "<p>Eng</p>";
    showcaseMain.innerHTML = `
    <div class="infoSqr">
            <h6>Local business in</h6>
            <h5>Cerdanyola del Vallès</h5>
            <span class="material-symbols-outlined location_on">location_on</span>
          </div>
          <div class="infoSqr">
            <h6>Specialists in</h6>
            <h5>Electric bikes</h5>
            <span class="material-symbols-outlined">electric_bolt</span>
          </div>
          <button class="languagebtnT" onclick="languagebtnTn()">
          <p>Eng</p>
        </button>
    `;
  }
  storeContent.innerHTML = sectionStructure(language, "store");
  repairContent.innerHTML = sectionStructure(language, "repair");
  ecoContent.innerHTML = sectionStructure(language, "eco");
  bikesContent.innerHTML = sectionStructure(language, "bikes");
  extrasContent.innerHTML = sectionStructure(language, "extras");
  traduceFoot(language);
  traduceMobileFoot(language);
}

function sectionStructure(language, who) {
  const allContent = getContent(language, who);
  const sTitle = allContent[0];
  const sSubtitle = allContent[1];
  const sFirst = allContent[2];
  const sSecond = allContent[3];
  const sThird = allContent[4];
  const sForth = allContent[5];
  let structure = `
  <div class="title">
            <h1>${sTitle}</h1>
            <h6>${sSubtitle}</h6>
          </div>
          <p>
            ${sFirst}
          </p>
          <p>
            ${sSecond}
          </p>
          <p>
            ${sThird}
          </p>
          <p>${sForth}</p>
  `;
  return structure;
}

function getContent(language, who) {
  let sTitle = "";
  let sSubtitle = "";
  let sFirst = "";
  let sSecond = "";
  let sThird = "";
  let sForth = "";
  if (language == "cat") {
    if (who == "store") {
      sTitle = "Store";
      sSubtitle = "EN CERDANYOLA DEL VALLÈS";
      sFirst = `A Basoa Bikes, ens apassiona tot el relacionat amb el món de les bicicletes. 
      Situats al cor de Cerdanyola del Vallès, Barcelona, oferim una àmplia gamma 
      de productes i serveis per a ciclistes de totes les edats i nivells. Amb una 
      puntuació mitjana de 4.9 sobre 5 en 15 opinions, ens enorgulleix la nostra 
      atenció al client, professionalitat i accessibilitat.`;
      sSecond = `La nostra botiga compta amb accés per a cadires de rodes i un personal amable
      i coneixedor que està disposat a ajudar-te en tot el que necessitis. Ja sigui
       per comprar una bicicleta nova o usada, buscar accessoris o necessitar una reparació,
        estem aquí per ajudar-te a gaudir de la teva experiència en bicicleta al màxim.`;
      sThird = `El nostre compromís amb la qualitat i la satisfacció del client és inigualable. 
      Cada visita a Basoa Bikes és una oportunitat per descobrir noves possibilitats i 
      millorar el teu rendiment ciclista. Vine i descobreix per què tants ciclistes confien 
      en nosaltres per les seves necessitats ciclistes.`;
      sForth = "Troba-ns a Carrer d'Anselm Clavé, 22, Local 1A";
    }
    if (who == "repair") {
      sTitle = "Repair";
      sSubtitle = "TALLER DE REPARACIONS";
      sFirst = `A Basoa Bikes, oferim serveis de reparació i manteniment de bicicletes de la més alta qualitat. 
      El nostre taller especialitzat està equipat per gestionar tot tipus de reparacions, des de les 
      més senzilles fins a les més complexes. Els nostres clients valoren la rapidesa i l'eficàcia amb 
      què realitzem les reparacions, assegurant que puguis tornar a la carretera el més aviat possible.`;
      sSecond = `Ens enorgulleix utilitzar només les millors eines i recanvis per garantir que cada reparació sigui
      duradora i fiable. Ja sigui que necessitis una posada a punt completa, una reparació de punxades, 
      ajustaments de frens o qualsevol altre servei de manteniment, el nostre equip d'experts està aquí 
      per ajudar-te. Ens comprometem a oferir un servei excepcional que satisfà les necessitats de cada 
      ciclista.`;
      sThird = `Per què conformar-te amb menys quan pots tenir la millor qualitat i atenció? Vine a Basoa Bikes i 
      experimenta la diferència en serveis de reparació i manteniment de bicicletes.`;
    }
    if (who == "eco") {
      sTitle = "Eco";
      sSubtitle = "BICIS AMB EL MEDI AMBIENT";
      sFirst = `A Basoa Bikes, estem compromesos amb la sostenibilitat i oferim una excel·lent selecció de 
      bicicletes elèctriques. Les bicicletes elèctriques són una manera fantàstica de moure't per 
      la ciutat de manera ecològica, eficient i sense esforç.`;
      sSecond = `El nostre personal expert t'ajudarà a trobar la bicicleta elèctrica que millor s'adapti a les
      teves necessitats i estil de vida. Oferim una varietat de models, tots ells equipats amb les
       últimes tecnologies per garantir una experiència de conducció suau i agradable. Amb una bicicleta 
       elèctrica, podràs explorar la ciutat i els seus voltants sense preocupar-te per les pujades o la 
       fatiga.`;
      sThird = `Invertir en una bicicleta elèctrica no només és bo per a tu, sinó també per al medi ambient. 
      A Basoa Bikes, creiem en un futur més verd i ens agradaria que formessis part d'aquest canvi. 
      Vine a Basoa Bikes i descobreix els avantatges de les bicicletes elèctriques, i com poden 
      millorar la teva vida diària.`;
    }
    if (who == "bikes") {
      sTitle = "Bikes";
      sSubtitle = "BICICLETES ELÈCTRIQUES I MECÀNIQUES";
      sFirst = `A Basoa Bikes, oferim una àmplia varietat de bicicletes per a tots
      els gustos i necessitats. Des de bicicletes de muntanya fins a 
      bicicletes de carretera, passant per bicicletes urbanes i per a nens, 
      tenim la bicicleta perfecta per a tu.`;
      sSecond = `Tant si ets un ciclista experimentat com si acabes de començar,
      el nostre equip està aquí per ajudar-te a triar la bicicleta ideal.
       Totes les nostres bicicletes són de marques reconegudes i de la més 
       alta qualitat, garantint una experiència de conducció segura i agradable.`;
      sThird = `A més de la nostra àmplia selecció, oferim assessorament personalitzat per 
      assegurar-nos que trobis la bicicleta que millor s'adapti a les teves necessitats 
      i estil de vida. Creiem que cada ciclista mereix la millor bicicleta i l'experiència 
      de compra més satisfactòria. Vine a Basoa Bikes i descobreix la bicicleta dels teus somnis.`;
    }
    if (who == "extras") {
      sTitle = "Extras";
      sSubtitle = "ACCESSORIS I RECANVIS TOP";
      sFirst = `Completa la teva experiència en bicicleta amb la nostra àmplia gamma 
      d'extres i accessoris. A Basoa Bikes, trobaràs tot el que necessites per 
      personalitzar i millorar la teva bicicleta, des de cascs i llums fins a 
      portabicicletes i roba tècnica.`;
      sSecond = `El nostre equip t'ajudarà a seleccionar els accessoris adequats per a les 
      teves necessitats, assegurant que estiguis equipat amb els millors productes 
      del mercat. Vina a Basoa Bikes i descobreix com podem ajudar-te a gaudir 
      encara més de la teva bicicleta.`;
      sThird = `Els accessoris correctes poden marcar una gran diferència en la teva experiència
      ciclista, oferint-te més comoditat, seguretat i estil. No importa què estiguis 
      buscant, el nostre personal coneixedor i dedicat està aquí per ajudar-te a trobar 
      exactament el que necessites per portar la teva experiència ciclista al següent nivell. 
      Visita Basoa Bikes avui mateix i equipa't amb el millor.`;
    }
  }

  if (language == "es") {
    if (who == "store") {
      sTitle = "Store";
      sSubtitle = "EN CERDANYOLA DEL VALLÈS";
      sFirst = `En Basoa Bikes, nos apasiona todo lo relacionado con el mundo de las bicicletas. 
      Ubicados en el corazón de Cerdanyola del Vallès, Barcelona, ofrecemos una amplia gama de 
      productos y servicios para ciclistas de todas las edades y niveles. Con una puntuación media 
      de 4.9 sobre 5 en 15 opiniones, nos enorgullece nuestra atención al cliente, profesionalidad 
      y accesibilidad.`;
      sSecond = `Nuestra tienda cuenta con acceso para sillas de ruedas y un personal amable y conocedor 
      que está dispuesto a ayudarte en todo lo que necesites. Ya sea para comprar una bicicleta nueva o 
      usada, buscar accesorios o necesitar una reparación, estamos aquí para ayudarte a disfrutar de tu 
      experiencia en bicicleta al máximo.`;
      sThird = `Nuestro compromiso con la calidad y la satisfacción del cliente es incomparable. 
      Cada visita a Basoa Bikes es una oportunidad para descubrir nuevas posibilidades y mejorar tu 
      rendimiento ciclista. Ven y descubre por qué tantos ciclistas confían en nosotros para sus necesidades 
      ciclistas.`;
      sForth = "Encuentranos en Carrer d'Anselm Clavé, 22, Local 1A";
    }
    if (who == "repair") {
      sTitle = "Repair";
      sSubtitle = "TALLER DE REPARACIONES";
      sFirst = `En Basoa Bikes, ofrecemos servicios de reparación y mantenimiento de bicicletas de la más alta 
      calidad. Nuestro taller especializado está equipado para manejar todo tipo de reparaciones, desde las más 
      simples hasta las más complejas. Nuestros clientes valoran la rapidez y eficacia con que realizamos las 
      reparaciones, asegurando que puedas volver a la carretera lo antes posible.`;
      sSecond = `Nos enorgullece utilizar solo las mejores herramientas y repuestos para garantizar que cada 
      reparación sea duradera y fiable. Ya sea que necesites una puesta a punto completa, una reparación de 
      pinchazos, ajustes de frenos o cualquier otro servicio de mantenimiento, nuestro equipo de expertos está 
      aquí para ayudarte. Nos comprometemos a ofrecer un servicio excepcional que satisfaga las necesidades de 
      cada ciclista.`;
      sThird = `¿Por qué conformarte con menos cuando puedes tener la mejor calidad y atención? Ven a Basoa Bikes 
      y experimenta la diferencia en servicios de reparación y mantenimiento de bicicletas.`;
    }
    if (who == "eco") {
      sTitle = "Eco";
      sSubtitle = "BICIS CON EL MEDIO AMBIENTE";
      sFirst = `En Basoa Bikes, estamos comprometidos con la sostenibilidad y ofrecemos una excelente selección de 
      bicicletas eléctricas. Las bicicletas eléctricas son una forma fantástica de moverte por la ciudad de manera 
      ecológica, eficiente y sin esfuerzo.`;
      sSecond = `Nuestro personal experto te ayudará a encontrar la bicicleta eléctrica que mejor se adapte a tus 
      necesidades y estilo de vida. Ofrecemos una variedad de modelos, todos ellos equipados con las últimas tecnologías 
      para garantizar una experiencia de conducción suave y agradable. Con una bicicleta eléctrica, podrás explorar la 
      ciudad y sus alrededores sin preocuparte por las cuestas o el cansancio.`;
      sThird = `Invertir en una bicicleta eléctrica no solo es bueno para ti, sino también para el medio ambiente. 
      En Basoa Bikes, creemos en un futuro más verde y nos gustaría que formaras parte de este cambio. Ven a Basoa Bikes 
      y descubre las ventajas de las bicicletas eléctricas, y cómo pueden mejorar tu vida diaria.`;
    }
    if (who == "bikes") {
      sTitle = "Bikes";
      sSubtitle = "BICICLETAS ELÉCTRICAS Y MECÁNICAS";
      sFirst = `En Basoa Bikes, ofrecemos una amplia variedad de bicicletas para todos los gustos y necesidades. 
      Desde bicicletas de montaña hasta bicicletas de carretera, pasando por bicicletas urbanas y para niños, 
      tenemos la bicicleta perfecta para ti.`;
      sSecond = `Tanto si eres un ciclista experimentado como si acabas de empezar, nuestro equipo está aquí para 
      ayudarte a elegir la bicicleta ideal. Todas nuestras bicicletas son de marcas reconocidas y de la más alta calidad, 
      garantizando una experiencia de conducción segura y agradable.`;
      sThird = `Además de nuestra amplia selección, ofrecemos asesoramiento personalizado para asegurarnos de que encuentres 
      la bicicleta que mejor se adapte a tus necesidades y estilo de vida. Creemos que cada ciclista merece la mejor bicicleta 
      y la experiencia de compra más satisfactoria. Ven a Basoa Bikes y descubre la bicicleta de tus sueños.`;
    }
    if (who == "extras") {
      sTitle = "Extras";
      sSubtitle = "ACCESORIOS Y RECAMBIOS TOP";
      sFirst = `Completa tu experiencia en bicicleta con nuestra amplia gama de extras y accesorios. En Basoa Bikes, encontrarás 
      todo lo que necesitas para personalizar y mejorar tu bicicleta, desde cascos y luces hasta portabicicletas y ropa técnica.`;
      sSecond = `Nuestro equipo te ayudará a seleccionar los accesorios adecuados para tus necesidades, asegurando que estés equipado 
      con los mejores productos del mercado. Ven a Basoa Bikes y descubre cómo podemos ayudarte a disfrutar aún más de tu bicicleta.`;
      sThird = `Los accesorios correctos pueden marcar una gran diferencia en tu experiencia ciclista, ofreciéndote más comodidad, 
      seguridad y estilo. No importa qué estés buscando, nuestro personal conocedor y dedicado está aquí para ayudarte a encontrar 
      exactamente lo que necesitas para llevar tu experiencia ciclista al siguiente nivel. Visita Basoa Bikes hoy mismo y equípate 
      con lo mejor.`;
    }
  }

  if (language == "eng") {
    if (who == "store") {
      sTitle = "Store";
      sSubtitle = "IN CERDANYOLA DEL VALLÈS";
      sFirst = `At Basoa Bikes, we are passionate about everything related to the world of bicycles. 
      Located in the heart of Cerdanyola del Vallès, Barcelona, we offer a wide range of products and 
      services for cyclists of all ages and levels. With an average rating of 4.9 out of 5 from 15 reviews, 
      we pride ourselves on our customer service, professionalism, and accessibility.`;
      sSecond = `Our store has wheelchair access and a friendly, knowledgeable staff ready to assist you with 
      anything you need. Whether you are looking to buy a new or used bike, search for accessories, or need a 
      repair, we are here to help you enjoy your cycling experience to the fullest.`;
      sThird = `Our commitment to quality and customer satisfaction is unmatched. Each visit to Basoa Bikes is 
      an opportunity to discover new possibilities and enhance your cycling performance. Come and find out why 
      so many cyclists trust us for their cycling needs.`;
      sForth = "Find us at Carrer d'Anselm Clavé, 22, Local 1A";
    }
    if (who == "repair") {
      sTitle = "Repair";
      sSubtitle = "REPAIR WORKSHOP";
      sFirst = `At Basoa Bikes, we offer top-quality bike repair and maintenance services. Our specialized 
      workshop is equipped to handle all types of repairs, from the simplest to the most complex. Our customers 
      appreciate the speed and efficiency with which we carry out repairs, ensuring you can get back on the road 
      as soon as possible.`;
      sSecond = `We take pride in using only the best tools and spare parts to ensure every repair is durable and 
      reliable. Whether you need a full tune-up, puncture repairs, brake adjustments, or any other maintenance service, 
      our team of experts is here to help. We are committed to providing exceptional service that meets the needs of 
      every cyclist.`;
      sThird = `Why settle for less when you can have the best quality and care? Come to Basoa Bikes and experience the 
      difference in bike repair and maintenance services.`;
    }
    if (who == "eco") {
      sTitle = "Eco";
      sSubtitle = "ECO-FRIENDLY BIKES";
      sFirst = `At Basoa Bikes, we are committed to sustainability and offer an excellent selection of electric bikes. 
      Electric bikes are a fantastic way to get around the city in an eco-friendly, efficient, and effortless manner.`;
      sSecond = `Our expert staff will help you find the electric bike that best suits your needs and lifestyle. 
      We offer a variety of models, all equipped with the latest technologies to ensure a smooth and enjoyable riding 
      experience. With an electric bike, you can explore the city and its surroundings without worrying about hills or 
      fatigue.`;
      sThird = `Investing in an electric bike is not only good for you but also for the environment. At Basoa Bikes, 
      we believe in a greener future and would love for you to be a part of this change. Come to Basoa Bikes and discover 
      the benefits of electric bikes, and how they can enhance your daily life.`;
    }
    if (who == "bikes") {
      sTitle = "Bikes";
      sSubtitle = "ELECTRIC AND MECHANICAL BIKES";
      sFirst = `At Basoa Bikes, we offer a wide variety of bikes for all tastes and needs. From mountain bikes to road bikes, 
      including urban bikes and children's bikes, we have the perfect bike for you.`;
      sSecond = `Whether you are an experienced cyclist or just starting out, our team is here to help you choose the ideal bike. 
      All our bikes are from reputable brands and of the highest quality, ensuring a safe and enjoyable riding experience.`;
      sThird = `In addition to our wide selection, we offer personalized advice to ensure you find the bike that best suits your 
      needs and lifestyle. We believe every cyclist deserves the best bike and the most satisfying shopping experience. Come to 
      Basoa Bikes and discover the bike of your dreams.`;
    }
    if (who == "extras") {
      sTitle = "Extras";
      sSubtitle = "TOP ACCESSORIES AND SPARE PARTS";
      sFirst = `Complete your biking experience with our wide range of extras and accessories. At Basoa Bikes, you'll find everything 
      you need to customize and enhance your bike, from helmets and lights to bike racks and technical clothing.`;
      sSecond = `Our team will help you choose the right accessories for your needs, ensuring you are equipped with the best products 
      on the market. Come to Basoa Bikes and discover how we can help you enjoy your bike even more.`;
      sThird = `The right accessories can make a big difference in your cycling experience, offering you more comfort, safety, and style.
       No matter what you are looking for, our knowledgeable and dedicated staff is here to help you find exactly what you need to take your 
       cycling experience to the next level. Visit Basoa Bikes today and equip yourself with the best.`;
    }
  }

  return [sTitle, sSubtitle, sFirst, sSecond, sThird, sForth];
}

function traduceFoot(language) {
  let findUs = "";
  let talk = "";
  if (language == "cat") {
    findUs = `
  Troba-ns:<br />
          Dilluns (De 16:00 a 20:00)<br />
          Dimarts a Divendres (De 10:00 a 13:30h i de 16:00 a 20:00h)<br />
          Dissabtes (de 10:00 a 14:00)
  `;
    talk = `
  <h5>Parlem!</h5>
        <p>Adreça: C/ Anselm Clavé, 20-22, Local 1A</p>
        <p>Telèfon: 681962603</p>
        <p>Correu: info@basoabikes.com</p>
  `;
  }
  if (language == "es") {
    findUs = `
  Encuentranos:<br />
          Lunes (De 16:00 a 20:00)<br />
          Martes a Viernes (De 10:00 a 13:30h y de 16:00 a 20:00h)<br />
          Sabados (de 10:00 a 14:00)
  `;
    talk = `
  <h5>Hablemos!</h5>
        <p>Dirección: C/ Anselm Clavé, 20-22, Local 1A</p>
        <p>Telefono: 681962603</p>
        <p>Correo: info@basoabikes.com</p>
  `;
  }
  if (language == "eng") {
    findUs = `
  Find us:<br />
          Mondays (From 16:00 to 20:00)<br />
          Tuesday to Friday (10:00 to 13:30h and 16:00 to 20:00h)<br />
          Saturdays (From 10:00 to 14:00)
  `;
    talk = `
  <h5>Lets talk</h5>
        <p>Direction: C/ Anselm Clavé, 20-22, Local 1A</p>
        <p>Phone: 681962603</p>
        <p>Mail: info@basoabikes.com</p>
  `;
  }

  let contentFoot = `
  <div class="column">
        <h4>Basoa Bikes</h4>
        <p>
          ${findUs}
        </p>
      </div>
      <div class="column">
        ${talk}
      </div>
      <div class="column buttons">
        <button
          onclick='window.open("https://api.whatsapp.com/send?phone=+34681962603&text=Hola,%20os%20he%20visto%20en%20el%20directorio%20de%20negocios%20de%20bicicletas%20https://biciscamacho.es/%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20acerca%20de", "_blank")'
        >
          WhatsApp
        </button>
        <button
          onclick='window.open("https://www.instagram.com/basoa.bikes/", "_blank")'
        >
          Instagram
        </button>
        <button
          onclick='window.open("https://www.google.com/maps/place/data=!3m1!4b1!4m6!3m5!1s0x12a497f9c43812c5:0x359edd903b2eb!8m2!3d41.4881144!4d2.1341259!16s%2Fg%2F1vtzjkdb?entry=ttu/", "_blank")'
        >
          Google Maps
        </button>
      </div>
      <div class="logoplace">
        <div class="rectangle">
          <img src="images/logo.png" alt="" />
        </div>
      </div>
  `;
  foot.innerHTML = contentFoot;
}

function traduceMobileFoot(language) {
  let content = "";
  if (language == "cat") {
    content = `
    <div class="column">
          <div class="title">
            <h1>Troba-ns</h1>
            <h6>Estem molt a prop teu</h6>
          </div>
          <p>
            Dilluns<br>(De 16:00 a 20:00)
          </p>
          <p>
            Dimarts a Divendres<br>(De 10:00 a 13:30h i de 16:00 a 20:00h)
          </p>
          <p>Dissabtes<br>(de 10:00 a 14:00)</p>
          <p></p>
          <p>
            Adreça:<br>C/ Anselm Clavé, 20-22, Local 1A<br>
          </p>
          <p>
            Telèfon: 681962603
          </p>
          <p>
            Correu: info@basoabikes.com
          </p>
          <p></p>
          <div class="column buttons">
            <button
              onclick='window.open("https://api.whatsapp.com/send?phone=+34681962603&text=Hola,%20os%20he%20visto%20en%20el%20directorio%20de%20negocios%20de%20bicicletas%20https://biciscamacho.es/%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20acerca%20de", "_blank")'
            >
              WhatsApp
            </button>
            <button
              onclick='window.open("https://www.instagram.com/basoa.bikes/", "_blank")'
            >
              Instagram
            </button>
            <button
              onclick='window.open("https://www.google.com/maps/place/data=!3m1!4b1!4m6!3m5!1s0x12a497f9c43812c5:0x359edd903b2eb!8m2!3d41.4881144!4d2.1341259!16s%2Fg%2F1vtzjkdb?entry=ttu/", "_blank")'
            >
              Maps
            </button>
          </div>
    `;
  }
  if (language == "es") {
    content = `
    <div class="column">
          <div class="title">
            <h1>Encuentranos</h1>
            <h6>Estamos muy cerca de ti</h6>
          </div>
          <p>
            Lunes<br>(De 16:00 a 20:00)
          </p>
          <p>
            Martes a Viernes<br>(De 10:00 a 13:30h y de 16:00 a 20:00h)
          </p>
          <p>Sabados<br>(de 10:00 a 14:00)</p>
          <p></p>
          <p>
            Dirección:<br>C/ Anselm Clavé, 20-22, Local 1A<br>
          </p>
          <p>
            Telefono: 681962603
          </p>
          <p>
            Correo: info@basoabikes.com
          </p>
          <p></p>
          <div class="column buttons">
            <button
              onclick='window.open("https://api.whatsapp.com/send?phone=+34681962603&text=Hola,%20os%20he%20visto%20en%20el%20directorio%20de%20negocios%20de%20bicicletas%20https://biciscamacho.es/%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20acerca%20de", "_blank")'
            >
              WhatsApp
            </button>
            <button
              onclick='window.open("https://www.instagram.com/basoa.bikes/", "_blank")'
            >
              Instagram
            </button>
            <button
              onclick='window.open("https://www.google.com/maps/place/data=!3m1!4b1!4m6!3m5!1s0x12a497f9c43812c5:0x359edd903b2eb!8m2!3d41.4881144!4d2.1341259!16s%2Fg%2F1vtzjkdb?entry=ttu/", "_blank")'
            >
              Maps
            </button>
          </div>`;
  }
  if (language == "eng") {
    content = `
    <div class="column">
          <div class="title">
            <h1>Find us</h1>
            <h6>We are near you</h6>
          </div>
          <p>
            Mondays<br>(From 16:00 to 20:00)
          </p>
          <p>
            Tuesday to Friday<br>(10:00 to 13:30h and 16:00 to 20:00h)
          </p>
          <p>Saturdays<br>(From 10:00 to 14:00)</p>
          <p></p>
          <p>
            Direction:<br>C/ Anselm Clavé, 20-22, Local 1A<br>
          </p>
          <p>
            Phone: 681962603
          </p>
          <p>
            Mail: info@basoabikes.com
          </p>
          <p></p>
          <div class="column buttons">
            <button
              onclick='window.open("https://api.whatsapp.com/send?phone=+34681962603&text=Hola,%20os%20he%20visto%20en%20el%20directorio%20de%20negocios%20de%20bicicletas%20https://biciscamacho.es/%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20acerca%20de", "_blank")'
            >
              WhatsApp
            </button>
            <button
              onclick='window.open("https://www.instagram.com/basoa.bikes/", "_blank")'
            >
              Instagram
            </button>
            <button
              onclick='window.open("https://www.google.com/maps/place/data=!3m1!4b1!4m6!3m5!1s0x12a497f9c43812c5:0x359edd903b2eb!8m2!3d41.4881144!4d2.1341259!16s%2Fg%2F1vtzjkdb?entry=ttu/", "_blank")'
            >
              Maps
            </button>
          </div>`;
  }
  mobileFoot.innerHTML = content;
}
