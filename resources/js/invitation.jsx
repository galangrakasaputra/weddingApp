// import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function Invitation() {
  const [result, setResult] = useState(null);

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

  // Baru isi kalau result sudah ada
  if (result) {
    background = JSON.parse(result.background)[0];
    wanita = JSON.parse(result.female_family);
    pria = JSON.parse(result.male_family);
    image = JSON.parse(result.image);
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

  // tampilkan loading atau data
  if (!result) {
    return <p>Memuat data...</p>;
  }

  return (
    <div>
      <h1>Undangan</h1>
      <p>Pria: {pria.pasangan}</p>
      <p>Wanita: {wanita.pasangan}</p>
    </div>
  );
}

const root = document.getElementById("body_react");
ReactDOM.createRoot(root).render(<Invitation />);
