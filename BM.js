const apiKey = "YOUR_API_KEY";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const city = "YOUR_CITY";

async function getWeatherData() {
  try {
    const response = await fetch(`${weatherUrl}?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    document.getElementById(
      "location"
    ).innerText = `Location: ${data.name}, ${data.sys.country}`;
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
    document.getElementById(
      "description"
    ).innerText = `Description: ${data.weather[0].description}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function showPage(pageId) {
  document.querySelectorAll("main").forEach((page) => {
    page.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";
}

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    showPage(targetId);
  });
});

// __________________________________________

const translations = {
  en: {
    "weather-h": "Weather",
    "climate-h": "Climate Change",
    "ocean-h": "Save the Ocean",
    "environment-h": "Environment Conservation",
    "": "",
    "": "",
    "current-weather": "Current Weather",
    "fetching-location": "Fetching location...",
    "fetching-temperature": "Fetching temperature...",
    "fetching-weather-description": "Fetching weather description...",
    "contact-us": "Contact Us",
    // متنساش تحطها باك
    //-----------------------------
    "climate-change": "Climate Change",
    "climate-change-p":
      "Climate change refers to significant, long-term changes in the average temperature,weather patterns, and other climate parameters on Earth. It is largely driven by human activities, such as the burning of fossil fuels and deforestation, leading to an increase in greenhouse gas emissions and global warming.",

    "climate-change-p-two":
      "The consequences of climate change include rising sea levels, extreme weather events,loss of biodiversity, and impacts on human health and food security. Addressing climate change requires global cooperation to reduce emissions, transition to sustainable energy sources, and adapt to the changing climate.",
    "save-ocean": "Save the Ocean",
    "plastic-use": "Reduce Plastic Usage",
    "plastic-use-p":
      "Plastic pollution poses a significant threat to marine life. By reducing our plastic usage, we can help protect the ocean and  inhabitants. Use reusable bags, bottles, and containers, and say no to single-use plastics.",

    "address-poll": "Address Marine Pollution",
    "address-poll-p":
      "Marine pollution, including oil spills and industrial waste, harms the ocean ecosystem. Support and advocate for policies that regulate  prevent pollution. Participate in beach cleanups to remove harmful debris from coas areas.",

    "promote-fishing": "Promote Sustainable Fishing",
    "promote-fishing-p":
      "Overfishing is a serious threat to fish populations and the balance of marine ecosystems. Choose sustainably sourced seafood, fisheries that follow responsible practices, and be aware of the impact of your choices on the ocean.",

    "habitates": "Conserve Coastal Habitats",
    "habitates-p":
      "Coastal habitats, such as mangroves and coral reefs, play a crucial role in supporting marine biodiversity. Advocate for the protection conservation of these habitats, as they provide essential breeding and feeding for many species.",

    "combat-climate": "Combat Climate Change",
    "combat-climate-p":
      "Climate change has severe consequences for the ocean, including rising sea levels and ocean acidification. Support initiatives that aim reduce carbon emissions and combat climate change to safeguard the health of the ocean its creatures.",

    "environment": "Environment Conservation",
    "environment-p": "Environment Conservation",
    "sustainable": "Practice Sustainable Living",
    "sustainable-p":
      "Adopt sustainable habits in your daily life, such as reducing energy consumption, conserving water, and recycling. actions collectively contribute to a healthier environment and a reduced footprint.",

    "trees": "Plant Trees and Support Afforestation",
    "trees-p":
      "Trees play a crucial role in absorbing carbon dioxide and providing oxygen. Participate in tree-planting initiatives and support projects to enhance biodiversity and combat climate change.",

    "reduce-usage": "Minimize Waste Generation",
    "reduce-usage-p":
      "Aim to minimize waste by choosing products with minimal packaging, composting organic waste, and properly disposing of hazardous material Embrace a zero-waste lifestyle to reduce the impact on landfills.",

    "clean-energy": "upport Clean and Renewable Energy",
    "clean-energy-p":
      "Advocate for and support the use of clean and renewable energy sources, such as solar, wind, and hydropower. Transitioning sustainable energy reduces reliance on fuels and decreases greenhouse gas emissions.",

    "footer-logo": "BondoQ",
    "footer-txt":
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit amet at dicta autem rerum mollitia modi molestias deleniti ad consectetur! Iure velit odit possimus",
    "": "",
  },
  ar: {
    //===================================

    "weather-h": "الطقس",
    "climate-h": "تغير المناخ",
    "ocean-h": "لنحمي المحيط",
    "environment-h": "البيئة",
    // -----
    "current-weather": "الطقس الحالي",
    "fetching-location": "جاري الحصول على الموقع...",
    "fetching-temperature": "جاري الحصول على درجة الحرارة...",
    "fetching-weather-description": "جاري الحصول على وصف الطقس...",
    "contact-us": "اتصل بنا",
    //-----------------------------
    "climate-change": "التغيرات المناخية",
    "climate-change-p":
      "تؤثر التغيرات المناخية على صحة البيئة المحيطة، حيث من المحتمل أن ترتفع وتيرة حدوث الكوارث الطبيعية كالجفاف والفيضانات وغيرها، والتي قد تهدد سلامة وصحة الإنسان بصورة مباشرة وغير مباشرة، حيث أوضح عدد من الهيئات الدولية أن للتغيرات المناخية آثا اً ر صحية محتملة على الإنسان، من ضمنها انتشار الأم ا رض المنقولة بالنواقل، وعدد من الأم ا رض المعدية، والأم ا رض المنتقلة عن طريق تناول الماء، أو الغذاء الملوث، وقد تؤثر في صحة الأشخاص الذين يعانون الأم ا رض المزمنة كمرضى القلب والربو مثلًا، وتفاقم الحالة الصحية لهم . ويعتبر القطاع الز ا رعي من أهم القطاعات التي سوف تتأثر بالتغي ا رت المناخية وذلك لحساسية الحاصلات الز ا رعية لتغير درجات الح ا ررة سواء بالارتفاع أو الانخفاض، حيث تنخفض إنتاجية بعض الحاصلات مثل القمح والأرز بارتفاع درجة الح ا ررة، في حين ترتفع إنتاجية محصول القطن بهذا الارتفاع، هذا إلى جانب زيادة استهلاك المياه بسبب زيادة م ا رت الري للحفاظ على درجة رطوبة التربة. وجدير بالذكر، ان من اهم حقوق الانسان الحق في الغذاء، والذي قد يتأثر بالتغي ا رت المناخية نتيجة ارتفاع درجات الح ا ررة وارتفاع مستوي سطح البحر وكميات الامطار. وبالتالي، يجب على الحكومات وضع الاست ا رتيجيات اللازمة لحماية هذا الحق..",

    "climate-change-p-two":
      "فيعرف التغي ا رت المناخية باعتبارها كل اشكال التغي ا رت التي تمكن التعبير عنها بوصف احصائي، والتي يمكن ان تستمر لعقود طويلة، الناتجة عن النشاط الإنساني او الناتجة عن التفاعلات الداخلية لمكونات النظام المناخي. ونستنتج من التعريفين السابقين ان التغير المناخي ناتج عن كل من النشاط الإنساني والعوامل الطبيعية، ويتسم بالاستم ا ررية حيث وان كانت أسبابها انية، الا ان اثارها السلبية سوف تستمر لأجيال قادمة. ومن اهم المتغي ا رت المناخية ارتفاع درجة ح ا ررة الجو، واختلاف كميات واوقات هطول الامطار، وما يتبع ذلك من تغير في الدورة المائية وعملياتها المختلفة. وخلاصة القول، ان التغير المناخي عبارة عن تغير في الخصائص المناخية للكرة الأرضية نتيجة الزيادات الحالية في نسبه تركز الغا ا زت المتولدة عن عمليات الاحت ا رق في الغلاف الجوي، بسبب الأنشطة البشرية والعوامل الطبيعية التي ترفع من درجة ح ا ررة الجو، ومن هذه الغا ا زت ثاني أكسيد الكربون، والميثان، وأكاسيد النتروجين، والكلوروفلوركربون",
    
    "save-ocean": "المحيط",
    "plastic-use": "تقليل استخدام البلاستيك",
    "plastic-use-p":
      "Plastic pollution poses a significant threat to marine life. By reducing our plastic usage, we can help protect the ocean and  inhabitants. Use reusable bags, bottles, and containers, and say no to single-use plastics.",

    "address-poll": "Address Marine Pollution",
    "address-poll-p":
      "Marine pollution, including oil spills and industrial waste, harms the ocean ecosystem. Support and advocate for policies that regulate  prevent pollution. Participate in beach cleanups to remove harmful debris from coas areas.",

    "promote-fishing": "Promote Sustainable Fishing",
    "promote-fishing-p":
      "Overfishing is a serious threat to fish populations and the balance of marine ecosystems. Choose sustainably sourced seafood, fisheries that follow responsible practices, and be aware of the impact of your choices on the ocean.",

    "habitates": "Conserve Coastal Habitats",
    "habitates-p":
      "Coastal habitats, such as mangroves and coral reefs, play a crucial role in supporting marine biodiversity. Advocate for the protection conservation of these habitats, as they provide essential breeding and feeding for many species.",

    "combat-climate": "Combat Climate Change",
    "combat-climate-p":
      "Climate change has severe consequences for the ocean, including rising sea levels and ocean acidification. Support initiatives that aim reduce carbon emissions and combat climate change to safeguard the health of the ocean its creatures.",

    "environment": "Environment Conservation",
    "environment-p": "Environment Conservation",
    "sustainable": "Practice Sustainable Living",
    "sustainable-p":
      "Adopt sustainable habits in your daily life, such as reducing energy consumption, conserving water, and recycling. actions collectively contribute to a healthier environment and a reduced footprint.",

    "trees": "Plant Trees and Support Afforestation",
    "trees-p":
      "Trees play a crucial role in absorbing carbon dioxide and providing oxygen. Participate in tree-planting initiatives and support projects to enhance biodiversity and combat climate change.",

    "reduce-usage": "Minimize Waste Generation",
    "reduce-usage-p":
      "Aim to minimize waste by choosing products with minimal packaging, composting organic waste, and properly disposing of hazardous material Embrace a zero-waste lifestyle to reduce the impact on landfills.",

    "clean-energy": "upport Clean and Renewable Energy",
    "clean-energy-p":
      "Advocate for and support the use of clean and renewable energy sources, such as solar, wind, and hydropower. Transitioning sustainable energy reduces reliance on fuels and decreases greenhouse gas emissions.",

    "footer-logo": "بندق",
    "footer-txt":
      "ان تغير المناخ سيؤثر تأثيرا ضارا للغاية علي بعض من أهم المحددات الأساسية للصحة, ولذلك سنتحدث سويا عن أهم الأسباب والعوامل والحلول أيضا",
  },
};

let currentLanguage = "en";

function changeLanguage(language) {
  currentLanguage = language;
  applyTranslations();
}

function applyTranslations() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.innerText = translations[currentLanguage][key];
    }
  });
}

const lol = document.querySelector(".toggler")
const ball = document.querySelector(".ball")
const enTog = document.querySelector(".en-toggler")
const arTog = document.querySelector(".ar-toggler")
const main = document.querySelectorAll("main")
lol.addEventListener('click', function () {
  if (ball.className === "ball") {
    ball.classList.add("dark")
    arTog.classList.add("active")
    enTog.classList.remove("active")
    main.forEach((e) => {
      e.style.direction="rtl"
    })
    changeLanguage("ar");
  } else if (ball.classList.contains("dark")){
    ball.classList.remove("dark")
    enTog.classList.add("active")
    arTog.classList.remove("active")
    main.forEach((e) => {
      e.style.direction="ltr"
    })
    changeLanguage("en");
  }
})

window.onload = () => {
  applyTranslations();
  getWeatherData();
  showPage("weather");
};

