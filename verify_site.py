import os
from bs4 import BeautifulSoup

pages = ['index.html', 'about.html', 'services.html', 'portfolio.html', 'expertise.html', 'contact.html', 'privacy.html', 'user-guide.html']
print("=== VERIFYING ALL 8 PAGES ===")

all_valid = True

for page in pages:
    if not os.path.exists(page):
        print(f"ERROR: {page} missing!")
        all_valid = False
        continue
    
    with open(page, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    print(f"\n--- Checking {page} ---")
    
    # Check Stylesheets
    for link in soup.find_all('link', rel='stylesheet'):
        href = link.get('href', '')
        if href and not href.startswith('http'):
            clean_href = href.split('?')[0].split('#')[0]
            if not os.path.exists(clean_href):
                print(f"  [BROKEN CSS] {clean_href}")
                all_valid = False
            else:
                pass
                
    # Check Scripts
    for script in soup.find_all('script', src=True):
        src = script.get('src', '')
        if src and not src.startswith('http'):
            clean_src = src.split('?')[0].split('#')[0]
            if not os.path.exists(clean_src):
                print(f"  [BROKEN SCRIPT] {clean_src}")
                all_valid = False

    # Check Images
    img_count = 0
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if src and not src.startswith('http') and not src.startswith('data:'):
            img_count += 1
            clean_src = src.split('?')[0].split('#')[0]
            if not os.path.exists(clean_src):
                print(f"  [BROKEN IMG] {clean_src} in {page}")
                all_valid = False

    # Check Internal Links
    link_count = 0
    for a in soup.find_all('a', href=True):
        href = a.get('href', '')
        if href and not href.startswith('http') and not href.startswith('mailto:') and not href.startswith('tel:') and not href.startswith('#'):
            link_count += 1
            target_page = href.split('?')[0].split('#')[0]
            if target_page and not os.path.exists(target_page):
                print(f"  [BROKEN LINK] {href} in {page}")
                all_valid = False

    print(f"  Validated: {img_count} images, {link_count} internal page links.")

if all_valid:
    print("\n>>> ALL 7 PAGES PASSED INTEGRITY CHECKS! No broken links, CSS, JS or image paths.")
else:
    print("\n>>> ISSUES FOUND. Please fix them.")
