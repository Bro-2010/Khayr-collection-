# KHAYR: Clothing for Men and Women

A ready-to-deploy clothing store. Customers browse men's and women's clothing, choose a size, build a bag, and order through WhatsApp.

This is a demo store. Payment options are simulated and no money is charged.

## Files

| File | What it does |
|------|--------------|
| `index.html` | Page layout and sections |
| `style.css` | Colours, fonts and layout |
| `products.js` | **Your settings and products** (edit this file) |
| `script.js` | Shop, bag, checkout and WhatsApp logic (no need to edit) |
| `README.md` | This guide |

## 1. Set your details (in `products.js`)

Change the `CONFIG` block at the top:

- `brand`: your store name
- `whatsappNumber`: your WhatsApp number with country code and no `+` (for example `233241234567`). This is the number orders are sent to. It is left as a placeholder for the demo.
- `phoneDisplay`, `email`, `address`, `hours`: shown in the contact section and footer
- `deliveryFee` and `freeDeliveryAbove`: delivery charge and the order amount for free delivery

## 2. Add or change products (in `products.js`)

Each item is one block in the `products` list. Copy a block, then change:

- `name`, `category`, `price`, `oldPrice` (optional), `description`
- `gender`: `"women"` or `"men"`
- `sizes`: use `WOMEN_SIZES` or `MEN_SIZES`, or write your own list such as `["M", "L"]`
- `shape`: `"top"`, `"dress"` or `"bottoms"` (controls the built-in illustration)
- `color`: the colour of the illustration
- `badge`: `"New"`, `"Bestseller"`, `"Sale"`, or `""` for none

### Using real photos

Every item shows a built-in clothing illustration, so the page always looks complete. To use real photos:

1. Create an `images` folder inside the `khayr` folder and copy your photos into it.
2. In `products.js`, set the item's `image` to the photo path, for example `"images/essential-tee.jpg"`.

If a photo link is wrong or missing, the illustration shows instead, so nothing is left blank.

## 3. How WhatsApp ordering works

Customers can order in two ways:

- **Order a single item:** Open a product and tap **Order this on WhatsApp**. The chat opens with the item, size and quantity filled in.
- **Order several items:** Add items to the bag, tap **Checkout**, fill in the details and tap **Place order on WhatsApp**. The full order (items, quantities, delivery details and total) opens in WhatsApp.

Both buttons open WhatsApp using the number in `whatsappNumber`. Once the number is set, orders arrive in your WhatsApp.

## 4. Deploy the website

### Netlify (easiest)
1. Go to app.netlify.com and log in.
2. Drag the whole `khayr` folder onto the page.
3. Netlify gives you a live link. You can change the site name in Site settings.

### GitHub Pages
1. Create a new repository on GitHub.
2. Upload the files inside the `khayr` folder to the repository (keep `index.html` at the top level).
3. Go to Settings → Pages, choose the `main` branch and the `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/<repository-name>/`.

## Notes for a live store

- The Mobile Money option is demo only. To take real payments online, connect a provider such as Paystack or Flutterwave, which needs a small server or a hosted checkout.
- The reviews, FAQ answers and "Our story" text are sample content. Replace them with your own.
