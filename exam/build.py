#!/usr/bin/env python3
"""Собирает exam/*.html: каждый файл самодостаточный (css+js внутри). Запуск: python3 exam/build.py"""
import os, re, json, time, glob
D = os.path.dirname(os.path.abspath(__file__))
S = os.path.join(D, 'src')
rd = lambda p: open(os.path.join(S, p), encoding='utf-8').read()
css, gens, eng = rd('style.css'), rd('gens.js'), rd('engine.js')
HEAD = '''<!doctype html><html lang="ru"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0e1320"><link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png"><title>{t}</title><style>{css}</style></head>'''
files = []
for p in sorted(glob.glob(os.path.join(S, 'games', '*.js'))):
    g = open(p, encoding='utf-8').read()
    name = os.path.basename(p)[:-3]
    title = re.search(r"title: '([^']+)'", g).group(1)
    html = HEAD.format(t=title, css=css) + '<body><div id="app"></div><script>' + gens + '\n' + g + '\n' + eng + '</script></body></html>'
    open(os.path.join(D, name + '.html'), 'w', encoding='utf-8').write(html)
    files.append(name + '.html')
metas = []
for p in sorted(glob.glob(os.path.join(S, 'games', '*.js'))):
    g = open(p, encoding='utf-8').read()
    gid = re.search(r"id: '([^']+)'", g).group(1)
    sub = re.search(r"sub: '([^']+)'", g)
    lsub = re.search(r"list: '([^']+)'", g)
    metas.append({'id': gid, 'file': os.path.basename(p)[:-3], 'emoji': re.search(r"emoji: '([^']+)'", g).group(1), 'title': re.search(r"title: '([^']+)'", g).group(1), 'sub': lsub.group(1) if lsub else ''})
idx = rd('index.html').replace('/*CSS*/', css).replace('/*LIST*/', json.dumps(metas, ensure_ascii=False))
open(os.path.join(D, 'index.html'), 'w', encoding='utf-8').write(idx)
ver = time.strftime('%Y%m%d%H%M%S')
sw = open(os.path.join(S, 'sw.js'), encoding='utf-8').read().replace('__VER__', ver).replace('__FILES__', json.dumps(['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'] + files))
open(os.path.join(D, 'sw.js'), 'w', encoding='utf-8').write(sw)
print('built', files, ver)
