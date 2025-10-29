# swagger-ui (lightweight)

This folder contains a small, CDN-hosted Swagger UI front end that can load OpenAPI YAML/JSON files stored in this repository (or any raw GitHub URL).

Files:
- `index.html` — Lightweight Swagger UI page that loads the spec from a query parameter (default: `Swagger2.yaml`).
- `sample.yaml` — A minimal OpenAPI 3 sample file to verify things work.

Default behavior
- By default (no query parameter), `index.html` will load `Swagger2.yaml` from the repository root.
- This makes it easy to view your main API specification without any URL parameters.

How it resolves specs
- If you open `index.html` with a query parameter `?url=some-file.yaml` and `some-file.yaml` is not an absolute (http/https) URL, the page will intelligently resolve it:
  1. **First**, it tries the repository root:
     `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/some-file.yaml`
  2. **If that returns 404**, it falls back to the `swagger-ui/` folder:
     `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/swagger-ui/some-file.yaml`
- You can also pass a complete raw URL: `?url=https://raw.githubusercontent.com/OWNER/REPO/BRANCH/path/to/file.yaml`

Where to place your OpenAPI specs
- **Repository root** (recommended for main specs): Place `Swagger2.yaml` or other primary API specifications at the root of the repository. The UI will find them automatically.
- **swagger-ui/ folder** (for examples/samples): Place additional example specs or samples in the `swagger-ui/` folder. They will be discovered as a fallback.

Usage examples
- Load the default spec (Swagger2.yaml from repository root):
  - Open `swagger-ui/index.html` in a browser (or via GitHub Pages) — it will load `Swagger2.yaml` by default.
- Load a YAML you added to the repository root:
  - If you add `my-api.yaml` to the repository root, open:
    `swagger-ui/index.html?url=my-api.yaml`
  - The page will fetch:
    `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/my-api.yaml`
- Load a YAML from the swagger-ui/ folder:
  - `swagger-ui/index.html?url=sample.yaml`
  - The page will try the root first, then fallback to:
    `https://raw.githubusercontent.com/jwehlen-cell/SwaggerTest1/add-swagger-ui/swagger-ui/sample.yaml`
- Load any raw GitHub-hosted OpenAPI:
  - `swagger-ui/index.html?url=https://raw.githubusercontent.com/other/repo/branch/path/openapi.yaml`

Hosting via GitHub Pages
- To host this UI as a live page, enable GitHub Pages for this repository and point it at the `add-swagger-ui` branch (or merge the branch to main). The page will then be publicly accessible at:
  `https://jwehlen-cell.github.io/SwaggerTest1/swagger-ui/`
- Once GitHub Pages is enabled, anyone can view your API documentation by visiting the above URL.

Notes
- If you want the loader to use a different branch, update the `branch` constant in `index.html` accordingly.
