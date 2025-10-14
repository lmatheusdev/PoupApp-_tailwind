
export const ListItem = ({ children, ...props }) => { 
return ( 
  <li className="border-b border-neutral-header p-4 m-4" {...props}> 
    {children} 
  </li> 
) 
} 