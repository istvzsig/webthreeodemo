export default function Notification(props) {
    return (
        <div className="notification z-1000 position-fixed top-[50vh] left-0 bg-white max-w-[300px] text-[#222]">
            <h2 className="font-semibold">{props.h2}</h2>
        </div>
    )
}