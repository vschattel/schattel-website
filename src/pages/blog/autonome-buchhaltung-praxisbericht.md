---
layout: ../../layouts/BlogPost.astro
title: "Autonome Buchhaltung: Wie eine KI unsere Belege kontiert und bucht"
description: "90 % der Belege kontiert und bucht bei uns eine KI. Ein Mensch sagt an drei Stellen Ja. Praxisbericht aus dem eigenen Betrieb – mit Bauanleitung."
date: 2026-08-19
aktualisiert: 2026-08-19
autor: "Volker Schattel"
kategorie: "KI & Automatisierung"
stand: "08/2026"
---

130 Belege pro Quartal, drei Zahlungswege: Bankkonto, Kreditkarte, PayPal. Früher hat mich die Buchhaltung meines Unternehmens zwei volle Tage pro Quartal gekostet – Belege sammeln, zuordnen, mit Kontobewegungen abgleichen, in die Buchhaltungssoftware eintragen. Heute landen die meisten Rechnungen per Mail im Eingangsrechnungs-Postfach und sind gebucht, bevor ich sie geöffnet habe. Die KI liest jeden Beleg, erkennt den Lieferanten, schlägt Konto und Steuerbehandlung vor, gleicht gegen die tatsächlichen Kontobewegungen ab – und nach meiner Freigabe bucht sie direkt in die Buchhaltungssoftware, samt angehängtem Beleg-PDF.

Der entscheidende Punkt ist nicht, was die KI tut, sondern was sie nicht tut: Sie bucht nichts ohne Freigabe, sie rechnet keine Beträge selbst aus, und jeder ihrer Schritte ist protokolliert. Ein Mensch sagt an genau drei Stellen Ja – alles andere läuft.

Eine Einordnung vorweg, weil sie die häufigste Fehlvorstellung ausräumt: Im Hintergrund läuft nicht ChatGPT. Es läuft ein aktuelles Spitzenmodell in einem eigens gebauten Rahmen – mit fest definierten Werkzeugen, harten Regeln und einem Wissensspeicher, in dem alles steht, was der Betrieb über seine Lieferanten, Konten und Entscheidungen weiß. Wer eine Chat-App installiert und erwartet, dass sich die Buchhaltung von selbst bucht, wird enttäuscht. Der Unterschied zwischen „KI benutzen" und „ein System bauen, das KI benutzt" ist genau der Unterschied zwischen einem netten Werkzeug und einem Prozess, dem man Schreibrechte gibt.

Dieser Artikel beschreibt, wie das System aufgebaut ist, warum ich ihm vertraue und was davon auf größere Unternehmen übertragbar ist. Wer es im Detail nachvollziehen oder nachbauen lassen will, findet die vollständige technische Beschreibung in der [Bauanleitung: Autonome Buchhaltung](/blog/autonome-buchhaltung-bauanleitung/).

## Warum bisherige Buchhaltungs-Automatik enttäuscht

Buchhaltungssoftware automatisiert seit zwanzig Jahren das Eintippen: Texterkennung liest den Beleg, ein Vorschlag erscheint, ein Mensch korrigiert. Das klingt nach Automatisierung, ist aber nur Übertragungshilfe. Die eigentliche Arbeit steckt im Entscheiden: Welches Konto? Welche Steuerbehandlung – Inland, Reverse Charge, OSS? Welche Periode? Ist der Beleg überhaupt schon bezahlt, und von welchem Konto? Genau diese Entscheidungen blieben bisher beim Menschen hängen – oder schlimmer: Sie wurden den Vorschlägen der Texterkennung überlassen und ungeprüft übernommen.

Neu ist, dass ein KI-Assistent heute über eine offene Schnittstelle kontrolliert auf die Buchhaltungssoftware zugreifen kann – lesen, vorschlagen und nach Freigabe auch schreiben. Damit verschiebt sich die Automatisierung vom Eintippen zum Entscheiden. Und damit stellt sich die einzige Frage, die zählt: Wer entscheidet, wer gibt frei, wer haftet?

