export default function Button({ content, className, click }) {
  return (
    <button className={`btn outline-none border-none rounded-full ${className}`} onClick={click}>{content}</button>
  )
}
