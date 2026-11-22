'use strict';
/* 단체 사진용 배경 이미지를 비밀번호로 암호화해서 사이트(bg/)에 넣는다
 *  node tools/encrypt-bg.js "<JPG 폴더>" "<비밀번호>"
 *  - 폴더 안 「이름.jpg」(크게) 와 「이름.t.jpg」(고르기 칸에 쓰는 작은 그림) 를 짝으로 읽는다
 *  - 둘 다 AES-256-GCM 으로 암호화해 bg/<번호>.bin · bg/<번호>.t.bin 으로 저장, 이름 목록은 bg/list.bin
 *  - 키 : PBKDF2(SHA-256, 250,000번) · 더빙(tools/encrypt-dub.js) 과 같은 방식, 브라우저(js/app.js) 가 푼다
 *  - 다시 돌리면 예전 파일은 지워진다
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const [src, pass] = process.argv.slice(2);
if (!src || !pass) { console.error('사용법 : node tools/encrypt-bg.js "<JPG 폴더>" "<비밀번호>"'); process.exit(1); }
const out = path.join(__dirname, '..', 'bg');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const ITER = 250000;
const salt = crypto.randomBytes(16);
const key = crypto.pbkdf2Sync(pass, salt, ITER, 32, 'sha256');
const seal = (buf) => {
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  return Buffer.concat([iv, c.update(buf), c.final(), c.getAuthTag()]);
};

const files = fs.readdirSync(src).filter((f) => /\.jpe?g$/i.test(f) && !/\.t\.jpe?g$/i.test(f)).sort();
const list = files.map((f, i) => {
  const id = String(i + 1).padStart(2, '0');
  const name = f.replace(/\.[^.]+$/, '');
  fs.writeFileSync(path.join(out, `${id}.bin`), seal(fs.readFileSync(path.join(src, f))));
  const th = path.join(src, `${name}.t.jpg`);
  fs.writeFileSync(path.join(out, `${id}.t.bin`), seal(fs.readFileSync(fs.existsSync(th) ? th : path.join(src, f))));
  return { f: id, t: name.replace(/^\d+_/, '').replace(/_/g, ' ') };
});
fs.writeFileSync(path.join(out, 'list.bin'), seal(Buffer.from(JSON.stringify(list), 'utf8')));
fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify({ v: 1, iter: ITER, salt: salt.toString('base64'), n: list.length }));
console.log(`${list.length}장 암호화 → ${out}`);
