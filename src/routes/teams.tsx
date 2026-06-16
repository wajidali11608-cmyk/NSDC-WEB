import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "The Collective — NSDC × JHSC" },
      {
        name: "description",
        content:
          "Six divisions, one lab. Meet the Core, Tech, Data Science, Media, Content and Social Media teams of NSDC × JHSC.",
      },
      { property: "og:title", content: "The Collective — NSDC × JHSC" },
      {
        property: "og:description",
        content:
          "Six divisions, one lab. Meet the people behind NSDC × JHSC.",
      },
    ],
  }),
  component: () => <Outlet />,
});
