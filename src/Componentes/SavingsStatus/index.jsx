import { IconSavings } from "../Icons"
import ProgressBar from "../ProgressBar"

export default function SavingsStatus() {

  return (
    <div className="flex flex-col gap-10">
      <p className="text-[20px]/[125%] text-secondary-income flex items-center justify-center gap-2">
        <IconSavings/> economizar
      </p>
      <ProgressBar percentage={50}/>
    </div>
  )
}