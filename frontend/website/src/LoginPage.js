import {useRef} from "react";

function LoginPage() {
  const email =useRef("")
  const password = useRef("")
  function submitLogin(e){
      e.preventDefault();
      console.log(email.current.value)
      console.log(password.current.value)
  }
  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit = {submitLogin}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input ref={email} type="email" className="form-control" 
        id="floatingInput" placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input ref={password} type="password" className="form-control" 
        id="floatingPassword" placeholder="Password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </>
  );
}

export default LoginPage;