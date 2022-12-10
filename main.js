setInterval(function () {
    // fetch("http://localhost:8080/api")
    fetch("https://innovillage2022.herokuapp.com/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("suhu").innerHTML = res.suhuUdara;
        document.getElementById("kel_udara").innerHTML = res.kelUdara;
        document.getElementById("kel_tanah").innerHTML = res.kelTanah;
        document.getElementById("ph").innerHTML = res.phTanah;
        document.getElementById("indikator").innerHTML = res.indikator;
      });
  }, 1000);