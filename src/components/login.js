import './form.css'

export default function Login(){
    return(
        <div className='content'>
            <div className='formbox'>
                <h1>Login</h1>
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
                            <td colSpan={2}><button id='btn' type='submit'>Login</button></td>
                        </tr>

                    </table>
                </form>
            </div>
            
            

        </div>
    )
}