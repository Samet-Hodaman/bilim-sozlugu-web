export default function Comment({ children, name, date}){
  return (
    <div className="flex flex-col p-5 rounded-3xl bg-white w-full my-5">
      <div className="w-30 text-lg text-red-500 font-bold">
        <p>{name || 'No name'}</p>
      </div>
      <div>
        <p className="flex indent-5 p-1 text-base">
          {children || 'No comment'}
        </p>
      </div>
      <div className="flex justify-end font-semibold mr-3">
        {date || '11/02/2002'}
      </div>
    </div>
  )
}