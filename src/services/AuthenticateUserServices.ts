import axios from "axios";
//Receber o Code(String)
//Recuperar o Acess_Token no github
//verificar se o usuario existencia -- SIM Gera um token, se não criar no BD e gera o toket
//Retorna o Token com as infos do usuário logado

class AuthenticateUserServices {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/acess_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            }, headers: {
                "Accept": "application/json"
            }
        })
        return response.data;
    };
}

export { AuthenticateUserServices }