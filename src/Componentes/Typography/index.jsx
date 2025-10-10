const TAGS = {
  h1: "h1",
  h2: "h2",
  p: "p",
  span: "span"
}

const variantClass = {
  h1: "m-0 text-[31px]/[120%] font-bold text-neutral-text",
  h2: "m-0 text-neutral-text",
  p: "m-0 text-[16px]/[120%] text-neutral-text",
  span: "m-0 text-neutral-text"
}

export default function Typography({ variant, children }) {

  const Component = TAGS[variant] || TAGS.p
  const className = variantClass[variant] || variantClass.p
  return (
    <Component className={className}>
      {children}
    </Component>
    
  )
}