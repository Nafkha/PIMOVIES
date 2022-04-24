import './form.css'

export default function Login() {
  return (
    <form>
        <label>Nom</label>
        <br/>
        <input className='form_input' type='text' placeholder="Email"/>
        <br/>

        <label>Prénom</label>
        <br/>
        <input className='form_input' type='email' placeholder="Email"/>
        <br/>

        <label>Email</label>
        <br/>
        <input className='form_input' type='email' placeholder="Email"/>
        <br/>
        <label>Mot de passe</label>
        <br/>
        <input className='form_input' type='password' placeholder="Password"/>
        <br/>

        <label>Repeter mot de passe</label>
        <br/>
        <input className='form_input' type='password' placeholder="Password"/>
        <br/>
        <button className='subButton' type='submit'>Se Connecter</button>
    </form>
  )
}
