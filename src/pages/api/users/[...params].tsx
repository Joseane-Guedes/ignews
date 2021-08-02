import { NextApiRequest, NextApiResponse } from 'next';

export default(request: NextApiRequest, response: NextApiResponse) => {
   console.log(request.query)
   
    const users = [
        {id: 1, name: "Josie"},
        {id: 2, name: "Joao"},
        {id: 3, name: "Maria"},
    ]
    return response.json(users)
}
