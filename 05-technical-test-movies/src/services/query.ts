export function validQuery(query: string): string {
    if (query === "") {
        return "you can't search for an empty movie"
    }

    if (query.match(/^\d+$/)) {
        return "You can't search for a movie with a number"
    }

    if (query.length < 3) {
        return "The search must be at least 3 characters"
    }

    return ""
}