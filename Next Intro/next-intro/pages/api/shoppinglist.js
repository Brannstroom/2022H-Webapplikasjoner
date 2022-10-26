import { shoppingList } from "../../data/shoppinglist";

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(shoppingList);
    } else if(req.method === 'POST') {
        const { name, quantity } = req.body;
        shoppingList.push({ name, quantity });
        res.status(200).json(shoppingList);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}