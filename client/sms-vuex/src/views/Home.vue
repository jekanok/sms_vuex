<template>
  <div>
    <input type="tel" v-mask="'+380 (##) ## ## ###'" v-model="tel">
    <br>
    <textarea v-model="messages"></textarea>
    <br>
    <input type="submit" value="Send" @click="Send">
    {{tell}}
  </div>
</template>

<script>
// @ is an alias to /src
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      tel: null,
      messages: null
    };
  },
  methods: {
    Send(e) {
      e.preventDefault();
      const date = {
        telephone: this.tel,
        messages: this.messages
      };
      this.$store.dispatch("newSend", date);
      console.log(date);
    }
  },
  computed: {
    tell() {
      return this.$store.getters.getsend;
    }
  }
};
</script>
