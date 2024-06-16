import { Button, Carousel, Card } from 'react-bootstrap';
// import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/control/ProductCard';

import Promotion1 from '../../assets/images/Promotion1.jpg';
import Promotion2 from '../../assets/images/Promotion2.jpg';
import Promotion3 from '../../assets/images/Promotion3.jpg';



const HomePage = () => {
  // const { isAuthenticated } = useAuth();

  function ExampleCarousel () {
    return (
      <Carousel
          indicators={false}
          nextIcon={<FontAwesomeIcon icon={faAngleRight} size='2x' color='grey' />}
          prevIcon={<FontAwesomeIcon icon={faAngleLeft} size='2x' color='grey' />}>
          <Carousel.Item interval={1000}>
            <img src={Promotion1} className='d-block w-100 carousel-image' alt='promotion1' />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={Promotion2} className='d-block w-100 carousel-image' alt='promotion2' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={Promotion3} className='d-block w-100 carousel-image' alt='promotion3' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
  }


  
  return (
    <div id='promotion'>
      <ExampleCarousel />
      <div id='top-seller'>
          <div className='border-bottom w-100 d-flex align-items-center'>
            <span>Top Seller</span>
            <Link to='/products?category=top-sell' className='btn btn-outline-link ms-auto'>View all</Link>
          </div>
          <div className='d-flex gap-4 p-3 flex-wrap'>
            <>
              {
                  //loop array
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((p, i) => {
                  return (
                    <ProductCard key={i} 
                      productName={`Product ${p}`} 
                      productId={p} description={`description ${p}`}
                      category={`Category ${p}`} 
                      imageUrl=''/>
                  )
                })
              }
            </>
          </div>


        </div>
        <div id='most-recent'>
          <div className='border-bottom w-100 d-flex align-items-center'>
            <span>Most Recent</span>
            <Link to='/products?category=top-sell' className='btn btn-outline-link ms-auto'>View all</Link>
          </div>
          <div className='d-flex gap-4 p-3 flex-wrap'>
            <>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((p, i) => {
                  return (
                    <ProductCard key={i} 
                      productName={`Product ${p}`} 
                      productId={p} description={`description ${p}`}
                      category={`Category ${p}`} 
                      imageUrl=''/>
                  )
                })
              }
            </>
          </div>


        </div>
    </div>
  );
};

export default HomePage;
