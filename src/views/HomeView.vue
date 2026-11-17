<template>
  <div class="container" style="height: 90dvh">
    <div class="container row">
      <img class="avatar m-element" src="@/assets/avatar.png" />
      <div class="text">
        <h1 id="xl">Hi</h1>
        <h1>This is kble</h1>
        <h2>I am a</h2>
        <h2 class="word-wrapper">
          <span class="word red">painter</span>
          <span class="word green">designer</span>
          <span class="word blue">developer</span>
          <span class="word purple">collector</span>
        </h2>
        <p class="homeDesc">
          I do all kind of stuff, mini projects and learn from them.<br />
          Feel free to look around, hope that you would get to know more about me and find something
          useful.
        </p>
      </div>
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
      show: false,
    }
  },
  computed: {
    words() {
      return this.$el.querySelectorAll('.word')
    },
  },
  methods: {
    changeWord() {
      if (this.show === true) {
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
      }
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
    this.show = true
  },
  beforeUnmount() {
    clearInterval(this.changeWord)
    this.show = false
  },
}
</script>

<style scoped>
.footer {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  margin: 0;
  padding: 1rem;
  font-size: 0.7rem;
}
h1 {
  margin: 0px;
}

#xl {
  margin: 2rem 0px 0px 0px;
  font-size: 6rem;
}

h2 {
  margin: 1rem 0px 0px 0px;
}

p {
  margin: 3rem 0px 0px 0px;
  text-align: right;
}

.word-wrapper {
  display: relative;
  top: -50px;
  margin-top: -5px;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 3rem;
}

.homeDesc {
  max-width: 50%;
}

.avatar {
  position: absolute;
  bottom: 0px;
  max-width: 50vw;
  max-height: 95dvh;
}

@media (max-width: 576px) {
  .avatar {
    max-width: 100vw;
    max-height: 45%;
  }
  .text {
    position: absolute;
    top: 0;
    margin: 1rem;
  }
  .word {
    right: 0rem;
  }
  .homeDesc {
    max-width: 90%;
  }
}

@media (max-width: 375px) {
  .avatar {

    max-height: 40%;
  }

  .word {
    right: 1rem;
  }

}

.red {
  color: #ffaeae;
}
.blue {
  color: #aedcff;
}
.purple {
  color: #c5aeff;
}
.green {
  color: #a3fac4;
}
</style>

<style>
.word {
  position: absolute;
  right: 3.5rem;
  width: auto;
  opacity: 0;
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
