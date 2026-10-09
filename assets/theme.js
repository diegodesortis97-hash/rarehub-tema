(function () {
  var copy = {
    it: { games: "Giochi", tournaments: "Tornei", eyebrow: "Carte collezionabili, senza compromessi", hero: "Il punto d’incontro per chi vive ogni carta. Scopri le nuove espansioni di One Piece, Pokémon, Dragon Ball Fusion World e Riftbound.", explore: "Esplora i giochi", arrivals: "Ultimi arrivi", featured: "Categoria in evidenza", bestsellers: "I più venduti", add: "Aggiungi", releases: "Uscite", source: "Fonte ufficiale", releaseNote: "Date e fonti ufficiali. I set qui mostrati non indicano disponibilità o preordini nel negozio.", beyond: "Oltre il catalogo", communityTitle: "La community", communityBrand: "Rare Hub.", play: "01 / Gioca", events: "Tornei ed eventi", eventsBody: "Uno spazio per incontrarsi e giocare. Le date e le modalità dei tornei saranno annunciate qui e sui nostri canali.", askInfo: "Chiedi informazioni", trade: "02 / Scambia", sell: "Vendi la tua collezione", sellBody: "Hai carte singole o una collezione da proporci? Raccontaci gioco, quantità e condizioni. Ti rispondiamo dopo aver valutato la proposta.", sendDetails: "Inviaci i dettagli", writeKicker: "Scrivici", writeTitle: "Parliamo di tornei e di collezioni.", writeBody: "Il modulo serve per i tornei, per una domanda o per proporre una collezione. Se vendi, indica giochi, quantità, condizioni e un recapito.", name: "Nome", email: "Email", reason: "Motivo", details: "Dettagli", general: "Domanda generale", send: "Invia richiesta", footerAbout: "Carte collezionabili, box e case. Un progetto nato a Rimini, per chi ama giocare e collezionare.", exploreCol: "Esplora", contactCol: "Contatti", newsCol: "Resta aggiornato", ordersNote: "Per ordini e richieste, usa il modulo.", place: "Rimini, Italia", newsBody: "Novità sul catalogo e sulla community.", emailPh: "La tua email", language: "Lingua", packs: "Bustine", singles: "Carte singole", all: "Tutto", available: "Disponibile", sold: "Non disponibile", addCart: "Aggiungi al carrello", detailsH: "Dettagli", emptyCart: "Il carrello è vuoto", keep: "Continua a esplorare", subtotal: "Subtotale", ship: "Spedizione Italia", total: "Totale", payNote: "Il pagamento apre la pagina ufficiale di Stripe (carta e Apple Pay) o di PayPal. Il numero della carta non passa da RareHub.", consent: "Ho letto le condizioni di vendita, la privacy e le regole su resi e recesso.", payCard: "Paga con carta", payPayPal: "Paga con PayPal", payApple: "Paga con Apple Pay", emptyPay: "Carrello vuoto", shipNote: "Spedizione standard € 6,90. Due o più box, € 9,90. Un case, € 14,90.", backShop: "Torna al negozio", backHub: "Torna a RareHub", backCatalog: "Torna al catalogo", backBuy: "Continua gli acquisti", missingGame: "Gioco non trovato", missingGameBody: "Questo gioco non è nel catalogo.", missingProduct: "Prodotto non disponibile", missingProductBody: "Non troviamo questo prodotto nel catalogo.", noneIn: "Nessun prodotto in", noneBody: "Non ci sono ancora articoli in questa categoria.", summary: "Riepilogo", payTitle: "Dati e pagamento", shipKicker: "Spedizione", payKicker: "Pagamento", released: "Già uscito", today: "Esce oggi", tomorrow: "Tra 1 giorno", inDays: "Tra {n} giorni", newsOk: "Iscrizione registrata. Puoi cancellarla scrivendo a info@rarehubtcg.com.", original: "Prodotti originali", delivery: "Consegna in 24/48 ore", shop: "Negozio a Rimini" },
    en: { games: "Games", tournaments: "Tournaments", eyebrow: "Trading cards, no compromises", hero: "The meeting point for people who live every card. Discover the new One Piece, Pokémon, Dragon Ball Fusion World and Riftbound sets.", explore: "Explore the games", arrivals: "New arrivals", featured: "Featured games", bestsellers: "Best sellers", add: "Add", releases: "Releases", source: "Official source", releaseNote: "Dates and official sources. The sets shown here do not mean the shop has them in stock or open for preorder.", beyond: "Beyond the catalog", communityTitle: "The community", communityBrand: "Rare Hub.", play: "01 / Play", events: "Tournaments and events", eventsBody: "A place to meet and play. Dates and formats will be announced here and on our channels.", askInfo: "Ask for details", trade: "02 / Trade", sell: "Sell your collection", sellBody: "Have singles or a collection to offer? Tell us the game, quantity and condition. We reply after we have looked at it.", sendDetails: "Send the details", writeKicker: "Write to us", writeTitle: "Let’s talk about tournaments and collections.", writeBody: "Use the form for tournaments, a question, or to offer a collection. If you are selling, include games, quantity, condition and a way to reach you.", name: "Name", email: "Email", reason: "Reason", details: "Details", general: "General question", send: "Send request", footerAbout: "Trading cards, boxes and cases. A project born in Rimini, for people who play and collect.", exploreCol: "Explore", contactCol: "Contact", newsCol: "Stay updated", ordersNote: "For orders and requests, use the form.", place: "Rimini, Italy", newsBody: "News on the catalog and the community.", emailPh: "Your email", language: "Language", packs: "Packs", singles: "Singles", all: "All", available: "Available", sold: "Sold out", addCart: "Add to cart", detailsH: "Details", emptyCart: "Your cart is empty", keep: "Keep exploring", subtotal: "Subtotal", ship: "Shipping in Italy", total: "Total", payNote: "Payment opens the official Stripe page (card and Apple Pay) or PayPal. The card number never passes through RareHub.", consent: "I have read the terms of sale, the privacy notice and the returns policy.", payCard: "Pay by card", payPayPal: "Pay with PayPal", payApple: "Pay with Apple Pay", emptyPay: "Cart empty", shipNote: "Standard shipping €6.90. Two or more boxes, €9.90. A case, €14.90.", backShop: "Back to the shop", backHub: "Back to RareHub", backCatalog: "Back to the catalog", backBuy: "Continue shopping", missingGame: "Game not found", missingGameBody: "This game is not in the catalog.", missingProduct: "Product unavailable", missingProductBody: "We can’t find this product in the catalog.", noneIn: "No products in", noneBody: "There are no items in this category yet.", summary: "Summary", payTitle: "Details and payment", shipKicker: "Shipping", payKicker: "Payment", released: "Released", today: "Out today", tomorrow: "Tomorrow", inDays: "In {n} days", newsOk: "You’re signed up. You can cancel by writing to info@rarehubtcg.com.", original: "Original products", delivery: "Delivery in 24/48 hours", shop: "Shop in Rimini" }
  };
  var lang = localStorage.getItem("rarehub-lang") === "en" ? "en" : "it";
  function t(key) { return (copy[lang] && copy[lang][key]) || key; }
  function money(amount) { return Number(amount).toLocaleString(lang === "en" ? "en-GB" : "it-IT", { style: "currency", currency: "EUR" }); }
  function img(name) { return (window.RH_ASSETS && window.RH_ASSETS[name]) || name; }
  function product(handle) { return (window.RH_PRODUCTS || []).filter(function (item) { return item.handle === handle; })[0]; }
  function gameBy(slug) { return (window.RH_GAMES || []).filter(function (item) { return item.slug === slug; })[0]; }
  function catLabel(label) {
    if (lang === "en" && label === "Bustine") return t("packs");
    if (lang === "en" && label === "Carte singole") return t("singles");
    if (lang === "en" && label === "Tutti") return t("all");
    return label;
  }
  function kindLabel(kind) {
    if (lang === "it") return kind;
    var map = { Bustina: "Pack", Box: "Box", Case: "Case", "Carta singola": "Single", ETB: "ETB" };
    return map[kind] || kind;
  }
  function releaseLabel(iso) {
    var target = new Date(iso + "T00:00:00");
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var days = Math.round((target.getTime() - today.getTime()) / 86400000);
    if (days > 1) return { label: t("inDays").replace("{n}", String(days)), soon: true };
    if (days === 1) return { label: t("tomorrow"), soon: true };
    if (days === 0) return { label: t("today"), soon: true };
    return { label: t("released"), soon: false };
  }
  function esc(value) { return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  var cart = [];
  try { cart = JSON.parse(localStorage.getItem("rarehub-cart") || "[]"); } catch (e) { cart = []; }
  if (!Array.isArray(cart)) cart = [];
  var guardUntil = 0;
  function saveCart() { localStorage.setItem("rarehub-cart", JSON.stringify(cart)); paintCart(); }
  function qty() { return cart.reduce(function (sum, line) { return sum + line.qty; }, 0); }
  function addHandle(handle) {
    var line = cart.filter(function (item) { return item.handle === handle; })[0];
    if (line) line.qty += 1; else cart.push({ handle: handle, qty: 1 });
    guardUntil = Date.now() + 700;
    saveCart();
    openCart();
  }
  function setQty(handle, next) {
    if (Date.now() < guardUntil) return;
    cart = cart.map(function (line) { return line.handle === handle ? { handle: handle, qty: next } : line; }).filter(function (line) { return line.qty > 0; });
    saveCart();
  }

  var drawer = document.querySelector("[data-cart]");
  function openCart() { guardUntil = Date.now() + 700; if (drawer) { drawer.hidden = false; paintCart(); } }
  function paintCart() {
    document.querySelectorAll("[data-cart-count]").forEach(function (el) {
      var count = qty();
      el.textContent = String(count);
      el.hidden = count === 0;
    });
    var label = document.querySelector("[data-cart-count-label]");
    if (label) label.textContent = String(qty());
    var lines = document.querySelector("[data-cart-lines]");
    var foot = document.querySelector("[data-cart-foot]");
    if (!lines) return;
    if (!cart.length) {
      lines.innerHTML = '<div class="cart-empty"><h3>' + esc(t("emptyCart")) + '</h3><button type="button" class="btn" data-cart-close>' + esc(t("keep")) + '</button></div>';
      if (foot) foot.hidden = true;
      return;
    }
    var sub = 0;
    lines.innerHTML = cart.map(function (line) {
      var item = product(line.handle);
      if (!item) return "";
      sub += Number(item.price) * line.qty;
      return '<div class="cart-line"><div class="cart-line-photo"><img src="' + esc(img(item.image)) + '" alt=""></div><div class="cart-line-details"><strong>' + esc(item.title) + '</strong><span>' + esc(money(item.price)) + '</span><div class="cart-line-actions"><div><button type="button" data-setq="' + esc(item.handle) + '" data-q="' + (line.qty - 1) + '" aria-label="Meno">−</button><b>' + line.qty + '</b><button type="button" data-setq="' + esc(item.handle) + '" data-q="' + (line.qty + 1) + '" aria-label="Più">+</button></div><button type="button" data-remove="' + esc(item.handle) + '" aria-label="Rimuovi">×</button></div></div></div>';
    }).join("");
    var total = document.querySelector("[data-cart-total]");
    if (total) total.textContent = money(sub);
    if (foot) foot.hidden = false;
    var go = document.querySelector("[data-checkout]");
    if (go) go.textContent = lang === "en" ? "Checkout" : "Vai al pagamento";
  }

  function shippingFor(titles) {
    if (titles.some(function (title) { return /\bcase\b/i.test(title); })) return 14.9;
    var boxes = titles.filter(function (title) { return /booster box|elite trainer|\betb\b|display/i.test(title); }).length;
    if (boxes >= 2) return 9.9;
    return 6.9;
  }

  var home = document.getElementById("home");
  var screen = document.getElementById("screen");
  var back = document.querySelector("[data-back]");
  var homeNav = document.querySelector("[data-home-nav]");
  var menuBtn = document.querySelector("[data-menu]");
  function setChrome(mode) {
    var inner = mode !== "home";
    if (homeNav) homeNav.hidden = inner;
    if (menuBtn) menuBtn.hidden = inner;
    if (back) {
      back.hidden = !inner;
      var label = mode === "product" ? t("backCatalog") : mode === "checkout" ? t("backBuy") : mode === "game" ? t("backHub") : t("backShop");
      var span = back.querySelector(".back-label");
      if (span) span.textContent = label;
      back.setAttribute("aria-label", label);
    }
    var mobile = document.querySelector("[data-mobile-nav]");
    if (inner && mobile) mobile.classList.remove("is-open");
  }

  function card(item) {
    return '<article class="product-card"><a class="product-card-link" href="#/prodotto/' + esc(item.handle) + '"><div class="product-photo"><img src="' + esc(img(item.image)) + '" alt="' + esc(item.title) + '"><span class="product-visit" aria-hidden="true">↗</span></div><div class="product-info"><span>' + esc(kindLabel(item.type)) + '</span><h3>' + esc(item.title) + '</h3><p class="product-description">' + esc(item.description) + '</p><div class="product-bottom"><strong>' + esc(money(item.price)) + '</strong><small>' + esc(t("available")) + '</small></div></div></a><button class="product-add" type="button" data-add="' + esc(item.handle) + '"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>' + esc(t("addCart")) + '</button></article>';
  }

  function renderGame(slug, cat) {
    var game = gameBy(slug);
    if (!game) {
      setChrome("legal");
      screen.innerHTML = '<div class="section"><div class="wrap catalog-empty"><p class="section-kicker">RAREHUB TCG</p><h1>' + esc(t("missingGame")) + '</h1><p>' + esc(t("missingGameBody")) + '</p><a href="#inizio">' + esc(t("backShop")) + '</a></div></div>';
      return;
    }
    var active = cat === "tutti" || game.cats.some(function (item) { return item[0] === cat; }) ? cat : "tutti";
    var label = active === "tutti" ? (lang === "en" ? "All" : "Tutti") : catLabel(game.cats.filter(function (item) { return item[0] === active; })[0][1]);
    var shown = window.RH_PRODUCTS.filter(function (item) { return item.game === slug && (active === "tutti" || item.shelf === active); });
    var filters = '<a class="' + (active === "tutti" ? "is-on" : "") + '" href="#/gioco/' + game.slug + '">' + esc(lang === "en" ? "All" : "Tutti") + '</a>' + game.cats.map(function (item) {
      return '<a class="' + (active === item[0] ? "is-on" : "") + '" href="#/gioco/' + game.slug + '/' + item[0] + '">' + esc(catLabel(item[1])) + '</a>';
    }).join("");
    setChrome("game");
    screen.innerHTML = '<div class="section shelf-page"><div class="wrap"><p class="section-kicker">/ ' + esc(game.name) + '</p><h1>' + esc(label) + '</h1><div class="filter-list" role="group">' + filters + '</div>' + (shown.length ? '<div class="products-grid">' + shown.map(card).join("") + '</div>' : '<div class="catalog-empty"><h3>' + esc(t("noneIn")) + ' ' + esc(label) + '</h3><p>' + esc(t("noneBody")) + '</p></div>') + '</div></div>';
  }

  function renderProduct(handle) {
    var item = product(handle);
    setChrome("product");
    if (!item) {
      screen.innerHTML = '<div class="wrap product-page"><div class="catalog-empty"><h1>' + esc(t("missingProduct")) + '</h1><p>' + esc(t("missingProductBody")) + '</p><a class="btn" href="#inizio">' + esc(t("backCatalog")) + '</a></div></div>';
      return;
    }
    screen.innerHTML = '<div class="wrap product-page"><div class="breadcrumbs"><a href="#inizio">RareHub</a><span>/</span><a href="#/gioco/' + esc(item.game) + '">' + esc(lang === "en" ? "Catalog" : "Catalogo") + '</a><span>/</span><span>' + esc(item.title) + '</span></div><div class="product-layout"><div class="product-gallery"><div class="product-main-photo"><img src="' + esc(img(item.image)) + '" alt="' + esc(item.title) + '"></div></div><div class="product-detail"><p class="section-kicker">/ ' + esc(kindLabel(item.type)) + '</p><h1>' + esc(item.title) + '</h1><p class="detail-price">' + esc(money(item.price)) + '</p><p class="detail-availability">● ' + esc(t("available")) + '</p><button class="detail-add" type="button" data-add="' + esc(item.handle) + '"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>' + esc(t("addCart")) + '</button><div class="detail-description"><h2>' + esc(t("detailsH")) + '</h2><p>' + esc(item.description) + '</p></div></div></div></div>';
  }

  function renderLegal(page) {
    var node = document.getElementById("legal-" + page);
    setChrome("legal");
    screen.innerHTML = node ? node.innerHTML : "";
  }

  function renderCheckout() {
    setChrome("checkout");
    var titles = cart.map(function (line) { var item = product(line.handle); return item ? item.title : ""; });
    var sub = cart.reduce(function (sum, line) { var item = product(line.handle); return sum + (item ? Number(item.price) * line.qty : 0); }, 0);
    var ship = cart.length ? shippingFor(titles) : 0;
    var delivery = "spedizione";
    var lines = cart.map(function (line) {
      var item = product(line.handle);
      if (!item) return "";
      return '<div class="summary-line"><img src="' + esc(img(item.image)) + '" alt=""><div><strong>' + esc(item.title) + '</strong><span>' + line.qty + ' × ' + esc(money(item.price)) + '</span></div></div>';
    }).join("");
    var method = "carta";
    function fee() { return !cart.length || delivery === "ritiro" ? 0 : ship; }
    function payLabel() {
      var verb = method === "apple" ? t("payApple") : method === "paypal" ? t("payPayPal") : t("payCard");
      return verb + (cart.length ? " · " + money(sub + fee()) : " · " + t("emptyPay"));
    }
    var shipLabel = lang === "en" ? "Ship to Italy" : "Spedizione";
    var pickupLabel = lang === "en" ? "Pick up in store" : "Ritiro in negozio";
    var shipHelp = lang === "en" ? "Shipping in Italy. The cost is in the summary." : "Spedizione in Italia. Il costo è nel riepilogo.";
    var pickupHelp = lang === "en"
      ? "Free pickup at the Rimini shop. We email you when the order is ready. The exact address comes with the confirmation, because the shop is not open yet."
      : "Ritiro gratuito nel negozio di Rimini. Ti avvisiamo per email quando l’ordine è pronto. L’indirizzo preciso arriva con la conferma, perché il punto vendita non è ancora aperto.";
    screen.innerHTML = '<div class="section checkout-page"><div class="wrap checkout-grid"><form class="checkout-form" data-pay><p class="section-kicker">' + esc(lang === "en" ? "Delivery" : "Consegna") + '</p><h1>' + esc(t("payTitle")) + '</h1><div class="pay-methods delivery-methods"><button type="button" class="is-on" data-delivery="spedizione">' + esc(shipLabel) + '</button><button type="button" data-delivery="ritiro">' + esc(pickupLabel) + '</button></div><p class="pay-note" data-delivery-note>' + esc(shipHelp) + '</p><div class="checkout-fields"><label>' + esc(t("name")) + '<input name="nome" required autocomplete="given-name"></label><label>' + (lang === "en" ? "Last name" : "Cognome") + '<input name="cognome" required autocomplete="family-name"></label><label>Email<input name="email" type="email" required autocomplete="email"></label><label>' + (lang === "en" ? "Phone" : "Telefono") + '<input name="telefono" required autocomplete="tel"></label></div><div class="checkout-fields checkout-address" data-address><label class="wide">' + (lang === "en" ? "Address" : "Indirizzo") + '<input name="indirizzo" required autocomplete="street-address"></label><div class="checkout-place"><label>CAP<input name="cap" required inputmode="numeric" pattern="[0-9]{5}" autocomplete="postal-code"></label><label>' + (lang === "en" ? "City" : "Città") + '<input name="citta" required></label><label>' + (lang === "en" ? "Province" : "Provincia") + '<input name="provincia" required maxlength="2"></label></div></div><p class="section-kicker">' + esc(t("payKicker")) + '</p><div class="pay-methods"><button type="button" class="is-on" data-method="carta">Carta</button><button type="button" data-method="paypal">PayPal</button><button type="button" data-method="apple">Apple Pay</button></div><p class="pay-note">' + esc(t("payNote")) + '</p><label class="news-consent"><input type="checkbox" required> ' + esc(t("consent")) + '</label><p class="pay-note" data-pay-error hidden></p><button class="pay-submit" type="submit">' + esc(t("payCard")) + '</button></form><aside class="checkout-summary"><h2>' + esc(t("summary")) + '</h2>' + (cart.length ? lines : '<p>' + esc(t("emptyCart")) + '</p>') + '<div class="summary-total"><span>' + esc(t("subtotal")) + '</span><b>' + esc(money(sub)) + '</b></div><div class="summary-total"><span data-ship-label>' + esc(t("ship")) + '</span><b data-ship-cost>' + (cart.length ? esc(money(ship)) : "—") + '</b></div><div class="summary-total grand"><span>' + esc(t("total")) + '</span><b data-grand>' + esc(money(cart.length ? sub + ship : 0)) + '</b></div><p data-ship-note>' + esc(t("shipNote")) + '</p></aside></div></div>';
    var form = screen.querySelector("[data-pay]");
    function paint() {
      var address = form.querySelector("[data-address]");
      var pickup = delivery === "ritiro";
      address.classList.toggle("is-off", pickup);
      address.querySelectorAll("input").forEach(function (input) { input.required = !pickup; });
      form.querySelector("[data-delivery-note]").textContent = pickup ? pickupHelp : shipHelp;
      var label = form.closest(".checkout-grid").querySelector("[data-ship-label]");
      var cost = form.closest(".checkout-grid").querySelector("[data-ship-cost]");
      var grand = form.closest(".checkout-grid").querySelector("[data-grand]");
      var note = form.closest(".checkout-grid").querySelector("[data-ship-note]");
      label.textContent = pickup ? pickupLabel : t("ship");
      cost.textContent = !cart.length ? "—" : fee() === 0 ? (lang === "en" ? "Free" : "Gratis") : money(fee());
      grand.textContent = money(cart.length ? sub + fee() : 0);
      note.textContent = pickup ? (lang === "en" ? "Pickup has no shipping cost." : "Il ritiro non ha costi di spedizione.") : t("shipNote");
      form.querySelector(".pay-submit").textContent = payLabel();
    }
    form.addEventListener("click", function (event) {
      var shipButton = event.target.closest("[data-delivery]");
      if (shipButton) {
        delivery = shipButton.getAttribute("data-delivery");
        form.querySelectorAll("[data-delivery]").forEach(function (el) { el.classList.toggle("is-on", el === shipButton); });
        paint();
        return;
      }
      var button = event.target.closest("[data-method]");
      if (!button) return;
      method = button.getAttribute("data-method");
      form.querySelectorAll("[data-method]").forEach(function (el) { el.classList.toggle("is-on", el === button); });
      paint();
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var error = form.querySelector("[data-pay-error]");
      if (!cart.length) { error.hidden = false; error.textContent = t("emptyPay"); return; }
      var variants = window.RH_VARIANTS || {};
      var ready = cart.every(function (line) { return variants[line.handle]; });
      if (!ready) {
        error.hidden = false;
        error.textContent = lang === "en"
          ? "Card, Apple Pay and PayPal are the real networks. The Shopify catalog is not linked to these products yet, so nothing was charged."
          : "Carta, Apple Pay e PayPal sono i circuiti veri. I prodotti non sono ancora collegati al catalogo Shopify, quindi la cassa non può aprirsi. Nessun pagamento è stato preso.";
        return;
      }
      var body = { items: cart.map(function (line) { return { id: variants[line.handle], quantity: line.qty }; }) };
      fetch("/cart/clear.js", { method: "POST" }).catch(function () { return null; }).then(function () {
        return fetch("/cart/add.js", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      }).then(function (response) {
        if (!response || !response.ok) throw new Error("cart");
        window.location.href = "/checkout";
      }).catch(function () {
        error.hidden = false;
        error.textContent = lang === "en" ? "The Shopify checkout could not open. Nothing was charged." : "La cassa Shopify non si è aperta. Nessun pagamento è stato preso.";
      });
    });
    paint();
  }

  function showHome() {
    if (home) home.hidden = false;
    if (screen) { screen.hidden = true; screen.innerHTML = ""; }
    setChrome("home");
  }
  function showScreen() {
    if (home) home.hidden = true;
    if (screen) screen.hidden = false;
    window.scrollTo(0, 0);
  }
  function route() {
    if (!home || !screen) return;
    var raw = (location.hash || "").replace(/^#/, "");
    var sections = ["", "inizio", "/inizio", "arrivi", "categorie", "venduti", "listini", "recensioni", "community", "scrivici"];
    if (sections.indexOf(raw) !== -1) { showHome(); return; }
    var parts = raw.replace(/^\//, "").split("/");
    showScreen();
    if (parts[0] === "gioco") renderGame(parts[1], parts[2] || "tutti");
    else if (parts[0] === "prodotto") renderProduct(parts[1]);
    else if (parts[0] === "privacy" || parts[0] === "condizioni" || parts[0] === "resi") renderLegal(parts[0]);
    else if (parts[0] === "checkout") renderCheckout();
    else {
      setChrome("legal");
      screen.innerHTML = '<div class="section"><div class="wrap catalog-empty"><p class="section-kicker">RAREHUB TCG</p><h1>Pagina non trovata</h1><p>Questo indirizzo non esiste sul sito.</p><a href="#inizio">' + esc(t("backShop")) + '</a></div></div>';
    }
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
    document.querySelectorAll("[data-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-ph"))); });
    document.querySelectorAll("[data-ph-it]").forEach(function (el) { el.setAttribute("placeholder", lang === "en" ? el.getAttribute("data-ph-en") : el.getAttribute("data-ph-it")); });
    document.querySelectorAll("[data-month]").forEach(function (el) {
      var map = { lug: lang === "en" ? "Jul" : "lug", ago: lang === "en" ? "Aug" : "ago", ott: lang === "en" ? "Oct" : "ott" };
      el.textContent = map[el.getAttribute("data-month")] || el.getAttribute("data-month");
    });
    document.querySelectorAll("[data-release]").forEach(function (el) {
      var badge = releaseLabel(el.getAttribute("data-release"));
      el.textContent = badge.label;
      el.className = badge.soon ? "listino-badge soon" : "listino-badge out";
    });
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      var on = el.getAttribute("data-lang") === lang;
      el.classList.toggle("is-on", on);
      el.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.querySelectorAll("[data-best-price]").forEach(function (el) {
      var item = product(el.getAttribute("data-best-price"));
      if (item) el.textContent = money(item.price);
    });
    document.querySelectorAll("[data-best-type]").forEach(function (el) {
      var item = product(el.getAttribute("data-best-type"));
      if (item) el.textContent = kindLabel(item.type);
    });
    route();
    paintCart();
  }

  var games = document.querySelector("[data-games]");
  var gamesTimer = 0;
  var pinned = false;
  function openGames() { clearTimeout(gamesTimer); if (games) { games.classList.add("is-open"); games.querySelector("button").setAttribute("aria-expanded", "true"); } }
  function hideGames() { pinned = false; clearTimeout(gamesTimer); if (games) { games.classList.remove("is-open"); games.querySelector("button").setAttribute("aria-expanded", "false"); } }
  function closeSoon() {
    if (pinned) return;
    clearTimeout(gamesTimer);
    gamesTimer = setTimeout(function () { if (!pinned) hideGames(); }, 220);
  }
  if (games) {
    var button = games.querySelector("button");
    button.addEventListener("click", function () {
      clearTimeout(gamesTimer);
      if (games.classList.contains("is-open") && pinned) { hideGames(); return; }
      pinned = true; openGames();
    });
    games.addEventListener("mouseenter", openGames);
    var header = document.querySelector("[data-header]");
    if (header) {
      header.addEventListener("mouseenter", function () { clearTimeout(gamesTimer); });
      header.addEventListener("mouseleave", function () { if (window.innerWidth > 700) closeSoon(); });
    }
  }
  document.addEventListener("pointerdown", function (event) {
    if (pinned && games && !games.contains(event.target)) hideGames();
  });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape") { hideGames(); if (drawer) drawer.hidden = true; } });

  if (menuBtn) menuBtn.addEventListener("click", function () {
    var nav = document.querySelector("[data-mobile-nav]");
    if (nav) nav.classList.toggle("is-open");
  });
  var gamesBtn = document.querySelector("[data-mobile-games]");
  var gamesList = document.querySelector("[data-mobile-games-list]");
  if (gamesBtn && gamesList) gamesBtn.addEventListener("click", function () { gamesList.hidden = !gamesList.hidden; });
  document.querySelectorAll("[data-game-toggle]").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var sub = toggle.nextElementSibling;
      var willOpen = sub.hasAttribute("hidden");
      document.querySelectorAll(".mobile-sub").forEach(function (el) { el.hidden = true; });
      document.querySelectorAll("[data-game-toggle]").forEach(function (el) { el.classList.remove("is-open"); });
      if (willOpen) { sub.hidden = false; toggle.classList.add("is-open"); }
    });
  });

  document.querySelectorAll("[data-slide]").forEach(function (el) {
    el.addEventListener("click", function () {
      var track = document.querySelector(el.getAttribute("data-slide"));
      if (track) track.scrollBy({ left: Number(el.getAttribute("data-dir")) * track.clientWidth * 0.8, behavior: "smooth" });
    });
  });

  document.addEventListener("click", function (event) {
    var add = event.target.closest("[data-add]");
    if (add) { event.preventDefault(); addHandle(add.getAttribute("data-add")); }
    var set = event.target.closest("[data-setq]");
    if (set) setQty(set.getAttribute("data-setq"), Number(set.getAttribute("data-q")));
    var remove = event.target.closest("[data-remove]");
    if (remove) setQty(remove.getAttribute("data-remove"), 0);
    if (event.target.closest("[data-cart-open]")) openCart();
    if (event.target.closest("[data-cart-close]")) {
      if (Date.now() < guardUntil && !event.target.closest(".icon-btn")) return;
      if (drawer) drawer.hidden = true;
    }
    var langBtn = event.target.closest("[data-lang]");
    if (langBtn) { lang = langBtn.getAttribute("data-lang"); localStorage.setItem("rarehub-lang", lang); applyLang(); }
    if (event.target.closest("[data-games] a, [data-mobile-nav] a")) hideGames();
    var ask = event.target.closest("[data-ask]");
    if (ask) {
      var select = document.querySelector("[data-reason]");
      if (select) select.value = ask.getAttribute("data-ask");
    }
  });
  if (drawer) drawer.addEventListener("mousedown", function (event) { if (Date.now() < guardUntil) return; if (event.target === drawer) drawer.hidden = true; });
  window.addEventListener("hashchange", route);
  applyLang();
})();