## Wie es funktioniert: Vorschlag → Passt → Gebucht

Der Ablauf besteht aus drei Schritten, mit klarer Rollenverteilung zwischen KI und Mensch:

**Schritt 1 – Die KI schlägt vor.** Sie liest die Beleg-PDFs selbst (auf die eingebaute Texterkennung der Buchhaltungssoftware verzichten wir bewusst – sie war zu schlecht), erkennt Lieferant, Betrag und Leistung, gleicht mit Kontenplan, Lieferantenstamm und den tatsächlichen Kontobewegungen ab und legt fertige Buchungsvorschläge in eine Warteschlange: Lieferant, Konto, Steuer, Datum, Betrag, Zuversichtswert.

Die meisten Belege kommen dabei gar nicht mehr über einen Ordner herein, sondern per Mail im Eingangsrechnungs-Postfach. Was dem gewohnten Muster entspricht, wird direkt zum Buchungsvorschlag – ich bestätige den Stapel und fertig. Die Rechnung muss nicht geöffnet, nicht umbenannt, nicht von einem Ort an den anderen geschoben und nirgends hochgeladen werden. Wer schon einmal mit Make, Zapier oder n8n gearbeitet hat, kennt das Prinzip eines automatisierten Ablaufs; der Unterschied ist, dass hier kein starrer Regelbaum arbeitet, sondern ein System, das den Beleg tatsächlich versteht.

**Schritt 2 – Der Mensch sagt „passt".** Ich sehe die Vorschläge als Liste und gebe frei – einzeln oder im Stapel. Korrigiere ich einen Vorschlag („nicht Fremdleistung, sondern Lizenzaufwand"), wird die Korrektur nicht nur übernommen, sondern gelernt.

Ein Beispiel aus dem Alltag: Ein neuer Anbieter taucht zum ersten Mal auf, das System kennt ihn nicht und fragt nach – welches Konto, welche Steuerbehandlung? Ich antworte einmal. Ab der nächsten Rechnung dieses Anbieters kommt keine Frage mehr, sondern ein fertiger Vorschlag, den ich nur noch bestätige. Nach ein paar Durchläufen bleiben genau die Fälle übrig, die tatsächlich eine Entscheidung brauchen. Die Freigabearbeit ist deshalb kein Kontrollaufwand, der ewig gleich bleibt – sie baut sich ab.

**Schritt 3 – Die KI bucht.** Nur freigegebene Vorschläge werden in die Buchhaltungssoftware geschrieben, inklusive Beleg-PDF am Buchungssatz. Die Zahlung wird bewusst als getrennter zweiter Schritt erfasst – solange eine Rechnung als unbezahlt geführt ist, lässt sie sich rückstandsfrei wieder entfernen. Der Rückweg bleibt immer offen.

## Das Konto ist angehängt – deshalb stimmt der Abgleich immer

Ein Detail, das im Alltag mehr ausmacht als jede Belegerkennung: Die Buchhaltungssoftware hängt über die PSD2-Schnittstelle direkt am Geschäftskonto und holt die Kontobewegungen täglich selbst ab. Damit sieht auch die KI den tatsächlichen Zahlungsverkehr – live, nicht als nachgereichten Export. Der Abgleich zwischen Beleg und Zahlung ist dadurch keine eigene Arbeitsschicht mehr, sondern passiert nebenbei.

Wie viel das wert ist, merkt man an den Fällen, die früher Nerven gekostet haben. Ein KI-Abo wird in US-Dollar fakturiert und in Euro vom Konto abgebucht – Rechnungsbetrag und Kontobewegung stimmen nie überein, weil Umrechnungskurs und Kartenentgelt dazwischenliegen. Früher hieß das: suchen, vergleichen, raten, welche Abbuchung zu welcher Rechnung gehört. Heute stellt das System die Verbindung selbst her und legt sie mir zur Bestätigung vor.

Dasselbe Prinzip gilt für die Ausgangsrechnungen: Ein monatlicher Lauf erstellt die Rechnungen an Bestandskunden als Entwürfe – Preise und Beträge kommen dabei nicht von der KI, sondern deterministisch aus den hinterlegten Stammdaten. Ich gebe den Stapel frei, die Rechnungen werden finalisiert, archiviert und versandfertig gemacht.

