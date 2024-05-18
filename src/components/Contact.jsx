

function Contact(){
    return(
        <div>
            <div>
                <h1>contact us</h1>
            </div>
            <div>
                <div>
                    <h3>Contact us</h3>
                    <p>Interested in working with us? Our team are always happy to receive enquiries of potential projects. Layla Interiors is stationed in Nairobi Kenya and Stockholm Sweden but we work on projects globally.</p>
                </div>
                <div>
                    <form>
                        <div>
                            <label>first name
                                <input type="text" />
                            </label>
                            <label>last name
                                <input type="text" />
                            </label>
                        </div>
                        <label>email
                            <input type="email" />
                        </label>
                        <label>message
                            <textarea type='text' />
                        </label>
                        <button type="submit" >send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact


