# GitHub Presence Checklist

These are templates and recommendations for both accounts. GitHub only displays a profile README when its repository is public and named exactly after the username:

- `kingmanufx/kingmanufx` → use [`kingmanufx/README.md`](./kingmanufx/README.md)
- `abdulrahmanjamiu221-cmd/abdulrahmanjamiu221-cmd` → use [`abdulrahmanjamiu221-cmd/README.md`](./abdulrahmanjamiu221-cmd/README.md)

Create each repository on its corresponding account, copy in the matching README, and keep the README in the repository root.

## Repeat for Each Project Repository

- [ ] **Description:** Add a concise, specific sentence stating what the project does and its main technology or audience. Avoid generic descriptions such as “my project.”
- [ ] **Website:** Add the deployed app or API URL only if it is live and verified. Use the portfolio URL only for the portfolio itself; leave Website blank when no deployment exists.
- [ ] **Topics:** Add 3–6 lowercase, hyphenated GitHub topics that describe the actual stack and project purpose.
- [ ] **README:** Use the same structure below, filling sections with facts from that repository.
- [ ] **License:** Add a `LICENSE` file only after deciding what reuse permissions you want to grant.
- [ ] **Repository hygiene:** Confirm `.env`, secrets, build output, and dependencies are excluded from Git; include a useful `.env.example` when configuration is required.
- [ ] **Pinning:** Pin only repositories with committed source, a clear README, and a working demo or useful setup instructions.

## README Structure to Reuse

1. **Project name and one-line purpose**
2. **Overview** — problem, intended user, and solution
3. **Demo and screenshots** — verified links; real screenshots with descriptive alt text
4. **Features** — user-visible capabilities
5. **Tech stack** — include why the main choices fit
6. **Getting started** — prerequisites, installation, environment variables, database setup, run commands
7. **Architecture / API / data model** — include diagrams where they clarify the system
8. **Security and configuration** — authentication, authorization, validation, secrets, CORS
9. **Testing** — commands, test data requirements, and coverage
10. **Deployment** — production URL and deployment steps, if applicable
11. **Known limitations and roadmap**
12. **License and contact**

## Suggested Metadata for the 16 Programme Projects

The descriptions and topics below are suggestions based on the project names and the programme list. Verify them against each repository before applying. Only the portfolio deployment URL has been provided; add other Website URLs only after confirming they work.

