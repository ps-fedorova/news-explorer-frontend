(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],Array(18).concat([function(e,a,t){e.exports=t.p+"static/media/icon_facebook_square.4b12ed39.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/logout_main.3c57fa38.svg"},function(e,a,t){e.exports=t.p+"static/media/logout_saved_news.37f19cfe.svg"},function(e,a,t){e.exports=t.p+"static/media/author.ead9e275.jpg"},function(e,a,t){e.exports=t.p+"static/media/not-found.175a96ce.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_github.5bf37e74.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_facebook_circle.e699115e.svg"},,,function(e,a,t){e.exports=t(63)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),o=t.n(c),l=t(8),s=(t(36),t(29)),i=t(1),m=t(2),u=r.a.createContext(null);t(37);var d=function(e){var a="/saved-news"===e.pathname?"button_type_outline-saved-news":"button_type_outline-main";return r.a.createElement("button",{onClick:e.onClick,type:e.type,disabled:e.disabled,className:"button\n    ".concat(e.header?"".concat(a," header__button"):"","\n    ").concat(e.menuMobile?"menu-mobile__button":"","\n    ").concat(e.searchForm?"search-form__button":"","\n    ").concat(e.cardList?"news-card-list__button":"","\n    ").concat(e.popup?"popup__button":"","\n    ")},e.image?r.a.createElement("span",{className:"button__container button__container_position"},r.a.createElement("span",{className:"button__text ".concat(e.classNameTextBtn),title:e.title},e.value),r.a.createElement("img",{className:e.classNameImgBtn,src:e.src,alt:e.alt})):r.a.createElement("span",{className:"button__container"},r.a.createElement("span",{className:"button__text ".concat(e.classNameTextBtn),title:e.title},e.value)))};t(38);var _=function(e){var a="button-burger-menu__button ".concat("/"===e.pathname||e.isMenuMobile?"":"button-burger-menu_saved-news");return r.a.createElement("div",{className:"button-burger-menu"},r.a.createElement("button",{className:"".concat(a,"  ").concat(e.classBurgerMenu),onClick:e.showMenu,type:"button"}))};t(39),t(40);var p=function(e){return r.a.createElement(r.a.Fragment,null,e.navLink?r.a.createElement(l.b,{title:e.title,className:"link ".concat(e.className),to:e.to},e.value):e.linkImage?r.a.createElement("a",{title:e.title,className:"link ".concat(e.classNameLink),href:e.href,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.src,alt:e.alt,className:e.classNameImage})):r.a.createElement("a",{title:e.title,className:"link ".concat(e.className),href:e.href,target:"_blank",rel:"noopener noreferrer"},e.value))};t(46);var h=function(e){var a="/"===e.pathname||e.isMenuMobile,t="nav__text ".concat(a?"nav__text_selected":"nav__text_saved-news"),n="nav__text ".concat(a?"":"nav__text_saved-news nav__text_selected-saved-news");return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(p,{navLink:!0,title:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c",className:t,to:"/",value:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})),e.loggedIn&&r.a.createElement("li",{className:"nav__item"},r.a.createElement(p,{navLink:!0,title:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0430\u0442\u044c\u044f\u043c\u0438",className:n,to:"/saved-news",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}))))};var f=function(e){var a=r.a.useContext(u);return r.a.createElement("div",{className:"menu-mobile ".concat(e.isShowMenu)},r.a.createElement("div",{className:"menu-mobile__container"},r.a.createElement(h,{loggedIn:e.loggedIn}),e.loggedIn?r.a.createElement(d,{menuMobile:!0,image:!0,className:"menu-mobile__button",value:a,src:e.logout,alt:"\u0412\u044b\u0445\u043e\u0434",handleAuthButton:e.handleAuthButton,onClick:e.onClick}):r.a.createElement(d,{className:"menu-mobile__button",value:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",menuMobile:!0,handleAuthButton:e.handleAuthButton,onClick:e.onClick})))},v=(t(47),t(23)),g=t.n(v),b=t(24),E=t.n(b);var w=function(e){var a=r.a.useContext(u),t="/"===e.pathname||e.isMenuMobile,n="header__logo ".concat(t?"":"header__logo_saved-news"),c="header__text header__text_button ".concat(t?"":"header__text_saved-news"),o=t?g.a:E.a,l="header__background-img ".concat(t?"":"header__background-img_saved-news");function s(a){"Escape"===a.key&&e.isMenuMobile&&e.showMenu()}return r.a.useEffect((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__background-position"},r.a.createElement("div",{className:l})),r.a.createElement("div",{className:"header__container"},r.a.createElement("span",{className:"header__border"}),r.a.createElement(p,{navLink:!0,title:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c",className:n,to:"/",value:"NewsExplorer"}),r.a.createElement("div",{className:"header__menu"},r.a.createElement(h,{pathname:e.pathname,isMenuMobile:e.isMenuMobile,loggedIn:e.loggedIn}),r.a.createElement("div",{className:"header__button-container"},e.loggedIn?r.a.createElement(d,{title:"\u0412\u044b\u0445\u043e\u0434",value:a,pathname:e.pathname,image:!0,header:!0,classNameImgBtn:"header__button-img",classNameTextBtn:c,src:o,alt:"\u0412\u044b\u0445\u043e\u0434",onClick:e.onClick}):r.a.createElement(d,{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",value:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",pathname:e.pathname,header:!0,classNameImgBtn:"header__button-img",classNameTextBtn:c,onClick:e.onClick}))),r.a.createElement(_,{handleMenuMobile:e.handleMenuMobile,pathname:e.pathname,showMenu:e.showMenu,classBurgerMenu:e.classBurgerMenu,isMenuMobile:e.isMenuMobile})),r.a.createElement(f,{isShowMenu:e.isShowMenu,loggedIn:e.loggedIn,logout:o,onClick:e.onClick}),r.a.createElement("div",{onClick:function(){e.isMenuMobile&&e.showMenu()},className:"header__overlay ".concat(e.isShowOverlay)})))},N=(t(48),"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"),k="http://localhost:8080",S={year:"numeric",month:"2-digit",day:"2-digit"},y=new Intl.DateTimeFormat("sv",S).format(Date.now()),A=new Intl.DateTimeFormat("sv",S).format(Date.now()-6048e5);var C=function(e){var a=r.a.useState(!1),t=Object(i.a)(a,2),n=t[0],c=t[1],o=r.a.useState(!1),l=Object(i.a)(o,2),s=l[0],m=l[1],u=r.a.useState(""),_=Object(i.a)(u,2),p=_[0],h=_[1],f=r.a.useState(0),v=Object(i.a)(f,2),g=v[0],b=v[1],E=r.a.useRef(0),w=function(){window.clearInterval(E.current)};return r.a.useEffect((function(){return E.current=window.setInterval((function(){b((function(e){return e-1}))}),1e3),function(){return w()}}),[n]),r.a.useEffect((function(){0!==g&&!1!==n||(w(),c(!1),h(""),m(!1))}),[g,n]),r.a.createElement("section",{className:"search-form"},r.a.createElement("div",{className:"search-form__container"},r.a.createElement("h1",{className:"search-form__title"},"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"),r.a.createElement("p",{className:"search-form__subtitle"},"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430\xa0\u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438\xa0\u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432\xa0\u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."),r.a.createElement("form",{className:"search-form__input-container"},r.a.createElement("input",{title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441",type:"text",className:"search-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",value:e.valueSearchInput,onChange:function(a){e.setValueSearchInput(a.target.value.trimStart()),c(!1),a.target.validity.valid?m(!0):m(!1)},required:!0,disabled:e.disabled}),r.a.createElement(d,{searchForm:!0,value:"\u0418\u0441\u043a\u0430\u0442\u044c",className:"search-form__button",type:"submit",onClick:function(a){a.preventDefault(),c(!0),b(g+5),s||""!==e.valueSearchInput?(h(""),e.handleNewsSearch()):h("search-form__error_open")},disabled:e.disabled})),r.a.createElement("span",{className:"search-form__error ".concat(p)},"\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e")))},I=(t(49),t(25)),x=t.n(I);var j=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"about__container"},r.a.createElement("img",{className:"about__author-img",src:x.a,alt:"\u0424\u043e\u0442\u043e \u0430\u0432\u0442\u043e\u0440\u0430"}),r.a.createElement("div",{className:"about__container-description"},r.a.createElement("h2",{className:"about__title-description"},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"),r.a.createElement("p",{className:"about__text-description"},"\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."),r.a.createElement("p",{className:"about__text-description"},"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b \u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438 \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c."))))};t(50);var F=function(e){var a=new Date(e.main?e.card.publishedAt:e.cardSaved.date),t="".concat(a.toLocaleString("ru",{day:"numeric",month:"long"}),", ").concat(a.getFullYear());function n(){e.addAnArticleToTheSavedList({keyword:e.valueSearchInput,title:e.card.title,text:e.card.description,date:e.card.publishedAt,source:e.card.source.name,link:e.card.url,image:e.card.urlToImage})}function c(){e.deleteAnArticleFromTheSavedList(e.cardSaved)}return r.a.createElement("li",{className:"news-card"},r.a.createElement("a",{title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435",href:e.main?e.card.url:e.cardSaved.link,className:"link news-card__link-img",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"news-card__image",src:e.main?e.card.urlToImage:e.cardSaved.image,alt:e.main?e.card.title:e.cardSaved.title})),"/"===e.pathname?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"news-card__items-in-img news-card__keyword-container"},r.a.createElement("p",{title:e.cardSaved.keyword,className:"news-card__keyword"},e.cardSaved.keyword)),r.a.createElement("div",{className:"news-card__image-container"},r.a.createElement(r.a.Fragment,null,e.loggedIn&&"/"===e.pathname?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"news-card__items-in-img news-card__mark\n            ".concat(e.savedArticlesArray.some((function(a){return a.title===e.card.title}))?"news-card__mark_type_saved":"news-card__mark_type_save"),onClick:n})):e.loggedIn||"/"!==e.pathname?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"news-card__items-in-img news-card__mark news-card__mark_type_trashcan",onClick:c}),r.a.createElement("p",{className:"news-card__items-in-img news-card__notice"},"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445")):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"news-card__items-in-img news-card__mark news-card__mark_type_save",onClick:e.addAnArticleToTheSavedList}),r.a.createElement("p",{className:"news-card__items-in-img news-card__notice news-card__notice_main"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438")))),r.a.createElement("div",{className:"news-card__text-container"},r.a.createElement("span",{className:"news-card__date"},t),r.a.createElement("a",{title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435",className:"news-card__link",href:e.main?e.card.url:e.cardSaved.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:"news-card__title"},e.main?e.card.title:e.cardSaved.title)),r.a.createElement("p",{className:"news-card__content"},e.main?e.card.description:e.cardSaved.text),r.a.createElement("span",{className:"news-card__source"},e.main?e.card.source.name:e.cardSaved.source)))};t(51);var O=function(e){var a="/"===e.pathname,t=3*e.rowArticles;return r.a.createElement("section",{className:"news-card-list"},r.a.createElement("div",{className:"news-card-list__container"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"news-card-list__title"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"),r.a.createElement("ul",{className:"news-card-list__list"},Array.from(e.searchResultArray).slice(0,t).map((function(a,t){return r.a.createElement(F,{main:e.main,key:t,card:a,pathname:e.pathname,loggedIn:e.loggedIn,addAnArticleToTheSavedList:e.addAnArticleToTheSavedList,savedArticlesArray:e.savedArticlesArray,valueSearchInput:e.valueSearchInput})}))),r.a.createElement("div",{className:"news-card-list__button-position"},e.searchResultArray.length-t>0&&r.a.createElement(d,{cardList:!0,value:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435",classNameTextBtn:"news-card-list__button-text",onClick:e.handleShowMoreArticles}))):r.a.createElement("ul",{className:"news-card-list__list"},Array.from(e.savedArticlesArray).reverse().map((function(a,t){return r.a.createElement(F,{key:t,cardSaved:a,pathname:e.pathname,deleteAnArticleFromTheSavedList:e.deleteAnArticleFromTheSavedList})})))))};t(52);var T=function(){return r.a.createElement("section",{className:"preloader"},r.a.createElement("div",{className:"preloader__container"},r.a.createElement("i",{className:"preloader__circle"}),r.a.createElement("p",{className:"preloader__title"},"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439...")))},L=(t(53),t(26)),M=t.n(L);var B=function(e){return r.a.createElement("section",{className:"not-found"},r.a.createElement("div",{className:"not-found__container"},e.notFound&&r.a.createElement("img",{src:M.a,alt:"\u041b\u0443\u043f\u0430",className:"not-found__image"}),r.a.createElement("h2",{className:"not-found__title"},e.notFound?"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e":"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430."),r.a.createElement("p",{className:"not-found__text"},e.notFound?"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.":"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437")))};t(54);var V=function(e){return r.a.createElement("main",{className:"main"},r.a.createElement(C,{disabled:e.disabled,setLoading:e.setLoading,notFound:e.notFound,setNotFound:e.setNotFound,handleNewsSearch:e.handleNewsSearch,valueSearchInput:e.valueSearchInput,setValueSearchInput:e.setValueSearchInput,setValueSearchInputError:e.setValueSearchInputError}),e.loading&&r.a.createElement(T,null),(e.notFound||e.isSearchError)&&r.a.createElement(B,{notFound:e.notFound}),0!==e.searchResultArray.length&&r.a.createElement(O,{main:!0,pathname:e.pathname,loggedIn:e.loggedIn,searchResultArray:e.searchResultArray,setNotFound:e.setNotFound,valueSearchInput:e.valueSearchInput,valueSearchInputError:e.valueSearchInputError,rowArticles:e.rowArticles,handleShowMoreArticles:e.handleShowMoreArticles,addAnArticleToTheSavedList:e.addAnArticleToTheSavedList,savedArticlesArray:e.savedArticlesArray}),r.a.createElement(j,null))},D=t(30),R=function(e){var a=e.component,t=Object(D.a)(e,["component"]);return r.a.createElement(m.b,null,(function(){return t.loggedIn?r.a.createElement(a,t):r.a.createElement(m.a,{from:"/saved-news",to:"/"})}))};t(55);var z=function(e){var a,t=r.a.useContext(u),n=["\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f","\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438","\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"][(a=e.savedArticlesArray.length)%100>4&&a%100<20?2:[2,0,1,1,1,2][a%10<5?a%10:5]];return r.a.createElement("section",{className:"saved-news-header"},r.a.createElement("h1",{className:"saved-news-header__title"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),r.a.createElement("h2",{className:"saved-news-header__subtitle"},r.a.createElement("span",{className:"saved-news-header__subtitle-text"},t,", \u0443\xa0\u0432\u0430\u0441 ","".concat(0===e.savedArticlesArray.length?"\u0435\u0449\u0451 \u043d\u0435\u0442":e.savedArticlesArray.length)," ",n)),0!==e.savedArticlesArray.length&&r.a.createElement("p",{className:"saved-news-header__text"},"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c:\xa0",function(){var a=e.savedArticlesArray.map((function(e){return e.keyword})).reduce((function(e,a){return e[a]=void 0===e[a]?1:e[a]+=1,e}),{}),t=Object.keys(a).reverse().map((function(e){return[e,a[e]]})).sort((function(e,a){return a[1]-e[1]})).map((function(e){return e[0]}));return 1===t.length?r.a.createElement("span",{className:"saved-news-header__text saved-news-header__text_bold"},t[0]):2===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"saved-news-header__text saved-news-header__text_bold"},t[0]),"\xa0\u0438\xa0",r.a.createElement("span",{className:"saved-news-header__text saved-news-header__text_bold"},t[1])):3===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"saved-news-header__text saved-news-header__text_bold"},t[0],", ",t[1]),"\xa0\u0438\xa0",r.a.createElement("span",{className:"saved-news-header__text saved-news-header__text_bold"},t[2])):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"saved-news-header__text saved-news-header__text_bold"},t[0],", ",t[1]),"\xa0\u0438\xa0",r.a.createElement("span",{className:"saved-news-header__text saved-news-header__text_bold"},t.length-2,"-\u043c \u0434\u0440\u0443\u0433\u0438\u043c"))}()))};t(56);var P=function(e){return r.a.createElement("main",{className:"saved-news"},r.a.createElement(z,{savedArticlesArray:e.savedArticlesArray,loggedIn:e.loggedIn}),0!==e.savedArticlesArray.length&&r.a.createElement(O,{pathname:e.pathname,savedArticlesArray:e.savedArticlesArray,valueSearchInput:e.valueSearchInput,deleteAnArticleFromTheSavedList:e.deleteAnArticleFromTheSavedList}))},W=t(14),G=t.n(W),J=(t(57),t(27)),q=t.n(J),K=t(28),Y=t.n(K),$=t(18),H=t.n($);var Q=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__container"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Supersite, Powered by News API"),r.a.createElement("div",{className:"footer__menu"},r.a.createElement("ul",{className:"footer__list"},r.a.createElement("li",{className:"footer__item"},r.a.createElement(p,{navLink:!0,title:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0413\u043b\u0430\u0432\u043d\u0443\u044e",className:"footer__link",to:"/",value:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})),r.a.createElement("li",{className:"footer__item"},r.a.createElement(p,{title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0430\u0439\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430 \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435",href:"https://praktikum.yandex.ru",className:"footer__link",value:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"}))),r.a.createElement("ul",{className:"footer__list footer__list_social-icon"},r.a.createElement("li",{className:"footer__item footer__item_social-icon"},r.a.createElement(p,{linkImage:!0,title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c Github \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435",href:"https://github.com/ps-fedorova",classNameLink:"footer__link footer__link_social-icon",src:q.a,alt:"Github",classNameImage:"footer__social-icon"})),r.a.createElement("li",{className:"footer__item footer__item_social-icon"},r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{minWidth:961},r.a.createElement(p,{linkImage:!0,title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c Facebook \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435",href:"https://www.facebook.com/mrs.fedorova.polina",classNameLink:"footer__link footer__link_social-icon",src:H.a,alt:"Facebook",classNameImage:"footer__social-icon"})),r.a.createElement(G.a,{minWidth:711,maxWidth:960},r.a.createElement(p,{linkImage:!0,title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c Facebook \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435",href:"https://www.facebook.com/mrs.fedorova.polina",classNameLink:"footer__link footer__link_social-icon",src:Y.a,alt:"Facebook",classNameImage:"footer__social-icon"})),r.a.createElement(G.a,{maxWidth:710},r.a.createElement(p,{linkImage:!0,title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c Facebook \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435",href:"https://www.facebook.com/mrs.fedorova.polina",classNameLink:"footer__link footer__link_social-icon",src:H.a,alt:"Facebook",classNameImage:"footer__social-icon"}))))))))};t(58);var U=function(e){return r.a.createElement("label",{className:"input"},e.label,r.a.createElement("input",{type:e.type,name:e.name,value:e.value,minLength:e.minLength,maxLength:e.maxLength,onChange:e.onChange,placeholder:e.placeholder,disabled:e.disabled,className:"input__field",required:!0}),r.a.createElement("span",{className:e.isValid?"":"input__error"},e.errors||""))};t(59);var X=function(e){return r.a.createElement("div",{className:"popup ".concat(e.isOpen&&"popup_opened")},r.a.createElement("form",{className:"popup__form",onSubmit:e.onSubmit,noValidate:!0},r.a.createElement("button",{className:"popup__close-button",onClick:e.onClose,type:"button"}),r.a.createElement("p",{className:"popup__title"},e.title),r.a.createElement("fieldset",{className:"popup__input-container"},e.children),!e.infoTooltip&&r.a.createElement("span",{className:"popup__warning"},e.authError),!e.infoTooltip&&r.a.createElement(d,{onClick:e.handleSubmit,popup:!0,disabled:e.isDisabled||e.disabled,value:e.submitButtonText}),r.a.createElement("div",{className:"popup__subtitle ".concat(e.infoTooltip?"popup__subtitle_infoTooltip":"")},!e.infoTooltip&&"\u0438\u043b\u0438",r.a.createElement("span",{className:"popup__link ".concat(e.infoTooltip?"popup__link_infoTooltip":""),onClick:e.onChangeForm},e.login?" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":" \u0412\u043e\u0439\u0442\u0438"))),r.a.createElement("div",{className:"popup__overlay",onClick:e.onClose}))},Z=t(11),ee=t(12);var ae=function(){var e=r.a.useState({}),a=Object(i.a)(e,2),t=a[0],n=a[1],c=r.a.useState({}),o=Object(i.a)(c,2),l=o[0],s=o[1],m=r.a.useState(!1),u=Object(i.a)(m,2),d=u[0],_=u[1],p=r.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n(e),s(a),_(t)}),[n,s,_]);return{values:t,handleChange:function(e){var a=e.target,r=a.value,c=a.name;n(Object(ee.a)(Object(ee.a)({},t),{},Object(Z.a)({},c,r))),s(Object(ee.a)(Object(ee.a)({},l),{},Object(Z.a)({},c,a.validationMessage))),_(a.closest("form").checkValidity())},errors:l,isValid:d,setIsValid:_,resetForm:p}};function te(e){var a=ae(),t=a.values,n=a.handleChange,c=a.errors,o=a.isValid,l=a.resetForm;return r.a.useEffect((function(){l()}),[e.isOpen,l]),r.a.createElement(X,{login:!0,title:"\u0412\u0445\u043e\u0434",isOpen:e.isOpen,onClose:e.onClose,onChangeForm:e.onChangeForm,handleSubmit:function(a){a.preventDefault(),e.handleLogin(t.email,t.password)},submitButtonText:"\u0412\u043e\u0439\u0442\u0438",isDisabled:!o,authError:e.authError,disabled:e.disabled},r.a.createElement(U,{label:"Email",type:"email",name:"email",inputLabelClassName:"popup__input-label",inputFieldClassName:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",onChange:n,errors:c.email,value:t.email||"",disabled:e.disabled}),r.a.createElement(U,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",minLength:"8",maxLength:"30",inputLabelClassName:"popup__input-label",inputFieldClassName:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:n,errors:c.password,value:t.password||"",disabled:e.disabled}))}function ne(e){var a=ae(),t=a.values,n=a.handleChange,c=a.errors,o=a.isValid,l=a.resetForm;return r.a.useEffect((function(){l()}),[e.isOpen,l]),r.a.createElement(X,{register:!0,title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",formName:"registration",isOpen:e.isOpen,onClose:e.onClose,onChangeForm:e.onChangeForm,onSubmit:function(a){a.preventDefault(),e.handleRegister(t.email,t.password,t.name)},submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",isDisabled:!o,authError:e.authError,disabled:e.disabled},r.a.createElement(U,{label:"Email",type:"email",name:"email",inputLabelClassName:"popup__input-label",inputFieldClassName:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",onChange:n,errors:c.email,value:t.email||"",disabled:e.disabled}),r.a.createElement(U,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",minLength:"8",maxLength:"30",inputLabelClassName:"popup__input-label",inputFieldClassName:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:n,errors:c.password,value:t.password||"",disabled:e.disabled}),r.a.createElement(U,{label:"\u0418\u043c\u044f",type:"text",name:"name",formName:"reg",minLength:"2",maxLength:"10",inputLabelClassName:"popup__input-label",inputFieldClassName:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:n,errors:c.name,value:t.name||"",disabled:e.disabled}))}var re=function(e){return r.a.createElement(X,{infoTooltip:!0,title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!",linkText:"\u0412\u043e\u0439\u0442\u0438",isOpen:e.isOpen,onClose:e.onClose,onChangeForm:e.onChangeForm})},ce=function(e){return fetch("".concat(k,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok,e.json()})).catch((function(){return{message:N}}))};t(60),t(61),t(62);var oe=function(){var e=Object(m.h)().pathname,a=Object(m.g)(),t=r.a.useState(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(""),d=Object(i.a)(l,2),_=d[0],p=d[1],h=r.a.useState(!1),f=Object(i.a)(h,2),v=f[0],g=f[1],b=r.a.useState(!1),E=Object(i.a)(b,2),S=E[0],C=E[1],I=r.a.useState(!1),x=Object(i.a)(I,2),j=x[0],F=x[1],O=r.a.useState(!1),T=Object(i.a)(O,2),L=T[0],M=T[1],B=r.a.useState(""),D=Object(i.a)(B,2),z=D[0],W=D[1],G=r.a.useState(""),J=Object(i.a)(G,2),q=J[0],K=J[1],Y=r.a.useState(""),$=Object(i.a)(Y,2),H=$[0],U=$[1],X=r.a.useState(!1),Z=Object(i.a)(X,2),ee=Z[0],ae=Z[1],oe=r.a.useState(""),le=Object(i.a)(oe,2),se=le[0],ie=le[1],me=r.a.useState([]),ue=Object(i.a)(me,2),de=ue[0],_e=ue[1],pe=r.a.useState([]),he=Object(i.a)(pe,2),fe=he[0],ve=he[1],ge=r.a.useState(1),be=Object(i.a)(ge,2),Ee=be[0],we=be[1],Ne=r.a.useState(!1),ke=Object(i.a)(Ne,2),Se=ke[0],ye=ke[1],Ae=r.a.useState(!1),Ce=Object(i.a)(Ae,2),Ie=Ce[0],xe=Ce[1],je=r.a.useState(!1),Fe=Object(i.a)(je,2),Oe=Fe[0],Te=Fe[1],Le=r.a.useState(""),Me=Object(i.a)(Le,2),Be=Me[0],Ve=Me[1],De=r.a.useState(!1),Re=Object(i.a)(De,2),ze=Re[0],Pe=Re[1];function We(){C(!0),F(!1),M(!1),ie("")}function Ge(){C(!1),F(!0),ie("")}function Je(){C(!1),F(!1),M(!1),ie("")}function qe(e){"Escape"===e.key&&Je()}function Ke(){ae(!ee)}function Ye(){"button-burger-menu_open"===z?(W(""),U(""),Ke()):(W("button-burger-menu_open"),U("header__overlay_open"),Ke()),K(""===q?"menu-mobile_open":"")}function $e(){fetch("".concat(k,"/articles"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},credentials:"include"}).then((function(e){return e.json()})).then((function(e){ve(e.data)})).catch((function(e){return console.log(e)}))}function He(){g(!0),function(e){var a="".concat("https://nomoreparties.co/news/v2/everything","?")+"q=".concat(e,"&")+"apiKey=".concat("5a8dfbd5887c4367be2a938a68940ebf","&")+"from=".concat(A,"&")+"to=".concat(y,"&")+"pageSize=".concat(100);return fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0443 \u0432\u043e\u0442, \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b (\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,")")))}))}(Be).then((function(e){0!==e.articles.length?_e(e.articles):xe(!0)})).catch((function(e){console.log(e),Te(!0)})).finally((function(){ye(!1),g(!1)}))}function Qe(e){var a;(a=e._id,fetch("".concat(k,"/articles/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},credentials:"include"})).then((function(e){return e.ok,e.json()})).then((function(a){return ve(fe.filter((function(t){return t._id===e._id?!a:t})))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}return r.a.useEffect((function(){return window.addEventListener("keydown",qe),function(){window.removeEventListener("keydown",qe)}})),r.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&ce(e).then((function(e){o(!0),p(e.name),$e()})).catch((function(e){return console.log(e)}))}),[]),r.a.useEffect((function(){c||"/saved-news"!==e||C(!0)}),[c,e]),r.a.createElement(u.Provider,{value:_},r.a.createElement(w,{pathname:e,loggedIn:c,onClick:function(){Ye(),c?(o(!1),localStorage.removeItem("jwt"),p(""),a.push("/")):We()},showMenu:Ye,isShowMenu:q,isShowOverlay:H,isMenuMobile:ee,handleMenuMobile:Ke,classBurgerMenu:z}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(V,{disabled:v,loading:Se,setLoading:ye,notFound:Ie,setNotFound:xe,isSearchError:Oe,pathname:e,loggedIn:c,rowArticles:Ee,handleShowMoreArticles:function(){we(Ee+1)},handleNewsSearch:function(){_e([]),xe(!1),Pe(!1),ye(!0),we(1),He()},addAnArticleToTheSavedList:function(e){if(c){var a=fe.find((function(a){return a.title===e.title&&a.date===e.date&&a.source===e.source}));if(!a)return void(t=Be,n=e.title||" ",r=e.text||" ",o=e.date||" ",l=e.source||" ",i=e.link||"https://www.fed.students.nomoreparties.xyz",m=e.image||"https://media.menacatalyst.ps/cached_uploads/resize/400/500/default-image.jpg",fetch("".concat(k,"/articles"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},credentials:"include",body:JSON.stringify({keyword:t,title:n,text:r,date:o,source:l,link:i,image:m})}).then((function(e){return e.ok,e.json()})).catch((function(){return{message:N}}))).then((function(e){e.data?ve([].concat(Object(s.a)(fe),[e.data])):console.log("\u0421\u0442\u0430\u0442\u044c\u044f \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0430\u0441\u044c")})).catch((function(e){return console.log("\u0421\u0442\u0430\u0442\u044c\u044f \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0430\u0441\u044c. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}));Qe(a)}else Ge();var t,n,r,o,l,i,m},searchResultArray:de,valueSearchInput:Be,valueSearchInputError:ze,setValueSearchInput:Ve,setValueSearchInputError:Pe,savedArticlesArray:fe})),r.a.createElement(R,{path:"/saved-news",component:P,savedArticlesArray:fe,pathname:e,loggedIn:c,valueSearchInput:Be,deleteAnArticleFromTheSavedList:Qe})),r.a.createElement(Q,null),r.a.createElement(te,{isOpen:S,onClose:Je,onChangeForm:Ge,handleLogin:function(e,a){g(!0),ie(""),function(e,a){return fetch("".concat(k,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:a})})}(e,escape(a)).then((function(e){return e.ok,e.json()})).then((function(e){e.token?(localStorage.setItem("jwt",e.token),o(!0),C(!1),ce(e).then((function(e){e.name?p(e.name):ie(e.message)}))):ie(e.message)})).catch((function(){return{message:N}})).finally((function(){return g(!1)}))},authError:se,disabled:v}),r.a.createElement(ne,{isOpen:j,onClose:Je,onChangeForm:We,onInfoTooltipOpen:function(){F(!1),C(!0),ie("")},handleRegister:function(e,a,t){var n,r,c;g(!0),ie(""),(n=e,r=a,c=t,fetch("".concat(k,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n,password:r,name:c})})).then((function(e){return e.ok,e.json()})).then((function(e){e.name?(F(!1),M(!0)):ie(e.message).finally((function(){return g(!1)}))})).catch((function(){return{message:N}})).finally((function(){return g(!1)}))},authError:se,disabled:v}),r.a.createElement(re,{isOpen:L,onClose:Je,onChangeForm:We}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[31,1,2]]]);
//# sourceMappingURL=main.b646732e.chunk.js.map