<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 90vh"
  >
    <div class="container row">
      <img class="avatar m-element" src="@/assets/avatar.png" />
      <h1>Hi, this is kble</h1>
      <h2>
        I am a
        <span class="word text-success">painter</span>
        <span class="word text-warning">designer</span>
        <span class="word text-info">developer</span>
        <span class="word text-danger">collector</span>
      </h2>
      <p>
        I do all kind of stuff, mini projects and learn from them.<br />
        Feel free to look around, hope that you would get to know more about me and find something
        useful.
      </p>
    </div>
  </div>
  <div class="footer">© 2024 | Caleb Cheng | All rights reserved</div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      wordArray: [],
      currentWord: 0,
      cw: null,
      nw: null,
    }
  },
  computed: {
    words() {
      return this.$el.querySelectorAll('.word')
    },
  },
  methods: {
    changeWord() {
      console.log(this.currentWord)
      let cw = this.wordArray[this.currentWord]
      let nw =
        this.currentWord == this.words.length - 1
          ? this.wordArray[0]
          : this.wordArray[this.currentWord + 1]
      for (var i = 0; i < cw.length; i++) {
        this.animateLetterOut(cw, i)
      }

      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind'
        nw[0].parentElement.style.opacity = 1
        this.animateLetterIn(nw, i)
      }

      this.currentWord = this.currentWord == this.wordArray.length - 1 ? 0 : this.currentWord + 1
    },

    animateLetterOut(cw, i) {
      setTimeout(function () {
        cw[i].className = 'letter out'
      }, i * 80)
    },

    animateLetterIn(nw, i) {
      setTimeout(
        function () {
          nw[i].className = 'letter in'
        },
        340 + i * 80,
      )
    },

    splitLetters(word) {
      var content = word.innerHTML
      word.innerHTML = ''
      var letters = []
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span')
        letter.className = 'letter'
        letter.innerHTML = content.charAt(i)
        word.appendChild(letter)
        letters.push(letter)
      }

      this.wordArray.push(letters)
    },
  },
  mounted() {
    this.words[this.currentWord].style.opacity = 1
    for (var i = 0; i < this.words.length; i++) {
      this.splitLetters(this.words[i])
    }
    console.log(this.wordArray)
    this.changeWord()
    setInterval(this.changeWord, 4000)
  },
}
</script>

<style scoped>
.footer {
  font-size: 0.7rem;
  padding: 1rem;
  margin: 0;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

.avatar {
  max-width: 150px;
  border-radius: 50%;
}
</style>

<style>
.word {
  position: absolute;
  width: 220px;
  opacity: 0;
  margin-left: 1vh;
}

.letter {
  display: inline-block;
  position: relative;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
