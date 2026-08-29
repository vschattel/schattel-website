---
layout: ../../layouts/BlogPost.astro
title: "Datenmigration im KMU: zwei Praxisfälle – und warum das Format entscheidet"
description: "ERP-Stammdaten nach DATEV, Lieferantenkataloge nach Shopify: zwei Migrationsprojekte, die zeigen, woran Datenübernahmen scheitern – und wie sie gelingen."
date: 2026-08-29
aktualisiert: 2026-08-29
autor: "Volker Schattel"
kategorie: "KI & Automatisierung"
stand: "08/2026"
---

Der Wechsel einer Unternehmenssoftware scheitert selten an der neuen Software. Er scheitert an einer Wahrheit, die im Verkaufsgespräch nie vorkommt: **Ein neues System beseitigt den alten Datenmist nicht – es macht ihn nur sichtbarer.** Wer unbereinigte Stammdaten migriert, hat danach dieselben Duplikate, Tippfehler und Lücken wie vorher, nur in schönerer Oberfläche. Zwei Fälle aus unserer Projektarbeit zeigen, wie Datenübernahmen im KMU wirklich laufen – und warum am Ende fast immer die Datenaufbereitung und ein Dateiformat über Erfolg oder Handarbeit entscheiden.

## Fall 1: ERP-Stammdaten nach DATEV

Ein mittelständisches Unternehmen in Süddeutschland führte ein zentrales ERP ein: Eingangsrechnungen liefen aus dem Rechnungspostfach in die Rechnungsprüfung – mit Abgleich gegen Bestellungen – und von dort per Export in die DATEV-Buchhaltung. Der unscheinbare Teil des Projekts war der entscheidende: die Kreditoren- und Debitorenstammdaten.

**Was wir vorfanden**, kennt jeder, der einmal in gewachsene Buchhaltungsdaten geschaut hat: bis zu drei Duplikate für denselben Kreditor oder Debitor, entsprechend unsauber vergebene Konto-Nummern. Kein einheitliches Muster an Pflichtfeldern – neben vollständigen Datensätzen standen welche, in denen außer dem Namen nichts gepflegt war. Und natürlich haufenweise schlicht falsche Daten. Heikel wird das genau dort, wo aus Stammdaten Zahlungen werden: Steuernummer und Bankverbindung. Man mag sich nicht ausmalen, was passiert, wenn eine IBAN beim falschen Kreditor hinterlegt ist – oder ein Tippfehler in der IBAN in einem Zahllauf mit hundert Überweisungen rausgeht.

**Wie wir vorgingen:** mit derselben Technik, die wir beim [Aufbau von Lead-Listen](/blog/lead-listen-mit-ki/) einsetzen – Schritt für Schritt säubern, dann in Schleifen verifizieren. Die Firmenstammdaten haben wir, soweit möglich, gegen verlässliche externe Quellen abgeglichen – Firmenname, Adresse, Register- und Steuerdaten. Dabei kamen etliche Tippfehler und Verwechslungen ans Licht, die intern nie aufgefallen wären, weil intern niemand tausend Datensätze einzeln gegenprüft. Besonders kritische Felder wie Bankverbindungen liefen gesondert: Dort ersetzt keine Internetquelle die Prüfung – Auffälligkeiten und Unklarheiten wurden konsequent zur manuellen Verifikation ausgespielt, bevor auch nur ein Euro über diese Stammdaten gezahlt wurde.

Vorher war genau das händisch versucht worden: mehrere Wochen Arbeit, rund ein Viertel geschafft – und in das Viertel hatten sich bereits wieder neue manuelle Fehler eingeschlichen. Mit dem KI-gestützten Ansatz war der gesamte Bestand **in wenigen Tagen** bereinigt und verifiziert.

## Warum hier klassische Excel-Arbeit aufgibt

Bei jeder Datenmigration rund um ein ERP steht man vor demselben Bild: riesige Listen, die abgeglichen und kontrolliert werden wollen. Regelbasierte Abgleiche – Excel, SVERWEIS, Power Query – funktionieren dabei hervorragend, solange ein verlässlicher Schlüssel oder eindeutige Regeln existieren. Genau das fehlt in gewachsenen Daten aber häufig: Das Duplikat hat die Straße nicht gepflegt, der Name ist anders geschrieben, das Feld, über das man abgleichen wollte, ist leer.

