---
title: README
layout: default
---

Toto je prozatím betverze stránek 3D labu. Text v tomto README je určen především přispěvatelům, nicméně není to nic tajného.

Celý web je [repozitář na GitHubu](https://github.com/3DprintFIT/3dprintfit.github.com) a stejně tak se s ním i pracuje. Naklonujte ho a vesele commitujte. Pokud nemáte přístup pro zápis, požádejte Mira nebo Marka, případně vyplňte formální Pull Requestu (ale to je asi zbytečné).

Všechny soubory jsou napsané v Markdownu, na HTML se převedou při pullnutí do repa - nejedná se tedy o dynamicky generovaný web, ale o *kompilování* při každém nahrání. Z toho důvodu visí web taky poměrně dlouho v cache prohlížeče, takže pokud chcete vidět update, nezapomeňte promazat. Pokud něco poděláte, revertněte commit.

Přímo v Markdownu jde používat sekvence HTML, ale dělejte to jen tam, kde je to žádoucí - tedy tam, kde Markdown už nestačí.

{{ site.icons.web }} [GitHub flavoured Markdown](http://github.github.com/github-flavored-markdown/)

{{ site.icons.web }} [GitHub Pages Help](https://help.github.com/categories/20/articles)

{{ site.icons.web }} [Using Jekyll and GitHub Pages](http://developmentseed.org/blog/2011/09/09/jekyll-github-pages/)

### TODO

 * Doplnit zbývající obsah (Miro)
 * Prosekat a zkrátit text na úvodní straně na cca polovinu, přidat video (Miro)
 * Předělat repo předmětu, aby šlo použít jako websita a udělat z toho submodul (Miro)
 * Nafotit vytištěné předměty na čistě bílém pozadí (Marek) a doplnit je jako ilustrační grafiku (Miro)
 * Doplnit fotky z nedávných aktivit do galerie (Marek) viz dále
 * Dohákovat někam na titulku sponzory a partnery (Miro)
 * Dohákovat nějaký box se sociálníma widgeteama - Twitter, Facebook... (Miro)
 * Dodat popis o sobě do `lide.md` (Honzové, Syky, Martin) až bude nahozená struktura (Miro)
 * Prolézat web a opravovat nebo aspoň hlásit chyby (všichni)
 * Až to bude ready, deploynout to na 3dprint.fit.cvut.cz (Miro + někdo na straně školy (Jakub?))

### Galerie

 * Fotky v galerii jsou z naší Picasy (přístup má Marek)
 * Seznam galerií není dynamicky generovaný a nová galerie je třeba ručně doplnit do souboru `galerie.md` (syntax viz už přidané)

### Ikony

 * Podle potřeby přidávám 16x16pixelové ikony do `images/icons` a jejich snippety do `_config.yml`, jak se to používá, vidíte i výše v tomhle souboru.
