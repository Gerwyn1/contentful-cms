import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia sunt velit nam. Aliquam error, consectetur blanditiis ea rerum, quas voluptatibus accusamus ratione debitis excepturi nobis quod amet totam tempore nihil in tenetur! Soluta explicabo expedita vero perspiciatis sed vitae.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className='img'/>
        </div>
      </div>
    </section>
  )
}
export default Hero