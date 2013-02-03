---
title: Laboratoř 3D tisku
layout: default
---

[Fakulta informačních technologií](http://fit.cvut.cz/) Českého vysokého učení technického v Praze nabízí studentům **jedinečnou možnost** zapojit se do aktivit **laboratoře 3D tisku**, kde tiskneme na tiskárnách RepRap, vytváříme vlastní projekty a trávíme (téměř veškerý) svůj volný čas.

### 3D tiskárny RepRap
Představte si stroj, do kterého **pošlete počítačový 3D model** navržený například v CADu, v Blenderu, nebo v jiném modelovacím nástroji, chvíli počkáte a **dostanete skutečný objekt**, který si můžete osahat v ruce.

Představte si, že tento stroj se vám vejde na stůl, že si ho můžete sami **postavit za několik tisíc korun** a že je **kompletně open source** – od firmwaru přes ovládací software až k hardwaru. Navíc tento stroj umí vyrobit části sama sebe. Není to sci-fi, je to realita.

3D tiskáren je celá řada, jsou postaveny na různých principech a technologiích. Některé stojí miliony, některé si postavíte v pracovně po večerech za zlomek této částky. My se zajímáme hlavně, ale ne výhradně, o [tiskárny RepRap](http://reprap.org/) - protože jde o **svobodný projekt**, do kterého může každý přispět, ale ze kterého může i každý těžit. <a href='#' onclick='$( "#dialog-modal" ).dialog( "open" )'>Více informací...</a>

<script>
$(function() {
  $( "#dialog-modal" ).dialog({
	width: 700,
	autoOpen: false
  });
});
</script>

<div id="dialog-modal">
<h3 id='jak_to_funguje'>Jak to funguje</h3>
<p>Modely vznikají <strong>aditivní cestou</strong>, takže tiskárna nevyřezává ani nic podobného. Nevzniká tak kromě zmetků <strong>žádný odpad</strong> a veškerý spotřebovaný materiál se nachází ve výsledném objektu. Určitě znáte <strong>tavnou lepicí pistoli</strong>, přesně na jejím principu funguje 3D tisk na tiskárně RepRap. Místo lepicího silikonu se používá mnohem užší plastový drát namotaný na roli, který je nasouván do tiskové hlavy, kde se <strong>zahřeje a roztaví, nanese na podložku a zase ztuhne</strong>. To samozřejmě neděláte rukama, tiskovou hlavou a tiskovou plochou hýbe sada krokových motorů, která umožňuje pohyb hlavy vůči podložce po třech osách.</p>

<p>Tiskne se většinou z <strong>plastu</strong>, konkrétně z ABS, nebo z plastu podobného materiálu z kukuřičného škrobu, PLA – můžete se tak rozhodnout, že budete <strong>tisknout ekologicky</strong>. Vhledem k principu tisku ale není problém tisknout z čehokoli, co dokážete roztavit a nechat zase zatuhnout.</p>

<p>Máme tedy samohybnou tavnou pistoli, ze které vylézá místo lepidla plast – jak z toho ale udělat objekt podle počítačové reprezentace? Jednoduše, model se před tiskem pomocí speciálního programu <strong>nařeže na dvourozměrné pláty</strong>. Tisková hlava pak <strong>nakreslí vždy jednu vrstvu</strong> a posune se o kousek výš, kde začne kreslit další. Výhoda je, že řezací program pozná, která část je vnitřní, a podle požadavku uživatele vyplní objekt jen částečně, například sítí nebo včelími pláty. Není tak dutý a jednoduše zničitelný, není ale ani plný a šetří tedy materiál.</p>

<p><img src='images/icons/web.png' alt='Web' /> Více se dozvíte v <a href='http://www.linuxexpres.cz/hardware/3d-tisk'>článku na LinuxEXPRES.cz</a>.</p>
</div>
