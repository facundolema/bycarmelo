import style from './catalog.module.scss'

export default function Catalog() {
    return (
        <div>
            <div className={`${style.container}
            grid gap-4 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-h-[45rem] overflow-x-auto relative`}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((n, i) => 
                        <div key={i} className="bg-grey-100 border border-grey-900 border-r-[3px] border-b-[3px] rounded-lg aspect-[4/3] w-full" />
                    )
                }
            <div className={style.overlay} />
            </div>
        </div>
    )
}