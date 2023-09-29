import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction}>
      <thead className={css.thead}>
        <tr className={css.list}>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.list} key={id}>
              <td className={css.item}>{type}</td>
              <td className={css.item}>{amount}</td>
              <td className={css.item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
