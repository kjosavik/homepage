# Homepage design brief

**Direction:** A spoof SaaS landing page up top; a serious, easy-to-skim CV below. The jokes are in the packaging, not the work history.

## Layout

1. **Header:** domain name on the left, CV and Contact links and a globe-marked language selector on the right. English is the default. Black Speech renders the page copy with stylized Tengwar lettering rather than translating it. The selector, screen-reader text, and printed CV stay in English.
2. **Banner:** “Enterprise-grade prioritization. Now with fewer priorities.”
3. **Hero:** name, current role, two short lines of copy, and a prominent “Read the CV” link. Portrait on the right at desktop widths, stacked on mobile. Keep the hero compact enough that the logo section starts to appear on a typical desktop screen.
4. **Organization grid:** Employers, Consulting clients, and Service and volunteering. Keep the logos still; use text where artwork isn't available. Every item jumps to its exact CV entry. Highlight the destination to show where the link landed.
5. **Testimonials:** A horizontal quote strip loops continuously. Dragging, swiping, or using arrow keys changes the position without stopping the loop. Reduced motion uses a manually scrollable strip instead.
6. **CV:** Dates on the left and roles on the right. Nest consulting clients under KodeWorks. List the full-time Forsvaret role under Experience and the part-time Home Guard roles under Service and volunteering. Stack dates above roles on mobile. No tabs or accordions. In print, hide the banner, logo grid, and ticker.
7. **Side quests:** Six achievement cards after the CV, before Contact. The Little Rocket Man card hides a garden gnome that triggers a game-style achievement toast. Hide the cards when printing the CV.
8. **Contact and footer:** Put the selectable email address and its two labeled icon controls in one bordered group, beside LinkedIn and GitHub. Let the profile links wrap on narrow screens. Keep the address in Latin characters in Black Speech mode, and add the home-server joke after migration.

## Visual direction

- Use a navy hero, warm off-white CV, and a muted blue accent. Keep the banner lighter than the main button and use navy text on both.
- Use oversized headings, generous section spacing, and a simple system font stack. Keep the CV quieter than the hero.
- Place official marks on a neutral background. Respect clear space and don't recolor the artwork just to make the row match.

## How to iterate with Copilot

1. **Prototype in the browser, not in a design export.** Build a small, responsive HTML/CSS prototype with the real copy, portrait, and text logo placeholders. Start with the header, hero, logo grid, and first CV entry. Keep it disposable until the layout feels right.
2. **Compare one visual decision at a time.** Use the VS Code browser to review desktop and mobile screenshots. Try a bolder banner or quieter hero by changing a few CSS variables, not by regenerating the page. Annotated screenshots are useful feedback for Copilot.
3. **Finish the behavior after choosing a direction.** Add all CV entries and replace placeholders with cleared logos. Check keyboard navigation, anchor landing, motion preferences, narrow screens, and print in the browser before deployment.

A Figma mockup is optional if you want to explore directions without code. For one static page, the browser prototype is a better first pass: we can see the real wrapping, jumps, and motion, and keep the code if the layout works.
