export async function GET() {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=10",
            {
                cache: "no-store",
            }
        );

        if(!response?.ok) {
            return Response?.json(
                {
                    message: "Failed to fetch"
                }
            )
        }

        const data = await response?.json();

        return Response?.json(data);
    } catch (error) {
        return Response?.json({
            message: 'error'
        })
    }
}