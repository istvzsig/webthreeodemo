import ServiceCard from './ServiceCard';
import {BsShieldFillCheck} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeart2Fill} from 'react-icons/ri';

export default function Services() {
    const services = [
        {color: 'black', title:'title-1', subtitle:'subtitle-1', icon:<BsShieldFillCheck fontSize={28} color={"red"}/>},
        {color: 'black', title:'title-2', subtitle:'subtitle-2', icon:<BiSearchAlt fontSize={28} color={"red"}/>},
        {color: 'black', title:'title-3', subtitle:'subtitle-3', icon:<RiHeart2Fill fontSize={28} color={"red"}/>},
    ];
    return (
        <div className="flex w-full justify-center items-center bg-[#522ec7] mt-[120px]">
            <div className="flex md:flex-row flex-col items-center justify-between md:p-20 px-4 py-12">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-5xl text-center md:text-left font-light pb-[2vh]">Services</h1>
                </div>
            </div>
            <div className="service-cards flex-1 flex flex-col justify-start items-center">
                {services.map((service, i) =>
                    <ServiceCard
                        key={i}
                        color={service.color}
                        title={service.title}
                        subtitle={service.subtitle}
                        icon={service.icon}
                    />)}
            </div>
        </div>
    )
}