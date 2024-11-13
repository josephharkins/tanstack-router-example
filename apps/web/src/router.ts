import { createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import NotFound from "./components/NotFound"

export const router = createRouter({
  routeTree,
  context: { authStatus: undefined! },
  defaultNotFoundComponent: NotFound,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
