import classNames from "classnames"

export default function Post(props){
    const {category,img,title,content} = props.data
    return (
        <article className="duration-300 m-3 p-5 md:px-7 h-fit w-auto bg-white bg-opacity-5 hover:bg-opacity-30 hover:-mt-1 hover:mb-2 hover:shadow-lg cursor-pointer rounded-xl shadow-lg ">
            <div className={classNames("ml-7 my-2 px-1 font-bold text-lg inline-flex rounded-lg shadow-sm ",
            {'text-green-500': category === 'BİYOLOJİ'},
            {'text-blue-500': category === 'FİZİK'},
            {'text-red-500': category === 'KİMYA'},
            )}>
                {category}
            </div>
            <div className="bg-white h-auto overflow-hidden rounded-2xl">
                <img src={`img/dummy-posts/${img}`} alt={title} />
            </div>
            <div className=" my-2 font-bold">
                {title}
            </div>
            <div className="indent-5 line-clamp-5 my-2 text-sm sm:text-base mb-5">
                {content}
            </div>
                <a className="underline ml-1">Devamı...</a>
        </article>
    )
}