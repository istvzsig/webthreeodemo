export default function ServiceCard({color, title, subtitle, icon}) {
    return (
        <div className="flex flex-col justify-start item-start white-glassmorphism p-5 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-55 h-55 rounded-full flex justify-center self-center ${color} my-[5vh]`}>{icon}</div>    
            <h2 className="text-center text-3xl mb-[2.5vh]">{title || "Missing text"}</h2>
            <p className="text-center font-light mb-[5vh]">{subtitle || "Missing text"}</p>
        </div>
    )
}
