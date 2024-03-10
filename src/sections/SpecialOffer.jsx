import Button from "@/components/Button"
import { arrowRight } from "../../public/assets/icons"
import Image from "next/image"
import { offer } from "../../public/assets/images"

const SpecialOffer = () => {
    return (
        <section className="flex justify-between items-center flex-wrap max-xl:flex-col gap-10">
            <div className='flex flex-1 flex-col'>
                <h1 className="text-4xl font-palanquin font-bold"><span className="text-coral-red">Speacial </span>Offer</h1>
                <p className="mt-4 info-text"> Embark on a shopping journey that redefines your experience with
                    unbeatable deals. From premier selections to incredible savings, we
                    offer unparalleled value that sets us apart.</p>
                <p className="mt-6 info-text">Navigate a realm of possibilities designed to fulfill your unique
                    desires, surpassing the loftiest expectations. Your journey with us is
                    nothing short of exceptional.</p>
                <div className="flex flex-wrap gap-4 mt-11">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button label="Learn more"
                        backgroundColor='bg-white'
                        textColor='text-slate-gray'
                        borderColor='border-slate-gray' />

                </div>
            </div>

            <div className="flex-1">
                <Image src={offer}
                    alt='Shoe Promotion'
                    width={773}
                    height={687}
                    className='object-contain w-full' />
            </div>
        </section>
    )
}

export default SpecialOffer