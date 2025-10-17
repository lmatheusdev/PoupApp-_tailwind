
export const ListItem = ({ children, ...props }) => { 
return ( 
  <li 
    className="
      border-b border-neutral-header p-4 m-4
      pb-4 mb-4 last:border-none last:pb-0 last:mb-0
      "
    {...props}> 
    {children} 
  </li> 
) 
} 