| Project repository | Suggested description | Suggested topics | Website |
| --- | --- | --- | --- |
| [kingmanufx/swd-01-portfolio-main](https://github.com/kingmanufx/swd-01-portfolio-main) | Personal portfolio showcasing my web development skills and projects. | `portfolio`, `html`, `css`, `javascript` | [Provided portfolio deployment](https://jamiu-portfolio.vercel.app/) |
| [abdulrahmanjamiu221-cmd/02-landingpage](https://github.com/abdulrahmanjamiu221-cmd/02-landingpage) | Responsive landing page built with HTML, CSS, and JavaScript. | `landing-page`, `html`, `css`, `javascript` | Add a verified deployment or leave blank. |
| [abdulrahmanjamiu221-cmd/03-weather-dashboard](https://github.com/abdulrahmanjamiu221-cmd/03-weather-dashboard) | Weather dashboard that retrieves current conditions from an API. | `weather`, `dashboard`, `javascript`, `api-integration` | Add a verified deployment or leave blank. |
| [abdulrahmanjamiu221-cmd/04_php_site](https://github.com/abdulrahmanjamiu221-cmd/04_php_site) | Dynamic website built with PHP. | `php`, `dynamic-website`, `html`, `css` | Add a verified deployment or leave blank. |
| [kingmanufx/05-student-records](https://github.com/kingmanufx/05-student-records) | Student records application backed by a database. | `php`, `mysql`, `student-records`, `crud` | Add a verified deployment or leave blank. |
| [abdulrahmanjamiu221-cmd/swd-06-php-auth](https://github.com/abdulrahmanjamiu221-cmd/swd-06-php-auth) | PHP authentication system for account registration and sign-in. | `php`, `authentication`, `mysql`, `security` | Add a verified deployment or leave blank. |
| [abdulrahmanjamiu221-cmd/07-php-blog](https://github.com/abdulrahmanjamiu221-cmd/07-php-blog) | Blog content management system built with PHP and MySQL. | `php`, `mysql`, `blog`, `cms` | Add a verified deployment or leave blank. |
| [abdulrahmanjamiu221-cmd/08-school-database](https://github.com/abdulrahmanjamiu221-cmd/08-school-database) | SQL database project for organizing school records. | `sql`, `mysql`, `database-schema`, `education` | Not applicable unless an app is deployed. |
| [abdulrahmanjamiu221-cmd/09-php-shop](https://github.com/abdulrahmanjamiu221-cmd/09-php-shop) | PHP shop with product browsing and a shopping cart. | `php`, `mysql`, `ecommerce`, `shopping-cart` | Add a verified deployment or leave blank. |
| [abdulrahmanjamiu221-cmd/10-node-cli](https://github.com/abdulrahmanjamiu221-cmd/10-node-cli) | Command-line utility built with Node.js. | `nodejs`, `cli`, `javascript` | Not applicable. |
| [abdulrahmanjamiu221-cmd/11-express-api](https://github.com/abdulrahmanjamiu221-cmd/11-express-api) | REST API built with Express and Node.js. | `nodejs`, `express`, `rest-api`, `javascript` | Add a verified API URL or leave blank. |
| [abdulrahmanjamiu221-cmd/12-notes-api](https://github.com/abdulrahmanjamiu221-cmd/12-notes-api) | Authenticated notes API using Express, Neon Postgres, and JWTs. | `nodejs`, `express`, `neon`, `postgresql`, `jwt`, `rest-api` | Add a verified API URL or leave blank. |
| [abdulrahmanjamiu221-cmd/13-react-quiz](https://github.com/abdulrahmanjamiu221-cmd/13-react-quiz) | Interactive React quiz with trivia questions and a timer. | `react`, `javascript`, `quiz`, `trivia-api` | Add a verified deployment or leave blank. |
| [kingmanufx/14-nextjs-site](https://github.com/kingmanufx/14-nextjs-site) | Multi-page company website built with Next.js. | `nextjs`, `react`, `typescript`, `company-website` | Add a verified deployment or leave blank. |
| [kingmanufx/15-recipe-explorer](https://github.com/kingmanufx/15-recipe-explorer) | Next.js app for discovering and exploring recipes. | `nextjs`, `react`, `typescript`, `recipe-app` | Add a verified deployment or leave blank. |
| [kingmanufx/16-project-tracker](https://github.com/kingmanufx/16-project-tracker) | Next.js project tracker using Neon, GitHub authentication, CI, and deployment. | `nextjs`, `neon`, `postgresql`, `github-auth`, `ci-cd` | **Do not add yet:** this repository currently has no files. Populate and verify it first. |

Other repositories on the two accounts include older portfolio, database, library, business, and e-voting projects. Review their source before writing descriptions or adding topics; don't infer their stack from their names alone.

## Pin Recommendations

Pins are account-specific: a profile can only pin repositories owned by that account. The lists below prioritize project variety and repositories with committed source.

### `kingmanufx`

1. [`swd-01-portfolio-main`](https://github.com/kingmanufx/swd-01-portfolio-main) — primary portfolio and entry point.
2. [`15-recipe-explorer`](https://github.com/kingmanufx/15-recipe-explorer) — current Next.js app with search and data fetching.
3. [`14-nextjs-site`](https://github.com/kingmanufx/14-nextjs-site) — shows a second Next.js project and multi-page site work.
4. [`05-student-records`](https://github.com/kingmanufx/05-student-records) — shows database-backed PHP work.
5. [`nacos_evoting-system`](https://github.com/kingmanufx/nacos_evoting-system) — consider pinning after its README and code are reviewed and polished.
6. [`16-project-tracker`](https://github.com/kingmanufx/16-project-tracker) — **pin only after source, README, and deployment are added**; it is currently empty.

If the e-voting project isn't ready to showcase, pin five rather than using a weak or empty repository.

### `abdulrahmanjamiu221-cmd`

1. [`12-notes-api`](https://github.com/abdulrahmanjamiu221-cmd/12-notes-api) — strongest backend/security example, with documentation and tests.
2. [`11-express-api`](https://github.com/abdulrahmanjamiu221-cmd/11-express-api) — demonstrates REST API and Express work.
3. [`13-react-quiz`](https://github.com/abdulrahmanjamiu221-cmd/13-react-quiz) — interactive React project.
4. [`09-php-shop`](https://github.com/abdulrahmanjamiu221-cmd/09-php-shop) — PHP/MySQL application with commerce workflows.
5. [`03-weather-dashboard`](https://github.com/abdulrahmanjamiu221-cmd/03-weather-dashboard) — client-side API integration.
6. [`07-php-blog`](https://github.com/abdulrahmanjamiu221-cmd/07-php-blog) — PHP/MySQL content management project.

Before pinning, confirm each chosen repository has a useful README and no credentials or private data.

## License Checklist

- [ ] Decide whether you want others to use, modify, and redistribute each project's code.
- [ ] For projects you own and want to share permissively, MIT is a simple default; add the complete license text in a root `LICENSE` file.
- [ ] If you don't want to grant reuse rights, don't add an open-source license yet; unlicensed code is not automatically open source.
- [ ] Check that coursework, collaborators, templates, images, fonts, and other third-party assets may be included before licensing the repository.
- [ ] Keep attribution and third-party license notices where required.

## Commit History Review

I sampled recent commits from the portfolio, the two Next.js repositories, Notes API, Express API, and React Quiz. This is a sample, not a review of every commit in every repository.

### Habits worth keeping

- Several recent messages are specific and action-oriented, for example `Implement search functionality and enhance site header layout` in [kingmanufx/15-recipe-explorer](https://github.com/kingmanufx/15-recipe-explorer/commits/master).
- The Next.js site and Express API use recognizable `feat:`, `fix:`, and `docs:` prefixes in [kingmanufx/14-nextjs-site](https://github.com/kingmanufx/14-nextjs-site/commits/main) and [abdulrahmanjamiu221-cmd/11-express-api](https://github.com/abdulrahmanjamiu221-cmd/11-express-api/commits/main).
- A longer Recipe Explorer commit body explains related changes, which is useful when a commit intentionally groups a coherent feature.

### Improve next

- Replace generic messages such as `first commit` with a description of the repository setup or feature.
- Avoid reusing the exact same subject for separate work. The sample contains repeated `feat: open trivia api and countdown timer` subjects in React Quiz and repeated `feat: inventory dashboard consuming the api` subjects in the Express API history.
- Pick one subject style. Conventional Commits work well: lowercase type, optional scope, and an imperative summary.
- Keep each commit focused; use a short body for context, trade-offs, or test details rather than a list of unrelated changes.
- The sampled commits in both accounts are attributed to `kingmanufx`. If you want contributions to appear under both profile identities, check the Git author email and GitHub email verification settings.

Examples to use going forward:

```text
feat(notes): add tag filtering to the notes list
fix(auth): reject expired bearer tokens
test(notes): cover cross-user access
docs(api): document pagination parameters
chore(deps): update Express dependencies
```
