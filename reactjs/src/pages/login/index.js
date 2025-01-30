import React, {useState} from 'react';

import api from '../../services/api'

   
const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''

    });

    const login = async () => {
        try {

            const response = await api.post('/api/usuario/login', credenciais)

            const res = response.data

            if (res.error) {
                alert(res.message)
                    return false;
            
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario))
            window.location.reload();

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="container-fluid bg_index" style={{height: "100%", position: "fixed"}} >
            <div className="row">
                <img className="logo" src= {require("../../assets/logo.png")} alt="Logo"/>
            </div>

            <div id="caixadelogin" className="col-4 offset-4">
                <h1 className="text-white">Entrar</h1>
                <br/>
                <>
                    <input type="email" 
                    className="form-control form-control-lg" 
                    placeholder="E-mail ou número de telefone"
                    onChange={(e) => setCredenciais({
                        ...credenciais,
                        email: e.target.value
                    }) }
                    />
                    <br/>
                    <input type="password" className="form-control form-control-lg" placeholder="Senha"
                     onChange={(e) => setCredenciais({
                        ...credenciais,
                        senha: e.target.value
                    }) }
                    />
                    <br/>
                    <div className="d-grid gap-2">
                        <button className="btn btn-danger btn-lg" type="button" onClick={login}>Entrar</button>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col text-light" id="lembra">
                            <input type="checkbox" id="lembrar" defaultChecked/>
                            <label htmlFor="lembrar"> Lembrar de mim.</label>
                        </div>
                        <div className="col text-end" id="ajuda">
                            <a href="#" className="text-light">Precisa de ajuda?</a>
                        </div>
                    </div>
                    <p className="text-light">
                        <input type="image" src={require("../../assets/insta.png")} height="15px" width="15px" alt="Instagram Login"/> Entre pelo Instagram
                    </p>
                    <br/>
                </>
            </div>
        </div>
    );
};


export default Login;