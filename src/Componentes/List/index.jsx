
export const List = ({ children, ...props }) => { 
return ( 
  <ul className="p-0 m-0 list-none mb-12"{...props}> 
    {children} 
  </ul> 
)} 