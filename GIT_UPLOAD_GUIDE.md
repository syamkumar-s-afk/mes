# Git Upload Instructions

## Your files are ready to upload!

All files have been committed to your local git repository. Here's how to upload them to GitHub:

## Method 1: Create New Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `mes`
3. Keep it Public or Private (your choice)
4. **DO NOT** check "Initialize this repository with a README"
5. Click "Create repository"
6. Then run this command in your terminal:
   ```bash
   git push -u origin main
   ```

## Method 2: Push to Existing Repository

If you already have a repository, update the remote URL:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Current Status

✅ Git initialized
✅ Files added and committed
✅ Remote configured: https://github.com/syanikumar-s-afk/mes.git
⏳ Waiting for repository to be created on GitHub

## Files Ready to Upload

- index.html (Contact form structure)
- style.css (Premium styling)
- script.js (EmailJS integration)
- README.md (Documentation)

## After Upload

Once pushed, you can enable GitHub Pages:
1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://syamkumar-s-afk.github.io/mes/`

---

**Need help?** Just let me know which method you prefer!
