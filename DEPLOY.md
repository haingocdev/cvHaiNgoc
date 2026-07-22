# Hướng dẫn deploy GitHub Pages

Link sau khi deploy thành công:

**https://haingocdev.github.io/cvHaiNgoc/**

---

## Bước 1 — Đăng nhập GitHub CLI (máy thầy)

Mở Terminal trong project và chạy:

```bash
gh auth login
```

Chọn:

1. `GitHub.com`
2. `HTTPS`
3. Login with browser
4. Làm theo hướng dẫn trên trình duyệt

Kiểm tra:

```bash
gh auth status
```

---

## Bước 2 — Commit và push code

```bash
cd /Users/admin/cvHaiNgoc/cvHaiNgoc

git add .
git commit -m "Initial portfolio site for Dang Ngoc Hai"

git branch -M main
git push -u origin main
```

Nếu remote chưa đúng:

```bash
git remote add origin https://github.com/haingocdev/cvHaiNgoc.git
# hoặc
git remote set-url origin https://github.com/haingocdev/cvHaiNgoc.git
```

---

## Bước 3 — Bật GitHub Pages

1. Vào repo: https://github.com/haingocdev/cvHaiNgoc
2. **Settings** → **Pages**
3. Mục **Source** chọn **GitHub Actions**
4. Đợi workflow `Deploy GitHub Pages` chạy xong (tab **Actions**)

Hoặc chạy tay:

```bash
gh api -X PUT repos/haingocdev/cvHaiNgoc/pages -f build_type=workflow
```

---

## Bước 4 — Lấy link gửi người khác

Sau 1–3 phút, mở:

- Home: https://haingocdev.github.io/cvHaiNgoc/
- Summary: https://haingocdev.github.io/cvHaiNgoc/summary

Mỗi lần `git push` lên `main`, site tự build và cập nhật.

---

## Lưu ý

- Repo phải để **Public** (hoặc tài khoản GitHub Pro nếu Private + Pages)
- Project dùng `base: /cvHaiNgoc/` trong `vite.config.ts` — đúng với tên repo
- Nếu đổi tên repo, sửa `repoName` trong `vite.config.ts` cho khớp
