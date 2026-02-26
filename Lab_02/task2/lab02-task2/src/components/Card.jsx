export default function Card({ title, children, className = "" }) {
  const classes = `card ${className}`.trim();

  return (
    <article className={classes}>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}