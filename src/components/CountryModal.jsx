import './CountryModal.css';

function CountryModal({ country, onClose }) {
  if (!country) {
    return null;
  }

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => `${currency.name} (${currency.symbol || ""})`)
        .join(", ")
    : "Não informado";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "Não informado";

  const callingCode =
    country.idd?.root && country.idd?.suffixes?.length
      ? `${country.idd.root}${country.idd.suffixes[0]}`
      : "Não informado";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="country-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          ×
        </button>

        <div className="modal-header">
          {country.flag?.url_svg ? (
            <img
              className="modal-flag"
              src={country.flag.url_svg}
              alt={`Bandeira de ${country.names.common}`}
            />
          ) : (
            <div className="modal-emoji">
              {country.flag?.emoji || "🌎"}
            </div>
          )}

          <div>
            <span className="modal-label">DETALHES DO PAÍS</span>

            <h2>{country.names.common}</h2>

            <p>{country.names.official}</p>
          </div>
        </div>

        <div className="modal-details">
          <div className="detail-item">
            <span>Capital</span>
            <strong>
              {country.capitals?.[0]?.name || "Não informado"}
            </strong>
          </div>

          <div className="detail-item">
            <span>Região</span>
            <strong>
              {country.region || "Não informado"}
            </strong>
          </div>

          <div className="detail-item">
            <span>Sub-região</span>
            <strong>
              {country.subregion || "Não informado"}
            </strong>
          </div>

          <div className="detail-item">
            <span>População</span>
            <strong>
              {country.population?.toLocaleString("pt-BR") ||
                "Não informado"}
            </strong>
          </div>

          <div className="detail-item">
            <span>Área</span>
            <strong>
              {country.area
                ? `${country.area.toLocaleString("pt-BR")} km²`
                : "Não informado"}
            </strong>
          </div>

          <div className="detail-item">
            <span>Moeda</span>
            <strong>{currencies}</strong>
          </div>

          <div className="detail-item">
            <span>Idiomas</span>
            <strong>{languages}</strong>
          </div>

          <div className="detail-item">
            <span>Fuso horário</span>
            <strong>
              {country.timezones?.join(", ") || "Não informado"}
            </strong>
          </div>

          <div className="detail-item">
            <span>Código telefônico</span>
            <strong>{callingCode}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryModal;