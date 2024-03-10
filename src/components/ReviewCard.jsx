import Image from 'next/image'
import { star } from "../../public/assets/icons"


const ReviewCard = ({ imgURL, customerName, feedback, rating, }) => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <Image src={imgURL} alt={`${customerName}'s image`} width={120} height={120} className='rounded-full object-cover' />
            <p className='info-text text-4xl mt-6 max-w-sm text-center'>{feedback}</p>
            <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <Image src={star} alt="rating icon" width={24} height={24} className='object-contain m-0' />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>

            </div>
            <h3 className=' mt-1 text-3xl text-center font-palanquin font-bold'>{customerName}</h3>

        </section>
    )
}

export default ReviewCard