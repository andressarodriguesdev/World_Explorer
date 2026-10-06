function CountrySearch({ value, onChange, countries }) {
  return (
    <div className="country-search">
      <input
        list="countries-list"
        type="text"
        placeholder="Pesquise ou escolha um país..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      <datalist id="countries-list">
        {countries.map((country) => (
          <option
            key={country.codes.alpha_3}
            value={country.names.common}
          />
        ))}
      </datalist>
    </div>
  );
}

export default CountrySearch;