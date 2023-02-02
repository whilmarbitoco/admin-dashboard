const app = Vue.createApp({
    data() {
        return {
            state: false,
            profile: [],
            project: [],
            certificate: [],
        };
    },
    methods: {
        logout() {
            window.location.href = "out.html";
        },
        toggleside() {
            this.state = !this.state;
        },
        toggleMenu(p) {
            let item = document.getElementById(p);
            item.style.border = "solid gray 2px";
            setTimeout(function () {
                item.style.border = "none";
            }, 100);
        },
        profileUp(e) {
            e.preventDefault();
            const { title, img } = this.profile;
            if (title) {
                let fileInput = this.$refs.imgAvatar;
                let file = fileInput.files[0];

                this.profile.img = file.name;
                this.profile = [this.profile];
                console.log(this.profile);
            }
        },
        projectUp(e) {
  e.preventDefault();
  const { name, github, demo, language } = this.project;

  if (name && github && demo && language) {
    console.log(this.project);
  }
},

        certificateUp(e) {
            e.preventDefault();
            const { name } = this.certificate;
            if (name) {
                let fileInput = this.$refs.imgCert;
                let file = fileInput.files[0];
                this.certificate.img = file.name;
                console.log(this.certificate);
            }
        },
    },
    created() {
        const data = [
            {
                title: "Web Developer",
                img: "boy.png",
            },
        ];
        this.profile = data;
    },
}).mount("#app");
