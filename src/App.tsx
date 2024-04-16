import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";
import "./App.css";

function App() {
  // const [name, setName] = useState("");

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   alert(`The name you entered was: ${name}`);
  //   window.ipcRenderer.send("start-scrapping", name);
  // };

    const [searchTerm, setSearchTerm] = useState<string>('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      // Fungsi yang akan dijalankan saat tombol pencarian ditekan
      console.log('Searching for:', searchTerm);
      // Di sini Anda dapat menambahkan logika untuk melakukan pencarian sebenarnya
    };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://electron-vite.github.io" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-2 text-center">Google Maps Scrapping</h1>
      <div className="text-center text-sm text-gray-500">created by M0x1e.</div>

      <div className="flex justify-center my-4">
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        {/* <FaSearch style={{ color: 'gray' }} /> */}
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
      </div>
    </div>
  );
}

export default App;
