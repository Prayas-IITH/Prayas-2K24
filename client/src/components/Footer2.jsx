import bar from "../../public/Bar.png";
function Footer () {
    return (
        <div className="flex flex-col">
            <div className="text-xl font-bold mx-auto font-montserrat">
                Contact Us : 
            </div>
            <div className="flex mx-auto gap-12">
                <div className="flex flex-col text-center">
                    <span>Name</span>
                    <span>Lorem Ipsum</span>
                    <span>+91 8888888888</span>
                </div>
                <img src={bar} alt="bar" className="h-24"/>
                <div className="flex flex-col text-center">
                    <span>Name</span>
                    <span>Lorem Ipsum</span>
                    <span>+91 8888888888</span>
                </div>
                <img src={bar} alt="bar" className="h-24"/>
                <div className="flex flex-col text-center">
                    <span>Name</span>
                    <span>Lorem Ipsum</span>
                    <span>+91 8888888888</span>
                </div>
            </div>
        </div>
    )
}

export default Footer