import Image from "next/image"
import { services } from "@/constants"
import ServiceCard from "@/components/ServiceCard"

const Services = () => {
    return (
        <section className="max-container flex flex-wrap gap-9 justify-center">

            {services.map((service) => (
                <div key={service.label}>
                    <ServiceCard label={service.label} {...service} />

                </div>
            ))}



        </section>
    )
}

export default Services