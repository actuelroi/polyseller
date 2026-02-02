interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return (
    <h1 className="text-2xl font-semibold">
      {title}
    </h1>
  )
}

export default Title
