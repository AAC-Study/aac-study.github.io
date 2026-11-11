window.GAME = {
  id: 'hex', list: 'уроки 29.10 и 05.11 · группы по 3 и по 4', emoji: '🔤', title: '8-ичная и 16-ричная',
  intro: 'Уроки 29.10 и 05.11. Задание 1 экзамена: таблица 10 · 2 · 8 · 16.<div class="he">השלם את הטבלה = заполни таблицу</div>',
  learn: [
    { t: 'card', title: 'Цифры', html: '<div class="rule"><span class="m">8-ичная</span>цифры 0–7</div><div class="rule"><span class="m">16-ричная</span>0–9 и буквы</div><div class="rule"><span class="m">A=10 B=11 C=12</span></div><div class="rule"><span class="m">D=13 E=14 F=15</span></div>' },
    { t: 'choice', q: '<b class="m">C</b> = ?', opts: ['12', '13', '11'], a: 0, why: 'A=10, B=11, C=12' },
    { t: 'card', title: '2 → 8 и 2 → 16: группы', html: 'Делим двоичное число на группы <b>справа</b>:<div class="rule">в 8-ичную: по <b class="y">3</b>, веса 4 2 1</div><div class="rule">в 16-ричную: по <b class="y">4</b>, веса 8 4 2 1</div>Не хватает цифр слева → дописываем нули.' },
    { t: 'groups', bin: '10011', base: 8, why: 'Как на уроке: 10011₂ = 23₈' },
    { t: 'groups', bin: '10100', base: 16, why: '20 = 10100₂ = 14₁₆' },
    { t: 'groups', bin: '110101', base: 8, why: '110101₂ = 65₈ (на уроке это 53)' },
    { t: 'groups', bin: '110101', base: 16, why: '110101₂ = 35₁₆' },
    { t: 'card', title: '16 → 2', html: 'Каждую цифру пишем 4 битами:<br><span class="m">A1C</span> → <span class="m">1010 0001 1100</span><br>8 → 2: каждую цифру 3 битами.' },
    { t: 'fill', q: '<b class="m">A</b> = 10. Запиши 4 битами (8 4 2 1):', answer: '1010', keys: 'b', why: '10 = 8 + 2 → 1010' },
    { t: 'fill', q: '<b class="m">C</b> = 12. Запиши 4 битами:', answer: '1100', keys: 'b', why: '12 = 8 + 4 → 1100' },
    { t: 'card', title: '16 → 10 и 8 → 10', html: 'Цифра × вес разряда.<div class="rule">веса 16-ричной: 1, 16, 256, 4096</div><div class="rule">веса 8-ичной: 1, 8, 64, 512</div><span class="m">A1C</span> = 10 × 256 + 1 × 16 + 12 × 1 = 2588<br><span class="m">65₈</span> = 6 × 8 + 5 = 53' },
    { t: 'type', q: '<b class="m">65₈</b> → десятичная', answer: '53', keys: 'd', why: '6 × 8 + 5 = 53' },
    { t: 'type', q: '<b class="m">2F₁₆</b> → десятичная', answer: '47', keys: 'd', why: '2 × 16 + 15 = 47', hint: 'F = 15. 2 × 16 + 15' },
    { t: 'groups', bin: '101000011100', base: 8, q: 'A1C в 8-ичную: через двоичную. A1C = 1010 0001 1100. Теперь группы по 3:', why: 'A1C₁₆ = 5034₈. Проверка: 5 × 512 + 3 × 8 + 4 = 2588 ✅' },
    { t: 'card', title: '10 → 16', html: 'Проще через двоичную: 20 → 10100 → 0001 0100 → <b class="m g">14</b>.<br>Или делим на 16: 2588 : 16 = 161, ост. 12 (C); 161 : 16 = 10, ост. 1; 10 = A → снизу вверх <b class="m g">A1C</b>.' }
  ],
  arcade: { name: 'Ломай блоки', emoji: '🧱', sub: 'hex и 8-ичная на скорость', style: 'blocks', gen: function (lv) { return GEN.hex(lv); } }
};
