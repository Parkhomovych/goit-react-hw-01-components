import css from './Statistics.module.css';
export const Statistics = ({ statistics }) => {
  return (
    <section className={css.statistics}>
      {statistics.title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css.stat}>
        {statistics.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <li
              style={{ backgroundColor: color }}
              className={css.item}
              key={id}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
