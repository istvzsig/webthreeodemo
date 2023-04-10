export default function ServiceCard({color, title, subtitle, icon}) {
    return (
        <div className="flex flex-col justify-start item-start white-glassmorphism p-5 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>    
            <h2 className="text-xl">{title || "Missing text"}</h2>
            <p className="font-light">{subtitle || "Missing text"}</p>
        </div>
    )
}
