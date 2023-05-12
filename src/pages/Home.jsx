import deliveryService from '@/assets/delivery-photo.png'
import logo from '@/assets/SHIPPED-LOGO.png'

const Home = () => {
  return (
    <>
      <main className='home'>
        <div className='home__welcome'>
          <div className='welcome__container'>
            <article className='welcome__article'>
              <p>Welcome to</p>
              <h1>SHIPPED</h1>
            </article>
            <button className='welcome__btn-shop'>
              GO SHOP!
            </button>
          </div>
          <div>
            <img src={deliveryService} alt='' className='welcome__img' />
          </div>
        </div>
        <div className='home__slogan'>
          <article className='slogan__subtitle'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem reiciendis eos quibusdam!</p>
          </article>
        </div>
      </main>
      <footer className='hidden'>
        <div>QuickLinks</div>
        <div>LOGO</div>
        <div>SocialMedia</div>
      </footer>
    </>
  )
}

export default Home
