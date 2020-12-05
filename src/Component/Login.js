

const Login = () => {
    return (
        <form>
            <div>
                <label for="username"> Username: </label>
                <input type= "text" id="username" required/>
            </div>
            <div>
                <label for="password"> Password: </label>
                <input type="password" id="password" required/>
            </div>
            <div>
                <label for="ID"> ID: </label>
                <input type="text" id="ID" required/>
            </div>
            <div>
                <label for="name"> Name: </label>
                <input type="text" id="name" required/>
            </div>
            <div>
                <label for="phone"> Phone: </label>
                <input type="text" id="phone" required maxLength="10"/>
            </div>
            <div>
                <label for="adress"> Adress: </label>
                <input type="text" id="adress" required/>
            </div>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default Login