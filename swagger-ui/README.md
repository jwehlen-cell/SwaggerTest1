# swagger-ui (lightweight)

This folder contains a small, CDN-hosted Swagger UI front end that can load OpenAPI YAML/JSON files stored in this repository (or any raw GitHub URL).

Files:
- `index.html` — Lightweight Swagger UI page that loads the spec from a query parameter (default: `sample.yaml`).
- `sample.yaml` — A minimal OpenAPI 3 sample file to verify things work.

How it resolves specs
- If you open `index.html` with a query parameter `?url=some-file.yaml` and `some-file.yaml` is not an absolute (http/https) URL, the page will resolve it to:
  `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/swagger-ui/some-file.yaml`
  i.e., it will load the raw file from this repository on the `add-swagger-ui` branch under `swagger-ui/`.
- You can also pass a complete raw URL: `?url=https://raw.githubusercontent.com/OWNER/REPO/BRANCH/path/to/file.yaml`

Usage examples
- Load the sample in the same folder:
  - Open `swagger-ui/index.html` in a browser (or via GitHub Pages) — it will load `sample.yaml` by default.
- Load a YAML you added to the repository:
  - If you add `my-api.yaml` to `swagger-ui/`, open:
    `swagger-ui/index.html?url=my-api.yaml`
  - The page will fetch:
    `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/swagger-ui/my-api.yaml`
- Load any raw GitHub-hosted OpenAPI:
  - `swagger-ui/index.html?url=https://raw.githubusercontent.com/other/repo/branch/path/openapi.yaml`

Notes
- To host this UI as a live page, enable GitHub Pages for this repository and point it at the `add-swagger-ui` branch (or merge the branch to main). The page will then be publicly accessible.
- If you want the loader to use a different branch, update the `branch` constant in `index.html` accordingly.
