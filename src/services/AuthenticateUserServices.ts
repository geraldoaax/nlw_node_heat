import axios from "axios";
//Receber o Code(String) V
//Recuperar o Acess_Token no github V
//recuperar infos do usuario V
//verificar se o usuario existencia -- SIM Gera um token, se não criar no BD e gera o toket
//Retorna o Token com as infos do usuário logado

interface IAcessTokenResponse {
    access_token: string;
}

interface IUserResponse {
    avatar_url: string;
    login: string;
    id: number;
    name: string;
}

class AuthenticateUserServices {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const { data: acessTokenResponse } = await axios.post<IAcessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            }, headers: {
                "Accept": "application/json"
            }
        })

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${acessTokenResponse.access_token}`
            }
        })

        return response.data;
    };
}

export { AuthenticateUserServices }