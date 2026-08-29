/* ---------- DATA ---------- */
const PROJECTS = [
  {
    key:"francine", title:"Francine's 1st Birthday",
    desc:"A soft, blush-pink celebration design with plush bunny details, made to capture the sweetness of Francine's very first birthday.",
    tags:["Invitation"],
    images:["francine-1.jpg"]
  },
  {
    key:"olivia", title:"Olivia's 1st Birthday",
    desc:"A vibrant floral celebration bursting with cheerful colors, playful details, and the joyful spirit of Olivia's first birthday.",
    tags:["Favor Tags","Party Games"],
      images:["images/o1.jpg","images/o2.jpg","images/o3.jpg","images/o4.jpg","images/o5.jpg"]
  },
  {
    key:"jden1", title:"Jden's 1st Birthday",
    desc:"A playful Mickey Mouse Clubhouse design filled with cheerful colors, fun details, and childhood charm.",
    tags:["Favor Tags","Party Games","Thankyou Games"],
    images:["images/j1.jpg","images/j2.jpg","images/j3.jpg","images/j4.jpg","images/j5.jpg","images/j6.jpg"]
  },
  {
    key:"baptism", title:"Jden's Baptism",
    desc:"A serene hot air balloon design in soft blue shades, capturing a gentle and dreamy celebration of Jden's baptism.",
    tags:["Name Tags","Party Games"],
    images:["images/b1.jpg","images/b2.jpg","images/b3.jpg"]
  },
  {
    key:"maggy", title:"Maggy's 2nd Birthday",
    desc:"A magical Frozen-inspired design in icy blues and soft pastels, capturing the wonder and sweetness of Maggy's second birthday.",
    tags:["Printed Customized Magnets"],
    images:["images/m1.jpg","images/m2.jpg","images/m3.jpg","images/m4.jpg","images/m5.jpg"]
  },
  {
    key:"stella", title:"Stella's 60th Birthday",
    desc:"A warm sunset-inspired design with vibrant tropical tones, capturing the festive and spirited charm of Stella's 60th birthday celebration.",
    tags:["Invitation","Event Signage","Party Favor Tags"],
    images:["images/s1.jpg","images/s2.jpg","images/s3.jpg"]
  },
  {
    key:"wedding", title:"Benly and Sarah Wedding",
    desc:"A timeless black-and-white design, blending classic elegance and refined simplicity to celebrate Benly and Sarah's wedding.",
    tags:["Invitation Set","Favor Tag","Thankyou Card"],
    images:["images/w.jpg","images/w1.jpg","images/w2.jpg","images/w3.jpg"]
  },
  {
    key:"signage", title:"Florante's Event Signage",
    desc:"A vibrant floral design filled with lively colors and joyful details, creating a fresh and welcoming event atmosphere.",
    tags:["Event Signage"],
    images:["images/p1.jpg","images/p2.jpg","images/p3.jpg"]
  },
  {
    key:"cards", title:"Florante Cards",
    desc:"A soft, fuzzy blue floral design, blending delicate blooms with a cozy and charming handmade feel.",
    tags:["Business Cards","Thankyou Card"],
    images:["images/c1.jpg","images/c2.jpg","images/c3.jpg","images/c4.jpg","images/c5.jpg"]
  }
];

const SERVICES = [
  {icon:"\u270E", title:"Social Media Graphics", cat:"Social Media", desc:"Engaging posts, promotional materials, and branded content."},
  {icon:"\u{1F389}", title:"Event & Party Designs", cat:"Event & Party", desc:"Invitations, signage, tags, souvenirs, and themed event materials."},
  {icon:"\u{1F3AF}", title:"Branding & Marketing Materials", cat:"Branding & Marketing", desc:"Logos, business cards, flyers, posters, and other promotional designs."}
];

/* ---------- HELPERS ---------- */
const $app = document.getElementById('app');
const img = k => `<img src="${k}" loading="lazy" alt="">`;

