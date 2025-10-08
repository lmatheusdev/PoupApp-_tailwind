const TAGS = {
  h1: "h1",
  h2: "h2",
  p: "p",
  span: "span"
}

export default function Typography({ variant, children }) {

  const Component = TAGS[variant] || "p"
  const variantStyle = styles[variant] || styles.p
  return (
    <Component className={variantStyle}>
      {children}
    </Component>
    
  )
}