function RegionFilter({ value, onChange }) {
  return (
    <select
      className="region-filter"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">Todas as regiões</option>
      <option value="Africa">África</option>
      <option value="Americas">Américas</option>
      <option value="Asia">Ásia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctic">Antártida</option>
    </select>
  );
}

export default RegionFilter;