


const Image =({url,className})=>{
return (
    <div className={className} style={{background:`url(${url})no-repeat center center/cover`}}></div>
)
}

export default Image;