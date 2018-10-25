var ctx = document.getElementById('tilasto').getContext('2d');
var Chart = new Chart(ctx, {
    type: "line",

    data: {
      labels: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
      datasets: [{
        label: "ensimmäinen taulukko",
        backgroundColor:'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 8, 7, 0, 40, 35],
     }]
    }
  })
