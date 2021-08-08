export default function DetailChildren(props) {
    const {title, value} = props
  return (
    <div>
      <h3>{title}</h3>
      <span>{value}</span>
    </div>
  );
}
