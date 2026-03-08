interface HelloTextProps {
    message?: string
    
}

interface HelloNumberProps{
    number?: number
}


export const HelloText = ({ message }: HelloTextProps ) => {
   return <h2>{message}</h2>
}

export const HelloNumber = ({ number }: HelloNumberProps) =>{
    return <h3>{number}</h3>
}



