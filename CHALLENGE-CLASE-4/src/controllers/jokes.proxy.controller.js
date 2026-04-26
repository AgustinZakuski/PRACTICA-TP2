export const jokeProxy = async (request, response) => {
    const url = "https://api.chucknorris.io/jokes/random";

    try {
    const res = await fetch(url);
    const data = await res.json();
        response.status(200).json(data);
        return
    } catch (error) {
        response.status(500).json({errorMsg: error.message})
    }
}