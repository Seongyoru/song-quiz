'use strict';
/* 단체 사진용 배경 이미지를 비밀번호로 암호화해서 사이트(bg/)에 넣는다
 *  node tools/encrypt-bg.js "<JPG 폴더>" "<비밀번호>"         → bg/ 를 새로 만든다 (예전 파일은 지워짐)
 *  node tools/encrypt-bg.js --add "<JPG 폴더>" "<비밀번호>"   → 지금 있는 그림 뒤에 이어 붙인다 (예전 파일은 그대로)
 *  - 폴더 안 「이름.jpg」(크게) 와 「이름.t.jpg」(고르기 칸에 쓰는 작은 그림) 를 짝으로 읽는다
 *  - 둘 다 AES-256-GCM 으로 암호화해 bg/<번호>.bin · bg/<번호>.t.bin 으로 저장, 이름 목록은 bg/list.bin
 *  - 키 : PBKDF2(SHA-256, 250,000번) · 더빙(tools/encrypt-dub.js) 과 같은 방식, 브라우저(js/app.js) 가 푼다
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const args = process.argv.slice(2);
const add = args[0] === '--add'; if (add) args.shift();
const [src, pass] = args;
if (!src || !pass) { console.error('사용법 : node tools/encrypt-bg.js [--add] "<JPG 폴더>" "<비밀번호>"'); process.exit(1); }
const out = path.join(__dirname, '..', 'bg');

const ITER = 250000;
let salt; let list = [];
if (add) {
  const meta = JSON.parse(fs.readFileSync(path.join(out, 'meta.json'), 'utf8'));
  salt = Buffer.from(meta.salt, 'base64');
} else {
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  salt = crypto.randomBytes(16);
}
const key = crypto.pbkdf2Sync(pass, salt, ITER, 32, 'sha256');
const seal = (buf) => {
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  return Buffer.concat([iv, c.update(buf), c.final(), c.getAuthTag()]);
};
if (add) {
  // 지금 목록을 풀어 본다 (비밀번호가 다르면 여기서 멈춤)
  const b = fs.readFileSync(path.join(out, 'list.bin'));
  const d = crypto.createDecipheriv('aes-256-gcm', key, b.subarray(0, 12));
  d.setAuthTag(b.subarray(b.length - 16));
  try { list = JSON.parse(Buffer.concat([d.update(b.subarray(12, b.length - 16)), d.final()]).toString('utf8')); }
  catch (e) { console.error('비밀번호가 지금 bg/ 와 맞지 않아요'); process.exit(1); }
}

const start = list.length;
const files = fs.readdirSync(src).filter((f) => /\.jpe?g$/i.test(f) && !/\.t\.jpe?g$/i.test(f)).sort();
files.forEach((f, i) => {
  const id = String(start + i + 1).padStart(2, '0');
  const name = f.replace(/\.[^.]+$/, '');
  fs.writeFileSync(path.join(out, `${id}.bin`), seal(fs.readFileSync(path.join(src, f))));
  const th = path.join(src, `${name}.t.jpg`);
  fs.writeFileSync(path.join(out, `${id}.t.bin`), seal(fs.readFileSync(fs.existsSync(th) ? th : path.join(src, f))));
  list.push({ f: id, t: name.replace(/^\d+_/, '').replace(/_/g, ' ') });
});
fs.writeFileSync(path.join(out, 'list.bin'), seal(Buffer.from(JSON.stringify(list), 'utf8')));
fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify({ v: 1, iter: ITER, salt: salt.toString('base64'), n: list.length }));
console.log(`${files.length}장 암호화 (모두 ${list.length}장) → ${out}`);
