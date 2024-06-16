export default function TransactionHistory({ items }) {
    return (<>
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => {
            // const classTable = clsx(css.colorTable, {
            //   [css.invoice]: type === "invoice",
            //   [css.payment]: type === "payment",
            //   [css.withdrawal]: type === "withdrawal",
            //   [css.deposit]: type === "deposit",
            // });
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
  </tbody>
</table>
</>
)
}