import ClickBox from "../box-appear/ClickAppear"
import ContactPresento from "./Contact"
export  default function ContactPresent({onClose}){
    return(
        <ClickBox component={ContactPresento} onClose={onClose} />
    )
}