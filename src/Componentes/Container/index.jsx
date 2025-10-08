

export default function Container({ children }) {
  return (
    <div className="max-w-[1200px] m-[0_auto] flex gap-6 flex-nowrap">
      {children}
    </div>
  )
}