## Warum ich dem System vertraue

Vertrauen entsteht hier nicht durch gute Erfahrung, sondern durch harte Regeln, die im System einprogrammiert sind:

- Gebucht wird ausschließlich, was freigegeben wurde. Ein freies „Buch das mal" gibt es technisch nicht.
- Vor jedem Schreibvorgang prüft das System auf Duplikate – eine doppelt erfasste Rechnung ist damit praktisch ausgeschlossen.
- Beträge über einer festgelegten Grenze gehen nie im Stapel durch, sondern immer einzeln zur Freigabe.
- Jede Schreiboperation landet in einem lückenlosen Protokoll. Bricht ein Vorgang ab, wird er beim nächsten Lauf repariert statt doppelt angelegt.
- Und die wichtigste Regel: **Die KI rechnet nicht.** Preise, Summen und Steuersätze kommen aus den Stammdaten der Buchhaltungssoftware, nicht aus einem Sprachmodell. Die KI ordnet zu, gleicht ab und orchestriert – die Zahlen selbst sind deterministisch. Die verbreitete Sorge, eine KI könnte sich bei der Rechnung „verrechnen", trifft dieses System deshalb nicht.

Der Aufbau folgte einem Stufenmodell: erst nur lesen, dann vorschlagen, dann freigeben – und erst nach ausgiebiger Testphase durfte das System tatsächlich buchen. Die meisten Automatisierungsprojekte scheitern, weil sie mit dem Buchen anfangen. Die ersten drei Stufen liefern bereits den Großteil des Nutzens, bei null Risiko. Wie das Stufenmodell im Detail funktioniert, steht in der [Bauanleitung](/blog/autonome-buchhaltung-bauanleitung/).

## Der Nebeneffekt: Die KI fand Fehler, die jahrelang niemand sah

Bevor das System buchen durfte, musste es beweisen, dass es prüfen kann. Also ließ ich es den kompletten Altbestand kontrollieren – mit Ergebnissen, die für sich sprechen:

Die eingebaute Texterkennung hatte im Vorjahr Software-Anschaffungen dem Anlagevermögen zugeordnet, obwohl sie dort nichts verloren hatten. Ergebniswirksam war das nicht – die Abschreibung als geringwertiges Wirtschaftsgut war ordnungsgemäß erfolgt. Es stand schlicht auf dem falschen Konto und blähte das Anlagenverzeichnis mit Positionen auf, die dort nicht hingehören. Kein Drama, aber genau die Sorte Unsauberkeit, die man selbst nicht mehr sieht, wenn man jedes Quartal durch dieselbe Liste scrollt.

Der zweite Fund wog schwerer: Bei mehreren ausländischen Anbietern war ausgewiesene Umsatzsteuer als Vorsteuer abgezogen worden, obwohl sie über das OSS-Verfahren abgeführt wird und damit nicht abzugsfähig ist – ein Fehler, der aktuell in sehr vielen Unternehmen unbemerkt Geld kostet. Dazu doppelt erfasste Belege, doppelte Lieferanten im Stamm und eine Zahlung im falschen Wirtschaftsjahr.

Das waren meine Bücher, geführt mit marktüblicher Software und normaler Sorgfalt. Und genau hier entsteht der Effekt, den ich vorher unterschätzt hatte: **Vertrauen in so ein System baut sich nicht auf, indem es fehlerfrei bucht, sondern indem es Fehler findet, die man selbst nicht gesehen hat.** Wer die Prüfung des Altbestands als lästige Vorarbeit abtut, verschenkt den besten Test, den er bekommen kann – und die Prüfung allein rechnet sich oft schon, ganz ohne Buchungsautomatik. Der Nutzen ist deshalb nicht nur Zeit, sondern Prüfungssicherheit.

## Skaliert das über einen kleinen Betrieb hinaus?

