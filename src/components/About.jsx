import image3 from './images/pexels-fotoaibe-1571460.jpg'


function About(){
    return(
        <div>
            <div className='about1'>
                <h1>the company</h1>
            </div>
            <div className='about2'>
                <h2>Creating luxury interiors that will stand the test of time…</h2>
                <p>At Layla interiors we offer a highly personalized design service for all our clients. Our passion lies in creating interior design that is tailored to encompass the clients lifestyle and comfort.  All aspect of the project is managed by the team from concept to completion providing a seamless services to all our clients.</p>
            </div>
            <div className='about3'>
                <div>
                    <h3>Our Story</h3>
                    <p>Layla Interiors was founded in Sweden and has developed into a successful design studio over the years.  From a young age Layla was always inspired to create beautiful spaces. Her experience came from working with private clients on various projects leading to the launch of her own studio to cater the growing demand for her services. Today Layla interiors is working with high end developers and state of the art projects in East Africa and Scandinavia.  Laylas vision is to bring mordern, contemporary and luxurious interior design to East Africa. </p>
                </div>
                <div>
                    <div>
                        <img src={image3} alt='about image' />
                        <img src={image3} alt='about image' />
                    </div>
                    <img src={image3} alt='about image' />
                </div>
            </div>
            <div className='about4'>
                <div>
                    <h3>Our Team</h3>
                    <p>We take pride in offering a high class team that are ambitious and detailed oriented. Our team consists of experienced and talented designers, interior architects and project coordinators. We provide a comprehensive service that allows us to undertake and seamlessly deliver ambitious and prestigious design projects. At Layla inteirors we have assembled a team of qualified contractors, suppliers and artisans to meet our clients expectations with precision, quality and care.</p>
                </div>
                <img src={image3} alt='about image' />
            </div>
        </div>
    )
}


export default About

