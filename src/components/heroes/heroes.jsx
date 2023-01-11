import { AttrFilters } from "../attr-filters/attr-filters";
import { RoleFilters } from "../role-filters/role-filters";
import { Hero } from "../hero/hero";

import "./heroes.css";

export const Heroes = () => {
  return (
    <div className="heroes-container">
      <div className="filters">
        <AttrFilters />
        <RoleFilters />
      </div>

      {/* Render the heroes here */}
      <ul className="heroes">
        <li className="heroes-list-item">
          <Hero />
        </li>

        <li className="heroes-list-item">
          <Hero />
        </li>

        <li className="heroes-list-item">
          <Hero />
        </li>
      </ul>
    </div>
  );
};
