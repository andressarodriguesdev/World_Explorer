import './CountryCard.css';

function CountryCard({ country, onSelect }) {
  function handleClick() {
    console.log("CLICOU NO CARD:", country.names.common);
    onSelect(country);
  }

  return (
    <button
      className="country-card"
      type="button"
      onClick={handleClick}
    >
      {country.flag?.url_svg ? (
        <img
          className="country-flag"
          src={country.flag.url_svg}
          alt={`Bandeira de ${country.names.common}`}
        />
      ) : (
        <div className="country-emoji">
          {country.flag?.emoji || '🌎'}
        </div>
      )}

      <div className="country-info">
        <h2>{country.names.common}</h2>

        <p>
          <strong>Capital:</strong>{' '}
          {country.capitals?.[0]?.name || 'Não informado'}
        </p>

        <p>
          <strong>Região:</strong> {country.region}
        </p>

        <p>
          <strong>População:</strong>{' '}
          {country.population.toLocaleString('pt-BR')}
        </p>
      </div>
    </button>
  );
}

export default CountryCard;