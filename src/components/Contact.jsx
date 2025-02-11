

function Contact(){
    return(
        <div className="contact">
            <div className="contact1">
                <h1>contact us</h1>
            </div>
            <div className="contact2">
                <div className="contact2_1">
                    <h3>Contact us</h3>
                    <p>Interested in working with us? Our team are always happy to receive enquiries of potential projects. Layla Interiors is stationed in Nairobi Kenya and Stockholm Sweden but we work on projects globally.</p>
                </div>
                <form className="contact2_2">
                    <p>Name <span>(required)</span></p>
                    <div className="contact2_3">
                        <label className="pd">First Name
                            <input type="text" />
                        </label>
                        <label>Last Name
                            <input type="text" />
                        </label>
                    </div>
                    <label className="mgn">Email
                        <input type="email" />
                    </label>
                    <label className="mgn">Message
                        <textarea type='text' />
                    </label>
                    <button className="mgn" type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}


export default Contact


