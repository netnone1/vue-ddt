<script setup>
</script>

<template>
  <main>
    <div class='grid grid-cols-3 grid-rows-1 gap-3'>
      <div class='col-span-2 p-3'>
        
      </div>
      <div class='bg-white rounded-md my-3 p-3'>
        <swiper class="h-full" :pagination="pagination" :modules="modules">
          <swiper-slide>
            <div>
              <p class="text-center">การใช้พลังงานไฟฟ้า</p>
              <div class="py-3">
                <Energy title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Energy title="อาคาร " value="0" />
              </div>
              <div class="pb-3">
                <Energy title="อาคาร " value="0" />
              </div>
              <div class="pb-3">
                <Energy title="อาคาร " value="0" />
              </div>
              <div class="pb-3">
                <Energy title="อาคาร " value="0" />
              </div>
              <div class="pb-3">
                <Energy title="อาคาร " value="0" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <p class="text-center">อุณหภูมิ</p>
              <div class="py-3">
                <Temperature title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Temperature title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Temperature title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Temperature title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Temperature title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Temperature title="อาคาร" value="0" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <p class="text-center">PM</p>
              <div class="py-3">
                <Pm title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Pm title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Pm title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Pm title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Pm title="อาคาร" value="0" />
              </div>
              <div class="pb-3">
                <Pm title="อาคาร" value="0" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </main>
</template>

<script>
import Pm from '../components/Pm.vue'
import Energy from '../components/Energy.vue';
import Temperature from '../components/Temperature.vue';

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: 'Home',
  components: {
    Pm,
    Energy,
    Temperature,
    Swiper,
    SwiperSlide,
  },
    setup() {
      return {
        pagination: {
          clickable: true,
        },
        modules: [Pagination],
      };
    },
}
</script>
