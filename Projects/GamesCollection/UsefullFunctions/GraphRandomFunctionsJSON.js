var meineDaten = {
    // die Beschriftung der X-Achse
    //labels: ['Gelb', 'Rot', 'Blau', 'Schwarz'],
    labels: [],
    // die Zahlen, die dargestellt werden sollen
    // series: [
    //     [0, 45, 5, -10, 5]
    // ]
    series: [{
        data: []
    },
    {
        data: []
    }]
};

var optionen = {
    width: 800,
    height: 600,
    showArea: true,
    //mit false werden keine Punkte angezeigt
    showPoint: true,
    //mit dieser Angabe werden die Kurven als Stufen dargestellt
   // lineSmooth: Chartist.Interpolation.step()
};