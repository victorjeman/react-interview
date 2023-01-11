import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <h3 className="hero-name">Hero name</h3>

      <p className="hero-primary-attr">primary attribute</p>

      <ul className="hero-roles">
        <li className="hero-role">role 1</li>
        <li>role 2</li>
      </ul>
    </div>
  );
};
