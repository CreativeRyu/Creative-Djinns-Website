class Selection {
    lastSelection = false;
    listOfSelections = new Array();

    constructor(arrayMitElementen) {

        this.listOfSelections = arrayMitElementen;

    }

    oracle = new Selection(
        ['Göttlicher Segen wird auf dich niedergehen', 'Glorreicher Ruhm für dich', 'Großes Cash in der Täsch', 'Die Götter meinen es gut mit Dir']
    );

    select() {
        do {
            // zufällig eine Stelle im Array abgreifen
            var selected = Math.round(
                Math.random() * (this.listOfSelections.length - 1));
            // sollte diese Stelle der letzten Stelle entsprechen wird der Vorgang wiederholt
        } while (selected === this.lastSelection);
        this.lastSelection = selected;
        var value = this.listOfSelections[selected]; // gewählte Position in der Liste zurück geben
        return value;
    }
}

function saySomething() {
    for (var i = 1; i < 6; i++) {
        var whatIsOracleSaying = oracle.select();
        alert(whatIsOracleSaying);
    }
}