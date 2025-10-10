
export default function Section({ children }) {
  return (
    <section className="flex gap-6 justify-between flex-wrap">
      {children}
    </section>
  )
}