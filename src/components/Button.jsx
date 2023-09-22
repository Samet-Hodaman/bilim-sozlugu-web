import { Button } from "@mui/material"
export default function Buttons(props) {
    return (
        <Button
        name={props.name}
        type={props.type}
        onClick={props.onClick}
        variant="contained"
        >
            {props.children}
        </Button>
    )
}