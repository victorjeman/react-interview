import "./role-filters.css";

export const RoleFilters = () => {
  function filterByRole(event) {
    console.log("is checked ", event.target.checked);
  }

  return (
    <ul className="role-filters">
      <li className="role-filters-item">
        <label className="role-filters-label">
          "Carry"
          <input
            className="role-filters-input"
            type="checkbox"
            onChange={filterByRole}
          />
        </label>
      </li>

      <li className="role-filters-item">
        <label className="role-filters-label">
          "Support"
          <input className="role-filters-input" type="checkbox" />
        </label>
      </li>

      <li className="role-filters-item">
        <label className="role-filters-label">
          "Durable"
          <input className="role-filters-input" type="checkbox" />
        </label>
      </li>

      <li className="role-filters-item">
        <label className="role-filters-label">
          "Disabler"
          <input className="role-filters-input" type="checkbox" />
        </label>
      </li>
    </ul>
  );
};
