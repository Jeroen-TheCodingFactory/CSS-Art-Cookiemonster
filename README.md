# Cookiemonster
[![Het gerealiseerde eindproduct op desktop](/img/cookiemonster.png)](//video/cookiemonster/promo.mp4) 
<i>Klik op de video hierboven voor een demo!</i>

Cookiemonster nagemaakt in HTML en CSS. Op desktop is er een interactie gerealiseerd met een koekje in Javascript en kan je Cookiemonster voeren. Dit kan door een cookie in Cookiemonster zijn mond te plaatsen en vervolgens vanuit het cookie op de mond te hoveren. Voor de lol gedaan zonder enig winstoogmerk. 

<b>Alle rechten voorbehouden, alle rechten van cookiemonster behoren tot zijn/haar rechtmatige eigenaar.</b>

## Intro
Cookiemonster ligt te slapen... Maar zodra er een koekjes in de buurt zijn wordt hij wakker!
Cookiemonster is nagemaakt in HTML en CSS. Er zijn geen afbeeldingen of SVG's gebruikt. Ook de cookies zijn geheel in HTML en CSS gerealiseerd.

## Dingen die ik heb geleerd
1. Hoe lastig het is om bepaalde vormen zonder SVG te maken, opgelost door zo goed mogelijk een speels karakter te creeëren zodat niet alles te "statich" is.
2. Hoe inset met blur een 3D-effect in de ogen kan geven. 
3. Dat een ::before en ::after op een element zitten en NIET op de class. Zo kan ik met cookiemonster__eye en cookiemonster__eye--left hetzelfde :before en :after psuedo-element aanroepen.
4. Hoe je je markdown file mooi kan indelen :D
5. Ik heb veel over Github geleerd. Zoals het gebruiken van git reset --soft om zo de historie van commits te overschrijven. "Geschiedvervalsing" vind ik een mooie term hiervoor.
6. Als je de techniek van 5. toepast is het belangrijk dit <b>alleen</b> lokaal te gebruiken. Doe je dit online (wat ik helaas ook heb gedaan) dan <i>breek</i> je links in de Github omgeving. Hierdoor zijn bepaalde branches gemaakt op bepaalde issues, merge requests of features lastig te vinden. Ook kan je git rebase hiervoor gebruiken.
7. Geleerd om elke feature in een feature-branch 1 commit te laten zijn op de online repository zodat het makkelijk terug te draaien is. Lokaal kan je meer commits hebben maar dan kan je de techniek uit 5. gebruiken. 
8. Geleerd hoe hotfix-branches gemaakt moeten worden. Geleerd dat deze public moeten zijn en gemerged moeten worden in de master. 
9. Geleerd hoe pull requests werken en hoe je bepaalde regels voor een branch insteld in github. 
10. Geleerd hoe tags, releases en semantic versioning werken.
11. Geleerd hoe je bepaalde elementen kan "oppakken" in Javascript door een mousemove event en weer "neer kan zetten". Het oppakken wordt gedaan door een onclick op een koekje, vervolgens volgt dit koekje de muis (en staat het koekje in het midden door een translate). Wanneer je weer op het koekje klikt stopt dat betreffende koekje met volgen.
12. Geleerd hoe je een "eet" animatie na kan maken door een scaleY met transform origin op de mond. 
13. Geleerd dat verschillende < audio> tags door elkaar kunnen spelen.
14. In tegenstelling tot verschillende < audio> tags kan één < audio> tag maar één tegelijk afspelen.
15. Ik heb geleerd een closure te maken om zo te checken of een < audio> element al afgespeeld is. 
16. Geleerd hoe snel code rommelig kan worden in Javascript. Comments zijn hier key(zie ook punt 18).
17. Geleerd dat een event een relatedTarget property heeft. Je kan hier checken van welk element het event gevuurd wordt bij een onmouseenter of onmouseleave. 
18. Geleerd om JSDoc te gebruiken voor een handige documentatie van functies en variabelen.
19. Al het bovenstaande gecombineerd om een hele gave eet-animatie met muziek te maken! Heeeeeeel gaaf :)

## Screenshots

### Desktop Screenshot (met cookie)
![Het gerealiseerde eindproduct op desktop: Cookiemonster in HTML en CSS met cookie](/img/cookiemonster.png "Cookiemonster")

### Mobile Screenshot (zonder cookie)
![Het gerealiseerde eindproduct op mobile: Cookiemonster in HTML en CSS](/img/cookiemonster_mobile.png "Cookiemonster")

## Live demo
https://cookiemonster.css-art.nl

## Resources
1. Audio gebruikt voor "Snack Time" en het eten van cookies. https://www.youtube.com/watch?v=mQE0LQFFn3s
2. JSDoc documentatie gebruikt voor het leren van JSDoc. https://jsdoc.app/about-getting-started.html
3. Artikel gebruikt voor het onderzoek naar attributen van het Audio-element. https://www.w3schools.com/jsref/dom_obj_audio.asp
4. Artikel over MouseEvent.relatedTarget. https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget