---
layout: ../../layouts/BlogPost.astro
title: "Erklärvideo mit KI per One-Shot: 58 Sekunden Film aus einem Auftrag"
description: "Ein Auftrag, 50 Minuten, 58 Sekunden Film: So entstand unser KI-Erklärvideo – und was die Zahlen zu KI in KMU in Österreich und Deutschland bis 2031 sagen."
date: 2026-10-02
aktualisiert: 2026-10-02
autor: "Volker Schattel"
kategorie: "KI & Automatisierung"
stand: "09/2026"
ogImage: "https://schattel.at/assets/blog/ki-kmu-prognose-erklaervideo-poster.jpg"
ogImageWidth: 1920
ogImageHeight: 1080
video:
  name: "KI & KMU – Was kommt auf Österreich & Deutschland zu? Prognose für 1, 3 und 5 Jahre"
  description: "Der Film: 58 Sekunden aus einem einzigen Auftrag an Claude Code. Die Werte für 2027, 2029 und 2031 sind eigene Trendfortschreibung."
  thumbnailUrl: "https://schattel.at/assets/blog/ki-kmu-prognose-erklaervideo-poster.jpg"
  contentUrl: "https://schattel.at/assets/blog/ki-kmu-prognose-erklaervideo.mp4"
  uploadDate: "2026-10-02"
  duration: "PT58S"
---

Ein Erklärvideo lässt sich heute mit einem einzigen Auftrag an eine KI erstellen. In meinem Test hat Claude Code in rund 50 Minuten 1.700 Zeilen JavaScript geschrieben – Collage-Grafik, Figuren und Musik inklusive – und daraus einen 58-Sekunden-Film in Full HD gerendert. Die Form stimmt auf Anhieb. Was der One-Shot nicht liefert, sind geprüfte Inhalte: Die Zahlen brauchten einen zweiten Durchgang und jemanden, der dafür geradesteht.

Idee und Auftrag stammen nicht von mir, sondern von den AInauten. Der deutschsprachige KI-Newsletter hat am 28.09.2026 unter dem Titel <a href="https://www.ainauten.com/p/virales-claude-video-prompt-meta-connect-zuckerberg-seth-godin-the-knot-zentaur-ai-fun-agi-video" rel="noopener">„Wir haben den viralen Claude-Video-Trick getestet"</a> ausprobiert, was gerade die Runde machte: ein Auftrag an Claude, am Ende ein fertiges Video. Zwei Tage später habe ich einen der dort vorgestellten Aufträge auf eine Frage angewandt, die unsere Kunden tatsächlich beschäftigt: Was kommt mit KI auf kleine und mittlere Unternehmen in Österreich und Deutschland zu? Dieser Artikel liefert beides nach – wie der Film entstanden ist und welche Zahlen dahinterstehen.

<figure style="margin:28px 0">
  <video controls playsinline preload="none" width="1920" height="1080" poster="/assets/blog/ki-kmu-prognose-erklaervideo-poster.jpg" aria-label="Kurzfilm: KI und KMU – was kommt auf Österreich und Deutschland zu? Prognose für 1, 3 und 5 Jahre" style="width:100%;height:auto">
    <source src="/assets/blog/ki-kmu-prognose-erklaervideo.mp4" type="video/mp4">
  </video>
  <figcaption style="font-size:13.5px;color:var(--soft);margin-top:8px">Der Film: 58 Sekunden aus einem einzigen Auftrag an Claude Code. Die Werte für 2027, 2029 und 2031 sind eigene Trendfortschreibung.</figcaption>
</figure>

## Wie entsteht ein Erklärvideo aus einem einzigen KI-Auftrag?

„One-Shot" heißt: ein Auftrag, keine Rückfragen, kein Nachsteuern. Claude erzeugt dabei kein Video im engeren Sinn, sondern schreibt Code – eine Animation im Browser samt Ton – und rendert daraus am Ende ein MP4. Ich habe am 30.09.2026 Claude Code gestartet, das Programmierwerkzeug von Anthropic, in der Desktop-Fassung mit dem Modell Claude Fable 5.1, und war danach nicht mehr am Rechner. Als Auftrag diente der Collage-Prompt aus dem Newsletter; ausgetauscht habe ich nur Thema und Website. Gekürzt:

> Create a pure javascript animation. 30s–60s whimsical hand drawn collage style with appropriate audio. […] Quality is paramount. […] Topic: Welchen Einfluss hat KI auf KMUs in Österreich & Deutschland? make a forecast in 1y, 3y and 5y. Make the video about: www.schattel.at […] go and one shot it!

Um 09:35 legte die KI die erste Datei an, um 10:23 lag das fertige MP4 vor. Das Ergebnis in Zahlen:

| Kennzahl | Wert |
|---|---|
| Länge | 58 Sekunden |
| Format | MP4, 1.920 × 1.080 Pixel, 30 Bilder pro Sekunde – dazu eine eigenständige HTML-Fassung, die im Browser abspielt |
| Bauzeit der ersten Fassung | rund 50 Minuten |
| Überarbeitung mit Quellenrecherche | rund 15 Minuten |
| Code | rund 1.700 Zeilen JavaScript in sechs Dateien |
| Bild- und Audiodateien | keine |
| Frameworks | keine |
| Neu-Rendern des MP4 | rund 12 Sekunden |

Die zwei „keine" in der Tabelle sind der eigentliche Punkt: Im Film steckt keine einzige Bild- oder Audiodatei. Jedes Collage-Stück, jede Figur und jeder Ton entsteht erst beim Laden im Browser – aus Code. Die Bildidee ist eine Bergtour vom Tal zum Gipfel, auf der eine Unternehmerfigur und ein KI-Roboter mitwandern. Die Musik – Ukulele, Pfeifen, Glockenspiel – und die Geräusche sind eigens synthetisiert. Am Film hängen deshalb keine fremden Bild- oder Musikrechte.

Weil das MP4 in rund zwölf Sekunden neu gerendert ist, kostet eine Korrektur – ein anderer Prozentwert, ein geänderter Satz – nur Minuten. Die Überarbeitung am selben Tag hat genau das genutzt: Zahlen, Einsatzfelder und Quellenangaben nachgeschärft, in rund einer Viertelstunde.

## Was liefert der One-Shot – und was nicht?

Der One-Shot liefert die Form: Dramaturgie, Bildsprache, Musik, Timing und ein sauberes Videoformat. Auch eine Sprecherstimme ist kein Engpass. Unser Film kommt ohne Sprecher aus; Musik und Geräusche hat Claude selbst im Code erzeugt. Wer eine Stimme will, gibt Claude den Zugang zu einem Sprachdienst wie ElevenLabs mit. Die AInauten haben genau das getestet: Claude hat drei deutsche Sprecher verglichen, einen ausgewählt und die Aussprache von Markennamen selbst korrigiert – indem es die eigene Tonspur per Spracherkennung abgehört und Schreibweisen probiert hat, bis sie stimmte. Das Ergebnis ist überzeugend.

Zwei Dinge liefert der One-Shot nicht:

- **Geprüfte Zahlen.** Die erste Fassung zeigte für 2029 eine KI-Nutzung von 75 % und für 2031 von 90 %. Nach der Quellenrecherche wurden daraus 70 und 80 %. Eine KI, die in 50 Minuten einen Film baut, baut in derselben Zeit auch eine überzeugend aussehende Zahl. Prüfen muss sie jemand, der für die Aussage geradesteht.
- **Die Freigabe.** Was veröffentlicht wird, entscheide ich. Die Prognose-Szenen tragen deshalb im Film sichtbar den Stempel „PROGNOSE".

Ein Satz aus dem Film fasst das zusammen: „Den Unterschied macht die Führung – nicht die Technik." Das gilt für den Film selbst genauso wie für jedes KI-Projekt im Betrieb.

## Wie viele KMU in Österreich und Deutschland nutzen heute KI?

Laut amtlicher Statistik nutzten 2025 30 % der Unternehmen in Österreich und 26 % in Deutschland KI; gezählt werden Unternehmen ab zehn Beschäftigten. Österreich liegt damit im EU-Spitzenfeld – der EU-Schnitt beträgt 20 % – und hat den Anteil seit 2021 mehr als verdreifacht.

| Jahr | Österreich | Deutschland | EU-27 |
|---|---|---|---|
| 2021 | 9 % | 11 % | 8 % |
| 2023 | 11 % | 12 % | 8 % |
| 2024 | 20 % | 20 % | 13 % |
| 2025 | 30 % | 26 % | 20 % |

*Quelle: <a href="https://www.statistik.at/fileadmin/announcement/2026/06/20260624IKTU2025.pdf" rel="noopener">Statistik Austria, Pressemitteilung vom 24.06.2026</a>*

Je kleiner der Betrieb, desto seltener: In Österreich nutzen 26 % der Unternehmen mit 10 bis 49 Beschäftigten KI, aber 68 % der Unternehmen ab 250 Beschäftigten (<a href="https://www.statistik.at/fileadmin/publications/IKT-Einsatz-in-Unternehmen-2025_barr_Web.pdf" rel="noopener">Statistik Austria</a>). In Deutschland sind es 23 % gegenüber 57 % (<a href="https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html" rel="noopener">Destatis</a>). Und 77 % der österreichischen Unternehmen ohne KI haben den Einsatz noch nicht einmal erwogen.

