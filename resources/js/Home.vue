<template>
    <div class="grid grid-cols-2 bg-red-300 md:mx-36"> <!--content wrapper-->
        <div class="col-span-2 bg-yellow-100 my-8">
            <h1 class="text-4xl font-semibold">Notes App</h1>
        </div>

        <main class="bg-blue-200 col-span-2 grid grid-cols-4">
            
            <div class="col-span-1 bg-orange-600 h-screen overflow-y-scroll">                

                <div class="card shadow-lg hover:scale-105 transition ease-out duration-200 bg-slate-400 rounded m-2 p-2">
                    <div>
                        <button class="bg-white w-full h-8">New Note</button>
                    </div>                
                </div>

                <div v-for="index in 100" :key="index">
                    <NoteCard />
                </div>

            </div>

            <div class="col-span-3 bg-pink-300">
                <div>
                    <input type="text" value="2222" class="text-4xl w-full">
                </div>
                <div>
                    <textarea name="" id="" cols="160" rows="20" class="w-full"></textarea>
                </div>         
                <div class="flex justify-between bg-yellow-800">
                    <div class="bg-slate-400">
                        150 characters left
                    </div>
                    <div class="mx-2">
                        <button class="mx-2 bg-white">delete</button>
                        <button class="mx-2 bg-white">update</button>
                    </div>               
                </div>       
            </div>

        </main>
    </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'

export default {
  name: 'Home',
  components: {
    NoteCard
  }
}
</script>

<style>

</style>