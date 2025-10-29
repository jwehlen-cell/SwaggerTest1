# swagger-ui (lightweight)

This folder contains a small, CDN-hosted Swagger UI front end that can load OpenAPI YAML/JSON files stored in this repository (or any raw GitHub URL).

Files:
- `index.html` — Lightweight Swagger UI page that loads the spec from a query parameter (default: `Swagger2.yaml`).
- `sample.yaml` — A minimal OpenAPI 3 sample file to verify things work (kept for convenience).

Default behavior
- If you open `index.html` with no `?url=` query parameter, the page will try to load `Swagger2.yaml` by default.
- For non-absolute spec paths (e.g. `Swagger2.yaml` or `my-api.yaml`) the loader tries two locations in order:
  1. Repo root: `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/<file>`
  2. Swagger UI folder: `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/swagger-ui/<file>`
- The first location that returns HTTP 200 will be used. If neither returns 200, the loader falls back to the swagger-ui folder URL (to preserve previous behavior).

Passing absolute (raw) URLs
- You can pass an absolute raw GitHub URL (or any public URL) and it will be used unchanged:
  - `swagger-ui/index.html?url=https://raw.githubusercontent.com/OWNER/REPO/BRANCH/path/openapi.yaml`

Where to place your specs
- If you want `my-api.yaml` to be discovered automatically, either:
  - Place it at the repository root on the `add-swagger-ui` branch (preferred), or
  - Place it in `swagger-ui/` on the `add-swagger-ui` branch.
- Example usage:
  - `swagger-ui/index.html?url=Swagger2.yaml`
  - `swagger-ui/index.html?url=my-api.yaml`
  - `swagger-ui/index.html?url=https://raw.githubusercontent.com/other/repo/branch/path/openapi.yaml`

Hosting via GitHub Pages
- To publish the UI:
  1. Go to your repository Settings → Pages.
  2. Set Source to: Branch `add-swagger-ui`, Folder `/ (root)`.
  3. Save and wait a minute; the UI will be available at:
     `https://jwehlen-cell.github.io/SwaggerTest1/swagger-ui/index.html`

Notes
- If you want the default branch to be `main` after merging, update the `branch` constant in `index.html` and then merge to `main`.
- This integration does not create or modify any Swagger2.yaml file — it only attempts to load `Swagger2.yaml` when no `?url=` is provided.
