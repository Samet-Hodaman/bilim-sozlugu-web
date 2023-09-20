export default function Button(props) {
    return (
        <button
        name={props.name}
        type={props.type}
        onClick={props.onClick}
        className="p-2 px-2 md:px-4 md:p-2.5 bg-blue-500 rounded-xl text-white text-sm md:text-base ">
            {props.children}
        </button>
    )
}