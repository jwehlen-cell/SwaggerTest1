# swagger-ui (lightweight)

This folder contains a small, CDN-hosted Swagger UI front end that can load OpenAPI YAML/JSON files stored in this repository (or any raw GitHub URL).

Files:
- `index.html` — Lightweight Swagger UI page that loads the spec from a query parameter (default: `Swagger2.yaml`).
- `sample.yaml` — A minimal OpenAPI 3 sample file to verify things work.

Default Behavior
- Opening `index.html` without any query parameters will automatically load `Swagger2.yaml` from the repository root.

How it resolves specs (Two-Location Lookup)
- If you open `index.html` with a query parameter `?url=some-file.yaml` and `some-file.yaml` is not an absolute (http/https) URL, the page will use a two-location lookup strategy:
  1. First tries: `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/some-file.yaml` (repository root)
  2. If not found, falls back to: `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/swagger-ui/some-file.yaml` (swagger-ui/ folder)
- This allows you to reference files in either location without specifying the full path.
- You can also pass a complete raw URL: `?url=https://raw.githubusercontent.com/OWNER/REPO/BRANCH/path/to/file.yaml` (absolute URLs are used as-is, no lookup)

Usage examples
- Load the default spec (Swagger2.yaml from repo root):
  - Simply open `swagger-ui/index.html` in a browser (or via GitHub Pages)
- Load the sample in the swagger-ui folder:
  - `swagger-ui/index.html?url=sample.yaml`
  - The page will first try the repo root, then find it in `swagger-ui/sample.yaml`
- Load Swagger2.yaml explicitly:
  - `swagger-ui/index.html?url=Swagger2.yaml`
  - The page will fetch: `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/Swagger2.yaml`
- Load a YAML you added to either location:
  - If you add `my-api.yaml` to the repo root or `swagger-ui/`, simply use:
    `swagger-ui/index.html?url=my-api.yaml`
  - The two-location lookup will find it automatically
- Load any raw GitHub-hosted OpenAPI:
  - `swagger-ui/index.html?url=https://raw.githubusercontent.com/other/repo/branch/path/openapi.yaml`

Notes
- To host this UI as a live page, enable GitHub Pages for this repository and point it at the `add-swagger-ui` branch (or merge the branch to main). The page will then be publicly accessible.
- If you want the loader to use a different branch, update the `branch` constant in `index.html` accordingly.