Mit KI stellt man die Frage anders: „Hier sind tausend Kreditoren – gib mir alle wahrscheinlichen Duplikate." Das Modell erkennt Zusammengehöriges auch dann, wenn Schreibweisen abweichen und Felder fehlen – und liefert eine Wahrscheinlichkeit dazu, statt an einer starren Regel zu scheitern.

## Ehrlichkeit über KI: Sie muss nicht unfehlbar sein – sie muss wissen, wann sie unsicher ist

KI-Modelle arbeiten mit Wahrscheinlichkeiten – das muss man wissen und nutzen. Mehrere Prüfschleifen und unterschiedliche Modelle hintereinander drücken die Fehlerquote deutlich; auf hundert Prozent kommt man damit nicht, und das muss man auch nicht. Denn die entscheidende Fähigkeit ist eine andere: Ein gut gebautes System erkennt zuverlässig, **was es sicher bearbeiten kann – und sortiert den Rest aus.**

Deshalb arbeiten wir mit Konfidenzwerten: Was das System nicht sicher genug verifizieren kann, wandert in die manuelle Nachbearbeitung. In diesem Projekt blieben am Ende ein paar Dutzend Datensätze übrig – typischerweise Privatkunden, zu denen es keine Website und keinen Datenbankeintrag gibt, sodass sich mehrere Quellen schlicht nicht in Übereinstimmung bringen ließen. Genau so soll es sein: Die Maschine erledigt die Masse, der Mensch die begründeten Ausnahmen.

## Der letzte Meter: das Importformat

Dann der Schritt, an dem solche Projekte regelmäßig hängen bleiben: der Import. DATEV nimmt Stammdaten nicht „irgendwie" an, sondern in einem definierten Importformat. Und wer jetzt denkt „das ist doch nur CSV": Es gibt Dutzende CSV-Varianten – Trennzeichen, Feldreihenfolge, und im Deutschen vor allem die Zeichenkodierung. Wer sie falsch erwischt, macht aus „Müller" ein verstümmeltes „Mller"; wir haben das auch bei Importformaten von Lohnprogrammen schon oft genug gesehen.

Auch hier spielt KI ihre Stärke aus – auf unerwartete Art: DATEV ist ausführlich dokumentiert, und mit Unterstützung des Modells haben wir die relevanten Formatvorgaben in kürzester Zeit aus der Dokumentation herausgearbeitet, statt uns durch ein Handbuch zu graben. Das Zielformat für den DATEV-Stammdaten-Import wurde dann deterministisch per Python-Skript erzeugt, exakt nach Spezifikation – nicht von der KI improvisiert. Der Import selbst war danach ein Knopfdruck.

Zur Ehrlichkeit des Berichts gehört auch: Der automatisierte Rechnungsfluss lief zum Projektabschluss bei rund 80 Prozent, der Rest wurde definiert manuell abgefedert – etwa Schweizer Belege mit einer Steuerlogik, die das Quellsystem nicht abbilden konnte, in DATEV aber korrekt ankommen musste. Solche Sonderfälle unterscheiden echte Migrationsprojekte von Werbefolien: Man plant sie ein, statt sie zu verschweigen. Das Projekt wurde mit diesem Stand geordnet abgeschlossen und übergeben.

## Fall 2: Lieferantenkataloge nach Shopify

Ein Teilehandel in Deutschland wollte sein Sortiment in einen Shopify-Shop bringen. Die Produktdaten kamen von den Großhandels-Lieferanten – als Datenfeeds in sehr unterschiedlicher Qualität: Der eine Feed war brauchbar strukturiert, der andere unvollständig und deutlich schlechter gepflegt. Dieselben Artikel, zwei Wahrheiten.

Der Lösungsweg: den besseren Feed als Basis nehmen, gezielt aus dem schwächeren ergänzen, was fehlt – und die Daten dabei nicht nur zusammenführen, sondern **transformieren**: Attribute vereinheitlichen, Beschreibungen aufbereiten, Preise kalkulieren. Der Ansatz war, wie fast immer bei uns, gemischt: Wo es um Mustererkennung geht – Zuordnungen, Vereinheitlichung, Lücken erkennen –, arbeiten KI-Modelle. Wo gerechnet wird – etwa bei der Preiskalkulation –, laufen hart programmierte Python-Skripte, die zu 100 % deterministisch sind. Gestartet wurde mit einem Pilot-Datensatz einer Marke, mit Feedbackschleifen, bevor der Gesamtbestand durch den eigens gebauten Konverter ins Shopify-Importformat lief.

