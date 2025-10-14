
export default function Section({ children }) {
  return (
    <section className="grid grid-cols-2 items-stretch gap-6">
      {children}
    </section>
  )
}