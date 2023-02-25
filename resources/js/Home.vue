<template>
    <div class="grid grid-cols-2 md:mx-36"> <!--content wrapper-->
        <div class="col-span-2 my-8">
            <h1 class="text-4xl font-semibold">Notes App</h1>
        </div>

        <main class="col-span-2 grid grid-cols-4">
            
            <div class="col-span-1 h-screen overflow-y-scroll">                

                <div class="card shadow-lg hover:scale-105 transition ease-out duration-200 bg-yellow-600 rounded m-2 p-2">
                    <div>
                        <input type="text" name="" id="" placeholder="Title" class="w-full text-lg border-b-2 mt-2 pl-1">
                    </div>       
                    <div>
                        <button class="bg-slate-200 w-full h-8 mt-2 hover:border-b-2 border-black" @click="handleNewNote">Add Note</button>
                    </div>                
                </div>

                <!-- <div v-for="index in 100" :key="index">
                    <NoteCard />
                </div> -->
                <div v-for="note in notes">
                    <NoteCard :note="note" />
                </div>

            </div>

            <div class="col-span-3">
                <div>
                    <input type="text" name="title" ref="input" v-model="title" class="text-4xl w-full border-b-2 pl-2">
                </div>
                <div>
                    <textarea name="note" id="" v-model="note" cols="160" rows="20" class="w-full pl-2" @input="handleNoteChange">{{ note }}</textarea>
                </div>         
                <div class="flex justify-between">
                    <div class="">
                        {{ maxCharacters - characterCounter }} characters left
                    </div>
                    <div class="mx-2">
                        <button class="mx-2 bg-slate-200 h-8 mt-2 px-2 hover:border-b-2 border-black">Delete</button>
                        <button class="mx-2 bg-slate-200 h-8 mt-2 px-2 hover:border-b-2 border-black">Update</button>
                    </div>               
                </div>       
            </div>

        </main>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import NoteCard from './components/NoteCard.vue'
import useNotes from './composables/notes'

export default {
  name: 'Home',
  components: {
    NoteCard
  },
  setup(){
    const {notes, getNotes} = useNotes()

    onMounted(getNotes);

    const title = ref('')
    const note = ref('')
    const maxCharacters = 255
    let characterCounter = ref(0)

    const input = ref(null)

    const clearNote = ()=>{
        title.value = ''
        note.value = ''
    }

    const handleNewNote = ()=>{
        clearNote()
        input.value.focus()
    }

    const handleNoteChange = ()=>{
        characterCounter.value = note.value.length
        if(characterCounter.value > maxCharacters){
            note.value = note.value.slice(0, -1)
            characterCounter.value = note.value.length
        }
    }

    return {
        handleNewNote,
        handleNoteChange,
        title,
        note,
        characterCounter,
        maxCharacters,
        input,
        notes
    }
  }
}
</script>

<style>

</style>