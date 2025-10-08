import logo from "/logo.svg"

export default function Aside() {
  return (
    <aside className="max-w-[282px] bg-neutral-header min-h-[100vh] p-[80px_24px] flex flex-col
    gap-[56px]">
      <img src={logo} />
      <footer className="text-[13px]/[120%] text-neutral-text text-center">Desenvolvido por Leandro. Projeto fictício sem fins comerciais.</footer>
    </aside>
  )
}