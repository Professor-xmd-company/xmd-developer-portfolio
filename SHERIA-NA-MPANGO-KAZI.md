# 📜 SHERIA ZA KAZI NA MPANGO KAZI — XMD PORTFOLIO WEBSITE

---

## 🔒 SEHEMU YA 1: SHERIA KUU ZA KAZI (ZINGATIA MDA WOTE)

1. **Sheria ya Ulinganifu wa 100% (Pixel-Perfect Copy):**
   - Hakuna kubadilisha layout, rangi, nafasi (spacing), vipimo (sizes), vivuli (glows/shadows), wala mitindo ya maandishi.
   - Kila kitu kinachukuliwa moja kwa moja kutoka kwenye picha za marejeleo (`reference_mobile.png` na `reference_desktop.png`).

2. **Kuanza na Muonekano wa Simu (Mobile View First):**
   - Ujenzi unaanza na Mobile View kwanza ili kuhakikisha kila kipengele kimekaa sawa kabisa kwenye kioo cha simu kabla ya kuhamia Desktop.

3. **Mgawanyo wa Awamu Mbili (Two-Phase Execution):**
   - **Kipande cha Kwanza (Round 1):** Kuanzia ile michirizi ya mawimbi yenye chembechembe za mwanga (wavy particle line) kupanda juu.
     - Navbar / Header (`XMD / DEVELOPER`, kitufe cha `Let's talk ↗`, na menyu ya `☰`).
     - Alama ya salamu (`👋 Hello, I'm 👏`).
     - Kichwa Kikuu (Hero Headline) chenye gradient ya rangi ya neon (`modern web experiences.`).
     - Maelezo mafupi ya utangulizi (sub-headline).
     - Vitufe vya vitendo (`View My Projects ↗` na `Download CV ⤓`).
     - Vitufe vya mitandao ya kijamii (GitHub, X, LinkedIn, Email).
     - Mzunguko wa picha ya mtumiaji (Avatar yenye picha halisi ya `developer.png`) ukiwa na pete ya neon ya rangi mbili (bluu/cyan na machungwa/magenta glow).
     - Kadi inayoelea yenye nyota za kung'aa (`✦ Turning ideas into real products. 🟢`).
     - Michirizi ya mawimbi ya chembechembe za mwanga (Wavy particle mesh ribbon) inayotenganisha Hero na kadi za chini.
   - **Kipande cha Pili (Round 2):** Kuanzia kadi za chini kushuka chini (`ABOUT ME`, `MY SKILLS`, `FEATURED PROJECTS`, na `Footer`).

4. **Kutopush wala Kudeploy Bila Idhini (No Push Without Approval):**
   - Haturuhusiwi kabisa ku-push kwenye GitHub wala ku-deploy kwenye Vercel mpaka mteja (wewe) aone picha ya skrini (screenshot) ya kile kilichotengenezwa na atoe idhini/ruhusa rasmi ndipo tufanye push na deployment.

5. **Picha na Maudhui Halisi:**
   - Kutumia picha halisi ya mtumiaji (`assets/images/developer.png`) kwa ajili ya profile avatar.
   - Hakuna kuweka status bar ya simu ya mfumo wa uendeshaji (kama 9:41, WiFi, betri) kwa sababu hii ni tovuti halisi ya wavuti (website).

---

## 🚀 SEHEMU YA 2: MPANGO KAZI WA AWAMU YA KWANZA (ROUND 1 WORK PLAN)

### Hatua ya 1: Maandalizi ya Picha & Assets
- Kata na kutayarisha picha ya avatar (`developer.png`) iwe na uwiano kamili wa duara.
- Tengeneza nembo ya nyota ya `XMD` (`4-point star SVG`) yenye gradient ya cyan/bluu/zambarau.
- Tengeneza alama za mitandao ya kijamii (GitHub, X, LinkedIn, Mail) katika mfumo wa vector (SVG) safi.
- Kuandaa muundo wa michirizi ya mawimbi (wavy particle mesh) kwa SVG/Canvas yenye gradient ya cyan hadi magenta.

### Hatua ya 2: Ujenzi wa Muundo wa HTML5 & CSS3 Safi
- Kuanzisha muundo wa semantiki ya kisasa yenye CSS Variables kwa ajili ya rangi zote za neon (`#38bdf8`, `#818cf8`, `#c084fc`, `#f43f5e`, `#fb7185`, `#06080a`).
- Kuweka fonti za kisasa zenye usomaji maridadi (Plus Jakarta Sans / Inter).

### Hatua ya 3: Ujenzi wa Navbar (Header)
- Nembo ya `XMD / DEVELOPER`.
- Kitufe cha `Let's talk ↗` chenye mpaka mwembamba wa rangi ya zambarau.
- Menyu ya mistari ya hamburger (`☰`).

### Hatua ya 4: Ujenzi wa Maudhui ya Hero
- Kijisehemu cha `👋 Hello, I'm 👏`.
- Kichwa cha habari kikuu:
  - *"I'm a Software Developer who builds"*
  - *"modern web experiences."* kikiwa na neon gradient ya kuvutia.
- Aya ya maelezo ya kazi na uwezo wa kiteknolojia.
- Vitufe viwili vya vitendo:
  - `View My Projects ↗` (kijalizo cha gradient ya bluu-cyan hadi zambarau na mwanga wa neon).
  - `Download CV ⤓` (kijalizo cheusi chenye mpaka laini wa zambarau).
- Mstari wa alama 4 za mitandao ya kijamii (duara zenye icons nyeupe kwenye kioo cha giza).

### Hatua ya 5: Profile Avatar yenye Pete ya Neon na Kadi ya Sparkles
- Duara kamili ya picha ya mtumiaji (`developer.png`).
- Pete ya neon (Dual-tone neon glowing ring) inayong'aa kwa rangi ya bluu upande wa juu-kushoto na rangi ya moto/magenta upande wa chini-kulia.
- Kadi ya kioo (Glassmorphism badge) inayoelea juu ya picha:
  - *"✦ Turning ideas into real products. 🟢"*

### Hatua ya 6: Michirizi ya Mawimbi ya Mwanga (Wavy Particle Mesh Ribbon)
- Ujenzi wa mstari wa mawimbi yenye nukta/chembechembe zinazowaka (cyan upande wa kushoto, zambarau katikati, na magenta upande wa kulia).

### Hatua ya 7: Jaribio, Ukaguzi na Picha ya Skrini (Screenshot)
- Kufungua kwenye kivinjari cha Chromium kupitia Playwright kwenye kipimo halisi cha simu (mobile viewport).
- Kupiga picha ya skrini (screenshot) yenye usahihi wa hali ya juu.
- Kukuonyesha picha hiyo hapa ili ukague na utoe maoni/kibali kabla hatujagusa GitHub wala Vercel.
