'use strict';
/* 가사 Q 더빙을 비밀번호로 암호화해서 사이트(dub/)에 넣는다
 *  node tools/encrypt-dub.js "<더빙 폴더>" "<비밀번호>" [가수 id = mga]
 *  - 폴더 안 「곡 제목.m4a」 파일을 AES-256-GCM 으로 암호화해 dub/<가수>/<번호>.bin 으로 저장
 *  - 어느 번호가 어느 곡인지(목록)도 암호화해 dub/<가수>/list.bin 에 넣는다 → 비밀번호 없이는 소리도 제목도 알 수 없다
 *  - 키 : PBKDF2(SHA-256, 250,000번) · 브라우저(js/app.js) 가 같은 방식으로 푼다
 *  - 비밀번호를 바꾸려면 같은 명령을 새 비밀번호로 다시 돌리면 된다 (예전 파일은 지워진다)
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const [src, pass, artist = 'mga'] = process.argv.slice(2);
if (!src || !pass) { console.error('사용법 : node tools/encrypt-dub.js "<더빙 폴더>" "<비밀번호>" [가수 id]'); process.exit(1); }
const out = path.join(__dirname, '..', 'dub', artist);
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const ITER = 250000;
const salt = crypto.randomBytes(16);
const key = crypto.pbkdf2Sync(pass, salt, ITER, 32, 'sha256');
// iv(12) + 암호문 + 인증 태그(16) : WebCrypto AES-GCM 이 그대로 풀 수 있는 순서
const seal = (buf) => {
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  return Buffer.concat([iv, c.update(buf), c.final(), c.getAuthTag()]);
};

const files = fs.readdirSync(src).filter((f) => /\.(m4a|mp3|ogg|wav|aac)$/i.test(f)).sort();
const list = files.map((f, i) => {
  const id = String(i + 1).padStart(3, '0');
  fs.writeFileSync(path.join(out, `${id}.bin`), seal(fs.readFileSync(path.join(src, f))));
  return { f: `${id}.bin`, t: f.replace(/\.[^.]+$/, ''), type: /\.mp3$/i.test(f) ? 'audio/mpeg' : 'audio/mp4' };
});
fs.writeFileSync(path.join(out, 'list.bin'), seal(Buffer.from(JSON.stringify(list), 'utf8')));
fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify({ v: 1, iter: ITER, salt: salt.toString('base64'), n: list.length }));
console.log(`${list.length}곡 암호화 → ${out}`);
