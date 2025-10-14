

export default function ProgressBar({ percentage }) {
  return (
    <div className="w-full bg-neutral-darker rounded-lg overflow-hidden h-[40px]"> 
      <div
        className="
        bg-primary-highlight 
        text-neutral-darker 
        font-bold
        h-[40px]
        text-[16px]/[120%]
        flex items-center justify-center
        transition-all
        duration-300
        ease-in-out
        "
        style={{width: `${percentage}%`}}
      > {percentage}%</div>
    </div>
  )
}