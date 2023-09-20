export default function InputBox({handleChange,title,type,name,value}){
    return (<div className="flex flex-row justify-between p-2">
    <h2 className="text-lg font-semibold mx-4">
        {title}
    </h2>
    <input 
        type={type || "text"}
        name={name || "undefined"}
        value={value}
        onChange={(e) => handleChange(e)} 
        className="rounded w-[13rem]"
        required
        />
    </div>)
}