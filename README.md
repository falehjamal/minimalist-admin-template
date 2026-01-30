# Admin Dashboard UI - Component Library

A complete, production-ready, minimalist admin dashboard built with vanilla CSS.

## Quick Start

```html
<!-- Include all CSS files -->
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/navigation.css">
<link rel="stylesheet" href="css/data-display.css">
<link rel="stylesheet" href="css/forms.css">
<link rel="stylesheet" href="css/actions.css">
<link rel="stylesheet" href="css/feedback.css">
<link rel="stylesheet" href="css/utilities.css">

<!-- Or include auth.css for login pages -->
<link rel="stylesheet" href="css/auth.css">
```

## File Structure

```
admin-dashboard/
├── css/
│   ├── base.css         # Reset, tokens, typography
│   ├── layout.css       # App shell, sidebar, header
│   ├── navigation.css   # Nav list, tabs, pagination
│   ├── data-display.css # Cards, tables, badges, avatars
│   ├── forms.css        # All form inputs
│   ├── actions.css      # Buttons, dropdowns
│   ├── feedback.css     # Alerts, modals, progress
│   ├── auth.css         # Login/register pages
│   └── utilities.css    # Helpers, dividers, tooltips
├── index.html           # Dashboard example
├── login.html           # Auth page example
├── forms.html           # Form components example
├── components.html      # Component showcase
└── README.md
```

## Design Tokens

All values defined in `base.css`:

| Token | Values |
|-------|--------|
| **Colors** | `--color-gray-50` to `--color-gray-900`, `--color-accent`, status colors |
| **Spacing** | `--space-1` (4px) to `--space-16` (64px) |
| **Typography** | `--font-size-xs` to `--font-size-3xl` |
| **Radius** | `--radius-sm` (4px), `--radius-md` (6px), `--radius-lg` (8px) |
| **Shadows** | `--shadow-xs`, `--shadow-sm`, `--shadow-md` |

## Components

### Layout
```html
<div class="app">
  <aside class="app__sidebar">
    <div class="sidebar__header">...</div>
    <nav class="sidebar__nav">...</nav>
  </aside>
  <div class="app__main">
    <header class="header">...</header>
    <main class="main">...</main>
  </div>
</div>
```

### Buttons
```html
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--danger">Danger</button>
<button class="btn btn--sm">Small</button>
<button class="btn-icon"><svg>...</svg></button>
```

### Form Inputs
```html
<input type="text" class="input" placeholder="...">
<textarea class="textarea"></textarea>
<select class="input select">...</select>

<label class="checkbox">
  <input type="checkbox" class="checkbox__input">
  <span class="checkbox__label">Label</span>
</label>

<label class="toggle">
  <input type="checkbox" class="toggle__input">
  <span class="toggle__track"><span class="toggle__thumb"></span></span>
</label>
```

### Navigation
```html
<!-- Tabs -->
<div class="tabs__list">
  <button class="tabs__trigger is-active">Tab 1</button>
  <button class="tabs__trigger">Tab 2</button>
</div>

<!-- Pagination -->
<nav class="pagination">
  <button class="pagination__item">1</button>
  <button class="pagination__item is-active">2</button>
</nav>

<!-- Breadcrumb -->
<nav class="breadcrumb">
  <span>Home</span>
  <span class="breadcrumb__separator">/</span>
  <span class="breadcrumb__current">Page</span>
</nav>
```

### Data Display
```html
<!-- Card -->
<div class="card">
  <div class="card__header">...</div>
  <div class="card__body">...</div>
</div>

<!-- Badge -->
<span class="badge badge--success">Active</span>

<!-- Avatar -->
<div class="avatar">JD</div>

<!-- Table -->
<div class="table-container">
  <table class="table">...</table>
</div>
```

### Feedback
```html
<!-- Alert -->
<div class="alert alert--info">
  <svg class="alert__icon">...</svg>
  <div class="alert__content">Message</div>
</div>

<!-- Progress -->
<div class="progress">
  <div class="progress__bar" style="width: 75%"></div>
</div>

<!-- Spinner -->
<div class="spinner"></div>
```

### Utilities
```html
<div class="divider"></div>
<span class="tag">Tag</span>
<span class="badge-counter">5</span>

<!-- Spacing utilities -->
<div class="mt-4 mb-6 p-4">...</div>
<div class="flex gap-4 items-center">...</div>
```

## Example Pages

| Page | URL | Description |
|------|-----|-------------|
| Dashboard | `index.html` | Main dashboard with stats and table |
| Login | `login.html` | Authentication page |
| Forms | `forms.html` | All form components |
| Components | `components.html` | Component showcase |

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid, Flexbox, and CSS Custom Properties.
