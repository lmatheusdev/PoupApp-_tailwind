
export function Button({ children }) {
  return (
    <button className="
      bg-transparent 
      cursor-pointer hover:opacity-80
      text-neutral-text text-[16px]/[120%] 
      flex items-center justify-center gap-2
      border border-neutral-text rounded-3xl
      p-[3px_6px]
    ">
      {children}
    </button>
  )
}