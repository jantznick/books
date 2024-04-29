export const getGoogleData = async (isbn: string) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${process.env.GOOGLEBOOKSTOKEN}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                }
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.log('fetch error')
        console.log(error)
    }
}
