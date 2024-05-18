import image3 from './images/pexels-fotoaibe-1571460.jpg'

function Service(){
    return(
        <div className='service'>
            <div className='service1'>
                <h1>our services</h1>
            </div>
            <div className='service2'>
                <div className='service3'>
                    <img className='service-images' src={image3} alt='image3' />
                    <div>
                        <h3>FF&E Design</h3>
                        <p>The FF&E team works on the furnishing and styling phase of a project, by providing our clients with bespoke furniture design, lightning, artwork, decor and selection of fabric schemes.</p>
                    </div>
                </div>
                <div className='service3'>
                    <div>
                        <h3>Interior Architecture</h3>
                        <p>Our interior architects  produce all detail drawings and documentation. All interior architectural elements are handled in house from space planning, kitchen and bathroom.</p>
                    </div>                    
                    <img className='service-images' src={image3} alt='image3' />
                </div>
                <div className='service3'>
                    <img className='service-images' src={image3} alt='image3' />
                    <div>
                        <h3>Project Management</h3>
                        <p>Our team will monitor the progress of all design elements on site to ensure that the design is being implemented correctly, We manage all regular site visits and coordination with all subcontractors.</p>
                    </div>                
                </div>
                <div className='service3'>
                    <img className='service-images' src={image3} alt='image3' />
                    <div>
                        <h3>Procurement</h3>
                        <p>The procurement team handles all aspects of the FF&E delivery from design phase to detailed budgets and all procurement processing. We coordinate all aspects of shipments and final installation on site before completion.</p>
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default Service