Mein Unternehmen ist bewusst der Testfall: klein genug, dass ein Fehler nur mich trifft, ernst genug, dass es echte Buchhaltung mit echten Steuerterminen ist. Die Grundmechanik – Belege erkennen, zuordnen, abgleichen, lernen, kontrolliert schreiben – ist nicht größenabhängig. Das Setup wurde inzwischen auf einen weiteren Betrieb übertragen.

Der Sprung zur GmbH ist dabei kleiner, als er klingt. Ich führe zwar eine Einnahmen-Ausgaben-Rechnung, aber die Software bucht im Hintergrund ohnehin doppelt. Für die Umstellung müsste im Kern eine einzige Regel getauscht werden: Statt des Zahlungszeitpunkts wird das Rechnungsdatum zum Buchungsdatum. Die gesamte Mechanik darüber – Belegerkennung, Lieferantenzuordnung, Leitplanken, Lernspeicher, Freigabe – bleibt unverändert.

Was bei doppelter Buchhaltung und mehreren Beteiligten tatsächlich dazukommt: Periodenabgrenzung, Personenkonten und offene Posten, Kostenstellen als zusätzliche Dimension, und die Freigabe ist kein Chat-„passt" mehr, sondern das bestehende Vier-Augen-Prinzip – die KI ersetzt die Freigabe nicht, sie füllt sie vor. Bei 800 Eingangsrechnungen im Monat ist der Hebel entsprechend größer als bei 130 im Quartal; das ist eine Hochrechnung, keine Messung, aber die Richtung ist eindeutig. Die Unterschiede im Detail behandelt die [Bauanleitung](/blog/autonome-buchhaltung-bauanleitung/).

Weitere Fälle nach demselben Muster stehen in der [Projektgalerie](/projekte/).

## Was nicht automatisch geht

Der Altbestand muss einmal aufgeräumt werden, bevor das System produktiv lernt – sonst lernt es die alten Fehler mit. Der Aufbau selbst ist ein Projekt von mehreren Wochen, kein Wochenende. Und das System ist kein Produkt von der Stange: Werkzeuge, Regeln und Wissensspeicher werden auf den Betrieb zugeschnitten.

Die wichtigste Voraussetzung steht ganz am Anfang: Ihre Buchhaltungssoftware braucht eine offene Schnittstelle, auf die Sie selbst zugreifen können. Das ist die erste Frage, die sich jedes Unternehmen stellen sollte – noch vor jeder KI-Frage.

Und hier wird es in der Praxis eng. In Österreich kenne ich genau **einen** Anbieter, der eine so umfassende Schnittstelle offen bereitstellt, dass dieses System darauf laufen kann: <a href="https://www.freefinance.at/schnittstellen.html" rel="noopener">FreeFinance</a>. Dort läuft es produktiv, inklusive der <a href="https://www.freefinance.at/wie-es-funktioniert/bankanbindung.html" rel="noopener">PSD2-Bankanbindung</a>. In Deutschland testen wir derzeit denselben Aufbau gegen DATEV, das über seine Entwickler-Schnittstelle die nötigen Möglichkeiten bieten sollte – belastbar sagen kann ich das, wenn der Test durch ist.

Wenn Ihre Software keine offene Schnittstelle hat, ist das kein Grund zum Aufgeben, aber die Reihenfolge ändert sich: Dann steht zuerst die Frage im Raum, ob das System, mit dem Sie arbeiten, Ihr Unternehmen noch trägt.

## Der erste Schritt

Wenn Sie wissen wollen, ob das in Ihrem Unternehmen funktioniert – mit Ihrer Software, Ihrem Belegvolumen, Ihren Freigabeprozessen: Genau das klären wir in einem Gespräch. Der typische Einstieg danach ist ein Pilot mit festem Rahmen und definiertem Ende – erst lesen und vorschlagen, noch nicht buchen. Danach entscheiden Sie.

---
*Volker Schattel führt die Unternehmensberatung Schattel und deren Payroll-Marke LohnLotsen. Das hier beschriebene System läuft produktiv in der eigenen Buchhaltung. Stand: 08/2026.*
