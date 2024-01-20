import { describe, it, expect, test } from "vitest"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

test("App works", async () => {
    const user = userEvent.setup()
    const app = render(<App />)
    const textAreaFrom = app.getByPlaceholderText("Introducir texto")

    await user.type(textAreaFrom, "Hola mundo")
    const result = await app.findByDisplayValue(/Hello world/i, {}, { timeout: 1000 })

    expect(result).toBeTruthy()
})