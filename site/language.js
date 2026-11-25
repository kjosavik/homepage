const control = document.querySelector('#language-control');
const selector = document.querySelector('#language');
const languageStatus = document.querySelector('#language-status');

// A playful letter substitution, not a translation or a canonical Tengwar mode.
const letters = {
  a: 'e02e e040', b: 'e005', c: 'e002', d: 'e004', e: 'e02e e046',
  f: 'e009', g: 'e007', h: 'e028', i: 'e02e e044', j: 'e006',
  k: 'e003', l: 'e022', m: 'e011', n: 'e010', o: 'e02e e04a',
  p: 'e001', q: 'e037', r: 'e020', s: 'e024', t: 'e000',
  u: 'e02e e04c', v: 'e00d', w: 'e015', x: 'e003 e024',
  y: 'e016', z: 'e026', ø: 'e02e e04a', æ: 'e032',
  ch: 'e002', sh: 'e00a', th: 'e008', ng: 'e013',
};
const glyphs = Object.fromEntries(Object.entries(letters).map(([key, codes]) => [
  key, String.fromCodePoint(...codes.split(' ').map(code => parseInt(code, 16))),
]));

function transcribe(text) {
  return text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/ch|sh|th|ng|[a-zøæ0-9]/g, token =>
      glyphs[token] ?? String.fromCodePoint(0xe070 + Number(token)));
}

function prepareScript() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return /\p{L}|\p{N}/u.test(node.data) &&
        !node.parentElement.closest('#language-control, #language-status, #email-address, script, style')
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    const english = document.createElement('span');
    english.className = 'script-source';
    const script = document.createElement('span');
    script.className = 'script-glyphs';
    script.setAttribute('aria-hidden', 'true');
    script.textContent = transcribe(node.data);
    node.replaceWith(english, script);
    english.append(node);
  }
}

let prepared = false;
let request = 0;
selector.addEventListener('change', async () => {
  const selection = ++request;
  languageStatus.hidden = true;
  if (selector.value === 'en') {
    document.body.classList.remove('black-speech');
    return;
  }
  try {
    const fonts = await document.fonts.load('1em Alcarin', '\ue000');
    if (!fonts.length) throw new Error('Tengwar font not available');
  } catch (error) {
    if (selection !== request) return;
    console.error('Could not load Black Speech lettering.', error);
    selector.value = 'en';
    languageStatus.hidden = false;
    languageStatus.textContent = 'Black Speech lettering could not load. English is still available.';
    return;
  }
  if (selection !== request) return;
  if (!prepared) {
    prepareScript();
    prepared = true;
  }
  document.body.classList.add('black-speech');
});
control.hidden = false;
