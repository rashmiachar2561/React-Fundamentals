import "./ProductCard.css";
import Shinchan from '../../images/shinchan.jpg';



function ProductCard({ title, desc, imageUrl }) {

    //destructuring
    // let {title, desc} = props;

    return (
        <div className="product-card">
            <h1 className="heading">{title}</h1>
            <div className="image-container">
                <img src={imageUrl} width={"100px"} />
            </div>

            {/* <img src='images/shinchan.jpg' width={"100px"}/> */}
            <p>{desc}</p>
            <p></p>
        </div>
    )
}

export default ProductCard;