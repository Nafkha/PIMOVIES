import './form.css'

export default function Login() {
  return (
    <form>
        <label>Adresse email</label>
        <br/>
        <input className='form_input' type='email' placeholder="Email"/>
        <br/>
        <label>Mot de passe</label>
        <br/>
        <input className='form_input' type='password' placeholder="Password"/>
        <br/>
        <button className='subButton' type='submit'>Se Connecter</button>
    </form>
  )
}
