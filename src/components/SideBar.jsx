import {contactMe} from '../constants'


const SideBar = () => {
  return (
    <div style={{

        alignItems: 'center',
        zIndex:"500",
        position: "fixed",
        marginTop: "50vh",
        marginLeft: "5px"
    }}>
        {contactMe.map((item, index) => (
            <div 
            key={`contact-${index}`}
            onClick={() => window.open(item.link, "_blank")}
            className="cursor-pointer"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: "10px",
                height: "40px",
                width: "40px",
                backgroundColor: "#1d1836",
                borderRadius: "30%",
            }}
            >
                <img
                src={item.icon}
                alt={item.name}
                />
            </div>
        ))}
    </div>
  )
}

export default SideBar