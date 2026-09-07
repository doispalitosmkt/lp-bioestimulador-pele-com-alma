import json, sys, copy
sys.stdout.reconfigure(encoding='utf-8')

with open('elementor-home-v5-2026-04-14.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# ─────────────────────────────────────────────────────────────────────────────
# Helper: find a node by ID anywhere in the tree
# ─────────────────────────────────────────────────────────────────────────────
def find_by_id(node, target_id):
    if node.get('id') == target_id:
        return node
    for child in node.get('elements', []):
        found = find_by_id(child, target_id)
        if found:
            return found
    return None

root = {'elements': data['content']}

# ─────────────────────────────────────────────────────────────────────────────
# 1. FIX FOOTER LOGO (id=26ec5384)
#    Old: 2024/09/Logo_Dra-Paula.png  →  New: 2026/04/logo.svg
# ─────────────────────────────────────────────────────────────────────────────
logo_node = find_by_id(root, '26ec5384')
if logo_node:
    logo_node['settings']['html'] = (
        '<img src="https://pelecomalma.com.br/wp-content/uploads/2026/04/logo.svg" '
        'style="width:160px;height:auto;filter:brightness(0) invert(1)" alt="Pele com Alma">'
    )
    print('Fixed footer logo')

# ─────────────────────────────────────────────────────────────────────────────
# 2. FIX FILOSOFIA ICONS (emojis → Font Awesome)
# ─────────────────────────────────────────────────────────────────────────────
def fa_icon(icon_class, color='#B28371'):
    """Return an FA icon span styled for dark bg usage."""
    return (
        f'<span style="display:inline-flex;align-items:center;justify-content:center;'
        f'width:32px;height:32px;min-width:32px;font-size:18px;color:{color}">'
        f'<i class="{icon_class}"></i></span>'
    )

# Template for a FILOSOFIA value row
def filosofia_row(icon_class, title, body):
    return (
        '<div style="display:flex;gap:16px;align-items:flex-start;padding:20px 0;'
        'border-bottom:1px solid rgba(255,252,249,0.1)">'
        + fa_icon(icon_class, '#B28371')
        + '<div>'
        + f'<p style="font-family:Lato;font-weight:700;font-size:16px;color:#FFFCF9;margin:0 0 6px">{title}</p>'
        + f'<p style="font-family:Lato;font-size:14px;color:rgba(255,252,249,0.7);line-height:1.6;margin:0">{body}</p>'
        + '</div></div>'
    )

filo_map = {
    '31774b08': ('fas fa-lightbulb', 'Confiança primeiro',
                 'A relação médico-paciente é construída com transparência, respeito e comunicação honesta.'),
    '5d51ae57': ('fas fa-book-open', 'Educação como cuidado',
                 'Informar é parte do tratamento. Pacientes informados tomam melhores decisões sobre sua saúde.'),
    '57cc8fb1': ('fas fa-leaf', 'Resultado natural',
                 'Beleza com alma respeita quem você é, sem exageros, com cuidado e progressividade.'),
}

for nid, (icon, title, body) in filo_map.items():
    node = find_by_id(root, nid)
    if node:
        node['settings']['html'] = filosofia_row(icon, title, body)
        print(f'Fixed FILOSOFIA icon {nid} -> {icon}')

# ─────────────────────────────────────────────────────────────────────────────
# 3. FIX COUNTERS ICONS (emojis → Font Awesome)
# ─────────────────────────────────────────────────────────────────────────────
def counter_card(icon_class, value, label):
    return (
        '<div style="background:#FFFFFF;border:1px solid #EFEFEF;border-radius:16px;'
        'padding:32px;display:flex;align-items:center;gap:20px;height:100%">'
        '<div style="width:56px;height:56px;border-radius:50%;background:#FAF0EB;'
        'display:flex;align-items:center;justify-content:center;flex-shrink:0">'
        f'<i class="{icon_class}" style="font-size:22px;color:#B28371"></i>'
        '</div>'
        '<div>'
        f'<p style="font-family:\'Playfair Display\',serif;font-style:italic;font-weight:700;'
        f'font-size:40px;color:#35183B;margin:0;line-height:1">{value}</p>'
        f'<p style="font-family:Lato;font-size:14px;color:#8C8B8B;margin:6px 0 0">{label}</p>'
        '</div></div>'
    )

counters_map = {
    'a9173df':  ('fas fa-calendar-alt', '+18',      'anos de atuação em dermatologia'),
    'e5ee95a':  ('fas fa-users',        '+10k',     'pacientes atendidos'),
    'ed82d65':  ('fas fa-star',         '+400',     'avaliações verificadas'),
    '8294dfc':  ('fas fa-award',        '5.0 de 5.0', 'Nota Máxima na Doctoralia'),
}

for nid, (icon, value, label) in counters_map.items():
    node = find_by_id(root, nid)
    if node:
        node['settings']['html'] = counter_card(icon, value, label)
        print(f'Fixed COUNTERS icon {nid} -> {icon}')

# ─────────────────────────────────────────────────────────────────────────────
# 4. FIX PROCEDIMENTOS LAYOUT
#    - [1d4f91d7]: text col width 100% → 38%
#    - [658bba67]: cards col width 100% → 62%, allow flex_wrap
#    - cards inside: keep 30% width (3 per row in wrap mode)
# ─────────────────────────────────────────────────────────────────────────────
text_col = find_by_id(root, '1d4f91d7')
if text_col:
    text_col['settings']['width'] = {'unit': '%', 'size': 38, 'sizes': []}
    text_col['settings']['width_tablet'] = {'unit': '%', 'size': 100, 'sizes': []}
    text_col['settings']['width_mobile'] = {'unit': '%', 'size': 100, 'sizes': []}
    print('Fixed PROCEDIMENTOS text col width -> 38%')

cards_row = find_by_id(root, '658bba67')
if cards_row:
    cards_row['settings']['width'] = {'unit': '%', 'size': 62, 'sizes': []}
    cards_row['settings']['width_tablet'] = {'unit': '%', 'size': 100, 'sizes': []}
    cards_row['settings']['width_mobile'] = {'unit': '%', 'size': 100, 'sizes': []}
    # Allow wrapping for 3+3 card layout
    cards_row['settings']['flex_wrap'] = 'wrap'
    cards_row['settings']['flex_wrap_tablet'] = 'wrap'
    cards_row['settings']['flex_wrap_mobile'] = 'wrap'
    cards_row['settings']['gap'] = {'unit': 'px', 'size': 16, 'sizes': []}
    print('Fixed PROCEDIMENTOS cards row -> 62%, wrap enabled')

# Fix card column widths: each card at 30% of the 62% parent = 3 per row
proc_card_ids = ['2a103e22', '275fd833', '33b7083e', '38431174', 'e093c61', '3c20043']
for cid in proc_card_ids:
    card = find_by_id(root, cid)
    if card:
        card['settings']['width'] = {'unit': '%', 'size': 30, 'sizes': []}
        card['settings']['width_tablet'] = {'unit': '%', 'size': 47, 'sizes': []}
        card['settings']['width_mobile'] = {'unit': '%', 'size': 100, 'sizes': []}
        print(f'Fixed card {cid} width -> 30%')

# ─────────────────────────────────────────────────────────────────────────────
# 5. FIX YT+IG SECTION — Better formatting with clinic logo placeholder
#    Show a branded placeholder with clinic logo + label for each embed
# ─────────────────────────────────────────────────────────────────────────────
LOGO_SVG = 'https://pelecomalma.com.br/wp-content/uploads/2026/04/logo.svg'

yt_placeholder = (
    '<div style="background:#1a0a1e;border-radius:12px;overflow:hidden;'
    'display:flex;flex-direction:column;min-height:280px">'
    # Top bar with YouTube branding
    '<div style="background:#FF0000;padding:10px 16px;display:flex;align-items:center;gap:8px">'
    '<i class="fab fa-youtube" style="color:#FFFFFF;font-size:22px"></i>'
    '<span style="font-family:Lato;font-weight:700;font-size:14px;color:#FFFFFF;letter-spacing:0.5px">YouTube</span>'
    '</div>'
    # Placeholder body
    '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;'
    'padding:32px 24px;gap:16px">'
    f'<img src="{LOGO_SVG}" style="width:100px;height:auto;opacity:0.25;filter:brightness(0) invert(1)" alt="Pele com Alma"/>'
    '<p style="font-family:Lato;font-size:13px;color:rgba(255,252,249,0.5);text-align:center;margin:0;line-height:1.5">'
    'Canal da Dra. Paula Sian<br><em>vídeos educativos sobre dermatologia</em></p>'
    '</div>'
    '</div>'
)

ig_placeholder = (
    '<div style="background:#1a0a1e;border-radius:12px;overflow:hidden;'
    'display:flex;flex-direction:column;min-height:280px">'
    # Top bar with IG branding
    '<div style="background:linear-gradient(90deg,#833ab4,#fd1d1d,#fcb045);padding:10px 16px;'
    'display:flex;align-items:center;gap:8px">'
    '<i class="fab fa-instagram" style="color:#FFFFFF;font-size:22px"></i>'
    '<span style="font-family:Lato;font-weight:700;font-size:14px;color:#FFFFFF;letter-spacing:0.5px">Instagram</span>'
    '</div>'
    # Placeholder body
    '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;'
    'padding:32px 24px;gap:16px">'
    f'<img src="{LOGO_SVG}" style="width:100px;height:auto;opacity:0.25;filter:brightness(0) invert(1)" alt="Pele com Alma"/>'
    '<p style="font-family:Lato;font-size:13px;color:rgba(255,252,249,0.5);text-align:center;margin:0;line-height:1.5">'
    '@pelecomalma<br><em>conteúdo diário sobre saúde da pele</em></p>'
    '</div>'
    '</div>'
)

yt_node = find_by_id(root, '268bd336')
if yt_node:
    yt_node['settings']['html'] = yt_placeholder
    print('Fixed YouTube placeholder')

ig_node = find_by_id(root, '35e011f8')
if ig_node:
    ig_node['settings']['html'] = ig_placeholder
    print('Fixed Instagram placeholder')

# Also remove the "YouTube" / "Instagram" heading widgets (redundant now with the colored bars)
# Just change them to simple labels
yt_heading = find_by_id(root, '34d371d1')
if yt_heading:
    yt_heading['settings']['title'] = ''
    # Make them invisible by setting font size to 0 — simpler: just delete them by clearing

ig_heading = find_by_id(root, '6b5ef311')
if ig_heading:
    ig_heading['settings']['title'] = ''

# ─────────────────────────────────────────────────────────────────────────────
# 6. SAVE v6
# ─────────────────────────────────────────────────────────────────────────────
out_path = 'elementor-home-v6-2026-04-14.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

print(f'\nSaved: {out_path}')
