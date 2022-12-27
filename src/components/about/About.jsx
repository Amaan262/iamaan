import React from 'react'
// import profile2 from '../../assets/image/profile2.png'
const About = () => {
  return (
    <>
    <section className='container' id='about'>
    <h1>About Me</h1>
    <div className="about_info">
      <div className="image">
        <img src="" alt="profile" />
      </div>
      <div className="info">
        <p>Amaan Ahmad</p>
        <p>Full stack Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae labore expedita quis consequuntur doloremque, alias, vitae praesentium, minima delectus molestias provident sequi. Laudantium quibusdam perspiciatis quaerat ex dolores culpa labore natus facere, laboriosam harum consequatur ut, deserunt facilis. Molestias necessitatibus reiciendis enim omnis exercitationem rem neque, id cum mollitia cumque totam asperiores adipisci ea possimus fugit consequuntur minima aliquam dolorum?</p>
        <div className="info__details">
          <div className="email">Email: amaanahmad1601@gmail.com</div>
          <div className="place">Place: Uttarakhand, INDIA</div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default About;