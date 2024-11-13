import * as Headless from "@headlessui/react"
import { forwardRef } from "react"
import { Link as RouterLink, LinkProps } from "@tanstack/react-router"
import { router } from "@/router"

type CustomLinkProps = Omit<
  React.ComponentPropsWithoutRef<typeof RouterLink>,
  "to" | "href" | "params" | "search"
> & {
  href: LinkProps<typeof router>["to"]
  params?: LinkProps<typeof router>["params"]
  search?: LinkProps<typeof router>["search"]
}

export const Link = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  function Link({ href, params, search, ...rest }, ref) {
    return (
      <Headless.DataInteractive>
        <RouterLink
          to={href}
          ref={ref}
          params={params}
          search={search}
          {...rest}
        />
      </Headless.DataInteractive>
    )
  }
)