## Das Muster hinter beiden Fällen

1. **Die Datenaufbereitung ist die Kunst.** Herauskommen tun die Daten fast immer irgendwie – als Export, Datenbank-Auszug oder Excel. Aber es gilt der älteste Satz der Datenverarbeitung: saubere Daten, keine Probleme. Wer den Mist mit umzieht, hat ihn danach im neuen System.
2. **KI beschleunigt das Verstehen – Skripte verantworten das Rechnen.** Mapping, Duplikate, Vereinheitlichung, Verifikations-Schleifen: KI-gestützt in Tagen statt Wochen. Alles, was zu 100 % stimmen muss – Beträge, Preise, Schlüssel –, läuft deterministisch über programmierte Skripte. Die Freigabe bleibt beim Menschen.
3. **Das Zielformat entscheidet über den letzten Meter.** Jedes System hat sein Importformat mit eigenen Regeln bis hinunter zur Zeichenkodierung. Wer es exakt bedient, hat einen Knopfdruck – wer es ungefähr bedient, hat eine Fehlerliste.

## Mit diesen Formaten und Übergängen arbeiten wir

Damit Suchende uns finden, hier konkret statt kategorisch – typische Übergänge, die wir bauen: **Branchensoftware/ERP → DATEV** (Stammdaten- und Buchungsimport über die DATEV-Importformate), **Lieferanten- und Herstellerkataloge → Shopify** oder andere Shopsysteme (CSV-Importformate, aus Rohfeeds in Excel/CSV ebenso wie aus Katalogformaten wie DATANORM oder BMEcat), **Alt-Wawi/Kassensysteme → Cloud-ERP** (Artikel-, Kunden- und Lieferantenstämme aus proprietären Exporten), dazu Datenbereinigung im Bestand: Duplikate, Geo-Zuordnungen, fehlende Attribute – auch bei fünfstelligen Datensatzzahlen, wie in unserer [Projektgalerie](/projekte/) nachzulesen.

Wenn Ihr konkretes Paar hier nicht steht: Entscheidend ist nie der Systemname, sondern dass die Daten herauskommen – sauber hinein bringen wir sie.

## Wie ein Projekt bei uns abläuft

Am Anfang steht ein **Daten-Audit** an Ihren echten Exportdaten. In der Regel haben wir innerhalb von ein bis zwei Stunden einen ersten Testdatensatz durch die Pipeline – und wenn der auf Anhieb bei rund 80 % liegt, wissen wir aus Erfahrung: Das Projekt läuft, der Rest ist Konzept- und Feinarbeit. Auf dieser Basis bekommen Sie ein verbindliches Angebot und eine ehrliche Ansage, was die Migration nicht leisten wird – keine offene Aufwandsrechnung ins Blaue. Migriert wird dann wie oben beschrieben – Pilot, Feedbackschleife, Gesamtlauf, Abnahme mit Stichproben.

Das Prinzip dahinter ist dasselbe wie bei unserer [autonomen Buchhaltung](/blog/autonome-buchhaltung-praxisbericht/): Systeme bauen, denen man Verantwortung übergeben kann – mit Kontrolle an den richtigen Stellen, nicht mit blindem Vertrauen.

## Der erste Schritt

Wenn bei Ihnen ein Systemwechsel ansteht – oder längst beschlossen ist und nur an der Datenfrage hängt: Schicken Sie uns keinen Fragebogen, sondern einen Datenexport. Ein Blick auf echte Daten sagt mehr als jedes Vorgespräch; nach dem Testdatensatz wissen Sie, was der Umzug kostet und wie lange er dauert.

---

*Volker Schattel führt die Unternehmensberatung Schattel und deren Payroll-Marke LohnLotsen. Beide beschriebenen Fälle sind Kundenmandate von 2026; Details sind zum Schutz der Kunden verfremdet. Stand: 08/2026.*
