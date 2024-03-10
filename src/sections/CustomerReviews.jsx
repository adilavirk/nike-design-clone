import ReviewCard from "@/components/ReviewCard"
import { reviews } from "@/constants"

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-4xl font-bold text-center"> What Our <span className="text-coral-red">Customers</span> Say?</h3>
            <p className="info-text m-auto max-w-4xl text-center mt-4">Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.</p>
            <div className="flex flex-1 mt-24 text-center max-lg:flex-col gap-14 justify-evenly">
                {reviews.map((review, index) => (
                    <ReviewCard key={index}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback} />
                ))}
            </div>

        </section>
    )
}

export default CustomerReviews