let Mannschaft = {
    name: "1. FC Supercode",
    Manschaft: Array,
    abwehr:4,
    mittelfeld: 4,
    sturm: 2,
    aufstellung(eTarget) {
        if (eTarget) {
            this[eTarget.id] = Number(eTarget.value);
            if ((this.abwehr + this.mittelfeld + this.sturm) === 10){
                document.getElementById('error').innerHTML = ('Kann los gehen!!');
            } else  {
                document.getElementById('error').innerHTML = ('Die Mannschaft muss 11 Spieler haben!!');
            }
        };
        // Container speichern und initialisieren
        let abwehrContainer = document.getElementById('abwehrContainer');
        abwehrContainer.innerHTML = '';
        let mittelfeldContainer = document.getElementById('mittelfeldContainer');
        mittelfeldContainer.innerHTML = '';
        let sturmContainer = document.getElementById('sturmContainer');
        sturmContainer.innerHTML = '';
        // Variablen für die Anzahl Spieler initialisieren
        let anzahlAbwehr = 0;
        let anzahlMittelfeld = 0;
        let anzahlSturm = 0;
        // Durchsuchen des Arrays nach Positionen / und Anzahl nicht erreicht, dann neuen in Container
        this.mannschaft.forEach(function(spieler) {
            if (spieler.position == 'Torwart') {
                document.getElementById('torwartContainer').innerHTML = `<div>${spieler.name}</div>`;
            }
            if (spieler.position == 'Abwehr' && anzahlAbwehr < Mannschaft.abwehr) {
                abwehrContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlAbwehr++;
            }
            if (spieler.position == 'Mittelfeld' && anzahlMittelfeld < Mannschaft.mittelfeld) {
                mittelfeldContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlMittelfeld++;
            }
            if (spieler.position == 'Sturm' && anzahlSturm < Mannschaft.sturm) {
                sturmContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlSturm++;
            }
        })
    }
}

Mannschaft.mannschaft = [
    {name: 'Micha', position: 'Torwart'}, //Object
    {name: 'Eric', position: 'Abwehr'}, //Object
    {name: 'Anass', position: 'Abwehr'}, //Object
    {name: 'Richie', position: 'Abwehr'}, //Object
    {name: 'Klaus', position: 'Abwehr'}, //Object
    {name: 'Christian', position: 'Abwehr'}, //Object
    {name: 'Sergio', position: 'Abwehr'},
    {name: 'Anton', position: 'Mittelfeld'},
    {name: 'Michal', position: 'Mittelfeld'},
    {name: 'Navid', position: 'Mittelfeld'},
    {name: 'Georg', position: 'Mittelfeld'},
    {name: 'Rihab', position: 'Mittelfeld'},
    {name: 'Ali', position: 'Mittelfeld'},
    {name: 'Mustafa', position: 'Sturm'},
    {name: 'Shapour', position: 'Sturm'},
    {name: 'Sam', position: 'Sturm'},
    {name: 'Kim', position: 'Sturm'},
    {name: 'Rezan', position: 'Sturm'},
    {name: 'Vail', position: 'Sturm'},
]

document.getElementById('eingabe').addEventListener('change' , function(e){
    Mannschaft.aufstellung(e.target);
})

Mannschaft.aufstellung();





// Ausgeschriebene schreibweise für "this[eTarget.id] = eTarget.value;"
/* 
        if (eTarget.id == 'abwehr'){
            this.abwehr = eTarget.value;
        }
        if (eTarget.id == 'mittelfeld'){
            this.mittelfeld = eTarget.value;
        }
        if (eTarget.id == 'sturm'){
            this.sturm = eTarget.value;
        }
*/