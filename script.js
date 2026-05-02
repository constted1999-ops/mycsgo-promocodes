const translations = {
  ru: {
    meta: "Гайды 04.04.2025",
    titleTemplate: "Промокоды MyCSGO в [Текущий год]",
    description:
      "Ищете актуальные промокоды MyCSGO для пополнения? Мы собрали свежие предложения, чтобы вы получали больше бонусов и выгоднее открывали кейсы.",
    updatedLabel: "Обновлено:",
    listTitle: "Лучшие промокоды MyCSGO на пополнение",
    copyButton: "Копировать",
    copiedButton: "Скопировано",
    toastCopied: "Промокод скопирован:",
    langButton: "EN",
    htmlLang: "ru",
  },
  en: {
    meta: "Guides 04.04.2025",
    titleTemplate: "MyCSGO promo codes in [Current year]",
    description:
      "Looking for up-to-date MyCSGO top-up promo codes? We collected fresh offers so you can get more bonuses and open cases with better value.",
    updatedLabel: "Updated:",
    listTitle: "Best MyCSGO top-up promo codes",
    copyButton: "Copy",
    copiedButton: "Copied",
    toastCopied: "Promo code copied:",
    langButton: "RU",
    htmlLang: "en",
  },
};

const langToggle = document.getElementById("langToggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const copyButtons = document.querySelectorAll(".copy-btn");
const toast = document.getElementById("toast");
const updatedDateNode = document.querySelector("[data-i18n='updatedDate']");
const titleNode = document.querySelector("[data-i18n='title']");
const articleContentNode = document.getElementById("articleContent");

let currentLang = "ru";

function formatCurrentDate(lang) {
  const locale = lang === "ru" ? "ru-RU" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
}

function formatCurrentYearTitle(lang) {
  const year = new Date().getFullYear();
  if (lang === "ru") {
    return translations.ru.titleTemplate.replace("[Текущий год]", String(year));
  }
  return translations.en.titleTemplate.replace("[Current year]", String(year));
}

function getArticleContent(lang) {
  const year = new Date().getFullYear();

  if (lang === "en") {
    return `
      <p>
        MyCSGO is a top case-opening platform where everyone can test their luck and build a unique skin collection. Promo codes are your key to extra bonuses and savings, making every case purchase or CS2 skin upgrade much more cost-effective! 🛒
      </p>

      <h3>MyCSGO promo codes in ${year}</h3>
      <p>We will give you the promo codes right away, but we still recommend reading the full article ;)</p>
      <ul>
        <li>✅ CODESS 👉 up to 40% discount on MyCSGO balance top-up until the end of the year;</li>
        <li>✅ PROBONUS 👉 secret code with up to 50% discount for first and repeat top-ups plus a free case from the platform;</li>
        <li>✅ 500GOLD 👉 up to 40% value on top MyCSGO cases with strong drop potential;</li>
      </ul>

      <h3>Why should you use MyCSGO promo codes? 🤔</h3>
      <p>
        Promo codes help you spend less and get more value. They provide top-up bonuses, improve overall value when opening cases, and can give you extra rewards. In Counter-Strike 2, where everyone wants a unique inventory, this is a very useful advantage. 🎯
      </p>

      <h3>✨ What benefits do MyCSGO promo codes give?</h3>
      <ul>
        <li>🔥 Discounts on your first purchase</li>
        <li>🎁 Extra balance bonuses</li>
        <li>🎮 Free bonus cases</li>
        <li>🎯 Better chance to get high-value outcomes</li>
      </ul>
      <p>
        Each promo code has its own conditions, so keep an eye on updates to avoid missing strong offers. 👀
      </p>

      <h3>🔥 Current case breakdown on MYCSGO</h3>

      <h3>💸 1. Budget / “boost” cases</h3>
      <ul>
        <li>Mining series (Haze, Flora, Sand, etc.)</li>
        <li>low-cost starter cases</li>
      </ul>
      <p>📌 Why players open them:</p>
      <ul>
        <li>low entry point</li>
        <li>often pay back part of the spend</li>
        <li>good for balance boosting</li>
      </ul>

      <h3>🎯 2. Thematic and limited cases (top now)</h3>
      <p>Limited editions are actively promoted on the platform:</p>
      <ul>
        <li>“Zveropolis”</li>
        <li>“From rags to riches”</li>
        <li>“Time to shine”</li>
        <li>“Team Spirit”</li>
        <li>“Night life”</li>
        <li>“Lilo and Stitch”</li>
      </ul>
      <p>📌 Pros:</p>
      <ul>
        <li>can produce expensive drops</li>
        <li>high interest and hype</li>
      </ul>
      <p>📌 Con:</p>
      <ul>
        <li>they disappear quickly</li>
      </ul>
      <p>👉 These are currently the most popular cases on the platform</p>

      <h3>🧠 3. Influencer cases</h3>
      <p>Still relevant, but now more expensive:</p>
      <ul>
        <li>streamer / YouTuber cases</li>
        <li>often with an “upgraded” item pool</li>
      </ul>
      <p>📌 Fact:</p>
      <ul>
        <li>people open them because they trust the creator</li>
      </ul>
      <p>👉 Good potential</p>

      <h3>🎁 4. Bonus cases (most cost-effective)</h3>
      <ul>
        <li>Red / Purple / Black Collection</li>
        <li>promo-code bonus cases</li>
      </ul>
      <p>📌 Why this is valuable:</p>
      <ul>
        <li>you do not spend your own money</li>
        <li>you can get positive value from zero start</li>
      </ul>
      <p>👉 Best option for safer play</p>

      <h3>💎 5. Standard CS2 cases (new meta)</h3>
      <p>Popular picks right now:</p>
      <ul>
        <li>Revolution Case</li>
        <li>Dreams &amp; Nightmares</li>
        <li>Prisma / Gamma / Clutch</li>
      </ul>
      <p>📌 Why they are opened:</p>
      <ul>
        <li>predictable drop pool (similar to in-game expectations)</li>
        <li>standard knife chance (~0.26%)</li>
      </ul>
      <p>👉 Classic choice</p>

      <h3>Conclusion 🏁</h3>
      <p>With MyCSGO promo codes, your gameplay can become more exciting and more cost-efficient.</p>
      <p>🎮 Grow your skin collection, save money, and enjoy every case opening.</p>
      <p>🚀 Activate available promo codes today and claim your bonuses!</p>
    `;
  }

  return `
    <p>
      MyCSGO - это топовая платформа для открытия кейсов, где каждый может испытать свою удачу и собрать уникальные скины. Промокоды здесь - это ключ к дополнительным бонусам и экономии, делая каждую покупку кейса или апгрейда скинов КС2 на Май КС:ГО максимально выгодной! 🛒
    </p>

    <h3>Промокоды MyCSGO в ${year}</h3>
    <p>Сразу дадим Вам промокоды, но рекомендуем изучить статью ;)</p>
    <ul>
      <li>✅ CODESS 👉 скидка по промокоду MyCSGO до 40% при пополнении баланса действует до конца года;</li>
      <li>✅ PROBONUS 👉 серкретный код Майксго на скидку до 50% на первое и повторное пополнение плюс бесплатный кейс от разработчиков сайта;</li>
      <li>✅ 500GOLD 👉 выгода до 40% на лучшие кейсы mycsgo, которые хорошо окупают и выдают отличные скины;</li>
    </ul>

    <h3>Почему стоит использовать промокоды Майксго? 🤔</h3>
    <p>
      Промокоды дают шанс сэкономить и получить больше за меньшую сумму. Они позволяют пополнять баланс на сайтах с кейсами cs 2 с бонусами, увеличивают ваши шансы на редкие скины и дарят приятные сюрпризы. В мире Counter-Strike 2, где каждый стремится к уникальной коллекции, это просто незаменимая находка! 🎯
    </p>

    <h3>✨ Какие преимущества дают промокоды Mycsgo?</h3>
    <ul>
      <li>🔥 Скидки на первую покупку</li>
      <li>🎁 Дополнительные бонусы к балансу</li>
      <li>🎮 Бесплатные кейсы в подарок</li>
      <li>🎯 Повышенный шанс выпадения редких предметов</li>
    </ul>
    <p>
      Каждый промокод имеет уникальные условия, так что следите за обновлениями, чтобы ничего не пропустить! 👀
    </p>

    <h3>🔥 Актуальный разбор кейсов на MYCSGO</h3>

    <h3>💸 1. Бюджетные / «разгон» кейсы</h3>
    <ul>
      <li>Mining-серия (Haze, Flora, Sand и т.д.)</li>
      <li>дешёвые стартовые кейсы</li>
    </ul>
    <p>📌 Почему их открывают:</p>
    <ul>
      <li>низкий вход</li>
      <li>часто окупают</li>
      <li>подходят для буста баланса</li>
    </ul>

    <h3>🎯 2. Тематические и лимитированные кейсы (ТОП сейчас)</h3>
    <p>На сайте активно продвигаются лимитки:</p>
    <ul>
      <li>«Зверополис»</li>
      <li>«Из грязи в князи»</li>
      <li>«Время сиять»</li>
      <li>«Team Spirit»</li>
      <li>«Ночная жизнь»</li>
      <li>«Лило и Стич»</li>
    </ul>
    <p>📌 Их плюс:</p>
    <ul>
      <li>часто выдают дорогие дропы</li>
      <li>повышенный интерес → больше «хайпа»</li>
    </ul>
    <p>📌 Минус:</p>
    <ul>
      <li>быстро убираются</li>
    </ul>
    <p>👉 Сейчас это самые популярные кейсы на платформе</p>

    <h3>🧠 3. Кейсы блогеров</h3>
    <p>Они никуда не делись, но стали дороже:</p>
    <ul>
      <li>кейсы стримеров / ютуберов</li>
      <li>часто с «улучшенным» пулом</li>
    </ul>
    <p>📌 Факт:</p>
    <ul>
      <li>их открывают из-за доверия к блогеру</li>
    </ul>
    <p>👉 Хорошие шансы</p>

    <h3>🎁 4. Бонусные кейсы (САМЫЕ выгодные)</h3>
    <ul>
      <li>Red / Purple / Black Collection</li>
      <li>бонус-кейсы за промокоды</li>
    </ul>
    <p>📌 Вот где реально есть смысл:</p>
    <ul>
      <li>ты не тратишь свои деньги</li>
      <li>можно вынести плюс с нуля</li>
    </ul>
    <p>👉 Лучший вариант для «безопасной игры»</p>

    <h3>💎 5. Стандартные кейсы CS2 (новая мета)</h3>
    <p>Сейчас на сайте активно крутят:</p>
    <ul>
      <li>Revolution Case</li>
      <li>Dreams &amp; Nightmares</li>
      <li>Prisma / Gamma / Clutch</li>
    </ul>
    <p>📌 Почему их открывают:</p>
    <ul>
      <li>понятные дропы (как в игре)</li>
      <li>шанс ножа стандартный (~0.26%)</li>
    </ul>
    <p>👉 Это «классика»</p>

    <h3>Заключение 🏁</h3>
    <p>С промокодами Mycsgo ваш игровой процесс станет еще более захватывающим и экономным!</p>
    <p>🎮 Увеличивайте свою коллекцию скинов, экономьте деньги и получайте удовольствие от каждой открытой коробки.</p>
    <p>🚀 Уже сегодня активируйте доступные промокоды и наслаждайтесь бонусами!</p>
  `;
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  if (updatedDateNode) {
    updatedDateNode.textContent = formatCurrentDate(lang);
  }

  if (titleNode) {
    titleNode.textContent = formatCurrentYearTitle(lang);
  }

  if (articleContentNode) {
    articleContentNode.innerHTML = getArticleContent(lang);
  }

  copyButtons.forEach((btn) => {
    btn.textContent = dict.copyButton;
    btn.classList.remove("copied");
  });

  toast.textContent = "";
  document.documentElement.lang = dict.htmlLang;
  langToggle.textContent = dict.langButton;
  currentLang = lang;
}

async function copyCode(code, button) {
  try {
    await navigator.clipboard.writeText(code);
    button.textContent = translations[currentLang].copiedButton;
    button.classList.add("copied");
    toast.textContent = `${translations[currentLang].toastCopied} ${code}`;
    setTimeout(() => {
      button.textContent = translations[currentLang].copyButton;
      button.classList.remove("copied");
    }, 1200);
  } catch (error) {
    toast.textContent = "Clipboard unavailable";
  }
}

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const code = button.dataset.code;
    copyCode(code, button);
  });
});

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "ru" ? "en" : "ru");
});

applyLanguage(currentLang);
