// import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import "../../public/css/invitation.css";

function Invitation() {
  const [result, setResult] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("down");

   useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        setScrollDirection("down");
      } else if (currentScroll < lastScrollTop) {
        setScrollDirection("up");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    async function getData() {
      const id = data.id;
      const res = await fetch(`${window.location.origin}/api/getWed/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      setResult(json);
    }
    getData();
  }, []);

  // Buat variabel kosong dulu
  let background = null;
  let wanita = {};
  let pria = {};
  let image = [];
  let date = null;
  let hours = null;
  let day = null;
  let path = null;
  let imageView = [];
  // Baru isi kalau result sudah ada
  if (result) {
    background = JSON.parse(result.background)[0];
    wanita = JSON.parse(result.female_family);
    pria = JSON.parse(result.male_family);
    image = JSON.parse(result.image);    

    date = new Date(result.event_date.replace(" ", "T"));
    day = date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
    hours = date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    })
    path = () => {
      let url = result.maps_location;
      window.open(url, '_blank');
    }

    let array = [];
    for (let i = 0; i < image.length; i++) {
      array.push([image[i][0]]);       
    }

    console.log(array);

    for (let i = 0; i < array.length; i++) {
      let info = `${window.location.origin}/${array[i][0].url}`;
      imageView.push(
        <img key={i} data-aos={scrollDirection === "down" ? "fade-up": "fade-down"} src={info} alt={i}/>
      )
    }
  }

  useEffect(() => {
    if (!background) return;
    document.body.style.backgroundImage = `url('${background.url}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed"
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [background]);

  let html = ``;
  // tampilkan loading atau data
  if (!result) {
    return <p>Memuat data...</p>;
  }

  return (
      <div className="main" style={{ marginTop: "15%", marginBottom: "10%"}}>
        <div className="component" data-aos={scrollDirection === "down" ? "fade-up": "fade-down"} style={{ backgroundColor: "red" }}>
          <div className="container">
            <div className="title" style={{ textAlign: "center"}}>
              <h5>Pasangan Mempelai</h5>
              <h1>{pria.pasangan} & {wanita.pasangan}</h1>
            </div>
            <div className="summary" style={{ textAlign:"center" }}>
              <p>Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, Ya Allah izinkanlah kami merangkaikan cinta yang Engkau berikan dalam ikatan pernikahan</p>
            </div>
            <div className="imageCouple" style={{ marginTop: "12%" }}>
              <img style={{ width: "30%", marginLeft: "35%", borderRadius: "10%" }} src={image[0][0].url} alt="" />
            </div>
            <div className="infoCouple" style={{ marginTop: "5%", display: "flex", justifyContent: "space-between" }}>
              <div className="femaleInfo" style={{ width: "40%" }}>
                <h2>{wanita.pasangan}</h2>
                <hr />
                <h5><b>Putri Dari</b></h5>
                <h5>Bapak {wanita.waliAyah}</h5>
                <h5>& Ibu {wanita.waliIbu}</h5>
              </div>
              <div className="maleInfo" style={{ width: "40%"}}>
                <h2>{pria.pasangan}</h2>
                <hr />
                <h5><b>Putra Dari</b></h5>
                <h5>Bapak {pria.waliAyah}</h5>
                <h5>& Ibu {pria.waliIbu}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="component1" data-aos={scrollDirection === "down" ? "fade-up": "fade-down"}>
          <div className="container">
            <div className="summary" style={{ textAlign: "center", color: "white", marginTop: "10%" }}>
              <h5>"Dan diantara ayat ayatnya ialah dia menciptakan untukmu istri istri dari jenismu</h5>
              <h5>sendiri, supaya kamu merasa nyaman kepadanya, dan dijadikannya diantaramu</h5>
              <h5>mawadah dan rahmah. Sesungguhnya pada yang demikian itu benar benar terdapat</h5>
              <h5>tanda tanda bagi kaum yang berfikir."</h5>

              <h5><b>Q.S. Ar-Rum:21</b></h5>
            </div>
          </div>
        </div>
        <div className="component" data-aos={scrollDirection === "down" ? "fade-up": "fade-down"} style={{ marginTop: "5%", marginBottom: "10%" }}>
          <div className="container">
            <div className="waktuTempat" style={{ textAlign: "center" }}>
              <h1>Waktu</h1>
              <h4>{day}</h4>
              <h4>{hours} WIB</h4>
              <br />
              <br />
              <h1>Tempat</h1>
              <h4><b>{result.location}</b></h4>
              <button className='btn btn-success' onClick={path}> Tempat Acara</button>
            </div>
          </div>
        </div>
        <div className="component" data-aos={scrollDirection === "down" ? "fade-up": "fade-down"}>
          <div className="container" style={{ textAlign: "center" }}>
            <h1>Our Moment</h1>
            <div className="gallery-grid">
              {imageView}
            </div>
          </div>
        </div>
        <div className="component1" data-aos={scrollDirection === "down" ? "fade-up": "fade-down"}>
          <div className="container">
            <div className="summary" style={{ textAlign: "center", color: "white", marginTop: "10%" }}>
              <h4>TERIMA KASIH ATAS KEHADIRAN DAN DOA RESTUNYA KAMI YANG BERBAHAGIA</h4>
            </div>
          </div>
        </div>
      </div>
  );
}

const root = document.getElementById("body_react");
ReactDOM.createRoot(root).render(<Invitation />);