Umfragen, die breiter fragen („Nutzen Sie KI?"), liegen 2026 schon bei 53 bis 57 %: <a href="https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-Mehrheit-Unternehmen-KI" rel="noopener">Bitkom</a> 57 %, das <a href="https://www.ifo.de/en/facts/2026-06-05/more-half-companies-germany-use-artificial-intelligence" rel="noopener">ifo Institut</a> 54,5 %, die <a href="https://www.wko.at/oe/news/ki-etabliert-sich-zunehmend-in-oesterreichs-unternehmen" rel="noopener">WKÖ</a> 53 % einschließlich Testphase. Über Jahre und Länder vergleichbar ist aber nur die amtliche Reihe – auf ihr baut die Prognose auf.

## Wie entwickelt sich KI in KMU bis 2031?

Unsere Prognose – eine eigene Trendfortschreibung, keine veröffentlichte Studie: 2027 nutzt rund jedes zweite Unternehmen KI, 2029 sind es etwa 70 %, 2031 etwa 80 %. Österreich liegt dabei durchgehend vor Deutschland.

| Jahr | Österreich | Deutschland | im Film (Mittel, gerundet) |
|---|---|---|---|
| 2025 (amtlich) | 30 % | 26 % | 30 % / 26 % |
| 2027 | 55 % | 41 % | ≈ 50 % |
| 2029 | 77 % | 57 % | ≈ 70 % |
| 2031 | 88 % | 71 % | ≈ 80 % |

*Eigene Trendfortschreibung der amtlichen Werte 2024 und 2025 (S-Kurve), Stand 09/2026. Die amtlichen Werte für 2026 erscheinen im Dezember 2026.*

Heißt praktisch: 2027 ist KI im Betrieb keine Ausnahme mehr, 2031 ist sie Standard. Die interessantere Frage ist deshalb nicht, ob KMU KI einsetzen, sondern wofür.

## Welche Aufgaben übernimmt KI in KMU zuerst – und welche danach?

Die Reihenfolge ist gut belegt: erst einzelne, kleine Aufgaben, dann ganze Prozesse.

**Heute und in einem Jahr: Texte, Recherche, Kundenanfragen.** Von den österreichischen KI-Nutzern setzen 73 % die Technik für Texterkennung und -verarbeitung ein und 51 % für Sprachgenerierung – aber nur 22 %, um Prozesse zu automatisieren oder Entscheidungen zu unterstützen (<a href="https://www.statistik.at/fileadmin/publications/IKT-Einsatz-in-Unternehmen-2025_barr_Web.pdf" rel="noopener">Statistik Austria</a>). In Deutschland automatisieren 27 % der KI-Nutzer Arbeitsabläufe (<a href="https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html" rel="noopener">Destatis</a>); am häufigsten bearbeitet KI dort Kundenanfragen (72 % der Nutzer, <a href="https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-Mehrheit-Unternehmen-KI" rel="noopener">Bitkom</a>). Die OECD beobachtet dasselbe Muster: Nur 29 % der KMU, die generative KI nutzen, setzen sie in ihrer Kerntätigkeit ein (<a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/12/ai-adoption-by-small-and-medium-sized-enterprises_9c48eae6/426399c1-en.pdf" rel="noopener">OECD</a>).

**In drei Jahren: ganze Prozesse im Backoffice.** Am schnellsten wächst der Einsatz im Rechnungswesen. In Deutschland stieg der Anteil der KI-Nutzer, die KI in Controlling und Rechnungswesen einsetzen, binnen eines Jahres von 17 auf 25 % (<a href="https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-Mehrheit-Unternehmen-KI" rel="noopener">Bitkom</a>). In der WKÖ-Umfrage 2026 steht „Backoffice und Administration" mit 41 % an der Spitze der Einsatzfelder, das Rechnungswesen folgt mit 25 % (<a href="https://www.wko.at/oe/news/ki-etabliert-sich-zunehmend-in-oesterreichs-unternehmen" rel="noopener">WKÖ</a>).

Der nächste Schritt sind KI-Agenten – Programme, die nicht nur antworten, sondern Arbeitsschritte selbstständig ausführen. In Deutschland setzen sie 11 % der Unternehmen ab 20 Beschäftigten bereits ein, 29 % planen es. Bitkom nennt als typischen Fall den Einkauf: Der Agent vergleicht Preise, holt Angebote ein und arbeitet Entscheidungsoptionen aus. Bitkom-Präsident Ralf Wintergerst ordnet ein: „KI-Agenten stehen heute etwa dort, wo Künstliche Intelligenz insgesamt vor drei Jahren stand." Wie ein ganzer Backoffice-Prozess in einem kleinen Betrieb aussieht, zeigt unsere [autonome Buchhaltung](/blog/autonome-buchhaltung-praxisbericht/): Eine KI kontiert und bucht die Belege, ein Mensch gibt an festen Stellen frei.

**Die Gegenstimme gehört dazu.** Gartner erwartet, dass über 40 % der Projekte mit KI-Agenten bis Ende 2027 wieder eingestellt werden – wegen steigender Kosten, unklaren Nutzens oder fehlender Risikokontrollen (<a href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" rel="noopener">Gartner</a>). Dass die Reihenfolge so kommt, ist belegt. Wann ganze Backoffice-Prozesse in KMU selbstständig laufen, bleibt Einschätzung.

## Was bedeutet das für Geschäftsführer im KMU?

Die Zahlen zeigen keinen Technikmangel, sondern einen Umsetzungsmangel. 59 % der deutschen KI-Nutzer sagen, dass sie das Potenzial überhaupt nicht ausschöpfen (<a href="https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-Mehrheit-Unternehmen-KI" rel="noopener">Bitkom</a>). Im Schnitt nutzt ein KI-nutzendes Unternehmen gerade zwei KI-Anwendungen (<a href="https://www.bitkom.org/sites/main/files/2026-02/bitkom-studienbericht-ki.pdf" rel="noopener">Bitkom-Studienbericht</a>).

Der Film ist dafür ein kleines, aber ehrliches Beispiel. Die Technik hat 50 Minuten gebraucht. Was danach kam – Zahlen prüfen, einordnen, freigeben –, war Führungsarbeit. Im Betrieb ist es genauso: Ein KI-Werkzeug ist schnell beschafft. Einen Ablauf so umzubauen, dass die KI die Masse erledigt und ein Mensch an den richtigen Stellen entscheidet, ist die eigentliche Arbeit – und sie entscheidet darüber, ob am Ende tatsächlich Zeit gespart wird oder nur ein weiteres Werkzeug herumliegt. Genau diese Arbeit übernehmen wir; Beispiele stehen in unserer [Projektgalerie](/projekte/).

Wenn Sie wissen wollen, welcher Ablauf in Ihrem Betrieb der erste Kandidat wäre, klären wir das im Erstgespräch – an Ihren echten Abläufen, nicht an einer Tool-Demo.

### Quellen

- Statistik Austria: <a href="https://www.statistik.at/fileadmin/announcement/2026/06/20260624IKTU2025.pdf" rel="noopener">Pressemitteilung 14 207-126/26 vom 24.06.2026</a> und <a href="https://www.statistik.at/fileadmin/publications/IKT-Einsatz-in-Unternehmen-2025_barr_Web.pdf" rel="noopener">STATreport „IKT-Einsatz in Unternehmen 2025"</a>
- Destatis: <a href="https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html" rel="noopener">Unternehmen mit Nutzung von KI nach Beschäftigtengrößenklassen</a>, Stand 24.11.2025
- Bitkom: <a href="https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-Mehrheit-Unternehmen-KI" rel="noopener">Presseinformation vom 14.09.2026</a> und <a href="https://www.bitkom.org/sites/main/files/2026-02/bitkom-studienbericht-ki.pdf" rel="noopener">Studienbericht „Künstliche Intelligenz in Deutschland"</a>, Februar 2026
- WKÖ / Market-Institut: <a href="https://www.wko.at/oe/news/ki-etabliert-sich-zunehmend-in-oesterreichs-unternehmen" rel="noopener">„KI etabliert sich zunehmend in Österreichs Unternehmen"</a>, 22.09.2026
- ifo Institut: <a href="https://www.ifo.de/en/facts/2026-06-05/more-half-companies-germany-use-artificial-intelligence" rel="noopener">Konjunkturumfrage vom 05.06.2026</a>
- OECD: <a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/12/ai-adoption-by-small-and-medium-sized-enterprises_9c48eae6/426399c1-en.pdf" rel="noopener">„AI adoption by small and medium-sized enterprises"</a>, Dezember 2025
- Gartner: <a href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" rel="noopener">Pressemitteilung vom 25.06.2025</a>
- AInauten: <a href="https://www.ainauten.com/p/virales-claude-video-prompt-meta-connect-zuckerberg-seth-godin-the-knot-zentaur-ai-fun-agi-video" rel="noopener">„Wir haben den viralen Claude-Video-Trick getestet"</a>, 28.09.2026

---

*Volker Schattel führt die Unternehmensberatung Schattel und deren Payroll-Marke LohnLotsen. Der Film entstand am 30.09.2026; die Idee dazu stammt von den AInauten. Zahlen Stand 09/2026.*
