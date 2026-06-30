# CombiBoiler.com

Static resource site for combination (combi) boiler guides — part of the [MyBoiler.com](https://myboiler.com) ecosystem.

## Site structure

```
index.html                    Homepage (hero, guide cards, topics, brands)
what-is-a-combi-boiler.html   Definition, pros & cons
choosing-a-combi-boiler.html  Choosing, controls, installation best practice
sizing-and-efficiency.html    kW sizing, flow temperature, optimisation
styles.css                    Shared stylesheet (BoilerService.com design language)
js/navbar.js                  Mobile navigation
img/                          Logo mark and combiboiler.jpg
favicon.svg
CNAME                         Custom domain for GitHub Pages
.nojekyll                     Disables Jekyll processing on GitHub Pages
```

## Local preview

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080


### Custom domain DNS

Point `boilerservice.com` at GitHub Pages:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `jkanbi.github.io` |

## GitHub Pages deployment

### 1. Create the GitHub repository

1. Go to https://github.com/new
2. Repository name: `combiboiler.com` (or your preferred name)
3. Leave it **empty** — do not add a README, `.gitignore`, or licence
4. Click **Create repository**

### 2. Push this local repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/combiboiler.com.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username or organisation.

### 3. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Click **Save**

The site will be available at `https://YOUR_USERNAME.github.io/combiboiler.com/` within a few minutes.

### 4. Custom domain (combiboiler.com)

This repo includes a `CNAME` file set to `combiboiler.com`. After Pages is enabled:

1. In repo **Settings → Pages**, enter `combiboiler.com` under **Custom domain** and save
2. At your DNS provider, add A records for `@` to GitHub Pages (see GitHub Pages docs for current IPs) or a CNAME for `www`
3. Enable **Enforce HTTPS** once DNS has propagated

## Content sources

Guide text adapted from [Hub.MyBoiler.com](https://hub.myboiler.com):

- https://hub.myboiler.com/boilers/what-is-a-combi-boiler/
- https://hub.myboiler.com/combi-boiler/
- https://hub.myboiler.com/boiler-energy-efficiency/ (combi sizing section)

Design follows [BoilerService.com](https://boilerservice.com). Card image from myboiler.com (`img/combiboiler.jpg`).

## Related sites

- [MyBoiler.com](https://myboiler.com)
- [BoilerManuals.com](https://boilermanuals.com)
- [BoilerService.com](https://boilerservice.com)
