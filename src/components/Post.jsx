import classNames from "classnames"

export default function Post(props){
    const {category,img,title,content} = props.data
    return (
        <article className="duration-300 p-2.5 border border-[#6e98ba] sm:p-5 h-fit w-auto bg-white bg-opacity-5 cursor-pointer rounded-xl shadow-lg hover:bg-opacity-40 hover:-mt-2 hover:mb-2 hover:shadow-xl ">
            <div className={classNames("ml-7 my-2 px-1 font-bold text-lg inline-flex rounded-lg shadow-sm ",
            {'text-green-500': category === 'BİYOLOJİ'},
            {'text-blue-500': category === 'FİZİK'},
            {'text-red-500': category === 'KİMYA'},
            )}>
                {category}
            </div>
            <div className="bg-white h-60 bg-zinc-900 overflow-hidden rounded-2xl">
                <img src={`img/dummy-posts/${img}`} alt={title} />
            </div>
            <div className={classNames('my-2 font-bold ',
            {'text-green-500': category === 'BİYOLOJİ'},
            {'text-blue-500': category === 'FİZİK'},
            {'text-red-500': category === 'KİMYA'},
            )}>
                {title}
            </div>
            <div className="primary word-wrap indent-5 line-clamp-5 my-2 text-sm sm:text-base mb-5">
                {content}
            </div>
                <a className="underline ml-1">Devamı...</a>
        </article>
    )
}