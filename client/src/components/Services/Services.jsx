import ServiceCard from './ServiceCard';
import {serviceList} from './serviceList';

export default function Services() {
    return (
        <div className="flex flex-col w-full justify-center items-center bg-[#111] mt-[120px] py-[15vh]">
            <h1 className="text-5xl text-left md:text-left font-light pb-[5vh]">Services</h1>
            <div className="service-cards max-w-[50vw] flex-1 flex flex-col justify-start items-center">
                {
                    serviceList.map((service, i) =>
                    <ServiceCard
                        key={i}
                        color={service.color}
                        title={service.title}
                        subtitle={service.subtitle}
                        icon={service.icon}
                    />)
                }
            </div>
        </div>
    )
}