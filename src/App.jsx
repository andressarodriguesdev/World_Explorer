import { useEffect, useState } from "react";
import { getCountries } from "./services/countryApi";
import CountryCard from "./components/CountryCard";
import CountrySearch from "./components/CountrySearch";
import RegionFilter from "./components/RegionFilter";
import CountryModal from "./components/CountryModal";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await getCountries();

        console.log("PAÍSES RECEBIDOS NO APP:", data.length);

        setCountries(data);
      } finally {
        setLoading(false);
      }
    }

    loadCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.names.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === "" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="app">
      <div className="hero">
        <span className="hero-label">EXPLORADOR GLOBAL</span>

        <h1>World Explorer</h1>

        <p className="hero-description">
          Explore países do mundo, descubra suas capitais, regiões e informações
          populacionais em um só lugar.
        </p>
      </div>

      <div className="search-section">
        <div className="search-controls">
          <CountrySearch
            value={search}
            onChange={setSearch}
            countries={countries}
          />

          <RegionFilter
            value={region}
            onChange={setRegion}
          />
        </div>

        <p className="results-count">
          {filteredCountries.length} países encontrados
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="country-list">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.codes.alpha_3}
              country={country}
              onSelect={setSelectedCountry}
            />
          ))}
        </div>
      )}

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}

export default App;