function navHTML(active){
  const items = [["#/portfolio","Portfolio"],["#/services","Services"],["#/about","About"],["#/contact","Contact"]];
  return `
  <nav class="nav" id="nav">
    <a href="#/" class="logo">Sarah Eunice Mulig</a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    <ul id="navList">
      ${items.map(([href,label])=>`<li><a href="${href}" class="${active===label?'active':''}">${label}</a></li>`).join("")}
    </ul>
  </nav>`;
}

function footerHTML(){
  return `
  <section class="cta" id="contact-cta">
    <span class="eyebrow">Get in touch</span>
    <p class="serif" style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.2rem;color:var(--muted);margin-bottom:8px;">Let's work together</p>
    <nav>
      <a href="#/portfolio">Portfolio</a>
      <a href="#/services">Services</a>
      <a href="#/about">About</a>
      <a href="#/contact">Contact</a>
    </nav>
  </section>
  <footer>
    <div>&copy; <span id="year"></span> Sarah Eunice Mulig. All rights reserved.</div>
    <div class="socials">
      <a href="#">Instagram</a>
      <a href="#">Facebook</a>
      <a href="#">LinkedIn</a>
    </div>
  </footer>`;
}

/* ---------- VIEWS ---------- */
function viewHome(){
  return `
  ${navHTML("Portfolio")}
  <section class="hero">
    <span class="eyebrow">Graphic Designer</span>
    <h1>Sarah Eunice Mulig</h1>
    <p class="role">Clean, thoughtful, intentional design</p>
    <p class="bio">I believe good design should be more than just visually appealing — it should have purpose, communicate clearly, and be easy to use. As a Graphic Designer, I focus on creating clean, thoughtful, and functional designs that balance creativity with the needs of the audience. Whether it's for social media, print, or events, I always aim to make every design intentional, practical, and memorable.</p>
    <div class="divider"></div>
  </section>
  <section class="portfolio" id="work">
    <div class="section-head">
      <span class="eyebrow">Selected Work</span>
      <h2>Portfolio</h2>
    </div>
    <div class="grid">
      ${PROJECTS.map(p=>`
        <article class="card" data-key="${p.key}">
          <div class="frame">${img(p.images[0])}</div>
          <div class="cap">${p.title}</div>
          <div class="tag">Gallery</div>
        </article>`).join("")}
    </div>
  </section>
  ${footerHTML()}`;
}

function viewProject(key){
  const p = PROJECTS.find(x=>x.key===key) || PROJECTS[0];
  return `
  ${navHTML("Portfolio")}
  <section class="project-head fade-in">
    <a href="#/portfolio" class="back">&larr; Back to Portfolio</a>
    <h1>${p.title}</h1>
    <p>${p.desc}</p>
    <div class="pills">${p.tags.map(t=>`<span class="pill">${t}</span>`).join("")}</div>
  </section>
  <section class="proj-grid">
    ${p.images.map(k=>`<figure class="fade-in">${img(k)}</figure>`).join("")}
  </section>
  ${footerHTML()}`;
}

function viewServices(){
  return `
  ${navHTML("Services")}
  <section class="services-wrap">
    <span class="eyebrow">What I Offer</span>
    <h1>Services</h1>
    <div class="svc-grid">
      ${SERVICES.map(s=>`
        <div class="fade-in">
          <div class="svc-icon">${s.icon}</div>
          <h3>${s.title}</h3>
          <div class="cat">${s.cat}</div>
          <p>${s.desc}</p>
        </div>`).join("")}
    </div>
    <div class="quote">
      <div class="mark">&ldquo;</div>
      <p>Design with passion, create with purpose.</p>
    </div>
  </section>
  ${footerHTML()}`;
}

