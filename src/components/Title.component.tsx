export default function Title(props: { title: string }) {
  const { title } = props
  return <h1 className="items-center">{title}</h1>
}