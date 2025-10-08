import { IconSearch } from "../Icons"


export default function SearchInput(props) {
  return(
    <div className="w-full bg-neutral-header rounded-lg p-[12px_16px] flex items-center 
      gap-4"> 
      <IconSearch/>
      <input {...props} className="text-[20px]/[125%] text-neutral-text flex-1" 
        placeholder="Procure seu dinheiro"/>
    </div>
  )
}