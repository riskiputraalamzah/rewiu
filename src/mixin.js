export default {
  methods: {
    toProfile: () => {
      const profile = document.querySelector("section#profile");
      window.scrollTo(0, profile.offsetTop + 150);
    },
  },
};
