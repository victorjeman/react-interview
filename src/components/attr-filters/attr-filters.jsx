import "./attr-filters.css";

export const AttrFilters = () => {
  return (
    <ul className="atr-filters">
      <li className="atr-filters-item">
        <button className="atr-filters-button">Int</button>
      </li>

      <li className="atr-filters-item">
        <button className="atr-filters-button">Agi</button>
      </li>

      <li className="atr-filters-item">
        <button className="atr-filters-button">Str</button>
      </li>
    </ul>
  );
};
