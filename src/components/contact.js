import './contact.css'

function Contact(){ 

 
    return(
        <div className="content">
            <h2 style={{color:'blueviolet' , fontWeight:'900'}}>Send us a Message</h2>

            <form action='mailto:conorken1@gmail.com' method="post" enctype="text/plain">
                <table id='tableContact'>
                    <tr>
                        <td><label for='name'>Name:</label></td>
                        <td><input type="text" name="name"/>  </td>
                    </tr>
                    <tr>
                        <td><label for='email'>Email:</label></td>
                        <td><input type="text" name="mail"/></td>
                    </tr>
                    <tr>
                        <td><label for='comment'>Message:</label></td>
                        <td><textarea type="text" name="comment"/></td>
                    </tr>
                </table>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;