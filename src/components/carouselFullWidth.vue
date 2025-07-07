<template>
  <div class="carousel-container" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
    <div
      class="carousel"
      :class="{ dragging: isDragging }"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      @mousedown="startDrag"
      @mousemove="handleDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart="startDrag"
      @touchmove="handleDrag"
      @touchend="endDrag"
    >
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <div class="slide-div">
          <img :src="slide.image" :alt="slide.alt" class="slide-image" />
          <div class="slide-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="prev-btn" @click="prevSlide">&#10094;</button>
    <button class="next-btn" @click="nextSlide">&#10095;</button>

    <div class="indicators">
      <div
        class="indicator"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['slides'],
  name: 'FullWidthCarouselComponent',
  data() {
    return {
      currentIndex: 0,
      autoPlayInterval: null,
      isDragging: false,
      startPos: 0,
      currentTranslate: 0,
      prevTranslate: 0,
      animationId: null,
    }
  },
  methods: {
    // Auto-play functionality
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    pauseAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval)
        this.autoPlayInterval = null
      }
    },
    resumeAutoPlay() {
      if (!this.autoPlayInterval) {
        this.startAutoPlay()
      }
    },

    // Navigation functions
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    },
    goToSlide(index) {
      this.currentIndex = index
    },

    // Drag functionality
    getPositionX(event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].pageX
    },
    startDrag(event) {
      this.pauseAutoPlay()
      this.isDragging = true
      this.startPos = this.getPositionX(event)
      this.prevTranslate = this.currentIndex * -100
      this.currentTranslate = this.prevTranslate

      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
        this.animationId = null
      }
    },
    handleDrag(event) {
      if (!this.isDragging) return

      const currentPosition = this.getPositionX(event)
      const diff = currentPosition - this.startPos

      this.currentTranslate = this.prevTranslate + (diff / window.innerWidth) * 100

      // Prevent dragging beyond the first and last slides
      const maxTranslate = (this.slides.length - 1) * -100
      this.currentTranslate = Math.max(maxTranslate, Math.min(0, this.currentTranslate))
    },
    endDrag() {
      if (!this.isDragging) return
      this.isDragging = false

      const movedBy = this.currentTranslate - this.prevTranslate
      const threshold = 30 // percentage moved to trigger slide change

      if (movedBy < -threshold) {
        this.nextSlide()
      } else if (movedBy > threshold) {
        this.prevSlide()
      }

      this.resumeAutoPlay()
    },
  },
  mounted() {
    this.startAutoPlay()
  },
  beforeUnmount() {
    this.pauseAutoPlay()
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  },
}
</script>
<style scoped>
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

.carousel-container {
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  cursor: grab;
}

.carousel.dragging {
  cursor: grabbing;
  transition: none;
}

.slide {
  min-width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 0.5rem;
}

.slide-div {
  min-width: 100%;
  position: relative;
  border-radius: 3rem;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16/9;
  background-color: #ddd;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 40px 20px 20px;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.prev-btn:hover,
.next-btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 4px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: rgba(255, 255, 255, 1);
  transform: scaleX(1.5);
}

@media (max-width: 768px) {
  .prev-btn,
  .next-btn {
    width: 40px;
    height: 40px;
  }

  .slide-content {
    padding: 30px 15px 15px;
  }
}
</style>
