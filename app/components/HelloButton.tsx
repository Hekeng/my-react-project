interface ButtonTextProps {
  buton_text: string
  onClick: () => void
}

export const ButtonText = ({ buton_text, onClick }: ButtonTextProps) => {

  return <button onClick={onClick}>{buton_text}</button>
  
}