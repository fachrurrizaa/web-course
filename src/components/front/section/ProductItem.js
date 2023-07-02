import { useRouter } from 'next/navigation';

export default function ProductItem({ id, name, subtitle, thumbnails }) {
    const router = useRouter();

    const handleClick = (id) => {
      router.push(`/product/${id}`)
    }

    return (
      <div onClick={()=>handleClick(id)} className="card w-[397px] h-[375px] bg-slate-50 shadow-xl px-4 pt-4 pb-5 hover:cursor-pointer">
          <figure className="h-[275px]"><img src={ thumbnails } alt="" /></figure>
          <div className="card-body px-0 pt-6 pb-5">
            <h2 className="card-title gap-1 text-black font-semibold">{ name }</h2>
            <p className="text-[#6B7193] font-normal">{ subtitle }</p>
          </div>
        </div>
    )
}