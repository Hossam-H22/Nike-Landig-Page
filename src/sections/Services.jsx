
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../constants/index.js";


export default function Services() {
    return <>
        <section
            id=""
            className="max-container flex justify-center flex-wrap gap-9"
        >
            { services.map(service => <ServiceCard key={service.label} {...service} /> ) }


        </section>

    </>
}
