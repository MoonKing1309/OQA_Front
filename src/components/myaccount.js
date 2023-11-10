import style from './myaccount.module.css'

function Myaccount(props) {
    return (
        <div className={style.container}>
            <div className={style.details}>
                <h1>Your Details</h1>
                <table id={style.detailsTable}>
                    <tbody>
                        <tr>
                            <td> 
                                <label htmlFor='uname'>
                                    Username
                                </label>
                            </td>
                            <td>
                                <input defaultValue='display name here'>
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='pwd'>
                                    Password
                                </label>
                            </td>
                            <td>
                                <input defaultValue='display password here'>
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button id={style.confirmBtn}>
                                    Confirm
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={style.scores}>
                <h1>
                    Your Scores
                </h1>
                <table className={style.scoreTable}>
                    <tr>
                        <th>Quiz ID</th>
                        <th>Quiz Name</th>
                        <th>Score</th>
                        <th>Time Taken</th>
                        <th>Global Rank</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Elephant</td>
                        <td>10/10</td>
                        <td>2:00</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bear</td>
                        <td>10/10</td>
                        <td>3:00</td>
                        <td>1</td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default Myaccount;