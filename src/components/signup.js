import "./form.css";

function Signup() {
    return (  
        <div className='content'>
            <div className='formbox'>
                <h1>Signup</h1>
                <form>
                    <table>
                        <tr>
                            <td><label for='uname'><b>Username</b></label></td>
                            <td><input name='uname'></input></td>
                        </tr>
                        <tr>
                            <td><label for='pwd'><b>Password</b></label></td>
                            <td><input name='pwd'></input></td>
                        </tr>
                        <tr>
                            <td><label for='rpwd'><b>Confirm Password</b></label></td>
                            <td><input name='rpwd'></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button id='btn' type='submit'>Signup</button></td>
                        </tr>

                    </table>
                </form>
            </div>
            
            

        </div>
    )
}

export default Signup ;