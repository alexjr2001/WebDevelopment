import {Link} from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around"> {/**Margin Top, grow-> take all the screen*/}
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="your@email.com"/>
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                </form>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet? <Link className='underline text-bn' to={'/register'}>Register Now</Link>
                </div>
            </div>
        </div> 
    );

}