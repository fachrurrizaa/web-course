export default function Button({ content, className }) {
  return (
    <button className={`btn outline-none border-none rounded-full ${className}`}>{content}</button>
  )
}
