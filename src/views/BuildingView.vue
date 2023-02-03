<template>
  <div class="building">
    <div class='grid grid-cols-4 grid-rows-8 gap-3'>
      <div class='bg-white rounded-md row-span-6 p-3'>
        <p class='text-center pb-3'>การใช้ไฟฟ้ารายชั้น</p>
        <div class='pb-3'>
          <Energy title='ชั้น 1' value='0' />
        </div>
        <div class='pb-3'>
          <Energy title='ชั้น 2' value='0' />
        </div>
        <div class='pb-3'>
          <Energy title='ชั้น 3' value='0' />
        </div>
        <div class='pb-3'>
          <Energy title='ชั้น 4' value='0' />
        </div>
        <div class='pb-3'>
          <Energy title='ชั้น 5' value='0' />
        </div>
        <div class='pb-3'>
          <Energy title='ชั้น 6' value='0' />
        </div>
        <div class='pb-3'>
          <Energy title='ชั้น 7' value='0' />
        </div>
        <div class='pb-3'>
          <Energy title='ชั้น 8' value='0' />
        </div>
        <Energy title='ลิฟต์' value='0' />
      </div>
      <div class='bg-white rounded-md col-span-2 row-span-1 p-3'>
        <div class='flex justify-center cursor-pointer'>
          <p class='pr-2'>อาคาร</p>
          <!-- <Image class='w-4' alt='' src={DropdownSvg} /> -->
        </div>
      </div>
      <div class='bg-white rounded-md row-span-4 p-3'>
        <swiper class="h-full" :pagination="pagination" :modules="modules">
          <swiper-slide>
            <div>
              <p class='text-center'>การใช้พลังงานไฟฟ้า 1 วัน</p>
              <!-- <BarChart label='1,2,3,4' dataenergy='1,2,3,4' datasolar='1,2,3,4' /> -->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <p class='text-center'>การใช้พลังงานไฟฟ้า 7 วัน</p>
              <!-- <BarChart label='1,2,3,4' dataenergy='1,2,3,4' datasolar='1,2,3,4' /> -->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <p class='text-center'>การใช้พลังงานไฟฟ้า 1 เดือน</p>
              <!-- <BarChart label='1,2,3,4' dataenergy='1,2,3,4' datasolar='1,2,3,4' /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class='col-span-2 row-span-6 p-3'>
        <Image class='rounded-md m-auto' alt='' src={BuildingImage} />
      </div>
      <div class='bg-white rounded-md row-span-4 p-3'>
        <p class='text-center'>ลักษณะการใช้งานพื้นที่รวม</p>
        <!-- <DoughnutChart label='Outlet,Light,Aircon' data='6,5,4' /> -->
      </div>
      <div class='bg-white rounded-md row-span-2 p-3'>
        <div class='pb-3'>
          <Temperature title='อุณหภูมิ' value='25' />
        </div>
        <Pm title='PM' value='0' />
      </div>
    </div>
  </div>
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