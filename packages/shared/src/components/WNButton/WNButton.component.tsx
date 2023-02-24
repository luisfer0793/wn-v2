import {FC} from "react";

interface WNButtonProps {
  label: string
}

const WNButton: FC<WNButtonProps> = ({label}) => {
  return <button onClick={() => {console.log('Hello')}}>{label}</button>
}

export default WNButton