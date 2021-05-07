import {useRouter} from "next/router";

export default function ComeingSoon(){
    const router = useRouter();
    return <div
        style={{
            backgroundImage:"url(https://res.cloudinary.com/dun9j2psp/image/upload/v1620411702/lsm/home/undraw_under_construction_46pa_sc1gjt.svg)",
            backgroundSize:"cover",
            height:"95vh",
            width:"100%",
            position:"relative",
        }}
    >
        <h1
            style={{
                position:"absolute",
                right:0,
                bottom:0,
                letterSpacing:"5px",
                backgroundColor:"aqua",
                padding:"10px",
                borderRadius:"20px"
            }}
        >COMING SOON
        
        <span
            style={{"display":"block","fontSize":"15px","color":"red","fontWeight":"bold","backgroundColor":"white","textAlign":"center","padding":"10px","borderRadius":"30px","letterSpacing":"1px"}}
        >{router.query.page}</span>
        </h1>
    </div>
}