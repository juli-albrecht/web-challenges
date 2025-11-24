import { getProductById} from "@/services/productServices";

export default function handler(request, response) {
    response.statusCode = 200;
    const { id } = request.query;
    const singleProduct = getProductById(id);
    response.json(singleProduct)
}