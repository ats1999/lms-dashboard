import Footer from "@components/layout/Footer";

export default function DefaultDrawer({children}){
    return <div
            style={{
                padding:"10px",
                // backgroundImage:"url(https://res.cloudinary.com/dun9j2psp/image/upload/v1618456782/the-stack-master/home/watercolor-4629342_640_uqu5cb.png)",
                // backgroundRepeat:"no-repeat",
                height:"100vh",
                marginTop:'50px',
                marginBottom:"50px"
            }}
        >
        {children}
        <Footer/>
    </div>
}