function viewAbout(){
  return `
  ${navHTML("About")}
  <section class="about-wrap">
    <div class="avatar">SM</div>
    <h1>Sarah Eunice Mulig</h1>
    <div class="role">Graphic Designer</div>
    <p class="bio">I'm a passionate graphic designer who enjoys creating clean, creative, and meaningful designs for social media, events, and businesses. I love turning ideas into visuals and continuously learning new design skills to improve my work and grow creatively.</p>
  </section>
  <section class="exp">
    <h3>Work Experience</h3>
    <div>
      <div class="exp-row"><span>Provincial Social Welfare and Development Office</span><b>Graphics Designer</b></div>
      <div class="exp-row"><span>Workforyou</span><b>Graphics Design</b></div>
    </div>
  </section>
  ${footerHTML()}`;
}

function viewContact(){
  return `
  ${navHTML("Contact")}
  <section class="contact-wrap">
    <span class="eyebrow">Say Hello</span>
    <h1>Contact</h1>
    <p>I'm always happy to connect. Reach out with questions, ideas, or project inquiries, and I'll get back to you as soon as possible.</p>
    <form class="form-grid" id="contactForm" action="https://formsubmit.co/ajax/sarahmulig22@gmail.com" method="POST">
      <div class="field"><label>First Name</label><input type="text" name="first_name" required></div>
      <div class="field"><label>Last Name</label><input type="text" name="last_name" required></div>
      <div class="field full"><label>Your email</label><input type="email" name="email" required></div>
      <div class="field full"><label>Your message</label><textarea rows="4" name="message" required></textarea></div>
      <div class="field full" style="text-align:center;">
        <button class="submit-btn" type="submit" id="submitBtn">Submit</button>
        <p id="formStatus" style="margin-top:16px;font-size:.85rem;color:var(--muted);"></p>
      </div>
    </form>
    <div class="contact-info">
      <b>Sarah Eunice Mulig</b>
      <p>Sta. Filomena, Dipolog City<br>Zamboanga del Norte, Philippines<br>Phone: 0932&nbsp;453&nbsp;2747<br>sarahmulig23@gmail.com</p>
      <div class="social-row">
        <a href="#" title="Instagram">IG</a>
        <a href="#" title="Facebook">FB</a>
        <a href="#" title="LinkedIn">in</a>
      </div>
    </div>
  </section>
  ${footerHTML()}`;
}

function wireContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = "Sending...";
    status.textContent = "";
    try{
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });
      const data = await res.json().catch(()=>null);
      if(res.ok && data && (data.success === "true" || data.success === true)){
        form.reset();
        status.textContent = "Thank you! Your message has been sent — I'll get back to you soon.";
        status.style.color = "var(--accent)";
      } else {
        status.textContent = "Almost there — check sarahmulig22@gmail.com for a one-time activation email and click the link, then try sending again.";
        status.style.color = "var(--accent)";
      }
    } catch(err){
      status.textContent = "Network error — please email sarahmulig22@gmail.com directly.";
      status.style.color = "var(--accent)";
    } finally {
      btn.disabled = false;
      btn.textContent = "Submit";
    }
  });
}

/* ---------- ROUTER ---------- */
function render(){
  const hash = location.hash || "#/";
  let html;
  if(hash.startsWith("#/project/")){
    html = viewProject(hash.split("/")[2]);
  } else if(hash === "#/services"){
    html = viewServices();
  } else if(hash === "#/about"){
    html = viewAbout();
  } else if(hash === "#/contact"){
    html = viewContact();
  } else {
    html = viewHome();
  }
  $app.innerHTML = html;
  window.scrollTo(0,0);
  document.getElementById('year').textContent = new Date().getFullYear();

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 12));

  const toggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if(toggle){
    toggle.addEventListener('click', () => navList.classList.toggle('open'));
    navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));
  }

  document.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', ()=>{ location.hash = `#/project/${c.dataset.key}`; });
  });

  wireContactForm();

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  document.querySelectorAll('.card').forEach(c => io.observe(c));
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
