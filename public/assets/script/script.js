
const app = Vue.createApp({
  data() {
    return {
      name: `I'm <b>Jishith</b>`,
      title: "Frontend Developer",
      details: "Building clean, responsive, and user-friendly websites.",
      detailsPc: 'Building clean, responsive, and user-friendly websites that not only meet client needs but also deliver exceptional user experiences. With a focus on modern design principles and best coding practices, I create websites that are visually appealing, functional, and easy to navigate across all devices',
      sub_details: "I have a strong background in frontend development and design, focusing on creating practical and visually appealing digital experiences. I’m skilled at turning ideas into functional websites that work across all devices.",
      aboutme_discription: `<b>Frontend Developer</b><br><br>Hi, I’m <u>Jishith MP</u>. I recently graduated with a Bachelor of Commerce and have always been passionate about technology and web development. During my studies, I took on the role of NSS leader in high school, which helped me develop my leadership skills and work well with others.<br>As a frontend web developer, I specialize in HTML, CSS, JavaScript, Vue.js, Bootstrap, and jQuery. I love building clean, responsive websites that provide great user experiences. I’m always eager to learn new skills and take on exciting challenges in the world of web development.<br><br><b>Email</b>: jishithmp534@gmail.com<br>place: Kannur, Kerala-670571<br><strong>Thanks for visiting my portfolio!</strong><div class="d-flex align-items-center flex-row gap-3 about-btn"><a href="mailto:jishithmp534@gmail.com"><button class="animated-button"><span>Hire Me</span><span></span></button></a><a href="assets/pdf/Jishith_MP_Resume.pdf" download><button id="cvdow" v-on:click="downloadcv()">Resume</button></a></div>
        </div>`,
      work_discription: 'Here are the projects where I demonstrate my coding skills, creativity, and ability to build interactive, user-friendly designs. Each project showcases my expertise in both functionality and UI/UX design!',
      project_name1: 'Random BG Generator',
      project_description1: 'This project generates random background colors using HTML, CSS, and JavaScript.',
      project_name2: 'SwiftAI',
      project_description2: 'An AI tool that generates website source code based on user inputs and queries with ease.',
      project_name3: 'CloneAI',
      project_description3: 'A text-based AI chatbot using the OpenAI API to generate responses based on user queries.',
      project_name4: 'Onam Pookalam',
      project_description4: 'A floral design created entirely in HTML, CSS, and JS for the UPCODE 2024 Onam Pookalam Coding Challenge, where I was the winner.',
      project_name5: 'PSCphotopro',
      project_description5: 'A website that creates Kerala PSC photographs and autographs based on specific requirements and conditions.',
      edu_discription: 'My journey in education has been a significant part of my growth, shaping my curiosity and passion for learning.',
      edu1_courseName: 'Bachelor of Commerce (Bcom)',
      edu1_institutionName: 'Collage of commerce, Kannur, Kerala',
      edu1_completedYearAndStatus: '2022 - 2025 | <b style="color: red;">Not completed',
      edu2_courseName: 'Higher secondary',
      edu2_institutionName: 'Aroli Govt higher secondary school, Kannur, Kerala',
      edu2_completedYearAndStatus: '2020 - 2022 | <b style="color: green;">completed</b>',
      edu2_role: 'Role: NSS Leader',
      edu3_courseName: 'High school',
      edu3_institutionName: 'Pallikunnu Govt high school, Kannur, Kerala',
      edu3_completedYearAndStatus: '2017 - 2020 | <b style="color: green;">completed</b>',
      c1_certificate_Name: 'NSS Leader',
      c1_certificate_discription: 'As an NSS Leader, I organized community service projects, fostering teamwork and social responsibility among peers. I coordinated events focused on cleanliness and awareness, enhancing community engagement and leadership skills.',
      c2_certificate_name: 'Frontend development',
      c2_certificate_discription: 'Completed an intensive 2-week bootcamp focused on frontend development, covering key technologies such as HTML, CSS, JavaScript and Bootstrap. Gained hands-on experience in building responsive web applications and enhancing user interfaces.'
    };
  },
  methods: {
  
showAside() {
  $('#nav').removeClass('d-none').addClass('d-sm-block animate__animated animate__bounceInRight');
  $('body').addClass('no-scroll');
},

hideAside() {
  $('#nav').addClass('animate__animated animate__bounceOutUp');
  $('body').removeClass('no-scroll');
  setTimeout(() => {
    $('#nav').addClass('d-none').removeClass('animate__bounceOutUp');
  }, 500);
},
    slideRight() {
      currentIndex = (currentIndex + 1) % images.length;
      updateImages();
    },
    slideLeft() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImages();
    },
    redirectUrl(url) {
      window.open(url , "blank");
    },
    asideClick() {
      $('aside').addClass('animate__animated animate__bounceOutUp');
      $('body').removeClass('no-scroll');
      setTimeout(() => {
        $('aside').addClass('d-none').removeClass('animate__bounceOutUp');
      }, 500);
    }
  }
});
app.mount('#app');